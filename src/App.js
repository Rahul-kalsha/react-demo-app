import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useNavigate,
  useRoutes
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import NavBar from './Components/NavBar';

const RouteData = () => {
  let routes = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      // Nested routes use a children property, which is also
      // the same as <Route>
      children: [
        // { path: ":id", element: <Invoice /> },
        // { path: "sent", element: <SentInvoices /> },
      ],
    },
    // Not found routes work as you'd expect
    // { path: "*", element: <NotFound /> },
  ]);
  return routes;
};
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <RouteData />
        </BrowserRouter>
      </div>
      {/* <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" render={() => <Navigate to="/login" replace />} element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div> */}
    </>
  );
}

export default App;
