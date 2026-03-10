import React, { useMemo, useState } from "react";
import {
    FiHash,
    FiSearch,
    FiCopy,
    FiCheck,
    FiArchive,
    FiClock,
    FiInfo,
    FiFilter,
} from "react-icons/fi";
import { Styled } from "./styled";
import { FaKeyboard } from "react-icons/fa";
import ShareButtons from "../../components/shareButton";

const specialAltCodes = [
    { code: 1, symbol: "☺", label: "White smiling face", group: "Symbols" },
    { code: 2, symbol: "☻", label: "Black smiling face", group: "Symbols" },
    { code: 3, symbol: "♥", label: "Heart suit", group: "Symbols" },
    { code: 4, symbol: "♦", label: "Diamond suit", group: "Symbols" },
    { code: 5, symbol: "♣", label: "Club suit", group: "Symbols" },
    { code: 6, symbol: "♠", label: "Spade suit", group: "Symbols" },
    { code: 7, symbol: "•", label: "Bullet", group: "Symbols" },
    { code: 8, symbol: "◘", label: "Inverse bullet", group: "Symbols" },
    { code: 9, symbol: "○", label: "White circle", group: "Symbols" },
    { code: 10, symbol: "◙", label: "Inverse white circle", group: "Symbols" },
    { code: 11, symbol: "♂", label: "Male sign", group: "Symbols" },
    { code: 12, symbol: "♀", label: "Female sign", group: "Symbols" },
    { code: 13, symbol: "♪", label: "Eighth note", group: "Symbols" },
    { code: 14, symbol: "♫", label: "Beamed eighth notes", group: "Symbols" },
    { code: 15, symbol: "☼", label: "White sun", group: "Symbols" },
    {
        code: 16,
        symbol: "►",
        label: "Black right-pointing pointer",
        group: "Arrows",
    },
    {
        code: 17,
        symbol: "◄",
        label: "Black left-pointing pointer",
        group: "Arrows",
    },
    { code: 18, symbol: "↕", label: "Up-down arrow", group: "Arrows" },
    {
        code: 19,
        symbol: "‼",
        label: "Double exclamation mark",
        group: "Punctuation",
    },
    { code: 20, symbol: "¶", label: "Pilcrow sign", group: "Punctuation" },
    { code: 21, symbol: "§", label: "Section sign", group: "Punctuation" },
    { code: 22, symbol: "▬", label: "Black rectangle", group: "Box Drawing" },
    {
        code: 23,
        symbol: "↨",
        label: "Up-down arrow with base",
        group: "Arrows",
    },
    { code: 24, symbol: "↑", label: "Up arrow", group: "Arrows" },
    { code: 25, symbol: "↓", label: "Down arrow", group: "Arrows" },
    { code: 26, symbol: "→", label: "Right arrow", group: "Arrows" },
    { code: 27, symbol: "←", label: "Left arrow", group: "Arrows" },
    { code: 28, symbol: "∟", label: "Right angle", group: "Math" },
    { code: 29, symbol: "↔", label: "Left-right arrow", group: "Arrows" },
    {
        code: 30,
        symbol: "▲",
        label: "Black up-pointing triangle",
        group: "Shapes",
    },
    {
        code: 31,
        symbol: "▼",
        label: "Black down-pointing triangle",
        group: "Shapes",
    },
    { code: 32, symbol: " ", label: "Space", group: "ASCII" },
    { code: 127, symbol: "⌂", label: "House", group: "Shapes" },
    { code: 255, symbol: " ", label: "Space", group: "ASCII" },
];

