import React, { useMemo, useState } from "react";
import {
    FiHeart,
    FiClock,
    FiSearch,
    FiArchive,
    FiGift,
    FiStar,
    FiMessageCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const romanticIdeas = [
    {
        id: 1,
        title: "Tiny teddy bodyguard",
        summary:
            "If your partner is going away for a few days, tell her you arranged a bodyguard to look after her and then give her a small teddy bear.",
    },
    {
        id: 2,
        title: "Glow-in-the-dark ceiling message",
        summary:
            "Stick glow-in-the-dark stars above the bed to spell out a message like 'I Love You' so it appears when the lights go out.",
    },
    {
        id: 3,
        title: "Eleven real roses and one artificial rose",
        summary:
            "Give a bouquet with eleven real red roses and one artificial red rose, along with a note that says: 'I will love you until the last rose fades.'",
    },
    {
        id: 4,
        title: "Secret domain name surprise",
        summary:
            "Buy your partner's domain name if available, create a romantic webpage, and casually ask if she has ever checked whether her name is taken online.",
    },
    {
        id: 5,
        title: "Mirror compliment gift",
        summary:
            "Give a stylish hand mirror with a card that says the most beautiful woman in the world is the one reflected in it.",
    },
    {
        id: 6,
        title: "Hidden message inside a book",
        summary:
            "Underline letters in a section of a book your partner has not yet read so the marked letters form a secret love message.",
    },
    {
        id: 7,
        title: "Flowers at work",
        summary:
            "Have flowers delivered to your partner's workplace so she enjoys both the flowers and the extra attention from colleagues.",
    },
    {
        id: 8,
        title: "Engraved stone memory",
        summary:
            "Pick up a smooth stone on a trip, then later have a message engraved into it and gift it as a keepsake.",
    },
    {
        id: 9,
        title: "Cloud-shape game",
        summary:
            "Lie together on a grassy hill and play the childhood game of finding shapes in the clouds.",
    },
    {
        id: 10,
        title: "Childlike drawing by post",
        summary:
            "Draw a bright, simple picture with your names and a heart, then mail it to your partner's workplace in a formal envelope.",
    },
    {
        id: 11,
        title: "Recite a Shakespeare sonnet",
        summary:
            "Memorize a romantic sonnet and recite it gently in a quiet, affectionate setting instead of using a cliché poem.",
    },
    {
        id: 12,
        title: "Late-night survival pack",
        summary:
            "If your partner is working late, prepare a small box filled with comforting favorite things and label it as a survival pack.",
    },
    {
        id: 13,
        title: "Visit the swings",
        summary:
            "If you pass a park, stop and give your partner a ride on the swings to bring back happy childhood memories.",
    },
    {
        id: 14,
        title: "Rose with a thank-you note",
        summary:
            "Leave a long-stem rose somewhere your partner will find it with a note saying thank you for coming into your life.",
    },
    {
        id: 15,
        title: "Confidence tape for a new job",
        summary:
            "If your partner is starting a new job, record an encouraging message after an uplifting song and give it for the drive to work.",
    },
    {
        id: 16,
        title: "Massage appointment gift box",
        summary:
            "Prepare a gift box with massage oil and a card that offers an appointment with a great masseur using your phone number.",
    },
    {
        id: 17,
        title: "Full comfort evening after a hard day",
        summary:
            "Run a hot bath, gently wash your partner, dry her, tuck her into a freshly made bed, and finish with a kiss on the forehead.",
    },
    {
        id: 18,
        title: "Private slow dance with shared earphones",
        summary:
            "Take a favorite song on a portable player and share earphones so you can dance together in a place people would not expect.",
    },
    {
        id: 19,
        title: "Gift for the beloved pet",
        summary:
            "If your partner loves a pet deeply, include a small gift for the pet on a special occasion.",
    },
    {
        id: 20,
        title: "Love heart in the sand",
        summary:
            "Trace a large heart in the sand on a beach, sit inside it together, and watch the sunset.",
    },
    {
        id: 21,
        title: "Backpack surprise picnic",
        summary:
            "Pack a hidden luxury picnic and reveal it one item at a time after telling your partner the backpack only contains a jacket and lunch.",
    },
    {
        id: 22,
        title: "Play music from below a balcony",
        summary:
            "If you play an instrument, arrange for your partner to step outside at a certain time and perform something slow and romantic.",
    },
    {
        id: 23,
        title: "Miss you already email",
        summary:
            "If your partner leaves for work and you stay home, send a short email to her inbox saying you miss her already.",
    },
    {
        id: 24,
        title: "Brush her hair slowly",
        summary:
            "Take time to brush your partner's long hair with slow, gentle strokes, especially after a shower or before bed.",
    },
    {
        id: 25,
        title: "Treasure hunt gift",
        summary:
            "Create a treasure hunt with a bottle, map, key, hidden clues, and a buried locked box containing your gift.",
    },
    {
        id: 26,
        title: "Mission Impossible date invite",
        summary:
            "Invite your partner on a date using a playful recorded mission briefing with a secret meeting location and time.",
    },
    {
        id: 27,
        title: "Childhood wish fulfilled",
        summary:
            "Ask your partner's family what she always wanted as a child and give it to her on a special day.",
    },
    {
        id: 28,
        title: "Professional couple portrait",
        summary:
            "Organize a professional photo shoot, frame the portrait, and display it somewhere meaningful.",
    },
    {
        id: 29,
        title: "Simple smile note",
        summary:
            "Leave a note somewhere your partner will find it saying you thought of her today and it made you smile.",
    },
    {
        id: 30,
        title: "Valentine's charm bracelet countdown",
        summary:
            "Give a charm bracelet piece by piece over the first days of February and present the bracelet itself on Valentine's Day.",
    },
    {
        id: 31,
        title: "Sticker photo booth kiss",
        summary:
            "Stop at an instant photo booth, choose a romantic background, and kiss while the photo is being taken.",
    },
    {
        id: 32,
        title: "Voice message reminder",
        summary:
            "Leave a voice message just to say you are thinking of your partner, especially during a rough period.",
    },
    {
        id: 33,
        title: "Mystery trip",
        summary:
            "Organize a mystery travel package where the destination stays secret until the journey is underway.",
    },
    {
        id: 34,
        title: "Rose petals behind the sun visor",
        summary:
            "Hide rose petals and a note behind the passenger sun visor so they fall out when your partner pulls it down.",
    },
    {
        id: 35,
        title: "Suitcase surprise",
        summary:
            "If your partner is going on a trip, hide a small present in the corner of the suitcase to be discovered later.",
    },
    {
        id: 36,
        title: "Engraved anniversary glasses",
        summary:
            "Have champagne glasses engraved with your names and date, then arrange for them to be used at your anniversary dinner.",
    },
    {
        id: 37,
        title: "Birthday roses delivered by strangers",
        summary:
            "Arrange for a series of people to hand your partner single roses before you arrive with the remaining bouquet.",
    },
    {
        id: 38,
        title: "Recreate a nostalgic favorite",
        summary:
            "Listen carefully to things your partner reminisces about and later recreate one of those memories.",
    },
    {
        id: 39,
        title: "Love montage frame",
        summary:
            "Collect photos, ticket stubs, and little keepsakes from your relationship and have them framed as a montage.",
    },
    {
        id: 40,
        title: "The key to my heart box",
        summary:
            "Place an old-fashioned key in a lined box and add a plaque inside that says it is the key to your heart.",
    },
    {
        id: 41,
        title: "Plant a tree together",
        summary:
            "Buy and plant a tree together, then revisit it each anniversary with champagne and conversation.",
    },
    {
        id: 42,
        title: "Steam-written mirror message",
        summary:
            "Write a loving message on a steamed-up bathroom mirror or car window for your partner to discover.",
    },
    {
        id: 43,
        title: "Name a star",
        summary:
            "As a symbolic gift, name a star after your partner and present the formal documentation.",
    },
    {
        id: 44,
        title: "Customized comic strip",
        summary:
            "Take a comic strip that relates to your shared life, replace the dialogue, and create a custom version for your partner.",
    },
    {
        id: 45,
        title: "Watch the sunrise together",
        summary:
            "Wake early on a trip and go somewhere scenic to watch the sunrise together.",
    },
    {
        id: 46,
        title: "Spa atmosphere at home",
        summary:
            "Create a spa-like bath setting with candles, rose petals, champagne, and chocolate-covered strawberries.",
    },
    {
        id: 47,
        title: "Love coupons",
        summary:
            "Create romantic coupons your partner can redeem for affectionate favors like massages or special treats.",
    },
    {
        id: 48,
        title: "Backyard night picnic",
        summary:
            "Spread a blanket in the backyard, bring snacks and drinks, and lie together under the stars.",
    },
    {
        id: 49,
        title: "Walk in the rain",
        summary:
            "Forget the umbrella, run through the rain together, kiss in the storm, then come home for a warm shower and drink.",
    },
    {
        id: 50,
        title: "Hot air balloon ride",
        summary:
            "Organize a hot air balloon trip as a memorable romantic surprise.",
    },
    {
        id: 51,
        title: "Desk-side massage",
        summary:
            "Come up behind your seated partner and give a back, shoulder, and head massage finished with a kiss on the cheek.",
    },
    {
        id: 52,
        title: "Newspaper love message",
        summary:
            "Place a small loving message in the newspaper on an ordinary day for your partner to find.",
    },
    {
        id: 53,
        title: "Read a shared book aloud",
        summary:
            "Choose a book you both want to read and take turns reading a chapter aloud in bed each night.",
    },
    {
        id: 54,
        title: "Warm towel after shower",
        summary:
            "Put your partner's towel in the dryer so it is warm and wrap her in it after a bath or shower.",
    },
    {
        id: 55,
        title: "Faxed hand-holding joke",
        summary:
            "Photocopy your hand and send it with a playful message asking whether your partner wants to hold hands.",
    },
    {
        id: 56,
        title: "Heart-shaped pizza",
        summary:
            "When ordering pizza, ask for it to be cut into a heart shape before delivery.",
    },
    {
        id: 57,
        title: "Love note inside chocolates",
        summary:
            "Open a boxed chocolate package carefully, place a note inside, and reseal it as a sweet surprise.",
    },
    {
        id: 58,
        title: "Tandem bike date",
        summary:
            "Rent a tandem bike, go for a ride together, and finish with a picnic in the park.",
    },
    {
        id: 59,
        title: "A day in my life letter",
        summary:
            "If you are away on business, write a timeline-style letter showing how often you think of your partner during the day.",
    },
    {
        id: 60,
        title: "Read a favorite childhood book",
        summary:
            "Find out your partner's favorite childhood book and read it to her in bed.",
    },
    {
        id: 61,
        title: "Write a story together by email",
        summary:
            "Start a fictional or semi-fictional story by email and pass each chapter back and forth.",
    },
    {
        id: 62,
        title: "Fly a kite together",
        summary:
            "Buy a kite and spend a windy day in the park flying it with your partner.",
    },
    {
        id: 63,
        title: "Adventure dinner",
        summary:
            "Use coin flips and timed directions to let chance lead you to a new place to eat together.",
    },
    {
        id: 64,
        title: "Play paparazzi with a camera",
        summary:
            "Act like a celebrity photographer while taking playful photos of your partner before a special outing.",
    },
    {
        id: 65,
        title: "Care day when sick",
        summary:
            "If your partner is sick, stay with her, make soup, rent movies, and take care of her all day.",
    },
    {
        id: 66,
        title: "Help make a dream happen",
        summary:
            "Ask what your partner has always wanted to do, write it down, and later arrange one of those dreams as a surprise.",
    },
    {
        id: 67,
        title: "Classic romantic film night",
        summary:
            "Plan a movie night around a classic romance with popcorn, champagne, and chocolate-covered strawberries.",
    },
    {
        id: 68,
        title: "Drive-in picnic",
        summary:
            "Go to a drive-in movie but sit on a picnic blanket outside the car with popcorn and a candle.",
    },
    {
        id: 69,
        title: "Personalized magazine cover",
        summary:
            "Create a fake magazine cover starring your partner and let her discover it among real magazines.",
    },
    {
        id: 70,
        title: "Balloon-filled trunk surprise",
        summary:
            "Fill the trunk of your car with helium balloons and reveal them at a scenic spot in the countryside.",
    },
    {
        id: 71,
        title: "Matching love t-shirts",
        summary:
            "Create two white t-shirts that complete a heart and spell out love when you stand close together.",
    },
    {
        id: 72,
        title: "Water pistol fight",
        summary:
            "On a hot summer day, bring two water pistols to the beach and have a playful water fight.",
    },
    {
        id: 73,
        title: "Share your food",
        summary:
            "Offer bites from your meal and feed each other to create a simple kind of closeness.",
    },
    {
        id: 74,
        title: "Public compliment",
        summary:
            "Compliment your partner in front of others in a natural and affectionate way.",
    },
    {
        id: 75,
        title: "Whole day off together",
        summary:
            "Arrange a day away from work and spend it moving gently from breakfast to park to café to dinner.",
    },
    {
        id: 76,
        title: "Gift voucher for self-care",
        summary:
            "Give a beauty or spa voucher with a card saying it is a special treat for someone special.",
    },
    {
        id: 77,
        title: "Return home like a hero",
        summary:
            "Even after a tiny errand, act as though you survived an epic journey and greet your partner dramatically.",
    },
    {
        id: 78,
        title: "Thank-you note",
        summary:
            "Write a thank-you note for something your partner did and let the appreciation be specific and sincere.",
    },
    {
        id: 79,
        title: "Weekend without the kids",
        summary:
            "Arrange for the children to stay elsewhere so the weekend becomes dedicated time for just the two of you.",
    },
    {
        id: 80,
        title: "Magic gift box",
        summary:
            "Give your partner a box that receives a new small surprise gift every month.",
    },
    {
        id: 81,
        title: "Useful hobby gift",
        summary:
            "Research your partner's favorite hobby deeply and buy something truly useful and thoughtful within that interest.",
    },
    {
        id: 82,
        title: "Masquerade ball entrance",
        summary:
            "Go to a masquerade ball, meet in masks, say nothing at first, and lead your partner onto the dance floor.",
    },
    {
        id: 83,
        title: "Secret weekend escape",
        summary:
            "Ask your partner to pack for the weekend without explanation, then drive to a romantic bed and breakfast.",
    },
    {
        id: 84,
        title: "Crystal ball future drawings",
        summary:
            "Draw crystal balls on paper and each sketch what you imagine five years in the future looks like together.",
    },
    {
        id: 85,
        title: "Create a loving nickname",
        summary:
            "Give your partner a private affectionate nickname that belongs only to the two of you.",
    },
    {
        id: 86,
        title: "Write a love song",
        summary:
            "If you are musical, write a song for your partner, record it, print the manuscript, and gift both beautifully.",
    },
    {
        id: 87,
        title: "Blindfold destination reveal",
        summary:
            "Blindfold your partner for a date and remove it only when you arrive somewhere truly unexpected and memorable.",
    },
    {
        id: 88,
        title: "Feather pillow fight",
        summary:
            "Set up a huge playful pillow fight with feather pillows and enjoy the chaos together.",
    },
    {
        id: 89,
        title: "Campfire marshmallow night",
        summary:
            "After a day outdoors, build a fire, toast marshmallows, and sit close while watching sparks rise into the night.",
    },
    {
        id: 90,
        title: "Set a shared photo as wallpaper",
        summary:
            "Place a photo of the two of you on your partner's computer as wallpaper.",
    },
    {
        id: 91,
        title: "Draw your partner",
        summary:
            "If you are artistically inclined, practice life drawing and then ask your partner to pose for you.",
    },
    {
        id: 92,
        title: "Go to a carnival or festival",
        summary:
            "Take your partner to a festival such as food, jazz, wine, or music and enjoy the atmosphere together.",
    },
    {
        id: 93,
        title: "Video time capsule",
        summary:
            "Record a video together for a future anniversary and speak on camera about how you feel right now.",
    },
    {
        id: 94,
        title: "Skinny dip in a secluded place",
        summary:
            "If the setting is private and the weather is warm, go for an impulsive swim together.",
    },
    {
        id: 95,
        title: "Long-distance surprise visit",
        summary:
            "Coordinate an online chat distraction while secretly traveling to your partner's door, then knock at the perfect line.",
    },
    {
        id: 96,
        title: "Goldfish pun gift",
        summary:
            "Give your partner a goldfish in a bowl with a playful card saying that of all the fish in the sea, she is the fish for you.",
    },
    {
        id: 97,
        title: "Nature sounds drive",
        summary:
            "Go for a drive at dawn or dusk while holding hands and playing a recording of rainforest or nature sounds.",
    },
    {
        id: 98,
        title: "Birthday bedroom surprise",
        summary:
            "While your partner sleeps, decorate the room with balloons, streamers, and flowers so she wakes to a surprise.",
    },
    {
        id: 99,
        title: "Bookshop afternoon",
        summary:
            "Spend a long unhurried afternoon together in a large bookstore browsing shelves, sharing coffee, and reading your purchases.",
    },
    {
        id: 100,
        title: "Convertible coast drive",
        summary:
            "If possible, hire a sports car for the weekend and go for a scenic coastal drive with the top down.",
    },
    {
        id: 101,
        title: "Breakfast in bed",
        summary:
            "Serve your partner breakfast in bed with thoughtful details like a heart-shaped egg, French toast, juice, cereal, and a fresh flower.",
    },
];

const RomanticIdeas101 = () => {
    const [search, setSearch] = useState("");

    const filteredIdeas = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) {
            return romanticIdeas;
        }

        return romanticIdeas.filter((idea) => {
            return (
                idea.title.toLowerCase().includes(query) ||
                idea.summary.toLowerCase().includes(query) ||
                String(idea.id).includes(query)
            );
        });
    }, [search]);

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
                        Original topic: July 21, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>101 Romantic Ideas</h1>

                <p className="lead">
                    This page is a cleaned-up archive version of an old blog
                    post that collected playful, thoughtful, dramatic, cheesy,
                    sweet, and sometimes gloriously over-the-top romantic ideas.
                    The original spirit is kept, but the layout is now easier to
                    browse and search.
                </p>

                <div className="metaGrid">
                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiHeart />
                        </span>
                        <div>
                            <strong>101 ideas</strong>
                            <span>
                                From tiny gestures to full surprise plans
                            </span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiGift />
                        </span>
                        <div>
                            <strong>Mix of styles</strong>
                            <span>
                                Gifts, notes, dates, adventures, and rituals
                            </span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiStar />
                        </span>
                        <div>
                            <strong>Archive context</strong>
                            <span>
                                Old-school romantic internet energy, now
                                organized
                            </span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.NoteCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMessageCircle />
                    </span>
                    <h2>About this refactored version</h2>
                </div>

                <p>
                    The original post was a long numbered list. This version
                    keeps all 101 ideas but presents them in a cleaner, more
                    readable card layout.
                </p>

                <p>
                    Some ideas are simple and practical. Some are theatrical.
                    Some are very 2000s in a delightful internet-romance way.
                    Treat them as inspiration, not rigid instructions. Use
                    common sense, comfort, consent, budget, and timing. Romance
                    works better when it feels personal rather than copy-pasted
                    from a glitter cannon.
                </p>
            </Styled.NoteCard>

            <Styled.ControlCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSearch />
                    </span>
                    <h2>Browse the ideas</h2>
                </div>

                <div className="searchBox">
                    <FiSearch className="searchIcon" />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by number, title, or keyword..."
                        aria-label="Search romantic ideas"
                    />
                </div>

                <p className="helperText">
                    Showing {filteredIdeas.length} of {romanticIdeas.length}{" "}
                    ideas
                </p>
            </Styled.ControlCard>

            <Styled.ListCard>
                <div className="listHeader">
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHeart />
                        </span>
                        <h2>All ideas</h2>
                    </div>
                </div>

                {filteredIdeas.length ? (
                    <div className="ideasGrid">
                        {filteredIdeas.map((idea) => (
                            <article key={idea.id} className="ideaCard">
                                <div className="ideaTop">
                                    <span className="ideaNumber">
                                        Idea #{idea.id}
                                    </span>
                                </div>

                                <h3>{idea.title}</h3>
                                <p>{idea.summary}</p>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="emptyState">
                        No romantic ideas matched your search.
                    </div>
                )}
            </Styled.ListCard>

            <Styled.FooterNote>
                <h2>Final note</h2>
                <p>
                    The best ideas here are not necessarily the biggest ones.
                    Tiny gestures done sincerely usually beat expensive drama. A
                    warm towel, a note, a shared book, breakfast in bed, or a
                    simple "I thought of you today" can do more than a whole
                    truckload of cinematic nonsense. The universe is weird, love
                    is weirder, and that is part of the fun.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default RomanticIdeas101;
