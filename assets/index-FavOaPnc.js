import{c as i,j as e,q as s,a as t,l as o,aj as l,f as d,g as c,ak as p}from"./index-DR_KT_2c.js";import{S as h}from"./index-D4exoH3I.js";const a={Wrapper:i.div`
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
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        ul,
        ol {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 12px;
            padding-left: 0;
        }

        ul li,
        ol li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
            list-style: none;
        }

        ul li::before,
        ol li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }

        .continentGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 820px) {
                grid-template-columns: 1fr;
            }
        }

        .continentCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .continentCard h3 {
            margin-bottom: 8px;
        }

        .continentCard p {
            font-size: 14px;
            line-height: 1.75;
        }

        .continentCard ul {
            margin-top: 12px;
        }

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

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

        ol {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 12px;
            padding-left: 0;
        }

        ol li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
            list-style: none;
        }

        ol li::before {
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
    `},m="/passion4profession-refactored/assets/image-Cvz9QNFL.png",x=[{name:"Asia",summary:"The largest and most populous continent. It includes countries such as India, China, Japan, and many others.",points:["Largest continent by land area","Largest population in the world","Contains a wide range of climates, cultures, and languages"]},{name:"Africa",summary:"Known for its vast deserts, rich biodiversity, and deep human history. It is the second largest continent.",points:["Second largest continent by area","Home to the Sahara Desert","Important in the story of early human origins"]},{name:"North America",summary:"Includes countries like Canada, the United States, and Mexico, along with many islands and smaller nations.",points:["Contains Canada, USA, and Mexico","Has mountains, plains, forests, and deserts","Strong geographic and cultural diversity"]},{name:"South America",summary:"Famous for the Amazon rainforest, the Andes mountains, and a rich mix of cultures and ecosystems.",points:["Home to the Amazon rainforest","Contains the Andes mountain range","Connected to North America by the Isthmus of Panama"]},{name:"Europe",summary:"A relatively small continent by area, but historically important in trade, science, politics, and industrial development.",points:["Smaller in size compared to Asia and Africa","Strong historical influence on modern world systems","Closely connected to Asia in the Eurasian landmass"]},{name:"Australia",summary:"The smallest continent, sometimes referred to in broader regional discussions as part of Oceania.",points:["Smallest continent by land area","Includes unique wildlife and ecosystems","Often discussed together with nearby Pacific islands in regional geography"]},{name:"Antarctica",summary:"The coldest continent, mostly covered by ice, with no permanent resident population.",points:["Covered mostly by ice","Coldest continent on Earth","Used mainly for scientific research stations"]}],g=["Asia","Africa","North America","South America","Europe","Australia","Antarctica"],u=["Asia","Africa","North America","South America","Antarctica","Europe and Asia together as Eurasia","Australia in broader regional discussion may be grouped within Oceania depending on context"],b=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(s,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(t,{}),"Original topic: August 14, 2012"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"World Continents"}),e.jsx("p",{className:"lead",children:"Continents are the large land divisions of Earth used in geography to organize the planet into major regions. In the most commonly taught model, there are 7 continents: Asia, Africa, North America, South America, Europe, Australia, and Antarctica."})]}),e.jsx(a.SectionCard,{children:e.jsx("img",{src:m,alt:""})}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:"A continent is a very large continuous landmass on Earth. The idea is mainly geographic, but it is also influenced by history, culture, and education systems. That means continent boundaries are not always defined by pure physics alone. Humans, as usual, added a little classification chaos."}),e.jsx("p",{children:"In school-level geography, the 7-continent model is the most common and easiest to understand."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"The 7 continents"})]}),e.jsx("div",{className:"continentGrid",children:x.map(r=>e.jsxs("article",{className:"continentCard",children:[e.jsx("h3",{children:r.name}),e.jsx("p",{children:r.summary}),e.jsx("ul",{children:r.points.map(n=>e.jsx("li",{children:n},n))})]},r.name))})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Most common model"})]}),e.jsx("p",{children:"The 7-continent model is the most familiar one in many schools and general references."}),e.jsx("ol",{children:g.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Why some people say 6 continents"})]}),e.jsx("p",{children:"In some classifications, Europe and Asia are grouped as Eurasia because they are part of one large connected landmass. In some regional discussions, Australia is also discussed together with nearby islands under the broader idea of Oceania."}),e.jsx("ol",{children:u.map(r=>e.jsx("li",{children:r},r))})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Important thing to understand"})]}),e.jsx("p",{children:"Continents are not always separated in a perfectly simple way. For example, Europe and Asia are connected by land. Their separation is mostly a historical and cultural convention rather than a huge ocean boundary like the one between Africa and South America."}),e.jsx("p",{children:"So the concept of continents is partly physical geography and partly human classification. Science gives the land. Humans give the labels. The universe, meanwhile, stays politely silent."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Quick comparison"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Physical side"}),e.jsx("p",{children:"Large connected landmasses, oceans, ice, and surface geography."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Human side"}),e.jsx("p",{children:"Historical naming, cultural grouping, and school geography conventions."})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"For general learning, exams, and basic geography, it is safest to remember the 7 continents: Asia, Africa, North America, South America, Europe, Australia, and Antarctica."}),e.jsx("p",{children:"At the same time, it is also useful to know that some systems use different grouping methods, which is why people sometimes talk about 6 continents instead of 7."})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Continents are the major land divisions of Earth. The most common model uses 7 continents, but other classification systems also exist. The idea is simple for basic geography, though the exact grouping can depend on historical and cultural conventions."})]})]});export{b as default};
