import{c as i,j as e,o,a as n,l as a,s as t,g as l,w as d,q as c,f as h}from"./index-D1C0sqWO.js";import{S as x}from"./index-DpzaY4xy.js";const r={Wrapper:i.div`
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
            max-width: 840px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
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
            font-size: 16px;
            line-height: 1.2;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 12px 0;
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

        .timeline {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-top: 8px;
        }

        .timeItem {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .dot {
            width: 12px;
            height: 12px;
            margin-top: 6px;
            border-radius: 999px;
            flex-shrink: 0;
            background: var(--color-text-primary);
        }

        .timeItem strong {
            display: block;
            margin-bottom: 4px;
        }

        .timeItem p {
            margin: 0;
            font-size: 14px;
        }

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin: 16px 0;

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .compareCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .compareCard h3 {
            margin-bottom: 8px;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
        }

        .exampleBox {
            margin: 16px 0;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .exampleBox h3 {
            margin-bottom: 8px;
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

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 12px 0;
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
    `},p=[{label:".html",text:"Longer and more descriptive extension. Very common in modern systems and web projects."},{label:".htm",text:"Shorter alternate form that became common because older systems preferred 3-character extensions."}],m=["Both .htm and .html represent HTML documents","The content inside the file can be exactly the same","The difference is mainly historical and naming-related","Modern systems and browsers usually support both","Today, .html is generally more common and clearer"],u=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(n,{}),"Original topic: January 21, 2013"]}),e.jsx(x,{})]}),e.jsx("h1",{children:"What is the difference between HTM and HTML?"}),e.jsxs("p",{className:"lead",children:["In practical use, ",e.jsx("strong",{children:".htm"})," and"," ",e.jsx("strong",{children:".html"})," are both used for HTML webpages. They usually serve the same purpose and can contain the same markup. The main difference is historical: one is a shorter extension, and the other is the full form."]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Simple answer"})]}),e.jsxs("p",{children:["There is no real difference in what the browser renders. A file named ",e.jsx("strong",{children:"page.htm"})," and a file named"," ",e.jsx("strong",{children:"page.html"})," can both be normal HTML pages."]}),e.jsxs("p",{children:["The difference is mainly in the extension name. The shorter",e.jsx("strong",{children:" .htm "})," version became popular when older systems preferred file extensions with only 3 characters. The longer ",e.jsx("strong",{children:".html"})," version is the more descriptive and commonly preferred form today."]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"What both extensions mean"})]}),e.jsx("p",{children:"Both extensions point to HTML documents, which are files written using HyperText Markup Language."}),e.jsxs("ul",{children:[e.jsx("li",{children:".html = full extension name"}),e.jsx("li",{children:".htm = shortened alternate extension"}),e.jsx("li",{children:"Both are generally recognized by browsers"}),e.jsx("li",{children:"Both can be used for static webpages"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Important clarification"})]}),e.jsx("p",{children:"The extension does not change HTML into a different web language. It is still the same kind of document."}),e.jsxs("ul",{children:[e.jsx("li",{children:".htm is not a separate technology"}),e.jsx("li",{children:".html is not more powerful than .htm"}),e.jsx("li",{children:"The file content matters more than the extension name"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Why did .htm become common?"})]}),e.jsxs("p",{children:["Older systems such as DOS and early Windows environments often worked best with short file extensions. Because of that, the longer ",e.jsx("strong",{children:".html"})," extension was often shortened to ",e.jsx("strong",{children:".htm"}),"."]}),e.jsxs("div",{className:"timeline",children:[e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Older file naming habits"}),e.jsx("p",{children:"Short extensions were more common and easier for older systems to work with."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"HTML files needed a shorter form"}),e.jsx("p",{children:"So .html often became .htm on systems that preferred 3-character suffixes."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Modern systems improved"}),e.jsx("p",{children:"Later operating systems and tools handled longer names easily, so .html became very common."})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Do browsers treat them differently?"})]}),e.jsx("p",{children:"In normal use, browsers treat both as HTML files as long as the server and file setup are correct. If the file contains valid HTML markup, the browser will render it as a webpage."}),e.jsx("p",{children:"So from the user point of view, there is usually no visible difference at all."}),e.jsx("div",{className:"compareGrid",children:p.map(s=>e.jsxs("article",{className:"compareCard",children:[e.jsx("h3",{children:s.label}),e.jsx("p",{children:s.text})]},s.label))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Where confusion usually happens"})]}),e.jsx("p",{children:"People sometimes think that .htm and .html are different file types. They are not. The confusion happens because the names are different, but their role is normally the same."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Both can contain plain HTML markup"}),e.jsx("li",{children:"Both can be opened in browsers"}),e.jsx("li",{children:"Both can be edited in code editors"}),e.jsx("li",{children:"Both can be used as webpage files on servers"})]}),e.jsx("p",{children:"The real differences in web behavior usually come from the file content, server configuration, or MIME type handling, not from choosing .htm versus .html."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Which one should you use today?"})]}),e.jsxs("p",{children:["Today, ",e.jsx("strong",{children:".html"})," is usually the better default choice because it is clearer, more descriptive, and more common in modern projects."]}),e.jsxs("div",{className:"exampleBox",children:[e.jsx("h3",{children:"Good practical choice"}),e.jsx("ul",{children:m.map(s=>e.jsx("li",{children:s},s))})]}),e.jsxs("p",{children:["That said, if a project already uses ",e.jsx("strong",{children:".htm"}),", it is usually fine to continue using it consistently. Consistency matters more than theatrical extension drama."]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsxs("p",{children:[e.jsx("strong",{children:".htm"})," and ",e.jsx("strong",{children:".html"})," both refer to HTML webpage files. The difference is mainly historical: .htm became common because older systems preferred shorter extensions, while .html is the full and more descriptive form that is widely used today."]})]})]});export{u as default};
