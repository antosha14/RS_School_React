import { MainPage, PageNotFoundPage } from "./views";
import { ErrorBoundary, DetailedCard } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { detailedDataApiCall } from "./services/detailedDataApiCall";

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
        loader: detailedDataApiCall,
      },
    ],
  },
  { path: "*", element: <PageNotFoundPage></PageNotFoundPage> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
