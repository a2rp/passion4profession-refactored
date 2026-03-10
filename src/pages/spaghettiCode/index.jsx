import React from "react";
import {
    FiAlertCircle,
    FiCheckCircle,
    FiClock,
    FiCode,
    FiGitBranch,
    FiLayers,
    FiTool,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const warningSigns = [
    "Code jumps around in a confusing way",
    "Logic is mixed across unrelated sections",
    "Large functions try to do too many things",
    "Naming is unclear or inconsistent",
    "Flow is hard to trace while debugging",
    "Changes in one place break something somewhere else",
];

const cleanupIdeas = [
    "Use clear structure and proper indentation",
    "Break large logic into smaller functions",
    "Use meaningful variable and function names",
    "Reduce unnecessary nesting and repeated code",
    "Keep related logic together",
    "Write comments only where they actually help",
];

const SpaghettiCode = () => {
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
                        Original topic: September 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>What is spaghetti code?</h1>

                <p className="lead">
                    Spaghetti code is a slang term used for source code that is
                    difficult to read, difficult to follow, and difficult to
                    maintain because the logic is tangled together in a messy
                    way. The name comes from the idea that the control flow
                    looks like a bowl of spaghetti - twisted, crossing over
                    itself, and annoying to untangle.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    A program is often called spaghetti code when a human reader
                    struggles to understand what is happening and in what order
                    it is happening. The code may technically run, but it is
                    hard to reason about, hard to debug, and painful to extend.
                </p>

                <p>
                    In short, spaghetti code is not just "bad looking code". It
                    is code whose structure makes understanding and maintenance
                    much harder than it should be.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Common signs of spaghetti code</h2>
                    </div>

                    <ul>
                        {warningSigns.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiGitBranch />
                        </span>
                        <h2>Classic cause</h2>
                    </div>

                    <p>
                        Older discussions often connect spaghetti code with too
                        many <strong>goto</strong> statements, because they can
                        make execution jump all over the place. But spaghetti
                        code is not limited to goto. You can create equally
                        messy code with giant if-else chains, deeply nested
                        logic, duplicated code, or functions doing twenty jobs
                        at once.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Why it is a problem</h2>
                </div>

                <p>
                    Spaghetti code is considered bad practice because it raises
                    the cost of doing almost everything:
                </p>

                <ul>
                    <li>It takes longer to understand the code</li>
                    <li>It is easier to introduce bugs while editing it</li>
                    <li>It is harder to locate the real source of an error</li>
                    <li>It becomes stressful for teams to maintain</li>
                    <li>Future improvements become slower and riskier</li>
                </ul>

                <p>
                    The biggest problem is not ugliness. The biggest problem is
                    loss of control. Once the structure becomes chaotic, even
                    simple changes start feeling like bomb disposal.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Simple mental model</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard bad">
                        <h3>Spaghetti code</h3>
                        <p>
                            One piece of logic depends on another random piece,
                            then jumps to a third place, then mutates shared
                            state, then comes back later and surprises you.
                        </p>
                    </div>

                    <div className="compareCard good">
                        <h3>Clean code</h3>
                        <p>
                            Related logic stays together, steps happen in a
                            sensible order, and each function has a clearer
                            responsibility.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTool />
                    </span>
                    <h2>How spaghetti code usually happens</h2>
                </div>

                <div className="timeline">
                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Quick fixes pile up</strong>
                            <p>
                                Small patches are added again and again without
                                cleaning old logic.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>No structure is enforced</strong>
                            <p>
                                Naming, formatting, file organization, and
                                function boundaries start drifting.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Too much logic lives in one place</strong>
                            <p>
                                Giant functions or giant files become dumping
                                grounds for unrelated work.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Fear of refactoring grows</strong>
                            <p>
                                Since the code is fragile, people become scared
                                to improve it, so the mess survives longer.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Example of spaghetti thinking</h2>
                    </div>

                    <p>
                        Imagine one checkout function that validates the cart,
                        calculates discounts, talks to payment logic, updates
                        inventory, sends emails, formats UI messages, and logs
                        analytics all in one place.
                    </p>

                    <p>
                        That is a recipe for confusion. When one function tries
                        to act like an entire city, traffic gets weird fast.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Cleaner thinking</h2>
                    </div>

                    <p>Break the flow into smaller responsibilities:</p>

                    <ul>
                        <li>Validate input</li>
                        <li>Calculate totals</li>
                        <li>Process payment</li>
                        <li>Update inventory</li>
                        <li>Send confirmation</li>
                    </ul>

                    <p>
                        The work still gets done, but now the logic is easier to
                        trace and test.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTool />
                    </span>
                    <h2>How to reduce spaghetti code</h2>
                </div>

                <ul>
                    {cleanupIdeas.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <p>
                    Older advice often said to always comment more, but comments
                    alone do not fix spaghetti code. Comments can help, but the
                    real improvement comes from better structure. If the code is
                    tangled, a comment is just a label on the noodle pile.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    Spaghetti code means the program structure has become messy
                    enough that understanding and maintenance are harder than
                    they should be. It is dangerous not because it looks ugly,
                    but because it slows down debugging, raises error risk, and
                    makes future changes painful.
                </p>

                <p>
                    Good structure, smaller units of logic, and readable code
                    organization are the best antidotes.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Spaghetti code is tangled, hard-to-follow source code. It
                    often grows from rushed fixes, weak structure, and too much
                    logic packed into the same place. The cure is not magic - it
                    is clear organization, smaller responsibilities, and
                    disciplined refactoring.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default SpaghettiCode;
