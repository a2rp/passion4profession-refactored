import{c as a,j as e,t as s,a as x,l as o,E as n,V as t,aD as l,aE as d,w as c}from"./index-BxgJM-x-.js";import{S as h}from"./index-D6FK_vhk.js";const r={Wrapper:a.div`
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
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
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

        h3 {
            font-size: 17px;
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

        .stepsGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 840px) {
                grid-template-columns: 1fr;
            }
        }

        .stepCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast);
        }

        .stepCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-3) 94%,
                transparent
            );
        }

        .stepTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 12px;
        }

        .stepNo {
            width: 34px;
            height: 34px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 14px;
            font-weight: 900;
            line-height: 1;
            flex-shrink: 0;
        }

        .stepIcon {
            width: 34px;
            height: 34px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            flex-shrink: 0;
        }

        .stepIcon svg {
            width: 16px;
            height: 16px;
        }

        .stepCard h3 {
            margin-bottom: 8px;
        }

        .warningBox {
            margin: 16px 0;
            border: 1px solid var(--color-border-light);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-3) 92%,
                transparent
            );
            padding: 16px;
        }

        .warningBox h3 {
            margin-bottom: 8px;
        }

        .warningBox p {
            margin: 0;
        }

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .compareCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .compareCard h3 {
            margin-bottom: 8px;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
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
    `},m=[{title:"Open Microsoft Paint",text:"Go to Start, then Programs, then Accessories, and open Paint. The original idea behind this method is to use a very basic built-in tool to design a tiny icon manually.",icon:e.jsx(c,{})},{title:"Set the canvas size",text:"In Paint, open the image size or attributes option and set both width and height to 32 pixels. That is the classic icon size used for small desktop-style icons.",icon:e.jsx(s,{})},{title:"Enable the grid",text:"Turn on zoom and grid view so each tiny square pixel becomes visible. This makes it much easier to draw pixel art instead of guessing where the pixels are landing.",icon:e.jsx(t,{})},{title:"Zoom in heavily",text:"Use a large zoom level such as 800 percent. At that scale, each pixel becomes a visible block, which makes manual icon drawing practical.",icon:e.jsx(n,{})},{title:"Draw the icon",text:"Now create the icon manually. Since the canvas is tiny, the design should be simple, bold, and readable even at very small size.",icon:e.jsx(l,{})},{title:"Save the file",text:"Save the image as a BMP file first. In older workflows, people often started with BMP because Paint handled it easily.",icon:e.jsx(d,{})},{title:"Convert or rename carefully",text:"The old note says you can later change the extension to .ico. In practice, that trick may not always produce a fully valid icon file for modern systems, so proper conversion is usually better.",icon:e.jsx(o,{})}],g=["Use very simple shapes because 32x32 is a tiny canvas.","Avoid too many colors or tiny details.","Make the silhouette clear so the icon is recognizable.","Test the icon at actual size, not only while zoomed in.","For modern use, exporting through a proper icon converter is safer than only renaming the file."],u=[{title:"Old-school method",text:"Paint + tiny canvas + BMP + manual pixel drawing. Great for learning how icons work at the pixel level."},{title:"Modern practical method",text:"Design in Paint or any image editor, then convert the image properly into .ico format using a tool that generates valid icon data."}],b=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(s,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(x,{}),"Original topic: July 20, 2012"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"Create your own icons"}),e.jsx("p",{className:"lead",children:"This old archive note explains a very simple way to create a small icon by using Microsoft Paint, zooming into a tiny pixel canvas, and drawing the design manually. The method is basic, but it is actually a fun way to understand how pixel icons work."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Simple idea"})]}),e.jsxs("p",{children:["An icon is just a tiny image. In older Windows-style icon workflows, a common size was"," ",e.jsx("strong",{children:"32 by 32 pixels"}),". That means your design lives inside a very small square grid."]}),e.jsx("p",{children:"The original method uses Paint because it was available by default and made it possible to draw on a pixel-by-pixel basis. It is simple, beginner-friendly, and kind of charming in a wonderfully ancient-computer way."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Step-by-step method"})]}),e.jsx("div",{className:"stepsGrid",children:m.map((i,p)=>e.jsxs("article",{className:"stepCard",children:[e.jsxs("div",{className:"stepTop",children:[e.jsx("span",{className:"stepNo",children:p+1}),e.jsx("span",{className:"stepIcon",children:i.icon})]}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]},i.title))})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Why the grid matters"})]}),e.jsx("p",{children:"At icon size, every pixel matters. A single misplaced block can noticeably change the look of the design. Turning on grid view helps you think like a pixel artist."}),e.jsx("p",{children:"This is also why icons often use strong outlines, simple shapes, and limited detail. Tiny images do not forgive visual chaos. They are small tyrants."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Good icon design habits"})]}),e.jsx("ul",{children:g.map(i=>e.jsx("li",{children:i},i))})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"BMP vs ICO"})]}),e.jsxs("p",{children:["The original note says you can save the image as a BMP file and later change the extension to ",e.jsx("strong",{children:".ico"}),". That idea comes from older DIY workflows, but there is an important practical detail here."]}),e.jsxs("div",{className:"warningBox",children:[e.jsx("h3",{children:"Important modern note"}),e.jsx("p",{children:"Simply renaming a file extension does not always convert the actual file format correctly. A file named something.ico is not automatically a proper ICO file internally."})]}),e.jsx("p",{children:"For modern systems, the safer method is:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"design the icon image first"}),e.jsx("li",{children:"save it normally as an image"}),e.jsx("li",{children:"convert it properly into ICO format"}),e.jsx("li",{children:"then use the resulting ICO file where needed"})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Old method vs modern method"})]}),e.jsx("div",{className:"compareGrid",children:u.map(i=>e.jsxs("article",{className:"compareCard",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]},i.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"The original method is still useful because it teaches the basics of icon design very clearly. You work on a tiny canvas, see the grid, and understand how a small image is built pixel by pixel."}),e.jsx("p",{children:"For learning, it is excellent. For real modern usage, it is better to draw the icon and then convert it properly into ICO format instead of depending only on a renamed file extension."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"You can create your own icon by drawing on a very small pixel canvas in Paint, using zoom and grid view to control each block carefully. The old method is great for learning icon fundamentals, while the modern improvement is to export or convert the finished design into a proper ICO file."})]})]});export{b as default};
