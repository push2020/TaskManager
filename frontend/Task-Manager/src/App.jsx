import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Admin/Dashboard";
import SingUp from "./pages/Auth/SingUp";
import CreateTask from "./pages/Admin/CreateTask";
import ManageTasks from "./pages/Admin/ManageTasks";
import ManageUsers from "./pages/Admin/ManageUsers";
import PrivateRoute from "./routes/PrivateRoute";
import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/MyTasks";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />

          <Route
            element={<PrivateRoute allowedRoles={["admin"]}></PrivateRoute>}
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          <Route
            element={<PrivateRoute allowedRoles={["user"]}></PrivateRoute>}
          >
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route
              path="/user/task-details/:id"
              element={<ViewTaskDetails />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
