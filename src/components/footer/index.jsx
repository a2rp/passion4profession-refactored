import React from "react";
import {
    FaCodepen,
    FaCoffee,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaHeart,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { SiPatreon } from "react-icons/si";
import { Styled } from "./styled";

const archiveLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: FaLinkedin,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        icon: FaFacebook,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FaYoutube,
    },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
];

const supportLinks = [
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: FaHeart,
    },
    {
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: FaCoffee,
    },
    {
        label: "Patreon",
        href: "https://www.patreon.com/a2rp",
        icon: SiPatreon,
    },
];

const FooterLinkSet = ({ links }) => (
    <div className="linkSet">
        {links.map(({ label, href, icon: Icon }) => {
            const isEmail = href.startsWith("mailto:");

            return (
                <a
                    key={label}
                    href={href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    title={label}
                >
                    <Icon aria-hidden="true" />
                    <span className="srOnly">{label}</span>
                </a>
            );
        })}
    </div>
);

const Footer = () => (
    <Styled.Wrapper>
        <div className="info">
            Originally published on Blogger, now preserved as a structured
            React archive for easier reading and reference.
        </div>

        <Styled.Main>
            <div className="copyright">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <a
                    href="https://www.ashishranjan.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ashish Ranjan
                </a>
            </div>

            <div className="archiveName">Passion4Profession Archive</div>

            <div className="linkSets">
                <FooterLinkSet links={archiveLinks} />
                <FooterLinkSet links={supportLinks} />
            </div>
        </Styled.Main>
    </Styled.Wrapper>
);

export default Footer;
