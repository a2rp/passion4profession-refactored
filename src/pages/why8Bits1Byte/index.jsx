import React from "react";
import {
    FiCpu,
    FiDatabase,
    FiHash,
    FiInfo,
    FiLayers,
    FiClock,
    FiHardDrive,
    FiActivity,
    FiAlertCircle,
    FiCheckCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const binaryUnits = [
    { unit: "1 byte", value: "8 bits" },
    { unit: "1 KiB", value: "1,024 bytes" },
    { unit: "1 MiB", value: "1,024 KiB" },
    { unit: "1 GiB", value: "1,024 MiB" },
    { unit: "1 TiB", value: "1,024 GiB" },
];

const decimalUnits = [
    { unit: "1 kB", value: "1,000 bytes" },
    { unit: "1 MB", value: "1,000 kB" },
    { unit: "1 GB", value: "1,000 MB" },
    { unit: "1 TB", value: "1,000 GB" },
];

const transferUnits = [
    { unit: "1 kbit", value: "1,000 bits" },
    { unit: "1 Mbit", value: "1,000 kbit" },
    { unit: "1 Gbit", value: "1,000 Mbit" },
];

const confusionExamples = [
    {
        title: "Storage",
        text: "Memory and file sizes are often discussed in bytes, kilobytes, megabytes, gigabytes, and so on.",
    },
    {
        title: "Transfer speed",
        text: "Internet speed is usually discussed in bits per second, such as Mbps or Gbps.",
    },
    {
        title: "Common mistake",
        text: "People often confuse MB with Mb. Uppercase B means byte. Lowercase b means bit.",
    },
];

const Why8Bits1Byte = () => {
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
                        Original topic: August 8, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Why is 1 byte equal to 8 bits?</h1>

                <p className="lead">
                    A bit is the smallest common unit of digital information and
                    can store either 0 or 1. A byte is a group of bits.
                    Historically, computers ended up standardizing on 8 bits per
                    byte because 8 bits were enough to represent a useful range
                    of values and characters while still being practical for
                    hardware and software design.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>Short answer</h2>
                </div>

                <p>
                    8 bits became the standard size of a byte because it gives{" "}
                    <strong>2^8 = 256</strong> possible values. That is a very
                    practical range for representing characters, small numbers,
                    flags, and raw data.
                </p>

                <p>
                    Smaller groups like 4 bits give only <strong>16</strong>{" "}
                    values, which is too limited for many common uses. Larger
                    groups are possible, but 8 turned out to be a very balanced
                    and efficient choice.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHash />
                        </span>
                        <h2>What is a bit?</h2>
                    </div>

                    <p>
                        A bit means <strong>binary digit</strong>. It can hold
                        only one of two values:
                    </p>

                    <ul>
                        <li>0</li>
                        <li>1</li>
                    </ul>

                    <p>
                        That tiny on-or-off behavior is the foundation of all
                        digital computing.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiDatabase />
                        </span>
                        <h2>What is a byte?</h2>
                    </div>

                    <p>
                        A byte is a group of bits. In modern computing, one byte
                        almost always means <strong>8 bits</strong>.
                    </p>

                    <ul>
                        <li>1 byte = 8 bits</li>
                        <li>8 bits can represent 256 different patterns</li>
                        <li>
                            Those patterns can be used for numbers, letters,
                            symbols, colors, and other data
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>Why not 4 bits or 16 bits?</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>4 bits</h3>
                        <p>
                            <strong>2^4 = 16</strong> possible values
                        </p>
                        <span>
                            Useful for very small ranges, but too limited for
                            general character encoding and broader data handling
                        </span>
                    </div>

                    <div className="compareCard">
                        <h3>8 bits</h3>
                        <p>
                            <strong>2^8 = 256</strong> possible values
                        </p>
                        <span>
                            Large enough to be useful and still compact enough
                            to handle efficiently
                        </span>
                    </div>
                </div>

                <p>
                    That is one big reason 8 bits became so practical. It was a
                    sweet spot, not too tiny and not unnecessarily bulky.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>A little history</h2>
                </div>

                <p>
                    In older computing history, the word <strong>byte</strong>{" "}
                    did not always mean 8 bits. Different machines used
                    different sizes, including 6-bit, 7-bit, 8-bit, and even
                    9-bit groupings.
                </p>

                <p>
                    Over time, 8-bit bytes became the dominant standard because
                    they were convenient for representing characters and easier
                    to work with in real systems. Once that standard spread,
                    modern software and hardware built around it, and now it is
                    the default meaning almost everywhere.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiActivity />
                    </span>
                    <h2>Character storage made 8 bits very useful</h2>
                </div>

                <p>
                    One of the biggest reasons bits are grouped together is to
                    represent characters. Human languages need enough unique
                    combinations for letters, digits, punctuation, symbols, and
                    control codes.
                </p>

                <p>
                    8 bits provide 256 combinations, which was a practical size
                    for many early character systems. That made 8-bit bytes very
                    useful in the real world.
                </p>

                <div className="exampleBox">
                    <h3>Quick idea</h3>
                    <ul>
                        <li>4 bits = 16 combinations</li>
                        <li>8 bits = 256 combinations</li>
                        <li>
                            256 is much more useful for storing text and data
                        </li>
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHardDrive />
                        </span>
                        <h2>Binary size units</h2>
                    </div>

                    <p>
                        Binary units are based on powers of 2 and are commonly
                        used in memory and low-level computing contexts.
                    </p>

                    <div className="miniTable">
                        {binaryUnits.map((item) => (
                            <div className="miniRow" key={item.unit}>
                                <span>{item.unit}</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiDatabase />
                        </span>
                        <h2>Decimal size units</h2>
                    </div>

                    <p>
                        Decimal units are based on powers of 10 and are often
                        used by storage manufacturers.
                    </p>

                    <div className="miniTable">
                        {decimalUnits.map((item) => (
                            <div className="miniRow" key={item.unit}>
                                <span>{item.unit}</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Why people get confused about KB, MB, Mb, and GB</h2>
                </div>

                <p>
                    One of the oldest and messiest confusions in computing is
                    the difference between <strong>bit</strong> and{" "}
                    <strong>byte</strong>, and between <strong>binary</strong>{" "}
                    and <strong>decimal</strong> measurement.
                </p>

                <Styled.ExampleGrid>
                    {confusionExamples.map((item) => (
                        <article className="exampleCard" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </Styled.ExampleGrid>

                <div className="noteBox">
                    <h3>Important rule</h3>
                    <p>
                        Lowercase <strong>b</strong> means bit. Uppercase{" "}
                        <strong>B</strong> means byte.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>IEC standard and KiB, MiB, GiB</h2>
                </div>

                <p>
                    To reduce confusion, IEC introduced clearer binary prefixes:
                </p>

                <ul>
                    <li>KiB = kibibyte = 1,024 bytes</li>
                    <li>MiB = mebibyte = 1,024 KiB</li>
                    <li>GiB = gibibyte = 1,024 MiB</li>
                </ul>

                <p>
                    In theory this is cleaner. In practice, many people still
                    casually say KB, MB, and GB even when they mean binary
                    values. The universe, as usual, chose chaos.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiActivity />
                        </span>
                        <h2>Data transfer rate</h2>
                    </div>

                    <p>
                        Network speeds are usually measured in decimal bits per
                        second, not bytes.
                    </p>

                    <div className="miniTable">
                        {transferUnits.map((item) => (
                            <div className="miniRow" key={item.unit}>
                                <span>{item.unit}</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>

                    <p>
                        So a 100 Mbps internet connection means 100 megabits per
                        second, not 100 megabytes per second.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Best practical takeaway</h2>
                    </div>

                    <ul>
                        <li>1 byte = 8 bits</li>
                        <li>
                            8 bits became standard because 256 values are useful
                        </li>
                        <li>Uppercase B means byte, lowercase b means bit</li>
                        <li>KiB and MiB are binary-specific terms</li>
                        <li>
                            Internet speeds usually use bits, while file sizes
                            usually use bytes
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    8 bits became 1 byte because that size was practical for
                    representing characters and handling data efficiently.
                    Modern computing standardized around it, and that standard
                    survived. From there came all the common size units and also
                    a mountain of confusion between bits, bytes, binary values,
                    and decimal values.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default Why8Bits1Byte;
