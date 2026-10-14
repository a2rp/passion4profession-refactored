import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,

    StandaloneWrapper: styled.div`
        min-height: 100vh;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,

    Header: styled.header`
        height: var(--header-height);
        overflow: hidden;
        background: var(--color-bg);
        border-bottom: 1px solid var(--color-border);
    `,

    Main: styled.main`
        height: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        background: transparent;

        .contentWrapper {
            width: 100%;
            overflow: hidden;
            background: transparent;

            .contentInnerWrapper {
                position: relative;
                height: 100%;
                overflow-y: scroll;
                background: transparent;

                .routesWrapper {
                    min-height: 100vh;
                }

                .footerWrapper {
                    flex-shrink: 0;
                    border-top: 1px solid var(--color-border);
                }
            }
        }

        .rightMenuBackdrop {
            position: absolute;
            inset: 0;
            z-index: 29;
            background: rgba(0, 0, 0, 0.46);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition:
                opacity var(--transition-normal),
                visibility 0s linear var(--transition-normal);

            &.visible {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                transition:
                    opacity var(--transition-normal),
                    visibility 0s;
            }
        }

        .rightMenuSlider {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 30;
            width: 320px;
            max-width: 100%;
            height: 100%;
            padding: 10px;
            box-sizing: border-box;
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            border-left: 1px solid var(--color-border);
            box-shadow: -8px 0 30px var(--color-shadow);
            transform: translateX(100%);
            visibility: hidden;
            pointer-events: none;
            transition:
                transform var(--transition-normal),
                visibility 0s linear var(--transition-normal);

            > aside {
                width: 100%;
                height: 100%;
            }

            &.open {
                transform: translateX(0);
                visibility: visible;
                pointer-events: auto;
                transition:
                    transform var(--transition-normal),
                    visibility 0s;
            }
        }

        .topicWrapper {
            scroll-margin-top: calc(var(--header-height) + 12px);
        }

        .topicWrapper + .topicWrapper {
            margin-top: 6px;
        }

        .topicWrapper.a2rpFocusPulse {
            animation: a2rpFocusPulse 900ms ease;
        }

        @keyframes a2rpFocusPulse {
            0% {
                box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.14);
                border-radius: var(--radius-md);
            }
            50% {
                box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.08);
                border-radius: var(--radius-md);
            }
            100% {
                box-shadow: 0 0 0 0px rgba(255, 255, 255, 0);
                border-radius: var(--radius-md);
            }
        }

        html[data-theme="light"] & {
            .topicWrapper.a2rpFocusPulse {
                animation: a2rpFocusPulseLight 900ms ease;
            }

            @keyframes a2rpFocusPulseLight {
                0% {
                    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.12);
                    border-radius: var(--radius-md);
                }
                50% {
                    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.07);
                    border-radius: var(--radius-md);
                }
                100% {
                    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0);
                    border-radius: var(--radius-md);
                }
            }
        }
    `,
};
