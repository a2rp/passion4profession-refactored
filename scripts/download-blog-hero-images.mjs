import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const routeConfigPath = path.join(projectRoot, "src/lib/routeConfig.jsx");
const outputDirectory = path.join(projectRoot, "public/images/blog-hero");
const routeConfig = await readFile(routeConfigPath, "utf8");
const slugs = [
    ...new Set(
        [...routeConfig.matchAll(/path:\s*"\/archive\/([^"]+)"/g)].map(
            ([, slug]) => slug,
        ),
    ),
];

// Searches stay focused on real photographs and permissive reuse licenses.
// Fallbacks keep older or especially niche article topics covered.
const searchTerms = {
    "deserve-before-you-desire": ["achievement mountain climber", "success goal"],
    "full-form-of-unix-and-linux": ["linux computer workstation", "computer terminal"],
    "unix-like": ["computer terminal", "programming code"],
    "linux-vs-windows": ["desktop computer operating system", "computer workstation"],
    gnu: ["programming code", "computer workstation"],
    "mac-and-pc": ["Mac PC desktop computers", "desktop computer"],
    macintosh: ["vintage Macintosh computer", "vintage computer"],
    "difference-between-coding-and-encoding": ["programmer coding computer", "computer keyboard"],
    "255-keyboard-alt-codes": ["computer keyboard keys", "keyboard closeup"],
    "check-your-mobile-number": ["smartphone hand", "mobile phone"],
    "awesome-vlc-media-player": ["watching video laptop", "computer media player"],
    "how-to-read-and-write-in-1337": ["computer keyboard coding", "computer keyboard"],
    "all-about-resource-hacker-in-a-brief-tutorial": ["computer software programming", "computer screen"],
    "change-windows-xp-boot-screen": ["old desktop computer", "vintage computer"],
    "change-your-start-button": ["Windows desktop computer", "computer keyboard"],
    "windows-shortcut-keys": ["computer keyboard shortcuts", "computer keyboard"],
    "create-your-own-icons": ["graphic design computer screen", "computer design"],
    "1000-most-common-words-in-english": ["English dictionary book", "open book library"],
    "windows-xp-services-configuration-turn-off-disable-unnecessary-services-to-optimize-performance": ["vintage computer", "computer workstation"],
    "quick-reference-linux-commands": ["computer terminal keyboard", "computer workstation"],
    "101-romantic-ideas": ["romantic couple sunset", "couple beach"],
    "5000-collegiate-words-with-brief-definitions": ["university library books", "books library"],
    "0-divided-by-0-equals-2": ["mathematics equations chalkboard", "math classroom"],
    "what-is-cda-file": ["music CD", "CD player"],
    "http-status-code": ["web server computer network", "server room"],
    "this-is-confidence": ["confident person portrait", "person mountain"],
    "the-man-who-never-slept": ["awake at night clock", "night city person"],
    "you-can-do-it": ["running sunrise motivation", "person running"],
    "basic-computer-terminology": ["computer hardware desktop", "computer workstation"],
    "why-8-bits-1-byte": ["binary code computer screen", "computer circuit board"],
    "from-hackers-jargon-file": ["hacker computer keyboard", "programmer computer"],
    "six-or-seven-continents-on-earth": ["world globe continents", "world map"],
    "world-continents": ["world map globe earth", "world map"],
    "nokia-phone-codes": ["Nokia 3310", "Nokia"],
    "indian-flag-evolution": ["Indian flag waving", "India flag"],
    "microsoft-power-toys": ["Windows laptop computer", "computer workstation"],
    "process-explorer": ["computer monitor system software", "computer workstation"],
    "what-is-that-process": ["computer processor motherboard", "computer hardware"],
    "programming-languages": ["programming computer code screen", "programmer laptop"],
    "std-printf-std-fprintf-std-sprintf-std-snprintf": ["programming code", "computer code screen"],
    "c-language-operator-precedence": ["programming code computer screen", "computer keyboard"],
    "what-is-am-pm-and-gmt": ["world clock time zones", "clock time"],
    "intro-to-assembly-language-programming": ["computer circuit board processor", "computer hardware"],
    "intro-to-electricity": ["power lines", "electrical power"],
    "intro-to-binary-numbers": ["binary digits computer", "computer code"],
    "the-periodic-table": ["scientist laboratory", "chemistry laboratory"],
    "be-in-contact-till-i-die": ["vintage telephone communication", "old telephone"],
    "what-is-w3c": ["web development computer screen", "internet computer"],
    "list-of-programming-languages": ["software developer coding computer", "programmer laptop"],
    "spaghetti-code": ["tangled computer cables", "computer wires"],
    "ascii-control-symbols": ["computer keyboard closeup", "typing keyboard"],
    "list-of-tcp-and-udp-port-numbers": ["network router ethernet cables", "computer network"],
    "common-port-lists": ["network server cables", "server room"],
    "list-of-all-short-forms-and-full-form-of-the-abbreviations": ["dictionary book text", "books library"],
    "osi-model": ["network switch", "network router"],
    "keyboard-shortcuts": ["computer keyboard closeup", "typing keyboard"],
    "exceptions-in-c": ["programming code", "computer code screen"],
    "list-of-executable-file-extensions": ["computer software files", "computer workstation"],
    "what-is-the-sata-ata-pata-hdd": ["hard disk drive computer", "computer hard drive"],
    "1024-coperbyte": ["computer memory chips", "computer motherboard"],
    "mother-of-computer": ["Charles Babbage computer machine", "vintage computer"],
    "what-is-the-difference-between-htm-and-html": ["HTML web development computer", "website coding"],
    "why-both-3-and-4-letter-extensions": ["computer file folders", "computer keyboard"],
    "difference-among-uri-url-and-urn": ["internet browser laptop", "web browser computer"],
    "what-is-the-meaning-of-platform-independence": ["laptop computer workspace", "computer workstation"],
};

