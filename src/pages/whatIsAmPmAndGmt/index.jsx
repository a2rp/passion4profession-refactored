import React from "react";
import {
    FiClock,
    FiGlobe,
    FiSun,
    FiMoon,
    FiCheckCircle,
    FiMapPin,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const timeExamples = [
    {
        label: "8:00 AM",
        meaning: "8 in the morning, before noon",
        icon: <FiSun />,
    },
    {
        label: "12:00 PM",
        meaning: "12 noon, middle of the day",
        icon: <FiSun />,
    },
    {
        label: "6:30 PM",
        meaning: "6:30 in the evening, after noon",
        icon: <FiMoon />,
    },
    {
        label: "12:00 AM",
        meaning: "12 midnight, start of a new day",
        icon: <FiMoon />,
    },
];

const WhatIsAmPmAndGmt = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiClock />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiMapPin />
                        Original topic: August 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>What are AM, PM, and GMT?</h1>

                <p className="lead">
                    AM and PM are used in the 12-hour clock system to describe
                    whether a time is before noon or after noon. GMT stands for
                    Greenwich Mean Time and is an important reference point in
                    world timekeeping.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple meanings</h2>
                </div>

                <ul>
                    <li>
                        <strong>AM</strong> stands for{" "}
                        <strong>Ante Meridiem</strong>, which means{" "}
                        <strong>before midday</strong> or{" "}
                        <strong>before noon</strong>
                    </li>
                    <li>
                        <strong>PM</strong> stands for{" "}
                        <strong>Post Meridiem</strong>, which means{" "}
                        <strong>after midday</strong> or{" "}
                        <strong>after noon</strong>
                    </li>
                    <li>
                        <strong>GMT</strong> stands for{" "}
                        <strong>Greenwich Mean Time</strong>, a well-known time
                        reference connected to Greenwich in London
                    </li>
                </ul>

                <p>
                    The word <strong>meridiem</strong> comes from Latin and is
                    connected to midday. So AM and PM are just ways of saying
                    whether a local time is before noon or after noon.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiSun />
                        </span>
                        <h2>AM</h2>
                    </div>

                    <p>
                        AM is used for times from just after midnight up to just
                        before noon.
                    </p>

                    <ul>
                        <li>12:00 AM is midnight</li>
                        <li>1:00 AM is early morning</li>
                        <li>11:00 AM is late morning</li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiMoon />
                        </span>
                        <h2>PM</h2>
                    </div>

                    <p>
                        PM is used for times from just after noon up to just
                        before midnight.
                    </p>

                    <ul>
                        <li>12:00 PM is noon</li>
                        <li>3:00 PM is afternoon</li>
                        <li>9:00 PM is night</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiClock />
                    </span>
                    <h2>Common confusion: 12 AM and 12 PM</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>12:00 AM</h3>
                        <p>Midnight</p>
                        <span>Beginning of a new day</span>
                    </div>

                    <div className="compareCard">
                        <h3>12:00 PM</h3>
                        <p>Noon</p>
                        <span>Middle of the day</span>
                    </div>
                </div>

                <p>
                    This is where many people get confused. The safest way to
                    remember it is:
                </p>

                <ul>
                    <li>12:00 AM = midnight</li>
                    <li>12:00 PM = noon</li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGlobe />
                    </span>
                    <h2>What is GMT?</h2>
                </div>

                <p>
                    GMT stands for <strong>Greenwich Mean Time</strong>. It is
                    named after Greenwich, a place in London, where the Royal
                    Observatory is located. Greenwich became an important
                    reference point for global time and longitude.
                </p>

                <p>
                    GMT is connected to the <strong>Prime Meridian</strong>,
                    which is marked as <strong>0 degrees longitude</strong>.
                    That line is used as a starting reference for world time
                    zones.
                </p>

                <div className="exampleBox">
                    <h3>Simple idea</h3>
                    <p>
                        GMT is not the same thing as AM or PM. AM and PM tell
                        you whether local time is before or after noon. GMT is a
                        world reference time.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMapPin />
                    </span>
                    <h2>GMT and UTC</h2>
                </div>

                <p>
                    In everyday discussion, people often treat GMT and UTC as
                    similar reference times. But technically they are not
                    exactly the same concept.
                </p>

                <ul>
                    <li>
                        <strong>GMT</strong> is historically based on mean solar
                        time at Greenwich
                    </li>
                    <li>
                        <strong>UTC</strong> stands for{" "}
                        <strong>Coordinated Universal Time</strong> and is the
                        modern international standard used for global
                        timekeeping
                    </li>
                </ul>

                <p>
                    For most basic learning purposes, you can think of GMT as an
                    important historical world reference, while UTC is the
                    modern standard.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Time examples</h2>
                </div>

                <Styled.ExampleGrid>
                    {timeExamples.map((item) => (
                        <article key={item.label} className="exampleCard">
                            <div className="topRow">
                                <span className="miniIcon">{item.icon}</span>
                                <h3>{item.label}</h3>
                            </div>

                            <p>{item.meaning}</p>
                        </article>
                    ))}
                </Styled.ExampleGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiClock />
                    </span>
                    <h2>12-hour clock vs world reference time</h2>
                </div>

                <div className="timeline">
                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>AM and PM</strong>
                            <p>
                                Used in local 12-hour time to say whether it is
                                before noon or after noon.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>GMT</strong>
                            <p>
                                Used as a global reference point related to
                                Greenwich and the Prime Meridian.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>UTC</strong>
                            <p>
                                Modern international standard for coordinating
                                time worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    AM and PM are local time markers used in the 12-hour clock.
                    They tell you whether the time is before or after noon. GMT
                    is a world reference time linked to Greenwich and the Prime
                    Meridian.
                </p>

                <p>
                    So AM and PM answer{" "}
                    <strong>"where is the time within the day?"</strong>, while
                    GMT helps answer{" "}
                    <strong>"what is the reference time for the world?"</strong>
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    AM means before noon, PM means after noon, and GMT means
                    Greenwich Mean Time. AM and PM belong to the 12-hour clock
                    system, while GMT is an important world time reference
                    connected to Greenwich in London.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default WhatIsAmPmAndGmt;
