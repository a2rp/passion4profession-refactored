import React from "react";
import {
    FiCpu,
    FiBox,
    FiCode,
    FiLayers,
    FiBookOpen,
    FiShield,
    FiGitBranch,
    FiCheckCircle,
    FiAlertCircle,
    FiUsers,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const keyFacts = [
    { label: "Project name", value: "GNU" },
    { label: "Started", value: "1983" },
    { label: "Founder", value: "Richard Stallman" },
    {
        label: "Type",
        value: "Unix-like free software operating system project",
    },
    {
        label: "Goal",
        value: "A complete Unix-compatible system made of free software",
    },
    { label: "Related organization", value: "Free Software Foundation (FSF)" },
];

const coreComponents = [
    "GNU Compiler Collection (GCC)",
    "GNU Binary Utilities (binutils)",
    "Bash shell",
    "GNU C Library (glibc)",
    "GNU Core Utilities (coreutils)",
];

const licenses = [
    "GNU General Public License (GPL)",
    "GNU Lesser General Public License (LGPL)",
    "GNU Free Documentation License (GFDL)",
];

const GnuPage = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiBookOpen />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiBox />
                        Original topic: May 30, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>GNU</h1>

                <p className="lead">
                    GNU is a free software operating system project created to
                    build a complete Unix-compatible system made entirely from
                    free software. It is one of the most important foundations
                    behind modern free and open source computing.
                </p>
            </Styled.HeroCard>

            <Styled.FactsCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Quick facts</h2>
                </div>

                <div className="factsGrid">
                    {keyFacts.map((item) => (
                        <div key={item.label} className="factItem">
                            <span className="factLabel">{item.label}</span>
                            <span className="factValue">{item.value}</span>
                        </div>
                    ))}
                </div>
            </Styled.FactsCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>What GNU actually is</h2>
                </div>

                <p>
                    GNU is not just one program. It is a large software project
                    whose aim was to create a complete operating system that
                    behaves like Unix but is fully free software. That means
                    users should be able to run it, study it, modify it, and
                    share it.
                </p>

                <p>
                    In simple words, GNU is a collection of system tools,
                    libraries, compilers, shells, and utilities designed to work
                    together as an operating system environment.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCode />
                        </span>
                        <h2>Meaning of the name</h2>
                    </div>

                    <p>GNU is a recursive acronym:</p>

                    <div className="quoteBox">
                        <strong>GNU's Not Unix!</strong>
                    </div>

                    <p>
                        It is called recursive because the first word of the
                        acronym contains the acronym itself. Computer people
                        love this kind of nerd joke far more than normal society
                        reasonably should.
                    </p>

                    <p>The name reflects two ideas at once:</p>

                    <ul>
                        <li>GNU is Unix-like in design</li>
                        <li>
                            GNU is not Unix code and is intended to be free
                            software
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiUsers />
                        </span>
                        <h2>Who started it</h2>
                    </div>

                    <p>
                        GNU was initiated by Richard Stallman in 1983. It later
                        became the central software effort associated with the
                        Free Software Foundation, also known as the FSF.
                    </p>

                    <p>
                        The project was not only technical. It also had a strong
                        social and ethical purpose: software freedom for users.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>Why GNU matters in operating systems</h2>
                </div>

                <p>
                    When people talk about Linux-based systems, many of the
                    tools they use every day often come from GNU. These include
                    compilers, command-line tools, shells, libraries, and system
                    utilities.
                </p>

                <p>
                    This is why the Free Software Foundation argues that many
                    systems commonly called "Linux" are more precisely described
                    as <strong>GNU/Linux</strong>, because the Linux kernel is
                    combined with a large body of GNU software.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>Kernel</h3>
                        <p>
                            Linux is primarily the kernel, which is the
                            low-level core that talks to hardware and manages
                            resources.
                        </p>
                    </div>

                    <div className="compareCard">
                        <h3>Userland tools</h3>
                        <p>
                            GNU provides many of the commands, libraries, and
                            developer tools that make the full system usable.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBox />
                    </span>
                    <h2>Important GNU components</h2>
                </div>

                <p>
                    GNU is made up of many separate software packages. Some of
                    the most important ones are:
                </p>

                <div className="chipGrid">
                    {coreComponents.map((item) => (
                        <div key={item} className="chipItem">
                            {item}
                        </div>
                    ))}
                </div>

                <p>
                    These are the kinds of tools that quietly keep huge chunks
                    of software development and system operation running in the
                    background without demanding applause.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiGitBranch />
                        </span>
                        <h2>GNU and Linux</h2>
                    </div>

                    <p>
                        GNU and Linux are related, but they are not the same
                        thing.
                    </p>

                    <ul>
                        <li>GNU is a broader operating system project</li>
                        <li>Linux is a kernel</li>
                        <li>
                            Many popular systems combine Linux with GNU tools
                        </li>
                        <li>That is why the term GNU/Linux exists</li>
                    </ul>

                    <p>
                        This naming debate became famous because technical
                        accuracy and software philosophy collided, as they often
                        do in computing.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>GNU is bigger than one kernel</h2>
                    </div>

                    <p>
                        GNU was originally intended to have its own kernel,
                        called <strong>GNU Hurd</strong>. But GNU software can
                        also be used with other kernels, most famously Linux.
                    </p>

                    <p>
                        So GNU is not defined only by one kernel choice. It is
                        better understood as a wider operating system ecosystem.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiShield />
                    </span>
                    <h2>GNU licenses and free software</h2>
                </div>

                <p>
                    GNU is strongly associated with free software licensing.
                    Some of the best-known GNU licenses are:
                </p>

                <ul>
                    {licenses.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <p>
                    These licenses were created to protect user freedoms such as
                    the ability to read source code, modify it, and redistribute
                    it under defined conditions.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBookOpen />
                    </span>
                    <h2>Simple mental model</h2>
                </div>

                <div className="stepsBox">
                    <div className="step">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>Unix inspired the design</strong>
                            <p>
                                GNU aimed to be compatible in spirit and
                                structure with Unix systems.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>Free software was the goal</strong>
                            <p>
                                Users should have freedom over the software they
                                run.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">3</span>
                        <div>
                            <strong>GNU built essential tools</strong>
                            <p>
                                Compilers, shells, libraries, and utilities were
                                developed as major building blocks.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">4</span>
                        <div>
                            <strong>GNU became part of modern systems</strong>
                            <p>
                                Many Linux-based systems rely heavily on GNU
                                software today.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    GNU is a free software operating system project created to
                    build a complete Unix-like system from free components. It
                    became hugely influential through its tools, libraries,
                    licenses, and philosophy. Even when people casually say
                    "Linux", a large part of what they are using is often GNU
                    software under the hood.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default GnuPage;
