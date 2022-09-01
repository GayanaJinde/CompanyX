import "./App.css";

import {
  Navbar,
  Header
} from "./components";

function App() {
  return (
    <div>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
    </div>
  );
}

export default App;
