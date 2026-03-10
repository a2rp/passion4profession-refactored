import React from "react";
import {
    FiArchive,
    FiClock,
    FiCpu,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
    FiTerminal,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const FullFormOfUnixAndLinux = () => {
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
                        Original topic: May 30, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Full form of UNIX and Linux</h1>

                <p className="lead">
                    This topic looks small, but there is an important difference
                    between the two names. UNIX has a historical naming story,
                    while Linux is not a full form at all. Linux is the name of
                    a kernel created by Linus Torvalds.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Short answer</h2>
                </div>

                <div className="answerGrid">
                    <div className="answerCard">
                        <h3>UNIX</h3>
                        <p>
                            UNIX is historically associated with{" "}
                            <strong>UNICS</strong>, often expanded as{" "}
                            <strong>
                                UNiplexed Information and Computing System
                            </strong>
                            . Over time, the name became <strong>UNIX</strong>.
                        </p>
                    </div>

                    <div className="answerCard">
                        <h3>Linux</h3>
                        <p>
                            Linux is <strong>not an acronym</strong>. It is the
                            name of the kernel and is generally understood as
                            coming from <strong>Linus' Unix</strong>, after its
                            creator, <strong>Linus Torvalds</strong>.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiTerminal />
                        </span>
                        <h2>About UNIX</h2>
                    </div>

                    <p>
                        UNIX began as an operating system developed at Bell
                        Labs. The naming story usually points back to
                        <strong> UNICS</strong>, which was a play on the earlier
                        system called <strong>Multics</strong>.
                    </p>

                    <ul>
                        <li>
                            UNICS is commonly expanded in older explanations
                        </li>
                        <li>Later the spelling settled as UNIX</li>
                        <li>
                            UNIX became highly influential in operating system
                            history
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCpu />
                        </span>
                        <h2>About Linux</h2>
                    </div>

                    <p>
                        Linux refers to the <strong>kernel</strong>, which is
                        the core part of an operating system. It was created by
                        Linus Torvalds in 1991.
                    </p>

                    <ul>
                        <li>
                            Linux is a name, not a letter-by-letter full form
                        </li>
                        <li>
                            It is commonly linked to the idea of "Linus' Unix"
                        </li>
                        <li>
                            Linux itself is the kernel, not the complete system
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Important difference: UNIX vs Linux</h2>
                </div>

                <p>
                    People often mix these names together, but they are not the
                    same thing.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>UNIX</h3>
                        <p>
                            A historic operating system family and standard with
                            deep influence on later systems.
                        </p>
                    </div>

                    <div className="compareCard">
                        <h3>Linux</h3>
                        <p>
                            A kernel inspired by Unix-like ideas, widely used in
                            modern operating systems such as GNU/Linux
                            distributions.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Common confusion</h2>
                </div>

                <div className="noteBox">
                    <h3>1. Linux is not a full operating system by itself</h3>
                    <p>
                        Strictly speaking, Linux is the kernel. A complete Linux
                        system usually includes many other tools and components,
                        often from the GNU project and other software packages.
                    </p>
                </div>

                <div className="noteBox">
                    <h3>2. Linux is not the full form of anything</h3>
                    <p>
                        Unlike abbreviations such as CPU or RAM, Linux is not a
                        standard acronym. It is just the name used for the
                        kernel.
                    </p>
                </div>

                <div className="noteBox">
                    <h3>
                        3. UNIX and Linux are related in spirit, not identical
                    </h3>
                    <p>
                        Linux was designed in a Unix-like style, but it is not
                        literally the original UNIX operating system.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical takeaway</h2>
                </div>

                <p>
                    If someone asks for the full form of UNIX, the commonly
                    cited historical expansion is{" "}
                    <strong>UNiplexed Information and Computing System</strong>,
                    associated with <strong>UNICS</strong>, later becoming UNIX.
                </p>

                <p>
                    If someone asks for the full form of Linux, the better and
                    more accurate answer is:{" "}
                    <strong>Linux has no full form</strong>. It is the name of
                    the kernel and is commonly associated with the idea of{" "}
                    <strong>Linus' Unix</strong>.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    UNIX has a historical naming background linked with UNICS,
                    while Linux is simply the name of the kernel created by
                    Linus Torvalds. So the clean answer is: UNIX has a
                    historical expansion, but Linux does not have a formal full
                    form.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default FullFormOfUnixAndLinux;
