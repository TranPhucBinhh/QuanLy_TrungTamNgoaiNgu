// src/main.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"; // Nhập file CSS để áp dụng kiểu cho ứng dụng
import App from "./App"; // Nhập component App
import CourseDetail from "./pages/CourseDetail"; // Nhập component CourseDetail
import CourseCreate from "./pages/CourseCreate";
import CourseRegistrationPopup from "./components/CourseRegistrationPopup";
import AdminDashboard from "./AdminDashboard";
import Dashboard from "./student/Dashboard";
import AdminChat from "./components/AdminChat";

// Tạo router với các route cần thiết
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Trang chính với danh sách khóa học
  },
  {
    path: "/Course", //  trang danh sách khóa học
    element: <App />, 
  },
  {
    path: "/Course/:id", // Trang chi tiết khóa học
    element: <CourseDetail />, // Hiển thị CourseDetail cho khóa học có id tương ứng
  },
  {
    path: "/CourseCreate", // Trang tạo khóa học
    element: <CourseCreate />, // Hiển thị trang CourseCreate
  },
  {
    path: "/SignUp/:id", // Trang tạo khóa học
    element: <CourseRegistrationPopup />, // Hiển thị trang CourseCreate
  },
  {
    path: "/AdminDashboard/*", 
    element: <AdminDashboard/>, 
  },
  {
    path: "/StudentDashboard/*", 
    element: <Dashboard/>, 
  },

]);

// Render ứng dụng
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
