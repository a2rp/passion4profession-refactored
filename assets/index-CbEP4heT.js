import{c as s,j as e,f as i,a as l,l as n,aj as o,q as c,g as d}from"./index-BxgJM-x-.js";import{S as p}from"./index-D6FK_vhk.js";const a={Wrapper:s.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:s.section`
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
    `,SectionCard:s.section`
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

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

            @media (max-width: 760px) {
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

        .exampleBox {
            margin: 16px 0 0;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .exampleBox p {
            margin: 0;
            font-size: 14px;
        }
    `,Grid:s.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:s.article`
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
    `,FooterNote:s.section`
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
    `,pillGrid:s.div``,PillHelper:s.div``},h="/passion4profession-refactored/assets/image-Cvz9QNFL.png",t=["Africa","Antarctica","Asia","Australia","Europe","North America","South America"],x=["Africa","America","Antarctica","Asia","Australia","Europe"],m=["Africa","Antarctica","Australia","Eurasia","North America","South America"],g=["There is no single worldwide rule that every school follows in exactly the same way.","The 7-continent model is one of the most commonly taught models.","Some places combine North America and South America into one continent called America.","Some discussions combine Europe and Asia into Eurasia because they form one large landmass.","Continents are not exactly the same thing as world regions."],j=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(i,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: August 14, 2012"]}),e.jsx(p,{})]}),e.jsx("h1",{children:"Six or seven continents on Earth?"}),e.jsxs("p",{className:"lead",children:["A common answer is ",e.jsx("strong",{children:"seven continents"}),", but some educational systems and geographic traditions use"," ",e.jsx("strong",{children:"six"}),". The reason is simple: continents are not defined only by pure geology. Historical teaching traditions and regional conventions also shape how they are counted."]})]}),e.jsx(a.SectionCard,{children:e.jsx("img",{src:h,alt:""})}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Short answer"})]}),e.jsxs("p",{children:["If someone asks this in a general school-level context, the safest answer is usually ",e.jsx("strong",{children:"seven continents"}),". That is the model many students learn:"]}),e.jsx("div",{className:"pillGrid",children:t.map(r=>e.jsx("span",{className:"pill",children:r},r))}),e.jsx("p",{children:"But six-continent models also exist, so the deeper answer is that the count depends on the classification system being used."})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"The 7-continent model"})]}),e.jsx("p",{children:"This is one of the most widely taught models, especially in many school systems. It treats North America and South America as separate continents, and it also treats Europe and Asia as separate continents."}),e.jsx("ul",{children:t.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Why people also say 6"})]}),e.jsx("p",{children:"There is more than one 6-continent model. That is where the fun little chaos begins."}),e.jsxs("ul",{children:[e.jsx("li",{children:"One model combines North America and South America into a single continent called America"}),e.jsx("li",{children:"Another model combines Europe and Asia into Eurasia"})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Two different 6-continent models"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"6 continents by combining the Americas"}),e.jsxs("p",{children:["In this model, North America and South America are treated as one continent called"," ",e.jsx("strong",{children:"America"}),"."]}),e.jsx("div",{className:"pillGrid compact",children:x.map(r=>e.jsx("span",{className:"pill",children:r},r))})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"6 continents by combining Europe and Asia"}),e.jsxs("p",{children:["In this model, Europe and Asia are grouped together as ",e.jsx("strong",{children:"Eurasia"})," because they form one large connected landmass."]}),e.jsx("div",{className:"pillGrid compact",children:m.map(r=>e.jsx("span",{className:"pill",children:r},r))})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Why there is no perfectly universal answer"})]}),e.jsx("p",{children:"People often assume continents are a purely scientific fact with one exact final answer carved into cosmic stone. Not quite. The number depends partly on physical geography and partly on human convention."}),e.jsx("ul",{children:g.map(r=>e.jsx("li",{children:r},r))}),e.jsx("p",{children:"That is why different textbooks, countries, and teachers may present slightly different continent counts."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Continents vs regions"})]}),e.jsx("p",{children:"Continents and world regions are not exactly the same thing. A continent is a broad landmass classification. A region is a practical grouping used for study, politics, economy, culture, or administration."}),e.jsxs("div",{className:"exampleBox",children:[e.jsx("h3",{children:"Example"}),e.jsx("p",{children:"People may divide the world into regions such as Europe, South America, the Middle East, North Africa, or Oceania. These groupings are useful, but they are not all continents."})]}),e.jsx("p",{children:"So when discussing the world, geographers often use regions for analysis even when the continent count is being debated."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Best practical answer for students"})]}),e.jsxs("p",{children:["If your school or exam follows the common modern classroom model, answer ",e.jsx("strong",{children:"seven continents"}),"."]}),e.jsxs("p",{children:["If the discussion is more advanced, mention that some systems use ",e.jsx("strong",{children:"six"})," by combining either:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"North America and South America into America"}),e.jsx("li",{children:"Europe and Asia into Eurasia"})]}),e.jsx("p",{children:"That gives a more complete and intellectually honest answer."})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"The most commonly taught answer is that Earth has seven continents. However, six-continent models also exist, depending on whether the Americas are combined or Europe and Asia are combined into Eurasia. So the count is partly a matter of convention, not just a hard physical rule."})]})]});export{j as default};
