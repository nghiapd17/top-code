import HomePage from "./pages/HomePage";
import { DataProvider } from './GlobalState'

function App() {
  return (
    <DataProvider>
      {/* <Navbar /> */}
      <HomePage />
    </DataProvider>
  );
}

export default App;
