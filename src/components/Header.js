import "../styles/Header.css";
import logo from "../movie-love.png";

function Header() {
  return (
    <header className="site-header">
        <img src={logo} alt="Movie Love Logo" />
        <h1>Movie Love</h1>
    </header>
  )
}

export default Header;