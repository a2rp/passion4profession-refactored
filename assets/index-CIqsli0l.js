import{c as r,j as e,o,a as d,l as s,g as n,U as l,f as c,E as t}from"./index-BxgJM-x-.js";import{S as p}from"./index-D6FK_vhk.js";const i={Wrapper:r.div`
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

        .compareCard.bad {
            box-shadow: inset 3px 0 0 var(--color-text-muted);
        }

        .compareCard.good {
            box-shadow: inset 3px 0 0 var(--color-text-primary);
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
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
    `},h=["Code jumps around in a confusing way","Logic is mixed across unrelated sections","Large functions try to do too many things","Naming is unclear or inconsistent","Flow is hard to trace while debugging","Changes in one place break something somewhere else"],x=["Use clear structure and proper indentation","Break large logic into smaller functions","Use meaningful variable and function names","Reduce unnecessary nesting and repeated code","Keep related logic together","Write comments only where they actually help"],u=()=>e.jsxs(i.Wrapper,{className:"topicWrapper",children:[e.jsxs(i.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(d,{}),"Original topic: September 20, 2012"]}),e.jsx(p,{})]}),e.jsx("h1",{children:"What is spaghetti code?"}),e.jsx("p",{className:"lead",children:"Spaghetti code is a slang term used for source code that is difficult to read, difficult to follow, and difficult to maintain because the logic is tangled together in a messy way. The name comes from the idea that the control flow looks like a bowl of spaghetti - twisted, crossing over itself, and annoying to untangle."})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:"A program is often called spaghetti code when a human reader struggles to understand what is happening and in what order it is happening. The code may technically run, but it is hard to reason about, hard to debug, and painful to extend."}),e.jsx("p",{children:'In short, spaghetti code is not just "bad looking code". It is code whose structure makes understanding and maintenance much harder than it should be.'})]}),e.jsxs(i.Grid,{children:[e.jsxs(i.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Common signs of spaghetti code"})]}),e.jsx("ul",{children:h.map(a=>e.jsx("li",{children:a},a))})]}),e.jsxs(i.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Classic cause"})]}),e.jsxs("p",{children:["Older discussions often connect spaghetti code with too many ",e.jsx("strong",{children:"goto"})," statements, because they can make execution jump all over the place. But spaghetti code is not limited to goto. You can create equally messy code with giant if-else chains, deeply nested logic, duplicated code, or functions doing twenty jobs at once."]})]})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Why it is a problem"})]}),e.jsx("p",{children:"Spaghetti code is considered bad practice because it raises the cost of doing almost everything:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"It takes longer to understand the code"}),e.jsx("li",{children:"It is easier to introduce bugs while editing it"}),e.jsx("li",{children:"It is harder to locate the real source of an error"}),e.jsx("li",{children:"It becomes stressful for teams to maintain"}),e.jsx("li",{children:"Future improvements become slower and riskier"})]}),e.jsx("p",{children:"The biggest problem is not ugliness. The biggest problem is loss of control. Once the structure becomes chaotic, even simple changes start feeling like bomb disposal."})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Simple mental model"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard bad",children:[e.jsx("h3",{children:"Spaghetti code"}),e.jsx("p",{children:"One piece of logic depends on another random piece, then jumps to a third place, then mutates shared state, then comes back later and surprises you."})]}),e.jsxs("div",{className:"compareCard good",children:[e.jsx("h3",{children:"Clean code"}),e.jsx("p",{children:"Related logic stays together, steps happen in a sensible order, and each function has a clearer responsibility."})]})]})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"How spaghetti code usually happens"})]}),e.jsxs("div",{className:"timeline",children:[e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Quick fixes pile up"}),e.jsx("p",{children:"Small patches are added again and again without cleaning old logic."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"No structure is enforced"}),e.jsx("p",{children:"Naming, formatting, file organization, and function boundaries start drifting."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Too much logic lives in one place"}),e.jsx("p",{children:"Giant functions or giant files become dumping grounds for unrelated work."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Fear of refactoring grows"}),e.jsx("p",{children:"Since the code is fragile, people become scared to improve it, so the mess survives longer."})]})]})]})]}),e.jsxs(i.Grid,{children:[e.jsxs(i.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Example of spaghetti thinking"})]}),e.jsx("p",{children:"Imagine one checkout function that validates the cart, calculates discounts, talks to payment logic, updates inventory, sends emails, formats UI messages, and logs analytics all in one place."}),e.jsx("p",{children:"That is a recipe for confusion. When one function tries to act like an entire city, traffic gets weird fast."})]}),e.jsxs(i.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Cleaner thinking"})]}),e.jsx("p",{children:"Break the flow into smaller responsibilities:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Validate input"}),e.jsx("li",{children:"Calculate totals"}),e.jsx("li",{children:"Process payment"}),e.jsx("li",{children:"Update inventory"}),e.jsx("li",{children:"Send confirmation"})]}),e.jsx("p",{children:"The work still gets done, but now the logic is easier to trace and test."})]})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"How to reduce spaghetti code"})]}),e.jsx("ul",{children:x.map(a=>e.jsx("li",{children:a},a))}),e.jsx("p",{children:"Older advice often said to always comment more, but comments alone do not fix spaghetti code. Comments can help, but the real improvement comes from better structure. If the code is tangled, a comment is just a label on the noodle pile."})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"Spaghetti code means the program structure has become messy enough that understanding and maintenance are harder than they should be. It is dangerous not because it looks ugly, but because it slows down debugging, raises error risk, and makes future changes painful."}),e.jsx("p",{children:"Good structure, smaller units of logic, and readable code organization are the best antidotes."})]}),e.jsxs(i.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Spaghetti code is tangled, hard-to-follow source code. It often grows from rushed fixes, weak structure, and too much logic packed into the same place. The cure is not magic - it is clear organization, smaller responsibilities, and disciplined refactoring."})]})]});export{u as default};
