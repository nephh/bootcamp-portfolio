import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="manrope-default flex flex-grow items-center justify-center bg-zinc-950 text-lg text-zinc-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
