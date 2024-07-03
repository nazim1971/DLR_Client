import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Auth/AuthProvider";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <AuthProvider>
     <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
    <Toaster/>
  </QueryClientProvider>
  </AuthProvider>
);
