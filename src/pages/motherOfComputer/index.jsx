import React from "react";
import {
    FiAward,
    FiClock,
    FiStar,
    FiHash,
    FiActivity,
    FiGlobe,
    FiCheckCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const achievements = [
    {
        title: "Mental calculation speed",
        text: "Shakuntala Devi became famous for solving large numerical problems mentally with extraordinary speed and accuracy.",
        icon: <FiActivity />,
    },
    {
        title: "Public demonstrations",
        text: "She performed calculation challenges in front of audiences and institutions, which helped build her reputation around the world.",
        icon: <FiGlobe />,
    },
    {
        title: "Recognition as 'Human Computer'",
        text: "Because of her unusual mathematical ability, she became widely known by the title 'Human Computer'.",
        icon: <FiAward />,
    },
];

const highlights = [
    "Born on November 4, 1939, in Bangalore, India",
    "Known internationally for fast and accurate mental calculations",
    "Solved very large arithmetic and root problems without using a machine",
    "Became one of the most famous mathematical prodigies from India",
];

const MotherOfComputer = () => {
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
                        Original topic: January 20, 2013
                    </span>

                    <ShareButtons />
                </div>

                <h1>Mother of Computer</h1>

                <p className="lead">
                    This archive note is about <strong>Shakuntala Devi</strong>,
                    the legendary Indian mathematical prodigy who became famous
                    around the world for her extraordinary mental calculation
                    ability. She is widely remembered by the title{" "}
                    <strong>'Human Computer'</strong>.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Who was Shakuntala Devi?</h2>
                </div>

                <p>
                    Shakuntala Devi was an Indian mathematician, writer, and
                    mental calculator known for solving difficult numerical
                    problems without using calculators or computers. Her speed
                    and confidence made her one of the most memorable public
                    figures associated with mathematics in India.
                </p>

                <p>
                    She was born in Bangalore and became famous for performing
                    impressive mathematical demonstrations in different parts of
                    the world.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHash />
                        </span>
                        <h2>Why people called her 'Human Computer'</h2>
                    </div>

                    <p>
                        She earned this title because she could perform
                        difficult calculations mentally at remarkable speed.
                        Long before pocket calculators became common, her skills
                        felt almost machine-like to the public.
                    </p>

                    <ul>
                        <li>Fast mental multiplication</li>
                        <li>Large-number calculations</li>
                        <li>Root extraction</li>
                        <li>Public problem-solving demonstrations</li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAward />
                        </span>
                        <h2>Why this matters</h2>
                    </div>

                    <p>
                        Her story is important not because she was literally the
                        'mother' of computers in a technical history sense, but
                        because she became a symbol of human intelligence,
                        memory, and numerical brilliance.
                    </p>

                    <p>
                        In everyday admiration, people used titles like this to
                        express respect for her exceptional talent.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiActivity />
                    </span>
                    <h2>Famous demonstrations</h2>
                </div>

                <p>
                    Shakuntala Devi became widely known through public events in
                    which she answered difficult mathematical challenges very
                    quickly. These demonstrations often involved very large
                    numbers and were designed to show the power of mental
                    calculation.
                </p>

                <div className="timeline">
                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Cube root challenge</strong>
                            <p>
                                She reportedly competed in speed-based
                                calculation challenges and impressed audiences
                                by responding faster than expected.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>23rd root demonstration</strong>
                            <p>
                                She became especially famous for mentally
                                solving a very large-number root problem, which
                                was considered astonishing for the time.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Large multiplication challenge</strong>
                            <p>
                                She also demonstrated rapid multiplication of
                                large numbers in public settings, further
                                strengthening her reputation.
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
                    <h2>Why she became a legend</h2>
                </div>

                <p>
                    Shakuntala Devi stood out because she brought mathematics
                    into public imagination. To many people, numbers feel cold,
                    dry, and slightly evil before tea. She made them feel alive,
                    dramatic, and human.
                </p>

                <p>
                    Her fame was not only about solving numbers. It was also
                    about confidence, memory, stage presence, and the ability to
                    make people feel amazed by the human mind.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiStar />
                    </span>
                    <h2>Key highlights</h2>
                </div>

                <ul>
                    {highlights.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAward />
                    </span>
                    <h2>Why this topic appears in the archive</h2>
                </div>

                <p>
                    In the original blog context, this topic was written as a
                    short appreciation note. In this refactored version, it is
                    better understood as a tribute to an Indian legend of mental
                    mathematics rather than a formal computing-history title.
                </p>

                <p>
                    So the spirit of the old post remains the same: respect for
                    exceptional human talent.
                </p>
            </Styled.SectionCard>

            <Styled.AchievementGrid>
                {achievements.map((item) => (
                    <article key={item.title} className="achievementCard">
                        <div className="achievementIcon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </article>
                ))}
            </Styled.AchievementGrid>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Shakuntala Devi was a remarkable Indian mathematical prodigy
                    celebrated for her extraordinary mental calculation skills.
                    She became widely known as the 'Human Computer' and remains
                    an inspiring symbol of intelligence, discipline, and
                    confidence.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default MotherOfComputer;
