import{c as s,j as e,F as i,a as l,aI as o,E as d,l as t,f as c,K as n,aJ as p,v as x,w as h}from"./index-DR_KT_2c.js";import{S as m}from"./index-D4exoH3I.js";const a={Wrapper:s.div`
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

        .metaRow {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 22px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .metaCard {
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

        .metaIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .metaIcon svg {
            width: 18px;
            height: 18px;
        }

        .metaCard strong {
            display: block;
            margin-bottom: 4px;
            font-size: 15px;
        }

        .metaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
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

        .reasonGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .reasonCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .reasonCard p {
            font-size: 14px;
            line-height: 1.75;
        }

        .stepsStack {
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

        .stepCard strong {
            display: block;
            margin-bottom: 4px;
        }

        .stepCard p {
            font-size: 14px;
            line-height: 1.75;
        }
    `,FeatureGrid:s.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }

        .featureCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 20px;
        }

        .featureIcon {
            width: 44px;
            height: 44px;
            margin-bottom: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .featureIcon svg {
            width: 20px;
            height: 20px;
        }

        h3 {
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }
    `,TwoCol:s.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }

        .infoCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 20px;
        }

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

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
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
    `},u=[{icon:e.jsx(p,{}),title:"Plays many formats",text:"VLC is known for handling a very wide range of audio and video formats without asking users to hunt for extra codec packs."},{icon:e.jsx(x,{}),title:"Audio and video in one place",text:"It works as a media player for movies, songs, recorded clips, and many common media files in a single lightweight application."},{icon:e.jsx(n,{}),title:"Powerful settings",text:"VLC offers advanced options for subtitles, playback speed, audio tracks, filters, equalizer controls, and streaming behavior."},{icon:e.jsx(h,{}),title:"Useful across platforms",text:"It became popular partly because it is available on multiple operating systems and stays practical for everyday media tasks."}],g=["Play downloaded video and audio files","Open files that other players fail to recognize","Watch videos with subtitle support","Change playback speed for learning or review","Use keyboard shortcuts for fast control","Test media files during development or content work"],f=["Simple to start using","Supports many formats","Widely trusted by users","Useful for both normal users and power users","Practical controls for everyday playback"],j=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(i,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: July 18, 2012"]}),e.jsx(m,{})]}),e.jsx("h1",{children:"Awesome VLC media player"}),e.jsx("p",{className:"lead",children:"This archive post originally had only a title and almost no explanation. In this refactored version, the topic is turned into a cleaner reference note about why VLC became such a popular and practical media player."}),e.jsxs("div",{className:"metaRow",children:[e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(o,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"What it is"}),e.jsx("span",{children:"A flexible media player used for audio, video, and more"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(d,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Why it matters"}),e.jsx("span",{children:"It solves playback problems without much drama"})]})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"What is VLC Media Player?"})]}),e.jsx("p",{children:"VLC Media Player is a general-purpose media player that can open many types of video and audio files. It became widely popular because people could install it and immediately play files that other players often struggled with."}),e.jsx("p",{children:"In practical terms, VLC earned its reputation by being the tool users opened when a media file refused to cooperate elsewhere. That alone made it legendary internet survival gear."})]}),e.jsx(a.FeatureGrid,{children:u.map(r=>e.jsxs("article",{className:"featureCard",children:[e.jsx("div",{className:"featureIcon",children:r.icon}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]},r.title))}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Why VLC became so popular"})]}),e.jsx("p",{children:"Many users did not care about codec theory, container formats, or media internals. They just wanted a file to open. VLC became famous because it usually did exactly that."}),e.jsxs("div",{className:"reasonGrid",children:[e.jsxs("div",{className:"reasonCard",children:[e.jsx("h3",{children:"Less friction"}),e.jsx("p",{children:"It reduced the need to install random extra codec bundles just to play a single file."})]}),e.jsxs("div",{className:"reasonCard",children:[e.jsx("h3",{children:"Practical controls"}),e.jsx("p",{children:"Users could manage subtitles, volume, speed, and playback behavior from one familiar interface."})]}),e.jsxs("div",{className:"reasonCard",children:[e.jsx("h3",{children:"Works for normal users"}),e.jsx("p",{children:"Even if someone knew nothing about media formats, VLC was often easy enough to use immediately."})]}),e.jsxs("div",{className:"reasonCard",children:[e.jsx("h3",{children:"Works for advanced users too"}),e.jsx("p",{children:"More technical users could go deeper with streams, settings, filters, and format-specific options."})]})]})]}),e.jsxs(a.TwoCol,{children:[e.jsxs("section",{className:"infoCard",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Common use cases"})]}),e.jsx("ul",{children:g.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs("section",{className:"infoCard",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Why users liked it"})]}),e.jsx("ul",{children:f.map(r=>e.jsx("li",{children:r},r))})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Useful things people often do in VLC"})]}),e.jsxs("div",{className:"stepsStack",children:[e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Open difficult media files"}),e.jsx("p",{children:"VLC is often the first thing people try when a video or audio file fails elsewhere."})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Use subtitles"}),e.jsx("p",{children:"Users commonly load subtitle files and adjust playback without much setup."})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Control speed and navigation"}),e.jsx("p",{children:"It is useful for learning, review, and quickly moving through media content."})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"4"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Handle everyday media tasks"}),e.jsx("p",{children:"For many users, VLC becomes the default “just-play-the-file” software."})]})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Archive note"})]}),e.jsx("p",{children:"The original blog entry was extremely short, so this page is intentionally a better structured rewrite rather than a fake reconstruction of missing old text."}),e.jsx("p",{children:"That is actually the spirit of this project: keep the root idea, improve the explanation, and turn scattered old titles into pages that are genuinely useful now."})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"VLC Media Player became popular because it was practical, flexible, and reliable for opening many media files with less hassle. This refactored archive page turns an old title-only note into a cleaner explanation of why VLC mattered to so many users."})]})]});export{j as default};