const wait = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));
const requestedSlugs = process.argv.slice(2);
const queue = requestedSlugs.length ? requestedSlugs : [...slugs];
const targetSlugs = new Set(queue);
const unknownSlugs = queue.filter((slug) => !slugs.includes(slug));
if (unknownSlugs.length) throw new Error(`Unknown archive slug(s): ${unknownSlugs.join(", ")}`);

let oldManifest;
try {
    oldManifest = JSON.parse(
        await readFile(path.join(outputDirectory, "credits.json"), "utf8"),
    );
} catch {
    oldManifest = { images: [] };
}

const originalBySlug = new Map((oldManifest.images ?? []).map((image) => [image.slug, image]));
const seenIds = new Set();
const credits = (oldManifest.images ?? []).filter(({ slug }) => !targetSlugs.has(slug));
const seenUrls = new Set(credits.map(({ imageUrl }) => imageUrl).filter(Boolean));
const failures = [];
const successfulSlugs = new Set();
const concurrency = 4;
const totalRequested = queue.length;
let finished = 0;

await mkdir(outputDirectory, { recursive: true });

async function searchImages(query) {
    const params = new URLSearchParams({
        q: query,
        license: "cc0,pdm",
        category: "photograph",
        aspect_ratio: "wide",
        size: "large",
        extension: "jpg,jpeg",
        page_size: "20",
    });

    let lastError;
    for (let attempt = 0; attempt < 3; attempt += 1) {
        try {
            const response = await fetch(
                `https://api.openverse.org/v1/images/?${params}`,
                { headers: { "User-Agent": "Passion4Profession blog hero downloader" } },
            );
            if (response.status === 429 || response.status >= 500) {
                await wait(1200 * (attempt + 1));
                continue;
            }
            if (!response.ok) throw new Error(`Openverse returned ${response.status}`);
            return await response.json();
        } catch (error) {
            lastError = error;
            await wait(900 * (attempt + 1));
        }
    }
    throw lastError ?? new Error("Openverse request failed after retries");
}

