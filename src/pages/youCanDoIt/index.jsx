import React, { useMemo, useState } from "react";
import {
    FiArchive,
    FiClock,
    FiImage,
    FiHeart,
    FiTrendingUp,
    FiCheckCircle,
    FiTarget,
} from "react-icons/fi";
import { Styled } from "./styled";

import imagePath from "./images/youCanDoItOriginal.png";
import ShareButtons from "../../components/shareButton";

const lessons = [
    {
        title: "Your current position is not your final position",
        text: "The people shown in the original poster are used to communicate one simple idea: where someone starts does not permanently define where they can reach.",
    },
    {
        title: "Early struggle does not cancel future success",
        text: "Lack of money, education gaps, rejection, or small beginnings may slow progress, but they do not automatically end possibility.",
    },
    {
        title: "Comparison should not become surrender",
        text: "When people compare their beginning to someone else's finished result, they often quit too early. Real growth usually looks small in the beginning.",
    },
    {
        title: "Hope becomes useful only with action",
        text: "A motivational sentence has value only when it pushes someone to keep learning, keep trying, and keep moving.",
    },
];

const practicalPoints = [
    "Start from the place you are in, not from the place you wish you were in",
    "Improve one skill at a time and repeat long enough to become better",
    "Do not treat delay as permanent defeat",
    "Use inspiring examples as fuel, not as fantasy",
    "Let action carry motivation forward",
];

const YouCanDoIt = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const originalMeta = useMemo(() => {
        return {
            title: "YOU CAN DO IT",
            date: "8th August 2012",
            author: "Ashish Ranjan",
        };
    }, []);

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
                        Original topic: {originalMeta.date}
                    </span>

                    <ShareButtons />
                </div>

                <h1>{originalMeta.title}</h1>

                <p className="lead">
                    This archive page preserves the original motivational post
                    and presents it in a clearer, more structured format. The
                    original message was visual and direct: difficult beginnings
                    do not automatically decide the rest of a person's life.
                </p>
            </Styled.HeroCard>

            <Styled.PosterCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiImage />
                    </span>
                    <h2>Original poster</h2>
                </div>

                <div className="posterFrame">
                    {!imageLoaded ? <div className="posterSkeleton" /> : null}

                    <img
                        src={imagePath}
                        alt="Original YOU CAN DO IT motivational poster from the archive"
                        loading="lazy"
                        onLoad={() => setImageLoaded(true)}
                        style={{ opacity: imageLoaded ? 1 : 0 }}
                    />
                </div>

                <div className="originalMeta">
                    <span>
                        Posted <strong>{originalMeta.date}</strong>
                    </span>
                    <span>
                        by <strong>{originalMeta.author}</strong>
                    </span>
                </div>
            </Styled.PosterCard>

            <Styled.ContentGrid>
                <Styled.MainCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHeart />
                        </span>
                        <h2>What the original post is saying</h2>
                    </div>

                    <p>
                        The original poster tries to deliver a hopeful message
                        using well-known public figures and short descriptions
                        of humble or difficult starting points. Its central
                        point is simple: life should not be judged only by what
                        has not happened yet.
                    </p>

                    <p>
                        The emotional message at the bottom is the real heart of
                        the post: life is not only about what you could not do
                        so far, it is about what you still can do. That is the
                        entire engine of the page.
                    </p>

                    <p>
                        Whether every quote in such posters is perfectly sourced
                        or not, the broader lesson is still easy to understand:
                        progress, success, and growth often emerge from
                        unglamorous beginnings.
                    </p>
                </Styled.MainCard>

                <Styled.SideCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiArchive />
                        </span>
                        <h2>Original archive facts</h2>
                    </div>

                    <div className="metaBlock">
                        <div className="metaRow">
                            <strong>Original title</strong>
                            <span>{originalMeta.title}</span>
                        </div>

                        <div className="metaRow">
                            <strong>Original format</strong>
                            <span>Image-based motivational post</span>
                        </div>

                        <div className="metaRow">
                            <strong>Original date</strong>
                            <span>{originalMeta.date}</span>
                        </div>

                        <div className="metaRow">
                            <strong>Original author</strong>
                            <span>{originalMeta.author}</span>
                        </div>
                    </div>
                </Styled.SideCard>
            </Styled.ContentGrid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTrendingUp />
                    </span>
                    <h2>Refactored reading of the message</h2>
                </div>

                <p>
                    The poster is really about possibility. It argues that
                    current limitations are not always permanent definitions.
                    People can begin from low-confidence, low-resource, or
                    low-status situations and still move into stronger futures.
                </p>

                <p>
                    The message works best when read as encouragement to keep
                    building rather than as blind fantasy. It is not saying that
                    success appears automatically. It is saying that present
                    conditions do not always tell the full story of what is
                    still possible.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Main lessons</h2>
                </div>

                <div className="lessonGrid">
                    {lessons.map((item) => (
                        <article key={item.title} className="lessonCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTarget />
                    </span>
                    <h2>Practical takeaway</h2>
                </div>

                <p>
                    A message like "You can do it" becomes useful only when it
                    leads to action. Otherwise it remains decoration. The better
                    way to use it is to turn it into a working attitude.
                </p>

                <ul className="bulletList">
                    {practicalPoints.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <p>
                    Motivation should not be treated like a permanent fuel tank.
                    It comes and goes. What matters more is whether a person
                    continues with discipline after the emotional moment has
                    faded.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    The original post was a visual reminder that difficult
                    beginnings do not cancel future possibility. This refactored
                    version keeps that original message intact while presenting
                    it with more context, structure, and clarity.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default YouCanDoIt;
