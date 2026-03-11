import{c as s,j as e,B as n,a as o,l as i,f as l,n as t,g as d}from"./index-D1C0sqWO.js";import{S as c}from"./index-DpzaY4xy.js";const a={Wrapper:s.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:s.section`
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
    `,SectionCard:s.section`
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

        .unitGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 840px) {
                grid-template-columns: 1fr;
            }
        }

        .unitCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .unitTop {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 8px;
        }

        .unitLeft,
        .unitRight {
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

        .equals {
            color: var(--color-text-muted);
            font-size: 13px;
            font-weight: 700;
        }

        .unitCard p {
            margin: 0;
            font-size: 13px;
            line-height: 1.7;
        }

        .noteBox {
            margin-top: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .noteBox strong {
            display: block;
            margin-bottom: 6px;
        }

        .noteBox p {
            margin: 0;
            font-size: 14px;
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

        .compareValue {
            margin: 8px 0;
            font-size: 18px;
            font-weight: 800;
            color: var(--color-text-primary);
            line-height: 1.3;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
        }
    `,Grid:s.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:s.article`
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
    `,FooterNote:s.section`
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
    `},p=[{unit:"1 bit",meaning:"1 binary digit",note:"Smallest basic unit of digital data"},{unit:"8 bits",meaning:"1 byte",note:"A byte commonly stores one character in many encodings"},{unit:"1024 bytes",meaning:"1 kilobyte",note:"Traditionally used in binary-based storage calculations"},{unit:"1024 kilobytes",meaning:"1 megabyte",note:"Larger collection of digital data"},{unit:"1024 megabytes",meaning:"1 gigabyte",note:"Common for storage and memory discussions"},{unit:"1024 gigabytes",meaning:"1 terabyte",note:"Used for hard drives and SSD capacities"},{unit:"1024 terabytes",meaning:"1 petabyte",note:"Used in very large data storage systems"},{unit:"1024 petabytes",meaning:"1 exabyte",note:"Massive scale data measurement"},{unit:"1024 exabytes",meaning:"1 zettabyte",note:"Used for global-scale data discussions"},{unit:"1024 zettabytes",meaning:"1 yottabyte",note:"Extremely large theoretical or global-scale unit"}],x=[{left:"Decimal style",right:"1 KB = 1000 bytes",text:"Often used by storage manufacturers for disk capacity labels."},{left:"Binary style",right:"1 KiB = 1024 bytes",text:"Used in technical contexts where powers of 2 matter."}],h=["A few bytes can represent a small piece of text.","Kilobytes are enough for very tiny files such as plain notes.","Megabytes are common for photos, PDFs, or songs.","Gigabytes are common for apps, games, and videos.","Terabytes are common for SSDs, HDDs, and backup drives."],u=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(o,{}),"Original topic: January 20, 2013"]}),e.jsx(c,{})]}),e.jsx("h1",{children:"Bits, bytes, and the 1024-based storage units"}),e.jsx("p",{className:"lead",children:'This topic started as a short post around "1024 coperbyte", but the actually useful part is understanding how digital storage units grow from bits and bytes into larger units like kilobytes, megabytes, gigabytes, and beyond.'})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsxs("p",{children:["Computers store data in binary, which means they work with 0s and 1s. A single binary value is called a"," ",e.jsx("strong",{children:"bit"}),". Groups of bits form larger units such as ",e.jsx("strong",{children:"bytes"}),", ",e.jsx("strong",{children:"kilobytes"}),","," ",e.jsx("strong",{children:"megabytes"}),", and so on."]}),e.jsxs("p",{children:["In traditional binary-based measurement, each step is multiplied by ",e.jsx("strong",{children:"1024"}),", not 1000. That is why older notes often show values like 1024 bytes = 1 kilobyte."]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Standard progression"})]}),e.jsx("div",{className:"unitGrid",children:p.map(r=>e.jsxs("article",{className:"unitCard",children:[e.jsxs("div",{className:"unitTop",children:[e.jsx("span",{className:"unitLeft",children:r.unit}),e.jsx("span",{className:"equals",children:"="}),e.jsx("span",{className:"unitRight",children:r.meaning})]}),e.jsx("p",{children:r.note})]},r.unit))})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"What is a bit?"})]}),e.jsxs("p",{children:["A bit is short for ",e.jsx("strong",{children:"binary digit"}),". It can hold only one of two values: 0 or 1."]}),e.jsx("p",{children:"Bits are the smallest building blocks of digital data. On their own, they are tiny. But when grouped together, they can represent text, numbers, images, and almost everything else in computing."})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"What is a byte?"})]}),e.jsxs("p",{children:["A byte usually means ",e.jsx("strong",{children:"8 bits"}),". This is a very common and practical unit in computing."]}),e.jsx("p",{children:"Many simple character systems use one byte to represent one character, which is why bytes became such a useful everyday storage unit."})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Important correction about very large names"})]}),e.jsxs("p",{children:["The original post continues far beyond yottabyte using names like ",e.jsx("strong",{children:"brontobyte"}),", ",e.jsx("strong",{children:"coperbyte"}),", and many others. Those are not part of the standard, practical storage unit list that people normally use in real computing work."]}),e.jsxs("p",{children:["For a clean refactored archive, it is better to keep the focus on the commonly recognized chain:",e.jsxs("strong",{children:[" ","bit -> byte -> KB -> MB -> GB -> TB -> PB -> EB -> ZB -> YB"]}),"."]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("strong",{children:"Good archive rule"}),e.jsx("p",{children:"Keep the educational part. Remove the confusing fantasy ladder unless you want to mention it only as a curiosity."})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"1024 vs 1000"})]}),e.jsx("p",{children:"This is where many learners get confused. In traditional binary measurement, each unit grows by 1024 because computers work naturally with powers of 2. But in marketing and disk labeling, manufacturers often use 1000-based values."}),e.jsx("div",{className:"compareGrid",children:x.map(r=>e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:r.left}),e.jsx("div",{className:"compareValue",children:r.right}),e.jsx("p",{children:r.text})]},r.right))}),e.jsx("p",{children:'That is why a drive sold as "500 GB" may look slightly smaller when the operating system reports available space using a different interpretation.'})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Real-world intuition"})]}),e.jsx("ul",{children:h.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"The useful lesson is not the exotic unit names. The useful lesson is understanding how digital storage grows step by step from bits and bytes into larger units."}),e.jsx("p",{children:"For most real-world learning, revision, interviews, and basic computer knowledge, you should remember the standard unit flow and the 1024 vs 1000 difference."})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"A bit is a binary digit, 8 bits make 1 byte, and larger storage units traditionally grow by 1024 at each step. The standard and most useful chain goes up to yottabyte in normal discussions. Beyond that, the original post becomes more novelty than practical computing reference."})]})]});export{u as default};
