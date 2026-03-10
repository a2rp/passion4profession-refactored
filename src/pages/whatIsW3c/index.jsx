import React from "react";
import {
    FiGlobe,
    FiUsers,
    FiShield,
    FiCheckCircle,
    FiLayers,
    FiCode,
    FiFeather,
    FiClock,
    FiArrowRight,
} from "react-icons/fi";
import { Styled } from "./styled";
import { IoAccessibility } from "react-icons/io5";
import ShareButtons from "../../components/shareButton";

const principles = [
    "Accessibility",
    "Internationalization",
    "Device independence",
    "Mobile access",
    "Quality assurance",
];

const processSteps = [
    {
        title: "Working Draft",
        text: "A new idea starts as a draft prepared by a Working Group. It is still flexible and open to change.",
    },
    {
        title: "Last Call",
        text: "The draft is shared more broadly so people can review it, raise issues, and suggest improvements.",
    },
    {
        title: "Candidate Recommendation",
        text: "The group now wants real implementation experience to see whether the specification works in practice.",
    },
    {
        title: "Proposed Recommendation",
        text: "After successful review and implementation feedback, the document moves to final internal review.",
    },
    {
        title: "Recommendation",
        text: "This is the final W3C standard-level result. At this point, W3C recommends that people implement it.",
    },
];

const benefits = [
    "Members can propose ideas and technologies for future standards",
    "Members can participate in Working Groups",
    "Members can help review and shape upcoming Web technologies",
    "Members get access to discussions, drafts, and member-focused collaboration",
    "Members can influence how the future Web is built",
];

const examples = [
    {
        title: "HTML and XHTML",
        text: "W3C has guided the development of markup languages used to structure Web pages and documents.",
    },
    {
        title: "CSS",
        text: "W3C has played a major role in the development of Cascading Style Sheets used to control presentation and layout.",
    },
    {
        title: "Accessibility",
        text: "W3C's Web Accessibility Initiative helps make the Web more usable for people with disabilities.",
    },
];

const WhatIsW3c = () => {
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
                        Original topic: September 10, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>What is W3C?</h1>

                <p className="lead">
                    W3C stands for the{" "}
                    <strong>World Wide Web Consortium</strong>. It is the main
                    standards organization that helps guide how the Web grows.
                    Its role is to create specifications, recommendations, and
                    guidelines so that the Web remains open, consistent,
                    accessible, and usable across different devices and
                    platforms.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGlobe />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    W3C is the organization that develops many of the standards
                    behind the modern Web. These standards help browsers,
                    websites, tools, and developers work from a shared set of
                    rules instead of everyone inventing their own private
                    universe.
                </p>

                <p>
                    In practical terms, W3C helps define how Web technologies
                    such as HTML, CSS, accessibility guidelines, and other Web
                    specifications should work.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiFeather />
                        </span>
                        <h2>The birth of W3C</h2>
                    </div>

                    <p>
                        W3C was founded in <strong>1994</strong> by{" "}
                        <strong>Tim Berners-Lee</strong>, the inventor of the
                        World Wide Web, at MIT.
                    </p>

                    <p>
                        Its mission was to support the long-term growth of the
                        Web by developing open protocols and guidelines.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Why W3C matters</h2>
                    </div>

                    <ul>
                        <li>
                            It helps keep the Web open instead of fragmented
                        </li>
                        <li>
                            It improves compatibility across browsers and
                            devices
                        </li>
                        <li>It encourages accessible and usable Web design</li>
                        <li>
                            It provides shared standards for developers and
                            tools
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Guiding principles</h2>
                </div>

                <p>
                    W3C does not just create specifications randomly. Its work
                    is guided by a set of principles that aim to keep the Web
                    useful for everyone, not just for one company, one browser,
                    or one device type.
                </p>

                <div className="pillGrid">
                    {principles.map((item) => (
                        <span key={item} className="pill">
                            {item}
                        </span>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiUsers />
                    </span>
                    <h2>Who participates in W3C?</h2>
                </div>

                <p>
                    W3C is not just one person writing Web rules in a secret
                    cave. It includes companies, organizations, experts, and
                    technical groups working together.
                </p>

                <ul>
                    <li>Large technology companies</li>
                    <li>Smaller companies and industry groups</li>
                    <li>Technical experts and invited specialists</li>
                    <li>
                        Working Groups, Interest Groups, and Coordination Groups
                    </li>
                </ul>

                <p>
                    Individuals usually do not join in the same way companies
                    do, but they can still contribute through mailing lists,
                    feedback, workshops, invited expert roles, and public review
                    processes.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiArrowRight />
                    </span>
                    <h2>How W3C standards are created</h2>
                </div>

                <p>
                    W3C standards go through a structured approval path. This is
                    important because a Web standard should not be rushed like a
                    random feature tossed into the void at 2 a.m.
                </p>

                <div className="stepsList">
                    {processSteps.map((step, index) => (
                        <div className="stepCard" key={step.title}>
                            <div className="stepNo">{index + 1}</div>

                            <div className="stepContent">
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCode />
                        </span>
                        <h2>Examples of W3C impact</h2>
                    </div>

                    <div className="miniCards">
                        {examples.map((item) => (
                            <div className="miniCard" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <IoAccessibility />
                        </span>
                        <h2>Accessibility and W3C</h2>
                    </div>

                    <p>
                        One of W3C's most important areas is accessibility.
                        Through the Web Accessibility Initiative, W3C helps
                        create guidelines that make the Web more usable for
                        people with disabilities.
                    </p>

                    <ul>
                        <li>WCAG for Web content accessibility</li>
                        <li>ATAG for authoring tool accessibility</li>
                        <li>Guidance for accessible content and tools</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiUsers />
                    </span>
                    <h2>Benefits of W3C membership</h2>
                </div>

                <p>
                    Organizations that become W3C members can take part more
                    directly in shaping future Web standards.
                </p>

                <ul>
                    {benefits.map((item) => (
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
                    W3C is the standards body that helps the Web remain open,
                    interoperable, and future-friendly. It has shaped many core
                    technologies used every day, including HTML, CSS, and
                    accessibility guidelines.
                </p>

                <p>
                    Without shared standards, the Web would become a messy
                    patchwork where sites behaved differently everywhere. W3C
                    exists to reduce that chaos and guide the Web toward
                    consistency and long-term growth.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    W3C, the World Wide Web Consortium, is the organization that
                    develops important Web standards and guidelines. It was
                    founded by Tim Berners-Lee and plays a major role in
                    technologies such as HTML, CSS, and accessibility standards.
                    Its job is to help the Web stay open, stable, useful, and
                    accessible for everyone.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default WhatIsW3c;
