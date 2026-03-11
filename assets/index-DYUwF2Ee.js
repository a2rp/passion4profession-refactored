import{c as o,j as e,o as n,a as l,l as a,f as s,g as t,M as d}from"./index-D1C0sqWO.js";import{S as c}from"./index-DpzaY4xy.js";const r={Wrapper:o.div`
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

        .miniExample {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 12px;
            padding: 12px 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            flex-wrap: wrap;
        }

        .miniExample span {
            color: var(--color-text-muted);
            font-size: 13px;
            font-weight: 700;
        }

        .miniExample code {
            font-size: 13px;
        }

        .exampleBox {
            margin-top: 8px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 94%,
                transparent
            );
            padding: 18px;
        }

        .expression {
            font-size: 18px;
            font-weight: 800;
            line-height: 1.4;
            color: var(--color-text-primary);
            margin-bottom: 14px;
            word-break: break-word;
        }

        .steps {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .step {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px 0;
            border-top: 1px solid var(--color-border);
        }

        .step:first-child {
            border-top: none;
            padding-top: 0;
        }

        .stepNo {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 13px;
            font-weight: 900;
        }

        .tableWrap {
            width: 100%;
            overflow-x: auto;
            margin-top: 8px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
        }

        table {
            width: 100%;
            min-width: 860px;
            border-collapse: collapse;
            background: transparent;
        }

        thead th {
            text-align: left;
            padding: 14px 16px;
            font-size: 13px;
            line-height: 1.4;
            color: var(--color-text-primary);
            background: var(--color-surface-3);
            border-bottom: 1px solid var(--color-border);
        }

        tbody td {
            vertical-align: top;
            padding: 14px 16px;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            border-top: 1px solid var(--color-border);
        }

        tbody tr:first-child td {
            border-top: none;
        }

        td code {
            white-space: pre-wrap;
            word-break: break-word;
        }

        .note {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.6;
            font-weight: 400;
        }

        .exampleGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .exampleCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .exampleCard code {
            display: inline-block;
            margin-bottom: 10px;
            font-size: 13px;
        }

        .exampleCard p {
            font-size: 14px;
            line-height: 1.75;
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
    `},p=[{group:"Primary expression operators",operators:"()  []  .  ->  expr++  expr--",associativity:"Left to right",note:"These are among the highest-priority operators and are evaluated very early."},{group:"Unary operators",operators:"*  &  +  -  !  ~  ++expr  --expr  (typecast)  sizeof",associativity:"Right to left",note:"Unary operators work on a single operand and bind tightly."},{group:"Multiplicative operators",operators:"*  /  %",associativity:"Left to right",note:"Multiplication, division, and modulus are evaluated before addition and subtraction."},{group:"Additive operators",operators:"+  -",associativity:"Left to right",note:"Addition and subtraction happen after multiplicative operations."},{group:"Shift operators",operators:"<<  >>",associativity:"Left to right",note:"Used for bit shifting and evaluated after additive operators."},{group:"Relational operators",operators:"<  >  <=  >=",associativity:"Left to right",note:"These compare values and produce true or false style results."},{group:"Equality operators",operators:"==  !=",associativity:"Left to right",note:"Used to check whether two values are equal or not equal."},{group:"Bitwise AND",operators:"&",associativity:"Left to right",note:"Bit-level AND operation."},{group:"Bitwise XOR",operators:"^",associativity:"Left to right",note:"Bit-level exclusive OR operation."},{group:"Bitwise OR",operators:"|",associativity:"Left to right",note:"Bit-level OR operation."},{group:"Logical AND",operators:"&&",associativity:"Left to right",note:"Logical AND is lower than bitwise operators."},{group:"Logical OR",operators:"||",associativity:"Left to right",note:"Logical OR is lower than logical AND."},{group:"Ternary operator",operators:"?:",associativity:"Right to left",note:"Conditional operator with three parts."},{group:"Assignment operators",operators:"=  +=  -=  *=  /=  %=  >>=  <<=  &=  ^=  |=",associativity:"Right to left",note:"Assignments happen late in evaluation."},{group:"Comma operator",operators:",",associativity:"Left to right",note:"Very low precedence; evaluates expressions from left to right."}],x=[{expression:"a = 4 + b * 2",explanation:"Multiplication happens before addition, so b * 2 is evaluated first, then 4 is added, then the result is assigned to a."},{expression:"x = y = 10",explanation:"Assignment operators associate right to left, so y gets 10 first, then x gets the same result."},{expression:"a + b > c",explanation:"Addition is evaluated before relational comparison, so a + b is calculated first, then compared with c."}],h=["Assuming expressions are always read strictly from left to right","Confusing precedence with associativity","Forgetting that parentheses override default precedence","Writing expressions that are technically correct but hard to read","Relying on memory instead of using clear grouping with parentheses"],u=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: August 20, 2012"]}),e.jsx(c,{})]}),e.jsx("h1",{children:"C Language Operator Precedence"}),e.jsx("p",{className:"lead",children:"Operator precedence tells us which operator C evaluates first when an expression contains multiple operators. Without precedence rules, even a small expression would turn into a tiny battlefield of confusion."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:"In C, an expression can contain many operators such as addition, multiplication, comparison, assignment, and more. Operator precedence decides which of these operators gets applied first."}),e.jsxs("p",{children:["For example, in the expression"," ",e.jsx("strong",{children:"a = 4 + b * 2"}),", C does not evaluate"," ",e.jsx("strong",{children:"4 + b"})," first. Multiplication has higher precedence than addition, so",e.jsx("strong",{children:"b * 2"})," is evaluated first."]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Precedence vs associativity"})]}),e.jsx("p",{children:"These two terms are related, but they are not the same."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Precedence"})," tells which operator level is stronger"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Associativity"})," tells the direction of evaluation when operators have the same precedence"]})]}),e.jsx("p",{children:'So precedence answers "which group first" and associativity answers "which side first within that group".'})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Very important rule"})]}),e.jsx("p",{children:"Parentheses override normal precedence. If you want an expression to be evaluated in a specific order, use parentheses instead of trusting future-you to remember the full chart from memory."}),e.jsxs("div",{className:"miniExample",children:[e.jsx("span",{children:"Normal"}),e.jsx("code",{children:"a + b * c"})]}),e.jsxs("div",{className:"miniExample",children:[e.jsx("span",{children:"Forced grouping"}),e.jsx("code",{children:"(a + b) * c"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Quick example"})]}),e.jsxs("div",{className:"exampleBox",children:[e.jsx("div",{className:"expression",children:"a = 4 + b * 2"}),e.jsxs("div",{className:"steps",children:[e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("p",{children:["Evaluate ",e.jsx("strong",{children:"b * 2"})," first because multiplication has higher precedence than addition."]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("p",{children:["Add ",e.jsx("strong",{children:"4"})," to that result."]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("p",{children:["Assign the final value to ",e.jsx("strong",{children:"a"}),"."]})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Operator precedence chart"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Operator group"}),e.jsx("th",{children:"Operators"}),e.jsx("th",{children:"Associativity"})]})}),e.jsx("tbody",{children:p.map(i=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:i.group}),e.jsx("span",{className:"note",children:i.note})]}),e.jsx("td",{children:e.jsx("code",{children:i.operators})}),e.jsx("td",{children:i.associativity})]},i.group))})]})})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Worked examples"})]}),e.jsx("div",{className:"exampleGrid",children:x.map(i=>e.jsxs("article",{className:"exampleCard",children:[e.jsx("code",{children:i.expression}),e.jsx("p",{children:i.explanation})]},i.expression))})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Common mistakes"})]}),e.jsx("ul",{children:h.map(i=>e.jsx("li",{children:i},i))})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Best practice"})]}),e.jsx("p",{children:"Even if you know the precedence chart, writing clearer expressions is usually better than writing clever ones."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use parentheses when clarity matters"}),e.jsx("li",{children:"Break long expressions into smaller steps"}),e.jsx("li",{children:"Do not assume every reader remembers the chart"}),e.jsx("li",{children:'Prefer readable code over "look how much I fit into one line"'})]})]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"C operator precedence defines the order in which operators are evaluated in an expression. Higher-precedence operators are handled first. If operators share the same precedence, associativity decides the direction. And when in doubt, parentheses are your best friends."})]})]});export{u as default};
