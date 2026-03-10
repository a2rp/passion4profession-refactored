import React, { lazy } from "react";

const About = lazy(() => import("../components/about"));
const NotFound = lazy(() => import("../pages/notFound"));

const PlatformIndependence = lazy(
    () => import("../pages/platformIndependence"),
);
const UriUrlUrn = lazy(() => import("../pages/uriUrlUrn"));
const WhyBoth3And4LetterExtensions = lazy(
    () => import("../pages/whyBoth3And4LetterExtensions"),
);
const HtmVsHtml = lazy(() => import("../pages/htmVsHtml"));
const MotherOfComputer = lazy(() => import("../pages/motherOfComputer"));
const Coperbyte1024 = lazy(() => import("../pages/coperbyte1024"));
const SataAtaPataHdd = lazy(() => import("../pages/sataAtaPataHdd"));
const ListOfExecutableFileExtensions = lazy(
    () => import("../pages/listOfExecutableFileExtensions"),
);
const ExceptionsInC = lazy(() => import("../pages/exceptionsInC"));
const KeyboardShortcuts = lazy(() => import("../pages/keyboardShortcuts"));
const OsiModel = lazy(() => import("../pages/osiModel"));
const AbbreviationsGlossary = lazy(
    () => import("../pages/abbreviationsGlossary"),
);
const CommonPortLists = lazy(() => import("../pages/commonPortLists"));
const TcpAndUdpPortNumbers = lazy(
    () => import("../pages/tcpAndUdpPortNumbers"),
);
const AsciiControlSymbols = lazy(() => import("../pages/asciiControlSymbols"));
const SpaghettiCode = lazy(() => import("../pages/spaghettiCode"));
const ListOfProgrammingLanguages = lazy(
    () => import("../pages/listOfProgrammingLanguages"),
);
const WhatIsW3c = lazy(() => import("../pages/whatIsW3c"));
const BeInContactTillIDie = lazy(() => import("../pages/beInContactTillIDie"));
const ThePeriodicTable = lazy(() => import("../pages/thePeriodicTable"));
const IntroToBinaryNumbers = lazy(
    () => import("../pages/introToBinaryNumbers"),
);
const IntroToElectricity = lazy(() => import("../pages/introToElectricity"));
const IntroToAssemblyLanguageProgramming = lazy(
    () => import("../pages/introToAssemblyLanguageProgramming"),
);
const WhatIsAmPmAndGmt = lazy(() => import("../pages/whatIsAmPmAndGmt"));
const CLanguageOperatorPrecedence = lazy(
    () => import("../pages/cLanguageOperatorPrecedence"),
);
const StdPrintfFamily = lazy(() => import("../pages/stdPrintfFamily"));
const ProgrammingLanguages = lazy(
    () => import("../pages/programmingLanguages"),
);
const WhatIsThatProcess = lazy(() => import("../pages/whatIsThatProcess"));
const ProcessExplorer = lazy(() => import("../pages/processExplorer"));
const MicrosoftPowerToys = lazy(() => import("../pages/microsoftPowerToys"));
const IndianFlagEvolution = lazy(() => import("../pages/indianFlagEvolution"));
const NokiaPhoneCodes = lazy(() => import("../pages/nokiaPhoneCodes"));
const WorldContinents = lazy(() => import("../pages/worldContinents"));
const SixOrSevenContinentsOnEarth = lazy(
    () => import("../pages/sixOrSevenContinentsOnEarth"),
);
const FromHackersJargonFile = lazy(
    () => import("../pages/fromHackersJargonFile"),
);
const Why8Bits1Byte = lazy(() => import("../pages/why8Bits1Byte"));
const BasicComputerTerminology = lazy(
    () => import("../pages/basicComputerTerminology"),
);
const YouCanDoIt = lazy(() => import("../pages/youCanDoIt"));
const TheManWhoNeverSlept = lazy(() => import("../pages/theManWhoNeverSlept"));
const ThisIsConfidence = lazy(() => import("../pages/thisIsConfidence"));
const HttpStatusCode = lazy(() => import("../pages/httpStatusCode"));
const WhatIsCdaFile = lazy(() => import("../pages/whatIsCdaFile"));
const ZeroDividedByZeroEqualsTwo = lazy(
    () => import("../pages/zeroDividedByZeroEqualsTwo"),
);
const CollegiateWords5000 = lazy(() => import("../pages/collegiateWords5000"));
const RomanticIdeas101 = lazy(() => import("../pages/romanticIdeas101"));
const QuickReferenceLinuxCommands = lazy(
    () => import("../pages/quickReferenceLinuxCommands"),
);
const WindowsXpServicesConfiguration = lazy(
    () => import("../pages/windowsXpServicesConfiguration"),
);
const CommonWords1000 = lazy(() => import("../pages/commonWords1000"));
const CreateYourOwnIcons = lazy(() => import("../pages/createYourOwnIcons"));
const WindowsShortcutKeys = lazy(() => import("../pages/windowsShortcutKeys"));
const ChangeYourStartButton = lazy(
    () => import("../pages/changeYourStartButton"),
);
const ChangeWindowsXpBootScreen = lazy(
    () => import("../pages/changeWindowsXpBootScreen"),
);
const ResourceHackerTutorial = lazy(
    () => import("../pages/resourceHackerTutorial"),
);
const HowToReadAndWriteIn1337 = lazy(
    () => import("../pages/howToReadAndWriteIn1337"),
);
const AwesomeVlcMediaPlayer = lazy(
    () => import("../pages/awesomeVlcMediaPlayer"),
);
const CheckYourMobileNumber = lazy(
    () => import("../pages/checkYourMobileNumber"),
);
const KeyboardAltCodes255 = lazy(() => import("../pages/keyboardAltCodes255"));
const DifferenceBetweenCodingAndEncoding = lazy(
    () => import("../pages/differenceBetweenCodingAndEncoding"),
);
const Macintosh = lazy(() => import("../pages/macintosh"));
const MacAndPc = lazy(() => import("../pages/macAndPc"));
const GnuPage = lazy(() => import("../pages/gnuPage"));
const LinuxVsWindows = lazy(() => import("../pages/linuxVsWindows"));
const UnixLike = lazy(() => import("../pages/unixLike"));
const FullFormOfUnixAndLinux = lazy(
    () => import("../pages/fullFormOfUnixAndLinux"),
);
const DeserveBeforeYouDesire = lazy(
    () => import("../pages/deserveBeforeYouDesire"),
);

