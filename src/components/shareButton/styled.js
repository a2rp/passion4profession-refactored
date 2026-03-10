import styled from "styled-components";

export const Styled = {
    Container: styled.div`
        position: relative;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    `,

    Wrapper: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    `,

    ShareBtn: styled.button`
        min-height: 42px;
        padding: 0 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: var(--radius-sm);
        border: 1px solid #115e59;
        background: #0f766e;
        color: #ffffff;
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        cursor: pointer;
        box-shadow: 0 10px 24px rgba(15, 118, 110, 0.22);
        transition:
            background var(--transition-fast),
            border-color var(--transition-fast),
            color var(--transition-fast),
            transform var(--transition-fast),
            box-shadow var(--transition-fast);

        svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            color: #99f6e4;
        }

        &:hover {
            background: #14b8a6;
            border-color: #0f766e;
            transform: translateY(-1px);
            box-shadow: 0 14px 30px rgba(20, 184, 166, 0.24);
        }

        &:active {
            transform: translateY(0);
        }

        &:focus-visible {
            outline: 2px solid #5eead4;
            outline-offset: 3px;
        }
    `,

    CopyBtn: styled.button`
        min-height: 42px;
        padding: 0 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-border);
        background: var(--color-surface-2);
        color: var(--color-text-primary);
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        cursor: pointer;
        transition:
            background var(--transition-fast),
            border-color var(--transition-fast),
            color var(--transition-fast),
            transform var(--transition-fast),
            box-shadow var(--transition-fast);

        svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            color: var(--color-text-secondary);
        }

        &:hover {
            background: var(--color-surface-3);
            border-color: var(--color-border-light);
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(0);
        }
    `,

    Toast: styled.div`
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        min-height: 40px;
        padding: 0 12px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        color: var(--color-text-primary);
        box-shadow: 0 14px 28px var(--color-shadow);
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transform: translateY(-6px);
        transition:
            opacity var(--transition-fast),
            transform var(--transition-fast);

        svg {
            width: 15px;
            height: 15px;
            color: #14b8a6;
            flex-shrink: 0;
        }

        span {
            font-size: 13px;
            font-weight: 700;
            line-height: 1;
        }

        &.show {
            opacity: 1;
            transform: translateY(0);
        }
    `,
};
