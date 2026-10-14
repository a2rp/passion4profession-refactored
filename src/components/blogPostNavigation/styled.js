import styled from "styled-components";

export const Styled = {
    Nav: styled.nav`
        width: min(calc(100% - 40px), var(--content-width));
        margin: 18px auto;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;

        .navLink {
            min-width: 0;
            min-height: 66px;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: var(--color-surface);
            color: var(--color-text-primary);
            text-decoration: none;
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        a.navLink:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: var(--color-surface-2);
        }

        .navLink > svg {
            width: 18px;
            height: 18px;
            flex-shrink: 0;
            color: var(--color-text-secondary);
        }

        .linkText {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .direction {
            color: var(--color-text-muted);
            font-size: 11px;
            font-weight: 750;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        .linkText strong {
            overflow: hidden;
            font-size: 13px;
            line-height: 1.35;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .navLink.next {
            justify-content: flex-end;
            text-align: right;
        }

        .navLink.unavailable {
            color: var(--color-text-muted);
            opacity: 0.62;
        }

        &.bottom {
            margin: 30px auto 28px;
        }

        @media (max-width: 560px) {
            width: calc(100% - 32px);
            gap: 8px;

            .navLink {
                min-height: 60px;
                gap: 7px;
                padding: 10px;
            }

            .navLink > svg {
                width: 15px;
                height: 15px;
            }

            .linkText strong {
                font-size: 12px;
            }
        }
    `,
};