export const routeConfig = [
    {
        path: "/archive/deserve-before-you-desire",
        element: <DeserveBeforeYouDesire />,
    },
    {
        path: "/archive/full-form-of-unix-and-linux",
        element: <FullFormOfUnixAndLinux />,
    },
    {
        path: "/archive/unix-like",
        element: <UnixLike />,
    },
    {
        path: "/archive/linux-vs-windows",
        element: <LinuxVsWindows />,
    },
    {
        path: "/archive/gnu",
        element: <GnuPage />,
    },
    {
        path: "/archive/mac-and-pc",
        element: <MacAndPc />,
    },
    {
        path: "/archive/macintosh",
        element: <Macintosh />,
    },
    {
        path: "/archive/difference-between-coding-and-encoding",
        element: <DifferenceBetweenCodingAndEncoding />,
    },
    {
        path: "/archive/255-keyboard-alt-codes",
        element: <KeyboardAltCodes255 />,
    },
    {
        path: "/archive/check-your-mobile-number",
        element: <CheckYourMobileNumber />,
    },
    {
        path: "/archive/awesome-vlc-media-player",
        element: <AwesomeVlcMediaPlayer />,
    },
    {
        path: "/archive/how-to-read-and-write-in-1337",
        element: <HowToReadAndWriteIn1337 />,
    },
    {
        path: "/archive/all-about-resource-hacker-in-a-brief-tutorial",
        element: <ResourceHackerTutorial />,
    },
    {
        path: "/archive/change-windows-xp-boot-screen",
        element: <ChangeWindowsXpBootScreen />,
    },
    {
        path: "/archive/change-your-start-button",
        element: <ChangeYourStartButton />,
    },
    {
        path: "/archive/windows-shortcut-keys",
        element: <WindowsShortcutKeys />,
    },
    {
        path: "/archive/create-your-own-icons",
        element: <CreateYourOwnIcons />,
    },
    {
        path: "/archive/1000-most-common-words-in-english",
        element: <CommonWords1000 />,
    },
    {
        path: "/archive/windows-xp-services-configuration-turn-off-disable-unnecessary-services-to-optimize-performance",
        element: <WindowsXpServicesConfiguration />,
    },
    {
        path: "/archive/quick-reference-linux-commands",
        element: <QuickReferenceLinuxCommands />,
    },
    {
        path: "/archive/101-romantic-ideas",
        element: <RomanticIdeas101 />,
    },
    {
        path: "/archive/5000-collegiate-words-with-brief-definitions",
        element: <CollegiateWords5000 />,
    },
    {
        path: "/archive/0-divided-by-0-equals-2",
        element: <ZeroDividedByZeroEqualsTwo />,
    },
    {
        path: "/archive/what-is-cda-file",
        element: <WhatIsCdaFile />,
    },
    {
        path: "/archive/http-status-code",
        element: <HttpStatusCode />,
    },
    {
        path: "/archive/this-is-confidence",
        element: <ThisIsConfidence />,
    },
    {
        path: "/archive/the-man-who-never-slept",
        element: <TheManWhoNeverSlept />,
    },
    {
        path: "/archive/you-can-do-it",
        element: <YouCanDoIt />,
    },
    {
        path: "/archive/basic-computer-terminology",
        element: <BasicComputerTerminology />,
    },
    {
        path: "/archive/why-8-bits-1-byte",
        element: <Why8Bits1Byte />,
    },
    {
        path: "/archive/from-hackers-jargon-file",
        element: <FromHackersJargonFile />,
    },
    {
        path: "/archive/six-or-seven-continents-on-earth",
        element: <SixOrSevenContinentsOnEarth />,
    },
    {
        path: "/archive/world-continents",
        element: <WorldContinents />,
    },
    {
        path: "/archive/nokia-phone-codes",
        element: <NokiaPhoneCodes />,
    },
    {
        path: "/archive/indian-flag-evolution",
        element: <IndianFlagEvolution />,
    },
    {
        path: "/archive/microsoft-power-toys",
        element: <MicrosoftPowerToys />,
    },
    {
        path: "/archive/process-explorer",
        element: <ProcessExplorer />,
    },
    {
        path: "/archive/what-is-that-process",
        element: <WhatIsThatProcess />,
    },
    {
        path: "/archive/programming-languages",
        element: <ProgrammingLanguages />,
    },
    {
        path: "/archive/std-printf-std-fprintf-std-sprintf-std-snprintf",
        element: <StdPrintfFamily />,
    },
    {
        path: "/archive/c-language-operator-precedence",
        element: <CLanguageOperatorPrecedence />,
    },
    {
        path: "/archive/what-is-am-pm-and-gmt",
        element: <WhatIsAmPmAndGmt />,
    },
    {
        path: "/archive/intro-to-assembly-language-programming",
        element: <IntroToAssemblyLanguageProgramming />,
    },
    {
        path: "/archive/intro-to-electricity",
        element: <IntroToElectricity />,
    },
    {
        path: "/archive/intro-to-binary-numbers",
        element: <IntroToBinaryNumbers />,
    },
    {
        path: "/archive/the-periodic-table",
        element: <ThePeriodicTable />,
    },
    {
        path: "/archive/be-in-contact-till-i-die",
        element: <BeInContactTillIDie />,
    },
    {
        path: "/archive/what-is-w3c",
        element: <WhatIsW3c />,
    },
    {
        path: "/archive/list-of-programming-languages",
        element: <ListOfProgrammingLanguages />,
    },
    {
        path: "/archive/spaghetti-code",
        element: <SpaghettiCode />,
    },
    {
        path: "/archive/ascii-control-symbols",
        element: <AsciiControlSymbols />,
    },
    {
        path: "/archive/list-of-tcp-and-udp-port-numbers",
        element: <TcpAndUdpPortNumbers />,
    },
    {
        path: "/archive/common-port-lists",
        element: <CommonPortLists />,
    },
    {
        path: "/archive/list-of-all-short-forms-and-full-form-of-the-abbreviations",
        element: <AbbreviationsGlossary />,
    },
    {
        path: "/archive/osi-model",
        element: <OsiModel />,
    },
    {
        path: "/archive/keyboard-shortcuts",
        element: <KeyboardShortcuts />,
    },
    {
        path: "/archive/exceptions-in-c",
        element: <ExceptionsInC />,
    },
    {
        path: "/archive/list-of-executable-file-extensions",
        element: <ListOfExecutableFileExtensions />,
    },
    {
        path: "/archive/what-is-the-sata-ata-pata-hdd",
        element: <SataAtaPataHdd />,
    },
    {
        path: "/archive/1024-coperbyte",
        element: <Coperbyte1024 />,
    },
    {
        path: "/archive/mother-of-computer",
        element: <MotherOfComputer />,
    },
    {
        path: "/archive/what-is-the-difference-between-htm-and-html",
        element: <HtmVsHtml />,
    },
    {
        path: "/archive/why-both-3-and-4-letter-extensions",
        element: <WhyBoth3And4LetterExtensions />,
    },
    {
        path: "/archive/difference-among-uri-url-and-urn",
        element: <UriUrlUrn />,
    },
    {
        path: "/archive/what-is-the-meaning-of-platform-independence",
        element: <PlatformIndependence />,
    },
    {
        path: "/",
        element: <About />,
    },
    {
        path: "/home",
        element: <About />,
    },
];

export const fallbackRoute = {
    path: "*",
    element: <NotFound />,
};
