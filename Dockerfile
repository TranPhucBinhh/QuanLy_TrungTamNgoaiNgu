# Use the official .NET SDK image to build the project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy the .csproj file and restore dependencies
COPY ["api/api.csproj", "api/"]
RUN dotnet restore "api/api.csproj"

# Copy the entire API source code
COPY . .

# Publish the application to the /app/publish directory
RUN dotnet publish "api/api.csproj" -c Release -o /app/publish

# Build a runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Copy the published files from the build stage
COPY --from=build /app/publish .

# Set the entry point for the application
ENTRYPOINT ["dotnet", "api.dll"]
