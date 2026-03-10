import React from "react";
import {
    FiDatabase,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiLayers,
    FiHardDrive,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const standardUnits = [
    {
        unit: "1 bit",
        meaning: "1 binary digit",
        note: "Smallest basic unit of digital data",
    },
    {
        unit: "8 bits",
        meaning: "1 byte",
        note: "A byte commonly stores one character in many encodings",
    },
    {
        unit: "1024 bytes",
        meaning: "1 kilobyte",
        note: "Traditionally used in binary-based storage calculations",
    },
    {
        unit: "1024 kilobytes",
        meaning: "1 megabyte",
        note: "Larger collection of digital data",
    },
    {
        unit: "1024 megabytes",
        meaning: "1 gigabyte",
        note: "Common for storage and memory discussions",
    },
    {
        unit: "1024 gigabytes",
        meaning: "1 terabyte",
        note: "Used for hard drives and SSD capacities",
    },
    {
        unit: "1024 terabytes",
        meaning: "1 petabyte",
        note: "Used in very large data storage systems",
    },
    {
        unit: "1024 petabytes",
        meaning: "1 exabyte",
        note: "Massive scale data measurement",
    },
    {
        unit: "1024 exabytes",
        meaning: "1 zettabyte",
        note: "Used for global-scale data discussions",
    },
    {
        unit: "1024 zettabytes",
        meaning: "1 yottabyte",
        note: "Extremely large theoretical or global-scale unit",
    },
];

const decimalVsBinary = [
    {
        left: "Decimal style",
        right: "1 KB = 1000 bytes",
        text: "Often used by storage manufacturers for disk capacity labels.",
    },
    {
        left: "Binary style",
        right: "1 KiB = 1024 bytes",
        text: "Used in technical contexts where powers of 2 matter.",
    },
];

const realWorldExamples = [
    "A few bytes can represent a small piece of text.",
    "Kilobytes are enough for very tiny files such as plain notes.",
    "Megabytes are common for photos, PDFs, or songs.",
    "Gigabytes are common for apps, games, and videos.",
    "Terabytes are common for SSDs, HDDs, and backup drives.",
];

const Coperbyte1024 = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiDatabase />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: January 20, 2013
                    </span>

                    <ShareButtons />
                </div>

                <h1>Bits, bytes, and the 1024-based storage units</h1>

                <p className="lead">
                    This topic started as a short post around "1024 coperbyte",
                    but the actually useful part is understanding how digital
                    storage units grow from bits and bytes into larger units
                    like kilobytes, megabytes, gigabytes, and beyond.
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
                    Computers store data in binary, which means they work with
                    0s and 1s. A single binary value is called a{" "}
                    <strong>bit</strong>. Groups of bits form larger units such
                    as <strong>bytes</strong>, <strong>kilobytes</strong>,{" "}
                    <strong>megabytes</strong>, and so on.
                </p>

                <p>
                    In traditional binary-based measurement, each step is
                    multiplied by <strong>1024</strong>, not 1000. That is why
                    older notes often show values like 1024 bytes = 1 kilobyte.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Standard progression</h2>
                </div>

                <div className="unitGrid">
                    {standardUnits.map((item) => (
                        <article key={item.unit} className="unitCard">
                            <div className="unitTop">
                                <span className="unitLeft">{item.unit}</span>
                                <span className="equals">=</span>
                                <span className="unitRight">
                                    {item.meaning}
                                </span>
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
                            <FiHardDrive />
                        </span>
                        <h2>What is a bit?</h2>
                    </div>

                    <p>
                        A bit is short for <strong>binary digit</strong>. It can
                        hold only one of two values: 0 or 1.
                    </p>

                    <p>
                        Bits are the smallest building blocks of digital data.
                        On their own, they are tiny. But when grouped together,
                        they can represent text, numbers, images, and almost
                        everything else in computing.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>What is a byte?</h2>
                    </div>

                    <p>
                        A byte usually means <strong>8 bits</strong>. This is a
                        very common and practical unit in computing.
                    </p>

                    <p>
                        Many simple character systems use one byte to represent
                        one character, which is why bytes became such a useful
                        everyday storage unit.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Important correction about very large names</h2>
                </div>

                <p>
                    The original post continues far beyond yottabyte using names
                    like <strong>brontobyte</strong>, <strong>coperbyte</strong>
                    , and many others. Those are not part of the standard,
                    practical storage unit list that people normally use in real
                    computing work.
                </p>

                <p>
                    For a clean refactored archive, it is better to keep the
                    focus on the commonly recognized chain:
                    <strong>
                        {" "}
                        bit -&gt; byte -&gt; KB -&gt; MB -&gt; GB -&gt; TB -&gt;
                        PB -&gt; EB -&gt; ZB -&gt; YB
                    </strong>
                    .
                </p>

                <div className="noteBox">
                    <strong>Good archive rule</strong>
                    <p>
                        Keep the educational part. Remove the confusing fantasy
                        ladder unless you want to mention it only as a
                        curiosity.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiDatabase />
                    </span>
                    <h2>1024 vs 1000</h2>
                </div>

                <p>
                    This is where many learners get confused. In traditional
                    binary measurement, each unit grows by 1024 because
                    computers work naturally with powers of 2. But in marketing
                    and disk labeling, manufacturers often use 1000-based
                    values.
                </p>

                <div className="compareGrid">
                    {decimalVsBinary.map((item) => (
                        <div key={item.right} className="compareCard">
                            <h3>{item.left}</h3>
                            <div className="compareValue">{item.right}</div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                <p>
                    That is why a drive sold as "500 GB" may look slightly
                    smaller when the operating system reports available space
                    using a different interpretation.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiHardDrive />
                    </span>
                    <h2>Real-world intuition</h2>
                </div>

                <ul>
                    {realWorldExamples.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    The useful lesson is not the exotic unit names. The useful
                    lesson is understanding how digital storage grows step by
                    step from bits and bytes into larger units.
                </p>

                <p>
                    For most real-world learning, revision, interviews, and
                    basic computer knowledge, you should remember the standard
                    unit flow and the 1024 vs 1000 difference.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    A bit is a binary digit, 8 bits make 1 byte, and larger
                    storage units traditionally grow by 1024 at each step. The
                    standard and most useful chain goes up to yottabyte in
                    normal discussions. Beyond that, the original post becomes
                    more novelty than practical computing reference.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default Coperbyte1024;
