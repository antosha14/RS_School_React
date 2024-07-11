import { MainPage, PageNotFoundPage } from "./views";
import { ErrorBoundary, DetailedCard } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { detailedDataApiCall } from "./services/detailedDataApiCall";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <PageNotFoundPage />,
    children: [
      {
        path: "/details/:uid",
        element: <DetailedCard />,
        loader: detailedDataApiCall,
      },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router}></RouterProvider>
    </ErrorBoundary>
  );
}

export default App;
