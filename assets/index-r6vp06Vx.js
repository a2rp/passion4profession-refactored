import{c as o,j as r,d as a,g as t,N as i,h as n,i as s}from"./index-D1C0sqWO.js";import{S as c}from"./index-DpzaY4xy.js";const e={Wrapper:o.section`
        min-height: calc(100vh - var(--header-height));
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 32px 16px;
        position: relative;
        overflow: hidden;
        background: transparent;
    `,Inner:o.div`
        width: 100%;
        max-width: 920px;
        position: relative;

        .glow {
            position: absolute;
            border-radius: 999px;
            filter: blur(60px);
            pointer-events: none;
            opacity: 0.3;
        }

        .glowOne {
            width: 240px;
            height: 240px;
            top: -40px;
            left: 40px;
            background: rgba(255, 255, 255, 0.08);
        }

        .glowTwo {
            width: 280px;
            height: 280px;
            right: 20px;
            bottom: -40px;
            background: rgba(255, 255, 255, 0.05);
        }

        .card {
            position: relative;
            z-index: 1;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 96%, transparent)
            );
            box-shadow: 0 20px 60px var(--color-shadow);
            padding: 28px;
            overflow: hidden;
        }

        .card::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image: linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 255, 255, 0.04) 50%,
                transparent 100%
            );
            opacity: 0.5;
        }

        .badgeRow {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 18px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.02em;
        }

        .badge svg {
            font-size: 14px;
            color: var(--color-primary);
            flex-shrink: 0;
        }

        .errorRow {
            display: flex;
            align-items: flex-start;
            gap: 18px;
            margin-bottom: 24px;

            @media (width < 640px) {
                flex-direction: column;
            }
        }

        .iconWrap {
            width: 74px;
            height: 74px;
            border-radius: 20px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-surface-3);
            border: 1px solid var(--color-border-light);
            color: var(--color-text-primary);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .iconWrap svg {
            font-size: 32px;
        }

        .errorText {
            min-width: 0;
        }

        .errorCode {
            font-size: clamp(52px, 10vw, 96px);
            font-weight: 900;
            line-height: 0.95;
            letter-spacing: -0.05em;
            color: var(--color-text-primary);
            margin-bottom: 10px;
        }

        h1 {
            font-size: clamp(28px, 4vw, 42px);
            line-height: 1.05;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .errorText p {
            max-width: 640px;
            font-size: 15px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        .messageBox {
            margin-top: 8px;
            padding: 18px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .messageBox h2 {
            font-size: 18px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .messageBox p {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .actionRow {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 24px;
            flex-wrap: wrap;
        }

        .primaryAction,
        .secondaryAction {
            min-height: 46px;
            padding: 0 16px;
            border-radius: var(--radius-sm);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 800;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast),
                color var(--transition-fast);
        }

        .primaryAction {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border: 1px solid var(--color-text-primary);
            text-decoration: none;
        }

        .primaryAction:hover {
            background: var(--color-primary-hover);
            color: var(--color-text-inverse);
            text-decoration: none;
            transform: translateY(-1px);
        }

        .secondaryAction {
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            border: 1px solid var(--color-border);
            cursor: pointer;
        }

        .secondaryAction:hover {
            background: var(--color-surface-3);
            border-color: var(--color-border-light);
            transform: translateY(-1px);
        }

        .footerNote {
            margin-top: 22px;
            padding-top: 18px;
            border-top: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.6;
            flex-wrap: wrap;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-muted);
            flex-shrink: 0;
        }

        html[data-theme="light"] & {
            .glowOne {
                background: rgba(0, 0, 0, 0.07);
            }

            .glowTwo {
                background: rgba(0, 0, 0, 0.05);
            }

            .card::before {
                background-image: linear-gradient(
                    90deg,
                    transparent 0%,
                    rgba(0, 0, 0, 0.03) 50%,
                    transparent 100%
                );
            }

            .iconWrap {
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
            }
        }
    `},p=()=>r.jsx(e.Wrapper,{children:r.jsxs(e.Inner,{children:[r.jsx("div",{className:"glow glowOne"}),r.jsx("div",{className:"glow glowTwo"}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"badgeRow",children:r.jsxs("span",{className:"badge",children:[r.jsx(a,{}),"Blog Archive"]})}),r.jsxs("div",{className:"errorRow",children:[r.jsx("div",{className:"iconWrap",children:r.jsx(t,{})}),r.jsxs("div",{className:"errorText",children:[r.jsx("div",{className:"errorCode",children:"404"}),r.jsx("h1",{children:"Page not found"}),r.jsx("p",{children:"This page does not exist in the passion4profession-refactored archive, or the link may be outdated."})]})]}),r.jsxs("div",{className:"messageBox",children:[r.jsx("h2",{children:"Looks like this note got lost in the archive."}),r.jsx("p",{children:"This project is a refactored version of an old blog archive. Some older links may no longer match the new structure."})]}),r.jsxs("div",{className:"actionRow",children:[r.jsxs(i,{to:"/",className:"primaryAction",children:[r.jsx(n,{}),"Go to home"]}),r.jsxs("button",{type:"button",className:"secondaryAction",onClick:()=>window.history.back(),children:[r.jsx(s,{}),"Go back"]}),r.jsx(c,{})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("span",{className:"dot"}),r.jsx("span",{children:"passion4profession-refactored - blog archive and rewritten computing notes"})]})]})]})});export{p as default};
