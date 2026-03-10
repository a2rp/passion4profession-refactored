import React from "react";
import {
    FiZap,
    FiCircle,
    FiPlus,
    FiMinus,
    FiActivity,
    FiBatteryCharging,
    FiSliders,
    FiCpu,
    FiCheckCircle,
    FiClock,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const keyTerms = [
    {
        title: "Charge",
        value: "A basic electrical property of matter. Protons are positive and electrons are negative.",
        icon: <FiPlus />,
    },
    {
        title: "Voltage",
        value: "The electrical push or potential difference between two points.",
        icon: <FiZap />,
    },
    {
        title: "Current",
        value: "The flow of electric charge through a conductor.",
        icon: <FiActivity />,
    },
    {
        title: "Resistance",
        value: "The opposition to current flow in a material.",
        icon: <FiSliders />,
    },
];

const examples = [
    {
        title: "Static electricity",
        text: "Rubbing materials together can move electrons from one object to another, creating charge imbalance.",
    },
    {
        title: "Battery",
        text: "Chemical reactions inside a battery separate charges and maintain a voltage difference.",
    },
    {
        title: "Light bulb",
        text: "Current flowing through a bulb converts electrical energy into light and heat.",
    },
];

const IntroToElectricity = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiZap />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Introduction to Electricity</h1>

                <p className="lead">
                    Electricity is one of the most important ideas in science
                    and engineering. It explains how charge behaves, how current
                    flows, why voltage matters, why resistance slows current,
                    and how electrical power does useful work in real devices.
                </p>

                <p className="subLead">
                    This page turns the old archive note into a cleaner and more
                    structured explanation of the core ideas: atom, charge,
                    electric balance, static electricity, voltage, current,
                    resistance, power, and Ohm's law.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCircle />
                    </span>
                    <h2>The atom</h2>
                </div>

                <p>
                    Everything around us is made of atoms. Atoms are the basic
                    building blocks of matter. An atom contains a nucleus at the
                    center, and that nucleus contains protons and usually
                    neutrons. Electrons exist around the nucleus.
                </p>

                <div className="atomGrid">
                    <div className="atomItem">
                        <span className="atomBadge positive">+</span>
                        <div>
                            <strong>Proton</strong>
                            <p>Has a positive charge.</p>
                        </div>
                    </div>

                    <div className="atomItem">
                        <span className="atomBadge neutral">0</span>
                        <div>
                            <strong>Neutron</strong>
                            <p>Has no electric charge.</p>
                        </div>
                    </div>

                    <div className="atomItem">
                        <span className="atomBadge negative">-</span>
                        <div>
                            <strong>Electron</strong>
                            <p>Has a negative charge.</p>
                        </div>
                    </div>
                </div>

                <p>
                    In a stable atom, the number of electrons is usually equal
                    to the number of protons. That keeps the atom electrically
                    balanced overall.
                </p>
            </Styled.SectionCard>

            <Styled.KeyTermSection>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Core electrical terms</h2>
                </div>

                <div className="termGrid">
                    {keyTerms.map((item) => (
                        <article className="termCard" key={item.title}>
                            <div className="termIcon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.value}</p>
                        </article>
                    ))}
                </div>
            </Styled.KeyTermSection>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiPlus />
                        </span>
                        <h2>Electric charge</h2>
                    </div>

                    <p>
                        Charge is the reason electric forces exist. Opposite
                        charges attract, and like charges repel.
                    </p>

                    <ul>
                        <li>Proton and electron attract each other</li>
                        <li>Proton and proton repel each other</li>
                        <li>Electron and electron repel each other</li>
                    </ul>

                    <p>
                        This attraction and repulsion is one of the most
                        fundamental behaviors in electricity.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCpu />
                        </span>
                        <h2>Electric balance</h2>
                    </div>

                    <p>
                        Most ordinary matter has an equal number of protons and
                        electrons, so it has no overall charge.
                    </p>

                    <p>
                        That does not mean charge is absent. It means positive
                        and negative charges are balanced. The charges are still
                        there, just not showing up as a net charge.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMinus />
                    </span>
                    <h2>Static electricity</h2>
                </div>

                <p>
                    Static electricity happens when electrons move from one
                    object to another and create an imbalance of charge. One
                    object may become overall positive, while another becomes
                    overall negative.
                </p>

                <p>
                    A simple example is rubbing two materials together.
                    Electrons can be transferred, and the objects may then
                    attract or repel each other depending on their charge.
                </p>

                <div className="exampleCallout">
                    <strong>Example</strong>
                    <p>
                        If electrons move away from a glass rod and onto silk,
                        the rod becomes more positive and the silk becomes more
                        negative.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiActivity />
                    </span>
                    <h2>Measuring charge</h2>
                </div>

                <p>
                    Electric charge is measured in <strong>coulombs</strong>.
                    One coulomb is a large quantity of charge at the microscopic
                    level because electrons are extremely tiny.
                </p>

                <p>
                    Coulomb's law describes the electric force between charged
                    objects. It says the force becomes stronger when charges are
                    larger and weaker when the distance between them increases.
                </p>

                <div className="formulaBox">
                    <div className="formula">F = kqq' / r²</div>

                    <ul>
                        <li>F = force</li>
                        <li>q and q' = charges</li>
                        <li>r = distance between them</li>
                        <li>k = Coulomb constant</li>
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiZap />
                    </span>
                    <h2>Voltage</h2>
                </div>

                <p>
                    Voltage is the electrical potential difference between two
                    points. It can be thought of as the push that encourages
                    charge to move.
                </p>

                <p>
                    If one place has more charge imbalance than another, a
                    voltage exists between them. Batteries create this kind of
                    difference between their terminals.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>Simple idea</h3>
                        <p>Voltage is the electrical push or pressure.</p>
                    </div>

                    <div className="compareCard">
                        <h3>Mathematical idea</h3>
                        <p>
                            1 volt = 1 joule of energy per 1 coulomb of charge.
                        </p>
                    </div>
                </div>

                <div className="formulaBox compact">
                    <div className="formula">1 Volt = 1 Joule / 1 Coulomb</div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiActivity />
                    </span>
                    <h2>Electric current</h2>
                </div>

                <p>
                    Electric current is the flow of electric charge. In many
                    conductors, especially metals, electrons are able to move
                    more freely than in insulating materials.
                </p>

                <p>
                    When a conductor is connected across a voltage difference,
                    charges begin to move. That movement is current.
                </p>

                <div className="formulaBox compact">
                    <div className="formula">
                        1 ampere = 1 coulomb per second
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBatteryCharging />
                    </span>
                    <h2>Batteries and continuous current</h2>
                </div>

                <p>
                    If charge simply flowed once and stopped, electrical devices
                    would be almost useless. Batteries solve this by using
                    chemical reactions to keep separating charges and maintain a
                    voltage difference.
                </p>

                <p>
                    That is why a flashlight can keep glowing instead of working
                    for a tiny fraction of a second. The battery keeps supplying
                    charge until its chemical energy runs out.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiSliders />
                        </span>
                        <h2>Resistance</h2>
                    </div>

                    <p>
                        Resistance is the opposition to current flow. When
                        electrons move through a conductor, they interact with
                        atoms in the material and lose some energy.
                    </p>

                    <p>
                        This is one reason wires and components can heat up.
                        Resistance is measured in <strong>ohms</strong>.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiZap />
                        </span>
                        <h2>Power</h2>
                    </div>

                    <p>
                        Electrical power tells us how fast electrical energy is
                        being used or converted into another form such as light,
                        motion, or heat.
                    </p>

                    <div className="formulaBox compact">
                        <div className="formula">P = I × V</div>
                    </div>

                    <p>
                        Power is measured in <strong>watts</strong>.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Ohm's law</h2>
                </div>

                <p>
                    Ohm's law connects voltage, current, and resistance. It is
                    one of the most important basic relationships in
                    electricity.
                </p>

                <div className="formulaBox">
                    <div className="formula">V = I × R</div>

                    <ul>
                        <li>V = voltage in volts</li>
                        <li>I = current in amperes</li>
                        <li>R = resistance in ohms</li>
                    </ul>
                </div>

                <div className="exampleCallout">
                    <strong>Example</strong>
                    <p>
                        If you know the voltage and resistance, you can find the
                        current. If you know current and resistance, you can
                        find voltage. This law is the little Swiss army knife of
                        simple circuit calculations.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Real-world examples</h2>
                </div>

                <div className="exampleGrid">
                    {examples.map((item) => (
                        <article className="exampleCard" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Electricity starts with charge. A charge imbalance creates
                    voltage. Voltage can drive current through a conductor.
                    Resistance opposes that current. Power describes how fast
                    energy is used, and Ohm's law helps connect the main ideas
                    mathematically.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default IntroToElectricity;
