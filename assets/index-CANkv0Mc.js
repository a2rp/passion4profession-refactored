import{c as i,j as e,s as a,a as t,l as o,g as n,t as l,u as d,v as c,q as x}from"./index-DR_KT_2c.js";import{S as p}from"./index-D4exoH3I.js";const r={Wrapper:i.div`
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
            margin-bottom: 12px;
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
            line-height: 1.35;
        }

        .extRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .ext {
            min-height: 32px;
            padding: 0 10px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
        }

        .arrow {
            color: var(--color-text-muted);
            font-size: 13px;
            font-weight: 700;
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
    `},h=[{type:"TIFF image files",shortExt:".tif",longExt:".tiff"},{type:"JPEG image files",shortExt:".jpg",longExt:".jpeg"},{type:"PICT image files",shortExt:".pct",longExt:".pict"},{type:"MPEG video files",shortExt:".mpg",longExt:".mpeg"},{type:"QuickTime video files",shortExt:".mov",longExt:".moov"},{type:"MIDI music files",shortExt:".mid",longExt:".midi"},{type:"AIFF audio files",shortExt:".aif",longExt:".aiff"},{type:"WAVE audio files",shortExt:".wav",longExt:".wave"},{type:"HTML web files",shortExt:".htm",longExt:".html"},{type:"MIME encoded files",shortExt:".mim",longExt:".mime"}],f=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(a,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(t,{}),"Original topic: February 13, 2013"]}),e.jsx(p,{})]}),e.jsx("h1",{children:"Why do both 3-letter and 4-letter file extensions exist?"}),e.jsxs("p",{className:"lead",children:["Some file types use both 3-letter and 4-letter extensions even though the file format is the same. A classic example is ",e.jsx("strong",{children:".tif"})," and ",e.jsx("strong",{children:".tiff"}),". The data inside the file can be identical. The difference is mainly historical and comes from older operating system limitations."]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Simple answer"})]}),e.jsxs("p",{children:["In early versions of Windows, file extensions were commonly limited to 3 characters. Because of that, longer names had to be shortened. So formats like ",e.jsx("strong",{children:"TIFF"})," were often saved as ",e.jsx("strong",{children:".tif"})," instead of"," ",e.jsx("strong",{children:".tiff"}),"."]}),e.jsx("p",{children:"Later, operating systems became more flexible and started supporting longer file extensions. That is why both short and long versions began to appear for the same file type."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Important point"})]}),e.jsx("p",{children:"In many cases, the extension is different but the actual file format is the same."}),e.jsxs("ul",{children:[e.jsx("li",{children:".tif and .tiff usually refer to the same TIFF format"}),e.jsx("li",{children:".jpg and .jpeg usually refer to the same JPEG format"}),e.jsx("li",{children:".htm and .html usually refer to the same HTML format"})]}),e.jsx("p",{children:"So changing the extension name does not always mean the content format has changed."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Why it happened"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Older Windows conventions favored 3-letter extensions"}),e.jsx("li",{children:"Some longer names had to be abbreviated"}),e.jsx("li",{children:"Other systems were less strict about extension length"}),e.jsx("li",{children:"Later systems supported both short and long forms"})]}),e.jsx("p",{children:"That left us with a small museum of duplicate extension names still wandering around today."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Classic example: .tif vs .tiff"})]}),e.jsxs("p",{children:["TIFF stands for ",e.jsx("strong",{children:"Tagged Image File Format"}),". The full descriptive extension is ",e.jsx("strong",{children:".tiff"}),". But because older Windows systems preferred shorter extensions, ",e.jsx("strong",{children:".tif"})," became the common version."]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Short form"}),e.jsx("p",{children:e.jsx("strong",{children:".tif"})}),e.jsx("span",{children:"Popular because of older 3-letter extension habits"})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Long form"}),e.jsx("p",{children:e.jsx("strong",{children:".tiff"})}),e.jsx("span",{children:"More descriptive, but the same format in many cases"})]})]}),e.jsx("p",{children:"The practical result is that both may open the same way in supported programs."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Historical reason"})]}),e.jsxs("div",{className:"timeline",children:[e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Older systems"}),e.jsx("p",{children:"Shorter file extensions were common, especially on Windows."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Abbreviated names appeared"}),e.jsx("p",{children:"Long extensions like .tiff were shortened to .tif, .jpeg to .jpg, and so on."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Modern systems became flexible"}),e.jsx("p",{children:"Longer extensions were accepted, so both forms continued to exist."})]})]}),e.jsxs("div",{className:"timeItem",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Today"}),e.jsx("p",{children:"Many programs still prefer the shorter form because it became a familiar convention."})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Common examples"})]}),e.jsx(r.ExampleGrid,{children:h.map(s=>e.jsxs("article",{className:"exampleCard",children:[e.jsxs("div",{className:"topRow",children:[e.jsx("span",{className:"miniIcon",children:s.type.toLowerCase().includes("image")?e.jsx(l,{}):s.type.toLowerCase().includes("video")?e.jsx(d,{}):s.type.toLowerCase().includes("audio")||s.type.toLowerCase().includes("music")?e.jsx(c,{}):s.type.toLowerCase().includes("html")?e.jsx(x,{}):e.jsx(a,{})}),e.jsx("h3",{children:s.type})]}),e.jsxs("div",{className:"extRow",children:[e.jsx("span",{className:"ext",children:s.shortExt}),e.jsx("span",{className:"arrow",children:"and"}),e.jsx("span",{className:"ext",children:s.longExt})]})]},`${s.type}-${s.shortExt}`))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Which one should you use?"})]}),e.jsx("p",{children:"In many cases, the shorter 3-letter version became the more common convention, especially because people got used to it over time."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:".jpg"})," is often more common than"," ",e.jsx("strong",{children:".jpeg"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:".tif"})," is often more common than"," ",e.jsx("strong",{children:".tiff"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:".htm"})," and ",e.jsx("strong",{children:".html"})," both exist, but ",e.jsx("strong",{children:".html"})," is very common today"]})]}),e.jsx("p",{children:"So there is no single universal rule for every case. Historically, shorter ones were more standard, but modern usage depends on the format and ecosystem."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"Both 3-letter and 4-letter file extensions exist mainly because of historical system limitations and later operating system improvements. The format itself often stayed the same, while the extension spelling changed."}),e.jsx("p",{children:"In practice, software usually understands both forms if they refer to the same format. So the difference is often about convention, compatibility, and history rather than actual file structure."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Some file types have both short and long extensions because older systems pushed developers toward 3-letter names, while newer systems allowed longer descriptive names. That is why pairs like .tif and .tiff, or .jpg and .jpeg, still exist today."})]})]});export{f as default};
