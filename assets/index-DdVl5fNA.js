import{c as o,j as e,F as l,a as p,I as s,w as t,ah as n,l as d,a1 as c,L as h,ac as x,aF as m,aG as g,V as u,A as f}from"./index-D1C0sqWO.js";import{S as y}from"./index-DpzaY4xy.js";const i={Wrapper:o.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:o.section`
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
            max-width: 840px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }

        .heroMeta {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 22px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .metaCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .metaIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .metaIcon svg {
            width: 18px;
            height: 18px;
        }

        .metaCard strong {
            display: block;
            font-size: 20px;
            line-height: 1.1;
            margin-bottom: 4px;
        }

        .metaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionCard:o.section`
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

        h3 {
            font-size: 16px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        .notesGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 820px) {
                grid-template-columns: 1fr;
            }
        }

        .noteBox {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .noteBox p {
            margin: 0;
            font-size: 14px;
        }

        .tipList {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 0 0 14px;
        }

        .tipList li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .tipList li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `,ShortcutSection:o.section`
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
            margin-bottom: 16px;
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

        .shortcutGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .shortcutCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast);
        }

        .shortcutCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-3) 94%,
                transparent
            );
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
        }

        .miniIcon {
            width: 38px;
            height: 38px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .miniIcon svg {
            width: 17px;
            height: 17px;
        }

        .keyChip {
            min-height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 12px;
            font-weight: 900;
            white-space: nowrap;
        }

        h3 {
            font-size: 17px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }
    `,FooterNote:o.section`
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
    `},a=[{keys:"Windows + M",icon:e.jsx(t,{}),title:"Minimize all windows",description:"Quickly minimizes all open windows and takes you back to the desktop."},{keys:"Windows + E",icon:e.jsx(h,{}),title:"Open File Explorer",description:"Launches File Explorer instantly so you can browse files and folders."},{keys:"Windows + F",icon:e.jsx(x,{}),title:"Find files",description:"Opens file search on older Windows systems or search-related functionality depending on version."},{keys:"Windows + R",icon:e.jsx(m,{}),title:"Open Run dialog",description:"Opens the Run box where you can launch programs, folders, and system tools quickly."},{keys:"Windows + L",icon:e.jsx(g,{}),title:"Lock your computer",description:"Instantly locks the current session and returns to the sign-in screen."},{keys:"Ctrl + Esc",icon:e.jsx(u,{}),title:"Open Start menu",description:"Useful on keyboards that do not have a Windows key. It opens the Start menu."},{keys:"Ctrl + Shift + Esc",icon:e.jsx(f,{}),title:"Open Task Manager",description:"Directly opens Task Manager without needing extra clicks. Very handy for troubleshooting."},{keys:"Windows + Pause",icon:e.jsx(n,{}),title:"Open System Properties",description:"Opens system-related information or properties depending on the Windows version."},{keys:"Alt + Tab",icon:e.jsx(c,{}),title:"Switch running applications",description:"Lets you cycle through currently open applications quickly."},{keys:"Alt + Enter",icon:e.jsx(d,{}),title:"Open selected item properties",description:"Shows the Properties dialog for the currently selected file, folder, or item."}],b=["Keyboard shortcuts reduce time spent moving between keyboard and mouse.","They become much more useful when repeated daily during normal work.","A few shortcuts used consistently can noticeably improve speed and flow.","Some shortcuts behave a little differently depending on Windows version."],w=()=>e.jsxs(i.Wrapper,{className:"topicWrapper",children:[e.jsxs(i.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(l,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(p,{}),"Original topic: July 20, 2012"]}),e.jsx(y,{})]}),e.jsx("h1",{children:"Windows shortcut keys"}),e.jsx("p",{className:"lead",children:"Keyboard shortcuts make working in Windows faster, cleaner, and less annoying than constantly reaching for the mouse. This refactored page turns the original quick note into a clearer reference guide for everyday use."}),e.jsxs("div",{className:"heroMeta",children:[e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:a.length}),e.jsx("span",{children:"Core shortcuts in this note"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(t,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Windows"}),e.jsx("span",{children:"Focus on system and workflow actions"})]})]})]})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Why shortcuts matter"})]}),e.jsx("p",{children:"Mouse-based navigation works, but it is usually slower for repeated actions. Keyboard shortcuts remove extra pointer movement and let you jump straight to commands. Once they become muscle memory, the difference is huge."}),e.jsx("p",{children:"The real magic is not in memorizing hundreds of shortcuts. It is in using a small set so often that your hands do the work automatically."})]}),e.jsxs(i.ShortcutSection,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Shortcut reference"})]}),e.jsx("div",{className:"shortcutGrid",children:a.map(r=>e.jsxs("article",{className:"shortcutCard",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"miniIcon",children:r.icon}),e.jsx("span",{className:"keyChip",children:r.keys})]}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.description})]},r.keys))})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Quick practical notes"})]}),e.jsxs("div",{className:"notesGrid",children:[e.jsxs("div",{className:"noteBox",children:[e.jsx("h3",{children:"Windows + L"}),e.jsx("p",{children:"One of the most useful shortcuts in shared spaces. It locks your machine instantly when stepping away."})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("h3",{children:"Ctrl + Shift + Esc"}),e.jsx("p",{children:"Very useful when a program freezes or starts acting like a deranged toaster."})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("h3",{children:"Alt + Tab"}),e.jsx("p",{children:"Great for multitasking because it reduces the need to hunt through taskbar icons."})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("h3",{children:"Windows + R"}),e.jsx("p",{children:"A fast entry point for commands, tools, folders, and administrative utilities."})]})]})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Best way to learn them"})]}),e.jsx("ul",{className:"tipList",children:b.map(r=>e.jsx("li",{children:r},r))}),e.jsx("p",{children:"Start with just three or four shortcuts and use them every day. That works much better than trying to memorize a giant cheat sheet in one sitting."})]}),e.jsxs(i.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Windows shortcut keys help you work faster by reducing dependence on the mouse. Even a small set of shortcuts like Windows + E, Windows + R, Alt + Tab, and Ctrl + Shift + Esc can improve daily workflow noticeably."})]})]});export{w as default};
