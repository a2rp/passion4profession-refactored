import{c as r,Q as l,j as e,F as m,a as p,Z as d,ay as u,x as y,al as g,ac as h}from"./index-D1C0sqWO.js";import{S as f}from"./index-DpzaY4xy.js";const t={Wrapper:r.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:r.section`
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
            font-size: clamp(32px, 4vw, 52px);
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

        .metaGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 22px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .metaCard {
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

        .metaIcon {
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

        .metaIcon svg {
            width: 18px;
            height: 18px;
        }

        .metaCard strong {
            display: block;
            font-size: 18px;
            line-height: 1.1;
            margin-bottom: 4px;
        }

        .metaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,NoteCard:r.section`
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
    `,ControlCard:r.section`
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

        .helperText {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-size: 13px;
            line-height: 1.6;
        }
    `,ListCard:r.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .listHeader {
            margin-bottom: 16px;
        }

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
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

        .ideasGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .ideaCard {
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

        .ideaCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-3) 94%,
                transparent
            );
        }

        .ideaTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
        }

        .ideaNumber {
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
        }

        h3 {
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 10px;
        }

        p {
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
    `,FooterNote:r.section`
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
    `},n=[{id:1,title:"Tiny teddy bodyguard",summary:"If your partner is going away for a few days, tell her you arranged a bodyguard to look after her and then give her a small teddy bear."},{id:2,title:"Glow-in-the-dark ceiling message",summary:"Stick glow-in-the-dark stars above the bed to spell out a message like 'I Love You' so it appears when the lights go out."},{id:3,title:"Eleven real roses and one artificial rose",summary:"Give a bouquet with eleven real red roses and one artificial red rose, along with a note that says: 'I will love you until the last rose fades.'"},{id:4,title:"Secret domain name surprise",summary:"Buy your partner's domain name if available, create a romantic webpage, and casually ask if she has ever checked whether her name is taken online."},{id:5,title:"Mirror compliment gift",summary:"Give a stylish hand mirror with a card that says the most beautiful woman in the world is the one reflected in it."},{id:6,title:"Hidden message inside a book",summary:"Underline letters in a section of a book your partner has not yet read so the marked letters form a secret love message."},{id:7,title:"Flowers at work",summary:"Have flowers delivered to your partner's workplace so she enjoys both the flowers and the extra attention from colleagues."},{id:8,title:"Engraved stone memory",summary:"Pick up a smooth stone on a trip, then later have a message engraved into it and gift it as a keepsake."},{id:9,title:"Cloud-shape game",summary:"Lie together on a grassy hill and play the childhood game of finding shapes in the clouds."},{id:10,title:"Childlike drawing by post",summary:"Draw a bright, simple picture with your names and a heart, then mail it to your partner's workplace in a formal envelope."},{id:11,title:"Recite a Shakespeare sonnet",summary:"Memorize a romantic sonnet and recite it gently in a quiet, affectionate setting instead of using a cliché poem."},{id:12,title:"Late-night survival pack",summary:"If your partner is working late, prepare a small box filled with comforting favorite things and label it as a survival pack."},{id:13,title:"Visit the swings",summary:"If you pass a park, stop and give your partner a ride on the swings to bring back happy childhood memories."},{id:14,title:"Rose with a thank-you note",summary:"Leave a long-stem rose somewhere your partner will find it with a note saying thank you for coming into your life."},{id:15,title:"Confidence tape for a new job",summary:"If your partner is starting a new job, record an encouraging message after an uplifting song and give it for the drive to work."},{id:16,title:"Massage appointment gift box",summary:"Prepare a gift box with massage oil and a card that offers an appointment with a great masseur using your phone number."},{id:17,title:"Full comfort evening after a hard day",summary:"Run a hot bath, gently wash your partner, dry her, tuck her into a freshly made bed, and finish with a kiss on the forehead."},{id:18,title:"Private slow dance with shared earphones",summary:"Take a favorite song on a portable player and share earphones so you can dance together in a place people would not expect."},{id:19,title:"Gift for the beloved pet",summary:"If your partner loves a pet deeply, include a small gift for the pet on a special occasion."},{id:20,title:"Love heart in the sand",summary:"Trace a large heart in the sand on a beach, sit inside it together, and watch the sunset."},{id:21,title:"Backpack surprise picnic",summary:"Pack a hidden luxury picnic and reveal it one item at a time after telling your partner the backpack only contains a jacket and lunch."},{id:22,title:"Play music from below a balcony",summary:"If you play an instrument, arrange for your partner to step outside at a certain time and perform something slow and romantic."},{id:23,title:"Miss you already email",summary:"If your partner leaves for work and you stay home, send a short email to her inbox saying you miss her already."},{id:24,title:"Brush her hair slowly",summary:"Take time to brush your partner's long hair with slow, gentle strokes, especially after a shower or before bed."},{id:25,title:"Treasure hunt gift",summary:"Create a treasure hunt with a bottle, map, key, hidden clues, and a buried locked box containing your gift."},{id:26,title:"Mission Impossible date invite",summary:"Invite your partner on a date using a playful recorded mission briefing with a secret meeting location and time."},{id:27,title:"Childhood wish fulfilled",summary:"Ask your partner's family what she always wanted as a child and give it to her on a special day."},{id:28,title:"Professional couple portrait",summary:"Organize a professional photo shoot, frame the portrait, and display it somewhere meaningful."},{id:29,title:"Simple smile note",summary:"Leave a note somewhere your partner will find it saying you thought of her today and it made you smile."},{id:30,title:"Valentine's charm bracelet countdown",summary:"Give a charm bracelet piece by piece over the first days of February and present the bracelet itself on Valentine's Day."},{id:31,title:"Sticker photo booth kiss",summary:"Stop at an instant photo booth, choose a romantic background, and kiss while the photo is being taken."},{id:32,title:"Voice message reminder",summary:"Leave a voice message just to say you are thinking of your partner, especially during a rough period."},{id:33,title:"Mystery trip",summary:"Organize a mystery travel package where the destination stays secret until the journey is underway."},{id:34,title:"Rose petals behind the sun visor",summary:"Hide rose petals and a note behind the passenger sun visor so they fall out when your partner pulls it down."},{id:35,title:"Suitcase surprise",summary:"If your partner is going on a trip, hide a small present in the corner of the suitcase to be discovered later."},{id:36,title:"Engraved anniversary glasses",summary:"Have champagne glasses engraved with your names and date, then arrange for them to be used at your anniversary dinner."},{id:37,title:"Birthday roses delivered by strangers",summary:"Arrange for a series of people to hand your partner single roses before you arrive with the remaining bouquet."},{id:38,title:"Recreate a nostalgic favorite",summary:"Listen carefully to things your partner reminisces about and later recreate one of those memories."},{id:39,title:"Love montage frame",summary:"Collect photos, ticket stubs, and little keepsakes from your relationship and have them framed as a montage."},{id:40,title:"The key to my heart box",summary:"Place an old-fashioned key in a lined box and add a plaque inside that says it is the key to your heart."},{id:41,title:"Plant a tree together",summary:"Buy and plant a tree together, then revisit it each anniversary with champagne and conversation."},{id:42,title:"Steam-written mirror message",summary:"Write a loving message on a steamed-up bathroom mirror or car window for your partner to discover."},{id:43,title:"Name a star",summary:"As a symbolic gift, name a star after your partner and present the formal documentation."},{id:44,title:"Customized comic strip",summary:"Take a comic strip that relates to your shared life, replace the dialogue, and create a custom version for your partner."},{id:45,title:"Watch the sunrise together",summary:"Wake early on a trip and go somewhere scenic to watch the sunrise together."},{id:46,title:"Spa atmosphere at home",summary:"Create a spa-like bath setting with candles, rose petals, champagne, and chocolate-covered strawberries."},{id:47,title:"Love coupons",summary:"Create romantic coupons your partner can redeem for affectionate favors like massages or special treats."},{id:48,title:"Backyard night picnic",summary:"Spread a blanket in the backyard, bring snacks and drinks, and lie together under the stars."},{id:49,title:"Walk in the rain",summary:"Forget the umbrella, run through the rain together, kiss in the storm, then come home for a warm shower and drink."},{id:50,title:"Hot air balloon ride",summary:"Organize a hot air balloon trip as a memorable romantic surprise."},{id:51,title:"Desk-side massage",summary:"Come up behind your seated partner and give a back, shoulder, and head massage finished with a kiss on the cheek."},{id:52,title:"Newspaper love message",summary:"Place a small loving message in the newspaper on an ordinary day for your partner to find."},{id:53,title:"Read a shared book aloud",summary:"Choose a book you both want to read and take turns reading a chapter aloud in bed each night."},{id:54,title:"Warm towel after shower",summary:"Put your partner's towel in the dryer so it is warm and wrap her in it after a bath or shower."},{id:55,title:"Faxed hand-holding joke",summary:"Photocopy your hand and send it with a playful message asking whether your partner wants to hold hands."},{id:56,title:"Heart-shaped pizza",summary:"When ordering pizza, ask for it to be cut into a heart shape before delivery."},{id:57,title:"Love note inside chocolates",summary:"Open a boxed chocolate package carefully, place a note inside, and reseal it as a sweet surprise."},{id:58,title:"Tandem bike date",summary:"Rent a tandem bike, go for a ride together, and finish with a picnic in the park."},{id:59,title:"A day in my life letter",summary:"If you are away on business, write a timeline-style letter showing how often you think of your partner during the day."},{id:60,title:"Read a favorite childhood book",summary:"Find out your partner's favorite childhood book and read it to her in bed."},{id:61,title:"Write a story together by email",summary:"Start a fictional or semi-fictional story by email and pass each chapter back and forth."},{id:62,title:"Fly a kite together",summary:"Buy a kite and spend a windy day in the park flying it with your partner."},{id:63,title:"Adventure dinner",summary:"Use coin flips and timed directions to let chance lead you to a new place to eat together."},{id:64,title:"Play paparazzi with a camera",summary:"Act like a celebrity photographer while taking playful photos of your partner before a special outing."},{id:65,title:"Care day when sick",summary:"If your partner is sick, stay with her, make soup, rent movies, and take care of her all day."},{id:66,title:"Help make a dream happen",summary:"Ask what your partner has always wanted to do, write it down, and later arrange one of those dreams as a surprise."},{id:67,title:"Classic romantic film night",summary:"Plan a movie night around a classic romance with popcorn, champagne, and chocolate-covered strawberries."},{id:68,title:"Drive-in picnic",summary:"Go to a drive-in movie but sit on a picnic blanket outside the car with popcorn and a candle."},{id:69,title:"Personalized magazine cover",summary:"Create a fake magazine cover starring your partner and let her discover it among real magazines."},{id:70,title:"Balloon-filled trunk surprise",summary:"Fill the trunk of your car with helium balloons and reveal them at a scenic spot in the countryside."},{id:71,title:"Matching love t-shirts",summary:"Create two white t-shirts that complete a heart and spell out love when you stand close together."},{id:72,title:"Water pistol fight",summary:"On a hot summer day, bring two water pistols to the beach and have a playful water fight."},{id:73,title:"Share your food",summary:"Offer bites from your meal and feed each other to create a simple kind of closeness."},{id:74,title:"Public compliment",summary:"Compliment your partner in front of others in a natural and affectionate way."},{id:75,title:"Whole day off together",summary:"Arrange a day away from work and spend it moving gently from breakfast to park to café to dinner."},{id:76,title:"Gift voucher for self-care",summary:"Give a beauty or spa voucher with a card saying it is a special treat for someone special."},{id:77,title:"Return home like a hero",summary:"Even after a tiny errand, act as though you survived an epic journey and greet your partner dramatically."},{id:78,title:"Thank-you note",summary:"Write a thank-you note for something your partner did and let the appreciation be specific and sincere."},{id:79,title:"Weekend without the kids",summary:"Arrange for the children to stay elsewhere so the weekend becomes dedicated time for just the two of you."},{id:80,title:"Magic gift box",summary:"Give your partner a box that receives a new small surprise gift every month."},{id:81,title:"Useful hobby gift",summary:"Research your partner's favorite hobby deeply and buy something truly useful and thoughtful within that interest."},{id:82,title:"Masquerade ball entrance",summary:"Go to a masquerade ball, meet in masks, say nothing at first, and lead your partner onto the dance floor."},{id:83,title:"Secret weekend escape",summary:"Ask your partner to pack for the weekend without explanation, then drive to a romantic bed and breakfast."},{id:84,title:"Crystal ball future drawings",summary:"Draw crystal balls on paper and each sketch what you imagine five years in the future looks like together."},{id:85,title:"Create a loving nickname",summary:"Give your partner a private affectionate nickname that belongs only to the two of you."},{id:86,title:"Write a love song",summary:"If you are musical, write a song for your partner, record it, print the manuscript, and gift both beautifully."},{id:87,title:"Blindfold destination reveal",summary:"Blindfold your partner for a date and remove it only when you arrive somewhere truly unexpected and memorable."},{id:88,title:"Feather pillow fight",summary:"Set up a huge playful pillow fight with feather pillows and enjoy the chaos together."},{id:89,title:"Campfire marshmallow night",summary:"After a day outdoors, build a fire, toast marshmallows, and sit close while watching sparks rise into the night."},{id:90,title:"Set a shared photo as wallpaper",summary:"Place a photo of the two of you on your partner's computer as wallpaper."},{id:91,title:"Draw your partner",summary:"If you are artistically inclined, practice life drawing and then ask your partner to pose for you."},{id:92,title:"Go to a carnival or festival",summary:"Take your partner to a festival such as food, jazz, wine, or music and enjoy the atmosphere together."},{id:93,title:"Video time capsule",summary:"Record a video together for a future anniversary and speak on camera about how you feel right now."},{id:94,title:"Skinny dip in a secluded place",summary:"If the setting is private and the weather is warm, go for an impulsive swim together."},{id:95,title:"Long-distance surprise visit",summary:"Coordinate an online chat distraction while secretly traveling to your partner's door, then knock at the perfect line."},{id:96,title:"Goldfish pun gift",summary:"Give your partner a goldfish in a bowl with a playful card saying that of all the fish in the sea, she is the fish for you."},{id:97,title:"Nature sounds drive",summary:"Go for a drive at dawn or dusk while holding hands and playing a recording of rainforest or nature sounds."},{id:98,title:"Birthday bedroom surprise",summary:"While your partner sleeps, decorate the room with balloons, streamers, and flowers so she wakes to a surprise."},{id:99,title:"Bookshop afternoon",summary:"Spend a long unhurried afternoon together in a large bookstore browsing shelves, sharing coffee, and reading your purchases."},{id:100,title:"Convertible coast drive",summary:"If possible, hire a sports car for the weekend and go for a scenic coastal drive with the top down."},{id:101,title:"Breakfast in bed",summary:"Serve your partner breakfast in bed with thoughtful details like a heart-shaped egg, French toast, juice, cereal, and a fresh flower."}],v=()=>{const[i,c]=l.useState(""),o=l.useMemo(()=>{const a=i.trim().toLowerCase();return a?n.filter(s=>s.title.toLowerCase().includes(a)||s.summary.toLowerCase().includes(a)||String(s.id).includes(a)):n},[i]);return e.jsxs(t.Wrapper,{className:"topicWrapper",children:[e.jsxs(t.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(m,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(p,{}),"Original topic: July 21, 2012"]}),e.jsx(f,{})]}),e.jsx("h1",{children:"101 Romantic Ideas"}),e.jsx("p",{className:"lead",children:"This page is a cleaned-up archive version of an old blog post that collected playful, thoughtful, dramatic, cheesy, sweet, and sometimes gloriously over-the-top romantic ideas. The original spirit is kept, but the layout is now easier to browse and search."}),e.jsxs("div",{className:"metaGrid",children:[e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(d,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"101 ideas"}),e.jsx("span",{children:"From tiny gestures to full surprise plans"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(u,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Mix of styles"}),e.jsx("span",{children:"Gifts, notes, dates, adventures, and rituals"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(y,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Archive context"}),e.jsx("span",{children:"Old-school romantic internet energy, now organized"})]})]})]})]}),e.jsxs(t.NoteCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(g,{})}),e.jsx("h2",{children:"About this refactored version"})]}),e.jsx("p",{children:"The original post was a long numbered list. This version keeps all 101 ideas but presents them in a cleaner, more readable card layout."}),e.jsx("p",{children:"Some ideas are simple and practical. Some are theatrical. Some are very 2000s in a delightful internet-romance way. Treat them as inspiration, not rigid instructions. Use common sense, comfort, consent, budget, and timing. Romance works better when it feels personal rather than copy-pasted from a glitter cannon."})]}),e.jsxs(t.ControlCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Browse the ideas"})]}),e.jsxs("div",{className:"searchBox",children:[e.jsx(h,{className:"searchIcon"}),e.jsx("input",{type:"text",value:i,onChange:a=>c(a.target.value),placeholder:"Search by number, title, or keyword...","aria-label":"Search romantic ideas"})]}),e.jsxs("p",{className:"helperText",children:["Showing ",o.length," of ",n.length," ","ideas"]})]}),e.jsxs(t.ListCard,{children:[e.jsx("div",{className:"listHeader",children:e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"All ideas"})]})}),o.length?e.jsx("div",{className:"ideasGrid",children:o.map(a=>e.jsxs("article",{className:"ideaCard",children:[e.jsx("div",{className:"ideaTop",children:e.jsxs("span",{className:"ideaNumber",children:["Idea #",a.id]})}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.summary})]},a.id))}):e.jsx("div",{className:"emptyState",children:"No romantic ideas matched your search."})]}),e.jsxs(t.FooterNote,{children:[e.jsx("h2",{children:"Final note"}),e.jsx("p",{children:'The best ideas here are not necessarily the biggest ones. Tiny gestures done sincerely usually beat expensive drama. A warm towel, a note, a shared book, breakfast in bed, or a simple "I thought of you today" can do more than a whole truckload of cinematic nonsense. The universe is weird, love is weirder, and that is part of the fun.'})]})]})};export{v as default};
