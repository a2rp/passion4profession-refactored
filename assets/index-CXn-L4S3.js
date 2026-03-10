import{c as a,j as r,Y as i,a as t,Z as s,_ as n,q as l,$ as c}from"./index-BxgJM-x-.js";import{F as d}from"./index-DlAj0kv7.js";import{S as p}from"./index-D6FK_vhk.js";const o={Wrapper:a.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 95%, transparent),
            color-mix(in srgb, var(--color-surface-2) 100%, transparent)
        );
        box-shadow: 0 20px 48px var(--color-shadow);
        padding: 24px;
        position: relative;
        overflow: hidden;

        .badgeRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 14px;
        }

        .badge {
            min-height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 12px;
            font-weight: 800;
        }

        .badge svg {
            flex-shrink: 0;
        }

        .badge.muted {
            color: var(--color-text-secondary);
        }

        h1 {
            font-size: clamp(30px, 4vw, 48px);
            line-height: 1.02;
            letter-spacing: -0.04em;
            margin-bottom: 14px;
        }

        .lead {
            max-width: 820px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }
    `,MainGrid:a.div`
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.9fr);
        gap: 18px;

        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }
    `,ContentCard:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        .noteList {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 18px;
        }

        .noteItem {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .dot {
            width: 10px;
            height: 10px;
            margin-top: 7px;
            border-radius: 999px;
            background: var(--color-text-primary);
            flex-shrink: 0;
        }

        .noteItem span:last-child {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }
    `,SideCard:a.aside`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 22px;
            line-height: 1.12;
        }

        .sideText {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
            margin-bottom: 16px;
        }

        .linkList {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .socialLink {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            text-decoration: none;
            color: var(--color-text-primary);
            transition:
                transform var(--transition-fast),
                background var(--transition-fast),
                border-color var(--transition-fast),
                color var(--transition-fast);
        }

        .socialLink:hover {
            background: var(--color-surface-3);
            border-color: var(--color-border-light);
            text-decoration: none;
            transform: translateY(-1px);
        }

        .socialIcon {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .socialIcon svg {
            width: 18px;
            height: 18px;
        }

        .socialContent {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .socialTitle {
            font-size: 14px;
            font-weight: 800;
            line-height: 1.3;
            color: var(--color-text-primary);
        }

        .socialValue {
            font-size: 12px;
            line-height: 1.5;
            color: var(--color-text-muted);
            word-break: break-word;
        }
    `,SectionCard:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }
    `,FooterNote:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 96%, transparent),
            color-mix(in srgb, var(--color-surface-2) 100%, transparent)
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        h2 {
            font-size: 24px;
            line-height: 1.12;
            margin-bottom: 10px;
        }

        p {
            max-width: 860px;
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }
    `},h=[{title:"GitHub",value:"github.com/a2rp",href:"https://github.com/a2rp",icon:r.jsx(n,{})},{title:"Portfolio",value:"ashishranjan.net",href:"https://www.ashishranjan.net",icon:r.jsx(l,{})},{title:"LinkedIn",value:"linkedin.com/in/aashishranjan",href:"https://www.linkedin.com/in/aashishranjan",icon:r.jsx(c,{})},{title:"Facebook",value:"facebook.com/theash.ashish",href:"https://www.facebook.com/theash.ashish/",icon:r.jsx(d,{})}],x=["This page is a refactored version of an old contact-style blog post from the original archive.","The original post used a form-based approach, but this version keeps things simpler and cleaner.","Instead of collecting details through a form, this page now acts as a direct stay-connected reference.","The purpose is to preserve the original intent while presenting it in a better structured archive format."],f=()=>r.jsxs(o.Wrapper,{className:"topicWrapper",children:[r.jsxs(o.HeroCard,{children:[r.jsxs("div",{className:"badgeRow",children:[r.jsxs("span",{className:"badge",children:[r.jsx(i,{}),"Refactored Archive Note"]}),r.jsxs("span",{className:"badge muted",children:[r.jsx(t,{}),"Original topic: August 30, 2012"]}),r.jsx(p,{})]}),r.jsx("h1",{children:"Be in contact till I die"}),r.jsx("p",{className:"lead",children:"This page is a cleaned-up version of an old blog post that was originally created as a simple contact form. The idea behind it was personal and direct: stay connected. In this refactored archive, that same intention is preserved in a more usable and modern format."})]}),r.jsxs(o.MainGrid,{children:[r.jsxs(o.ContentCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(s,{})}),r.jsx("h2",{children:"About this page"})]}),r.jsx("p",{children:'The original version of this page was more like a casual "fill your details" contact form from the old Blogger era. That had its own charm, but now this archive is being rebuilt with cleaner structure and simpler purpose.'}),r.jsx("p",{children:"So instead of repeating the old form format, this page now works as a straightforward way to stay connected through direct public links."}),r.jsx("div",{className:"noteList",children:x.map(e=>r.jsxs("div",{className:"noteItem",children:[r.jsx("span",{className:"dot"}),r.jsx("span",{children:e})]},e))})]}),r.jsxs(o.SideCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(i,{})}),r.jsx("h2",{children:"Stay connected"})]}),r.jsx("p",{className:"sideText",children:"You can connect with me through these public profiles and links."}),r.jsx("div",{className:"linkList",children:h.map(e=>r.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",className:"socialLink",children:[r.jsx("span",{className:"socialIcon",children:e.icon}),r.jsxs("span",{className:"socialContent",children:[r.jsx("span",{className:"socialTitle",children:e.title}),r.jsx("span",{className:"socialValue",children:e.value})]})]},e.title))})]})]}),r.jsxs(o.SectionCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(s,{})}),r.jsx("h2",{children:"Refactored meaning"})]}),r.jsx("p",{children:"In the archive context, this page is less about forms and more about preserving tone. It shows that not every old post was a technical article. Some pages were more personal, direct, and human. That is part of the archive too."}),r.jsx("p",{children:"A good archive should not erase that personality. It should just present it more clearly, without the old clutter."})]}),r.jsxs(o.FooterNote,{children:[r.jsx("h2",{children:"Final summary"}),r.jsx("p",{children:'This page keeps the original "stay in contact" intent alive, but replaces the old form-based setup with a cleaner public contact page using direct social links.'})]})]});export{f as default};