const extendedAltCodes = [
    {
        code: 128,
        symbol: "Ç",
        label: "Capital C with cedilla",
        group: "Extended Latin",
    },
    {
        code: 129,
        symbol: "ü",
        label: "Small u with diaeresis",
        group: "Extended Latin",
    },
    {
        code: 130,
        symbol: "é",
        label: "Small e with acute",
        group: "Extended Latin",
    },
    {
        code: 131,
        symbol: "â",
        label: "Small a with circumflex",
        group: "Extended Latin",
    },
    {
        code: 132,
        symbol: "ä",
        label: "Small a with diaeresis",
        group: "Extended Latin",
    },
    {
        code: 133,
        symbol: "à",
        label: "Small a with grave",
        group: "Extended Latin",
    },
    {
        code: 134,
        symbol: "å",
        label: "Small a with ring",
        group: "Extended Latin",
    },
    {
        code: 135,
        symbol: "ç",
        label: "Small c with cedilla",
        group: "Extended Latin",
    },
    {
        code: 136,
        symbol: "ê",
        label: "Small e with circumflex",
        group: "Extended Latin",
    },
    {
        code: 137,
        symbol: "ë",
        label: "Small e with diaeresis",
        group: "Extended Latin",
    },
    {
        code: 138,
        symbol: "è",
        label: "Small e with grave",
        group: "Extended Latin",
    },
    {
        code: 139,
        symbol: "ï",
        label: "Small i with diaeresis",
        group: "Extended Latin",
    },
    {
        code: 140,
        symbol: "î",
        label: "Small i with circumflex",
        group: "Extended Latin",
    },
    {
        code: 141,
        symbol: "ì",
        label: "Small i with grave",
        group: "Extended Latin",
    },
    {
        code: 142,
        symbol: "Ä",
        label: "Capital A with diaeresis",
        group: "Extended Latin",
    },
    {
        code: 143,
        symbol: "Å",
        label: "Capital A with ring",
        group: "Extended Latin",
    },
    {
        code: 144,
        symbol: "É",
        label: "Capital E with acute",
        group: "Extended Latin",
    },
    {
        code: 145,
        symbol: "æ",
        label: "Small ae ligature",
        group: "Extended Latin",
    },
    {
        code: 146,
        symbol: "Æ",
        label: "Capital AE ligature",
        group: "Extended Latin",
    },
    {
        code: 147,
        symbol: "ô",
        label: "Small o with circumflex",
        group: "Extended Latin",
    },
    {
        code: 148,
        symbol: "ö",
        label: "Small o with diaeresis",
        group: "Extended Latin",
    },
    {
        code: 149,
        symbol: "ò",
        label: "Small o with grave",
        group: "Extended Latin",
    },
    {
        code: 150,
        symbol: "û",
        label: "Small u with circumflex",
        group: "Extended Latin",
    },
    {
        code: 151,
        symbol: "ù",
        label: "Small u with grave",
        group: "Extended Latin",
    },
    {
        code: 152,
        symbol: "ÿ",
        label: "Small y with diaeresis",
        group: "Extended Latin",
    },
    {
        code: 153,
        symbol: "Ö",
        label: "Capital O with diaeresis",
        group: "Extended Latin",
    },
    {
        code: 154,
        symbol: "Ü",
        label: "Capital U with diaeresis",
        group: "Extended Latin",
    },
    { code: 155, symbol: "¢", label: "Cent sign", group: "Currency" },
    { code: 156, symbol: "£", label: "Pound sign", group: "Currency" },
    { code: 157, symbol: "¥", label: "Yen sign", group: "Currency" },
    { code: 158, symbol: "₧", label: "Peseta sign", group: "Currency" },
    { code: 159, symbol: "ƒ", label: "Function sign / florin", group: "Math" },
    {
        code: 160,
        symbol: "á",
        label: "Small a with acute",
        group: "Extended Latin",
    },
    {
        code: 161,
        symbol: "í",
        label: "Small i with acute",
        group: "Extended Latin",
    },
    {
        code: 162,
        symbol: "ó",
        label: "Small o with acute",
        group: "Extended Latin",
    },
    {
        code: 163,
        symbol: "ú",
        label: "Small u with acute",
        group: "Extended Latin",
    },
    {
        code: 164,
        symbol: "ñ",
        label: "Small n with tilde",
        group: "Extended Latin",
    },
    {
        code: 165,
        symbol: "Ñ",
        label: "Capital N with tilde",
        group: "Extended Latin",
    },
    {
        code: 166,
        symbol: "ª",
        label: "Feminine ordinal indicator",
        group: "Punctuation",
    },
    {
        code: 167,
        symbol: "º",
        label: "Masculine ordinal indicator",
        group: "Punctuation",
    },
    {
        code: 168,
        symbol: "¿",
        label: "Inverted question mark",
        group: "Punctuation",
    },
    { code: 169, symbol: "⌐", label: "Reversed not sign", group: "Math" },
    { code: 170, symbol: "¬", label: "Not sign", group: "Math" },
    { code: 171, symbol: "½", label: "One half", group: "Fractions" },
    { code: 172, symbol: "¼", label: "One quarter", group: "Fractions" },
    {
        code: 173,
        symbol: "¡",
        label: "Inverted exclamation mark",
        group: "Punctuation",
    },
    { code: 174, symbol: "«", label: "Left angle quote", group: "Punctuation" },
    {
        code: 175,
        symbol: "»",
        label: "Right angle quote",
        group: "Punctuation",
    },
    { code: 176, symbol: "░", label: "Light shade", group: "Box Drawing" },
    { code: 177, symbol: "▒", label: "Medium shade", group: "Box Drawing" },
    { code: 178, symbol: "▓", label: "Dark shade", group: "Box Drawing" },
    {
        code: 179,
        symbol: "│",
        label: "Box drawings light vertical",
        group: "Box Drawing",
    },
    {
        code: 180,
        symbol: "┤",
        label: "Box drawings vertical left",
        group: "Box Drawing",
    },
    {
        code: 181,
        symbol: "╡",
        label: "Box drawings double vertical left",
        group: "Box Drawing",
    },
    {
        code: 182,
        symbol: "╢",
        label: "Box drawings vertical double left",
        group: "Box Drawing",
    },
    {
        code: 183,
        symbol: "╖",
        label: "Box drawings down double left",
        group: "Box Drawing",
    },
    {
        code: 184,
        symbol: "╕",
        label: "Box drawings down left",
        group: "Box Drawing",
    },
    {
        code: 185,
        symbol: "╣",
        label: "Box drawings double vertical left",
        group: "Box Drawing",
    },
    {
        code: 186,
        symbol: "║",
        label: "Box drawings double vertical",
        group: "Box Drawing",
    },
    {
        code: 187,
        symbol: "╗",
        label: "Box drawings double down left",
        group: "Box Drawing",
    },
    {
        code: 188,
        symbol: "╝",
        label: "Box drawings double up left",
        group: "Box Drawing",
    },
    {
        code: 189,
        symbol: "╜",
        label: "Box drawings up double left",
        group: "Box Drawing",
    },
    {
        code: 190,
        symbol: "╛",
        label: "Box drawings up left",
        group: "Box Drawing",
    },
    {
        code: 191,
        symbol: "┐",
        label: "Box drawings down left",
        group: "Box Drawing",
    },
    {
        code: 192,
        symbol: "└",
        label: "Box drawings up right",
        group: "Box Drawing",
    },
    {
        code: 193,
        symbol: "┴",
        label: "Box drawings up horizontal",
        group: "Box Drawing",
    },
    {
        code: 194,
        symbol: "┬",
        label: "Box drawings down horizontal",
        group: "Box Drawing",
    },
    {
        code: 195,
        symbol: "├",
        label: "Box drawings vertical right",
        group: "Box Drawing",
    },
    {
        code: 196,
        symbol: "─",
        label: "Box drawings light horizontal",
        group: "Box Drawing",
    },
    {
        code: 197,
        symbol: "┼",
        label: "Box drawings vertical horizontal",
        group: "Box Drawing",
    },
    {
        code: 198,
        symbol: "╞",
        label: "Box drawings vertical double right",
        group: "Box Drawing",
    },
    {
        code: 199,
        symbol: "╟",
        label: "Box drawings double vertical right",
        group: "Box Drawing",
    },
    {
        code: 200,
        symbol: "╚",
        label: "Box drawings double up right",
        group: "Box Drawing",
    },
    {
        code: 201,
        symbol: "╔",
        label: "Box drawings double down right",
        group: "Box Drawing",
    },
    {
        code: 202,
        symbol: "╩",
        label: "Box drawings double up horizontal",
        group: "Box Drawing",
    },
    {
        code: 203,
        symbol: "╦",
        label: "Box drawings double down horizontal",
        group: "Box Drawing",
    },
    {
        code: 204,
        symbol: "╠",
        label: "Box drawings double vertical right",
        group: "Box Drawing",
    },
    {
        code: 205,
        symbol: "═",
        label: "Box drawings double horizontal",
        group: "Box Drawing",
    },
    {
        code: 206,
        symbol: "╬",
        label: "Box drawings double vertical horizontal",
        group: "Box Drawing",
    },
    {
        code: 207,
        symbol: "╧",
        label: "Box drawings up single horizontal double",
        group: "Box Drawing",
    },
    {
        code: 208,
        symbol: "╨",
        label: "Box drawings up double horizontal single",
        group: "Box Drawing",
    },
    {
        code: 209,
        symbol: "╤",
        label: "Box drawings down single horizontal double",
        group: "Box Drawing",
    },
    {
        code: 210,
        symbol: "╥",
        label: "Box drawings down double horizontal single",
        group: "Box Drawing",
    },
    {
        code: 211,
        symbol: "╙",
        label: "Box drawings up single right double",
        group: "Box Drawing",
    },
    {
        code: 212,
        symbol: "╘",
        label: "Box drawings up double right single",
        group: "Box Drawing",
    },
    {
        code: 213,
        symbol: "╒",
        label: "Box drawings down single right double",
        group: "Box Drawing",
    },
    {
        code: 214,
        symbol: "╓",
        label: "Box drawings down double right single",
        group: "Box Drawing",
    },
    {
        code: 215,
        symbol: "╫",
        label: "Box drawings vertical single horizontal double",
        group: "Box Drawing",
    },
    {
        code: 216,
        symbol: "╪",
        label: "Box drawings vertical double horizontal single",
        group: "Box Drawing",
    },
    {
        code: 217,
        symbol: "┘",
        label: "Box drawings up left",
        group: "Box Drawing",
    },
    {
        code: 218,
        symbol: "┌",
        label: "Box drawings down right",
        group: "Box Drawing",
    },
    { code: 219, symbol: "█", label: "Full block", group: "Box Drawing" },
    { code: 220, symbol: "▄", label: "Lower half block", group: "Box Drawing" },
    { code: 221, symbol: "▌", label: "Left half block", group: "Box Drawing" },
    { code: 222, symbol: "▐", label: "Right half block", group: "Box Drawing" },
    { code: 223, symbol: "▀", label: "Upper half block", group: "Box Drawing" },
    {
        code: 224,
        symbol: "α",
        label: "Greek small alpha",
        group: "Greek & Math",
    },
    { code: 225, symbol: "ß", label: "Sharp s", group: "Extended Latin" },
    {
        code: 226,
        symbol: "Γ",
        label: "Greek capital gamma",
        group: "Greek & Math",
    },
    { code: 227, symbol: "π", label: "Greek small pi", group: "Greek & Math" },
    {
        code: 228,
        symbol: "Σ",
        label: "Greek capital sigma",
        group: "Greek & Math",
    },
    {
        code: 229,
        symbol: "σ",
        label: "Greek small sigma",
        group: "Greek & Math",
    },
    { code: 230, symbol: "µ", label: "Micro sign", group: "Greek & Math" },
    { code: 231, symbol: "τ", label: "Greek small tau", group: "Greek & Math" },
    {
        code: 232,
        symbol: "Φ",
        label: "Greek capital phi",
        group: "Greek & Math",
    },
    {
        code: 233,
        symbol: "Θ",
        label: "Greek capital theta",
        group: "Greek & Math",
    },
    {
        code: 234,
        symbol: "Ω",
        label: "Greek capital omega",
        group: "Greek & Math",
    },
    {
        code: 235,
        symbol: "δ",
        label: "Greek small delta",
        group: "Greek & Math",
    },
    { code: 236, symbol: "∞", label: "Infinity", group: "Greek & Math" },
    { code: 237, symbol: "φ", label: "Greek small phi", group: "Greek & Math" },
    {
        code: 238,
        symbol: "ε",
        label: "Greek small epsilon",
        group: "Greek & Math",
    },
    { code: 239, symbol: "∩", label: "Intersection", group: "Greek & Math" },
    { code: 240, symbol: "≡", label: "Identical to", group: "Greek & Math" },
    { code: 241, symbol: "±", label: "Plus-minus sign", group: "Greek & Math" },
    {
        code: 242,
        symbol: "≥",
        label: "Greater-than or equal to",
        group: "Greek & Math",
    },
    {
        code: 243,
        symbol: "≤",
        label: "Less-than or equal to",
        group: "Greek & Math",
    },
    {
        code: 244,
        symbol: "⌠",
        label: "Top half integral",
        group: "Greek & Math",
    },
    {
        code: 245,
        symbol: "⌡",
        label: "Bottom half integral",
        group: "Greek & Math",
    },
    { code: 246, symbol: "÷", label: "Division sign", group: "Greek & Math" },
    {
        code: 247,
        symbol: "≈",
        label: "Approximately equal",
        group: "Greek & Math",
    },
    { code: 248, symbol: "°", label: "Degree sign", group: "Greek & Math" },
    {
        code: 249,
        symbol: "∙",
        label: "Middle dot operator",
        group: "Greek & Math",
    },
    { code: 250, symbol: "·", label: "Middle dot", group: "Punctuation" },
    { code: 251, symbol: "√", label: "Square root", group: "Greek & Math" },
    { code: 252, symbol: "ⁿ", label: "Superscript n", group: "Greek & Math" },
    { code: 253, symbol: "²", label: "Superscript two", group: "Greek & Math" },
    { code: 254, symbol: "■", label: "Black square", group: "Shapes" },
];

