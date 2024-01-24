import Nav from "./Nav";

export default function Header() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between bg-zinc-900 p-5">
      <Nav />
    </nav>
  );
}
