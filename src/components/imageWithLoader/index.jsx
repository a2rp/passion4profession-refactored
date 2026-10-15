import React, { useState } from "react";
import { Styled } from "./styled";

const ImageWithLoader = ({
    src,
    alt = "",
    fill = false,
    loading = "lazy",
    placeholderHeight = "180px",
    onLoad,
    onError,
    ...imageProps
}) => {
    const [result, setResult] = useState({ src: null, status: "loading" });
    const loaded = result.src === src && result.status === "loaded";
    const failed = result.src === src && result.status === "failed";

    return (
        <Styled.Frame
            $fill={fill}
            $loaded={loaded}
            $failed={failed}
            $placeholderHeight={placeholderHeight}
        >
            {!loaded && !failed ? (
                <span className="imageLoader" role="status" aria-label="Loading image">
                    <span className="spinner" aria-hidden="true" />
                </span>
            ) : null}
            {failed ? (
                <span className="imageError" role="status">
                    Image unavailable
                </span>
            ) : null}
            <img
                {...imageProps}
                src={src}
                alt={alt}
                loading={loading}
                decoding="async"
                onLoad={(event) => {
                    setResult({ src, status: "loaded" });
                    onLoad?.(event);
                }}
                onError={(event) => {
                    setResult({ src, status: "failed" });
                    onError?.(event);
                }}
            />
        </Styled.Frame>
    );
};

export default ImageWithLoader;