const asciiAltCodes = Array.from({ length: 95 }, (_, index) => {
    const code = index + 33;
    return {
        code,
        symbol: String.fromCharCode(code),
        label: `ASCII character ${String.fromCharCode(code)}`,
        group: "ASCII",
    };
});

const rawAltCodes = [
    ...specialAltCodes.filter((item) => item.code < 33),
    ...asciiAltCodes,
    ...specialAltCodes.filter((item) => item.code === 127 || item.code === 255),
    ...extendedAltCodes,
];

const allAltCodes = Array.from(
    new Map(rawAltCodes.map((item) => [item.code, item])).values(),
).sort((a, b) => a.code - b.code);

const groups = [
    "All",
    "ASCII",
    "Symbols",
    "Arrows",
    "Punctuation",
    "Currency",
    "Fractions",
    "Box Drawing",
    "Shapes",
    "Extended Latin",
    "Greek & Math",
];

const KeyboardAltCodes255 = () => {
    const [search, setSearch] = useState("");
    const [activeGroup, setActiveGroup] = useState("All");
    const [copiedCode, setCopiedCode] = useState(null);

    const filteredCodes = useMemo(() => {
        const query = search.trim().toLowerCase();

        return allAltCodes.filter((item) => {
            const matchesGroup =
                activeGroup === "All" || item.group === activeGroup;

            const matchesSearch =
                !query ||
                item.code.toString().includes(query) ||
                item.symbol.toLowerCase().includes(query) ||
                item.label.toLowerCase().includes(query);

            return matchesGroup && matchesSearch;
        });
    }, [search, activeGroup]);

    const handleCopy = async (item) => {
        try {
            await navigator.clipboard.writeText(item.symbol);
            setCopiedCode(item.code);

            window.setTimeout(() => {
                setCopiedCode((prev) => (prev === item.code ? null : prev));
            }, 1400);
        } catch (error) {
            console.error("Copy failed:", error);
        }
    };

    const handleReset = () => {
        setSearch("");
        setActiveGroup("All");
    };

    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiArchive />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 14, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>255 Keyboard Alt Codes</h1>

                <p className="lead">
                    This page turns the old raw list into a searchable, grouped,
                    copy-friendly reference. These Alt codes are commonly
                    associated with classic Windows numeric keypad entry and
                    older code page behavior, so actual results can vary by
                    operating system, keyboard layout, app, and font.
                </p>

                <div className="metaGrid">
                    <div className="metaCard">
                        <span className="metaIcon">
                            <FaKeyboard />
                        </span>
                        <div>
                            <strong>How to use</strong>
                            <span>
                                Hold Alt and type the code on the numeric
                                keypad.
                            </span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiHash />
                        </span>
                        <div>
                            <strong>{allAltCodes.length}</strong>
                            <span>Entries in this refactored reference</span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.InfoCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>What this page is</h2>
                </div>

                <p>
                    The original blog post was a long Alt-code dump. This
                    version keeps the spirit of that post, but presents the data
                    in a more usable layout with search, filters, code grouping,
                    and one-click copy buttons.
                </p>

                <p>
                    The important little gremlin in the machine is this:
                    Alt-code behavior is not perfectly universal. Some entries
                    follow classic DOS and Windows character mappings, while
                    modern apps may handle them differently.
                </p>
            </Styled.InfoCard>

            <Styled.ControlCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiFilter />
                    </span>
                    <h2>Explore Alt codes</h2>
                </div>

                <div className="searchRow">
                    <div className="searchBox">
                        <FiSearch className="searchIcon" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by code, symbol, or meaning..."
                            aria-label="Search Alt codes"
                        />
                    </div>

                    <button
                        type="button"
                        className="resetBtn"
                        onClick={handleReset}
                    >
                        Reset filters
                    </button>
                </div>

                <div className="chipRow">
                    {groups.map((group) => (
                        <button
                            key={group}
                            type="button"
                            className={`chip ${
                                activeGroup === group ? "active" : ""
                            }`}
                            onClick={() => setActiveGroup(group)}
                        >
                            {group}
                        </button>
                    ))}
                </div>
            </Styled.ControlCard>

            <Styled.TableCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FaKeyboard />
                    </span>
                    <h2>Alt code reference</h2>
                </div>

                {filteredCodes.length ? (
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Alt code</th>
                                    <th>Symbol</th>
                                    <th>Meaning</th>
                                    <th>Group</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredCodes.map((item) => (
                                    <tr key={item.code}>
                                        <td className="codeCell">
                                            {`Alt + ${item.code}`}
                                        </td>

                                        <td className="symbolCell">
                                            {item.symbol === " " ? (
                                                <span className="spaceTag">
                                                    Space
                                                </span>
                                            ) : (
                                                <span className="symbolBox">
                                                    {item.symbol}
                                                </span>
                                            )}
                                        </td>

                                        <td>{item.label}</td>

                                        <td>
                                            <span className="groupTag">
                                                {item.group}
                                            </span>
                                        </td>

                                        <td>
                                            <button
                                                type="button"
                                                className="copyBtn"
                                                onClick={() => handleCopy(item)}
                                                aria-label={`Copy symbol for Alt + ${item.code}`}
                                                title={`Copy symbol for Alt + ${item.code}`}
                                            >
                                                {copiedCode === item.code ? (
                                                    <>
                                                        <FiCheck />
                                                        Copied
                                                    </>
                                                ) : (
                                                    <>
                                                        <FiCopy />
                                                        Copy
                                                    </>
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="emptyState">
                        No Alt codes match the current search or group filter.
                    </div>
                )}
            </Styled.TableCard>

            <Styled.FooterNote>
                <h2>Quick notes</h2>

                <ul>
                    <li>
                        This list is best treated as a classic keyboard Alt-code
                        reference, not a guaranteed modern Unicode standard for
                        every environment.
                    </li>
                    <li>
                        On many systems, the numeric keypad matters. Number keys
                        on the top row often do not behave the same way.
                    </li>
                    <li>
                        Fonts and apps can also change what you actually see.
                    </li>
                </ul>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default KeyboardAltCodes255;
