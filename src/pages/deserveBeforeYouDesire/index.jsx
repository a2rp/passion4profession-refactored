import React from "react";
import {
    FiArchive,
    FiClock,
    FiAward,
    FiTrendingUp,
    FiTarget,
    FiBriefcase,
    FiCheckCircle,
    FiMail,
} from "react-icons/fi";
import { Styled } from "./styled";
import image from "./images/image.png";
import ShareButtons from "../../components/shareButton";

const keyIdeas = [
    {
        icon: <FiTarget />,
        title: "The work matters, but the quality matters more",
        text: "What you do has importance, but how well you do it often shapes your long-term identity and growth.",
    },
    {
        icon: <FiBriefcase />,
        title: "Career labels are not everything",
        text: "People often chase job titles, famous companies, and prestige, but consistent effort usually matters more than labels.",
    },
    {
        icon: <FiTrendingUp />,
        title: "Excellence creates opportunity",
        text: "When a person performs sincerely and skillfully, that quality tends to create trust, recognition, and progress over time.",
    },
    {
        icon: <FiAward />,
        title: "First deserve, then desire",
        text: "Wanting success is easy. Becoming worthy of success through discipline and good work is the harder and more important part.",
    },
];

const reflectionPoints = [
    "Do not depend only on the brand name of a company to define your future.",
    "Do not assume that only a few professions deserve respect.",
    "Do not underestimate the power of doing ordinary work extraordinarily well.",
    "Do not wait for the perfect place before giving your best effort.",
    "Let your standard of work become your identity.",
];

const DeserveBeforeYouDesire = () => {
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

                <h1>Deserve Before You Desire</h1>

                <p className="lead">
                    This note is about a simple but powerful idea: before asking
                    for success, status, recognition, or a dream position, first
                    become worthy of them through the quality of your work.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard className="imageWrapper">
                <img src={image} alt="" />
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Refactored idea</h2>
                </div>

                <p>
                    The original post described a seminar where a successful CEO
                    was trying to explain something important to students. His
                    message was not that work itself is meaningless. His real
                    point was that the way you perform your work matters more
                    than the prestige people attach to it.
                </p>

                <p>
                    Many students were focused on "chosen" professions, famous
                    companies, and ideal career paths. But the deeper lesson was
                    this: whether you get your dream role immediately or not,
                    your seriousness, discipline, and excellence still matter.
                </p>
            </Styled.SectionCard>

            <Styled.StoryCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBriefcase />
                    </span>
                    <h2>The message behind the seminar story</h2>
                </div>

                <div className="storyFlow">
                    <div className="storyStep">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>A CEO speaks to students</strong>
                            <p>
                                He tries to explain that success depends less on
                                the label of the work and more on how well the
                                work is done.
                            </p>
                        </div>
                    </div>

                    <div className="storyStep">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>Students raise doubts</strong>
                            <p>
                                Some believe that only a few professions are
                                truly valuable. Some think that only big
                                companies can guarantee a better future.
                            </p>
                        </div>
                    </div>

                    <div className="storyStep">
                        <span className="stepNo">3</span>
                        <div>
                            <strong>The core misunderstanding appears</strong>
                            <p>
                                They are treating status as the source of
                                success, while the CEO is trying to show that
                                excellence in action is the real source.
                            </p>
                        </div>
                    </div>

                    <div className="storyStep">
                        <span className="stepNo">4</span>
                        <div>
                            <strong>The lesson becomes clear</strong>
                            <p>
                                Some people start exactly where they want. Many
                                do not. But in either case, what finally builds
                                reputation is the quality of what they do.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.StoryCard>

            <Styled.Grid>
                {keyIdeas.map((item) => (
                    <Styled.InfoCard key={item.title}>
                        <div className="topRow">
                            <span className="miniIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                        </div>

                        <p>{item.text}</p>
                    </Styled.InfoCard>
                ))}
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAward />
                    </span>
                    <h2>What the title really means</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard less">
                        <h3>Desire without deserving</h3>
                        <p>
                            Wanting recognition, rewards, or a dream future
                            without building the discipline and capability that
                            support them.
                        </p>
                    </div>

                    <div className="compareCard more">
                        <h3>Deserve before you desire</h3>
                        <p>
                            Work so well, improve so seriously, and act so
                            consistently that success becomes a natural result
                            rather than a fantasy sticker on the wall.
                        </p>
                    </div>
                </div>

                <p>
                    The phrase does not mean you should stop dreaming. It means
                    your dreams should be matched by the effort, character, and
                    competence needed to hold them.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTarget />
                    </span>
                    <h2>Practical reflection</h2>
                </div>

                <ul className="focusList">
                    {reflectionPoints.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMail />
                    </span>
                    <h2>The photograph in the original story</h2>
                </div>

                <p>
                    The original post mentions that the CEO later mailed a
                    photograph to students to express his point more clearly.
                    Even without that image here, the message is still readable:
                    greatness is remembered not only because of position, but
                    because of the standard of performance behind it.
                </p>

                <p>
                    In plain words, if you give your best to what you do, you
                    increase the chance of getting the best out of it.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final takeaway</h2>
                <p>
                    Success is not built only by choosing the most glamorous
                    road. It is built by doing meaningful work with seriousness,
                    skill, patience, and consistency. Before demanding a great
                    future, build the habits that make you worthy of one.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default DeserveBeforeYouDesire;
