import React from "react";
import {
    FiGrid,
    FiClock,
    FiLayers,
    FiCheckCircle,
    FiBookOpen,
    FiCpu,
    FiZap,
    FiBox,
} from "react-icons/fi";
import { Styled } from "./styled";
import image from "./images/image.png";
import ShareButtons from "../../components/shareButton";

const classificationCards = [
    {
        title: "Metals",
        text: "Most elements in the periodic table are metals. They usually conduct heat and electricity well, and many are shiny, strong, and malleable.",
    },
    {
        title: "Nonmetals",
        text: "Nonmetals usually do not conduct electricity well. Many important life-related elements such as oxygen, carbon, and nitrogen are nonmetals.",
    },
    {
        title: "Metalloids",
        text: "Metalloids have properties between metals and nonmetals. Silicon is a famous example because it is widely used in electronics.",
    },
];

const blockCards = [
    {
        title: "s-block",
        text: "Contains elements whose outer electrons enter the s orbital. These include Group 1 and Group 2 elements.",
    },
    {
        title: "p-block",
        text: "Contains many common nonmetals, metalloids, and some metals. This block includes Groups 13 to 18.",
    },
    {
        title: "d-block",
        text: "Contains transition metals such as iron, copper, and zinc. These are often important in industry and engineering.",
    },
    {
        title: "f-block",
        text: "Contains lanthanides and actinides, usually shown separately at the bottom of the table to keep the layout compact.",
    },
];

const sampleElements = [
    {
        symbol: "H",
        name: "Hydrogen",
        note: "The lightest element and the most abundant element in the universe.",
    },
    {
        symbol: "O",
        name: "Oxygen",
        note: "Essential for respiration and very common in water and the atmosphere.",
    },
    {
        symbol: "C",
        name: "Carbon",
        note: "A fundamental element in life, fuels, and many materials.",
    },
    {
        symbol: "Fe",
        name: "Iron",
        note: "An important metal used in construction, machines, and tools.",
    },
    {
        symbol: "Si",
        name: "Silicon",
        note: "A key semiconductor material used in chips and electronics.",
    },
    {
        symbol: "Au",
        name: "Gold",
        note: "Known for conductivity, corrosion resistance, and use in jewelry and electronics.",
    },
];

const ThePeriodicTable = () => {
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
                        Original topic: August 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>The Periodic Table</h1>

                <p className="lead">
                    The periodic table is a structured arrangement of chemical
                    elements. It organizes elements in a way that helps us
                    understand their properties, patterns, and relationships.
                    Instead of being a random chart of science symbols, it is
                    one of the most useful maps in chemistry and modern
                    technology.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <img src={image} alt="" />
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    The periodic table is a table of all known chemical
                    elements. Each element is placed according to its atomic
                    number, which is the number of protons in its nucleus.
                </p>

                <p>
                    Elements with similar chemical behavior appear in similar
                    columns, which makes the table extremely useful for learning
                    patterns instead of memorizing isolated facts like a sleep
                    deprived goblin.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiGrid />
                        </span>
                        <h2>How the table is arranged</h2>
                    </div>

                    <ul>
                        <li>
                            Elements are arranged by increasing atomic number
                        </li>
                        <li>Horizontal rows are called periods</li>
                        <li>Vertical columns are called groups</li>
                        <li>
                            Elements in the same group often have similar outer
                            electron patterns
                        </li>
                        <li>
                            Similar electron patterns often lead to similar
                            chemical properties
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>Why it matters</h2>
                    </div>

                    <p>
                        The periodic table helps predict how elements behave,
                        combine, react, and form compounds.
                    </p>

                    <ul>
                        <li>Useful in chemistry</li>
                        <li>Useful in physics and materials science</li>
                        <li>Important in electronics and engineering</li>
                        <li>Helpful in medicine, energy, and manufacturing</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Periods and groups</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>Periods</h3>
                        <p>
                            Periods are the horizontal rows. Moving from left to
                            right across a period changes the atomic number one
                            by one.
                        </p>
                        <span>
                            Example: Elements in the same period may have the
                            same number of electron shells.
                        </span>
                    </div>

                    <div className="compareCard">
                        <h3>Groups</h3>
                        <p>
                            Groups are the vertical columns. Elements in the
                            same group often behave in similar ways because
                            their outer electron arrangement is similar.
                        </p>
                        <span>
                            Example: Group 1 elements are very reactive metals.
                        </span>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBox />
                    </span>
                    <h2>Major classifications</h2>
                </div>

                <Styled.CardGrid>
                    {classificationCards.map((item) => (
                        <article key={item.title} className="miniCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </Styled.CardGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>Blocks of the periodic table</h2>
                </div>

                <p>
                    The periodic table is also divided into blocks based on the
                    type of orbital being filled by electrons. This is one of
                    the deep patterns behind the layout.
                </p>

                <Styled.CardGrid>
                    {blockCards.map((item) => (
                        <article key={item.title} className="miniCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </Styled.CardGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiZap />
                    </span>
                    <h2>Examples of familiar elements</h2>
                </div>

                <Styled.ElementGrid>
                    {sampleElements.map((item) => (
                        <article key={item.symbol} className="elementCard">
                            <div className="symbol">{item.symbol}</div>
                            <h3>{item.name}</h3>
                            <p>{item.note}</p>
                        </article>
                    ))}
                </Styled.ElementGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Why the periodic table is powerful</h2>
                </div>

                <p>
                    The real beauty of the periodic table is that it is not just
                    a list. It is a pattern system. Once you understand that
                    elements are arranged by atomic number and grouped by
                    recurring properties, the table becomes a tool for
                    prediction.
                </p>

                <ul>
                    <li>You can compare reactivity</li>
                    <li>You can identify metals and nonmetals</li>
                    <li>You can understand bonding trends</li>
                    <li>
                        You can connect chemistry to electronics, energy, and
                        materials
                    </li>
                </ul>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    The periodic table is a structured arrangement of chemical
                    elements based on atomic number. It reveals patterns in
                    chemical behavior and helps us understand matter in a more
                    organized way. It is one of the most important reference
                    systems in science.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ThePeriodicTable;
