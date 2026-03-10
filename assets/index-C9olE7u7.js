import{c as r,j as e,Q as n,a as h,C as x,ah as m,l as u,D as l,ai as s,m as f,B as g,K as v}from"./index-DR_KT_2c.js";import{S as w}from"./index-D4exoH3I.js";const o={Wrapper:r.div`
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
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }

        .warningBox {
            margin-top: 18px;
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
            padding: 16px;
        }

        .warningIcon {
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

        .warningIcon svg {
            width: 18px;
            height: 18px;
        }

        .warningBox strong {
            display: block;
            margin-bottom: 4px;
        }

        .warningBox p {
            margin: 0;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
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
            align-items: flex-start;
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

        .sectionIntro {
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 14px;
            line-height: 1.7;
        }

        h3 {
            font-size: 16px;
            line-height: 1.25;
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

        .codeList {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 6px;
        }

        .codeCard {
            display: grid;
            grid-template-columns: 220px minmax(0, 1fr);
            gap: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 14px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .codeValue {
            min-height: 42px;
            display: inline-flex;
            align-items: center;
            padding: 10px 12px;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            font-size: 14px;
            font-weight: 900;
            line-height: 1.4;
            word-break: break-word;
        }

        .codeContent p {
            margin: 0;
            font-size: 14px;
            line-height: 1.75;
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
    `},b=[{code:"*3370#",title:"Activate Enhanced Full Rate Codec (EFR)",text:"This was used on some older Nokia phones to enable better voice quality, but it could reduce talk time slightly."},{code:"#3370#",title:"Deactivate Enhanced Full Rate Codec (EFR)",text:"Turns off the Enhanced Full Rate Codec mode on supported phones."},{code:"*4720#",title:"Activate Half Rate Codec",text:"Uses lower voice quality but may improve talk time on supported older devices."},{code:"#4720#",title:"Deactivate Half Rate Codec",text:"Turns off Half Rate Codec mode on supported phones."}],y=[{code:"*#0000#",title:"Show software version",text:"Displays software version details such as version number and release information on many Nokia phones."},{code:"*#9999#",title:"Alternative software version code",text:"Used on some older models if *#0000# did not work."},{code:"*#8110#",title:"Software version for Nokia 8110",text:"Model-specific version information code for certain old Nokia devices."}],j=[{code:"*#06#",title:"Show IMEI number",text:"Displays the International Mobile Equipment Identity number of the phone."},{code:"*#7760#",title:"Manufacturer code",text:"Often listed in old code collections, but device support could vary."},{code:"*#92702689#",title:"Service and lifecycle information",text:"On some old Nokia phones this could display serial number, made date, purchase date, repair data, and user transfer related information."}],k=[{code:"#pw+1234567890+1#",title:"Provider lock status",text:"Old lock-status code format used on some Nokia phones. Support depended heavily on model and carrier."},{code:"#pw+1234567890+2#",title:"Network lock status",text:"Checks network lock state on certain old devices."},{code:"#pw+1234567890+3#",title:"Country lock status",text:"Checks country lock state on certain old devices."},{code:"#pw+1234567890+4#",title:"SIM card lock status",text:"Checks SIM lock state on certain old devices."}],C=[{code:"*#21#",title:"Check all-call divert status",text:"Checks the number to which all calls are being diverted."},{code:"*#43#",title:"Check call waiting status",text:"Shows whether call waiting is enabled."},{code:"*#61#",title:"Check no-reply divert",text:"Checks where calls are diverted when there is no reply."},{code:"*#62#",title:"Check unreachable divert",text:"Checks where calls are diverted if the phone is unreachable or out of service."},{code:"*#67#",title:"Check busy-call divert",text:"Checks where calls are diverted when the line is busy."},{code:"**21*number#",title:"Enable all-call divert",text:"Turns on diversion of all calls to a specified number."},{code:"**61*number#",title:"Enable no-reply divert",text:"Turns on call divert when there is no reply."},{code:"**67*number#",title:"Enable busy-call divert",text:"Turns on call divert when the phone is busy."}],N=[{code:"*#2640#",title:"Show phone security code in use",text:"Listed in older collections for supported phones."},{code:"*#30#",title:"Show private number setting",text:"Used to inspect number presentation settings on some networks and devices."},{code:"*#73#",title:"Reset phone timers and game scores",text:"Old maintenance-style code listed for certain devices."},{code:"*#746025625#",title:"Display SIM clock status",text:"Checks whether a SIM clock stop power-saving feature is supported."},{code:"*#7780#",title:"Restore factory settings",text:"Restores certain settings on supported phones. This should be used with caution."},{code:"*#67705646#",title:"Remove operator logo on 3310 and 3330",text:"A very model-specific code from classic Nokia device lists."},{code:"*#94870345123456789#",title:"Deactivate PWM-Mem",text:"A rarely cited code from old lists, with unclear support across models."},{code:"12345",title:"Default security code",text:"This was commonly listed as the default security code for many older Nokia phones, though users could change it."},{code:"Press and hold #",title:"Switch between lines",text:"On some dual-line or supported configurations, holding # could switch lines."}],S=[{code:"*#147#",title:"Last caller information",text:"Often listed as Vodafone-specific in older collections."},{code:"*#1471#",title:"Last call information",text:"Another carrier-specific code often associated with Vodafone."}],i=({icon:d,title:a,description:c,items:p})=>e.jsxs(o.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:d}),e.jsxs("div",{children:[e.jsx("h2",{children:a}),e.jsx("p",{className:"sectionIntro",children:c})]})]}),e.jsx("div",{className:"codeList",children:p.map(t=>e.jsxs("article",{className:"codeCard",children:[e.jsx("div",{className:"codeValue",children:t.code}),e.jsxs("div",{className:"codeContent",children:[e.jsx("h3",{children:t.title}),e.jsx("p",{children:t.text})]})]},`${a}-${t.code}`))})]}),F=()=>e.jsxs(o.Wrapper,{className:"topicWrapper",children:[e.jsxs(o.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(h,{}),"Old Nokia utility codes archive"]}),e.jsx(w,{})]}),e.jsx("h1",{children:"Nokia Phone Codes"}),e.jsx("p",{className:"lead",children:"This page is a cleaned-up version of an old Nokia phone codes note. These codes were commonly shared during the era of classic Nokia phones, but support depended heavily on the phone model, carrier, firmware version, and region."}),e.jsxs("div",{className:"warningBox",children:[e.jsx("span",{className:"warningIcon",children:e.jsx(x,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Important note"}),e.jsx("p",{children:"Many of these codes were model-specific, network- specific, or time-specific. Some may no longer work, and some should not be used casually on real devices without understanding what they do."})]})]})]}),e.jsxs(o.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(m,{})}),e.jsx("h2",{children:"What these codes were used for"})]}),e.jsx("p",{children:"In older mobile phones, especially classic Nokia devices, special dialer codes were often used to inspect software versions, device identity, lock status, call-divert settings, and a few maintenance-related features."}),e.jsx("p",{children:"Some codes were genuinely useful. Others were copied around the internet in giant lists and often mixed accurate, partial, outdated, and model-specific information together. A beautiful little chaos goblin of early mobile-phone internet culture."})]}),e.jsxs(o.Grid,{children:[e.jsxs(o.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(u,{})}),e.jsx("h2",{children:"What to expect from old code lists"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Some codes worked only on selected Nokia models"}),e.jsx("li",{children:"Some worked only with specific carriers"}),e.jsx("li",{children:"Some were meant only for very old devices"}),e.jsx("li",{children:"Some changed behavior across firmware versions"}),e.jsx("li",{children:"Some internet lists repeated codes with mistakes"})]})]}),e.jsxs(o.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Safety mindset"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Avoid using reset-style codes casually"}),e.jsx("li",{children:"Do not assume every code is universal"}),e.jsx("li",{children:"Be careful with security and lock-related entries"}),e.jsx("li",{children:"Prefer documentation over random internet lists"}),e.jsx("li",{children:"Treat old device tweaks as historical references"})]})]})]}),e.jsx(i,{icon:e.jsx(s,{}),title:"Voice and codec related codes",description:"These were commonly associated with audio quality and talk-time tradeoffs on supported devices.",items:b}),e.jsx(i,{icon:e.jsx(f,{}),title:"Software and firmware information codes",description:"These codes were used to inspect software version details on older Nokia phones.",items:y}),e.jsx(i,{icon:e.jsx(n,{}),title:"Identity and device information codes",description:"These codes were used to view hardware or lifecycle-related information.",items:j}),e.jsx(i,{icon:e.jsx(l,{}),title:"Lock and restriction related codes",description:"These old formats were used on some models to inspect lock status, but support varied a lot.",items:k}),e.jsx(i,{icon:e.jsx(s,{}),title:"Call divert and call waiting codes",description:"These were related to forwarding and call management settings.",items:C}),e.jsx(i,{icon:e.jsx(g,{}),title:"Miscellaneous Nokia codes",description:"A mixed group of old codes that appeared in many classic mobile-code collections.",items:N}),e.jsx(i,{icon:e.jsx(s,{}),title:"Carrier-specific last-call style codes",description:"These were often listed as Vodafone-only or carrier-specific in old code collections.",items:S}),e.jsxs(o.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(v,{})}),e.jsx("h2",{children:"Which codes were the most practical?"})]}),e.jsx("p",{children:"Historically, the most commonly useful entries from lists like this were usually the simpler information codes:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"*#06# for checking IMEI"}),e.jsx("li",{children:"*#0000# for software version on many older Nokia phones"}),e.jsx("li",{children:"*#21#, *#61#, *#62#, *#67# for checking call-divert settings"}),e.jsx("li",{children:"*#43# for checking call waiting"}),e.jsx("li",{children:"*#7780# only with caution, because it affects settings"})]}),e.jsx("p",{children:"The more obscure lock-status and maintenance entries were often more fragile, model-specific, or inconsistently documented."})]}),e.jsxs(o.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Nokia phone codes were special dialer commands used mostly on older devices to inspect software version, IMEI, lock status, call forwarding, and a few maintenance features. They are best treated as historical device-reference notes, not universal commands that will work everywhere."})]})]});export{F as default};
