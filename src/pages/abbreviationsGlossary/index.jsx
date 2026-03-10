import React from "react";
import {
    FiBookOpen,
    FiClock,
    FiSmartphone,
    FiGlobe,
    FiCpu,
    FiFileText,
    FiAlertCircle,
    FiCheckCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButton from "../../components/shareButton";
import ShareButtons from "../../components/shareButton";

const mobileTerms = [
    { short: "JAR", full: "Java Archive" },
    { short: "JAD", full: "Java Application Descriptor" },
    { short: "GPRS", full: "General Packet Radio Service" },
    { short: "SMS", full: "Short Message Service" },
    { short: "MMS", full: "Multimedia Messaging Service" },
    { short: "PIN", full: "Personal Identification Number" },
    { short: "STD", full: "Subscriber Trunk Dialing" },
    { short: "ISD", full: "International Subscriber Dialing" },
    { short: "PCO", full: "Public Call Office" },
    { short: "SD Card", full: "Secure Digital Card" },
    { short: "MMC", full: "MultiMediaCard" },
    { short: "GSM", full: "Global System for Mobile Communications" },
    { short: "CDMA", full: "Code Division Multiple Access" },
    { short: "SIM", full: "Subscriber Identity Module" },
    { short: "IVR", full: "Interactive Voice Response" },
];

const webTerms = [
    { short: "HTML", full: "HyperText Markup Language" },
    { short: "ASP", full: "Active Server Pages" },
    { short: "PHP", full: "PHP: Hypertext Preprocessor" },
    { short: "WAP", full: "Wireless Application Protocol" },
    { short: "WML", full: "Wireless Markup Language" },
    { short: "HTTP", full: "HyperText Transfer Protocol" },
    { short: "WWW", full: "World Wide Web" },
    { short: "URL", full: "Uniform Resource Locator" },
];

const computerTerms = [
    { short: "RAM", full: "Random Access Memory" },
    { short: "ROM", full: "Read-Only Memory" },
    { short: "Email", full: "Electronic Mail" },
    { short: "USB", full: "Universal Serial Bus" },
    { short: "CRT", full: "Cathode-Ray Tube" },
    { short: "LCD", full: "Liquid Crystal Display" },
    { short: "TFT", full: "Thin-Film Transistor" },
    { short: "HDD", full: "Hard Disk Drive" },
    { short: "PD", full: "Pen Drive" },
    { short: "OS", full: "Operating System" },
    { short: "CD", full: "Compact Disc" },
    { short: "DVD", full: "Digital Versatile Disc" },
    { short: "VCD", full: "Video Compact Disc" },
    { short: "KB", full: "Kilobyte" },
    { short: "MB", full: "Megabyte" },
    { short: "GB", full: "Gigabyte" },
    { short: "TB", full: "Terabyte" },
    { short: "PB", full: "Petabyte" },
    { short: "EB", full: "Exabyte" },
    { short: "ZB", full: "Zettabyte" },
    { short: "YB", full: "Yottabyte" },
];

const formatTerms = [
    { short: "JPEG", full: "Joint Photographic Experts Group" },
    { short: "GIF", full: "Graphics Interchange Format" },
    { short: "TIFF", full: "Tagged Image File Format" },
    { short: "PDF", full: "Portable Document Format" },
    { short: "DOC", full: "Document" },
];

const notes = [
    "Some abbreviations are often written incorrectly in old notes or casual internet posts.",
    "A few full forms have evolved over time, while some terms are backronyms or recursive names.",
    "Where needed, this refactored version uses the commonly accepted modern expansion.",
];

const AbbreviationsGlossary = () => {
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
                        Original topic: October 8, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>
                    List of short forms and full forms of common abbreviations
                </h1>

                <p className="lead">
                    This page is a cleaned-up glossary of common abbreviations
                    related to mobile technology, the web, computers, storage,
                    and document formats. The original blog post was a quick
                    list. This refactored version organizes the terms more
                    clearly and corrects several inaccurate expansions.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>What this page is</h2>
                </div>

                <p>
                    Abbreviations are shortened forms of larger technical terms.
                    In computing and communication, they appear everywhere:
                    storage units, network terms, file formats, display types,
                    messaging systems, and web protocols.
                </p>

                <p>
                    Instead of keeping everything in one chaotic block, this
                    page groups them by category so they are easier to scan,
                    revise, and remember. Much kinder on the brain, and less
                    like opening a junk drawer.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important note</h2>
                    </div>

                    <ul>
                        {notes.map((note) => (
                            <li key={note}>{note}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiBookOpen />
                        </span>
                        <h2>How to use this glossary</h2>
                    </div>

                    <ul>
                        <li>Use it for revision of common technical terms</li>
                        <li>Use it as a quick beginner-friendly reference</li>
                        <li>Pay attention to commonly misspelled full forms</li>
                        <li>
                            Prefer accepted modern expansions when writing notes
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSmartphone />
                    </span>
                    <h2>Mobile and communication terms</h2>
                </div>

                <Styled.TermGrid>
                    {mobileTerms.map((item) => (
                        <div key={item.short} className="termCard">
                            <div className="termShort">{item.short}</div>
                            <div className="termFull">{item.full}</div>
                        </div>
                    ))}
                </Styled.TermGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGlobe />
                    </span>
                    <h2>Web and internet terms</h2>
                </div>

                <Styled.TermGrid>
                    {webTerms.map((item) => (
                        <div key={item.short} className="termCard">
                            <div className="termShort">{item.short}</div>
                            <div className="termFull">{item.full}</div>
                        </div>
                    ))}
                </Styled.TermGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>Computer hardware, storage, and system terms</h2>
                </div>

                <Styled.TermGrid>
                    {computerTerms.map((item) => (
                        <div key={item.short} className="termCard">
                            <div className="termShort">{item.short}</div>
                            <div className="termFull">{item.full}</div>
                        </div>
                    ))}
                </Styled.TermGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiFileText />
                    </span>
                    <h2>Document and media format terms</h2>
                </div>

                <Styled.TermGrid>
                    {formatTerms.map((item) => (
                        <div key={item.short} className="termCard">
                            <div className="termShort">{item.short}</div>
                            <div className="termFull">{item.full}</div>
                        </div>
                    ))}
                </Styled.TermGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Quick clarification on a few corrected entries</h2>
                </div>

                <div className="clarifyList">
                    <div className="clarifyItem">
                        <strong>PHP</strong>
                        <p>
                            A common mistake is writing "Hypertext Processors".
                            The accepted expansion is "PHP: Hypertext
                            Preprocessor".
                        </p>
                    </div>

                    <div className="clarifyItem">
                        <strong>URL</strong>
                        <p>
                            A common mistake is "Uniform Resource Location". The
                            accepted form is "Uniform Resource Locator".
                        </p>
                    </div>

                    <div className="clarifyItem">
                        <strong>TIFF</strong>
                        <p>
                            A common mistake is "Tag Index File Format". The
                            accepted form is "Tagged Image File Format".
                        </p>
                    </div>

                    <div className="clarifyItem">
                        <strong>CD and VCD</strong>
                        <p>
                            "Compaq Disk" is incorrect here. The accepted forms
                            are "Compact Disc" and "Video Compact Disc".
                        </p>
                    </div>

                    <div className="clarifyItem">
                        <strong>Storage units</strong>
                        <p>
                            "Gigabyte", "Terabyte", "Petabyte", and larger units
                            have standard spellings. Old notes often contain
                            typing errors in these names.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Abbreviations make technical communication faster, but only
                    when they are expanded correctly. This refactored glossary
                    keeps the spirit of the original archive post while making
                    the content cleaner, more accurate, and much easier to use.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default AbbreviationsGlossary;
