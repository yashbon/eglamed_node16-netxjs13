"use client";

import { useEffect } from "react";
import { Link } from "react-scroll";
import navigation from "@/data/navigation.json";
import css from "./Navigation.module.css";

const Navigation = ({ isOpen, handleSetActiveMenu }) => {
 
    useEffect(() => {
        if(isOpen){
            document.body.getElementsByTagName("main")[0].style.filter =
                "blur(5px)";
            document.body.getElementsByTagName("footer")[0].style.filter =
                "blur(5px)";
        }
        else{
            document.body.getElementsByTagName("main")[0].style.filter =
            "";
            document.body.getElementsByTagName("footer")[0].style.filter =
            "";
        }
    }, [isOpen]);
    

    return (
        <nav
            className={`${css.nav} ${isOpen && css.navActive}`}
        >
            <ul className={css.navList}>
                {navigation.map(({ id, src, text }) => (
                    <li key={id}>
                        <Link
                            to={src}
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={500}
                            activeClass={css.active}
                            className={css.navLink}
                            onSetActive={() => handleSetActiveMenu()}
                        >
                            <span className={css.navText}>{text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
