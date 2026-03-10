import React from "react";
import {
    FiCode,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiFileText,
    FiMonitor,
    FiLayers,
    FiGlobe,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const comparisonItems = [
    {
        label: ".html",
        text: "Longer and more descriptive extension. Very common in modern systems and web projects.",
    },
    {
        label: ".htm",
        text: "Shorter alternate form that became common because older systems preferred 3-character extensions.",
    },
];

const keyPoints = [
    "Both .htm and .html represent HTML documents",
    "The content inside the file can be exactly the same",
    "The difference is mainly historical and naming-related",
    "Modern systems and browsers usually support both",
    "Today, .html is generally more common and clearer",
];

const HtmVsHtml = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiCode />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: January 21, 2013
                    </span>

                    <ShareButtons />
                </div>

                <h1>What is the difference between HTM and HTML?</h1>

                <p className="lead">
                    In practical use, <strong>.htm</strong> and{" "}
                    <strong>.html</strong> are both used for HTML webpages. They
                    usually serve the same purpose and can contain the same
                    markup. The main difference is historical: one is a shorter
                    extension, and the other is the full form.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple answer</h2>
                </div>

                <p>
                    There is no real difference in what the browser renders. A
                    file named <strong>page.htm</strong> and a file named{" "}
                    <strong>page.html</strong> can both be normal HTML pages.
                </p>

                <p>
                    The difference is mainly in the extension name. The shorter
                    <strong> .htm </strong> version became popular when older
                    systems preferred file extensions with only 3 characters.
                    The longer <strong>.html</strong> version is the more
                    descriptive and commonly preferred form today.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiFileText />
                        </span>
                        <h2>What both extensions mean</h2>
                    </div>

                    <p>
                        Both extensions point to HTML documents, which are files
                        written using HyperText Markup Language.
                    </p>

                    <ul>
                        <li>.html = full extension name</li>
                        <li>.htm = shortened alternate extension</li>
                        <li>Both are generally recognized by browsers</li>
                        <li>Both can be used for static webpages</li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important clarification</h2>
                    </div>

                    <p>
                        The extension does not change HTML into a different web
                        language. It is still the same kind of document.
                    </p>

                    <ul>
                        <li>.htm is not a separate technology</li>
                        <li>.html is not more powerful than .htm</li>
                        <li>
                            The file content matters more than the extension
                            name
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMonitor />
                    </span>
                    <h2>Why did .htm become common?</h2>
                </div>

                <p>
                    Older systems such as DOS and early Windows environments
                    often worked best with short file extensions. Because of
                    that, the longer <strong>.html</strong> extension was often
                    shortened to <strong>.htm</strong>.
                </p>

                <div className="timeline">
                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Older file naming habits</strong>
                            <p>
                                Short extensions were more common and easier for
                                older systems to work with.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>HTML files needed a shorter form</strong>
                            <p>
                                So .html often became .htm on systems that
                                preferred 3-character suffixes.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Modern systems improved</strong>
                            <p>
                                Later operating systems and tools handled longer
                                names easily, so .html became very common.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGlobe />
                    </span>
                    <h2>Do browsers treat them differently?</h2>
                </div>

                <p>
                    In normal use, browsers treat both as HTML files as long as
                    the server and file setup are correct. If the file contains
                    valid HTML markup, the browser will render it as a webpage.
                </p>

                <p>
                    So from the user point of view, there is usually no visible
                    difference at all.
                </p>

                <div className="compareGrid">
                    {comparisonItems.map((item) => (
                        <article key={item.label} className="compareCard">
                            <h3>{item.label}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Where confusion usually happens</h2>
                </div>

                <p>
                    People sometimes think that .htm and .html are different
                    file types. They are not. The confusion happens because the
                    names are different, but their role is normally the same.
                </p>

                <ul>
                    <li>Both can contain plain HTML markup</li>
                    <li>Both can be opened in browsers</li>
                    <li>Both can be edited in code editors</li>
                    <li>Both can be used as webpage files on servers</li>
                </ul>

                <p>
                    The real differences in web behavior usually come from the
                    file content, server configuration, or MIME type handling,
                    not from choosing .htm versus .html.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Which one should you use today?</h2>
                </div>

                <p>
                    Today, <strong>.html</strong> is usually the better default
                    choice because it is clearer, more descriptive, and more
                    common in modern projects.
                </p>

                <div className="exampleBox">
                    <h3>Good practical choice</h3>
                    <ul>
                        {keyPoints.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>

                <p>
                    That said, if a project already uses <strong>.htm</strong>,
                    it is usually fine to continue using it consistently.
                    Consistency matters more than theatrical extension drama.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    <strong>.htm</strong> and <strong>.html</strong> both refer
                    to HTML webpage files. The difference is mainly historical:
                    .htm became common because older systems preferred shorter
                    extensions, while .html is the full and more descriptive
                    form that is widely used today.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default HtmVsHtml;
