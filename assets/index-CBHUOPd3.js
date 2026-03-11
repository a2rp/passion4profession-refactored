import{c as r,j as e,d as o,a as n,x as c,ao as s,m as t,ap as l,f as h,t as p,A as x,X as d,g as m,a7 as g}from"./index-D1C0sqWO.js";import{S as u}from"./index-DpzaY4xy.js";const a={Wrapper:r.div`
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
            margin-bottom: 16px;
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

        .heroGrid {
            display: grid;
            grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.9fr);
            gap: 18px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .heroContent {
            min-width: 0;
        }

        h1 {
            font-size: clamp(32px, 4.8vw, 56px);
            line-height: 0.98;
            letter-spacing: -0.04em;
            margin-bottom: 14px;
        }

        .lead {
            max-width: 820px;
            font-size: 16px;
            line-height: 1.88;
            color: var(--color-text-secondary);
        }

        .highlightRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 18px;
        }

        .miniHighlight {
            min-height: 36px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 13px;
            font-weight: 700;
        }

        .miniHighlight svg {
            color: var(--color-primary);
            flex-shrink: 0;
        }

        .heroPanel {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 18px;
            box-shadow: 0 12px 30px var(--color-shadow);
        }

        .heroPanel h2 {
            font-size: 20px;
            line-height: 1.15;
            margin-bottom: 12px;
        }

        .statList {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .statItem {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
        }

        .statIcon {
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .statText {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .statLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            line-height: 1.4;
        }

        .statValue {
            font-size: 14px;
            color: var(--color-text-primary);
            line-height: 1.6;
            font-weight: 700;
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
            margin-bottom: 6px;
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

        .timeline {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 6px;
        }

        .timeItem {
            display: grid;
            grid-template-columns: 120px minmax(0, 1fr);
            gap: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 14px;

            @media (max-width: 620px) {
                grid-template-columns: 1fr;
            }
        }

        .timeYear {
            font-size: 13px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.03em;
        }

        .timeContent p {
            margin: 0;
            font-size: 14px;
        }

        .quoteBox {
            margin-top: 16px;
            padding: 16px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            box-shadow: inset 3px 0 0 var(--color-text-primary);
        }

        .quoteBox p {
            margin: 0;
            color: var(--color-text-primary);
            font-weight: 700;
        }
    `,Grid:r.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 860px) {
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
            line-height: 1.82;
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

        .chipGrid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 14px;
        }

        .chip {
            min-height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 700;
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
    `},f=[{label:"Full name",value:"Leonardo di ser Piero da Vinci",icon:e.jsx(l,{})},{label:"Born",value:"April 15, 1452 - Vinci, Republic of Florence",icon:e.jsx(n,{})},{label:"Died",value:"May 2, 1519 - Amboise, Kingdom of France",icon:e.jsx(g,{})},{label:"Nationality",value:"Italian (Tuscany)",icon:e.jsx(d,{})}],v=["Painter","Sculptor","Architect","Musician","Scientist","Mathematician","Engineer","Inventor","Anatomist","Geologist","Cartographer","Botanist","Writer"],b=["Mona Lisa","The Last Supper","The Vitruvian Man","Lady with an Ermine"],y=["Helicopter concept","Tank concept","Concentrated solar power concept","Calculator concept","Double hull idea","Rudimentary plate tectonics thinking","Automated bobbin winder","Machine for testing wire tensile strength"],j=[{year:"1452",title:"Birth in Vinci",text:"Leonardo was born in Vinci, in the Republic of Florence, to Piero da Vinci and Caterina."},{year:"Early life",title:"Education under Verrocchio",text:"He was trained in the studio of the renowned Florentine artist Andrea del Verrocchio."},{year:"Milan years",title:"Worked for Ludovico il Moro",text:"A major part of his earlier career was spent in the service of Ludovico il Moro in Milan."},{year:"Later years",title:"Worked across Italian cities",text:"He also worked in Rome, Bologna, and Venice during different phases of his life."},{year:"Final phase",title:"Last years in France",text:"He spent his final years in France under the patronage of Francis I."}],N=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(n,{}),"Original topic: August 7, 2012"]}),e.jsx(u,{})]}),e.jsxs("div",{className:"heroGrid",children:[e.jsxs("div",{className:"heroContent",children:[e.jsx("h1",{children:"The Man Who Never Slept"}),e.jsx("p",{className:"lead",children:`Leonardo da Vinci is remembered not just as a painter, but as one of history's most extraordinary polymaths. He moved across art, science, engineering, anatomy, architecture, and invention with a level of curiosity that still feels almost unfair to the rest of humanity. The title "The Man Who Never Slept" captures that restless creative energy, even though it should be read as a symbolic description, not a literal medical claim.`}),e.jsxs("div",{className:"highlightRow",children:[e.jsxs("div",{className:"miniHighlight",children:[e.jsx(c,{}),"Renaissance polymath"]}),e.jsxs("div",{className:"miniHighlight",children:[e.jsx(s,{}),"Master painter"]}),e.jsxs("div",{className:"miniHighlight",children:[e.jsx(t,{}),"Inventive thinker"]})]})]}),e.jsxs("div",{className:"heroPanel",children:[e.jsx("h2",{children:"At a glance"}),e.jsx("div",{className:"statList",children:f.map(i=>e.jsxs("div",{className:"statItem",children:[e.jsx("span",{className:"statIcon",children:i.icon}),e.jsxs("div",{className:"statText",children:[e.jsx("span",{className:"statLabel",children:i.label}),e.jsx("span",{className:"statValue",children:i.value})]})]},i.label))})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Who was Leonardo da Vinci?"})]}),e.jsx("p",{children:"Leonardo di ser Piero da Vinci was an Italian Renaissance polymath. He is often described as the archetype of the Renaissance man because his interests were not limited to a single field. He worked across painting, sculpture, architecture, science, mathematics, engineering, invention, anatomy, geology, cartography, botany, music, and writing."}),e.jsx("p",{children:"He is widely regarded as one of the greatest painters of all time and one of the most broadly talented individuals in recorded history. What makes him so remarkable is not only the range of his interests, but the seriousness with which he pursued each one."})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Fields associated with Leonardo"})]}),e.jsx("div",{className:"chipGrid",children:v.map(i=>e.jsx("span",{className:"chip",children:i},i))}),e.jsx("p",{children:"This range is exactly why Leonardo is often treated as a symbol of Renaissance humanism: deep curiosity joined with practical observation."})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Best-known works"})]}),e.jsx("ul",{children:b.map(i=>e.jsx("li",{children:i},i))}),e.jsx("p",{children:"Among these, the Mona Lisa became one of the most famous portraits in the world, while The Last Supper became one of the most reproduced religious paintings ever made."})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Early life and background"})]}),e.jsx("p",{children:"Leonardo was born out of wedlock to Piero da Vinci, a notary, and Caterina, a peasant woman, in Vinci near Florence. He was later educated in the workshop of Andrea del Verrocchio, one of Florence's important artists and teachers."}),e.jsx("p",{children:"That training shaped his artistic foundation, but Leonardo's mind was never content to remain inside one discipline. Even when he painted, he observed nature like a scientist. Even when he studied machines, he sketched like an artist."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Career timeline"})]}),e.jsx("div",{className:"timeline",children:j.map(i=>e.jsxs("div",{className:"timeItem",children:[e.jsx("div",{className:"timeYear",children:i.year}),e.jsxs("div",{className:"timeContent",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]})]},`${i.year}-${i.title}`))})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Leonardo the painter"})]}),e.jsx("p",{children:"Leonardo is famous first as a painter, and rightly so. His surviving paintings are relatively few, partly because he experimented constantly with techniques and partly because he was known for delay and unfinished work. But the works that do survive had an enormous influence on later artists."}),e.jsx("p",{children:"The Mona Lisa is widely recognized as one of the most famous portraits ever painted. The Last Supper became one of the most influential religious compositions in Western art. His drawing of the Vitruvian Man also became a cultural icon, reproduced on everything from textbooks to currency and merchandise."}),e.jsx("div",{className:"quoteBox",children:e.jsx("p",{children:"A small number of surviving works, but an immense long-term influence."})})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Technological imagination"})]}),e.jsx("p",{children:"Leonardo was revered for his technological ingenuity. He imagined machines and systems far ahead of his time, even if many were not built during his lifetime."}),e.jsx("ul",{children:y.map(i=>e.jsx("li",{children:i},i))})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Scientific and technical study"})]}),e.jsx("p",{children:"He also made important observations in anatomy, civil engineering, optics, and hydrodynamics. However, much of this work was not published in ways that gave it a direct scientific influence during later centuries."}),e.jsx("p",{children:"That does not reduce its brilliance. It simply means his notebooks were often more like private laboratories of thought than formal public publications."})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Why he still fascinates people"})]}),e.jsx("p",{children:"Leonardo fascinates people because he appears to unite opposites that are often separated in ordinary life. He was artistic and analytical. He was observational and imaginative. He was interested in beauty, but also in mechanism, motion, structure, anatomy, and mathematics."}),e.jsx("p",{children:"He did not fit neatly into one profession. He seemed to live as though the world itself was a giant unfinished notebook. That is why people still return to him whenever they talk about curiosity, invention, genius, or the ideal of broad human potential."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(m,{})}),e.jsx("h2",{children:"Important note about the title"})]}),e.jsx("p",{children:`The title "The Man Who Never Slept" works well as a dramatic phrase, but it should not be taken literally. What it really suggests is Leonardo's relentless curiosity and astonishing range of work. The deeper truth is not that he never slept, but that he seemed mentally awake in more directions than most people manage in one lifetime.`})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Leonardo da Vinci was one of history's greatest polymaths: a painter, inventor, engineer, anatomist, and thinker whose work embodied the Renaissance ideal of human curiosity. His paintings changed art, his notebooks revealed extraordinary invention, and his reputation endures because he treated the world as something to be observed, questioned, and endlessly explored."})]})]});export{N as default};
