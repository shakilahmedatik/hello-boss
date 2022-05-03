import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import PassReset from "./pages/Authentication/PassReset";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Statistics from "./pages/Dashboard/Statistics";
import CreateCourse from "./pages/CourseManagement/CreateCourse";
import CourseList from "./pages/CourseManagement/CourseList";
import CreateAssignment from "./pages/AssignmentManagement/CreateAssignment";
import AssignmentList from "./pages/AssignmentManagement/AssignmentList";
import CreateEmployee from "./pages/EmployeeManagement/CreateEmployee";
import EmployeeList from "./pages/EmployeeManagement/EmployeeList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Statistics />} />
          <Route path="create-course" element={<CreateCourse />} />
          <Route path="course-list" element={<CourseList />} />
          <Route path="create-assignment" element={<CreateAssignment />} />
          <Route path="assignment-list" element={<AssignmentList />} />
          <Route path="create-employee" element={<CreateEmployee />} />
          <Route path="employee-list" element={<EmployeeList />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset" element={<PassReset />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
