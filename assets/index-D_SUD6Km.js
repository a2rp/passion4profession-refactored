import{c as a,j as e,f as i,k as n,l as s,p as d,q as l,r as t,g as o}from"./index-DR_KT_2c.js";import{S as c}from"./index-D4exoH3I.js";const r={Wrapper:a.div`
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
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
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

        .diagramBox {
            margin-bottom: 16px;
        }

        .diagramOuter {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 18px;
        }

        .diagramTitle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 38px;
            padding: 0 14px;
            border-radius: 999px;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 14px;
            font-weight: 900;
            margin-bottom: 16px;
        }

        .diagramInnerRow {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .diagramCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: var(--color-surface-3);
            padding: 16px;
        }

        .diagramCard p {
            margin: 0;
            font-size: 14px;
        }

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 14px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .compareCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .compareCard.wide {
            grid-column: 1 / -1;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
        }

        .mono {
            font-family: "Courier New", Courier, monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            color: var(--color-code-text);
            padding: 10px 12px;
            border-radius: 10px;
            margin: 10px 0 12px !important;
            word-break: break-word;
        }
    `,Grid:a.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:a.article`
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

        .exampleMini {
            margin-top: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 14px;
        }

        .exampleMini strong {
            display: block;
            margin-bottom: 8px;
        }

        .exampleMini p {
            margin: 0;
            font-family: "Courier New", Courier, monospace;
            color: var(--color-code-text);
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 10px;
            padding: 10px 12px;
            word-break: break-word;
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
    `},h=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(i,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(n,{}),"Original topic: April 5, 2013"]}),e.jsx(c,{})]}),e.jsx("h1",{children:"Difference among URI, URL and URN"}),e.jsxs("p",{className:"lead",children:["URI, URL, and URN are related terms, but they are not the same thing. The easiest way to understand them is this:",e.jsx("strong",{children:" URI is the bigger category"}),", and URL and URN are two different ways of identifying a resource inside that category."]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Short answer"})]}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"URI"}),", or Uniform Resource Identifier, is a general identifier for a resource."]}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"URL"}),", or Uniform Resource Locator, is a type of URI that tells you ",e.jsx("strong",{children:"where"})," something is and usually ",e.jsx("strong",{children:"how to access it"}),"."]}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"URN"}),", or Uniform Resource Name, is a type of URI that gives a resource a ",e.jsx("strong",{children:"name"})," that is meant to stay stable and unique, even if the location changes."]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"What is a URI?"})]}),e.jsxs("p",{children:["URI stands for"," ",e.jsx("strong",{children:"Uniform Resource Identifier"}),". It is the broad umbrella term."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It identifies a resource"}),e.jsx("li",{children:"It may point to a location"}),e.jsx("li",{children:"It may only provide a name"}),e.jsx("li",{children:"It may sometimes do both"})]}),e.jsx("p",{children:"So when people say URL and URI are the same, that is not fully correct. A URL is a URI, but a URI is not always a URL."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"What is a URL?"})]}),e.jsxs("p",{children:["URL stands for ",e.jsx("strong",{children:"Uniform Resource Locator"}),". It identifies a resource by telling you where it is or how to get it."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It gives an address or access mechanism"}),e.jsx("li",{children:"It is commonly used on the web"}),e.jsx("li",{children:"It usually includes protocol and location details"})]}),e.jsxs("div",{className:"exampleMini",children:[e.jsx("strong",{children:"Example"}),e.jsx("p",{children:"https://example.com/articles/uri-basics"})]})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"What is a URN?"})]}),e.jsxs("p",{children:["URN stands for ",e.jsx("strong",{children:"Uniform Resource Name"}),". It identifies a resource by name instead of by location."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It focuses on identity, not access path"}),e.jsx("li",{children:"It is meant to be unique and persistent"}),e.jsx("li",{children:"The resource may move, but the name is intended to remain stable"})]}),e.jsxs("div",{className:"exampleMini",children:[e.jsx("strong",{children:"Example"}),e.jsx("p",{children:"urn:isbn:0451450523"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Why people get confused"})]}),e.jsx("p",{children:'In everyday web development, most examples people see are URLs. Because of that, many people casually say "URL" when the more general word should be "URI".'}),e.jsx("p",{children:"The confusion grows because some identifiers can behave like both a name and a locator depending on context. Technical standards are cleaner than casual internet conversation, which is a polite way of saying the web likes chaos."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Relationship between URI, URL, and URN"})]}),e.jsx("div",{className:"diagramBox",children:e.jsxs("div",{className:"diagramOuter",children:[e.jsx("div",{className:"diagramTitle",children:"URI"}),e.jsxs("div",{className:"diagramInnerRow",children:[e.jsxs("div",{className:"diagramCard",children:[e.jsx("h3",{children:"URL"}),e.jsx("p",{children:"Identifies by location or access method"})]}),e.jsxs("div",{className:"diagramCard",children:[e.jsx("h3",{children:"URN"}),e.jsx("p",{children:"Identifies by stable name"})]})]})]})}),e.jsx("p",{children:"The simplest mental model is:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"All URLs are URIs"}),e.jsx("li",{children:"All URNs are URIs"}),e.jsx("li",{children:"Not all URIs are URLs"}),e.jsx("li",{children:"Not all URIs are URNs"})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Easy real-world examples"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"URL example"}),e.jsx("p",{className:"mono",children:"https://openai.com/research"}),e.jsx("p",{children:"This tells you where the resource can be found and how it can be accessed through HTTPS."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"URN example"}),e.jsx("p",{className:"mono",children:"urn:isbn:9780131103627"}),e.jsx("p",{children:"This identifies a book by a naming scheme. It does not directly tell you where to fetch it from."})]}),e.jsxs("div",{className:"compareCard wide",children:[e.jsx("h3",{children:"URI idea"}),e.jsx("p",{children:"URI is the big parent concept. It covers anything that identifies a resource, whether that happens by location, by name, or sometimes both."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Standards-style explanation"})]}),e.jsx("p",{children:"According to internet standards, a URI can be classified as a locator, a name, or both. That means URL and URN are not competing concepts at the same level as URI. They are more like special cases under the broader URI idea."}),e.jsxs("p",{children:["So the old one-line conclusion still works beautifully:",e.jsx("strong",{children:" every URL is a URI"}),", but some URIs are URNs instead. Mud becomes slightly less muddy once the umbrella idea is clear."]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsxs("p",{children:["URI is the general term for identifying a resource. URL is a URI that locates a resource. URN is a URI that names a resource in a persistent way. The easiest memory trick is:",e.jsxs("strong",{children:[" ","URI is the big family, URL and URN are members of that family."]})]})]})]});export{h as default};
