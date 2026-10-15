import React from "react";
import { Styled } from "./styled";
import ImageWithLoader from "../imageWithLoader";

const BlogHeroImage = ({ slug }) => {
    return (
        <Styled.Figure>
            <ImageWithLoader
                src={`/images/blog-hero/${slug}.jpg`}
                alt=""
                fill
                fetchPriority="high"
                loading="eager"
            />
        </Styled.Figure>
    );
};

export default BlogHeroImage;
