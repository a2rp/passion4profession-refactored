import React from "react";
import {
    FiCpu,
    FiGrid,
    FiHash,
    FiLayers,
    FiCheckCircle,
    FiRepeat,
    FiBox,
    FiClock,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const binaryCounting = [
    "0",
    "1",
    "10",
    "11",
    "100",
    "101",
    "110",
    "111",
    "1000",
    "1001",
    "1010",
    "1011",
    "1100",
    "1101",
    "1110",
    "1111",
];

const hexRows = [
    { hex: "0", dec: "0", bin: "0000" },
    { hex: "1", dec: "1", bin: "0001" },
    { hex: "2", dec: "2", bin: "0010" },
    { hex: "3", dec: "3", bin: "0011" },
    { hex: "4", dec: "4", bin: "0100" },
    { hex: "5", dec: "5", bin: "0101" },
    { hex: "6", dec: "6", bin: "0110" },
    { hex: "7", dec: "7", bin: "0111" },
    { hex: "8", dec: "8", bin: "1000" },
    { hex: "9", dec: "9", bin: "1001" },
    { hex: "A", dec: "10", bin: "1010" },
    { hex: "B", dec: "11", bin: "1011" },
    { hex: "C", dec: "12", bin: "1100" },
    { hex: "D", dec: "13", bin: "1101" },
    { hex: "E", dec: "14", bin: "1110" },
    { hex: "F", dec: "15", bin: "1111" },
];

const IntroToBinaryNumbers = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiBox />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Introduction to Binary Numbers</h1>

                <p className="lead">
                    Binary is the number system computers use internally to
                    store and process data. It uses only two digits,{" "}
                    <strong>0</strong> and <strong>1</strong>, because digital
                    electronics naturally work with two states such as on and
                    off, high and low, or charged and uncharged.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>Why computers use binary</h2>
                </div>

                <p>
                    Computers are built from digital electronic components.
                    These components usually behave in two clear states. For
                    example, a circuit may be treated as on or off. Because of
                    this, binary is a natural fit for computers.
                </p>

                <p>
                    Different storage technologies represent these two states in
                    different ways:
                </p>

                <ul>
                    <li>Memory can use stored electric charge</li>
                    <li>Hard disks can use magnetic orientation</li>
                    <li>
                        Optical media can use reflective and non-reflective
                        areas
                    </li>
                    <li>Logic circuits can use high and low voltage levels</li>
                </ul>

                <p>
                    In all of these cases, the machine only needs a reliable way
                    to distinguish between two states. That becomes binary:
                    <strong> 1 </strong> and <strong> 0</strong>.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHash />
                        </span>
                        <h2>Decimal system</h2>
                    </div>

                    <p>
                        Humans usually use the decimal system, also called base
                        10.
                    </p>

                    <ul>
                        <li>It has 10 digits: 0 to 9</li>
                        <li>Each place value is 10 times the previous one</li>
                        <li>Example: 365 = 3 × 100 + 6 × 10 + 5 × 1</li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiGrid />
                        </span>
                        <h2>Binary system</h2>
                    </div>

                    <p>Binary is base 2, so it uses only two digits.</p>

                    <ul>
                        <li>Digits: 0 and 1</li>
                        <li>Each place value is 2 times the previous one</li>
                        <li>Columns go like 1, 2, 4, 8, 16, 32, 64, 128...</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>How binary counting works</h2>
                </div>

                <p>
                    Binary counting follows the same logic as decimal counting,
                    but with fewer symbols. Once you run out of digits, you add
                    a new column to the left.
                </p>

                <div className="countBox">
                    {binaryCounting.map((item) => (
                        <span key={item} className="countChip">
                            {item}
                        </span>
                    ))}
                </div>

                <p>
                    In decimal, after 9 comes 10. In binary, after 1 comes 10.
                    Then 11, then 100, then 101, and so on.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiRepeat />
                    </span>
                    <h2>Binary to decimal conversion</h2>
                </div>

                <p>
                    To convert binary to decimal, multiply each binary digit by
                    its column value and add the results.
                </p>

                <div className="mathCard">
                    <h3>Example: 101101</h3>
                    <p>Column values: 32, 16, 8, 4, 2, 1</p>
                    <p>
                        Expanded form: 1 × 32 + 0 × 16 + 1 × 8 + 1 × 4 + 0 × 2 +
                        1 × 1
                    </p>
                    <p>
                        Result: <strong>32 + 8 + 4 + 1 = 45</strong>
                    </p>
                </div>

                <p>
                    So the binary number <strong>101101</strong> is equal to the
                    decimal number <strong>45</strong>.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Decimal to binary idea</h2>
                </div>

                <p>
                    To convert decimal to binary, keep checking which powers of
                    2 fit into the number. If a place value is used, write 1. If
                    not, write 0.
                </p>

                <div className="mathCard">
                    <h3>Example: 45</h3>
                    <p>45 = 32 + 8 + 4 + 1</p>
                    <p>Column values: 32, 16, 8, 4, 2, 1</p>
                    <p>Used columns: 32, 8, 4, 1</p>
                    <p>
                        Binary: <strong>101101</strong>
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Why binary is good for machines</h2>
                    </div>

                    <ul>
                        <li>Simple to represent physically</li>
                        <li>Reliable for digital circuits</li>
                        <li>Easy for logic operations</li>
                        <li>Well suited for arithmetic and storage</li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiClock />
                        </span>
                        <h2>Why binary is not great for humans</h2>
                    </div>

                    <ul>
                        <li>Longer to read and write</li>
                        <li>Harder to scan quickly</li>
                        <li>
                            Even small decimal numbers may look long in binary
                        </li>
                        <li>
                            Example: 76 in decimal becomes 1001100 in binary
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBox />
                    </span>
                    <h2>Why hexadecimal exists</h2>
                </div>

                <p>
                    Hexadecimal is a more compact way to represent binary. It
                    uses base 16, which means it has 16 symbols:
                </p>

                <div className="inlineCode">
                    0 1 2 3 4 5 6 7 8 9 A B C D E F
                </div>

                <p>
                    Since 16 is equal to 2 × 2 × 2 × 2, one hexadecimal digit
                    maps exactly to 4 binary digits. That makes conversion very
                    convenient.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGrid />
                    </span>
                    <h2>Hexadecimal reference table</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Hex</th>
                                <th>Decimal</th>
                                <th>Binary</th>
                            </tr>
                        </thead>

                        <tbody>
                            {hexRows.map((row) => (
                                <tr key={row.hex}>
                                    <td>{row.hex}</td>
                                    <td>{row.dec}</td>
                                    <td>{row.bin}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiRepeat />
                    </span>
                    <h2>Hex to binary and binary to hex</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>Hex to binary</h3>
                        <p>
                            Replace each hexadecimal digit with its 4-bit binary
                            equivalent.
                        </p>
                        <div className="miniExample">
                            <strong>8F</strong> → <strong>1000 1111</strong>
                        </div>
                    </div>

                    <div className="compareCard">
                        <h3>Binary to hex</h3>
                        <p>
                            Split the binary number into groups of 4 digits from
                            the right. Add leading zeros if needed.
                        </p>
                        <div className="miniExample">
                            <strong>110101</strong> → <strong>0011 0101</strong>{" "}
                            → <strong>35</strong>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Practical summary</h2>
                </div>

                <ul>
                    <li>
                        Computers use binary because hardware naturally supports
                        two states
                    </li>
                    <li>Binary uses only 0 and 1</li>
                    <li>Each binary place value doubles as you move left</li>
                    <li>
                        Hexadecimal is a shorter human-friendly form of binary
                    </li>
                    <li>1 hex digit = 4 binary digits</li>
                </ul>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Binary is the foundation of digital computing. It lets
                    machines store and process information using two-state
                    electronics. Decimal is better for humans, binary is better
                    for hardware, and hexadecimal acts like a friendly diplomat
                    between the two.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default IntroToBinaryNumbers;
