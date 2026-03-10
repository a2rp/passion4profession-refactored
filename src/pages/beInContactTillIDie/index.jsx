import React from "react";
import {
    FiUsers,
    FiClock,
    FiHeart,
    FiGithub,
    FiLinkedin,
    FiGlobe,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const socialLinks = [
    {
        title: "GitHub",
        value: "github.com/a2rp",
        href: "https://github.com/a2rp",
        icon: <FiGithub />,
    },
    {
        title: "Portfolio",
        value: "ashishranjan.net",
        href: "https://www.ashishranjan.net",
        icon: <FiGlobe />,
    },
    {
        title: "LinkedIn",
        value: "linkedin.com/in/aashishranjan",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: <FiLinkedin />,
    },
    {
        title: "Facebook",
        value: "facebook.com/theash.ashish",
        href: "https://www.facebook.com/theash.ashish/",
        icon: <FaFacebookF />,
    },
];

const connectionNotes = [
    "This page is a refactored version of an old contact-style blog post from the original archive.",
    "The original post used a form-based approach, but this version keeps things simpler and cleaner.",
    "Instead of collecting details through a form, this page now acts as a direct stay-connected reference.",
    "The purpose is to preserve the original intent while presenting it in a better structured archive format.",
];

const BeInContactTillIDie = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiUsers />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 30, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Be in contact till I die</h1>

                <p className="lead">
                    This page is a cleaned-up version of an old blog post that
                    was originally created as a simple contact form. The idea
                    behind it was personal and direct: stay connected. In this
                    refactored archive, that same intention is preserved in a
                    more usable and modern format.
                </p>
            </Styled.HeroCard>

            <Styled.MainGrid>
                <Styled.ContentCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHeart />
                        </span>
                        <h2>About this page</h2>
                    </div>

                    <p>
                        The original version of this page was more like a casual
                        "fill your details" contact form from the old Blogger
                        era. That had its own charm, but now this archive is
                        being rebuilt with cleaner structure and simpler
                        purpose.
                    </p>

                    <p>
                        So instead of repeating the old form format, this page
                        now works as a straightforward way to stay connected
                        through direct public links.
                    </p>

                    <div className="noteList">
                        {connectionNotes.map((item) => (
                            <div key={item} className="noteItem">
                                <span className="dot" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </Styled.ContentCard>

                <Styled.SideCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiUsers />
                        </span>
                        <h2>Stay connected</h2>
                    </div>

                    <p className="sideText">
                        You can connect with me through these public profiles
                        and links.
                    </p>

                    <div className="linkList">
                        {socialLinks.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="socialLink"
                            >
                                <span className="socialIcon">{item.icon}</span>

                                <span className="socialContent">
                                    <span className="socialTitle">
                                        {item.title}
                                    </span>
                                    <span className="socialValue">
                                        {item.value}
                                    </span>
                                </span>
                            </a>
                        ))}
                    </div>
                </Styled.SideCard>
            </Styled.MainGrid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiHeart />
                    </span>
                    <h2>Refactored meaning</h2>
                </div>

                <p>
                    In the archive context, this page is less about forms and
                    more about preserving tone. It shows that not every old post
                    was a technical article. Some pages were more personal,
                    direct, and human. That is part of the archive too.
                </p>

                <p>
                    A good archive should not erase that personality. It should
                    just present it more clearly, without the old clutter.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    This page keeps the original "stay in contact" intent alive,
                    but replaces the old form-based setup with a cleaner public
                    contact page using direct social links.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default BeInContactTillIDie;
