import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import GoToTop from "./components/goToTop";
import AppRoutes from "./AppRoutes";
import BlogArchiveNav from "./components/blogArchiveNav";

const App = () => {
    const location = useLocation();
    const scrollerRef = useRef(null);

    const [displayRightSlider, setDisplayRightSlider] = useState(false);

    const handleRightSliderToggleClick = () => {
        setDisplayRightSlider((prev) => !prev);
    };

    const closeRightSlider = () => {
        setDisplayRightSlider(false);
    };

    useEffect(() => {
        if (!displayRightSlider) {
            return;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setDisplayRightSlider(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [displayRightSlider]);

    useEffect(() => {
        if (!scrollerRef.current) {
            return;
        }

        scrollerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header
                    handleRightSliderToggleClick={handleRightSliderToggleClick}
                    displayRightSlider={displayRightSlider}
                />
            </Styled.Header>

            <Styled.Main>
                <div className="contentWrapper">
                    <div className="contentInnerWrapper" ref={scrollerRef}>
                        <div className="routesWrapper">
                            <AppRoutes />
                        </div>

                        <div className="footerWrapper">
                            <Footer />
                        </div>

                        <GoToTop scrollerRef={scrollerRef} />
                    </div>
                </div>

                <button
                    type="button"
                    className={`rightMenuBackdrop ${
                        displayRightSlider ? "visible" : ""
                    }`}
                    onClick={closeRightSlider}
                    aria-label="Close archive menu"
                    tabIndex={displayRightSlider ? 0 : -1}
                />

                <aside
                    id="rightArchiveMenu"
                    className={`rightMenuSlider ${
                        displayRightSlider ? "open" : ""
                    }`}
                    aria-label="Archive menu"
                    aria-hidden={!displayRightSlider}
                >
                    <BlogArchiveNav onNavigate={closeRightSlider} />
                </aside>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
