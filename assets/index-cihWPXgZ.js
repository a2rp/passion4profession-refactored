import{c as r,j as e,d as s,a as n,l as t,ag as l,f as o,x as d}from"./index-DR_KT_2c.js";import{S as c}from"./index-D4exoH3I.js";const a={Wrapper:r.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:r.section`
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
    `,SectionCard:r.section`
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
            font-size: 17px;
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

        .timeline {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-top: 8px;
        }

        .timelineItem {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );

            @media (max-width: 640px) {
                flex-direction: column;
            }
        }

        .yearBox {
            min-width: 76px;
            min-height: 40px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 13px;
            font-weight: 900;
            line-height: 1;
        }

        .timelineContent {
            min-width: 0;
        }

        .timelineContent p {
            margin: 0;
            font-size: 14px;
        }

        .flagPreview {
            width: min(100%, 520px);
            margin: 18px 0;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--color-border);
            box-shadow: 0 18px 36px var(--color-shadow);
        }

        .stripe {
            height: 72px;
            width: 100%;
        }

        .stripe.saffron {
            background: #ff9933;
        }

        .stripe.white {
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .stripe.green {
            background: #138808;
        }

        .chakra {
            width: 44px;
            height: 44px;
            border-radius: 999px;
            border: 3px solid #000080;
            position: relative;
        }

        .chakra::before,
        .chakra::after {
            content: "";
            position: absolute;
            inset: 50%;
            background: #000080;
            transform: translate(-50%, -50%);
        }

        .chakra::before {
            width: 2px;
            height: 100%;
        }

        .chakra::after {
            width: 100%;
            height: 2px;
        }

        .meaningGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .meaningCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .meaningCard h3 {
            margin-bottom: 8px;
        }

        .meaningCard p {
            margin: 0;
            font-size: 14px;
        }
    `,Grid:r.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:r.article`
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
            margin: 12px 0 0;
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
    `,FooterNote:r.section`
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
    `},p="/passion4profession-refactored/assets/image-DE4zJM5a.png",h="/passion4profession-refactored/assets/flag-2osE0k55.png",x=[{year:"1906",title:"Early nationalist flag",text:"One of the earliest known versions associated with the Indian independence movement appeared in 1906. It used horizontal bands and symbolic elements to represent identity, resistance, and unity."},{year:"1907",title:"Another revolutionary variation",text:"A later variation associated with freedom movement circles appeared outside India as well. These early flags were not yet standardized, but they showed that a national symbol was beginning to take shape."},{year:"1917",title:"Home Rule movement phase",text:"During the Home Rule movement, another flag design appeared. It reflected the political struggle of the time, though it was still not the final national flag that India would later adopt."},{year:"1921",title:"Proposal with major community colors",text:"A flag proposal presented in 1921 is often remembered as an important step toward the modern Indian flag. It introduced a more deliberate idea of representing the people of India through bands and a central symbol."},{year:"1931",title:"A major turning point",text:"In 1931, a tricolor design with saffron, white, and green became an important milestone. This version is widely seen as a direct predecessor to the current national flag."},{year:"1947",title:"The national flag of independent India",text:"In 1947, India adopted the current national flag. The spinning wheel used in some earlier versions was replaced by the Ashoka Chakra, giving the final design its modern and official form."}],g=[{title:"Saffron",text:"Represents courage, sacrifice, and strength."},{title:"White",text:"Represents peace, truth, and clarity."},{title:"Green",text:"Represents growth, life, and prosperity."},{title:"Ashoka Chakra",text:"The navy blue wheel at the center represents law, motion, and righteous progress. A nation should move forward, not remain stagnant."}],u=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(s,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(n,{}),"Original topic: August 16, 2012"]}),e.jsx(c,{})]}),e.jsx("h1",{children:"Indian Flag - Evolution"}),e.jsx("p",{className:"lead",children:"The Indian national flag did not appear in its final form all at once. It evolved through different stages during the freedom movement, with each version reflecting political struggle, national identity, and the growing idea of an independent India."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Simple idea"})]}),e.jsx("p",{children:"The evolution of the Indian flag is the story of how a national symbol gradually developed before independence. Different versions were used at different times, and each design helped shape the final flag adopted in 1947."}),e.jsx("p",{children:"So when we talk about the evolution of the Indian flag, we are really talking about the evolution of national identity, public symbolism, and the freedom movement itself."})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Why flags matter"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"A flag creates visual identity for a nation"}),e.jsx("li",{children:"It gives people a shared symbol to rally around"}),e.jsx("li",{children:"During freedom movements, symbols become especially powerful"}),e.jsx("li",{children:"A flag can represent values, hope, and collective purpose"})]})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Important point"})]}),e.jsx("p",{children:"The early flags of India were not all official national flags in the modern sense. Many were proposed, movement-based, or transitional designs connected to the independence struggle."}),e.jsx("p",{children:"The official national flag of India in its current form was adopted in 1947."})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Timeline of evolution"})]}),e.jsx("img",{src:p,alt:""}),e.jsx("div",{className:"timeline",children:x.map(i=>e.jsxs("article",{className:"timelineItem",children:[e.jsx("div",{className:"yearBox",children:i.year}),e.jsxs("div",{className:"timelineContent",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]})]},i.year))})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"The final national flag"})]}),e.jsx("p",{children:"The modern national flag of India is a horizontal tricolor with saffron at the top, white in the middle, and green at the bottom. At the center of the white band is the navy blue Ashoka Chakra."}),e.jsx("div",{className:"flagPreview",children:e.jsx("img",{src:h,alt:""})}),e.jsx("p",{children:"This final form balances symbolism, simplicity, and national identity. It is one of the most recognizable national flags in the world."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Meaning of the major elements"})]}),e.jsx("div",{className:"meaningGrid",children:g.map(i=>e.jsxs("article",{className:"meaningCard",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]},i.title))})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Why the design changed over time"})]}),e.jsx("p",{children:"The design changed because India itself was going through political and social transformation. Early flags reflected ideas, movements, and communities, but the final national flag needed to stand for the whole nation in a more unified and lasting way."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Earlier designs were part of political movements"}),e.jsx("li",{children:"Later designs moved toward a broader national identity"}),e.jsx("li",{children:"Symbols were refined to create a more stable final form"}),e.jsx("li",{children:"The final flag had to represent an independent republic"})]})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"The Indian flag evolved through several important stages before independence. Early versions helped build a national identity during the freedom movement, and the final tricolor with the Ashoka Chakra became the official symbol of independent India in 1947."})]})]});export{u as default};
