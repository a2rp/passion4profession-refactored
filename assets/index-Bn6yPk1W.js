import{c as a,j as e,x as o,a as n,aq as s,z as t,an as d,am as l}from"./index-DR_KT_2c.js";import{S as c}from"./index-D4exoH3I.js";const r={Wrapper:a.div`
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
            max-width: 820px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }
    `,HighlightCard:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 42px var(--color-shadow);
        padding: 22px;

        .quoteHeader {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .quoteIcon {
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

        .quoteIcon svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        blockquote {
            margin: 0 0 14px;
            padding: 18px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: clamp(24px, 3vw, 34px);
            line-height: 1.15;
            font-weight: 900;
            letter-spacing: -0.03em;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
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

        .miniQuote {
            margin: 14px 0;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .miniQuote strong {
            font-size: 18px;
            line-height: 1.3;
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

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
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
            margin-top: 7px;
            border-radius: 999px;
            flex-shrink: 0;
            background: var(--color-text-primary);
        }

        .timelineContent h3 {
            font-size: 16px;
            line-height: 1.2;
            margin-bottom: 6px;
        }

        .timelineContent p {
            margin: 0;
            font-size: 14px;
        }

        .pointsGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .pointCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }

        .statementStack {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin: 16px 0;
        }

        .statementCard {
            min-height: 64px;
            padding: 0 18px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            display: flex;
            align-items: center;
            color: var(--color-text-primary);
            font-size: clamp(20px, 2.5vw, 28px);
            font-weight: 900;
            line-height: 1.2;
            letter-spacing: -0.02em;
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
    `},p=[{title:"India vs Australia, 2004",text:"In the match, Brad Hogg managed to take Sachin Tendulkar's wicket."},{title:"After the match",text:"Brad Hogg gave that same ball to Sachin and asked for an autograph."},{title:"Sachin's response",text:"Sachin signed the ball and wrote a bold line: 'It will never happen again.'"},{title:"What followed",text:"After that, Hogg and Tendulkar faced each other many more times, but Hogg could not dismiss him again."}],h=["Confidence is not noise. It is calm belief in your own ability.","Real confidence comes from preparation, skill, and self-trust.","A strong sentence means more when performance backs it up.","The most powerful reply is often long-term consistency."],m=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(n,{}),"Original topic: August 3, 2012"]}),e.jsx(c,{})]}),e.jsx("h1",{children:"This is confidence"}),e.jsx("p",{className:"lead",children:"This archive note is built around a famous Sachin Tendulkar story often shared as an example of confidence, composure, and self-belief. It is not loud confidence. It is the kind that quietly makes a promise and then lives up to it."})]}),e.jsxs(r.HighlightCard,{children:[e.jsxs("div",{className:"quoteHeader",children:[e.jsx("span",{className:"quoteIcon",children:e.jsx(s,{})}),e.jsx("h2",{children:"The line that made the story unforgettable"})]}),e.jsx("blockquote",{children:'"It will never happen again."'}),e.jsx("p",{children:"According to the story, Brad Hogg took Sachin Tendulkar's wicket in an India vs Australia match in 2004. After the match, Hogg gave the ball to Sachin for an autograph. Sachin signed it with a short sentence that turned the moment into legend."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"The original story, cleaned up"})]}),e.jsx("p",{children:"In an India vs Australia match in 2004, Brad Hogg got Sachin Tendulkar out. At the end of the match, Hogg gave that ball to Sachin for his autograph."}),e.jsx("p",{children:"Sachin signed the ball and wrote:"}),e.jsx("div",{className:"miniQuote",children:e.jsx("strong",{children:'"It will never happen again."'})}),e.jsx("p",{children:"The story then says that after this incident, Hogg and Tendulkar came face to face many more times, but Hogg could not get Sachin out again."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Why the story feels powerful"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"The reply was short, direct, and fearless"}),e.jsx("li",{children:"It was not emotional overreaction, it was control"}),e.jsx("li",{children:"It turned one dismissal into a personal standard"}),e.jsx("li",{children:"The confidence mattered because performance followed"})]}),e.jsx("p",{children:"That is why the story gets remembered. Not because the line sounded cool, but because it matched the image of a player who trusted his game deeply."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Story flow"})]}),e.jsx("div",{className:"timeline",children:p.map(i=>e.jsxs("div",{className:"timelineItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"timelineContent",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]})]},i.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:'What "confidence" means here'})]}),e.jsx("p",{children:"Confidence here does not mean arrogance. It means belief backed by mastery. A beginner can imitate the sentence, but not the weight behind it. The weight came from years of discipline, skill, and the ability to answer with performance instead of noise."}),e.jsx("div",{className:"pointsGrid",children:h.map(i=>e.jsx("div",{className:"pointCard",children:i},i))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Why this archive note still works"})]}),e.jsx("p",{children:"The original post was short and direct. That simplicity is part of its charm. It captured admiration in a raw form:"}),e.jsxs("div",{className:"statementStack",children:[e.jsx("div",{className:"statementCard",children:"This is confidence."}),e.jsx("div",{className:"statementCard",children:"This is Tendulkar."})]}),e.jsx("p",{children:"In refactored form, the idea becomes even clearer. The story is really about calm self-belief. One moment, one sentence, and then a long reply written through results."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final takeaway"}),e.jsx("p",{children:"Confidence is strongest when it does not beg for attention. It speaks once and then lets actions handle the rest. That is why this small old blog note still hits hard."})]})]});export{m as default};
