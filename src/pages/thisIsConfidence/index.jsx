import React from "react";
import {
    FiAward,
    FiClock,
    FiMessageSquare,
    FiTarget,
    FiTrendingUp,
    FiStar,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const timelineItems = [
    {
        title: "India vs Australia, 2004",
        text: "In the match, Brad Hogg managed to take Sachin Tendulkar's wicket.",
    },
    {
        title: "After the match",
        text: "Brad Hogg gave that same ball to Sachin and asked for an autograph.",
    },
    {
        title: "Sachin's response",
        text: "Sachin signed the ball and wrote a bold line: 'It will never happen again.'",
    },
    {
        title: "What followed",
        text: "After that, Hogg and Tendulkar faced each other many more times, but Hogg could not dismiss him again.",
    },
];

const confidencePoints = [
    "Confidence is not noise. It is calm belief in your own ability.",
    "Real confidence comes from preparation, skill, and self-trust.",
    "A strong sentence means more when performance backs it up.",
    "The most powerful reply is often long-term consistency.",
];

const ThisIsConfidence = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiStar />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 3, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>This is confidence</h1>

                <p className="lead">
                    This archive note is built around a famous Sachin Tendulkar
                    story often shared as an example of confidence, composure,
                    and self-belief. It is not loud confidence. It is the kind
                    that quietly makes a promise and then lives up to it.
                </p>
            </Styled.HeroCard>

            <Styled.HighlightCard>
                <div className="quoteHeader">
                    <span className="quoteIcon">
                        <FiMessageSquare />
                    </span>
                    <h2>The line that made the story unforgettable</h2>
                </div>

                <blockquote>"It will never happen again."</blockquote>

                <p>
                    According to the story, Brad Hogg took Sachin Tendulkar's
                    wicket in an India vs Australia match in 2004. After the
                    match, Hogg gave the ball to Sachin for an autograph. Sachin
                    signed it with a short sentence that turned the moment into
                    legend.
                </p>
            </Styled.HighlightCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAward />
                        </span>
                        <h2>The original story, cleaned up</h2>
                    </div>

                    <p>
                        In an India vs Australia match in 2004, Brad Hogg got
                        Sachin Tendulkar out. At the end of the match, Hogg gave
                        that ball to Sachin for his autograph.
                    </p>

                    <p>Sachin signed the ball and wrote:</p>

                    <div className="miniQuote">
                        <strong>"It will never happen again."</strong>
                    </div>

                    <p>
                        The story then says that after this incident, Hogg and
                        Tendulkar came face to face many more times, but Hogg
                        could not get Sachin out again.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiTarget />
                        </span>
                        <h2>Why the story feels powerful</h2>
                    </div>

                    <ul>
                        <li>The reply was short, direct, and fearless</li>
                        <li>
                            It was not emotional overreaction, it was control
                        </li>
                        <li>
                            It turned one dismissal into a personal standard
                        </li>
                        <li>
                            The confidence mattered because performance followed
                        </li>
                    </ul>

                    <p>
                        That is why the story gets remembered. Not because the
                        line sounded cool, but because it matched the image of a
                        player who trusted his game deeply.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTrendingUp />
                    </span>
                    <h2>Story flow</h2>
                </div>

                <div className="timeline">
                    {timelineItems.map((item) => (
                        <div key={item.title} className="timelineItem">
                            <span className="dot" />

                            <div className="timelineContent">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiStar />
                    </span>
                    <h2>What "confidence" means here</h2>
                </div>

                <p>
                    Confidence here does not mean arrogance. It means belief
                    backed by mastery. A beginner can imitate the sentence, but
                    not the weight behind it. The weight came from years of
                    discipline, skill, and the ability to answer with
                    performance instead of noise.
                </p>

                <div className="pointsGrid">
                    {confidencePoints.map((point) => (
                        <div key={point} className="pointCard">
                            {point}
                        </div>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAward />
                    </span>
                    <h2>Why this archive note still works</h2>
                </div>

                <p>
                    The original post was short and direct. That simplicity is
                    part of its charm. It captured admiration in a raw form:
                </p>

                <div className="statementStack">
                    <div className="statementCard">This is confidence.</div>
                    <div className="statementCard">This is Tendulkar.</div>
                </div>

                <p>
                    In refactored form, the idea becomes even clearer. The story
                    is really about calm self-belief. One moment, one sentence,
                    and then a long reply written through results.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final takeaway</h2>
                <p>
                    Confidence is strongest when it does not beg for attention.
                    It speaks once and then lets actions handle the rest. That
                    is why this small old blog note still hits hard.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ThisIsConfidence;
