using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

public class ChatHub : Hub
{
    private static Dictionary<string, string> _connectedCustomers = new Dictionary<string, string>(); // Lưu khách hàng đã kết nối

    // Khách hàng gửi ID của mình khi kết nối đến Hub
    public async Task SendCustomerIdToAdmin(string customerId)
    {
        if (!_connectedCustomers.ContainsKey(Context.ConnectionId))
        {
            _connectedCustomers[Context.ConnectionId] = customerId;
            await Clients.Group("Admin").SendAsync("ReceiveCustomerId", customerId); // Gửi ID khách hàng cho admin
        }
    }

    // Khách hàng gửi tin nhắn tới admin
    public async Task SendMessageFromCustomer(string customerId, string message)
    {
        // Gửi tin nhắn tới nhóm admin
        await Clients.Group("Admin").SendAsync("ReceiveMessage", customerId, message);
    }

    // Admin gửi tin nhắn đến khách hàng
    public async Task SendMessageToCustomer(string customerId, string message)
    {
        var connectionId = GetConnectionIdByCustomerId(customerId);
        if (connectionId != null)
        {
            await Clients.Client(connectionId).SendAsync("ReceiveMessage", "Admin", message); // Gửi tin nhắn cho khách hàng cụ thể
        }
    }

    // Lấy ID kết nối của khách hàng dựa trên customerId
    private string GetConnectionIdByCustomerId(string customerId)
    {
        foreach (var customer in _connectedCustomers)
        {
            if (customer.Value == customerId)
            {
                return customer.Key;
            }
        }
        return null;
    }

    // Xử lý khi khách hàng hoặc admin ngắt kết nối
    public override Task OnDisconnectedAsync(Exception exception)
    {
        if (_connectedCustomers.ContainsKey(Context.ConnectionId))
        {
            _connectedCustomers.Remove(Context.ConnectionId);
        }
        return base.OnDisconnectedAsync(exception);
    }

    // Xử lý khi admin kết nối
    public override async Task OnConnectedAsync()
    {
        var userId = Context.User?.Identity?.Name ?? "Admin";

        if (userId == "Admin")
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Admin"); // Thêm admin vào nhóm
        }

        await base.OnConnectedAsync();
    }
}