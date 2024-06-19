import { Link } from "react-router-dom";
import logo from "../../src/img/logo_greentech.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-10 bg-[#222] p-4 text-white">
      <div>
        <Link to="/">
        <img src={logo} alt="Costs" style={{ width: '64px', height: '64px' }} />        </Link>
      </div>
      <div>
        <ul className="flex ">
          <li className="mr-6 hover:text-[#22C55E]">
            <Link to="/home">Home</Link>
          </li>
          <li className="mr-6 hover:text-[#22C55E]">
            <Link to="/project">Projetos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Navbar };
