import React from "react";
import {
    FiCode,
    FiClock,
    FiAlertTriangle,
    FiBookOpen,
    FiMessageSquare,
    FiHash,
    FiZap,
    FiCheckCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const chartRows = [
    { letter: "A", values: "4, /-\\, @, ^, /\\, //-\\\\, /=\\" },
    { letter: "B", values: "8, ]3, ]8, |3, |8, ]]3, 13" },
    { letter: "C", values: "(, {, [[, <, €" },
    { letter: "D", values: "), [}, |), |}, |>, [>, ]]), Ð" },
    { letter: "E", values: "3, ii, €" },
    { letter: "F", values: "|=, (=, ]]=, ph" },
    { letter: "G", values: "6, 9, (_>, [[6, &, (," },
    {
        letter: "H",
        values: "#, |-|, (-), )-(, }{, }-{, {-}, /-/, \\-\\, |~|, []-[], ]]-[[, ╫",
    },
    { letter: "I", values: "1, !, |, ][, []" },
    { letter: "J", values: "_|, u|, ;_[], ;_[[" },
    { letter: "K", values: "|<, |{, ][<, ]]<, []<" },
    { letter: "L", values: "|, 1, |_, []_, ][_, £" },
    {
        letter: "M",
        values: "/\\\\/\\\\, |\\\\/|, [\\\\/], (\\\\/), /V\\\\, []V[], \\\\\\\\, (T), ^^, .\\\\, //., ][\\\\//][, JVL",
    },
    {
        letter: "N",
        values: "/\\\\/, |\\\\|, (\\\\), /|/, [\\\\], {\\\\}, ][\\\\][, []\\\\[], ~",
    },
    { letter: "O", values: "0, (), [], <>, *, [[]]" },
    { letter: "P", values: "|D, |*, |>, []D, ][D" },
    { letter: "Q", values: "(,), 0_, O_, O\\\\, []\\\\" },
    { letter: "R", values: "|2, |?, |-, ]]2, []2, ][2" },
    { letter: "S", values: "5, $, š" },
    { letter: "T", values: "7, +, ']', 7`, ~|~, -|-, '][', \"|\", †" },
    { letter: "U", values: "(_), |_|, \\_\\, /_/, \\_/, []_[], ]_[, µ" },
    { letter: "V", values: "\\/, \\\\//, √" },
    {
        letter: "W",
        values: "\\/\\/, |/\\|, [/\\], (/\\), VV, ///, \\^/, \\\\/\\//, 1/\\/, \\/1/, 1/1/",
    },
    { letter: "X", values: "><, }{, )(, }[" },
    { letter: "Y", values: "'/, %, `/, \\j, ``//, ¥, j, \\|/, -/" },
    { letter: "Z", values: "2, z, 7_, `/_" },
];

const coreIdeas = [
    {
        title: "Leet is not fixed",
        text: "1337 is not a perfectly standardized language. People mix symbols, slang, jokes, random capitalization, and personal style.",
    },
    {
        title: "Shapes matter",
        text: "A lot of leet works by replacing letters with symbols that look similar. For example, 3 can stand for E and 4 can stand for A.",
    },
    {
        title: "Context matters",
        text: "If a word looks confusing, nearby words often help you guess the intended meaning.",
    },
    {
        title: "Creativity is part of it",
        text: "Leet includes substitutions, phonetic spellings, deliberate misspellings, abbreviations, and internet slang.",
    },
];

const examples = [
    {
        plain: "leet",
        leet: "1337",
        note: "1 can look like L, 3 like E, and 7 like T.",
    },
    {
        plain: "hackers",
        leet: "H4X0RZ",
        note: "A, CKS, O, and plural forms often get stylized.",
    },
    {
        plain: "I love you",
        leet: "i luv u",
        note: "Phonetic simplification is common.",
    },
    {
        plain: "that rocked",
        leet: "7h47 r0xx0r3d",
        note: "Extra suffixes and stylized past tense are common in leet slang.",
    },
];

const grammarNotes = [
    "Plural or emphasis can be exaggerated with endings like '0rz'.",
    "Past tense can be stylized with endings like '3d'.",
    "Words may intentionally break normal spelling rules.",
    "Random capitalization is common and often has no strict rule.",
];

const tips = [
    "Start by reading simple examples instead of heavily encoded full sentences.",
    "Use context when a symbol or word does not immediately make sense.",
    "Do not try to replace every single letter when writing. That quickly becomes unreadable.",
    "Treat leet as playful internet writing, not as formal language.",
    "Read more examples and patterns will become easier to recognize.",
];

const warnings = [
    "Heavy use of leet can annoy people in normal forums or discussions.",
    "Overdoing substitutions can make your text unreadable.",
    "It should not replace normal grammar and writing skills.",
    "Many people treat extreme leet writing as outdated or deliberately obnoxious.",
];

const HowToReadAndWriteIn1337 = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiCode />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 18, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>How to read and write in 1337</h1>

                <p className="lead">
                    1337, also called leet or leetspeak, is an internet writing
                    style where letters are replaced with numbers, symbols,
                    altered spellings, slang, and playful formatting. It began
                    as a coded or insider style of writing and later became part
                    of gaming, chat culture, forums, memes, and online jokes.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBookOpen />
                    </span>
                    <h2>What 1337 actually is</h2>
                </div>

                <p>
                    The word "leet" comes from "elite". A classic example is
                    writing <strong>leet</strong> as <strong>1337</strong>. Over
                    time, leet became more than simple letter replacement. It
                    grew into a loose internet style that includes altered
                    spelling, phonetic shortcuts, acronyms, memes, dramatic
                    suffixes, and random capitalization.
                </p>

                <p>
                    The most important thing to understand is this: leet is not
                    fixed. It is more like a constantly mutating internet
                    dialect than a strict language with clean rules. Tiny chaos
                    goblin energy, but textual.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                {coreIdeas.map((item) => (
                    <Styled.InfoCard key={item.title}>
                        <div className="sectionHead">
                            <span className="iconWrap">
                                <FiCheckCircle />
                            </span>
                            <h2>{item.title}</h2>
                        </div>

                        <p>{item.text}</p>
                    </Styled.InfoCard>
                ))}
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiHash />
                    </span>
                    <h2>How to read it</h2>
                </div>

                <div className="stepsGrid">
                    <div className="stepCard">
                        <span className="stepNo">1</span>
                        <div>
                            <h3>Look at shapes</h3>
                            <p>
                                Many symbols are chosen because they visually
                                resemble letters. For example, 5 can resemble S,
                                4 can resemble A, and 0 can resemble O.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">2</span>
                        <div>
                            <h3>Use surrounding context</h3>
                            <p>
                                If one symbol is unclear, the rest of the word
                                often reveals the meaning.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">3</span>
                        <div>
                            <h3>Expect phonetic spelling</h3>
                            <p>
                                Some words are changed by sound rather than by
                                pure symbol substitution, such as "luv" for
                                "love".
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">4</span>
                        <div>
                            <h3>Expect intentional misspelling</h3>
                            <p>
                                Words like "teh" for "the" or "pwned" for
                                "owned" are part of internet culture and may not
                                follow ordinary logic.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMessageSquare />
                    </span>
                    <h2>Examples</h2>
                </div>

                <div className="exampleGrid">
                    {examples.map((item) => (
                        <article className="exampleCard" key={item.plain}>
                            <div className="exampleTop">
                                <span className="label">Plain</span>
                                <strong>{item.plain}</strong>
                            </div>

                            <div className="exampleMiddle">
                                <span className="arrow">→</span>
                                <code>{item.leet}</code>
                            </div>

                            <p>{item.note}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiZap />
                        </span>
                        <h2>Grammar and style patterns</h2>
                    </div>

                    <ul>
                        {grammarNotes.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertTriangle />
                        </span>
                        <h2>Why it can be hard to read</h2>
                    </div>

                    <ul>
                        <li>There is no single universal standard.</li>
                        <li>The same letter can have many substitutions.</li>
                        <li>Different users mix styles inconsistently.</li>
                        <li>Slang and inside jokes are often mixed into it.</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>1337 chart</h2>
                </div>

                <p className="chartIntro">
                    This chart shows common substitutions. It is not complete,
                    and not every variation is equally common in real use.
                    Simpler substitutions are usually more practical in fast
                    typing.
                </p>

                <div className="noteBox">
                    <p>
                        The symbol <strong>|</strong> is a pipe, not a lowercase
                        L. The symbol <strong>`</strong> is a grave accent, not
                        a normal apostrophe.
                    </p>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Letter</th>
                                <th>Common substitutions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {chartRows.map((row) => (
                                <tr key={row.letter}>
                                    <td>{row.letter}</td>
                                    <td>{row.values}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Tips</h2>
                    </div>

                    <ul>
                        {tips.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertTriangle />
                        </span>
                        <h2>Warnings</h2>
                    </div>

                    <ul>
                        {warnings.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBookOpen />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    The easiest way to learn leetspeak is not by memorizing a
                    giant substitution table first. It is by reading examples,
                    recognizing repeated patterns, and slowly building an eye
                    for the shapes and slang.
                </p>

                <p>
                    Also, writing every sentence in ultra-heavy leet is usually
                    more exhausting than impressive. Moderate use is easier to
                    read, easier to type, and more faithful to how internet
                    users actually used it in fast conversation.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    1337 is a playful internet writing style based on symbol
                    substitution, altered spelling, slang, and creative
                    formatting. It is flexible, inconsistent, and heavily shaped
                    by context. Learn the patterns, not just the symbols, and it
                    becomes much easier to read.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default HowToReadAndWriteIn1337;
