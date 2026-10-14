import React, { useEffect, useState } from "react";
import { Styled } from "./styled";
import blackBgLogo from "/logo.png";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const THEME_LS_KEY = "passion4profession-refactored-theme";

const Header = ({ handleRightSliderToggleClick, displayRightSlider }) => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") {
            return "dark";
        }

        return localStorage.getItem(THEME_LS_KEY) || "dark";
    });

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        localStorage.setItem(THEME_LS_KEY, theme);
    }, [theme]);

    const nextTheme = theme === "light" ? "dark" : "light";

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <NavLink className="logoNameWrapper" to="/">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" />}

                            <img
                                src={blackBgLogo}
                                alt="Passion4Profession Refactored"
                                onLoad={() => setLogoLoaded(true)}
                                style={{ opacity: logoLoaded ? 1 : 0 }}
                                loading="lazy"
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">Passion4Profession Refactored</div>

                            <div className="subTitle">
                                refactored computing notes archive
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="rightSide">
                    <button
                        type="button"
                        role="switch"
                        aria-checked={theme === "light"}
                        aria-label="Light theme"
                        className={`themeToggleBtn ${
                            theme === "light" ? "light" : ""
                        }`}
                        onClick={handleToggle}
                        title={`Switch to ${nextTheme} theme`}
                    >
                        <span
                            className="trackIcon darkIcon"
                            aria-hidden="true"
                        >
                            <FiMoon />
                        </span>
                        <span
                            className="trackIcon lightIcon"
                            aria-hidden="true"
                        >
                            <FiSun />
                        </span>
                        <span className="thumb" aria-hidden="true">
                            {theme === "light" ? <FiSun /> : <FiMoon />}
                        </span>
                    </button>

                    <button
                        type="button"
                        className="archiveMenuToggle"
                        onClick={handleRightSliderToggleClick}
                        aria-label={
                            displayRightSlider
                                ? "Close archive menu"
                                : "Open archive menu"
                        }
                        aria-expanded={displayRightSlider}
                        aria-controls="rightArchiveMenu"
                        title={
                            displayRightSlider
                                ? "Close archive menu"
                                : "Open archive menu"
                        }
                    >
                        {displayRightSlider ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
