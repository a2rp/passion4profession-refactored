import{c as o,T as l,j as e,d as c,a as d,f as p,V as g,o as x,m as h,w as m,B as u,G as f}from"./index-BxgJM-x-.js";import{S as b}from"./index-D6FK_vhk.js";const r={Wrapper:o.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:o.section`
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

        .heroStats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 20px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .statCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .statCard strong {
            display: block;
            color: var(--color-text-primary);
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 4px;
        }

        .statCard span {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionCard:o.section`
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

        .alphabetNav {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .alphaLink {
            min-width: 40px;
            height: 40px;
            padding: 0 10px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
            text-decoration: none;
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .alphaLink:hover {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
            text-decoration: none;
            transform: translateY(-1px);
        }
    `,CategoryGrid:o.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 840px) {
            grid-template-columns: 1fr;
        }

        .categoryCard {
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

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
        }

        .miniIcon {
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

        .miniIcon svg {
            width: 18px;
            height: 18px;
        }

        h3 {
            font-size: 20px;
            line-height: 1.2;
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
    `,LanguageSections:o.div`
        display: flex;
        flex-direction: column;
        gap: 18px;

        .letterSection {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 20px;
            scroll-margin-top: calc(var(--header-height) + 16px);
        }

        .letterHeader {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
        }

        .letterBadge {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 20px;
            font-weight: 900;
            line-height: 1;
        }

        .letterMeta h2 {
            font-size: 24px;
            line-height: 1.1;
            margin-bottom: 4px;
        }

        .letterMeta p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .languageGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;

            @media (max-width: 920px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (max-width: 560px) {
                grid-template-columns: 1fr;
            }
        }

        .languageCard {
            min-height: 52px;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 12px 14px;
            transition:
                border-color var(--transition-fast),
                background var(--transition-fast),
                transform var(--transition-fast);
        }

        .languageCard:hover {
            border-color: var(--color-border-light);
            background: var(--color-surface-3);
            transform: translateY(-1px);
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            flex-shrink: 0;
            background: var(--color-text-primary);
        }

        .languageName {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.5;
            font-weight: 700;
            word-break: break-word;
        }
    `,FooterNote:o.section`
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
    `},s={A:["A# .NET","A# (Axiom)","A-0 System","A+","A++","ABAP","ABC","ABC ALGOL","ABLE","ABSET","ABSYS","Abundance","ACC","Accent","Ace DASL","ACT-III","Action!","ActionScript","Ada","Adenine","Agda","Agora","AIMMS","Alef","ALF","ALGOL 58","ALGOL 60","ALGOL 68","Alice","Alma-0","AmbientTalk","Amiga E","AMOS","AMPL","APL","AppleScript","Arc","Arden Syntax","ARexx","Argus","AspectJ","Assembly language","ATS","Ateji PX","AutoHotkey","Autocoder","AutoIt","AutoLISP / Visual LISP","Averest","AWK","Axum"],B:["B","Babbage","Bash","BASIC","bc","BCPL","BeanShell","Batch (Windows/DOS)","Bertrand","BETA","Bigwig","Bistro","BitC","BLISS","Blue","Bon","Boo","Boomerang","Bourne shell","BREW","BPEL","BUGSYS","BuildProfessional"],C:["C","C--","C++","C#","C/AL","Caché ObjectScript","C Shell","Caml","Candle","Cayenne","CDuce","Cecil","Cel","Cesil","Ceylon","CFML","Cg","Chapel","CHAIN","Charity","Charm","Chef","CHILL","CHIP-8","ChucK","CICS","Cilk","Claire","Clarion","Clean","Clipper","Clojure","CLU","COBOL","CoffeeScript","ColdFusion","Common Lisp","Component Pascal","Coq","CSP","Csound","Curl","Curry","Cyclone","Cython"],D:["D","Dart","DataFlex","Datalog","dBase","DCL","Delphi","DIBOL","Draco","Dylan","DYNAMO"],E:["E","E#","ECMAScript","Eiffel","Elan","Emacs Lisp","Emerald","Erlang","Esterel","Euler","Euphoria"],F:["F","F#","Factor","Falcon","Fantom","FAUST","Felix","Flex","FLOW-MATIC","FOCAL","Forth","Fortran","Fortress","FoxPro","Franz Lisp","F-Script"],G:["G","Game Maker Language","GAMS","GAP","G-code","GLSL","Go","GOAL","Gödel","GPSS","Groovy"],H:["HAL/S","Harbour","Haskell","Haxe","High Level Assembly","HLSL","Hope","Hugo","HyperTalk"],I:["IBM RPG","Icon","IDL","Inform","Io","Ioke","IPL","ISLISP"],J:["J","J#","J++","JADE","JAL","Janus","Java","JavaScript","JCL","Join Java","JOSS","JOVIAL","Joy","JScript","JavaFX Script"],K:["K","Karel","Karel++","Kaya","KIF","KRC","KRL","ksh"],L:["L","L# .NET","LabVIEW","Ladder","Lasso","LaTeX","Lava","LC-3","Legoscript","LilyPond","Limbo","Lingo","Lisp","LiveCode","Logo","Logtalk","Lua","Lustre","Lynx"],M:["M","M4","Machine code","Magik","Maple","MASM","Mathematica","MATLAB","Maxima","Mercury","Mesa","MetaL","Microcode","Mirah","Miranda","ML","Modelica","Modula","Modula-2","Modula-3","MOO","Mortran","MUMPS"],N:["Napier88","NASM","NATURAL","Neko","Nemerle","NESL","NetLogo","NetRexx","NewLISP","Newspeak","NewtonScript","Nial","Nice","NPL","NSIS"],O:["Oak","Oberon","Object Lisp","Object Pascal","Objective-C","Objective-J","OCaml","occam","Octave","Opa","OpenEdge ABL","OPL","OPS5","Orc","Oxygene","Oz"],P:["P#","Pascal","Pawn","PEARL","PeopleCode","Perl","PHP","Pico","Pict","Pike","PILOT","PL/I","PL/SQL","PostScript","PowerBuilder","PowerShell","Processing","Prograph","Prolog","Visual Prolog","Promela","Pro*C","Pure","Python"],Q:["Q","QBasic","Qi","QtScript","QuakeC","QPL"],R:["R","R++","Racket","RAPID","Rapira","Ratfor","REBOL","Redcode","REFAL","REXX","RPG","Ruby","Rust"],S:["S","S2","S3","S-Lang","SAS","Sather","Scala","Scheme","Scilab","Scratch","Sed","Self","SETL","Simula","Simulink","Smalltalk","Small Basic","SML","SNOBOL","SPARK","SPIN","Squeak","Squirrel","Starlogo","STATA","Subtext","SuperCollider","SystemVerilog"],T:["T","TACL","TADS","TAL","Tcl","TECO","TeX","Timber","Tom","Topspeed","T-SQL","Turing","TUTOR","TXL"],U:["Ubercode","UCSD Pascal","Unicon","Uniface","UNITY","Unix shell","UnrealScript"],V:["Vala","VBA","VBScript","Verilog","VHDL","Visual Basic","Visual Basic .NET","Visual C#","Visual FoxPro","Visual J++","Visual J#","Visual Objects"],W:["WATFIV","WATFOR","WebDNA","WebQL","Winbatch"],X:["X++","X10","XBL","xHarbour","XL","XOTcl","XPL","XQuery","XSB","XSLT"],Y:["Yorick","YQL"],Z:["Z notation","Zeno","ZOPL","ZPL"]},v=[{title:"System and low-level languages",icon:e.jsx(h,{}),items:["Assembly language","C","C++","Rust","Fortran","COBOL"]},{title:"Web and scripting languages",icon:e.jsx(m,{}),items:["JavaScript","TypeScript-style family concepts","PHP","Perl","Ruby","Python"]},{title:"Data and scientific languages",icon:e.jsx(u,{}),items:["R","MATLAB","Julia-like ecosystem note","SAS","Scilab","Octave"]},{title:"Shell and automation languages",icon:e.jsx(f,{}),items:["Bash","PowerShell","Batch","Unix shell","AWK","Sed"]}],t=Object.keys(s),A=()=>{const n=l.useMemo(()=>Object.values(s).reduce((a,i)=>a+i.length,0),[]);return e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(c,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(d,{}),"Original topic: September 10, 2012"]}),e.jsx(b,{})]}),e.jsx("h1",{children:"List of Programming Languages"}),e.jsx("p",{className:"lead",children:"Programming languages are the tools humans use to instruct computers. Over time, thousands of languages have been created for different goals such as system programming, web development, automation, mathematics, hardware design, scientific computing, education, and experimentation."}),e.jsxs("div",{className:"heroStats",children:[e.jsxs("div",{className:"statCard",children:[e.jsx("strong",{children:t.length}),e.jsx("span",{children:"alphabet groups"})]}),e.jsxs("div",{className:"statCard",children:[e.jsxs("strong",{children:[n,"+"]}),e.jsx("span",{children:"languages in this archive page"})]}),e.jsxs("div",{className:"statCard",children:[e.jsx("strong",{children:"historical + modern"}),e.jsx("span",{children:"mixed coverage"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"What this page is really about"})]}),e.jsx("p",{children:"The original page was essentially a giant alphabetical list. That is useful as a raw archive, but not very helpful for understanding the bigger picture. A programming language list becomes more meaningful when you realize that languages are created for different purposes, different eras, and different kinds of machines."}),e.jsx("p",{children:"Some languages are general-purpose, some are domain-specific, some are historical stepping stones, and some are still widely used today. This page keeps the archive spirit alive while making the content easier to browse."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(g,{})}),e.jsx("h2",{children:"Quick alphabet navigation"})]}),e.jsx("div",{className:"alphabetNav",children:t.map(a=>e.jsx("a",{href:`#group-${a}`,className:"alphaLink",children:a},a))})]}),e.jsx(r.CategoryGrid,{children:v.map(a=>e.jsxs("article",{className:"categoryCard",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("span",{className:"miniIcon",children:a.icon}),e.jsx("h3",{children:a.title})]}),e.jsx("ul",{children:a.items.map(i=>e.jsx("li",{children:i},i))})]},a.title))}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Refactored note"})]}),e.jsx("p",{children:"No single list of programming languages can stay complete forever. The ecosystem keeps changing. Some languages become historically important and then fade away. Some become niche tools for very specific industries. Others become dominant because of strong communities, tooling, and practical use."}),e.jsx("p",{children:"So this page should be seen as an archive-style reference, not as a perfect final catalog of every language that exists. The tech jungle does not sit still for anyone."})]}),e.jsx(r.LanguageSections,{children:t.map(a=>e.jsxs("section",{id:`group-${a}`,className:"letterSection",children:[e.jsxs("div",{className:"letterHeader",children:[e.jsx("div",{className:"letterBadge",children:a}),e.jsxs("div",{className:"letterMeta",children:[e.jsxs("h2",{children:[a," group"]}),e.jsxs("p",{children:[s[a].length," languages"]})]})]}),e.jsx("div",{className:"languageGrid",children:s[a].map(i=>e.jsxs("article",{className:"languageCard",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"languageName",children:i})]},`${a}-${i}`))})]},a))}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Programming languages exist because different problems need different abstractions. Some languages are built for speed, some for safety, some for readability, some for scientific work, and some for specific domains. This archive page keeps the original alphabetical spirit, but presents it in a way that is cleaner and easier to explore."})]})]})};export{A as default};
