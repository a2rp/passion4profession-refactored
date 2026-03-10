import{c as i,j as e,G as t,a as l,l as a,D as n,o,aa as c,s as p,C as d}from"./index-BxgJM-x-.js";import{S as h}from"./index-D6FK_vhk.js";const r={Wrapper:i.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:i.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 95%, transparent),
            color-mix(in srgb, var(--color-surface-2) 100%, transparent)
        );
        box-shadow: 0 20px 48px var(--color-shadow);
        padding: 24px;
        position: relative;
        overflow: hidden;

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
            word-break: break-word;
        }

        .lead {
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }
    `,SectionCard:i.section`
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

        h3 {
            font-size: 16px;
            line-height: 1.2;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 12px 0;
        }

        ul li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        ul li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }

        code {
            word-break: break-word;
        }

        pre {
            margin-top: 10px;
        }

        .summaryGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

            @media (max-width: 820px) {
                grid-template-columns: 1fr;
            }
        }

        .summaryCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .summaryCard h3 {
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .summaryCard code {
            display: inline-block;
            margin-bottom: 10px;
        }

        .summaryCard p {
            margin-bottom: 8px;
            font-size: 14px;
        }

        .summaryCard span {
            display: block;
            color: var(--color-text-muted);
            font-size: 13px;
            line-height: 1.6;
        }

        .stepList {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-top: 8px;
        }

        .stepItem {
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
            padding: 14px;
        }

        .stepNo {
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 14px;
            font-weight: 900;
            line-height: 1;
        }

        .exampleBox {
            margin-top: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .tableWrap {
            width: 100%;
            overflow-x: auto;
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
        }

        table {
            width: 100%;
            min-width: 760px;
            border-collapse: collapse;
            background: var(--color-surface);
        }

        th,
        td {
            padding: 12px 14px;
            text-align: left;
            vertical-align: top;
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        th {
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-weight: 800;
        }

        .codeGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 820px) {
                grid-template-columns: 1fr;
            }
        }

        .codeCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .codeCard h3 {
            margin-bottom: 10px;
        }

        .noteCard {
            margin-top: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .noteCard strong {
            display: block;
            margin-bottom: 6px;
        }

        .noteCard p {
            margin: 0;
            font-size: 14px;
        }
    `,Grid:i.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:i.article`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 20px;

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
            font-size: 22px;
            line-height: 1.15;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.8;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 12px 0;
        }

        ul li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        ul li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `,FooterNote:i.section`
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
    `},x=[{name:"std::printf",signature:"int printf(const char* format, ...);",purpose:"Writes formatted output to standard output, usually the console.",useCase:"Use it when you want to print text directly to the terminal."},{name:"std::fprintf",signature:"int fprintf(FILE* stream, const char* format, ...);",purpose:"Writes formatted output to a file stream.",useCase:"Use it when output should go to a file or another stream instead of stdout."},{name:"std::sprintf",signature:"int sprintf(char* buffer, const char* format, ...);",purpose:"Writes formatted output into a character buffer.",useCase:"Use it when you want to build a formatted string in memory."},{name:"std::snprintf",signature:"int snprintf(char* buffer, int bufSize, const char* format, ...);",purpose:"Writes formatted output into a buffer with a size limit.",useCase:"Use it when you want safer string formatting and want to avoid buffer overflow."}],f=[{specifier:"%d or %i",meaning:"Signed decimal integer",example:'std::printf("%d", 42);',output:"42"},{specifier:"%u",meaning:"Unsigned decimal integer",example:'std::printf("%u", 42);',output:"42"},{specifier:"%x / %X",meaning:"Hexadecimal integer",example:'std::printf("%x", 26);',output:"1a"},{specifier:"%o",meaning:"Octal integer",example:'std::printf("%o", 10);',output:"12"},{specifier:"%f",meaning:"Floating-point number",example:'std::printf("%f", 3.14);',output:"3.140000"},{specifier:"%e / %E",meaning:"Scientific notation",example:'std::printf("%e", 3.14);',output:"3.140000e+00"},{specifier:"%c",meaning:"Single character",example:'std::printf("%c", 65);',output:"A"},{specifier:"%s",meaning:"Character string",example:'std::printf("%s", "Hello");',output:"Hello"},{specifier:"%%",meaning:"Literal percent sign",example:'std::printf("100%% done");',output:"100% done"},{specifier:"%p",meaning:"Pointer value",example:'std::printf("%p", ptr);',output:"Implementation-defined address text"}],m=[{flag:"-",meaning:"Left-justifies the result inside the field width."},{flag:"+",meaning:"Always shows the sign for signed numbers."},{flag:"space",meaning:"Adds a leading space if no sign is printed."},{flag:"#",meaning:"Uses an alternative form such as 0x for hex in some cases."},{flag:"0",meaning:"Pads numeric output with leading zeros."}],j=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(t,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: August 20, 2012"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"std::printf, std::fprintf, std::sprintf, std::snprintf"}),e.jsx("p",{className:"lead",children:"These functions belong to the C-style formatted output family. They take a format string plus extra values, convert those values into text, and then send the result to different destinations such as the console, a file, or a memory buffer."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Simple idea"})]}),e.jsxs("p",{children:["All four functions do almost the same core job: format data into text. The main difference is"," ",e.jsx("strong",{children:"where the text goes"}),"."]}),e.jsx("div",{className:"summaryGrid",children:x.map(s=>e.jsxs("article",{className:"summaryCard",children:[e.jsx("h3",{children:s.name}),e.jsx("code",{children:s.signature}),e.jsx("p",{children:s.purpose}),e.jsx("span",{children:s.useCase})]},s.name))})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Where each one writes"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"std::printf"})," writes to standard output"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"std::fprintf"})," writes to a file stream"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"std::sprintf"})," writes to a character buffer"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"std::snprintf"})," writes to a character buffer with a size limit"]})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Most important safety note"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"std::sprintf"})," can be dangerous if the buffer is too small, because it does not know the buffer size."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"std::snprintf"})," is usually the safer choice because you tell it the maximum number of characters it may write."]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Function-by-function explanation"})]}),e.jsxs("div",{className:"stepList",children:[e.jsxs("div",{className:"stepItem",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("h3",{children:"std::printf"}),e.jsx("p",{children:"Use this for formatted console output. It is the most common starting point when learning formatted printing."}),e.jsx("pre",{children:e.jsx("code",{children:'std::printf("Name: %s, Age: %d\\n", "Ashish", 25);'})})]})]}),e.jsxs("div",{className:"stepItem",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("h3",{children:"std::fprintf"}),e.jsx("p",{children:"This works like printf, but sends output to a file stream."}),e.jsx("pre",{children:e.jsx("code",{children:'std::fprintf(file, "Score: %d\\n", 98);'})})]})]}),e.jsxs("div",{className:"stepItem",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("h3",{children:"std::sprintf"}),e.jsx("p",{children:"This writes formatted text into a buffer in memory. It is powerful but risky if the buffer size is not controlled."}),e.jsx("pre",{children:e.jsx("code",{children:`char buffer[100];
std::sprintf(buffer, "Total: %d", 150);`})})]})]}),e.jsxs("div",{className:"stepItem",children:[e.jsx("span",{className:"stepNo",children:"4"}),e.jsxs("div",{children:[e.jsx("h3",{children:"std::snprintf"}),e.jsx("p",{children:"This is similar to sprintf, but safer because it limits the number of characters written."}),e.jsx("pre",{children:e.jsx("code",{children:`char buffer[100];
std::snprintf(buffer, sizeof(buffer), "Total: %d", 150);`})})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"How the format string works"})]}),e.jsxs("p",{children:["The format string tells the function how to convert each value into text. Normal characters are printed as they are, while items beginning with ",e.jsx("code",{children:"%"})," act as conversion instructions."]}),e.jsxs("div",{className:"exampleBox",children:[e.jsx("h3",{children:"Example"}),e.jsx("pre",{children:e.jsx("code",{children:'std::printf("Name: %s, Marks: %d, Average: %.2f\\n", "Ashish", 95, 91.75);'})}),e.jsx("p",{children:"Here:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"%s"})," prints a string"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%d"})," prints an integer"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%.2f"})," prints a floating-point value with 2 digits after the decimal point"]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Common format specifiers"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Specifier"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"Output idea"})]})}),e.jsx("tbody",{children:f.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.specifier}),e.jsx("td",{children:s.meaning}),e.jsx("td",{children:e.jsx("code",{children:s.example})}),e.jsx("td",{children:s.output})]},s.specifier))})]})})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Field width and precision"})]}),e.jsx("p",{children:"These functions let you control spacing and numeric detail."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"%10s"})," means minimum width 10"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%-10s"})," means left-aligned in width 10"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%.2f"})," means 2 digits after the decimal point"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%.6i"})," means integer padded to at least 6 digits"]})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Useful flags"})]}),e.jsx("ul",{children:m.map(s=>e.jsxs("li",{children:[e.jsx("strong",{children:s.flag})," - ",s.meaning]},s.flag))})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Refactored practical examples"})]}),e.jsxs("div",{className:"codeGrid",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("h3",{children:"Console output"}),e.jsx("pre",{children:e.jsx("code",{children:`std::printf("User: %s\\n", "Ashish");
std::printf("Score: %d\\n", 95);
std::printf("Average: %.2f\\n", 91.75);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("h3",{children:"File output"}),e.jsx("pre",{children:e.jsx("code",{children:`std::fprintf(file, "Log: %s\\n", "Started");
std::fprintf(file, "Items: %d\\n", 12);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("h3",{children:"Buffer output"}),e.jsx("pre",{children:e.jsx("code",{children:`char buffer[100];
std::snprintf(buffer, sizeof(buffer), "ID-%04d", 27);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("h3",{children:"Hex and percent"}),e.jsx("pre",{children:e.jsx("code",{children:`std::printf("Hex: %#x\\n", 26);
std::printf("Done: 100%%\\n");`})})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Return values and truncation"})]}),e.jsx("p",{children:"These functions usually return the number of characters written. If an error occurs, they return a negative value."}),e.jsxs("p",{children:[e.jsx("strong",{children:"std::snprintf"})," is a bit special. If the output gets truncated because the buffer is too small, it returns the total number of characters that ",e.jsx("em",{children:"would"})," ","have been written if enough space had been available."]}),e.jsxs("div",{className:"noteCard",children:[e.jsx("strong",{children:"Why that matters"}),e.jsx("p",{children:"This lets you detect truncation and decide whether you need a bigger buffer."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Best practices"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"std::snprintf"})," over"," ",e.jsx("code",{children:"std::sprintf"})," when possible"]}),e.jsx("li",{children:"Match the format specifier with the correct argument type"}),e.jsx("li",{children:"Be careful with buffer sizes"}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"%%"})," when you want a literal percent sign"]}),e.jsxs("li",{children:["Use precision such as ",e.jsx("code",{children:"%.2f"})," for cleaner numeric output"]}),e.jsx("li",{children:"Check return values when writing robust code"})]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsxs("p",{children:[e.jsx("code",{children:"std::printf"}),", ",e.jsx("code",{children:"std::fprintf"}),","," ",e.jsx("code",{children:"std::sprintf"}),", and ",e.jsx("code",{children:"std::snprintf"})," ","are formatted output functions that differ mainly in where they send the result. They are extremely useful, but the most important habit is to use them carefully, especially when writing into memory buffers."]})]})]});export{j as default};
