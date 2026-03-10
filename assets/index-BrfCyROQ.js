import{c as a,j as e,as as o,a as t,l as s,g as n,n as d,at as c,b as p,M as l,v as h,ah as x}from"./index-BxgJM-x-.js";import{S as m}from"./index-D6FK_vhk.js";const r={Wrapper:a.div`
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

        .formulaGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin: 16px 0;

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .formulaCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .formulaCard p {
            margin: 0;
        }

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin: 16px 0;

            @media (max-width: 760px) {
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

        .flowRow {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            flex-wrap: wrap;
            margin: 16px 0;
        }

        .flowBox {
            min-height: 42px;
            padding: 0 14px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 700;
        }

        .flowArrow {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
        }

        .chipGrid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 14px;
        }

        .chipGrid.subtle .chip {
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .chip {
            min-height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 700;
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
    `,SourceNote:a.section`
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
    `},u=["MP3","WMA","WAV","OGG","FLAC","AAC","MP4","MPC","APE"],g=["MP3","WMA","WAV","OGG","RA","RMM","RAM","RAX","RPM","RM","RMVB","CDA","FLAC","APE","APL","AAC","M4A","MPP","MPC","MP+","MP4","OFR","SPX","TTA","WV","MOD"],v=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(t,{}),"Original topic: July 29, 2012"]}),e.jsx(m,{})]}),e.jsx("h1",{children:"What is a .cda file?"}),e.jsxs("p",{className:"lead",children:["A ",e.jsx("strong",{children:".cda"})," file is commonly seen when you open an audio CD on a computer, but it is not the real music file itself. It is more like a track reference used by the system to represent a song on the CD. The actual audio data lives on the CD in standard CD audio form, not inside the small `.cda` entry you see."]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsxs("p",{children:["CD Audio tracks shown as ",e.jsx("strong",{children:".cda"})," are representations of tracks on a compact disc. They do not contain the full actual PCM audio data in the same way that normal files like ",e.jsx("strong",{children:".mp3"})," or"," ",e.jsx("strong",{children:".wav"})," do on your hard disk."]}),e.jsxs("p",{children:["That is why a ",e.jsx("strong",{children:".cda"})," item can usually be played only while the original audio CD is present in the CD-ROM drive. If you simply copy the `.cda` file to your hard disk, it generally will not work like a real audio file."]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Important reality"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:".cda is not the actual music data file"}),e.jsx("li",{children:"It represents a track on the audio CD"}),e.jsx("li",{children:"It depends on the CD being present"}),e.jsx("li",{children:"Copying only the `.cda` entry to a hard drive is not enough"})]}),e.jsx("p",{children:"So the `.cda` file is more like a doorway than the room itself."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Why it confuses people"})]}),e.jsx("p",{children:"On a computer, we are used to files actually containing their data. But with audio CDs, the track display can look like normal files even when the system is really showing references to CD tracks."}),e.jsx("p",{children:"That is why many people copy a `.cda` file and then wonder why it refuses to play later. The tiny file was never the full song in the first place."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"How audio CD data is actually stored"})]}),e.jsx("p",{children:"Commercial compact discs store music using standard CD audio encoding. The commonly cited standard uses:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Sampling rate: 44.1 kHz"}),e.jsx("li",{children:"Sample size: 16 bits per sample"}),e.jsx("li",{children:"Channels: mono or stereo"})]}),e.jsx("p",{children:"The original note also explained the storage math. Let us rewrite that clearly."}),e.jsxs("div",{className:"formulaGrid",children:[e.jsxs("div",{className:"formulaCard",children:[e.jsx("h3",{children:"Mono calculation"}),e.jsxs("p",{children:["44,100 samples per second × 2 bytes per sample =",e.jsx("strong",{children:" 88,200 bytes per second"})]})]}),e.jsxs("div",{className:"formulaCard",children:[e.jsx("h3",{children:"Stereo calculation"}),e.jsxs("p",{children:["Stereo uses 2 channels, so it needs about",e.jsx("strong",{children:" 176,400 bytes per second"})]})]})]}),e.jsxs("p",{children:["That works out to roughly ",e.jsx("strong",{children:"10 MB per minute"})," ","of stereo sound, which is why compression formats became so important."]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Why compression matters"})]}),e.jsxs("p",{children:["Raw CD-quality audio takes a lot of storage compared with compressed formats. That is one big reason formats like",e.jsx("strong",{children:" MP3"})," became popular. They reduce file size so music is easier to store, transfer, and keep on normal devices."]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Uncompressed or less compressed"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Higher storage use"}),e.jsx("li",{children:"Closer to original audio data"}),e.jsx("li",{children:"Examples: WAV, FLAC"})]})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Lossy compressed"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Smaller file size"}),e.jsx("li",{children:"Easier to store and share"}),e.jsx("li",{children:"Examples: MP3, AAC, WMA"})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Can a .cda file be converted?"})]}),e.jsx("p",{children:'Strictly speaking, you do not "convert" the tiny `.cda` reference file by itself into music. What really happens is that software reads the audio track from the CD and then saves that track in another format on your hard disk. In normal everyday language, people still say things like "convert CDA to MP3", even though the actual work is more like extracting or ripping the audio track from the disc.'}),e.jsxs("div",{className:"flowRow",children:[e.jsx("div",{className:"flowBox",children:"Audio CD track"}),e.jsx("span",{className:"flowArrow",children:e.jsx(l,{})}),e.jsx("div",{className:"flowBox",children:"Read or rip from CD"}),e.jsx("span",{className:"flowArrow",children:e.jsx(l,{})}),e.jsx("div",{className:"flowBox",children:"Save as MP3, WAV, FLAC, etc."})]}),e.jsx("p",{children:"The original post mentioned audio conversion tools and examples such as CDA to MP3, WMA, WAV, APE, and more. That practical idea still holds: to store the music on a hard disk, you need to extract the CD audio into a real audio format."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Common target formats"})]}),e.jsx("p",{children:"The original note listed these common target formats for CD audio extraction or conversion workflows:"}),e.jsx("div",{className:"chipGrid",children:u.map(i=>e.jsx("span",{className:"chip",children:i},i))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Other audio formats mentioned in the original note"})]}),e.jsx("p",{children:"The original page also referenced a broader list of audio formats supported by audio conversion tools. For completeness, they are preserved here:"}),e.jsx("div",{className:"chipGrid subtle",children:g.map(i=>e.jsx("span",{className:"chip",children:i},i))})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Practical takeaway"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"A `.cda` entry usually works only when the original CD is available"}),e.jsx("li",{children:"Copying it to hard disk does not normally preserve the song"}),e.jsx("li",{children:"To keep the music, extract it into a real audio format"}),e.jsx("li",{children:"Formats like MP3, WAV, AAC, or FLAC are actual files you can store"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Modern clarification"})]}),e.jsx("p",{children:"The original post said computers cannot store files in CDA format. The more precise way to say it is this: computers do not usually treat `.cda` as a normal audio data file for long-term storage. Instead, the real CD audio must be read from the disc and saved into another actual audio file format."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"A `.cda` file is not the actual song in the way an MP3 or WAV file is. It is mainly a track representation for audio CDs. That is why it usually plays only from the CD itself and not after simple copying to a hard drive."}),e.jsx("p",{children:"If you want to keep CD music on your computer, the proper approach is to extract or rip the track and save it into a real audio format such as MP3, WAV, AAC, FLAC, or another supported type."})]}),e.jsxs(r.SourceNote,{children:[e.jsx("h2",{children:"Archive note"}),e.jsx("p",{children:"This page is a refactored version of the original blog note posted on July 29, 2012. The original included a source credit to coolutils.com and listed CDA-related conversion examples. That historical context has been preserved here in cleaner form."})]})]});export{v as default};
