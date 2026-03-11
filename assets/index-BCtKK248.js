import{c as i,j as e,f as l,a as c,g as a,l as n,o,b as d,H as p}from"./index-D1C0sqWO.js";import{S as x}from"./index-DpzaY4xy.js";const r={Wrapper:i.div`
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

        pre {
            margin-top: 14px;
        }

        .explainBox {
            margin-top: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
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
    `,FlowGrid:i.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 6px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }

        .flowCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .flowTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .flowNo {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 13px;
            font-weight: 900;
            line-height: 1;
        }

        h3 {
            margin: 0;
            font-size: 16px;
            line-height: 1.25;
        }

        p {
            margin: 0;
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
    `},h=[{title:"Save execution state with setjmp",text:"The program stores its current execution context inside a jmp_buf object. On the first call, setjmp usually returns 0."},{title:"Run normal code",text:"After saving the context, the program continues normally and may call other functions."},{title:"Trigger longjmp later",text:"If something goes wrong, longjmp can jump back to the saved point and make setjmp return a non-zero value."},{title:"Handle the alternate path",text:"The code can check the return value from setjmp and run an error-handling branch."}],m=["This is not real language-level exception handling like try/catch in C++ or Java.","It can make control flow harder to read if overused.","Automatic local variables may not behave as expected after longjmp unless used carefully.","Jumping across complex function logic can skip cleanup steps.","It should be used only when there is a strong reason, not as default everyday style."],j=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(l,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(c,{}),"Original topic: December 15, 2012"]}),e.jsx(x,{})]}),e.jsx("h1",{children:"Exceptions in C"}),e.jsxs("p",{className:"lead",children:["C does not provide built-in exception handling like modern languages that use try, catch, and throw. However, C does provide ",e.jsx("strong",{children:"setjmp"})," and ",e.jsx("strong",{children:"longjmp"}),", which can be used to build exception-like control flow in certain situations."]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Important clarification"})]}),e.jsx("p",{children:'The title "Exceptions in C" sounds like C has a real exception system. It does not. What C gives you is a low level mechanism that lets you jump back to an earlier saved execution point.'}),e.jsxs("p",{children:["So the more accurate statement is this: C can simulate some exception-like behavior by using ",e.jsx("strong",{children:"setjmp"})," and"," ",e.jsx("strong",{children:"longjmp"}),"."]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"What are setjmp and longjmp?"})]}),e.jsx("p",{children:"These are standard C library functions declared in the header:"}),e.jsx("pre",{children:e.jsx("code",{children:"#include <setjmp.h>"})}),e.jsxs("p",{children:["They work with a special object called"," ",e.jsx("strong",{children:"jmp_buf"}),", which stores enough program state to let execution jump back to a previously saved point."]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Core idea"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"setjmp"})," saves the current execution context"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"longjmp"})," returns execution to that saved point"]}),e.jsx("li",{children:"The code checks whether it is the first return or a jump-based return"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"How the mechanism works"})]}),e.jsx(r.FlowGrid,{children:h.map((s,t)=>e.jsxs("article",{className:"flowCard",children:[e.jsxs("div",{className:"flowTop",children:[e.jsx("span",{className:"flowNo",children:t+1}),e.jsx("h3",{children:s.title})]}),e.jsx("p",{children:s.text})]},s.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Basic example"})]}),e.jsx("p",{children:"Here is a small example that demonstrates the idea clearly."}),e.jsx("pre",{children:e.jsx("code",{children:`#include <stdio.h>
#include <setjmp.h>

jmp_buf jb;

void f2() {
    longjmp(jb, 1);
}

void f1() {
    if (setjmp(jb) == 0) {
        printf("first time\\n");
        f2();
    } else {
        printf("second time\\n");
    }
}`})}),e.jsxs("div",{className:"explainBox",children:[e.jsx("h3",{children:"What happens here?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"setjmp(jb)"})," runs for the first time and returns 0"]}),e.jsx("li",{children:'The program prints "first time"'}),e.jsxs("li",{children:["Function ",e.jsx("strong",{children:"f2"})," calls"," ",e.jsx("strong",{children:"longjmp(jb, 1)"})]}),e.jsxs("li",{children:["Execution jumps back to the earlier"," ",e.jsx("strong",{children:"setjmp"})," point"]}),e.jsxs("li",{children:["Now ",e.jsx("strong",{children:"setjmp"})," behaves as if it returned ",e.jsx("strong",{children:"1"})]}),e.jsx("li",{children:"The program enters the else block"}),e.jsx("li",{children:'The program prints "second time"'})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Mental model"})]}),e.jsxs("p",{children:["You can think of ",e.jsx("strong",{children:"setjmp"})," as placing a bookmark in program execution. Later,"," ",e.jsx("strong",{children:"longjmp"}),' says: "go back to that bookmark and continue from there, but this time pretend setjmp returned a non-zero value."']}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"First return"}),e.jsxs("p",{children:[e.jsx("strong",{children:"setjmp"})," returns 0 and normal code continues."]})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Jump return"}),e.jsxs("p",{children:["After ",e.jsx("strong",{children:"longjmp"}),", execution returns to the saved point and ",e.jsx("strong",{children:"setjmp"})," appears to return a non-zero value."]})]})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Where this can be useful"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Recovering from deep nested function failures"}),e.jsx("li",{children:"Escaping back to a known safe point"}),e.jsx("li",{children:"Building small internal error-handling frameworks"}),e.jsx("li",{children:"Special low-level or embedded code patterns in some systems"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Why you should be careful"})]}),e.jsx("ul",{children:m.map(s=>e.jsx("li",{children:s},s))})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"What this is not"})]}),e.jsx("p",{children:"This is not the same as structured exception handling in languages like C++, Java, or C#. Those languages have built-in syntax and rules for exception propagation, catching, stack unwinding, and cleanup behavior."}),e.jsx("p",{children:"In plain C, you are manually controlling jumps. That gives power, but also more ways to produce confusing code if used carelessly."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsxs("p",{children:["C does not have built-in exceptions, but it can mimic some exception-like behavior through ",e.jsx("strong",{children:"setjmp"})," and"," ",e.jsx("strong",{children:"longjmp"}),". These functions let you save an execution point and jump back to it later, which can be used for certain error-handling patterns. Useful, yes. Magical, no. Slightly dangerous if abused, absolutely."]})]})]});export{j as default};
