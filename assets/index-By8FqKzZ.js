import{c as i,j as e,F as t,a as o,w as a,C as n,s as d,f as l,D as s,E as c,aD as h}from"./index-D1C0sqWO.js";import{S as p}from"./index-DpzaY4xy.js";const r={Wrapper:i.div`
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
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }
    `,WarningCard:i.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 92%, transparent),
            color-mix(in srgb, var(--color-surface-2) 100%, transparent)
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
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .iconWrap.warning {
            background: var(--color-surface-3);
            border-color: var(--color-border-light);
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

        .stepsBox {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 8px;
        }

        .stepCard {
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
    `},m=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(t,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(o,{}),"Original topic: July 19, 2012"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(a,{}),"Historical Windows XP tweak"]}),e.jsx(p,{})]}),e.jsx("h1",{children:"Change your Start button"}),e.jsx("p",{className:"lead",children:"This archive note explains an old Windows XP customization trick where the Start button text could be changed by editing system resources and updating a registry value. It was an interesting customization experiment from the Windows XP era, but it also came with real risk because it involved modifying core system behavior."})]}),e.jsxs(r.WarningCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap warning",children:e.jsx(n,{})}),e.jsx("h2",{children:"Important archive context"})]}),e.jsxs("p",{children:["This method was written for ",e.jsx("strong",{children:"Windows XP"}),", which is now obsolete. It required editing"," ",e.jsx("strong",{children:"explorer.exe"})," and changing the"," ",e.jsx("strong",{children:"Windows Registry"}),". That kind of tweak could break the shell or leave the system unstable if done incorrectly."]}),e.jsx("p",{children:"So this page should be treated as a historical archive note, not as a recommended modern customization guide."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"What the original idea was"})]}),e.jsx("p",{children:'The original blog post was about changing the text shown on the Windows XP Start button. At that time, some people believed the button text had to be exactly 5 characters long because the default word was "Start". The original note pushed back on that myth and showed that longer text could also be used.'}),e.jsx("p",{children:"The core idea was simple:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Take a backup of the original Windows shell file"}),e.jsx("li",{children:"Edit the visible Start text inside explorer.exe"}),e.jsx("li",{children:"Save a modified copy"}),e.jsx("li",{children:"Point Windows to load that modified copy at startup"})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Why this worked"})]}),e.jsx("p",{children:"In Windows XP, the Start button label was part of the resources bundled into the shell executable. By editing that resource string, the visible text could be changed."}),e.jsx("p",{children:"Then, by changing which shell executable Windows loaded, the modified version could be used during startup."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Why it was risky"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It changed a core system executable"}),e.jsx("li",{children:"It required registry editing"}),e.jsx("li",{children:"It could prevent the normal shell from loading"}),e.jsx("li",{children:"Any typo or wrong path could cause startup issues"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Refactored step-by-step summary"})]}),e.jsxs("div",{className:"stepsBox",children:[e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Back up the original shell file"}),e.jsxs("p",{children:["The first step was to back up"," ",e.jsx("strong",{children:"c:\\Windows\\explorer.exe"})," before making any changes."]})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Open the file in Resource Hacker"}),e.jsx("p",{children:"Because explorer.exe is a binary file, it could not be edited like a normal text file. A tool such as Resource Hacker was used to edit the resource strings inside it."})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Find the Start button string"}),e.jsx("p",{children:'The original post points to the String Table section and the resource entry where the text "start" could be replaced with another label.'})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"4"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Compile and save a new file"}),e.jsx("p",{children:"After replacing the text, the edited resource had to be compiled and then saved as a separate explorer.exe copy instead of overwriting the original file directly."})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"5"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Update the shell path in the registry"}),e.jsx("p",{children:"The registry value for the shell was then changed so Windows would load the modified explorer executable at login."})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"6"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Log off or reboot to see the effect"}),e.jsx("p",{children:"Once Windows started using the modified shell, the custom Start button text appeared."})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"The myth mentioned in the original post"})]}),e.jsx("p",{children:'A common claim at the time was that the Start button name had to remain exactly 5 characters long because the default label was "Start". The original post argued against that and reported that longer custom text worked without causing a problem.'}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard bad",children:[e.jsx("h3",{children:"Myth"}),e.jsx("p",{children:"The button text must always stay 5 characters long."})]}),e.jsxs("div",{className:"compareCard good",children:[e.jsx("h3",{children:"Observation"}),e.jsx("p",{children:"Different text lengths could work because the label was being changed as a resource string."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Better modern takeaway"})]}),e.jsx("p",{children:"The most useful thing to preserve from this archive post is not the exact tweak itself, but the curiosity behind it. This was part of an era when people heavily customized Windows XP by patching resources, replacing icons, and editing startup components."}),e.jsx("p",{children:"Today, directly modifying system executables is generally a poor idea unless you are doing controlled reverse engineering, testing inside a safe environment, or working on legacy systems with proper backups."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Why this post still matters in the archive"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It shows early experimentation with system internals"}),e.jsx("li",{children:"It reflects the Windows XP customization culture"}),e.jsx("li",{children:"It documents an old myth and challenges it"}),e.jsx("li",{children:"It captures the spirit of learning by trying things"})]}),e.jsx("p",{children:"So even if the exact tweak is outdated, it still belongs in the archive because it says something about that phase of computing and curiosity."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"This old note described how to change the Windows XP Start button text by editing explorer.exe resources and updating the shell registry entry. It was a classic XP-era tweak: clever, hacky, and risky. Today it works best as a historical customization archive rather than as a modern how-to."})]})]});export{m as default};
