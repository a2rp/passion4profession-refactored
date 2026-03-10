import React from "react";
import {
    FiHardDrive,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiCpu,
    FiLayers,
    FiBox,
    FiActivity,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const comparisonRows = [
    {
        label: "Full form",
        pata: "Parallel ATA",
        sata: "Serial ATA",
    },
    {
        label: "Data transfer method",
        pata: "Parallel communication",
        sata: "Serial communication",
    },
    {
        label: "Cable style",
        pata: "Wide ribbon cable",
        sata: "Thin narrow cable",
    },
    {
        label: "Speed",
        pata: "Older and slower",
        sata: "Newer and faster",
    },
    {
        label: "Airflow inside cabinet",
        pata: "Ribbon cables block more airflow",
        sata: "Smaller cables improve airflow",
    },
    {
        label: "Modern relevance",
        pata: "Mostly outdated",
        sata: "Common standard for HDDs and SSDs",
    },
];

const hddFactors = [
    "Spindle speed - common HDD speed is often 5400 RPM or 7200 RPM",
    "Seek time - how quickly the head reaches data",
    "Cache or buffer size - temporary fast memory inside the drive",
    "Interface - SATA generation and controller support",
    "Drive technology - HDD vs SSD makes a massive real-world difference",
];

const SataAtaPataHdd = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiHardDrive />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: January 16, 2013
                    </span>

                    <ShareButtons />
                </div>

                <h1>
                    What are SATA, ATA, PATA, and HDD? What is the difference,
                    and which is better?
                </h1>

                <p className="lead">
                    These terms often get mixed together, but they do not all
                    mean the same thing. <strong>ATA</strong> is a storage
                    interface family, <strong>PATA</strong> and{" "}
                    <strong>SATA</strong> are two versions of that interface
                    idea, and <strong>HDD</strong> means hard disk drive, which
                    is the storage device itself. Once you separate device from
                    interface, the fog clears pretty fast.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple meaning of each term</h2>
                </div>

                <div className="definitionGrid">
                    <article className="definitionCard">
                        <h3>HDD</h3>
                        <p>
                            HDD stands for <strong>Hard Disk Drive</strong>. It
                            is the storage device that keeps your files, system,
                            software, videos, and other data.
                        </p>
                    </article>

                    <article className="definitionCard">
                        <h3>ATA</h3>
                        <p>
                            ATA stands for{" "}
                            <strong>Advanced Technology Attachment</strong>. It
                            refers to a storage interface standard family used
                            to connect drives.
                        </p>
                    </article>

                    <article className="definitionCard">
                        <h3>PATA</h3>
                        <p>
                            PATA stands for <strong>Parallel ATA</strong>. It is
                            the older parallel version of ATA and is associated
                            with broad ribbon cables.
                        </p>
                    </article>

                    <article className="definitionCard">
                        <h3>SATA</h3>
                        <p>
                            SATA stands for <strong>Serial ATA</strong>. It is
                            the newer serial version, with thinner cables and
                            better speed.
                        </p>
                    </article>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>Where IDE fits in</h2>
                    </div>

                    <p>
                        In older PC discussions, people often used{" "}
                        <strong>IDE</strong> very loosely. In common usage, IDE
                        was often used to describe older ATA hard drive
                        connections. Later, once SATA became popular, the older
                        version started being called <strong>PATA</strong> more
                        clearly so it would not be confused with SATA.
                    </p>

                    <p>
                        So in casual conversation, people may treat IDE and old
                        ATA drives as the same zone of hardware history, but
                        when writing clearly, <strong>PATA vs SATA</strong> is
                        the cleaner comparison.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important clarity</h2>
                    </div>

                    <ul>
                        <li>HDD is the storage device</li>
                        <li>PATA and SATA are connection/interface types</li>
                        <li>
                            A hard drive can be described by both its device
                            type and its interface
                        </li>
                        <li>
                            Example: a "SATA HDD" means a hard disk drive using
                            a SATA interface
                        </li>
                    </ul>

                    <p>
                        This is why the phrase "SATA HDD" makes sense, but SATA
                        itself is not the drive. It is the connection standard.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>PATA vs SATA</h2>
                </div>

                <p>
                    PATA is older, wider, bulkier, and slower. SATA is newer,
                    cleaner, faster, and much more convenient in modern
                    machines. That is why SATA replaced PATA in mainstream
                    systems.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Point</th>
                                <th>PATA</th>
                                <th>SATA</th>
                            </tr>
                        </thead>

                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>{row.pata}</td>
                                    <td>{row.sata}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Which is better?</h2>
                </div>

                <p>
                    Between PATA and SATA, <strong>SATA is better</strong> for
                    almost every normal modern use case. It offers better data
                    transfer rates, cleaner cable management, simpler airflow
                    inside the cabinet, and stronger long-term compatibility
                    with newer motherboards.
                </p>

                <div className="winnerCard">
                    <strong>Quick answer:</strong>
                    <span>
                        SATA is the better choice over PATA in modern systems.
                    </span>
                </div>

                <p>
                    But there is one more twist: today, even SATA HDDs are no
                    longer the fastest storage option overall, because SSDs have
                    changed the game completely.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiActivity />
                        </span>
                        <h2>What affects HDD performance?</h2>
                    </div>

                    <ul>
                        {hddFactors.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <p>
                        Older advice focused heavily on spindle speed and buffer
                        size, which still matter for HDDs, but in modern
                        practical computing the jump from HDD to SSD matters far
                        more than small HDD spec differences.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiBox />
                        </span>
                        <h2>About cache or buffer</h2>
                    </div>

                    <p>
                        A hard drive buffer, also called cache, is a small
                        amount of fast memory inside the drive used to speed up
                        certain read and write operations.
                    </p>

                    <ul>
                        <li>Bigger cache can help in some workloads</li>
                        <li>
                            It does not magically make an HDD equal to an SSD
                        </li>
                        <li>Cache is only one factor, not the whole story</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Things to check before buying a SATA drive</h2>
                </div>

                <ul>
                    <li>
                        Make sure your motherboard supports SATA ports or the
                        required controller
                    </li>
                    <li>
                        Make sure the power supply has proper SATA power support
                        or a safe compatible adapter if needed
                    </li>
                    <li>
                        Check whether the drive is an HDD or SSD, because that
                        affects real-world speed much more than branding alone
                    </li>
                    <li>
                        Verify physical size compatibility such as 3.5-inch or
                        2.5-inch
                    </li>
                    <li>
                        Check storage capacity, RPM if it is an HDD, and overall
                        usage purpose
                    </li>
                </ul>

                <div className="warningBox">
                    <h3>Practical safety note</h3>
                    <p>
                        Always use correct data and power connections according
                        to the motherboard, PSU, and drive design. Do not force
                        mismatched connectors. Storage hardware does not enjoy
                        chaos.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiHardDrive />
                    </span>
                    <h2>Modern perspective</h2>
                </div>

                <p>
                    If the comparison is only <strong>PATA vs SATA</strong>,
                    then SATA wins easily. But if the real modern question is
                    <strong> SATA HDD vs SSD</strong>, then SSD usually feels
                    dramatically faster in everyday work like booting, opening
                    apps, and copying files.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>PATA HDD</h3>
                        <p>Old, bulky, slower, mostly outdated</p>
                    </div>

                    <div className="compareCard">
                        <h3>SATA HDD</h3>
                        <p>Better than PATA, still common for large storage</p>
                    </div>

                    <div className="compareCard featured">
                        <h3>SATA SSD</h3>
                        <p>Usually far faster in daily experience than HDDs</p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    HDD is the storage device, while ATA, PATA, and SATA are
                    interface-related terms. PATA is the older parallel style,
                    SATA is the newer serial style, and SATA is clearly the
                    better choice over PATA. In modern systems, though, the even
                    more useful question is often whether to use an HDD or move
                    to an SSD.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default SataAtaPataHdd;
