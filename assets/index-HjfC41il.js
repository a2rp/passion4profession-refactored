import{c as i,j as e,F as o,a as n,Q as s,t,y as d,ah as l,g as c}from"./index-BxgJM-x-.js";import{S as p}from"./index-D6FK_vhk.js";const r={Wrapper:i.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:i.section`
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
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }

        .heroMetaGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 22px;

            @media (max-width: 860px) {
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
            font-size: 15px;
            line-height: 1.1;
            margin-bottom: 4px;
        }

        .metaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionCard:i.section`
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
            font-size: 18px;
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

        .benefitGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 14px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .benefitCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .benefitCard p {
            font-size: 14px;
            line-height: 1.75;
        }
    `,CodeSection:i.section`
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

        .tableCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .tableHead,
        .tableRow {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 180px;
            gap: 12px;
            align-items: center;

            @media (max-width: 640px) {
                grid-template-columns: minmax(0, 1fr) 110px;
            }
        }

        .tableHead {
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
            padding: 14px 16px;
            border-bottom: 1px solid var(--color-border);
        }

        .tableRow {
            padding: 14px 16px;
            border-bottom: 1px solid var(--color-border);
        }

        .tableRow:last-child {
            border-bottom: none;
        }

        .providerCell {
            color: var(--color-text-primary);
            font-size: 14px;
            font-weight: 700;
            line-height: 1.5;
        }

        .codeCell {
            color: var(--color-text-secondary);
            font-size: 14px;
            font-weight: 800;
            text-align: right;
            word-break: break-word;
        }
    `,Grid:i.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:i.article`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 20px;

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
            line-height: 1.15;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.8;
        }

        p + p {
            margin-top: 12px;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 12px;
        }

        ul li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        ul li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `,FooterNote:i.section`
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
    `},h=[{provider:"Docomo",code:"*580#"},{provider:"Airtel",code:"*121*9#"},{provider:"Reliance",code:"*1#"},{provider:"Vodafone",code:"*777*0#"},{provider:"BSNL",code:"*1#"},{provider:"Idea",code:"*1#"},{provider:"Aircel",code:"*888#"},{provider:"Virgin Mobile",code:"*1#"},{provider:"Videocon",code:"*1#"}],x=["These codes are from the original archive image dated July 16, 2012.","Telecom operators, USSD codes, and branding may have changed since then.","Some operators shown in the old post may no longer exist in the same form.","Use this page as an archive record first, and a modern guide only after verification."],b=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(n,{}),"Original topic: July 16, 2012"]}),e.jsx(p,{})]}),e.jsx("h1",{children:"Check your mobile number"}),e.jsx("p",{className:"lead",children:"This archive post was originally a quick image-based cheat sheet showing USSD codes for checking your own mobile number across several telecom operators. This refactored version preserves that old reference in a cleaner, readable layout."}),e.jsxs("div",{className:"heroMetaGrid",children:[e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Type"}),e.jsx("span",{children:"Quick telecom utility note"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(t,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Original format"}),e.jsx("span",{children:"Single image reference post"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(d,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Main purpose"}),e.jsx("span",{children:"Carrier-wise number check codes"})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"What the original post contained"})]}),e.jsx("p",{children:'The original blog entry did not have a long written explanation. It was essentially a utility image titled "Check your mobile number" and showed operator names with their corresponding USSD codes for checking the number linked to the SIM.'}),e.jsx("p",{children:"That makes this page a neat little internet fossil from the era when people collected practical phone tricks, Windows tweaks, shortcut lists, and similar pocket references."})]}),e.jsxs(r.CodeSection,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Codes shown in the original archive post"})]}),e.jsxs("div",{className:"tableCard",children:[e.jsxs("div",{className:"tableHead",children:[e.jsx("div",{children:"Operator"}),e.jsx("div",{children:"USSD code"})]}),e.jsx("div",{className:"tableBody",children:h.map(a=>e.jsxs("div",{className:"tableRow",children:[e.jsx("div",{className:"providerCell",children:a.provider}),e.jsx("div",{className:"codeCell",children:a.code})]},`${a.provider}-${a.code}`))})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Important archive note"})]}),e.jsx("ul",{children:x.map(a=>e.jsx("li",{children:a},a))})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Why this post mattered then"})]}),e.jsx("p",{children:"Back then, many users did not always remember which number belonged to which SIM, especially with multiple prepaid SIM cards. A tiny code list like this was genuinely useful."}),e.jsx("p",{children:"It is simple, but it captures the spirit of early practical blogging: small problem, quick solution, done."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Why this refactored version is better"})]}),e.jsx("p",{children:"The original image was useful, but images are not great for searching, accessibility, or structured reading. This version converts the post into readable text, preserves the original intent, and makes the archive easier to maintain."}),e.jsxs("div",{className:"benefitGrid",children:[e.jsxs("div",{className:"benefitCard",children:[e.jsx("h3",{children:"Readable"}),e.jsx("p",{children:"The old image data is now readable as text."})]}),e.jsxs("div",{className:"benefitCard",children:[e.jsx("h3",{children:"Searchable"}),e.jsx("p",{children:"Users can now search and scan the information quickly."})]}),e.jsxs("div",{className:"benefitCard",children:[e.jsx("h3",{children:"Expandable"}),e.jsx("p",{children:"You can later add modern carrier updates, screenshots, or region-specific notes."})]}),e.jsxs("div",{className:"benefitCard",children:[e.jsx("h3",{children:"Preserved"}),e.jsx("p",{children:"The original archive meaning stays intact without getting buried under random filler."})]})]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:'The original "Check your mobile number" post was a compact image-based telecom reference from July 2012. This refactored page preserves the carrier-wise number-check codes shown there and presents them in a cleaner archive format.'})]})]});export{b as default};
