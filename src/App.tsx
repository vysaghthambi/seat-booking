import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import Seats from "./components/Seats/Seats";
import Summary from "./components/Summary/Summary";

import { store } from "./redux/store";

import "./App.css";

function App() {
  return (
    <main>
      <Header />

      <Provider store={store}>
        <section>
          <Seats />
          <Summary />
        </section>
      </Provider>
    </main>
  );
}

export default App;
