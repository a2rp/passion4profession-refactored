import{c as a,T as s,j as e,F as S,a as O,d as v,aw as y,ah as w,ac as u,ax as x}from"./index-BxgJM-x-.js";import{S as j}from"./index-D6FK_vhk.js";const n={Wrapper:a.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 95%, transparent),
            color-mix(in srgb, var(--color-surface-2) 100%, transparent)
        );
        box-shadow: 0 20px 48px var(--color-shadow);
        padding: 24px;
        overflow: hidden;
        position: relative;

        .badgeRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 14px;
        }

        .badge {
            min-height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 12px;
            font-weight: 800;
        }

        .badge svg {
            flex-shrink: 0;
        }

        .badge.muted {
            color: var(--color-text-secondary);
        }

        h1 {
            font-size: clamp(30px, 4vw, 48px);
            line-height: 1.02;
            letter-spacing: -0.04em;
            margin-bottom: 14px;
        }

        .lead {
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }

        .statsRow {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 22px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .statCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .statIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .statIcon svg {
            width: 18px;
            height: 18px;
        }

        .statCard strong {
            display: block;
            font-size: 20px;
            line-height: 1.1;
            margin-bottom: 4px;
        }

        .statCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,InfoCard:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }
    `,ControlCard:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        .searchRow {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 12px;
            margin-top: 6px;

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .searchBox {
            position: relative;
        }

        .searchIcon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-text-muted);
            pointer-events: none;
        }

        input {
            width: 100%;
            height: 48px;
            padding: 0 14px 0 42px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        input:focus {
            border-color: var(--color-primary);
            background: var(--color-surface);
        }

        .clearBtn {
            min-height: 48px;
            padding: 0 16px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-weight: 700;
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .clearBtn:hover {
            background: var(--color-surface);
            border-color: var(--color-border-light);
        }

        .alphabetRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 16px;
        }

        .alphaBtn {
            min-width: 38px;
            min-height: 38px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .alphaBtn:hover {
            background: var(--color-surface);
            color: var(--color-text-primary);
        }

        .alphaBtn.active {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
        }

        .alphaBtn.disabledLike {
            opacity: 0.55;
        }
    `,SectionCard:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 16px;
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        .groupStack {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .letterSection {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .letterHeader {
            display: flex;
            align-items: center;
            gap: 12px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--color-border);
        }

        .letterBadge {
            width: 38px;
            height: 38px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 14px;
            font-weight: 900;
            line-height: 1;
            flex-shrink: 0;
        }

        h3 {
            font-size: 20px;
            line-height: 1.15;
        }

        .wordGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .wordCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast);
        }

        .wordCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-3) 94%,
                transparent
            );
        }

        .wordTop {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        h4 {
            font-size: 18px;
            line-height: 1.15;
            word-break: break-word;
        }

        .partTag {
            min-height: 30px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .wordCard p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }

        .emptyState {
            padding: 18px;
            border: 1px dashed var(--color-border-light);
            border-radius: var(--radius-md);
            color: var(--color-text-muted);
            font-size: 14px;
            line-height: 1.7;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 90%,
                transparent
            );
        }
    `,FooterNote:a.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 96%, transparent),
            color-mix(in srgb, var(--color-surface-2) 100%, transparent)
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        h2 {
            font-size: 24px;
            line-height: 1.12;
            margin-bottom: 10px;
        }

        p {
            max-width: 860px;
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        pre {
            margin: 14px 0;
            background: var(--color-code-bg);
            color: var(--color-code-text);
            border: 1px solid var(--color-code-border);
            border-radius: var(--radius-md);
            padding: 16px;
            overflow-x: auto;
            line-height: 1.7;
            font-size: 13px;
        }
    `},T=[{word:"abase",partOfSpeech:"v.",definition:"To lower in position, estimation, or the like; degrade."},{word:"abbess",partOfSpeech:"n.",definition:"The lady superior of a nunnery."},{word:"abbey",partOfSpeech:"n.",definition:"The group of buildings which collectively form the dwelling-place of a society of monks or nuns."},{word:"abbot",partOfSpeech:"n.",definition:"The superior of a community of monks."},{word:"abdicate",partOfSpeech:"v.",definition:"To give up royal power or the like."},{word:"abdomen",partOfSpeech:"n.",definition:"In mammals, the visceral cavity between the diaphragm and the pelvic floor; the belly."},{word:"abdominal",partOfSpeech:"adj.",definition:"Of, pertaining to, or situated on the abdomen."},{word:"abduction",partOfSpeech:"n.",definition:"A carrying away of a person against his will, or illegally."},{word:"abed",partOfSpeech:"adv.",definition:"In bed; on a bed."},{word:"aberration",partOfSpeech:"n.",definition:"Deviation from a right, customary, or prescribed course."},{word:"abet",partOfSpeech:"v.",definition:"To aid, promote, or encourage the commission of an offense."},{word:"abeyance",partOfSpeech:"n.",definition:"A state of suspension or temporary inaction."},{word:"abhorrence",partOfSpeech:"n.",definition:"The act of detesting extremely."},{word:"abhorrent",partOfSpeech:"adj.",definition:"Very repugnant; hateful."},{word:"abidance",partOfSpeech:"n.",definition:"An abiding."},{word:"abject",partOfSpeech:"adj.",definition:"Sunk to a low condition."},{word:"abjure",partOfSpeech:"v.",definition:"To recant, renounce, repudiate under oath."},{word:"able-bodied",partOfSpeech:"adj.",definition:"Competent for physical service."},{word:"ablution",partOfSpeech:"n.",definition:"A washing or cleansing, especially of the body."},{word:"abnegate",partOfSpeech:"v.",definition:"To renounce a right or privilege."},{word:"abnormal",partOfSpeech:"adj.",definition:"Not conformed to the ordinary rule or standard."},{word:"abominable",partOfSpeech:"adj.",definition:"Very hateful."},{word:"abominate",partOfSpeech:"v.",definition:"To hate violently."},{word:"abomination",partOfSpeech:"n.",definition:"A very detestable act or practice."},{word:"aboriginal",partOfSpeech:"adj.",definition:"Primitive; unsophisticated."},{word:"aborigines",partOfSpeech:"n.",definition:"The original or earliest known inhabitants of a country."},{word:"aboveboard",partOfSpeech:"adv. & adj.",definition:"Without concealment, fraud, or trickery."},{word:"abrade",partOfSpeech:"v.",definition:"To wear away the surface or some part of by friction."},{word:"abrasion",partOfSpeech:"n.",definition:"That which is rubbed off."},{word:"abridge",partOfSpeech:"v.",definition:"To make shorter in words, keeping the essential features and leaving out minor parts."},{word:"abridgment",partOfSpeech:"n.",definition:"A condensed form as of a book or play."}],k=[{word:"abrogate",partOfSpeech:"v.",definition:"To abolish or repeal."},{word:"abrupt",partOfSpeech:"adj.",definition:"Beginning, ending, or changing suddenly or with a break."},{word:"abscess",partOfSpeech:"n.",definition:"A collection of pus in a cavity formed within some tissue of the body."},{word:"abscission",partOfSpeech:"n.",definition:"The act of cutting off, as in a surgical operation."},{word:"abscond",partOfSpeech:"v.",definition:"To depart suddenly and secretly, as for the purpose of escaping arrest."},{word:"absence",partOfSpeech:"n.",definition:"The fact of not being present or available."},{word:"absent-minded",partOfSpeech:"adj.",definition:"Lacking attention to immediate surroundings or business."},{word:"absolution",partOfSpeech:"n.",definition:"Forgiveness, or passing over of offenses."},{word:"absolve",partOfSpeech:"v.",definition:"To free from sin or its penalties."},{word:"absorb",partOfSpeech:"v.",definition:"To drink in or suck up, as a sponge absorbs water."},{word:"absorption",partOfSpeech:"n.",definition:"The act or process of absorbing."},{word:"abstain",partOfSpeech:"v.",definition:"To keep oneself back from doing or using something."},{word:"abstemious",partOfSpeech:"adj.",definition:"Characterized by self denial or abstinence, especially in the use of food or drink."},{word:"abstinence",partOfSpeech:"n.",definition:"Self denial."},{word:"abstruse",partOfSpeech:"adj.",definition:"Dealing with matters difficult to understand."},{word:"absurd",partOfSpeech:"adj.",definition:"Inconsistent with reason or common sense."},{word:"abundant",partOfSpeech:"adj.",definition:"Plentiful."},{word:"abusive",partOfSpeech:"adj.",definition:"Employing harsh words or ill treatment."},{word:"abut",partOfSpeech:"v.",definition:"To touch at the end or boundary line."},{word:"abyss",partOfSpeech:"n.",definition:"A bottomless gulf."},{word:"academic",partOfSpeech:"adj.",definition:"Of or pertaining to an academy, college, or university."},{word:"academician",partOfSpeech:"n.",definition:"A member of an academy of literature, art, or science."},{word:"academy",partOfSpeech:"n.",definition:"An institution where higher branches of learning are taught."},{word:"accede",partOfSpeech:"v.",definition:"To agree."},{word:"accelerate",partOfSpeech:"v.",definition:"To move faster."},{word:"accept",partOfSpeech:"v.",definition:"To take when offered."},{word:"access",partOfSpeech:"n.",definition:"A way of approach or entrance; passage."},{word:"accessible",partOfSpeech:"adj.",definition:"Approachable."},{word:"accession",partOfSpeech:"n.",definition:"Induction or elevation, as to dignity, office, or government."},{word:"accessory",partOfSpeech:"n.",definition:"A person or thing that aids the principal agent."},{word:"acclaim",partOfSpeech:"v.",definition:"To utter with a shout."},{word:"accommodate",partOfSpeech:"v.",definition:"To furnish something as a kindness or favor."},{word:"accompaniment",partOfSpeech:"n.",definition:"A subordinate part enriching or supporting the leading part."},{word:"accompanist",partOfSpeech:"n.",definition:"One who accompanies."},{word:"accompany",partOfSpeech:"v.",definition:"To go with or be associated with as a companion."},{word:"accomplice",partOfSpeech:"n.",definition:"An associate in wrongdoing."},{word:"accomplish",partOfSpeech:"v.",definition:"To bring to pass."},{word:"accordion",partOfSpeech:"n.",definition:"A portable free-reed musical instrument."},{word:"accost",partOfSpeech:"v.",definition:"To speak to."},{word:"account",partOfSpeech:"n.",definition:"A record or statement of receipts and expenditures or business transactions."},{word:"accouter",partOfSpeech:"v.",definition:"To dress."},{word:"accredit",partOfSpeech:"v.",definition:"To give credit or authority to."},{word:"accumulate",partOfSpeech:"v.",definition:"To become greater in quantity or number."},{word:"accuracy",partOfSpeech:"n.",definition:"Exactness."},{word:"accurate",partOfSpeech:"adj.",definition:"Conforming exactly to truth or to a standard."},{word:"accursed",partOfSpeech:"adj.",definition:"Doomed to evil, misery, or misfortune."},{word:"accusation",partOfSpeech:"n.",definition:"A charge of crime, misdemeanor, or error."},{word:"accusatory",partOfSpeech:"adj.",definition:"Of, pertaining to, or involving an accusation."},{word:"accuse",partOfSpeech:"v.",definition:"To charge with wrongdoing, misconduct, or error."},{word:"accustom",partOfSpeech:"v.",definition:"To make familiar by use."},{word:"acerbity",partOfSpeech:"n.",definition:"Sourness with bitterness and astringency."},{word:"acetate",partOfSpeech:"n.",definition:"A salt of acetic acid."},{word:"acetic",partOfSpeech:"adj.",definition:"Of or pertaining to vinegar."},{word:"ache",partOfSpeech:"v.",definition:"To be in pain or distress."},{word:"Achillean",partOfSpeech:"adj.",definition:"Invulnerable."},{word:"achromatic",partOfSpeech:"adj.",definition:"Colorless."},{word:"acid",partOfSpeech:"n.",definition:"A sour substance."},{word:"acidify",partOfSpeech:"v.",definition:"To change into acid."},{word:"acknowledge",partOfSpeech:"v.",definition:"To recognize or admit the genuineness or validity of."},{word:"acknowledgment",partOfSpeech:"n.",definition:"Recognition."},{word:"acme",partOfSpeech:"n.",definition:"The highest point or summit."},{word:"acoustic",partOfSpeech:"adj.",definition:"Pertaining to the act or sense of hearing."},{word:"acquaint",partOfSpeech:"v.",definition:"To make familiar or conversant."},{word:"acquiesce",partOfSpeech:"v.",definition:"To comply or submit."},{word:"acquiescence",partOfSpeech:"n.",definition:"Passive consent."},{word:"acquire",partOfSpeech:"v.",definition:"To get as one's own."},{word:"acquisition",partOfSpeech:"n.",definition:"Anything gained or made one's own, usually by effort or labor."},{word:"acquit",partOfSpeech:"v.",definition:"To free or clear, as from accusation."},{word:"acquittal",partOfSpeech:"n.",definition:"A discharge from accusation by judicial action."},{word:"acquittance",partOfSpeech:"n.",definition:"Release or discharge from indebtedness, obligation, or responsibility."},{word:"acreage",partOfSpeech:"n.",definition:"Quantity or extent of land, especially cultivated land."},{word:"acrid",partOfSpeech:"adj.",definition:"Harshly pungent or bitter."},{word:"acrimonious",partOfSpeech:"adj.",definition:"Full of bitterness."},{word:"acrimony",partOfSpeech:"n.",definition:"Sharpness or bitterness of speech or temper."},{word:"actionable",partOfSpeech:"adj.",definition:"Affording cause for instituting an action such as trespass or slander."},{word:"actuality",partOfSpeech:"n.",definition:"Any reality."},{word:"actuary",partOfSpeech:"n.",definition:"An officer, as of an insurance company, who calculates risks and premiums."},{word:"actuate",partOfSpeech:"v.",definition:"To move or incite to action."},{word:"acumen",partOfSpeech:"n.",definition:"Quickness of intellectual insight or discernment."},{word:"acute",partOfSpeech:"adj.",definition:"Having fine and penetrating discernment."},{word:"adamant",partOfSpeech:"n.",definition:"A substance of extreme hardness or impenetrability."},{word:"addendum",partOfSpeech:"n.",definition:"Something added or to be added."},{word:"addle",partOfSpeech:"v.",definition:"To make inefficient or worthless; muddle."},{word:"adduce",partOfSpeech:"v.",definition:"To bring forward or name for consideration."},{word:"adhere",partOfSpeech:"v.",definition:"To stick fast or together."},{word:"adherence",partOfSpeech:"n.",definition:"Attachment."},{word:"adherent",partOfSpeech:"adj.",definition:"Clinging or sticking fast."},{word:"adhesion",partOfSpeech:"n.",definition:"The state of being attached or joined."},{word:"adieu",partOfSpeech:"inter.",definition:"Good-by; farewell."},{word:"adjacency",partOfSpeech:"n.",definition:"The state of being adjacent."},{word:"adjacent",partOfSpeech:"adj.",definition:"Near or bordering upon."},{word:"adjudge",partOfSpeech:"v.",definition:"To award or bestow by formal decision."},{word:"adjunct",partOfSpeech:"n.",definition:"Something joined to another thing but holding a subordinate place."},{word:"adjuration",partOfSpeech:"n.",definition:"A vehement appeal."},{word:"adjutant",partOfSpeech:"adj.",definition:"Auxiliary."},{word:"administrator",partOfSpeech:"n.",definition:"One who manages affairs of any kind."},{word:"admissible",partOfSpeech:"adj.",definition:"Having the right or privilege of entry."},{word:"admittance",partOfSpeech:"n.",definition:"Entrance or permission to enter."},{word:"admonish",partOfSpeech:"v.",definition:"To warn of a fault."},{word:"admonition",partOfSpeech:"n.",definition:"Gentle reproof."},{word:"ado",partOfSpeech:"n.",definition:"Unnecessary activity or ceremony."},{word:"adoration",partOfSpeech:"n.",definition:"Profound devotion."},{word:"adroit",partOfSpeech:"adj.",definition:"Having skill in the use of bodily or mental powers."},{word:"adulterant",partOfSpeech:"n.",definition:"An adulterating substance."},{word:"adulterate",partOfSpeech:"v.",definition:"To make impure by adding inferior substances."},{word:"adumbrate",partOfSpeech:"v.",definition:"To represent beforehand in outline."},{word:"advent",partOfSpeech:"n.",definition:"The coming or arrival of an important event or person."},{word:"adverse",partOfSpeech:"adj.",definition:"Opposing or opposed."},{word:"adversity",partOfSpeech:"n.",definition:"Misfortune."},{word:"advert",partOfSpeech:"v.",definition:"To refer incidentally."},{word:"advertiser",partOfSpeech:"n.",definition:"One who advertises, especially in newspapers."},{word:"advisory",partOfSpeech:"adj.",definition:"Not mandatory."},{word:"advocacy",partOfSpeech:"n.",definition:"The act of pleading a cause."},{word:"advocate",partOfSpeech:"n.",definition:"One who pleads the cause of another."},{word:"aerial",partOfSpeech:"adj.",definition:"Of, pertaining to, or like the air."},{word:"aeronaut",partOfSpeech:"n.",definition:"One who navigates the air; a balloonist."},{word:"aeronautics",partOfSpeech:"n.",definition:"The art or practice of flying aircraft."}],A=[{word:"aerostat",partOfSpeech:"n.",definition:"A balloon or other apparatus floating in or sustained by the air."},{word:"aerostatics",partOfSpeech:"n.",definition:"The branch of pneumatics that treats of equilibrium, pressure, and mechanical properties of air and gases."},{word:"affable",partOfSpeech:"adj.",definition:"Easy to approach."},{word:"affect",partOfSpeech:"v.",definition:"To act upon."},{word:"affectation",partOfSpeech:"n.",definition:"A studied or ostentatious pretense or attempt."},{word:"affiliate",partOfSpeech:"n.",definition:"Some auxiliary person or thing."},{word:"affirmative",partOfSpeech:"adj.",definition:"Answering yes to a question at issue."},{word:"affix",partOfSpeech:"v.",definition:"To fasten."},{word:"affluence",partOfSpeech:"n.",definition:"A profuse or abundant supply of riches."},{word:"affront",partOfSpeech:"n.",definition:"An open insult or indignity."},{word:"afire",partOfSpeech:"adv. & adj.",definition:"On fire, literally or figuratively."},{word:"afoot",partOfSpeech:"adv.",definition:"In progress."},{word:"aforesaid",partOfSpeech:"adj.",definition:"Said in a preceding part or before."},{word:"afresh",partOfSpeech:"adv.",definition:"Once more, after rest or interval."},{word:"afterthought",partOfSpeech:"n.",definition:"A thought that comes later than its appropriate or expected time."},{word:"agglomerate",partOfSpeech:"v.",definition:"To pile or heap together."},{word:"aggrandize",partOfSpeech:"v.",definition:"To cause to appear greatly."},{word:"aggravate",partOfSpeech:"v.",definition:"To make heavier, worse, or more burdensome."},{word:"aggravation",partOfSpeech:"n.",definition:"The fact of being made heavier or more heinous, as a crime, offense, or misfortune."},{word:"aggregate",partOfSpeech:"n.",definition:"The entire number, sum, mass, or quantity of something."},{word:"aggress",partOfSpeech:"v.",definition:"To make the first attack."},{word:"aggression",partOfSpeech:"n.",definition:"An unprovoked attack."},{word:"aggrieve",partOfSpeech:"v.",definition:"To give grief or sorrow to."},{word:"aghast",partOfSpeech:"adj.",definition:"Struck with terror and amazement."},{word:"agile",partOfSpeech:"adj.",definition:"Able to move or act quickly, physically or mentally."},{word:"agitate",partOfSpeech:"v.",definition:"To move or excite the feelings or thoughts."},{word:"agrarian",partOfSpeech:"adj.",definition:"Pertaining to land, especially agricultural land."},{word:"aide-de-camp",partOfSpeech:"n.",definition:"An officer who receives and transmits the orders of the general."},{word:"ailment",partOfSpeech:"n.",definition:"Slight sickness."},{word:"airy",partOfSpeech:"adj.",definition:"Delicate; ethereal."},{word:"akin",partOfSpeech:"adj.",definition:"Of similar nature or qualities."},{word:"alabaster",partOfSpeech:"n.",definition:"A white or delicately tinted fine-grained gypsum."},{word:"alacrity",partOfSpeech:"n.",definition:"Cheerful willingness."},{word:"albeit",partOfSpeech:"conj.",definition:"Even though."},{word:"albino",partOfSpeech:"n.",definition:"A person with milky white skin and hair, and eyes with bright red pupil and usually pink iris."},{word:"album",partOfSpeech:"n.",definition:"A book whose leaves are so made as to form paper frames for holding photographs or the like."},{word:"alchemy",partOfSpeech:"n.",definition:"Chemistry of the Middle Ages, characterized by the pursuit of changing base metals into gold."},{word:"alcohol",partOfSpeech:"n.",definition:"A volatile, inflammable, colorless liquid of penetrating odor and burning taste."},{word:"alcoholism",partOfSpeech:"n.",definition:"A condition resulting from the inordinate or persistent use of alcoholic beverages."},{word:"alcove",partOfSpeech:"n.",definition:"A covered recess connected with or at the side of a larger room."},{word:"alder",partOfSpeech:"n.",definition:"Any shrub or small tree of the alder genus."},{word:"alderman",partOfSpeech:"n.",definition:"A member of a municipal legislative body who usually exercises also certain judicial functions."},{word:"aldermanship",partOfSpeech:"n.",definition:"The dignity, condition, office, or term of office of an alderman."},{word:"alias",partOfSpeech:"n.",definition:"An assumed name."},{word:"alien",partOfSpeech:"n.",definition:"One who owes allegiance to a foreign government."},{word:"alienable",partOfSpeech:"adj.",definition:"Capable of being aliened or alienated, as lands."},{word:"alienate",partOfSpeech:"v.",definition:"To cause to turn away."},{word:"alienation",partOfSpeech:"n.",definition:"Estrangement."},{word:"aliment",partOfSpeech:"n.",definition:"That which nourishes."},{word:"alkali",partOfSpeech:"n.",definition:"Anything that will neutralize an acid, as lime or magnesia."},{word:"allay",partOfSpeech:"v.",definition:"To calm the violence or reduce the intensity of; mitigate."},{word:"allege",partOfSpeech:"v.",definition:"To assert to be true, especially in a formal manner, as in court."},{word:"allegory",partOfSpeech:"n.",definition:"The setting forth of a subject under the guise of another subject of aptly suggestive likeness."},{word:"alleviate",partOfSpeech:"v.",definition:"To make less burdensome or less hard to bear."},{word:"alley",partOfSpeech:"n.",definition:"A narrow street, garden path, walk, or the like."},{word:"alliance",partOfSpeech:"n.",definition:"Any combination or union for some common purpose."},{word:"allot",partOfSpeech:"v.",definition:"To assign a definite thing or part to a certain person."},{word:"allotment",partOfSpeech:"n.",definition:"Portion."},{word:"allude",partOfSpeech:"v.",definition:"To refer incidentally, or by suggestion."},{word:"allusion",partOfSpeech:"n.",definition:"An indirect and incidental reference to something without definite mention of it."},{word:"alluvion",partOfSpeech:"n.",definition:"Flood."},{word:"ally",partOfSpeech:"n.",definition:"A person or thing connected with another, usually in some relation of helpfulness."},{word:"almanac",partOfSpeech:"n.",definition:"A series of tables giving the days of the week together with certain astronomical information."},{word:"aloof",partOfSpeech:"adv.",definition:"Not in sympathy with or desiring to associate with others."},{word:"altar",partOfSpeech:"n.",definition:"Any raised place or structure on which sacrifices may be offered or incense burned."},{word:"alter",partOfSpeech:"v.",definition:"To make change in."},{word:"alteration",partOfSpeech:"n.",definition:"Change or modification."},{word:"altercate",partOfSpeech:"v.",definition:"To contend angrily or zealously in words."},{word:"alternate",partOfSpeech:"n.",definition:"One chosen to act in place of another in case of the absence or incapacity of that other."},{word:"alternative",partOfSpeech:"n.",definition:"Something that may or must exist, be taken, chosen, or done instead of something else."},{word:"altitude",partOfSpeech:"n.",definition:"Vertical distance or elevation above any point or base-level, as the sea."},{word:"alto",partOfSpeech:"n.",definition:"The lowest or deepest female voice or part."},{word:"altruism",partOfSpeech:"n.",definition:"Benevolence to others in subordination to self-interest."},{word:"altruist",partOfSpeech:"n.",definition:"One who advocates or practices altruism."},{word:"amalgam",partOfSpeech:"n.",definition:"An alloy or union of mercury with another metal."},{word:"amalgamate",partOfSpeech:"v.",definition:"To mix or blend together in a homogeneous body."},{word:"amateur",partOfSpeech:"adj.",definition:"Practicing an art or occupation for the love of it, but not as a profession."},{word:"amatory",partOfSpeech:"adj.",definition:"Designed to excite love."},{word:"ambidextrous",partOfSpeech:"adj.",definition:"Having the ability of using both hands with equal skill or ease."},{word:"ambiguous",partOfSpeech:"adj.",definition:"Having a double meaning."},{word:"ambitious",partOfSpeech:"adj.",definition:"Eagerly desirous and aspiring."},{word:"ambrosial",partOfSpeech:"adj.",definition:"Divinely sweet, fragrant, or delicious."},{word:"ambulance",partOfSpeech:"n.",definition:"A vehicle fitted for conveying the sick and wounded."},{word:"ambulate",partOfSpeech:"v.",definition:"To walk about."},{word:"ambush",partOfSpeech:"n.",definition:"The act or state of lying concealed for the purpose of surprising or attacking the enemy."},{word:"ameliorate",partOfSpeech:"v.",definition:"To relieve, as from pain or hardship."},{word:"amenable",partOfSpeech:"adj.",definition:"Willing and ready to submit."},{word:"Americanism",partOfSpeech:"n.",definition:"A peculiar sense in which an English word or phrase is used in the United States."},{word:"amicable",partOfSpeech:"adj.",definition:"Done in a friendly spirit."},{word:"amity",partOfSpeech:"n.",definition:"Friendship."},{word:"amorous",partOfSpeech:"adj.",definition:"Having a propensity for falling in love."},{word:"amorphous",partOfSpeech:"adj.",definition:"Without determinate shape."},{word:"amour",partOfSpeech:"n.",definition:"A love-affair, especially one of an illicit nature."},{word:"ampere",partOfSpeech:"n.",definition:"The practical unit of electric-current strength."},{word:"ampersand",partOfSpeech:"n.",definition:"The character '&'."},{word:"amphibious",partOfSpeech:"adj.",definition:"Living both on land and in water."},{word:"amphitheater",partOfSpeech:"n.",definition:"An edifice of elliptical shape constructed about a central open space or arena."},{word:"amplitude",partOfSpeech:"n.",definition:"Largeness."},{word:"amply",partOfSpeech:"adv.",definition:"Sufficiently."},{word:"amputate",partOfSpeech:"v.",definition:"To remove by cutting, as a limb or some portion of the body."},{word:"amusement",partOfSpeech:"n.",definition:"Diversion."},{word:"anachronism",partOfSpeech:"n.",definition:"Anything occurring or existing out of its proper time."},{word:"anagram",partOfSpeech:"n.",definition:"The letters of a word or phrase so transposed as to make a different word or phrase."},{word:"analogous",partOfSpeech:"adj.",definition:"Corresponding in certain respects, as in form, proportion, or relation."},{word:"analogy",partOfSpeech:"n.",definition:"Reasoning in which from certain known relations or resemblances others are inferred."},{word:"analyst",partOfSpeech:"n.",definition:"One who analyzes or makes use of the analytical method."},{word:"analyze",partOfSpeech:"v.",definition:"To examine minutely or critically."},{word:"anarchy",partOfSpeech:"n.",definition:"Absence or utter disregard of government."},{word:"anathema",partOfSpeech:"n.",definition:"Anything forbidden, as by social usage."},{word:"anatomy",partOfSpeech:"n.",definition:"That branch of morphology which treats of the structure of organisms."},{word:"ancestry",partOfSpeech:"n.",definition:"One's ancestors collectively."},{word:"anecdote",partOfSpeech:"n.",definition:"A brief account of some interesting event or incident."},{word:"anemia",partOfSpeech:"n.",definition:"Deficiency of blood or red corpuscles."},{word:"anemic",partOfSpeech:"adj.",definition:"Affected with anemia."},{word:"anemometer",partOfSpeech:"n.",definition:"An instrument for measuring the force or velocity of wind."},{word:"anesthetic",partOfSpeech:"adj.",definition:"Pertaining to or producing loss of sensation."},{word:"anew",partOfSpeech:"adv.",definition:"Once more."},{word:"angelic",partOfSpeech:"adj.",definition:"Saintly."},{word:"Anglophobia",partOfSpeech:"n.",definition:"Hatred or dread of England or of what is English."},{word:"Anglo-Saxon",partOfSpeech:"n.",definition:"The entire English race wherever found, as in Europe, the United States, or India."},{word:"angular",partOfSpeech:"adj.",definition:"Sharp-cornered."},{word:"anhydrous",partOfSpeech:"adj.",definition:"Withered."},{word:"animadversion",partOfSpeech:"n.",definition:"The utterance of criticism or censure."},{word:"animadvert",partOfSpeech:"v.",definition:"To pass criticism or censure."},{word:"animalcule",partOfSpeech:"n.",definition:"An animal of microscopic smallness."},{word:"animate",partOfSpeech:"v.",definition:"To make alive."},{word:"animosity",partOfSpeech:"n.",definition:"Hatred."},{word:"annalist",partOfSpeech:"n.",definition:"Historian."},{word:"annals",partOfSpeech:"n.",definition:"A record of events in chronological order, year by year."},{word:"annex",partOfSpeech:"v.",definition:"To add or affix at the end."},{word:"annihilate",partOfSpeech:"v.",definition:"To destroy absolutely."},{word:"annotate",partOfSpeech:"v.",definition:"To make explanatory or critical notes on or upon."},{word:"annual",partOfSpeech:"adj.",definition:"Occurring every year."},{word:"annuity",partOfSpeech:"n.",definition:"An annual allowance, payment, or income."},{word:"annunciation",partOfSpeech:"n.",definition:"Proclamation."},{word:"anode",partOfSpeech:"n.",definition:"The point where or path by which a voltaic current enters an electrolyte or the like."},{word:"anonymous",partOfSpeech:"adj.",definition:"Of unknown authorship."},{word:"antagonism",partOfSpeech:"n.",definition:"Mutual opposition or resistance of counteracting forces, principles, or persons."},{word:"Antarctic",partOfSpeech:"adj.",definition:"Pertaining to the south pole or the regions near it."},{word:"ante",partOfSpeech:"v.",definition:"In poker, to put up a stake before the cards are dealt."},{word:"antecede",partOfSpeech:"v.",definition:"To precede."},{word:"antecedent",partOfSpeech:"n.",definition:"One who or that which precedes or goes before, as in time, place, rank, order, or causality."},{word:"antechamber",partOfSpeech:"n.",definition:"A waiting room for those who seek audience."},{word:"antedate",partOfSpeech:"v.",definition:"To assign or affix a date earlier than the actual one."},{word:"antediluvian",partOfSpeech:"adj.",definition:"Of or pertaining to times, things, or events before the great flood in the days of Noah."},{word:"antemeridian",partOfSpeech:"adj.",definition:"Before noon."},{word:"antemundane",partOfSpeech:"adj.",definition:"Pertaining to time before the world's creation."},{word:"antenatal",partOfSpeech:"adj.",definition:"Occurring or existing before birth."},{word:"anterior",partOfSpeech:"adj.",definition:"Prior."},{word:"anteroom",partOfSpeech:"n.",definition:"A room situated before and opening into another, usually larger."},{word:"anthology",partOfSpeech:"n.",definition:"A collection of extracts from the writings of various authors."},{word:"anthracite",partOfSpeech:"n.",definition:"Hard coal."},{word:"anthropology",partOfSpeech:"n.",definition:"The science of man in general."},{word:"anthropomorphous",partOfSpeech:"adj.",definition:"Having or resembling human form."},{word:"antic",partOfSpeech:"n.",definition:"A grotesque, ludicrous, or fantastic action."},{word:"Antichrist",partOfSpeech:"n.",definition:"Any opponent or enemy of Christ, whether a person or a power."},{word:"anticlimax",partOfSpeech:"n.",definition:"A gradual or sudden decrease in the importance or impressiveness of what is said."},{word:"anticyclone",partOfSpeech:"n.",definition:"An atmospheric condition of high central pressure, with currents flowing outward."},{word:"antidote",partOfSpeech:"n.",definition:"Anything that will counteract or remove the effects of poison, disease, or the like."},{word:"antilogy",partOfSpeech:"n.",definition:"Inconsistency or contradiction in terms or ideas."},{word:"antipathize",partOfSpeech:"v.",definition:"To show or feel antagonism, aversion, or dislike."},{word:"antiphon",partOfSpeech:"n.",definition:"A response or alteration of responses, generally musical."},{word:"antiphony",partOfSpeech:"n.",definition:"An anthem or other composition sung responsively."},{word:"antipodes",partOfSpeech:"n.",definition:"A place or region on the opposite side of the earth."},{word:"antiquary",partOfSpeech:"n.",definition:"One who collects and examines old things, as coins, books, medals, or weapons."},{word:"antiquate",partOfSpeech:"v.",definition:"To make old or out of date."},{word:"antique",partOfSpeech:"adj.",definition:"Pertaining to ancient times."},{word:"antiseptic",partOfSpeech:"n.",definition:"Anything that destroys or restrains the growth of putrefactive micro-organisms."},{word:"antislavery",partOfSpeech:"adj.",definition:"Opposed to human slavery."},{word:"antispasmodic",partOfSpeech:"adj.",definition:"Tending to prevent or relieve non-inflammatory spasmodic affections."},{word:"antistrophe",partOfSpeech:"n.",definition:"The inversion of terms in successive clauses, as in 'the home of joy' and 'the joy of home'."},{word:"antitoxin",partOfSpeech:"n.",definition:"A substance which neutralizes the poisonous products of micro-organisms."},{word:"antonym",partOfSpeech:"n.",definition:"A word directly opposed to another in meaning."},{word:"anxious",partOfSpeech:"adj.",definition:"Distressed in mind respecting some uncertain matter."},{word:"apathy",partOfSpeech:"n.",definition:"Insensibility to emotion or passionate feeling."},{word:"aperture",partOfSpeech:"n.",definition:"Hole."},{word:"apex",partOfSpeech:"n.",definition:"The highest point, as of a mountain."},{word:"aphorism",partOfSpeech:"n.",definition:"Proverb."},{word:"apiary",partOfSpeech:"n.",definition:"A place where bees are kept."},{word:"apogee",partOfSpeech:"n.",definition:"The climax."},{word:"apology",partOfSpeech:"n.",definition:"A disclaimer of intentional error or offense."},{word:"apostasy",partOfSpeech:"n.",definition:"A total departure from one's faith or religion."},{word:"apostate",partOfSpeech:"adj.",definition:"False."},{word:"apostle",partOfSpeech:"n.",definition:"Any messenger commissioned by or as by divine authority."},{word:"apothecary",partOfSpeech:"n.",definition:"One who keeps drugs for sale and puts up prescriptions."},{word:"apotheosis",partOfSpeech:"n.",definition:"Deification."},{word:"appall",partOfSpeech:"v.",definition:"To fill with dismay or horror."},{word:"apparent",partOfSpeech:"adj.",definition:"Easily understood."},{word:"apparition",partOfSpeech:"n.",definition:"Ghost."},{word:"appease",partOfSpeech:"v.",definition:"To soothe by quieting anger or indignation."},{word:"appellate",partOfSpeech:"adj.",definition:"Capable of being appealed to."},{word:"appellation",partOfSpeech:"n.",definition:"The name or title by which a particular person, class, or thing is called."},{word:"append",partOfSpeech:"v.",definition:"To add or attach, as something accessory, subordinate, or supplementary."},{word:"appertain",partOfSpeech:"v.",definition:"To belong, as by right, fitness, association, classification, possession, or natural relation."},{word:"apposite",partOfSpeech:"adj.",definition:"Appropriate."},{word:"apposition",partOfSpeech:"n.",definition:"The act of placing side by side, together, or in contact."},{word:"appraise",partOfSpeech:"v.",definition:"To estimate the money value of."},{word:"appreciable",partOfSpeech:"adj.",definition:"Capable of being discerned by the senses or intellect."},{word:"apprehend",partOfSpeech:"v.",definition:"To make a prisoner of a person in the name of the law."},{word:"apprehensible",partOfSpeech:"adj.",definition:"Capable of being conceived."},{word:"approbation",partOfSpeech:"n.",definition:"Sanction."},{word:"appropriate",partOfSpeech:"adj.",definition:"Suitable for the purpose and circumstances."},{word:"aqueduct",partOfSpeech:"n.",definition:"A water-conduit, particularly one for supplying a community from a distance."},{word:"aqueous",partOfSpeech:"adj.",definition:"Of, pertaining to, or containing water."},{word:"arbiter",partOfSpeech:"n.",definition:"One chosen or appointed by mutual consent of parties in dispute to decide matters."},{word:"arbitrary",partOfSpeech:"adj.",definition:"Fixed or done capriciously."},{word:"arbitrate",partOfSpeech:"v.",definition:"To act or give judgment as umpire."},{word:"arbor",partOfSpeech:"n.",definition:"A tree."},{word:"arboreal",partOfSpeech:"adj.",definition:"Of or pertaining to a tree or trees."},{word:"arborescent",partOfSpeech:"adj.",definition:"Having the nature of a tree."},{word:"arboretum",partOfSpeech:"n.",definition:"A botanical garden or place devoted to the cultivation of trees or shrubs."},{word:"arboriculture",partOfSpeech:"n.",definition:"The cultivation of trees or shrubs."},{word:"arcade",partOfSpeech:"n.",definition:"A vaulted passageway or street; a roofed passageway having shops opening from it."},{word:"archaic",partOfSpeech:"adj.",definition:"Antiquated."},{word:"archaism",partOfSpeech:"n.",definition:"Obsolescence."},{word:"archangel",partOfSpeech:"n.",definition:"An angel of high rank."},{word:"archbishop",partOfSpeech:"n.",definition:"The chief of the bishops of an ecclesiastical province in the Greek, Roman, and Anglican church."}],f=[...T,...k,...A],C="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),H=()=>{const[p,h]=s.useState(""),[t,c]=s.useState("ALL"),d=s.useMemo(()=>{const i=p.trim().toLowerCase();return f.filter(o=>{const r=!i||o.word.toLowerCase().includes(i)||o.definition.toLowerCase().includes(i),b=t==="ALL"||o.word.charAt(0).toUpperCase()===t;return r&&b})},[p,t]),l=s.useMemo(()=>d.reduce((i,o)=>{const r=o.word.charAt(0).toUpperCase();return i[r]||(i[r]=[]),i[r].push(o),i},{}),[d]),g=Object.keys(l).sort(),m=()=>{h(""),c("ALL")};return e.jsxs(n.Wrapper,{className:"topicWrapper",children:[e.jsxs(n.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(S,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(O,{}),"Original topic: July 21, 2012"]}),e.jsx(j,{})]}),e.jsx("h1",{children:"5000 Collegiate Words with Brief Definitions"}),e.jsx("p",{className:"lead",children:"This page is a refactored version of the old blog archive entry. The original post was essentially a large vocabulary list. Here it is reorganized into a cleaner searchable glossary layout so it is easier to browse, revise, and grow over time."}),e.jsxs("div",{className:"statsRow",children:[e.jsxs("div",{className:"statCard",children:[e.jsx("span",{className:"statIcon",children:e.jsx(v,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:f.length}),e.jsx("span",{children:"Entries currently added here"})]})]}),e.jsxs("div",{className:"statCard",children:[e.jsx("span",{className:"statIcon",children:e.jsx(y,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:d.length}),e.jsx("span",{children:"Entries matching current filters"})]})]}),e.jsxs("div",{className:"statCard",children:[e.jsx("span",{className:"statIcon",children:e.jsx(w,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"5000"}),e.jsx("span",{children:"Original target list from archive title"})]})]})]})]}),e.jsxs(n.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(w,{})}),e.jsx("h2",{children:"About this refactored page"})]}),e.jsx("p",{children:"The original archive post was a long word list. In this version, the content is arranged like a mini dictionary with search, alphabet filtering, grouped sections, and word cards."}),e.jsx("p",{children:"I have included every entry that you pasted in your message. Since the middle part of the original list was not included here and was replaced by dots, this page is structured so the remaining entries can be added cleanly in the same data array without changing the layout."})]}),e.jsxs(n.ControlCard,{children:[e.jsx("div",{className:"controlTop",children:e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(u,{})}),e.jsx("h2",{children:"Explore the glossary"})]})}),e.jsxs("div",{className:"searchRow",children:[e.jsxs("div",{className:"searchBox",children:[e.jsx(u,{className:"searchIcon"}),e.jsx("input",{type:"text",value:p,onChange:i=>h(i.target.value),placeholder:"Search by word or definition...","aria-label":"Search words and definitions"})]}),e.jsx("button",{type:"button",className:"clearBtn",onClick:m,children:"Reset filters"})]}),e.jsxs("div",{className:"alphabetRow",children:[e.jsx("button",{type:"button",className:`alphaBtn ${t==="ALL"?"active":""}`,onClick:()=>c("ALL"),children:"All"}),C.map(i=>{const o=f.some(r=>r.word.charAt(0).toUpperCase()===i);return e.jsx("button",{type:"button",className:`alphaBtn ${t===i?"active":""} ${o?"":"disabledLike"}`,onClick:()=>c(i),children:i},i)})]})]}),e.jsxs(n.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Glossary view"})]}),d.length?e.jsx("div",{className:"groupStack",children:g.map(i=>e.jsxs("section",{className:"letterSection",children:[e.jsxs("div",{className:"letterHeader",children:[e.jsx("span",{className:"letterBadge",children:i}),e.jsxs("h3",{children:["Words starting with ",i]})]}),e.jsx("div",{className:"wordGrid",children:l[i].map(o=>e.jsxs("article",{className:"wordCard",children:[e.jsxs("div",{className:"wordTop",children:[e.jsx("h4",{children:o.word}),e.jsx("span",{className:"partTag",children:o.partOfSpeech})]}),e.jsx("p",{children:o.definition})]},`${o.word}-${o.definition}`))})]},i))}):e.jsx("div",{className:"emptyState",children:"No entries match the current search or letter filter."})]}),e.jsxs(n.FooterNote,{children:[e.jsx("h2",{children:"How to complete the full archive version"}),e.jsxs("p",{children:["To restore the full original post, continue adding the missing words into the ",e.jsx("strong",{children:"wordsData"})," array using the same object format:"]}),e.jsx("pre",{children:`{
    word: "example",
    partOfSpeech: "n.",
    definition: "A brief definition goes here.",
}`}),e.jsx("p",{children:"Once the full list is pasted in, this page will automatically support search, filtering, grouping, and clean reading without any additional layout changes."})]})]})};export{H as default};
