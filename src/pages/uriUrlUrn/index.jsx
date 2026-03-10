import React from "react";
import {
    FiLink2,
    FiGlobe,
    FiTag,
    FiCheckCircle,
    FiAlertCircle,
    FiLayers,
    FiBox,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const UriUrlUrn = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiLayers />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiBox />
                        Original topic: April 5, 2013
                    </span>

                    <ShareButtons />
                </div>

                <h1>Difference among URI, URL and URN</h1>

                <p className="lead">
                    URI, URL, and URN are related terms, but they are not the
                    same thing. The easiest way to understand them is this:
                    <strong> URI is the bigger category</strong>, and URL and
                    URN are two different ways of identifying a resource inside
                    that category.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Short answer</h2>
                </div>

                <p>
                    A <strong>URI</strong>, or Uniform Resource Identifier, is a
                    general identifier for a resource.
                </p>

                <p>
                    A <strong>URL</strong>, or Uniform Resource Locator, is a
                    type of URI that tells you <strong>where</strong> something
                    is and usually <strong>how to access it</strong>.
                </p>

                <p>
                    A <strong>URN</strong>, or Uniform Resource Name, is a type
                    of URI that gives a resource a <strong>name</strong> that is
                    meant to stay stable and unique, even if the location
                    changes.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLink2 />
                        </span>
                        <h2>What is a URI?</h2>
                    </div>

                    <p>
                        URI stands for{" "}
                        <strong>Uniform Resource Identifier</strong>. It is the
                        broad umbrella term.
                    </p>

                    <ul>
                        <li>It identifies a resource</li>
                        <li>It may point to a location</li>
                        <li>It may only provide a name</li>
                        <li>It may sometimes do both</li>
                    </ul>

                    <p>
                        So when people say URL and URI are the same, that is not
                        fully correct. A URL is a URI, but a URI is not always a
                        URL.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiGlobe />
                        </span>
                        <h2>What is a URL?</h2>
                    </div>

                    <p>
                        URL stands for <strong>Uniform Resource Locator</strong>
                        . It identifies a resource by telling you where it is or
                        how to get it.
                    </p>

                    <ul>
                        <li>It gives an address or access mechanism</li>
                        <li>It is commonly used on the web</li>
                        <li>
                            It usually includes protocol and location details
                        </li>
                    </ul>

                    <div className="exampleMini">
                        <strong>Example</strong>
                        <p>https://example.com/articles/uri-basics</p>
                    </div>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiTag />
                        </span>
                        <h2>What is a URN?</h2>
                    </div>

                    <p>
                        URN stands for <strong>Uniform Resource Name</strong>.
                        It identifies a resource by name instead of by location.
                    </p>

                    <ul>
                        <li>It focuses on identity, not access path</li>
                        <li>It is meant to be unique and persistent</li>
                        <li>
                            The resource may move, but the name is intended to
                            remain stable
                        </li>
                    </ul>

                    <div className="exampleMini">
                        <strong>Example</strong>
                        <p>urn:isbn:0451450523</p>
                    </div>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Why people get confused</h2>
                    </div>

                    <p>
                        In everyday web development, most examples people see
                        are URLs. Because of that, many people casually say
                        "URL" when the more general word should be "URI".
                    </p>

                    <p>
                        The confusion grows because some identifiers can behave
                        like both a name and a locator depending on context.
                        Technical standards are cleaner than casual internet
                        conversation, which is a polite way of saying the web
                        likes chaos.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Relationship between URI, URL, and URN</h2>
                </div>

                <div className="diagramBox">
                    <div className="diagramOuter">
                        <div className="diagramTitle">URI</div>

                        <div className="diagramInnerRow">
                            <div className="diagramCard">
                                <h3>URL</h3>
                                <p>Identifies by location or access method</p>
                            </div>

                            <div className="diagramCard">
                                <h3>URN</h3>
                                <p>Identifies by stable name</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p>The simplest mental model is:</p>

                <ul>
                    <li>All URLs are URIs</li>
                    <li>All URNs are URIs</li>
                    <li>Not all URIs are URLs</li>
                    <li>Not all URIs are URNs</li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Easy real-world examples</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>URL example</h3>
                        <p className="mono">https://openai.com/research</p>
                        <p>
                            This tells you where the resource can be found and
                            how it can be accessed through HTTPS.
                        </p>
                    </div>

                    <div className="compareCard">
                        <h3>URN example</h3>
                        <p className="mono">urn:isbn:9780131103627</p>
                        <p>
                            This identifies a book by a naming scheme. It does
                            not directly tell you where to fetch it from.
                        </p>
                    </div>

                    <div className="compareCard wide">
                        <h3>URI idea</h3>
                        <p>
                            URI is the big parent concept. It covers anything
                            that identifies a resource, whether that happens by
                            location, by name, or sometimes both.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Standards-style explanation</h2>
                </div>

                <p>
                    According to internet standards, a URI can be classified as
                    a locator, a name, or both. That means URL and URN are not
                    competing concepts at the same level as URI. They are more
                    like special cases under the broader URI idea.
                </p>

                <p>
                    So the old one-line conclusion still works beautifully:
                    <strong> every URL is a URI</strong>, but some URIs are URNs
                    instead. Mud becomes slightly less muddy once the umbrella
                    idea is clear.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    URI is the general term for identifying a resource. URL is a
                    URI that locates a resource. URN is a URI that names a
                    resource in a persistent way. The easiest memory trick is:
                    <strong>
                        {" "}
                        URI is the big family, URL and URN are members of that
                        family.
                    </strong>
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default UriUrlUrn;