async function downloadImage(result, slug) {
    const headers = {
        "User-Agent": "Passion4Profession blog image downloader",
    };
    let response = await fetch(result.url, {
        headers,
    });
    if (
        !response.ok ||
        !response.headers.get("content-type")?.toLowerCase().includes("image/jpeg")
    ) {
        if (!result.thumbnail) throw new Error("Image source is unavailable and has no thumbnail");
        const fullSizeThumbnail = new URL(result.thumbnail);
        fullSizeThumbnail.searchParams.set("full_size", "true");
        response = await fetch(fullSizeThumbnail, {
            headers,
        });
    }
    if (
        !response.ok ||
        !response.headers.get("content-type")?.toLowerCase().includes("image/jpeg")
    ) {
        throw new Error(`Image host returned ${response.status} ${response.headers.get("content-type") ?? ""}`);
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 20_000 || bytes.length > 12_000_000) {
        throw new Error(`Unexpected image size: ${bytes.length} bytes`);
    }
    if (bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes.at(-2) !== 0xff || bytes.at(-1) !== 0xd9) {
        throw new Error("Downloaded file does not have a JPEG signature");
    }
    await writeFile(path.join(outputDirectory, `${slug}.jpg`), bytes);
}

async function processSlug(slug) {
    const queries = [...(searchTerms[slug] ?? []), "computer technology"];
    const errors = [];

    for (const query of [...new Set(queries)]) {
        const { results = [] } = await searchImages(query);
        for (const result of results) {
            if (!result.url || !["cc0", "pdm"].includes(result.license)) continue;
            if (result.filetype && !["jpg", "jpeg"].includes(result.filetype)) continue;
            if ((result.width ?? 0) < 900 || (result.height ?? 0) < 500) continue;
            const ratio = result.width / result.height;
            if (ratio < 1.25 || ratio > 2.5) continue;
            if (seenIds.has(result.id) || seenUrls.has(result.url)) continue;

            // Reserve before awaiting the download so concurrent searches cannot
            // assign the same photograph to two posts.
            seenIds.add(result.id);
            seenUrls.add(result.url);
            try {
                await downloadImage(result, slug);
                credits.push({
                    slug,
                    file: `${slug}.jpg`,
                    title: result.title,
                    creator: result.creator,
                    license: result.license,
                    licenseVersion: result.license_version,
                    licenseUrl: result.license_url,
                    source: result.source,
                    searchQuery: query,
                    pageUrl: result.foreign_landing_url,
                    imageUrl: result.url,
                    attribution: result.attribution,
                });
                successfulSlugs.add(slug);
                return;
            } catch (error) {
                seenIds.delete(result.id);
                seenUrls.delete(result.url);
                errors.push(`${result.title}: ${error.message}`);
            }
        }
        await wait(250);
    }

    failures.push({ slug, errors: errors.slice(-3) });
}

async function worker() {
    while (queue.length) {
        const slug = queue.shift();
        await processSlug(slug);
        finished += 1;
        console.log(`[${finished}/${totalRequested}] ${slug}: ${successfulSlugs.has(slug) ? "saved" : "NO MATCH"}`);
        // Keep the anonymous catalog requests below its documented burst limits.
        await wait(500);
    }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));

for (const { slug } of failures) {
    const previous = originalBySlug.get(slug);
    if (previous) credits.push(previous);
}

await writeFile(
    path.join(outputDirectory, "credits.json"),
    `${JSON.stringify({ catalog: "Openverse", generatedAt: new Date().toISOString(), images: credits, failures }, null, 2)}\n`,
);

if (failures.length) {
    console.error(`Finished with ${failures.length} uncovered post(s): ${failures.map(({ slug }) => slug).join(", ")}`);
    process.exitCode = 1;
} else {
    console.log(`Saved ${credits.length} unique, licensed JPEG photos for ${slugs.length} archive posts.`);
}
