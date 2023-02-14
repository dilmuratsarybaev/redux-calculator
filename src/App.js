import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header"
import Auth from "./components/Auth"
import Calculator from "./components/Calculator";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Calculator />
      <Auth />
    </Provider>
  );
}

export default App;
