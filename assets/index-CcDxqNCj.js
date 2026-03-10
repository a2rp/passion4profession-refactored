import{c as o,j as e,F as t,a as l,b as a,d as s,e as d,f as n}from"./index-DR_KT_2c.js";import{S as c}from"./index-D4exoH3I.js";const i={Wrapper:o.div`
        width: 100%;
        color: var(--color-text-primary);
    `,HeroSection:o.section`
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 94%, transparent),
            color-mix(in srgb, var(--color-bg) 100%, transparent)
        );

        .heroGlow {
            position: absolute;
            border-radius: 999px;
            filter: blur(60px);
            pointer-events: none;
            opacity: 0.28;
        }

        .heroGlowOne {
            width: 260px;
            height: 260px;
            top: -80px;
            left: 4%;
            background: rgba(255, 255, 255, 0.08);
        }

        .heroGlowTwo {
            width: 280px;
            height: 280px;
            right: 5%;
            bottom: -100px;
            background: rgba(255, 255, 255, 0.05);
        }

        .heroInner {
            width: 100%;
            max-width: var(--content-width);
            margin: 0 auto;
            padding: 56px 20px 48px;
            position: relative;
            z-index: 1;
        }

        .eyebrowRow {
            margin-bottom: 18px;
        }

        .eyebrowBadge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            min-height: 36px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.03em;
        }

        .eyebrowBadge svg {
            color: var(--color-primary);
            flex-shrink: 0;
        }

        h1 {
            font-size: clamp(34px, 5vw, 60px);
            line-height: 0.98;
            letter-spacing: -0.04em;
            margin-bottom: 16px;
        }

        .heroText {
            max-width: 760px;
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-text-secondary);
            margin-bottom: 15px;
        }

        .metaRow {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 28px;

            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
        }

        .metaCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px 18px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            box-shadow: 0 14px 32px var(--color-shadow);
        }

        .metaIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .metaIcon svg {
            width: 18px;
            height: 18px;
        }

        .metaCard strong {
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
        }

        .metaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        html[data-theme="light"] & {
            .heroGlowOne {
                background: rgba(0, 0, 0, 0.08);
            }

            .heroGlowTwo {
                background: rgba(0, 0, 0, 0.05);
            }
        }
    `,ContentSection:o.section`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 28px 20px 0;

        .contentGrid {
            display: grid;
            grid-template-columns: minmax(0, 1.6fr) minmax(280px, 0.9fr);
            gap: 18px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .mainCard,
        .sideCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 22px;
        }

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .sectionIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .sectionIcon svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 22px;
            line-height: 1.15;
        }

        p + p {
            margin-top: 12px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.8;
            font-size: 15px;
        }

        .sourceLink {
            display: inline-flex;
            align-items: center;
            min-height: 42px;
            padding: 0 14px;
            margin-top: 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            text-decoration: none;
            font-weight: 700;
            word-break: break-word;
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                color var(--transition-fast),
                transform var(--transition-fast);
        }

        .sourceLink:hover {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
            text-decoration: none;
            transform: translateY(-1px);
        }
    `,HighlightsSection:o.section`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 28px 20px 0;

        .sectionTitleRow {
            margin-bottom: 16px;
        }

        .sectionTitleRow h2 {
            font-size: 26px;
            line-height: 1.1;
            margin-bottom: 6px;
        }

        .sectionTitleRow p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
        }

        .highlightGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .highlightCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            padding: 20px;
            box-shadow: 0 18px 40px var(--color-shadow);
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast);
        }

        .highlightCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface-2) 0%,
                var(--color-surface-3) 100%
            );
        }

        .highlightIcon {
            width: 44px;
            height: 44px;
            margin-bottom: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .highlightIcon svg {
            width: 20px;
            height: 20px;
        }

        .highlightCard h3 {
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        .highlightCard p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }
    `,PurposeSection:o.section`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 28px 20px 0;

        .purposeGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .purposeCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 22px;
        }

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .sectionIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .sectionIcon svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 22px;
            line-height: 1.15;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.8;
            font-size: 15px;
        }

        p + p {
            margin-top: 12px;
        }

        .focusList {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 4px;
        }

        .focusList li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .focusList li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `,FooterNote:o.section`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 28px 20px 36px;

        .noteBox {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 96%, transparent),
                color-mix(in srgb, var(--color-surface-2) 100%, transparent)
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 22px;
        }

        .noteBox h2 {
            font-size: 22px;
            line-height: 1.15;
            margin-bottom: 10px;
        }

        .noteBox p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.8;
            max-width: 760px;
        }
    `},p=[{icon:e.jsx(t,{}),title:"Archive of old blog posts",text:"This project preserves topics from the original Passion4Profession blog and brings them into a cleaner internal route structure."},{icon:e.jsx(a,{}),title:"Refactored and rewritten",text:"Old posts are being rewritten with better clarity, updated structure, and cleaner presentation while keeping the original spirit alive."},{icon:e.jsx(s,{}),title:"Learning-first notes",text:"The content focuses on simple explanations, foundational concepts, and easy-to-browse notes that are useful for revision and understanding."},{icon:e.jsx(n,{}),title:"Organized archive system",text:"Instead of scattered Blogger links, this version uses dedicated internal routes so every topic can grow into its own full page over time."}],h=["Preserve the original blog archive from college days","Rewrite topics in a cleaner and more readable format","Build dedicated routes for each old post topic","Turn rough notes into a structured computing archive","Keep the project simple, searchable, and expandable"],m=()=>e.jsxs(i.Wrapper,{children:[e.jsxs(i.HeroSection,{children:[e.jsx("div",{className:"heroGlow heroGlowOne"}),e.jsx("div",{className:"heroGlow heroGlowTwo"}),e.jsxs("div",{className:"heroInner",children:[e.jsx("div",{className:"eyebrowRow",children:e.jsxs("span",{className:"eyebrowBadge",children:[e.jsx(t,{}),"Blog Archive Project"]})}),e.jsx("h1",{children:"About this project"}),e.jsx("p",{className:"heroText",children:"Passion4Profession Refactored is a rebuilt version of my old college-day blog archive. The goal is to preserve those early topics, rewrite them more clearly, and place them into a cleaner route-based knowledge system."}),e.jsx(c,{}),e.jsxs("p",{children:[e.jsx("br",{}),"Originally written between 2012 and 2014 during my early exploration of computing concepts."]}),e.jsxs("div",{className:"metaRow",children:[e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(l,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Then"}),e.jsx("span",{children:"Old Blogger posts and rough notes"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(a,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Now"}),e.jsx("span",{children:"Refactored archive with internal pages"})]})]})]})]})]}),e.jsx(i.ContentSection,{children:e.jsxs("div",{className:"contentGrid",children:[e.jsxs("section",{className:"mainCard",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"sectionIcon",children:e.jsx(s,{})}),e.jsx("h2",{children:"What this site is"})]}),e.jsx("p",{children:"This site is not a brand new blog pretending to be born yesterday. It is a restoration project. Earlier, the content lived on Blogger as short posts, references, rough notes, and small topic writeups. Now those ideas are being moved into a modern React structure where each topic can have its own route and its own proper page."}),e.jsx("p",{children:"Some topics are small fundamentals, some are quick references, and some are curious little internet-era notes from that phase of learning. The point is not to hide that history. The point is to organize it better."})]}),e.jsxs("section",{className:"sideCard",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"sectionIcon",children:e.jsx(d,{})}),e.jsx("h2",{children:"Original source"})]}),e.jsx("p",{children:"The original archive started here and this project builds on that foundation."}),e.jsx("a",{href:"https://passion4profession.blogspot.com/",target:"_blank",rel:"noreferrer",className:"sourceLink",children:"passion4profession.blogspot.com"})]})]})}),e.jsxs(i.HighlightsSection,{children:[e.jsxs("div",{className:"sectionTitleRow",children:[e.jsx("h2",{children:"Project highlights"}),e.jsx("p",{children:"What makes this archive useful now"})]}),e.jsx("div",{className:"highlightGrid",children:p.map(r=>e.jsxs("article",{className:"highlightCard",children:[e.jsx("div",{className:"highlightIcon",children:r.icon}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]},r.title))})]}),e.jsx(i.PurposeSection,{children:e.jsxs("div",{className:"purposeGrid",children:[e.jsxs("section",{className:"purposeCard",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"sectionIcon",children:e.jsx(n,{})}),e.jsx("h2",{children:"Why I am rebuilding it"})]}),e.jsx("p",{children:"Old knowledge has value, but old structure often does not. Blogger links, scattered titles, and tiny posts are fine for the moment they were written, but not ideal for long-term use. Rebuilding the archive makes it easier to expand each idea properly."}),e.jsx("p",{children:"This also turns the archive into something more usable: a personal reference, a learning resource, and a cleaner foundation for future notes."})]}),e.jsxs("section",{className:"purposeCard",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"sectionIcon",children:e.jsx(t,{})}),e.jsx("h2",{children:"Current focus"})]}),e.jsx("ul",{className:"focusList",children:h.map(r=>e.jsx("li",{children:r},r))})]})]})}),e.jsx(i.FooterNote,{children:e.jsxs("div",{className:"noteBox",children:[e.jsx("h2",{children:"In simple words"}),e.jsx("p",{children:"This project is a cleaned-up archive of old blog ideas. Same roots, better structure, clearer writing, and room to grow each topic into something actually useful."})]})})]});export{m as default};
