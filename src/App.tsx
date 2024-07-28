import { MainPage, PageNotFoundPage } from "./views";
import { ErrorBoundary, DetailedCard } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/details/:uid",
        element: <DetailedCard />,
      },
    ],
  },
  { path: "*", element: <PageNotFoundPage></PageNotFoundPage> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
