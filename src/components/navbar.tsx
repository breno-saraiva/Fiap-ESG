import { Link } from "react-router-dom";
import logo from "../../src/img/costs_logo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-[#222] p-4 text-white">
      <div>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
      </div>
      <div>
        <ul className="flex ">
          <li className="mr-4 hover:text-[#FFBB33]">
            <Link to="/home">Home</Link>
          </li>
          <li className="mr-4 hover:text-[#FFBB33]">
            <Link to="/contato">contato</Link>
          </li>
          <li className="mr-4 hover:text-[#FFBB33]">
            <Link to="/empresas">empresas</Link>
          </li>
          <li className="mr-4 hover:text-[#FFBB33]">
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Navbar };
