import React from "react";
import { NavLink } from "react-router-dom";
import { FiAlertCircle, FiArrowLeft, FiBookOpen, FiHome } from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const NotFound = () => {
    return (
        <Styled.Wrapper>
            <Styled.Inner>
                <div className="glow glowOne" />
                <div className="glow glowTwo" />

                <div className="card">
                    <div className="badgeRow">
                        <span className="badge">
                            <FiBookOpen />
                            Blog Archive
                        </span>
                    </div>

                    <div className="errorRow">
                        <div className="iconWrap">
                            <FiAlertCircle />
                        </div>

                        <div className="errorText">
                            <div className="errorCode">404</div>
                            <h1>Page not found</h1>
                            <p>
                                This page does not exist in the
                                passion4profession-refactored archive, or the
                                link may be outdated.
                            </p>
                        </div>
                    </div>

                    <div className="messageBox">
                        <h2>Looks like this note got lost in the archive.</h2>
                        <p>
                            This project is a refactored version of an old blog
                            archive. Some older links may no longer match the
                            new structure.
                        </p>
                    </div>

                    <div className="actionRow">
                        <NavLink to="/" className="primaryAction">
                            <FiHome />
                            Go to home
                        </NavLink>

                        <button
                            type="button"
                            className="secondaryAction"
                            onClick={() => window.history.back()}
                        >
                            <FiArrowLeft />
                            Go back
                        </button>

                        <ShareButtons />
                    </div>

                    <div className="footerNote">
                        <span className="dot" />
                        <span>
                            passion4profession-refactored - blog archive and
                            rewritten computing notes
                        </span>
                    </div>
                </div>
            </Styled.Inner>
        </Styled.Wrapper>
    );
};

export default NotFound;
