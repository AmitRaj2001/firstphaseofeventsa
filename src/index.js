import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthForm from './pages/AuthForm';
import HomePage from './pages/HomePage';
import WorkSpace from './components/WorkSpace'; // Import WorkSpace component
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/log_in",
    element: <AuthForm />,
  },
  {
    path: "/sign_up",
    element: <AuthForm />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    // Capture dynamic event name from the URL
      path: "/workspace/:eventName/*",
      element: <WorkSpace />,
      children: [
        { path: "bulletins", element: <WorkSpace /> },
        { path: "guests", element: <WorkSpace /> },
        { path: "newchecklist", element: <WorkSpace /> },
        { path: "communications", element: <WorkSpace /> },
      ],
  },
  {
    path: "/check_list",
    element: <HomePage />,
  },
  {
    path: "/guest_manager",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <div>404 Page Not Found</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
