import{c as o,j as e,F as n,a as l,l as d,aO as a,z as i,an as t,R as c,am as p}from"./index-BxgJM-x-.js";import{S as h}from"./index-D6FK_vhk.js";const r={Wrapper:o.div`
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
            max-width: 820px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
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

        &.imageWrapper {
            /* height: 500px; */
            display: flex;
            justify-content: center;

            img {
                height: 100%;
            }
        }

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

        .focusList {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 6px;
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

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin: 16px 0;

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

        .compareCard h3 {
            margin-bottom: 8px;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
        }

        .compareCard.less {
            box-shadow: inset 3px 0 0 var(--color-text-muted);
        }

        .compareCard.more {
            box-shadow: inset 3px 0 0 var(--color-text-primary);
        }
    `,StoryCard:o.section`
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

        .storyFlow {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .storyStep {
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
            padding: 14px;
        }

        .stepNo {
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 14px;
            font-weight: 900;
            line-height: 1;
        }

        .storyStep strong {
            display: block;
            margin-bottom: 4px;
        }

        .storyStep p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }
    `,Grid:o.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:o.article`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 20px;

        .topRow {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
        }

        .miniIcon {
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

        .miniIcon svg {
            width: 18px;
            height: 18px;
        }

        h3 {
            font-size: 18px;
            line-height: 1.2;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.8;
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
    `},x="/passion4profession-refactored/assets/image-Cu2vQ7zb.png",m=[{icon:e.jsx(t,{}),title:"The work matters, but the quality matters more",text:"What you do has importance, but how well you do it often shapes your long-term identity and growth."},{icon:e.jsx(a,{}),title:"Career labels are not everything",text:"People often chase job titles, famous companies, and prestige, but consistent effort usually matters more than labels."},{icon:e.jsx(p,{}),title:"Excellence creates opportunity",text:"When a person performs sincerely and skillfully, that quality tends to create trust, recognition, and progress over time."},{icon:e.jsx(i,{}),title:"First deserve, then desire",text:"Wanting success is easy. Becoming worthy of success through discipline and good work is the harder and more important part."}],g=["Do not depend only on the brand name of a company to define your future.","Do not assume that only a few professions deserve respect.","Do not underestimate the power of doing ordinary work extraordinarily well.","Do not wait for the perfect place before giving your best effort.","Let your standard of work become your identity."],b=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: May 30, 2012"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"Deserve Before You Desire"}),e.jsx("p",{className:"lead",children:"This note is about a simple but powerful idea: before asking for success, status, recognition, or a dream position, first become worthy of them through the quality of your work."})]}),e.jsx(r.SectionCard,{className:"imageWrapper",children:e.jsx("img",{src:x,alt:""})}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Refactored idea"})]}),e.jsx("p",{children:"The original post described a seminar where a successful CEO was trying to explain something important to students. His message was not that work itself is meaningless. His real point was that the way you perform your work matters more than the prestige people attach to it."}),e.jsx("p",{children:'Many students were focused on "chosen" professions, famous companies, and ideal career paths. But the deeper lesson was this: whether you get your dream role immediately or not, your seriousness, discipline, and excellence still matter.'})]}),e.jsxs(r.StoryCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"The message behind the seminar story"})]}),e.jsxs("div",{className:"storyFlow",children:[e.jsxs("div",{className:"storyStep",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"A CEO speaks to students"}),e.jsx("p",{children:"He tries to explain that success depends less on the label of the work and more on how well the work is done."})]})]}),e.jsxs("div",{className:"storyStep",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Students raise doubts"}),e.jsx("p",{children:"Some believe that only a few professions are truly valuable. Some think that only big companies can guarantee a better future."})]})]}),e.jsxs("div",{className:"storyStep",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"The core misunderstanding appears"}),e.jsx("p",{children:"They are treating status as the source of success, while the CEO is trying to show that excellence in action is the real source."})]})]}),e.jsxs("div",{className:"storyStep",children:[e.jsx("span",{className:"stepNo",children:"4"}),e.jsxs("div",{children:[e.jsx("strong",{children:"The lesson becomes clear"}),e.jsx("p",{children:"Some people start exactly where they want. Many do not. But in either case, what finally builds reputation is the quality of what they do."})]})]})]})]}),e.jsx(r.Grid,{children:m.map(s=>e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"topRow",children:[e.jsx("span",{className:"miniIcon",children:s.icon}),e.jsx("h3",{children:s.title})]}),e.jsx("p",{children:s.text})]},s.title))}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"What the title really means"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard less",children:[e.jsx("h3",{children:"Desire without deserving"}),e.jsx("p",{children:"Wanting recognition, rewards, or a dream future without building the discipline and capability that support them."})]}),e.jsxs("div",{className:"compareCard more",children:[e.jsx("h3",{children:"Deserve before you desire"}),e.jsx("p",{children:"Work so well, improve so seriously, and act so consistently that success becomes a natural result rather than a fantasy sticker on the wall."})]})]}),e.jsx("p",{children:"The phrase does not mean you should stop dreaming. It means your dreams should be matched by the effort, character, and competence needed to hold them."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Practical reflection"})]}),e.jsx("ul",{className:"focusList",children:g.map(s=>e.jsx("li",{children:s},s))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"The photograph in the original story"})]}),e.jsx("p",{children:"The original post mentions that the CEO later mailed a photograph to students to express his point more clearly. Even without that image here, the message is still readable: greatness is remembered not only because of position, but because of the standard of performance behind it."}),e.jsx("p",{children:"In plain words, if you give your best to what you do, you increase the chance of getting the best out of it."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final takeaway"}),e.jsx("p",{children:"Success is not built only by choosing the most glamorous road. It is built by doing meaningful work with seriousness, skill, patience, and consistency. Before demanding a great future, build the habits that make you worthy of one."})]})]});export{b as default};
