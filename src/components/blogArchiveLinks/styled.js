import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 20px 50px var(--color-shadow);
        overflow: hidden;

        .topRow {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 20px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 88%,
                transparent
            );
        }

        .iconWrap {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .iconWrap svg {
            width: 20px;
            height: 20px;
        }

        .headingContent {
            min-width: 0;
        }

        .headingContent h2 {
            font-size: 20px;
            line-height: 1.2;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .headingContent p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        .archiveList {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
        }

        .archiveItem + .archiveItem {
            border-top: 1px solid var(--color-border);
        }

        .archiveLink {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
            padding: 14px 20px;
            text-decoration: none;
            color: var(--color-text-secondary);
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .archiveLink:hover {
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            text-decoration: none;
        }

        .linkText {
            min-width: 0;
            font-size: 14px;
            line-height: 1.5;
            font-weight: 700;
        }

        .linkIcon {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-muted);
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .archiveLink:hover .linkIcon {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
            transform: translateX(2px);
        }

        @media (max-width: 640px) {
            .topRow {
                padding: 16px;
            }

            .archiveLink {
                padding: 12px 16px;
            }

            .headingContent h2 {
                font-size: 18px;
            }

            .linkText {
                font-size: 13px;
            }
        }
    `,
};
