import React from "react";
import {
    FiArchive,
    FiClock,
    FiTerminal,
    FiLayers,
    FiCheckCircle,
    FiInfo,
    FiGitBranch,
    FiShield,
} from "react-icons/fi";
import { Styled } from "./styled";
import image from "./images/image.png";
import ShareButtons from "../../components/shareButton";

const unixLikeFamilies = [
    {
        title: "Original Unix and certified UNIX systems",
        text: "These are systems connected directly to the historical Unix line or certified against formal UNIX standards.",
    },
    {
        title: "Unix-inspired systems",
        text: "These systems are designed to behave like Unix and follow many of its design ideas even if they are not officially branded as UNIX.",
    },
    {
        title: "Open source Unix-like systems",
        text: "Many free and open source operating systems follow Unix-style behavior, tools, directory structures, and shell conventions.",
    },
];

const unixTraits = [
    "Multiuser design",
    "Multitasking support",
    "Strong command-line environment",
    "File system organized around directories and files",
    "Many small tools designed to work together",
    "Text-based configuration and scripting culture",
    "Portable tools and utilities across related systems",
];

const examples = [
    "Linux distributions",
    "BSD family systems",
    "macOS at its Unix foundation level",
    "Commercial systems influenced by Unix design",
];

const UnixLike = () => {
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

                <h1>UNIX-Like</h1>

                <p className="lead">
                    A Unix-like operating system is a system that behaves in a
                    way similar to Unix, even if it is not necessarily the same
                    as original Unix and may not be formally certified as UNIX.
                    In practical terms, it means the system follows many Unix
                    ideas, conventions, and behaviors.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <img src={image} alt="" />
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    The term <strong>Unix-like</strong> is used for operating
                    systems that resemble Unix in design or behavior. They may
                    use similar commands, similar file system layouts, similar
                    shell environments, and similar system tools.
                </p>

                <p>
                    A system can be Unix-like without being officially branded
                    as <strong>UNIX</strong>. That is an important distinction.
                    Similar behavior does not always mean legal certification or
                    trademark status.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>What Unix-like usually means</h2>
                    </div>

                    <ul>
                        {unixTraits.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <p>
                        So the phrase mainly describes behavior, structure, and
                        design philosophy rather than one single company or one
                        exact codebase.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Important distinction</h2>
                    </div>

                    <p>
                        Not every Unix-like system is officially{" "}
                        <strong>UNIX</strong>. The uppercase word UNIX is tied
                        to certification and standards, while Unix-like is a
                        broader descriptive term.
                    </p>

                    <div className="miniCompare">
                        <div className="compareItem">
                            <strong>UNIX</strong>
                            <span>
                                Formal standard or certification-based identity
                            </span>
                        </div>

                        <div className="compareItem">
                            <strong>Unix-like</strong>
                            <span>
                                Similar design, similar behavior, broader usage
                            </span>
                        </div>
                    </div>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Why the term is a little fuzzy</h2>
                </div>

                <p>
                    There is no single universal everyday rule that says exactly
                    when a system becomes Unix-like. That is why people
                    sometimes disagree about the label. Some focus on technical
                    behavior, some focus on standards, and some focus on
                    historical lineage.
                </p>

                <p>
                    In other words, Unix-like is not always a perfectly sharp
                    box. It is more like a family resemblance. If a system
                    walks, talks, and configures itself in a very Unix-ish way,
                    people often call it Unix-like.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGitBranch />
                    </span>
                    <h2>Major ways a system can be Unix-like</h2>
                </div>

                <div className="familyGrid">
                    {unixLikeFamilies.map((item) => (
                        <article key={item.title} className="familyCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>Common examples people think of</h2>
                </div>

                <p>
                    When people talk about Unix-like systems, they often mean
                    systems such as these:
                </p>

                <ul>
                    {examples.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <p>
                    The exact category can differ depending on whether someone
                    is talking historically, legally, or practically. But in
                    daily developer language, Unix-like usually means a system
                    that feels and behaves in the Unix tradition.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>Why developers care about Unix-like systems</h2>
                </div>

                <p>
                    Unix-like environments are popular because they usually
                    provide a strong shell, scripting tools, process control,
                    file permissions, text utilities, and a consistent command
                    culture. This makes them very useful for development,
                    servers, automation, and system administration.
                </p>

                <div className="stepsBox">
                    <div className="step">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>Small tools</strong>
                            <p>
                                Unix-style tools often do one thing well and can
                                be combined with others.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>Strong shell culture</strong>
                            <p>
                                Command-line use, scripts, pipes, and automation
                                are central habits in Unix-like systems.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">3</span>
                        <div>
                            <strong>Portable workflows</strong>
                            <p>
                                Many commands and habits transfer across
                                different Unix-like systems with relatively
                                small changes.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    Unix-like does not always mean officially certified UNIX. It
                    usually means the operating system follows the Unix style in
                    behavior, tools, structure, and philosophy.
                </p>

                <p>
                    So when someone says a system is Unix-like, they are
                    generally saying: this system works in a Unix-style world,
                    even if it is not the exact historical or certified version.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    A Unix-like operating system is one that behaves similarly
                    to Unix. It may be inspired by Unix, may emulate Unix
                    features, or may follow Unix conventions closely, but it is
                    not necessarily the same thing as formally certified UNIX.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default UnixLike;
