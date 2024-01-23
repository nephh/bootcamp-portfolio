import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Nav />
      <div className="flex flex-grow items-center justify-center bg-zinc-950 text-lg text-zinc-200 manrope-default">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
