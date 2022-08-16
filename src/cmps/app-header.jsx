import Logo from "../logo.jpeg";
import { Link } from "react-router-dom";
export const AppHeader = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
            <Link className="home-link" to={"/"}>
              <img className="logo" src={Logo} alt="" />
            </Link>
          <li>
            <Link to={"about"}>אודות המשרד</Link>
          </li>
          <li>
            <Link to={"articals"}>מאמרים </Link>
          </li>
          <li>
            <Link to={"contact"}>צור קשר </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
