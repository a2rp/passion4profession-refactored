import React from "react";
import {
    FiArchive,
    FiClock,
    FiSmartphone,
    FiHash,
    FiImage,
    FiAlertCircle,
    FiInfo,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const mobileCodes = [
    { provider: "Docomo", code: "*580#" },
    { provider: "Airtel", code: "*121*9#" },
    { provider: "Reliance", code: "*1#" },
    { provider: "Vodafone", code: "*777*0#" },
    { provider: "BSNL", code: "*1#" },
    { provider: "Idea", code: "*1#" },
    { provider: "Aircel", code: "*888#" },
    { provider: "Virgin Mobile", code: "*1#" },
    { provider: "Videocon", code: "*1#" },
];

const notes = [
    "These codes are from the original archive image dated July 16, 2012.",
    "Telecom operators, USSD codes, and branding may have changed since then.",
    "Some operators shown in the old post may no longer exist in the same form.",
    "Use this page as an archive record first, and a modern guide only after verification.",
];

const CheckYourMobileNumber = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiArchive />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 16, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Check your mobile number</h1>

                <p className="lead">
                    This archive post was originally a quick image-based cheat
                    sheet showing USSD codes for checking your own mobile number
                    across several telecom operators. This refactored version
                    preserves that old reference in a cleaner, readable layout.
                </p>

                <div className="heroMetaGrid">
                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiSmartphone />
                        </span>
                        <div>
                            <strong>Type</strong>
                            <span>Quick telecom utility note</span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiImage />
                        </span>
                        <div>
                            <strong>Original format</strong>
                            <span>Single image reference post</span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiHash />
                        </span>
                        <div>
                            <strong>Main purpose</strong>
                            <span>Carrier-wise number check codes</span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>What the original post contained</h2>
                </div>

                <p>
                    The original blog entry did not have a long written
                    explanation. It was essentially a utility image titled
                    "Check your mobile number" and showed operator names with
                    their corresponding USSD codes for checking the number
                    linked to the SIM.
                </p>

                <p>
                    That makes this page a neat little internet fossil from the
                    era when people collected practical phone tricks, Windows
                    tweaks, shortcut lists, and similar pocket references.
                </p>
            </Styled.SectionCard>

            <Styled.CodeSection>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiHash />
                    </span>
                    <h2>Codes shown in the original archive post</h2>
                </div>

                <div className="tableCard">
                    <div className="tableHead">
                        <div>Operator</div>
                        <div>USSD code</div>
                    </div>

                    <div className="tableBody">
                        {mobileCodes.map((item) => (
                            <div
                                className="tableRow"
                                key={`${item.provider}-${item.code}`}
                            >
                                <div className="providerCell">
                                    {item.provider}
                                </div>
                                <div className="codeCell">{item.code}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Styled.CodeSection>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important archive note</h2>
                    </div>

                    <ul>
                        {notes.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiSmartphone />
                        </span>
                        <h2>Why this post mattered then</h2>
                    </div>

                    <p>
                        Back then, many users did not always remember which
                        number belonged to which SIM, especially with multiple
                        prepaid SIM cards. A tiny code list like this was
                        genuinely useful.
                    </p>

                    <p>
                        It is simple, but it captures the spirit of early
                        practical blogging: small problem, quick solution, done.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiArchive />
                    </span>
                    <h2>Why this refactored version is better</h2>
                </div>

                <p>
                    The original image was useful, but images are not great for
                    searching, accessibility, or structured reading. This
                    version converts the post into readable text, preserves the
                    original intent, and makes the archive easier to maintain.
                </p>

                <div className="benefitGrid">
                    <div className="benefitCard">
                        <h3>Readable</h3>
                        <p>The old image data is now readable as text.</p>
                    </div>

                    <div className="benefitCard">
                        <h3>Searchable</h3>
                        <p>
                            Users can now search and scan the information
                            quickly.
                        </p>
                    </div>

                    <div className="benefitCard">
                        <h3>Expandable</h3>
                        <p>
                            You can later add modern carrier updates,
                            screenshots, or region-specific notes.
                        </p>
                    </div>

                    <div className="benefitCard">
                        <h3>Preserved</h3>
                        <p>
                            The original archive meaning stays intact without
                            getting buried under random filler.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    The original "Check your mobile number" post was a compact
                    image-based telecom reference from July 2012. This
                    refactored page preserves the carrier-wise number-check
                    codes shown there and presents them in a cleaner archive
                    format.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default CheckYourMobileNumber;
