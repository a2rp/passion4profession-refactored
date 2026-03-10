import React from "react";
import {
    FiAlertCircle,
    FiBookOpen,
    FiCheckCircle,
    FiClock,
    FiHash,
    FiHelpCircle,
    FiXCircle,
    FiImage,
} from "react-icons/fi";
import { Styled } from "./styled";
import originalPostImage from "./images/image.png";
import ShareButtons from "../../components/shareButton";

const ZeroDividedByZeroEqualsTwo = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiBookOpen />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 21, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>0 / 0 = 2 ?</h1>

                <p className="lead">
                    The original archive post presented a handwritten claim that
                    <strong> 0 / 0 = 2</strong>. It is an eye-catching puzzle,
                    but mathematically the result is not correct. In standard
                    arithmetic, <strong>0 / 0 does not equal 2</strong>. It is
                    an <strong>indeterminate form</strong>.
                </p>

                <div className="heroCallout">
                    <span className="calloutIcon">
                        <FiXCircle />
                    </span>

                    <div>
                        <strong>Core correction</strong>
                        <p>
                            0 / 0 is not 2, not 1, and not any single fixed
                            number.
                        </p>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiImage />
                    </span>
                    <h2>Original archive post</h2>
                </div>

                <p>
                    The original blog entry was centered around this handwritten
                    image. The left side presents it like a bold challenge, and
                    the right side shows a step-by-step algebra trick that ends
                    with the boxed claim:
                    <strong> 0 / 0 = 2</strong>.
                </p>

                <div className="imageWrapper">
                    <img
                        src={originalPostImage}
                        alt="Original handwritten blog post claiming that 0 divided by 0 equals 2"
                        loading="lazy"
                    />
                </div>

                <p className="caption">
                    Original handwritten image from the 2012 blog post.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple answer</h2>
                </div>

                <p>
                    Division asks a reverse question:
                    <strong>
                        {" "}
                        "What number, when multiplied by the divisor, gives the
                        dividend?"
                    </strong>
                </p>

                <p>
                    So if we ask:
                    <strong> 0 / 0 = x</strong>, then we are really asking:
                    <strong> 0 × x = 0</strong>
                </p>

                <p>
                    But this creates a problem. Many values of{" "}
                    <strong>x</strong> satisfy that equation.
                </p>

                <div className="equationBox">
                    <div>0 × 1 = 0</div>
                    <div>0 × 2 = 0</div>
                    <div>0 × 10 = 0</div>
                    <div>0 × 999 = 0</div>
                </div>

                <p>
                    Since there is no unique answer, mathematics does not allow
                    us to say that <strong>0 / 0 = 2</strong>. The expression is
                    called <strong>indeterminate</strong>.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHash />
                        </span>
                        <h2>Why normal division works</h2>
                    </div>

                    <p>
                        In ordinary division, there is usually one clear answer.
                    </p>

                    <ul>
                        <li>8 / 2 = 4 because 2 × 4 = 8</li>
                        <li>12 / 3 = 4 because 3 × 4 = 12</li>
                        <li>15 / 5 = 3 because 5 × 3 = 15</li>
                    </ul>

                    <p>
                        Each of these has one meaningful result, so division is
                        well-defined there.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Why 0 / 0 breaks the pattern</h2>
                    </div>

                    <p>
                        The moment both numbers are zero, the reverse-multiply
                        idea stops giving one unique answer.
                    </p>

                    <ul>
                        <li>0 × 1 = 0</li>
                        <li>0 × 2 = 0</li>
                        <li>0 × 500 = 0</li>
                        <li>0 × any finite number = 0</li>
                    </ul>

                    <p>
                        That is why <strong>0 / 0</strong> is not equal to one
                        single value.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiHelpCircle />
                    </span>
                    <h2>Indeterminate vs undefined</h2>
                </div>

                <p>These two ideas are related, but not identical.</p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>1 / 0</h3>
                        <p>
                            Usually called <strong>undefined</strong> in basic
                            arithmetic.
                        </p>
                        <span>
                            There is no real number that works as an answer.
                        </span>
                    </div>

                    <div className="compareCard">
                        <h3>0 / 0</h3>
                        <p>
                            Called <strong>indeterminate</strong>.
                        </p>
                        <span>
                            Too many values seem possible, so there is no single
                            valid answer.
                        </span>
                    </div>
                </div>

                <p>
                    So both are problematic, but for different reasons. Math is
                    annoyingly precise there, and that precision matters.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBookOpen />
                    </span>
                    <h2>Where the handwritten trick goes wrong</h2>
                </div>

                <p>
                    The handwritten proof tries to transform the expression step
                    by step until it reaches 2. The hidden problem is that the
                    algebra uses quantities that become zero in the denominator.
                </p>

                <div className="reasoningBox">
                    <div className="reasonStep">100 - 100 = 0</div>
                    <div className="reasonStep">10 - 10 = 0</div>
                    <div className="reasonStep">
                        Dividing by these is dividing by zero
                    </div>
                </div>

                <p>
                    Once division by zero enters the calculation, the argument
                    becomes invalid. After that, the result can be made to look
                    like many absurd things. That is the trap.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Why someone may think 0 / 0 = 2</h2>
                </div>

                <p>A person may reason like this:</p>

                <div className="reasoningBox">
                    <div className="reasonStep">0 ÷ 0 = x</div>
                    <div className="reasonStep">So 0 = 0 × x</div>
                    <div className="reasonStep">If x = 2, then 0 = 0</div>
                </div>

                <p>
                    That part is true, but it does not prove that the answer is
                    specifically 2.
                </p>

                <p>
                    The exact same logic would also allow 1, 7, 1000, or many
                    other values. Since multiple answers fit, the result is not
                    uniquely defined.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Calculus connection</h2>
                </div>

                <p>
                    In calculus, the form <strong>0 / 0</strong> appears often
                    in limits. There it does not mean the final answer is
                    impossible to study. It means the expression needs more work
                    before a conclusion can be drawn.
                </p>

                <div className="examplePanel">
                    <h3>Example idea</h3>
                    <p>
                        A limit may temporarily produce <strong>0 / 0</strong>,
                        but after simplification the final limit can become a
                        real number.
                    </p>
                </div>

                <p>
                    So in calculus, <strong>0 / 0</strong> is a warning sign
                    that more analysis is needed. It is not proof that the
                    result is 2 or any other fixed value.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Common mistakes to avoid</h2>
                </div>

                <ul>
                    <li>Do not treat 0 / 0 as a normal division problem</li>
                    <li>Do not assume one random value such as 2</li>
                    <li>Do not confuse 0 / 0 with 1 / 0</li>
                    <li>
                        Do not use multiplication by zero to "prove" one unique
                        result
                    </li>
                    <li>
                        Do not allow hidden division by zero inside algebraic
                        manipulation
                    </li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Refactored conclusion</h2>
                </div>

                <p>
                    The original expression <strong>0 / 0 = 2</strong> works as
                    a curiosity hook, but mathematically it is not valid.
                </p>

                <p>
                    The correct explanation is:
                    <strong> 0 / 0 is indeterminate</strong> because it does not
                    produce one unique value.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    The original archive post consisted of a handwritten image
                    claiming <strong>0 / 0 = 2</strong>. In refactored form, the
                    correct explanation is that <strong>0 / 0 is not 2</strong>.
                    It is an indeterminate form, and the handwritten trick fails
                    because it relies on illegal division by zero.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ZeroDividedByZeroEqualsTwo;
