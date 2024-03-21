import Top from "../Top/Top";
import Navbar from "../Navbar/Navbar";
import css from "./Header.module.css";

const Header = () => {
    return (
        <header className={css.header}>
            <Top />
            <Navbar />
        </header>
    );
};

export default Header;
