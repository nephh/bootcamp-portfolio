import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Nav />
      <div className="manrope-default flex flex-grow items-center justify-center bg-zinc-950 text-lg text-zinc-200">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
