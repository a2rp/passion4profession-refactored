import{c as i,j as e,a,a7 as l,l as s,a8 as o,a9 as d,q as t}from"./index-D1C0sqWO.js";import{S as c}from"./index-DpzaY4xy.js";const r={Wrapper:i.div`
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

        .compareCard h3 {
            margin-bottom: 8px;
        }

        .compareCard p {
            margin: 0 0 6px;
            font-size: 18px;
            color: var(--color-text-primary);
        }

        .compareCard span {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            display: block;
        }

        .exampleBox {
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

        .exampleBox h3 {
            margin-bottom: 8px;
        }

        .exampleBox p {
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
    `,ExampleGrid:i.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 8px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
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

        .topRow {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .miniIcon svg {
            width: 16px;
            height: 16px;
        }

        h3 {
            font-size: 15px;
            line-height: 1.3;
        }

        p {
            margin: 0;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
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
    `},x=[{label:"8:00 AM",meaning:"8 in the morning, before noon",icon:e.jsx(o,{})},{label:"12:00 PM",meaning:"12 noon, middle of the day",icon:e.jsx(o,{})},{label:"6:30 PM",meaning:"6:30 in the evening, after noon",icon:e.jsx(d,{})},{label:"12:00 AM",meaning:"12 midnight, start of a new day",icon:e.jsx(d,{})}],m=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(a,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: August 20, 2012"]}),e.jsx(c,{})]}),e.jsx("h1",{children:"What are AM, PM, and GMT?"}),e.jsx("p",{className:"lead",children:"AM and PM are used in the 12-hour clock system to describe whether a time is before noon or after noon. GMT stands for Greenwich Mean Time and is an important reference point in world timekeeping."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Simple meanings"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"AM"})," stands for"," ",e.jsx("strong",{children:"Ante Meridiem"}),", which means"," ",e.jsx("strong",{children:"before midday"})," or"," ",e.jsx("strong",{children:"before noon"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PM"})," stands for"," ",e.jsx("strong",{children:"Post Meridiem"}),", which means"," ",e.jsx("strong",{children:"after midday"})," or"," ",e.jsx("strong",{children:"after noon"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GMT"})," stands for"," ",e.jsx("strong",{children:"Greenwich Mean Time"}),", a well-known time reference connected to Greenwich in London"]})]}),e.jsxs("p",{children:["The word ",e.jsx("strong",{children:"meridiem"})," comes from Latin and is connected to midday. So AM and PM are just ways of saying whether a local time is before noon or after noon."]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"AM"})]}),e.jsx("p",{children:"AM is used for times from just after midnight up to just before noon."}),e.jsxs("ul",{children:[e.jsx("li",{children:"12:00 AM is midnight"}),e.jsx("li",{children:"1:00 AM is early morning"}),e.jsx("li",{children:"11:00 AM is late morning"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"PM"})]}),e.jsx("p",{children:"PM is used for times from just after noon up to just before midnight."}),e.jsxs("ul",{children:[e.jsx("li",{children:"12:00 PM is noon"}),e.jsx("li",{children:"3:00 PM is afternoon"}),e.jsx("li",{children:"9:00 PM is night"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Common confusion: 12 AM and 12 PM"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"12:00 AM"}),e.jsx("p",{children:"Midnight"}),e.jsx("span",{children:"Beginning of a new day"})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"12:00 PM"}),e.jsx("p",{children:"Noon"}),e.jsx("span",{children:"Middle of the day"})]})]}),e.jsx("p",{children:"This is where many people get confused. The safest way to remember it is:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"12:00 AM = midnight"}),e.jsx("li",{children:"12:00 PM = noon"})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"What is GMT?"})]}),e.jsxs("p",{children:["GMT stands for ",e.jsx("strong",{children:"Greenwich Mean Time"}),". It is named after Greenwich, a place in London, where the Royal Observatory is located. Greenwich became an important reference point for global time and longitude."]}),e.jsxs("p",{children:["GMT is connected to the ",e.jsx("strong",{children:"Prime Meridian"}),", which is marked as ",e.jsx("strong",{children:"0 degrees longitude"}),". That line is used as a starting reference for world time zones."]}),e.jsxs("div",{className:"exampleBox",children:[e.jsx("h3",{children:"Simple idea"}),e.jsx("p",{children:"GMT is not the same thing as AM or PM. AM and PM tell you whether local time is before or after noon. GMT is a world reference time."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"GMT and UTC"})]}),e.jsx("p",{children:"In everyday discussion, people often treat GMT and UTC as similar reference times. But technically they are not exactly the same concept."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"GMT"})," is historically based on mean solar time at Greenwich"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UTC"})," stands for"," ",e.jsx("strong",{children:"Coordinated Universal Time"})," and is the modern international standard used for global timekeeping"]})]}),e.jsx("p",{children:"For most basic learning purposes, you can think of GMT as an important historical world reference, while UTC is the modern standard."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Time examples"})]}),e.jsx(r.ExampleGrid,{children:x.map(n=>e.jsxs("article",{className:"exampleCard",children:[e.jsxs("div",{className:"topRow",children:[e.jsx("span",{className:"miniIcon",children:n.icon}),e.jsx("h3",{children:n.label})]}),e.jsx("p",{children:n.meaning})]},n.label))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"12-hour clock vs world reference time"})]}),e.jsxs("div",{className:"timeline",children:[e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"AM and PM"}),e.jsx("p",{children:"Used in local 12-hour time to say whether it is before noon or after noon."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"GMT"}),e.jsx("p",{children:"Used as a global reference point related to Greenwich and the Prime Meridian."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"UTC"}),e.jsx("p",{children:"Modern international standard for coordinating time worldwide."})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"AM and PM are local time markers used in the 12-hour clock. They tell you whether the time is before or after noon. GMT is a world reference time linked to Greenwich and the Prime Meridian."}),e.jsxs("p",{children:["So AM and PM answer"," ",e.jsx("strong",{children:'"where is the time within the day?"'}),", while GMT helps answer"," ",e.jsx("strong",{children:'"what is the reference time for the world?"'})]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"AM means before noon, PM means after noon, and GMT means Greenwich Mean Time. AM and PM belong to the 12-hour clock system, while GMT is an important world time reference connected to Greenwich in London."})]})]});export{m as default};
