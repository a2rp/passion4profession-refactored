import{c as a,Q as t,j as e,F as n,a as d,t as c,Z as p,am as h,l as x,an as g}from"./index-D1C0sqWO.js";import{S as m}from"./index-DpzaY4xy.js";const r={Wrapper:a.div`
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
            font-size: clamp(32px, 5vw, 54px);
            line-height: 0.98;
            letter-spacing: -0.04em;
            margin-bottom: 14px;
        }

        .lead {
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }
    `,PosterCard:a.section`
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
            margin-bottom: 16px;
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

        .posterFrame {
            position: relative;
            width: 100%;
            border-radius: var(--radius-md);
            overflow: hidden;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            box-shadow: 0 14px 36px var(--color-shadow);
        }

        .posterSkeleton {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                90deg,
                var(--color-surface-2),
                var(--color-border),
                var(--color-surface-2)
            );
            opacity: 0.6;
            min-height: 420px;
        }

        img {
            width: 100%;
            height: auto;
            display: block;
            transition: opacity var(--transition-fast);
        }

        .originalMeta {
            margin-top: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
            text-align: center;
        }

        .originalMeta strong {
            color: var(--color-text-primary);
        }
    `,ContentGrid:a.div`
        display: grid;
        grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.9fr);
        gap: 18px;

        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }
    `,MainCard:a.section`
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
    `,SideCard:a.aside`
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

        h2 {
            font-size: 22px;
            line-height: 1.15;
        }

        .metaBlock {
            margin-top: 8px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            overflow: hidden;
        }

        .metaRow {
            padding: 12px 14px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .metaRow + .metaRow {
            border-top: 1px solid var(--color-border);
        }

        .metaRow strong {
            font-size: 12px;
            color: var(--color-text-primary);
        }

        .metaRow span {
            font-size: 14px;
            line-height: 1.6;
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

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        .bulletList {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 14px 0;
        }

        .bulletList li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .bulletList li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }

        .lessonGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .lessonCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .lessonCard h3 {
            font-size: 17px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        .lessonCard p {
            margin: 0;
            font-size: 14px;
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
    `},u="/passion4profession-refactored/assets/youCanDoItOriginal-CGDBN-aL.png",f=[{title:"Your current position is not your final position",text:"The people shown in the original poster are used to communicate one simple idea: where someone starts does not permanently define where they can reach."},{title:"Early struggle does not cancel future success",text:"Lack of money, education gaps, rejection, or small beginnings may slow progress, but they do not automatically end possibility."},{title:"Comparison should not become surrender",text:"When people compare their beginning to someone else's finished result, they often quit too early. Real growth usually looks small in the beginning."},{title:"Hope becomes useful only with action",text:"A motivational sentence has value only when it pushes someone to keep learning, keep trying, and keep moving."}],b=["Start from the place you are in, not from the place you wish you were in","Improve one skill at a time and repeat long enough to become better","Do not treat delay as permanent defeat","Use inspiring examples as fuel, not as fantasy","Let action carry motivation forward"],j=()=>{const[s,l]=t.useState(!1),o=t.useMemo(()=>({title:"YOU CAN DO IT",date:"8th August 2012",author:"Ashish Ranjan"}),[]);return e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(d,{}),"Original topic: ",o.date]}),e.jsx(m,{})]}),e.jsx("h1",{children:o.title}),e.jsx("p",{className:"lead",children:"This archive page preserves the original motivational post and presents it in a clearer, more structured format. The original message was visual and direct: difficult beginnings do not automatically decide the rest of a person's life."})]}),e.jsxs(r.PosterCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Original poster"})]}),e.jsxs("div",{className:"posterFrame",children:[s?null:e.jsx("div",{className:"posterSkeleton"}),e.jsx("img",{src:u,alt:"Original YOU CAN DO IT motivational poster from the archive",loading:"lazy",onLoad:()=>l(!0),style:{opacity:s?1:0}})]}),e.jsxs("div",{className:"originalMeta",children:[e.jsxs("span",{children:["Posted ",e.jsx("strong",{children:o.date})]}),e.jsxs("span",{children:["by ",e.jsx("strong",{children:o.author})]})]})]}),e.jsxs(r.ContentGrid,{children:[e.jsxs(r.MainCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"What the original post is saying"})]}),e.jsx("p",{children:"The original poster tries to deliver a hopeful message using well-known public figures and short descriptions of humble or difficult starting points. Its central point is simple: life should not be judged only by what has not happened yet."}),e.jsx("p",{children:"The emotional message at the bottom is the real heart of the post: life is not only about what you could not do so far, it is about what you still can do. That is the entire engine of the page."}),e.jsx("p",{children:"Whether every quote in such posters is perfectly sourced or not, the broader lesson is still easy to understand: progress, success, and growth often emerge from unglamorous beginnings."})]}),e.jsxs(r.SideCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Original archive facts"})]}),e.jsxs("div",{className:"metaBlock",children:[e.jsxs("div",{className:"metaRow",children:[e.jsx("strong",{children:"Original title"}),e.jsx("span",{children:o.title})]}),e.jsxs("div",{className:"metaRow",children:[e.jsx("strong",{children:"Original format"}),e.jsx("span",{children:"Image-based motivational post"})]}),e.jsxs("div",{className:"metaRow",children:[e.jsx("strong",{children:"Original date"}),e.jsx("span",{children:o.date})]}),e.jsxs("div",{className:"metaRow",children:[e.jsx("strong",{children:"Original author"}),e.jsx("span",{children:o.author})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Refactored reading of the message"})]}),e.jsx("p",{children:"The poster is really about possibility. It argues that current limitations are not always permanent definitions. People can begin from low-confidence, low-resource, or low-status situations and still move into stronger futures."}),e.jsx("p",{children:"The message works best when read as encouragement to keep building rather than as blind fantasy. It is not saying that success appears automatically. It is saying that present conditions do not always tell the full story of what is still possible."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Main lessons"})]}),e.jsx("div",{className:"lessonGrid",children:f.map(i=>e.jsxs("article",{className:"lessonCard",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]},i.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(g,{})}),e.jsx("h2",{children:"Practical takeaway"})]}),e.jsx("p",{children:'A message like "You can do it" becomes useful only when it leads to action. Otherwise it remains decoration. The better way to use it is to turn it into a working attitude.'}),e.jsx("ul",{className:"bulletList",children:b.map(i=>e.jsx("li",{children:i},i))}),e.jsx("p",{children:"Motivation should not be treated like a permanent fuel tank. It comes and goes. What matters more is whether a person continues with discipline after the emotional moment has faded."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"The original post was a visual reminder that difficult beginnings do not cancel future possibility. This refactored version keeps that original message intact while presenting it with more context, structure, and clarity."})]})]})};export{j as default};
