import { MainLayout } from "@components/MainLayout/MainLayout";
import { MainPage } from "@pages/MainPage";
import { PageNotFoundPage } from "@pages/PageNotFoundPage";
import { ControlledForm } from "@pages/ControlledForm";
import { UncontrolledForm } from "@pages/UncontrolledForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        errorElement: <div>Error</div>,
      },
      {
        path: "/controlled",
        element: <ControlledForm />,
        errorElement: <div>Error</div>,
      },
      {
        path: "/uncontrolled",
        element: <UncontrolledForm />,
        errorElement: <div>Error</div>,
      },
      { path: "*", element: <PageNotFoundPage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}
