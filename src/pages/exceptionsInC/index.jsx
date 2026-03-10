import React from "react";
import {
    FiAlertCircle,
    FiCheckCircle,
    FiCode,
    FiCornerDownRight,
    FiLayers,
    FiClock,
    FiRefreshCw,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const flowSteps = [
    {
        title: "Save execution state with setjmp",
        text: "The program stores its current execution context inside a jmp_buf object. On the first call, setjmp usually returns 0.",
    },
    {
        title: "Run normal code",
        text: "After saving the context, the program continues normally and may call other functions.",
    },
    {
        title: "Trigger longjmp later",
        text: "If something goes wrong, longjmp can jump back to the saved point and make setjmp return a non-zero value.",
    },
    {
        title: "Handle the alternate path",
        text: "The code can check the return value from setjmp and run an error-handling branch.",
    },
];

const pitfalls = [
    "This is not real language-level exception handling like try/catch in C++ or Java.",
    "It can make control flow harder to read if overused.",
    "Automatic local variables may not behave as expected after longjmp unless used carefully.",
    "Jumping across complex function logic can skip cleanup steps.",
    "It should be used only when there is a strong reason, not as default everyday style.",
];

const ExceptionsInC = () => {
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
                        Original topic: December 15, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Exceptions in C</h1>

                <p className="lead">
                    C does not provide built-in exception handling like modern
                    languages that use try, catch, and throw. However, C does
                    provide <strong>setjmp</strong> and <strong>longjmp</strong>
                    , which can be used to build exception-like control flow in
                    certain situations.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Important clarification</h2>
                </div>

                <p>
                    The title "Exceptions in C" sounds like C has a real
                    exception system. It does not. What C gives you is a low
                    level mechanism that lets you jump back to an earlier saved
                    execution point.
                </p>

                <p>
                    So the more accurate statement is this: C can simulate some
                    exception-like behavior by using <strong>setjmp</strong> and{" "}
                    <strong>longjmp</strong>.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>What are setjmp and longjmp?</h2>
                    </div>

                    <p>
                        These are standard C library functions declared in the
                        header:
                    </p>

                    <pre>
                        <code>{`#include <setjmp.h>`}</code>
                    </pre>

                    <p>
                        They work with a special object called{" "}
                        <strong>jmp_buf</strong>, which stores enough program
                        state to let execution jump back to a previously saved
                        point.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCode />
                        </span>
                        <h2>Core idea</h2>
                    </div>

                    <ul>
                        <li>
                            <strong>setjmp</strong> saves the current execution
                            context
                        </li>
                        <li>
                            <strong>longjmp</strong> returns execution to that
                            saved point
                        </li>
                        <li>
                            The code checks whether it is the first return or a
                            jump-based return
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiRefreshCw />
                    </span>
                    <h2>How the mechanism works</h2>
                </div>

                <Styled.FlowGrid>
                    {flowSteps.map((step, index) => (
                        <article key={step.title} className="flowCard">
                            <div className="flowTop">
                                <span className="flowNo">{index + 1}</span>
                                <h3>{step.title}</h3>
                            </div>
                            <p>{step.text}</p>
                        </article>
                    ))}
                </Styled.FlowGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Basic example</h2>
                </div>

                <p>
                    Here is a small example that demonstrates the idea clearly.
                </p>

                <pre>
                    <code>{`#include <stdio.h>
#include <setjmp.h>

jmp_buf jb;

void f2() {
    longjmp(jb, 1);
}

void f1() {
    if (setjmp(jb) == 0) {
        printf("first time\\n");
        f2();
    } else {
        printf("second time\\n");
    }
}`}</code>
                </pre>

                <div className="explainBox">
                    <h3>What happens here?</h3>

                    <ul>
                        <li>
                            <strong>setjmp(jb)</strong> runs for the first time
                            and returns 0
                        </li>
                        <li>The program prints "first time"</li>
                        <li>
                            Function <strong>f2</strong> calls{" "}
                            <strong>longjmp(jb, 1)</strong>
                        </li>
                        <li>
                            Execution jumps back to the earlier{" "}
                            <strong>setjmp</strong> point
                        </li>
                        <li>
                            Now <strong>setjmp</strong> behaves as if it
                            returned <strong>1</strong>
                        </li>
                        <li>The program enters the else block</li>
                        <li>The program prints "second time"</li>
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCornerDownRight />
                    </span>
                    <h2>Mental model</h2>
                </div>

                <p>
                    You can think of <strong>setjmp</strong> as placing a
                    bookmark in program execution. Later,{" "}
                    <strong>longjmp</strong> says: "go back to that bookmark and
                    continue from there, but this time pretend setjmp returned a
                    non-zero value."
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>First return</h3>
                        <p>
                            <strong>setjmp</strong> returns 0 and normal code
                            continues.
                        </p>
                    </div>

                    <div className="compareCard">
                        <h3>Jump return</h3>
                        <p>
                            After <strong>longjmp</strong>, execution returns to
                            the saved point and <strong>setjmp</strong> appears
                            to return a non-zero value.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Where this can be useful</h2>
                    </div>

                    <ul>
                        <li>Recovering from deep nested function failures</li>
                        <li>Escaping back to a known safe point</li>
                        <li>
                            Building small internal error-handling frameworks
                        </li>
                        <li>
                            Special low-level or embedded code patterns in some
                            systems
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Why you should be careful</h2>
                    </div>

                    <ul>
                        {pitfalls.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>What this is not</h2>
                </div>

                <p>
                    This is not the same as structured exception handling in
                    languages like C++, Java, or C#. Those languages have
                    built-in syntax and rules for exception propagation,
                    catching, stack unwinding, and cleanup behavior.
                </p>

                <p>
                    In plain C, you are manually controlling jumps. That gives
                    power, but also more ways to produce confusing code if used
                    carelessly.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    C does not have built-in exceptions, but it can mimic some
                    exception-like behavior through <strong>setjmp</strong> and{" "}
                    <strong>longjmp</strong>. These functions let you save an
                    execution point and jump back to it later, which can be used
                    for certain error-handling patterns. Useful, yes. Magical,
                    no. Slightly dangerous if abused, absolutely.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ExceptionsInC;
