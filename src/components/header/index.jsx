import React, { useEffect, useState } from "react";
import { Styled } from "./styled";
import blackBgLogo from "/logo.png";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const THEME_LS_KEY = "passion4profession-refactored-theme";

const Header = ({ handleSliderToggleClick }) => {
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
                    <div className="toggleButtonLogoNameWrapper">
                        <button
                            type="button"
                            className="toggleButton"
                            onClick={handleSliderToggleClick}
                            aria-label="Toggle topics sidebar"
                            title="Toggle topics sidebar"
                        >
                            <IoIosMenu size={32} />
                        </button>

                        <NavLink className="logoNameWrapper" to="/">
                            <div className="logoWrapper">
                                {!logoLoaded && (
                                    <div className="logoSkeleton" />
                                )}

                                <img
                                    src={blackBgLogo}
                                    alt="passion4profession refactored"
                                    onLoad={() => setLogoLoaded(true)}
                                    style={{ opacity: logoLoaded ? 1 : 0 }}
                                    loading="lazy"
                                />
                            </div>

                            <div className="nameWrapper">
                                <div className="title">Passion4Profession</div>

                                <div className="subTitle">
                                    refactored computing notes archive
                                </div>
                            </div>
                        </NavLink>
                    </div>
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
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
