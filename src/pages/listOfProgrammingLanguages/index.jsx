import React, { useMemo } from "react";
import {
    FiBookOpen,
    FiCode,
    FiClock,
    FiLayers,
    FiCpu,
    FiGrid,
    FiTerminal,
    FiDatabase,
    FiMonitor,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const languageGroups = {
    A: [
        "A# .NET",
        "A# (Axiom)",
        "A-0 System",
        "A+",
        "A++",
        "ABAP",
        "ABC",
        "ABC ALGOL",
        "ABLE",
        "ABSET",
        "ABSYS",
        "Abundance",
        "ACC",
        "Accent",
        "Ace DASL",
        "ACT-III",
        "Action!",
        "ActionScript",
        "Ada",
        "Adenine",
        "Agda",
        "Agora",
        "AIMMS",
        "Alef",
        "ALF",
        "ALGOL 58",
        "ALGOL 60",
        "ALGOL 68",
        "Alice",
        "Alma-0",
        "AmbientTalk",
        "Amiga E",
        "AMOS",
        "AMPL",
        "APL",
        "AppleScript",
        "Arc",
        "Arden Syntax",
        "ARexx",
        "Argus",
        "AspectJ",
        "Assembly language",
        "ATS",
        "Ateji PX",
        "AutoHotkey",
        "Autocoder",
        "AutoIt",
        "AutoLISP / Visual LISP",
        "Averest",
        "AWK",
        "Axum",
    ],
    B: [
        "B",
        "Babbage",
        "Bash",
        "BASIC",
        "bc",
        "BCPL",
        "BeanShell",
        "Batch (Windows/DOS)",
        "Bertrand",
        "BETA",
        "Bigwig",
        "Bistro",
        "BitC",
        "BLISS",
        "Blue",
        "Bon",
        "Boo",
        "Boomerang",
        "Bourne shell",
        "BREW",
        "BPEL",
        "BUGSYS",
        "BuildProfessional",
    ],
    C: [
        "C",
        "C--",
        "C++",
        "C#",
        "C/AL",
        "Caché ObjectScript",
        "C Shell",
        "Caml",
        "Candle",
        "Cayenne",
        "CDuce",
        "Cecil",
        "Cel",
        "Cesil",
        "Ceylon",
        "CFML",
        "Cg",
        "Chapel",
        "CHAIN",
        "Charity",
        "Charm",
        "Chef",
        "CHILL",
        "CHIP-8",
        "ChucK",
        "CICS",
        "Cilk",
        "Claire",
        "Clarion",
        "Clean",
        "Clipper",
        "Clojure",
        "CLU",
        "COBOL",
        "CoffeeScript",
        "ColdFusion",
        "Common Lisp",
        "Component Pascal",
        "Coq",
        "CSP",
        "Csound",
        "Curl",
        "Curry",
        "Cyclone",
        "Cython",
    ],
    D: [
        "D",
        "Dart",
        "DataFlex",
        "Datalog",
        "dBase",
        "DCL",
        "Delphi",
        "DIBOL",
        "Draco",
        "Dylan",
        "DYNAMO",
    ],
    E: [
        "E",
        "E#",
        "ECMAScript",
        "Eiffel",
        "Elan",
        "Emacs Lisp",
        "Emerald",
        "Erlang",
        "Esterel",
        "Euler",
        "Euphoria",
    ],
    F: [
        "F",
        "F#",
        "Factor",
        "Falcon",
        "Fantom",
        "FAUST",
        "Felix",
        "Flex",
        "FLOW-MATIC",
        "FOCAL",
        "Forth",
        "Fortran",
        "Fortress",
        "FoxPro",
        "Franz Lisp",
        "F-Script",
    ],
    G: [
        "G",
        "Game Maker Language",
        "GAMS",
        "GAP",
        "G-code",
        "GLSL",
        "Go",
        "GOAL",
        "Gödel",
        "GPSS",
        "Groovy",
    ],
    H: [
        "HAL/S",
        "Harbour",
        "Haskell",
        "Haxe",
        "High Level Assembly",
        "HLSL",
        "Hope",
        "Hugo",
        "HyperTalk",
    ],
    I: ["IBM RPG", "Icon", "IDL", "Inform", "Io", "Ioke", "IPL", "ISLISP"],
    J: [
        "J",
        "J#",
        "J++",
        "JADE",
        "JAL",
        "Janus",
        "Java",
        "JavaScript",
        "JCL",
        "Join Java",
        "JOSS",
        "JOVIAL",
        "Joy",
        "JScript",
        "JavaFX Script",
    ],
    K: ["K", "Karel", "Karel++", "Kaya", "KIF", "KRC", "KRL", "ksh"],
    L: [
        "L",
        "L# .NET",
        "LabVIEW",
        "Ladder",
        "Lasso",
        "LaTeX",
        "Lava",
        "LC-3",
        "Legoscript",
        "LilyPond",
        "Limbo",
        "Lingo",
        "Lisp",
        "LiveCode",
        "Logo",
        "Logtalk",
        "Lua",
        "Lustre",
        "Lynx",
    ],
    M: [
        "M",
        "M4",
        "Machine code",
        "Magik",
        "Maple",
        "MASM",
        "Mathematica",
        "MATLAB",
        "Maxima",
        "Mercury",
        "Mesa",
        "MetaL",
        "Microcode",
        "Mirah",
        "Miranda",
        "ML",
        "Modelica",
        "Modula",
        "Modula-2",
        "Modula-3",
        "MOO",
        "Mortran",
        "MUMPS",
    ],
    N: [
        "Napier88",
        "NASM",
        "NATURAL",
        "Neko",
        "Nemerle",
        "NESL",
        "NetLogo",
        "NetRexx",
        "NewLISP",
        "Newspeak",
        "NewtonScript",
        "Nial",
        "Nice",
        "NPL",
        "NSIS",
    ],
    O: [
        "Oak",
        "Oberon",
        "Object Lisp",
        "Object Pascal",
        "Objective-C",
        "Objective-J",
        "OCaml",
        "occam",
        "Octave",
        "Opa",
        "OpenEdge ABL",
        "OPL",
        "OPS5",
        "Orc",
        "Oxygene",
        "Oz",
    ],
    P: [
        "P#",
        "Pascal",
        "Pawn",
        "PEARL",
        "PeopleCode",
        "Perl",
        "PHP",
        "Pico",
        "Pict",
        "Pike",
        "PILOT",
        "PL/I",
        "PL/SQL",
        "PostScript",
        "PowerBuilder",
        "PowerShell",
        "Processing",
        "Prograph",
        "Prolog",
        "Visual Prolog",
        "Promela",
        "Pro*C",
        "Pure",
        "Python",
    ],
    Q: ["Q", "QBasic", "Qi", "QtScript", "QuakeC", "QPL"],
    R: [
        "R",
        "R++",
        "Racket",
        "RAPID",
        "Rapira",
        "Ratfor",
        "REBOL",
        "Redcode",
        "REFAL",
        "REXX",
        "RPG",
        "Ruby",
        "Rust",
    ],
    S: [
        "S",
        "S2",
        "S3",
        "S-Lang",
        "SAS",
        "Sather",
        "Scala",
        "Scheme",
        "Scilab",
        "Scratch",
        "Sed",
        "Self",
        "SETL",
        "Simula",
        "Simulink",
        "Smalltalk",
        "Small Basic",
        "SML",
        "SNOBOL",
        "SPARK",
        "SPIN",
        "Squeak",
        "Squirrel",
        "Starlogo",
        "STATA",
        "Subtext",
        "SuperCollider",
        "SystemVerilog",
    ],
    T: [
        "T",
        "TACL",
        "TADS",
        "TAL",
        "Tcl",
        "TECO",
        "TeX",
        "Timber",
        "Tom",
        "Topspeed",
        "T-SQL",
        "Turing",
        "TUTOR",
        "TXL",
    ],
    U: [
        "Ubercode",
        "UCSD Pascal",
        "Unicon",
        "Uniface",
        "UNITY",
        "Unix shell",
        "UnrealScript",
    ],
    V: [
        "Vala",
        "VBA",
        "VBScript",
        "Verilog",
        "VHDL",
        "Visual Basic",
        "Visual Basic .NET",
        "Visual C#",
        "Visual FoxPro",
        "Visual J++",
        "Visual J#",
        "Visual Objects",
    ],
    W: ["WATFIV", "WATFOR", "WebDNA", "WebQL", "Winbatch"],
    X: [
        "X++",
        "X10",
        "XBL",
        "xHarbour",
        "XL",
        "XOTcl",
        "XPL",
        "XQuery",
        "XSB",
        "XSLT",
    ],
    Y: ["Yorick", "YQL"],
    Z: ["Z notation", "Zeno", "ZOPL", "ZPL"],
};

const languageCategories = [
    {
        title: "System and low-level languages",
        icon: <FiCpu />,
        items: ["Assembly language", "C", "C++", "Rust", "Fortran", "COBOL"],
    },
    {
        title: "Web and scripting languages",
        icon: <FiMonitor />,
        items: [
            "JavaScript",
            "TypeScript-style family concepts",
            "PHP",
            "Perl",
            "Ruby",
            "Python",
        ],
    },
    {
        title: "Data and scientific languages",
        icon: <FiDatabase />,
        items: [
            "R",
            "MATLAB",
            "Julia-like ecosystem note",
            "SAS",
            "Scilab",
            "Octave",
        ],
    },
    {
        title: "Shell and automation languages",
        icon: <FiTerminal />,
        items: ["Bash", "PowerShell", "Batch", "Unix shell", "AWK", "Sed"],
    },
];

const alphabetKeys = Object.keys(languageGroups);

const ListOfProgrammingLanguages = () => {
    const totalLanguages = useMemo(() => {
        return Object.values(languageGroups).reduce(
            (count, group) => count + group.length,
            0,
        );
    }, []);

    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiBookOpen />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: September 10, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>List of Programming Languages</h1>

                <p className="lead">
                    Programming languages are the tools humans use to instruct
                    computers. Over time, thousands of languages have been
                    created for different goals such as system programming, web
                    development, automation, mathematics, hardware design,
                    scientific computing, education, and experimentation.
                </p>

                <div className="heroStats">
                    <div className="statCard">
                        <strong>{alphabetKeys.length}</strong>
                        <span>alphabet groups</span>
                    </div>

                    <div className="statCard">
                        <strong>{totalLanguages}+</strong>
                        <span>languages in this archive page</span>
                    </div>

                    <div className="statCard">
                        <strong>historical + modern</strong>
                        <span>mixed coverage</span>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>What this page is really about</h2>
                </div>

                <p>
                    The original page was essentially a giant alphabetical list.
                    That is useful as a raw archive, but not very helpful for
                    understanding the bigger picture. A programming language
                    list becomes more meaningful when you realize that languages
                    are created for different purposes, different eras, and
                    different kinds of machines.
                </p>

                <p>
                    Some languages are general-purpose, some are
                    domain-specific, some are historical stepping stones, and
                    some are still widely used today. This page keeps the
                    archive spirit alive while making the content easier to
                    browse.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGrid />
                    </span>
                    <h2>Quick alphabet navigation</h2>
                </div>

                <div className="alphabetNav">
                    {alphabetKeys.map((letter) => (
                        <a
                            key={letter}
                            href={`#group-${letter}`}
                            className="alphaLink"
                        >
                            {letter}
                        </a>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.CategoryGrid>
                {languageCategories.map((category) => (
                    <article key={category.title} className="categoryCard">
                        <div className="cardHead">
                            <span className="miniIcon">{category.icon}</span>
                            <h3>{category.title}</h3>
                        </div>

                        <ul>
                            {category.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </Styled.CategoryGrid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Refactored note</h2>
                </div>

                <p>
                    No single list of programming languages can stay complete
                    forever. The ecosystem keeps changing. Some languages become
                    historically important and then fade away. Some become niche
                    tools for very specific industries. Others become dominant
                    because of strong communities, tooling, and practical use.
                </p>

                <p>
                    So this page should be seen as an archive-style reference,
                    not as a perfect final catalog of every language that
                    exists. The tech jungle does not sit still for anyone.
                </p>
            </Styled.SectionCard>

            <Styled.LanguageSections>
                {alphabetKeys.map((letter) => (
                    <section
                        key={letter}
                        id={`group-${letter}`}
                        className="letterSection"
                    >
                        <div className="letterHeader">
                            <div className="letterBadge">{letter}</div>
                            <div className="letterMeta">
                                <h2>{letter} group</h2>
                                <p>{languageGroups[letter].length} languages</p>
                            </div>
                        </div>

                        <div className="languageGrid">
                            {languageGroups[letter].map((language) => (
                                <article
                                    key={`${letter}-${language}`}
                                    className="languageCard"
                                >
                                    <span className="dot" />
                                    <span className="languageName">
                                        {language}
                                    </span>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </Styled.LanguageSections>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Programming languages exist because different problems need
                    different abstractions. Some languages are built for speed,
                    some for safety, some for readability, some for scientific
                    work, and some for specific domains. This archive page keeps
                    the original alphabetical spirit, but presents it in a way
                    that is cleaner and easier to explore.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ListOfProgrammingLanguages;
