import React from "react";
import {
    FiClock,
    FiCode,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
    FiArrowRight,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const precedenceRows = [
    {
        group: "Primary expression operators",
        operators: "()  []  .  ->  expr++  expr--",
        associativity: "Left to right",
        note: "These are among the highest-priority operators and are evaluated very early.",
    },
    {
        group: "Unary operators",
        operators: "*  &  +  -  !  ~  ++expr  --expr  (typecast)  sizeof",
        associativity: "Right to left",
        note: "Unary operators work on a single operand and bind tightly.",
    },
    {
        group: "Multiplicative operators",
        operators: "*  /  %",
        associativity: "Left to right",
        note: "Multiplication, division, and modulus are evaluated before addition and subtraction.",
    },
    {
        group: "Additive operators",
        operators: "+  -",
        associativity: "Left to right",
        note: "Addition and subtraction happen after multiplicative operations.",
    },
    {
        group: "Shift operators",
        operators: "<<  >>",
        associativity: "Left to right",
        note: "Used for bit shifting and evaluated after additive operators.",
    },
    {
        group: "Relational operators",
        operators: "<  >  <=  >=",
        associativity: "Left to right",
        note: "These compare values and produce true or false style results.",
    },
    {
        group: "Equality operators",
        operators: "==  !=",
        associativity: "Left to right",
        note: "Used to check whether two values are equal or not equal.",
    },
    {
        group: "Bitwise AND",
        operators: "&",
        associativity: "Left to right",
        note: "Bit-level AND operation.",
    },
    {
        group: "Bitwise XOR",
        operators: "^",
        associativity: "Left to right",
        note: "Bit-level exclusive OR operation.",
    },
    {
        group: "Bitwise OR",
        operators: "|",
        associativity: "Left to right",
        note: "Bit-level OR operation.",
    },
    {
        group: "Logical AND",
        operators: "&&",
        associativity: "Left to right",
        note: "Logical AND is lower than bitwise operators.",
    },
    {
        group: "Logical OR",
        operators: "||",
        associativity: "Left to right",
        note: "Logical OR is lower than logical AND.",
    },
    {
        group: "Ternary operator",
        operators: "?:",
        associativity: "Right to left",
        note: "Conditional operator with three parts.",
    },
    {
        group: "Assignment operators",
        operators: "=  +=  -=  *=  /=  %=  >>=  <<=  &=  ^=  |=",
        associativity: "Right to left",
        note: "Assignments happen late in evaluation.",
    },
    {
        group: "Comma operator",
        operators: ",",
        associativity: "Left to right",
        note: "Very low precedence; evaluates expressions from left to right.",
    },
];

const quickExamples = [
    {
        expression: "a = 4 + b * 2",
        explanation:
            "Multiplication happens before addition, so b * 2 is evaluated first, then 4 is added, then the result is assigned to a.",
    },
    {
        expression: "x = y = 10",
        explanation:
            "Assignment operators associate right to left, so y gets 10 first, then x gets the same result.",
    },
    {
        expression: "a + b > c",
        explanation:
            "Addition is evaluated before relational comparison, so a + b is calculated first, then compared with c.",
    },
];

const commonMistakes = [
    "Assuming expressions are always read strictly from left to right",
    "Confusing precedence with associativity",
    "Forgetting that parentheses override default precedence",
    "Writing expressions that are technically correct but hard to read",
    "Relying on memory instead of using clear grouping with parentheses",
];

const CLanguageOperatorPrecedence = () => {
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
                        Original topic: August 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>C Language Operator Precedence</h1>

                <p className="lead">
                    Operator precedence tells us which operator C evaluates
                    first when an expression contains multiple operators.
                    Without precedence rules, even a small expression would turn
                    into a tiny battlefield of confusion.
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
                    In C, an expression can contain many operators such as
                    addition, multiplication, comparison, assignment, and more.
                    Operator precedence decides which of these operators gets
                    applied first.
                </p>

                <p>
                    For example, in the expression{" "}
                    <strong>a = 4 + b * 2</strong>, C does not evaluate{" "}
                    <strong>4 + b</strong> first. Multiplication has higher
                    precedence than addition, so
                    <strong>b * 2</strong> is evaluated first.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>Precedence vs associativity</h2>
                    </div>

                    <p>
                        These two terms are related, but they are not the same.
                    </p>

                    <ul>
                        <li>
                            <strong>Precedence</strong> tells which operator
                            level is stronger
                        </li>
                        <li>
                            <strong>Associativity</strong> tells the direction
                            of evaluation when operators have the same
                            precedence
                        </li>
                    </ul>

                    <p>
                        So precedence answers "which group first" and
                        associativity answers "which side first within that
                        group".
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Very important rule</h2>
                    </div>

                    <p>
                        Parentheses override normal precedence. If you want an
                        expression to be evaluated in a specific order, use
                        parentheses instead of trusting future-you to remember
                        the full chart from memory.
                    </p>

                    <div className="miniExample">
                        <span>Normal</span>
                        <code>a + b * c</code>
                    </div>

                    <div className="miniExample">
                        <span>Forced grouping</span>
                        <code>(a + b) * c</code>
                    </div>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiArrowRight />
                    </span>
                    <h2>Quick example</h2>
                </div>

                <div className="exampleBox">
                    <div className="expression">a = 4 + b * 2</div>

                    <div className="steps">
                        <div className="step">
                            <span className="stepNo">1</span>
                            <p>
                                Evaluate <strong>b * 2</strong> first because
                                multiplication has higher precedence than
                                addition.
                            </p>
                        </div>

                        <div className="step">
                            <span className="stepNo">2</span>
                            <p>
                                Add <strong>4</strong> to that result.
                            </p>
                        </div>

                        <div className="step">
                            <span className="stepNo">3</span>
                            <p>
                                Assign the final value to <strong>a</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Operator precedence chart</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Operator group</th>
                                <th>Operators</th>
                                <th>Associativity</th>
                            </tr>
                        </thead>

                        <tbody>
                            {precedenceRows.map((row) => (
                                <tr key={row.group}>
                                    <td>
                                        <strong>{row.group}</strong>
                                        <span className="note">{row.note}</span>
                                    </td>
                                    <td>
                                        <code>{row.operators}</code>
                                    </td>
                                    <td>{row.associativity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Worked examples</h2>
                </div>

                <div className="exampleGrid">
                    {quickExamples.map((item) => (
                        <article key={item.expression} className="exampleCard">
                            <code>{item.expression}</code>
                            <p>{item.explanation}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Common mistakes</h2>
                    </div>

                    <ul>
                        {commonMistakes.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Best practice</h2>
                    </div>

                    <p>
                        Even if you know the precedence chart, writing clearer
                        expressions is usually better than writing clever ones.
                    </p>

                    <ul>
                        <li>Use parentheses when clarity matters</li>
                        <li>Break long expressions into smaller steps</li>
                        <li>Do not assume every reader remembers the chart</li>
                        <li>
                            Prefer readable code over "look how much I fit into
                            one line"
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    C operator precedence defines the order in which operators
                    are evaluated in an expression. Higher-precedence operators
                    are handled first. If operators share the same precedence,
                    associativity decides the direction. And when in doubt,
                    parentheses are your best friends.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default CLanguageOperatorPrecedence;
