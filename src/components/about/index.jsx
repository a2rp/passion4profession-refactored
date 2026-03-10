import React from "react";
import {
    FiArchive,
    FiBookOpen,
    FiRefreshCw,
    FiLayers,
    FiClock,
    FiExternalLink,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../shareButton";

const projectHighlights = [
    {
        icon: <FiArchive />,
        title: "Archive of old blog posts",
        text: "This project preserves topics from the original Passion4Profession blog and brings them into a cleaner internal route structure.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Refactored and rewritten",
        text: "Old posts are being rewritten with better clarity, updated structure, and cleaner presentation while keeping the original spirit alive.",
    },
    {
        icon: <FiBookOpen />,
        title: "Learning-first notes",
        text: "The content focuses on simple explanations, foundational concepts, and easy-to-browse notes that are useful for revision and understanding.",
    },
    {
        icon: <FiLayers />,
        title: "Organized archive system",
        text: "Instead of scattered Blogger links, this version uses dedicated internal routes so every topic can grow into its own full page over time.",
    },
];

const focusPoints = [
    "Preserve the original blog archive from college days",
    "Rewrite topics in a cleaner and more readable format",
    "Build dedicated routes for each old post topic",
    "Turn rough notes into a structured computing archive",
    "Keep the project simple, searchable, and expandable",
];

const About = () => {
    return (
        <Styled.Wrapper>
            <Styled.HeroSection>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="eyebrowRow">
                        <span className="eyebrowBadge">
                            <FiArchive />
                            Blog Archive Project
                        </span>
                    </div>

                    <h1>About this project</h1>

                    <p className="heroText">
                        Passion4Profession Refactored is a rebuilt version of my
                        old college-day blog archive. The goal is to preserve
                        those early topics, rewrite them more clearly, and place
                        them into a cleaner route-based knowledge system.
                    </p>

                    <ShareButtons />

                    <p>
                        <br />
                        Originally written between 2012 and 2014 during my early
                        exploration of computing concepts.
                    </p>
                    <div className="metaRow">
                        <div className="metaCard">
                            <span className="metaIcon">
                                <FiClock />
                            </span>
                            <div>
                                <strong>Then</strong>
                                <span>Old Blogger posts and rough notes</span>
                            </div>
                        </div>

                        <div className="metaCard">
                            <span className="metaIcon">
                                <FiRefreshCw />
                            </span>
                            <div>
                                <strong>Now</strong>
                                <span>
                                    Refactored archive with internal pages
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Styled.HeroSection>

            <Styled.ContentSection>
                <div className="contentGrid">
                    <section className="mainCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiBookOpen />
                            </span>
                            <h2>What this site is</h2>
                        </div>

                        <p>
                            This site is not a brand new blog pretending to be
                            born yesterday. It is a restoration project.
                            Earlier, the content lived on Blogger as short
                            posts, references, rough notes, and small topic
                            writeups. Now those ideas are being moved into a
                            modern React structure where each topic can have its
                            own route and its own proper page.
                        </p>

                        <p>
                            Some topics are small fundamentals, some are quick
                            references, and some are curious little internet-era
                            notes from that phase of learning. The point is not
                            to hide that history. The point is to organize it
                            better.
                        </p>
                    </section>

                    <section className="sideCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiExternalLink />
                            </span>
                            <h2>Original source</h2>
                        </div>

                        <p>
                            The original archive started here and this project
                            builds on that foundation.
                        </p>

                        <a
                            href="https://passion4profession.blogspot.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="sourceLink"
                        >
                            passion4profession.blogspot.com
                        </a>
                    </section>
                </div>
            </Styled.ContentSection>

            <Styled.HighlightsSection>
                <div className="sectionTitleRow">
                    <h2>Project highlights</h2>
                    <p>What makes this archive useful now</p>
                </div>

                <div className="highlightGrid">
                    {projectHighlights.map((item) => (
                        <article key={item.title} className="highlightCard">
                            <div className="highlightIcon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.HighlightsSection>

            <Styled.PurposeSection>
                <div className="purposeGrid">
                    <section className="purposeCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiLayers />
                            </span>
                            <h2>Why I am rebuilding it</h2>
                        </div>

                        <p>
                            Old knowledge has value, but old structure often
                            does not. Blogger links, scattered titles, and tiny
                            posts are fine for the moment they were written, but
                            not ideal for long-term use. Rebuilding the archive
                            makes it easier to expand each idea properly.
                        </p>

                        <p>
                            This also turns the archive into something more
                            usable: a personal reference, a learning resource,
                            and a cleaner foundation for future notes.
                        </p>
                    </section>

                    <section className="purposeCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiArchive />
                            </span>
                            <h2>Current focus</h2>
                        </div>

                        <ul className="focusList">
                            {focusPoints.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </Styled.PurposeSection>

            <Styled.FooterNote>
                <div className="noteBox">
                    <h2>In simple words</h2>
                    <p>
                        This project is a cleaned-up archive of old blog ideas.
                        Same roots, better structure, clearer writing, and room
                        to grow each topic into something actually useful.
                    </p>
                </div>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default About;
