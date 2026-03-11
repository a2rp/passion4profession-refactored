import{c as i,j as e,x as n,a as l,l as c,y as d,z as o,A as t,q as s}from"./index-D1C0sqWO.js";import{S as h}from"./index-DpzaY4xy.js";const a={Wrapper:i.div`
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
            margin-top: 14px;
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
            margin-top: 10px;
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
    `,AchievementGrid:i.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 960px) {
            grid-template-columns: 1fr;
        }

        .achievementCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 20px;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast);
        }

        .achievementCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface-2) 0%,
                var(--color-surface-3) 100%
            );
        }

        .achievementIcon {
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

        .achievementIcon svg {
            width: 20px;
            height: 20px;
        }

        h3 {
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
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
    `},p=[{title:"Mental calculation speed",text:"Shakuntala Devi became famous for solving large numerical problems mentally with extraordinary speed and accuracy.",icon:e.jsx(t,{})},{title:"Public demonstrations",text:"She performed calculation challenges in front of audiences and institutions, which helped build her reputation around the world.",icon:e.jsx(s,{})},{title:"Recognition as 'Human Computer'",text:"Because of her unusual mathematical ability, she became widely known by the title 'Human Computer'.",icon:e.jsx(o,{})}],m=["Born on November 4, 1939, in Bangalore, India","Known internationally for fast and accurate mental calculations","Solved very large arithmetic and root problems without using a machine","Became one of the most famous mathematical prodigies from India"],g=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: January 20, 2013"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"Mother of Computer"}),e.jsxs("p",{className:"lead",children:["This archive note is about ",e.jsx("strong",{children:"Shakuntala Devi"}),", the legendary Indian mathematical prodigy who became famous around the world for her extraordinary mental calculation ability. She is widely remembered by the title"," ",e.jsx("strong",{children:"'Human Computer'"}),"."]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Who was Shakuntala Devi?"})]}),e.jsx("p",{children:"Shakuntala Devi was an Indian mathematician, writer, and mental calculator known for solving difficult numerical problems without using calculators or computers. Her speed and confidence made her one of the most memorable public figures associated with mathematics in India."}),e.jsx("p",{children:"She was born in Bangalore and became famous for performing impressive mathematical demonstrations in different parts of the world."})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Why people called her 'Human Computer'"})]}),e.jsx("p",{children:"She earned this title because she could perform difficult calculations mentally at remarkable speed. Long before pocket calculators became common, her skills felt almost machine-like to the public."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Fast mental multiplication"}),e.jsx("li",{children:"Large-number calculations"}),e.jsx("li",{children:"Root extraction"}),e.jsx("li",{children:"Public problem-solving demonstrations"})]})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Why this matters"})]}),e.jsx("p",{children:"Her story is important not because she was literally the 'mother' of computers in a technical history sense, but because she became a symbol of human intelligence, memory, and numerical brilliance."}),e.jsx("p",{children:"In everyday admiration, people used titles like this to express respect for her exceptional talent."})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Famous demonstrations"})]}),e.jsx("p",{children:"Shakuntala Devi became widely known through public events in which she answered difficult mathematical challenges very quickly. These demonstrations often involved very large numbers and were designed to show the power of mental calculation."}),e.jsxs("div",{className:"timeline",children:[e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Cube root challenge"}),e.jsx("p",{children:"She reportedly competed in speed-based calculation challenges and impressed audiences by responding faster than expected."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"23rd root demonstration"}),e.jsx("p",{children:"She became especially famous for mentally solving a very large-number root problem, which was considered astonishing for the time."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Large multiplication challenge"}),e.jsx("p",{children:"She also demonstrated rapid multiplication of large numbers in public settings, further strengthening her reputation."})]})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Why she became a legend"})]}),e.jsx("p",{children:"Shakuntala Devi stood out because she brought mathematics into public imagination. To many people, numbers feel cold, dry, and slightly evil before tea. She made them feel alive, dramatic, and human."}),e.jsx("p",{children:"Her fame was not only about solving numbers. It was also about confidence, memory, stage presence, and the ability to make people feel amazed by the human mind."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Key highlights"})]}),e.jsx("ul",{children:m.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Why this topic appears in the archive"})]}),e.jsx("p",{children:"In the original blog context, this topic was written as a short appreciation note. In this refactored version, it is better understood as a tribute to an Indian legend of mental mathematics rather than a formal computing-history title."}),e.jsx("p",{children:"So the spirit of the old post remains the same: respect for exceptional human talent."})]}),e.jsx(a.AchievementGrid,{children:p.map(r=>e.jsxs("article",{className:"achievementCard",children:[e.jsx("div",{className:"achievementIcon",children:r.icon}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]},r.title))}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Shakuntala Devi was a remarkable Indian mathematical prodigy celebrated for her extraordinary mental calculation skills. She became widely known as the 'Human Computer' and remains an inspiring symbol of intelligence, discipline, and confidence."})]})]});export{g as default};
