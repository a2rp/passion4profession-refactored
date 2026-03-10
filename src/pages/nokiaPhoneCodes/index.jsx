import React from "react";
import {
    FiSmartphone,
    FiClock,
    FiInfo,
    FiAlertTriangle,
    FiShield,
    FiSettings,
    FiPhoneCall,
    FiCpu,
    FiDatabase,
    FiCheckCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const codecCodes = [
    {
        code: "*3370#",
        title: "Activate Enhanced Full Rate Codec (EFR)",
        text: "This was used on some older Nokia phones to enable better voice quality, but it could reduce talk time slightly.",
    },
    {
        code: "#3370#",
        title: "Deactivate Enhanced Full Rate Codec (EFR)",
        text: "Turns off the Enhanced Full Rate Codec mode on supported phones.",
    },
    {
        code: "*4720#",
        title: "Activate Half Rate Codec",
        text: "Uses lower voice quality but may improve talk time on supported older devices.",
    },
    {
        code: "#4720#",
        title: "Deactivate Half Rate Codec",
        text: "Turns off Half Rate Codec mode on supported phones.",
    },
];

const softwareCodes = [
    {
        code: "*#0000#",
        title: "Show software version",
        text: "Displays software version details such as version number and release information on many Nokia phones.",
    },
    {
        code: "*#9999#",
        title: "Alternative software version code",
        text: "Used on some older models if *#0000# did not work.",
    },
    {
        code: "*#8110#",
        title: "Software version for Nokia 8110",
        text: "Model-specific version information code for certain old Nokia devices.",
    },
];

const identityCodes = [
    {
        code: "*#06#",
        title: "Show IMEI number",
        text: "Displays the International Mobile Equipment Identity number of the phone.",
    },
    {
        code: "*#7760#",
        title: "Manufacturer code",
        text: "Often listed in old code collections, but device support could vary.",
    },
    {
        code: "*#92702689#",
        title: "Service and lifecycle information",
        text: "On some old Nokia phones this could display serial number, made date, purchase date, repair data, and user transfer related information.",
    },
];

const lockCodes = [
    {
        code: "#pw+1234567890+1#",
        title: "Provider lock status",
        text: "Old lock-status code format used on some Nokia phones. Support depended heavily on model and carrier.",
    },
    {
        code: "#pw+1234567890+2#",
        title: "Network lock status",
        text: "Checks network lock state on certain old devices.",
    },
    {
        code: "#pw+1234567890+3#",
        title: "Country lock status",
        text: "Checks country lock state on certain old devices.",
    },
    {
        code: "#pw+1234567890+4#",
        title: "SIM card lock status",
        text: "Checks SIM lock state on certain old devices.",
    },
];

const callCodes = [
    {
        code: "*#21#",
        title: "Check all-call divert status",
        text: "Checks the number to which all calls are being diverted.",
    },
    {
        code: "*#43#",
        title: "Check call waiting status",
        text: "Shows whether call waiting is enabled.",
    },
    {
        code: "*#61#",
        title: "Check no-reply divert",
        text: "Checks where calls are diverted when there is no reply.",
    },
    {
        code: "*#62#",
        title: "Check unreachable divert",
        text: "Checks where calls are diverted if the phone is unreachable or out of service.",
    },
    {
        code: "*#67#",
        title: "Check busy-call divert",
        text: "Checks where calls are diverted when the line is busy.",
    },
    {
        code: "**21*number#",
        title: "Enable all-call divert",
        text: "Turns on diversion of all calls to a specified number.",
    },
    {
        code: "**61*number#",
        title: "Enable no-reply divert",
        text: "Turns on call divert when there is no reply.",
    },
    {
        code: "**67*number#",
        title: "Enable busy-call divert",
        text: "Turns on call divert when the phone is busy.",
    },
];

const miscCodes = [
    {
        code: "*#2640#",
        title: "Show phone security code in use",
        text: "Listed in older collections for supported phones.",
    },
    {
        code: "*#30#",
        title: "Show private number setting",
        text: "Used to inspect number presentation settings on some networks and devices.",
    },
    {
        code: "*#73#",
        title: "Reset phone timers and game scores",
        text: "Old maintenance-style code listed for certain devices.",
    },
    {
        code: "*#746025625#",
        title: "Display SIM clock status",
        text: "Checks whether a SIM clock stop power-saving feature is supported.",
    },
    {
        code: "*#7780#",
        title: "Restore factory settings",
        text: "Restores certain settings on supported phones. This should be used with caution.",
    },
    {
        code: "*#67705646#",
        title: "Remove operator logo on 3310 and 3330",
        text: "A very model-specific code from classic Nokia device lists.",
    },
    {
        code: "*#94870345123456789#",
        title: "Deactivate PWM-Mem",
        text: "A rarely cited code from old lists, with unclear support across models.",
    },
    {
        code: "12345",
        title: "Default security code",
        text: "This was commonly listed as the default security code for many older Nokia phones, though users could change it.",
    },
    {
        code: "Press and hold #",
        title: "Switch between lines",
        text: "On some dual-line or supported configurations, holding # could switch lines.",
    },
];

const lastCallCodes = [
    {
        code: "*#147#",
        title: "Last caller information",
        text: "Often listed as Vodafone-specific in older collections.",
    },
    {
        code: "*#1471#",
        title: "Last call information",
        text: "Another carrier-specific code often associated with Vodafone.",
    },
];

const CodeSection = ({ icon, title, description, items }) => {
    return (
        <Styled.SectionCard>
            <div className="sectionHead">
                <span className="iconWrap">{icon}</span>
                <div>
                    <h2>{title}</h2>
                    <p className="sectionIntro">{description}</p>
                </div>
            </div>

            <div className="codeList">
                {items.map((item) => (
                    <article key={`${title}-${item.code}`} className="codeCard">
                        <div className="codeValue">{item.code}</div>
                        <div className="codeContent">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </article>
                ))}
            </div>
        </Styled.SectionCard>
    );
};

const NokiaPhoneCodes = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiSmartphone />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Old Nokia utility codes archive
                    </span>

                    <ShareButtons />
                </div>

                <h1>Nokia Phone Codes</h1>

                <p className="lead">
                    This page is a cleaned-up version of an old Nokia phone
                    codes note. These codes were commonly shared during the era
                    of classic Nokia phones, but support depended heavily on the
                    phone model, carrier, firmware version, and region.
                </p>

                <div className="warningBox">
                    <span className="warningIcon">
                        <FiAlertTriangle />
                    </span>

                    <div>
                        <strong>Important note</strong>
                        <p>
                            Many of these codes were model-specific, network-
                            specific, or time-specific. Some may no longer work,
                            and some should not be used casually on real devices
                            without understanding what they do.
                        </p>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>What these codes were used for</h2>
                </div>

                <p>
                    In older mobile phones, especially classic Nokia devices,
                    special dialer codes were often used to inspect software
                    versions, device identity, lock status, call-divert
                    settings, and a few maintenance-related features.
                </p>

                <p>
                    Some codes were genuinely useful. Others were copied around
                    the internet in giant lists and often mixed accurate,
                    partial, outdated, and model-specific information together.
                    A beautiful little chaos goblin of early mobile-phone
                    internet culture.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>What to expect from old code lists</h2>
                    </div>

                    <ul>
                        <li>Some codes worked only on selected Nokia models</li>
                        <li>Some worked only with specific carriers</li>
                        <li>Some were meant only for very old devices</li>
                        <li>Some changed behavior across firmware versions</li>
                        <li>
                            Some internet lists repeated codes with mistakes
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Safety mindset</h2>
                    </div>

                    <ul>
                        <li>Avoid using reset-style codes casually</li>
                        <li>Do not assume every code is universal</li>
                        <li>
                            Be careful with security and lock-related entries
                        </li>
                        <li>Prefer documentation over random internet lists</li>
                        <li>
                            Treat old device tweaks as historical references
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <CodeSection
                icon={<FiPhoneCall />}
                title="Voice and codec related codes"
                description="These were commonly associated with audio quality and talk-time tradeoffs on supported devices."
                items={codecCodes}
            />

            <CodeSection
                icon={<FiCpu />}
                title="Software and firmware information codes"
                description="These codes were used to inspect software version details on older Nokia phones."
                items={softwareCodes}
            />

            <CodeSection
                icon={<FiSmartphone />}
                title="Identity and device information codes"
                description="These codes were used to view hardware or lifecycle-related information."
                items={identityCodes}
            />

            <CodeSection
                icon={<FiShield />}
                title="Lock and restriction related codes"
                description="These old formats were used on some models to inspect lock status, but support varied a lot."
                items={lockCodes}
            />

            <CodeSection
                icon={<FiPhoneCall />}
                title="Call divert and call waiting codes"
                description="These were related to forwarding and call management settings."
                items={callCodes}
            />

            <CodeSection
                icon={<FiDatabase />}
                title="Miscellaneous Nokia codes"
                description="A mixed group of old codes that appeared in many classic mobile-code collections."
                items={miscCodes}
            />

            <CodeSection
                icon={<FiPhoneCall />}
                title="Carrier-specific last-call style codes"
                description="These were often listed as Vodafone-only or carrier-specific in old code collections."
                items={lastCallCodes}
            />

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSettings />
                    </span>
                    <h2>Which codes were the most practical?</h2>
                </div>

                <p>
                    Historically, the most commonly useful entries from lists
                    like this were usually the simpler information codes:
                </p>

                <ul>
                    <li>*#06# for checking IMEI</li>
                    <li>
                        *#0000# for software version on many older Nokia phones
                    </li>
                    <li>
                        *#21#, *#61#, *#62#, *#67# for checking call-divert
                        settings
                    </li>
                    <li>*#43# for checking call waiting</li>
                    <li>
                        *#7780# only with caution, because it affects settings
                    </li>
                </ul>

                <p>
                    The more obscure lock-status and maintenance entries were
                    often more fragile, model-specific, or inconsistently
                    documented.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Nokia phone codes were special dialer commands used mostly
                    on older devices to inspect software version, IMEI, lock
                    status, call forwarding, and a few maintenance features.
                    They are best treated as historical device-reference notes,
                    not universal commands that will work everywhere.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default NokiaPhoneCodes;
