import MainPage from "./views/mainPage";
import { ErrorBoundary } from "./components";

function App() {
  return (
    <ErrorBoundary>
      <MainPage></MainPage>
    </ErrorBoundary>
  );
}

export default App;
