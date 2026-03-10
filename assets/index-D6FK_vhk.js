import{c as o,T as c,j as r,ad as h,ae as u,af as g}from"./index-BxgJM-x-.js";const e={Container:o.div`
        position: relative;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    `,Wrapper:o.div`
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    `,ShareBtn:o.button`
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
    `,CopyBtn:o.button`
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
    `,Toast:o.div`
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
    `},b=()=>{const[l,p]=c.useState(""),t=c.useRef(null),i=a=>{p(a),t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{p("")},2200)},s=async()=>{try{await navigator.clipboard.writeText(window.location.href),i("Link copied")}catch(a){console.error("Copy failed:",a),i("Could not copy link")}},d=async()=>{const a={title:document.title,text:document.title,url:window.location.href};try{if(navigator.share){await navigator.share(a);return}await s()}catch(n){if((n==null?void 0:n.name)==="AbortError")return;console.error("Share failed:",n);try{await s()}catch(x){console.error("Fallback copy failed:",x),i("Could not share link")}}},f=async()=>{await s()};return c.useEffect(()=>()=>{t.current&&clearTimeout(t.current)},[]),r.jsxs(e.Container,{children:[r.jsxs(e.Wrapper,{children:[r.jsxs(e.ShareBtn,{type:"button",onClick:d,children:[r.jsx(h,{}),r.jsx("span",{children:"Share"})]}),r.jsxs(e.CopyBtn,{type:"button",onClick:f,children:[r.jsx(u,{}),r.jsx("span",{children:"Copy Link"})]})]}),r.jsxs(e.Toast,{className:l?"show":"",children:[r.jsx(g,{}),r.jsx("span",{children:l||"Link copied"})]})]})};export{b as S};
