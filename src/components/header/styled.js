import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        position: sticky;
        top: 0;
        z-index: 50;
        width: 100%;
        height: 100%;
        background: transparent;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    700px 200px at 15% 0%,
                    color-mix(in srgb, var(--color-primary) 8%, transparent),
                    transparent 70%
                ),
                radial-gradient(
                    600px 200px at 90% 0%,
                    color-mix(in srgb, var(--color-accent) 8%, transparent),
                    transparent 70%
                );
            opacity: 0.7;
        }
    `,

    Main: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            flex: 1;
        }

        .toggleButtonLogoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            width: 100%;
        }

        .toggleButton {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            cursor: pointer;
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                color var(--transition-fast),
                transform var(--transition-fast);
        }

        .toggleButton:hover {
            background: var(--color-surface-3);
            border-color: var(--color-border-light);
        }

        .toggleButton:active {
            transform: translateY(1px);
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
            text-decoration: none;
            flex-shrink: 1;

            .logoWrapper {
                height: 48px;
                width: 48px;
                border-radius: var(--radius-sm);
                position: relative;
                overflow: hidden;
                background: var(--color-surface);
                border: 1px solid var(--color-border);
                flex-shrink: 0;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: contain;
                    display: block;
                    transition: opacity var(--transition-fast);
                    border-radius: inherit;
                }

                .logoSkeleton {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        var(--color-surface-2),
                        var(--color-border),
                        var(--color-surface-2)
                    );
                    opacity: 0.6;
                }
            }

            .nameWrapper {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;

                .title {
                    font-weight: 800;
                    color: var(--color-text-primary);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 15px;
                    line-height: 1.2;
                }

                .subTitle {
                    color: var(--color-text-muted);
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 1.3;
                }

                @media (width < 720px) {
                    .subTitle {
                        display: none;
                    }
                }

                @media (width < 420px) {
                    display: none;
                }
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                color var(--transition-fast),
                transform var(--transition-fast);

            .icon {
                font-size: 18px;
                color: var(--color-primary);
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                background: var(--color-surface-3);
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `,
};
