import React from "react";
import { Styled } from "./styled";

const BlogHeroImage = ({ slug }) => {
    return (
        <Styled.Figure>
            <img
                src={`/images/blog-hero/${slug}.jpg`}
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                decoding="async"
            />
        </Styled.Figure>
    );
};

export default BlogHeroImage;
