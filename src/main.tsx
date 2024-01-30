import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/router";

interface RouterProvider {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const App = lazy(() => import("../src/App"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}>
        <Suspense>
          <App />
        </Suspense>
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
