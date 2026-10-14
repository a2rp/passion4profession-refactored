import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { archivePosts } from "../../lib/archivePosts";
import { Styled } from "./styled";

const BlogPostNavigation = ({ slug, placement }) => {
    const currentIndex = archivePosts.findIndex(
        (post) => post.path === `/archive/${slug}`,
    );

    if (currentIndex === -1) {
        return null;
    }

    const previousPost = archivePosts[currentIndex - 1];
    const nextPost = archivePosts[currentIndex + 1];

    return (
        <Styled.Nav
            className={placement}
            aria-label={`${placement === "top" ? "Top" : "Bottom"} article navigation`}
        >
            {previousPost ? (
                <Link className="navLink previous" to={previousPost.path}>
                    <FiArrowLeft aria-hidden="true" />
                    <span className="linkText">
                        <span className="direction">Previous blog</span>
                        <strong>{previousPost.title}</strong>
                    </span>
                </Link>
            ) : (
                <div className="navLink unavailable" aria-disabled="true">
                    <FiArrowLeft aria-hidden="true" />
                    <span className="linkText">
                        <span className="direction">Previous blog</span>
                        <strong>Beginning of the archive</strong>
                    </span>
                </div>
            )}

            {nextPost ? (
                <Link className="navLink next" to={nextPost.path}>
                    <span className="linkText">
                        <span className="direction">Next blog</span>
                        <strong>{nextPost.title}</strong>
                    </span>
                    <FiArrowRight aria-hidden="true" />
                </Link>
            ) : (
                <div className="navLink unavailable next" aria-disabled="true">
                    <span className="linkText">
                        <span className="direction">Next blog</span>
                        <strong>End of the archive</strong>
                    </span>
                    <FiArrowRight aria-hidden="true" />
                </div>
            )}
        </Styled.Nav>
    );
};

export default BlogPostNavigation;
