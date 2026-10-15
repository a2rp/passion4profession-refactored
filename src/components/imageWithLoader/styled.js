import styled, { keyframes } from "styled-components";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Styled = {
    Frame: styled.span`
        position: relative;
        display: block;
        width: 100%;
        min-height: ${({ $fill, $placeholderHeight }) =>
            $fill ? "0" : $placeholderHeight};
        height: ${({ $fill }) => ($fill ? "100%" : "auto")};
        overflow: hidden;
        background: var(--color-surface-2);

        img {
            display: block;
            width: 100%;
            height: ${({ $fill }) => ($fill ? "100%" : "auto")};
            object-fit: ${({ $fill }) => ($fill ? "cover" : "contain")};
            opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
            transition: opacity 180ms ease;
        }

        .imageLoader,
        .imageError {
            position: absolute;
            inset: 0;
            z-index: 1;
            display: grid;
            place-items: center;
            color: var(--color-text-muted);
            background: var(--color-surface-2);
        }

        .spinner {
            width: 28px;
            height: 28px;
            border: 3px solid var(--color-border);
            border-top-color: var(--color-primary);
            border-radius: 50%;
            animation: ${spin} 750ms linear infinite;
        }

        .imageError {
            font-size: 13px;
        }
    `,
};
