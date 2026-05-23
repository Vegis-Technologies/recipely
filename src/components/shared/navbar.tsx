import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <header
      className="bg-[#FCF9F4]"
      style={{
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="container mx-auto px-4 md:px-16 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-[28px] text-[#C8522A] font-semibold">Recipely</h1>
          {/* Navigation */}
          <nav className="md:flex gap-8 text-[#58423B] hidden ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/collections">Collections</Link>
          </nav>
          {/* Icons */}
          <div className="flex gap-6">
            <AiOutlineSearch className="text-xl text-[#58423B]" />
            <HiOutlineUserCircle className="text-xl text-[#58423B]" />
          </div>
        </div>
      </div>
    </header>
  );
}
