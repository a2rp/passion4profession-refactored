import styled from "styled-components";

export const Styled = {
    Figure: styled.figure`
        width: min(calc(100% - 40px), var(--content-width));
        aspect-ratio: 16 / 7;
        margin: 24px auto -8px;
        overflow: hidden;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: var(--color-surface-2);
        box-shadow: 0 20px 48px var(--color-shadow);

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 640px) {
            width: calc(100% - 32px);
            aspect-ratio: 16 / 9;
            margin: 16px auto 0;
        }
    `,
};
