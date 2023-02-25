import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Link href="/">
        <h1 className="text-xl font-bold">My App</h1>
      </Link>
    </header>
  );
};

export default Header;
