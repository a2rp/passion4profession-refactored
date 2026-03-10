import React, { useState } from "react";
import {
    FiHash,
    FiTerminal,
    FiCode,
    FiAlertCircle,
    FiCheckCircle,
    FiClock,
    FiLayers,
    FiImage,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const controlSymbols = [
    {
        dec: "0",
        hex: "00",
        abbr: "NUL",
        full: "Null",
        meaning:
            "Represents no character or an empty value in some low-level contexts.",
    },
    {
        dec: "7",
        hex: "07",
        abbr: "BEL",
        full: "Bell",
        meaning:
            "Originally used to trigger an alert sound or beep on terminals.",
    },
    {
        dec: "8",
        hex: "08",
        abbr: "BS",
        full: "Backspace",
        meaning: "Moves the cursor one position backward.",
    },
    {
        dec: "9",
        hex: "09",
        abbr: "HT",
        full: "Horizontal Tab",
        meaning:
            "Moves text to the next tab stop. Commonly seen as tab spacing.",
    },
    {
        dec: "10",
        hex: "0A",
        abbr: "LF",
        full: "Line Feed",
        meaning: "Moves the cursor down to the next line.",
    },
    {
        dec: "13",
        hex: "0D",
        abbr: "CR",
        full: "Carriage Return",
        meaning: "Moves the cursor back to the beginning of the current line.",
    },
    {
        dec: "27",
        hex: "1B",
        abbr: "ESC",
        full: "Escape",
        meaning: "Used to begin escape sequences, especially in terminals.",
    },
    {
        dec: "32",
        hex: "20",
        abbr: "SP",
        full: "Space",
        meaning: "Represents a visible blank space between characters.",
    },
    {
        dec: "127",
        hex: "7F",
        abbr: "DEL",
        full: "Delete",
        meaning: "Historically used to delete or ignore a character.",
    },
];

const practicalUses = [
    {
        title: "Text files and line breaks",
        text: "Characters like LF and CR still matter in text files, editors, operating systems, and version control workflows.",
    },
    {
        title: "Tabs and spacing",
        text: "HT or tab is still used for indentation, spacing, and alignment in source code and plain text.",
    },
    {
        title: "Terminal behavior",
        text: "ESC is heavily used in terminal control sequences for cursor movement, colors, and screen control.",
    },
    {
        title: "Protocol and format history",
        text: "Many data formats and communication systems still carry behavior shaped by old ASCII control symbols.",
    },
];

const asciiTable = [
    {
        dec: 0,
        hex: "00",
        oct: "000",
        html: "&#0;",
        char: "",
        desc: "NUL (null)",
    },
    {
        dec: 1,
        hex: "01",
        oct: "001",
        html: "&#1;",
        char: "",
        desc: "SOH (start of heading)",
    },
    {
        dec: 2,
        hex: "02",
        oct: "002",
        html: "&#2;",
        char: "",
        desc: "STX (start of text)",
    },
    {
        dec: 3,
        hex: "03",
        oct: "003",
        html: "&#3;",
        char: "",
        desc: "ETX (end of text)",
    },
    {
        dec: 4,
        hex: "04",
        oct: "004",
        html: "&#4;",
        char: "",
        desc: "EOT (end of transmission)",
    },
    {
        dec: 5,
        hex: "05",
        oct: "005",
        html: "&#5;",
        char: "",
        desc: "ENQ (enquiry)",
    },
    {
        dec: 6,
        hex: "06",
        oct: "006",
        html: "&#6;",
        char: "",
        desc: "ACK (acknowledge)",
    },
    {
        dec: 7,
        hex: "07",
        oct: "007",
        html: "&#7;",
        char: "",
        desc: "BEL (bell)",
    },
    {
        dec: 8,
        hex: "08",
        oct: "010",
        html: "&#8;",
        char: "",
        desc: "BS (backspace)",
    },
    {
        dec: 9,
        hex: "09",
        oct: "011",
        html: "&#9;",
        char: "",
        desc: "HT (horizontal tab)",
    },
    {
        dec: 10,
        hex: "0A",
        oct: "012",
        html: "&#10;",
        char: "",
        desc: "LF (line feed)",
    },
    {
        dec: 11,
        hex: "0B",
        oct: "013",
        html: "&#11;",
        char: "",
        desc: "VT (vertical tab)",
    },
    {
        dec: 12,
        hex: "0C",
        oct: "014",
        html: "&#12;",
        char: "",
        desc: "FF (form feed)",
    },
    {
        dec: 13,
        hex: "0D",
        oct: "015",
        html: "&#13;",
        char: "",
        desc: "CR (carriage return)",
    },
    {
        dec: 14,
        hex: "0E",
        oct: "016",
        html: "&#14;",
        char: "",
        desc: "SO (shift out)",
    },
    {
        dec: 15,
        hex: "0F",
        oct: "017",
        html: "&#15;",
        char: "",
        desc: "SI (shift in)",
    },

    {
        dec: 32,
        hex: "20",
        oct: "040",
        html: "&#32;",
        char: "space",
        desc: "space character",
    },
    {
        dec: 33,
        hex: "21",
        oct: "041",
        html: "&#33;",
        char: "!",
        desc: "exclamation mark",
    },
    {
        dec: 34,
        hex: "22",
        oct: "042",
        html: "&#34;",
        char: '"',
        desc: "quotation mark",
    },
    {
        dec: 35,
        hex: "23",
        oct: "043",
        html: "&#35;",
        char: "#",
        desc: "number sign",
    },
    {
        dec: 36,
        hex: "24",
        oct: "044",
        html: "&#36;",
        char: "$",
        desc: "dollar sign",
    },

    {
        dec: 65,
        hex: "41",
        oct: "101",
        html: "&#65;",
        char: "A",
        desc: "uppercase A",
    },
    {
        dec: 66,
        hex: "42",
        oct: "102",
        html: "&#66;",
        char: "B",
        desc: "uppercase B",
    },
    {
        dec: 67,
        hex: "43",
        oct: "103",
        html: "&#67;",
        char: "C",
        desc: "uppercase C",
    },

    {
        dec: 97,
        hex: "61",
        oct: "141",
        html: "&#97;",
        char: "a",
        desc: "lowercase a",
    },
    {
        dec: 98,
        hex: "62",
        oct: "142",
        html: "&#98;",
        char: "b",
        desc: "lowercase b",
    },
    {
        dec: 99,
        hex: "63",
        oct: "143",
        html: "&#99;",
        char: "c",
        desc: "lowercase c",
    },

    {
        dec: 127,
        hex: "7F",
        oct: "177",
        html: "&#127;",
        char: "",
        desc: "DEL (delete)",
    },
];

const AsciiControlSymbols = () => {
    const [chartLoaded, setChartLoaded] = useState(false);

    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiLayers />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: September 27, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>ASCII Control Symbols</h1>

                <p className="lead">
                    ASCII control symbols are special non-printable characters
                    from the ASCII character set. They were created not to show
                    visible letters or numbers, but to control things like text
                    flow, cursor movement, spacing, alerts, and terminal
                    behavior.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    ASCII stands for "American Standard Code for Information
                    Interchange". It assigns numbers to characters.
                </p>

                <p>
                    Some ASCII values represent printable characters like A, B,
                    1, ?, and %. But some values were reserved for control
                    behavior instead of visible text. Those are called control
                    characters or control symbols.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHash />
                        </span>
                        <h2>What makes them special?</h2>
                    </div>

                    <ul>
                        <li>They are usually not shown as visible text</li>
                        <li>
                            They control behavior instead of displaying letters
                        </li>
                        <li>They were important in terminals and printers</li>
                        <li>Some are still actively used in modern systems</li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Why they still matter</h2>
                    </div>

                    <p>
                        Even though many control symbols came from older
                        hardware and terminal systems, they still appear in text
                        editors, operating systems, programming tools, terminal
                        emulators, and communication protocols.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>ASCII reference table</h2>
                </div>

                <p>
                    The ASCII table below lists character codes from 0 to 127.
                    It includes decimal, hexadecimal, octal values, HTML entity
                    representation, printable characters, and a description of
                    each symbol.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Dec</th>
                                <th>Hex</th>
                                <th>Oct</th>
                                <th>HTML</th>
                                <th>Char</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            {asciiTable.map((row) => (
                                <tr key={row.dec}>
                                    <td>{row.dec}</td>
                                    <td>{row.hex}</td>
                                    <td>{row.oct}</td>
                                    <td>{row.html}</td>
                                    <td className="char">{row.char}</td>
                                    <td>{row.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Common ASCII control symbols</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Decimal</th>
                                <th>Hex</th>
                                <th>Short name</th>
                                <th>Full name</th>
                                <th>Meaning</th>
                            </tr>
                        </thead>

                        <tbody>
                            {controlSymbols.map((item) => (
                                <tr key={`${item.dec}-${item.abbr}`}>
                                    <td>{item.dec}</td>
                                    <td>{item.hex}</td>
                                    <td>{item.abbr}</td>
                                    <td>{item.full}</td>
                                    <td>{item.meaning}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>Important symbols explained</h2>
                </div>

                <div className="explainGrid">
                    <article className="explainCard">
                        <h3>LF - Line Feed</h3>
                        <p>
                            Moves to the next line. In many Unix-like systems,
                            this is the main newline character.
                        </p>
                    </article>

                    <article className="explainCard">
                        <h3>CR - Carriage Return</h3>
                        <p>
                            Returns the cursor to the start of the current line.
                            Older systems often combined CR and LF.
                        </p>
                    </article>

                    <article className="explainCard">
                        <h3>HT - Horizontal Tab</h3>
                        <p>
                            Used for tab spacing. You still see it in code
                            indentation and plain text formatting.
                        </p>
                    </article>

                    <article className="explainCard">
                        <h3>ESC - Escape</h3>
                        <p>
                            Starts escape sequences, especially in terminal
                            environments.
                        </p>
                    </article>

                    <article className="explainCard">
                        <h3>BEL - Bell</h3>
                        <p>
                            Historically caused a beep or alert on terminals. A
                            wonderfully dramatic little relic.
                        </p>
                    </article>

                    <article className="explainCard">
                        <h3>BS - Backspace</h3>
                        <p>
                            Moves the cursor back by one position. Useful in
                            terminal input and text editing.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Why CR and LF are still famous</h2>
                </div>

                <p>
                    One of the most common real-world places where ASCII control
                    symbols still matter is line endings.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>LF</h3>
                        <p>Common in Unix and Linux style line endings.</p>
                    </div>

                    <div className="compareCard">
                        <h3>CR + LF</h3>
                        <p>Common in Windows style line endings.</p>
                    </div>
                </div>

                <p>
                    This is why text files sometimes behave strangely when moved
                    between systems. Same text, different newline rules, classic
                    computing mischief.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>Where you still see them today</h2>
                </div>

                <div className="useGrid">
                    {practicalUses.map((item) => (
                        <article key={item.title} className="useCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Printable vs non-printable</h2>
                </div>

                <p>ASCII can be thought of in two broad groups:</p>

                <ul>
                    <li>
                        <strong>Printable characters</strong> - letters,
                        numbers, punctuation, and visible symbols
                    </li>
                    <li>
                        <strong>Control characters</strong> - invisible symbols
                        that affect behavior or formatting
                    </li>
                </ul>

                <p>
                    So control symbols are part of text systems, but not part of
                    visible text in the usual way.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    ASCII control symbols are non-printable characters used to
                    control text layout, spacing, cursor movement, terminal
                    behavior, and communication rules. Many came from older
                    systems, but several are still important today, especially
                    tab, line feed, carriage return, escape, and backspace.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default AsciiControlSymbols;
