import{c as n,Q as d,j as e,G as m,a as g,ac as h,ah as u,ax as k,az as f,m as S,K as N,D as x,A as y,aA as C}from"./index-D1C0sqWO.js";import{S as D}from"./index-DpzaY4xy.js";const s={Wrapper:n.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:n.section`
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

        .heroMeta {
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
            font-size: 20px;
            line-height: 1.1;
            margin-bottom: 4px;
        }

        .metaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,ControlCard:n.section`
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
            margin-top: 6px;
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

        .chipRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 16px;
        }

        .chip {
            min-height: 36px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast);
        }

        .chip:hover {
            background: var(--color-surface);
            color: var(--color-text-primary);
        }

        .chip.active {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
        }
    `,InfoCard:n.section`
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
    `,CommandSection:n.section`
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

        .commandGrid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
        }

        .commandCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 18px;
        }

        .commandTop {
            margin-bottom: 12px;
        }

        .titleWrap {
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }

        .commandIcon {
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

        .commandIcon svg {
            width: 18px;
            height: 18px;
        }

        h3 {
            font-size: 24px;
            line-height: 1.1;
            margin-bottom: 6px;
        }

        .categoryTag {
            min-height: 28px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            display: inline-flex;
            align-items: center;
        }

        .summary {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.8;
            margin-bottom: 14px;
        }

        .syntaxBox {
            margin-bottom: 14px;
        }

        .syntaxLabel {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-muted);
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }

        pre {
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            background: var(--color-code-bg);
            color: var(--color-code-text);
            border: 1px solid var(--color-code-border);
            border-radius: var(--radius-md);
            padding: 14px;
            line-height: 1.7;
            font-size: 13px;
            overflow-x: auto;
        }

        .optionBlock,
        .noteBlock {
            margin-top: 14px;
        }

        h4 {
            font-size: 16px;
            line-height: 1.2;
            margin-bottom: 10px;
        }

        .optionList {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .optionItem {
            display: grid;
            grid-template-columns: minmax(180px, 260px) minmax(0, 1fr);
            gap: 12px;
            padding: 12px;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-surface-3);

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .flag {
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
            word-break: break-word;
        }

        .meaning {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
            word-break: break-word;
        }

        .noteBlock ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .noteBlock li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .noteBlock li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
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
    `,FooterNote:n.section`
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
            white-space: pre-wrap;
            word-break: break-word;
        }
    `},b=[{name:"at",category:"Scheduling",icon:e.jsx(g,{}),summary:"Execute a command or script at a specified time and at regular intervals.",syntax:"at [[-V] [-q queue] [-f file] [-m] [-l] [-d] [-b] [-v] time] | [-c job [job ...]]",options:[{flag:"-V",meaning:"Show the version of at."},{flag:"-q queue",meaning:"Specifies the queue to use."},{flag:"-f file",meaning:"Get the job information from a file."},{flag:"-m",meaning:"Email job status to user after completion."},{flag:"-l",meaning:"List the jobs currently in the queue."},{flag:"-d",meaning:"Remove the job from the queue."},{flag:"-b",meaning:"Allows a job to be run based on the current system status."},{flag:"-v",meaning:"Shows completed jobs still in the queue."},{flag:"time",meaning:"The time that the job should run. MM/DD/YY and/or HH:MM specification is supported."},{flag:"-c job [job ...]",meaning:"The task that should be performed at the specified time."}]},{name:"date",category:"System",icon:e.jsx(g,{}),summary:"Display and set the system date and time.",syntax:"date [-u | --utc | --universal] [-d | --date=datestring] [-R | --rfc-822] [[yyyy]mmddhhmm [yy][.ss]]",options:[{flag:"-u | --utc | --universal",meaning:"Print or set universal time."},{flag:"-d | --date=datestring",meaning:"Display the time shown by the specified string."},{flag:"-R | --rfc-822",meaning:"Show the time in RFC-822 format."},{flag:"[[yyyy]mmddhhmm [yy][.ss]]",meaning:"The format for the date and time."}]},{name:"halt",category:"Power",icon:e.jsx(f,{}),summary:"Power down or restart the system.",syntax:"halt [-d] [-f] [-h] [-i] [-n] [-p] [-w]",options:[{flag:"-d",meaning:"Do not write wtmp record before shutting down."},{flag:"-f",meaning:"Force a shutdown or restart."},{flag:"-h",meaning:"Place hard drives into standby before shutting down."},{flag:"-i",meaning:"Shut down network interfaces before shutting down."},{flag:"-n",meaning:"Do not sync before shutting down. Implies -d."},{flag:"-p",meaning:"Halt with a poweroff rather than restart."},{flag:"-w",meaning:"Do not shutdown or restart, but write wtmp record."}]},{name:"kill",category:"Processes",icon:e.jsx(S,{}),summary:"Terminate a system process.",syntax:"kill [-l [signal] | [-s signal | -p]] [-a] [--] pid ...",options:[{flag:"-l [signal]",meaning:"Print a list of signal names."},{flag:"-s signal",meaning:"The signal to send to the process. Signal 9 sends SIGKILL."},{flag:"-p",meaning:"Print the process id for the specified process and do not send a signal."},{flag:"-a",meaning:"Do not restrict commandname-to-pid conversion."}]},{name:"newaliases",category:"Mail",icon:e.jsx(N,{}),summary:"Rebuild the mail aliases database.",syntax:"newaliases",options:[],notes:["This command does not take any parameters.","It is functionally equivalent to sendmail -bi."]},{name:"passwd",category:"Users",icon:e.jsx(x,{}),summary:"Manage user passwords.",syntax:"passwd [-d | --delete] [-f | --force] [-i | --inactive=days] [-k | --keep-tokens] [-l | --lock] [-n | --minimum=days] [-S | --status] [--stdin] [-u | --unlock] [-w | --warning=days] [-x | --maximum=days] [username]",options:[{flag:"-d | --delete",meaning:"Root only: Delete the password for the user."},{flag:"-f | --force",meaning:"Force the operation to complete."},{flag:"-i | --inactive=days",meaning:"Root only: Number of days after password expiry before the account is disabled."},{flag:"-k | --keep-tokens",meaning:"Keep authentication tokens that have not expired."},{flag:"-l | --lock",meaning:"Root only: Lock the specified account."},{flag:"-n | --minimum=days",meaning:"Root only: Minimum number of days before password can be changed again."},{flag:"-S | --status",meaning:"Root only: Display password status of the account."},{flag:"-u | --unlock",meaning:"Root only: Unlock the specified account."},{flag:"-w | --warning=days",meaning:"Root only: Number of warning days before password expiry."},{flag:"-x | --maximum=days",meaning:"Root only: Maximum life of a password."},{flag:"username",meaning:"The username on which to perform the operation."}]},{name:"ps",category:"Processes",icon:e.jsx(y,{}),summary:"Display process statistics.",syntax:"ps [a] [-A] [-a] [C] [c] [-C processname] [{--cols num | --columns num | --width num}] [-d] [e] [-e] [{f | --forest}] [-f] [g] [{-G RGID | --Group RGID}] [{-g groupname | --group groupname}] [{h | --no-headers}] [-H] [--headers] [--html] [{j | -j}] [{l | -l}] [L] [{--lines num | --rows num}] [{m | -m}] [n] [{N | -n}] [-N | --deselect] [{--nul | --null | --zero}] [O] [{o | -o | --format}] [{p pid | -p pid | --pid pid}] [r] [s] [{S | --cumulative}] [{-s session | --sid session}] [--sort sortkey] [{-t tty | t tty | T tty | --tty tty}] [{-U RUID | --User RUID}] [{-u userid | --user userid}] [v] [{w | -w}] [x] [X] [-y]",options:[{flag:"a",meaning:"Show information for all processes on this terminal including those belonging to other users."},{flag:"-A",meaning:"Show information for all processes."},{flag:"-a",meaning:"Show information for all processes with a TTY except session leaders."},{flag:"C",meaning:"Show the raw CPU time."},{flag:"c",meaning:"Show the true command name."},{flag:"-C processname",meaning:"Show information for matching process name."},{flag:"--cols num | --columns num | --width num",meaning:"Set the screen width."},{flag:"-d",meaning:"Show information for all processes except session leaders."},{flag:"e",meaning:"Show the environment after each command."},{flag:"-e",meaning:"Show information for all processes."},{flag:"f | --forest",meaning:"Display process listing with ASCII tree view."},{flag:"-f",meaning:"Display full process listing."},{flag:"g",meaning:"Show all process information."},{flag:"-G RGID | --Group RGID",meaning:"Show processes with matching real group ID."},{flag:"-g groupname | --group groupname",meaning:"Show processes matching effective group name."},{flag:"h | --no-headers",meaning:"Do not print header lines."},{flag:"-H",meaning:"Display process hierarchy."},{flag:"--headers",meaning:"Repeat header lines."},{flag:"--html",meaning:"Print HTML-escaped output."},{flag:"j | -j",meaning:"Display jobs format."},{flag:"l | -l",meaning:"Display long listing format."},{flag:"L",meaning:"List all formats."},{flag:"--lines num | --rows num",meaning:"Set the screen height."},{flag:"m | -m",meaning:"Display all threads."},{flag:"n",meaning:"Numeric output for WCHAN and USER."},{flag:"N | -n",meaning:"Set namelist file."},{flag:"-N | --deselect",meaning:"Negate the selection."},{flag:"--nul | --null | --zero",meaning:"Unjustified output with NULs."},{flag:"O",meaning:"Overloaded sort order."},{flag:"o | -o | --format",meaning:"User-defined display format."},{flag:"p pid | -p pid | --pid pid",meaning:"Show information for matching process ID."},{flag:"r",meaning:"Show information for running processes."},{flag:"s",meaning:"Display signal format."},{flag:"S | --cumulative",meaning:"Include dead child process information."},{flag:"-s session | --sid session",meaning:"Show processes belonging to matching session."},{flag:"--sort sortkey",meaning:"Sort order."},{flag:"-t tty | t tty | T tty | --tty tty",meaning:"Show processes on the specified terminal."},{flag:"-U RUID | --User RUID",meaning:"Show processes with matching real user ID."},{flag:"-u userid | --user userid",meaning:"Show processes with matching effective user ID."},{flag:"v",meaning:"Display virtual memory format."},{flag:"w | -w",meaning:"Display wide output."},{flag:"x",meaning:"Show processes without controlling TTYs."},{flag:"X",meaning:"Display Linux i386 format."},{flag:"-y",meaning:"Do not show flags."}],notes:["This command has many output and filtering options.","In practice, many users start with simpler forms like ps, ps -ef, or ps aux on modern systems."]},{name:"shutdown",category:"Power",icon:e.jsx(f,{}),summary:"Shut down the system. Must be logged in as root.",syntax:"shutdown [-a] [-c] [-f] [-F] [-h] [-n] [-k] [-r] [-t seconds] time [message]",options:[{flag:"-a",meaning:"Use /etc/shutdown.allow."},{flag:"-c",meaning:"Cancel an in-progress shutdown."},{flag:"-f",meaning:"Skip the file system check upon reboot."},{flag:"-F",meaning:"Force a file system check upon reboot."},{flag:"-h",meaning:"Halt the system after the shutdown is complete."},{flag:"-n",meaning:"Go down fast and do not use init."},{flag:"-k",meaning:"Only warn about a pending shutdown but do not actually do it."},{flag:"-r",meaning:"Reboot the system after the shutdown."},{flag:"-t seconds",meaning:"The number of seconds to wait before sending kill signal."},{flag:"time",meaning:"The time to shutdown, for example 'now'."},{flag:"message",meaning:"Warning message to send to attached users."}]},{name:"sudo",category:"Privileges",icon:e.jsx(x,{}),summary:"Run a command as another user.",syntax:"sudo [-k] | [-K] | [-l] | [-v] | [-V] | [-b] [-H] [-P] [-S] [-p prompt] [-u username | #uid] [-s] | [command]",options:[{flag:"-k",meaning:"Invalidate a user's timestamp."},{flag:"-K",meaning:"Remove a user's timestamp."},{flag:"-l",meaning:"Show allowed commands for the user."},{flag:"-v",meaning:"Validate the user's timestamp."},{flag:"-V",meaning:"Show version."},{flag:"-b",meaning:"Run the specified command in the background."},{flag:"-H",meaning:"Set HOME variable to match the specified user."},{flag:"-P",meaning:"Preserve the user's group vector."},{flag:"-S",meaning:"Read password from file rather than terminal."},{flag:"-p prompt",meaning:"Use a custom password prompt."},{flag:"-u username | #uid",meaning:"The user or user ID."},{flag:"-s",meaning:"Run the shell specified in the SHELL variable."},{flag:"command",meaning:"The command to run."}]},{name:"top",category:"Monitoring",icon:e.jsx(y,{}),summary:"Interactive process and system monitor.",syntax:"top [b] [c] [C] [d delay] [i] [p pid] [q] [s] [S] [n iterations]",options:[{flag:"b",meaning:"Batch mode. Use with n to specify iteration count."},{flag:"c",meaning:"Display command line rather than command name."},{flag:"C",meaning:"On SMP systems, display total CPU statistics."},{flag:"d delay",meaning:"Set delay between screen updates."},{flag:"i",meaning:"Ignore idle and zombie processes."},{flag:"p pid",meaning:"Monitor processes with the specified process ID. Can be specified multiple times."},{flag:"q",meaning:"Refresh without delay."},{flag:"s",meaning:"Run in secure mode."},{flag:"S",meaning:"Show process utilization as a cumulative figure built on previous process state."},{flag:"n iterations",meaning:"Use with batch mode to run a certain number of times."}]},{name:"useradd",category:"Users",icon:e.jsx(C,{}),summary:"Add a new user to the system. Must be logged in as root.",syntax:"useradd [-A {method | DEFAULT},...] [-c comment] [-d homedir] [-e expiredate] [-f inactivetime] [-g initialgroup] [-G group [...]] [-m [-k skeletondir]] [-n] [-r] [-s shell] [-u uid [-o]] login",options:[{flag:"-A {method | DEFAULT},...",meaning:"The name of the program that will authenticate the user."},{flag:"-c comment",meaning:"A comment to associate with the user account."},{flag:"-d homedir",meaning:"The location of the user's home directory."}],notes:["Your original post says more options continue after this point.","This page currently preserves the visible part that you pasted."]}],I=["All","System","Scheduling","Power","Processes","Mail","Users","Privileges","Monitoring"],z=()=>{const[l,v]=d.useState(""),[i,w]=d.useState("All"),c=d.useMemo(()=>{const a=l.trim().toLowerCase();return b.filter(r=>{const t=i==="All"||r.category===i,o=[r.name,r.category,r.summary,r.syntax,...(r.options||[]).map(p=>`${p.flag} ${p.meaning}`),...r.notes||[]].join(" ").toLowerCase(),j=!a||o.includes(a);return t&&j})},[l,i]);return e.jsxs(s.Wrapper,{className:"topicWrapper",children:[e.jsxs(s.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(m,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(g,{}),"Original topic: July 21, 2012"]}),e.jsx(D,{})]}),e.jsx("h1",{children:"Quick Reference - Linux Commands"}),e.jsx("p",{className:"lead",children:"This page is a refactored version of the old archive post. Instead of a plain block of command notes, the content is reorganized into searchable reference cards so commands, syntax, and options are easier to scan and revise."}),e.jsxs("div",{className:"heroMeta",children:[e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(m,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:b.length}),e.jsx("span",{children:"Commands currently preserved here"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(h,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:c.length}),e.jsx("span",{children:"Commands matching current filters"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(u,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"More coming"}),e.jsx("span",{children:"The original archive notes continue beyond this part"})]})]})]})]}),e.jsxs(s.ControlCard,{children:[e.jsx("div",{className:"controlHead",children:e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(k,{})}),e.jsx("h2",{children:"Filter and search"})]})}),e.jsx("div",{className:"searchRow",children:e.jsxs("div",{className:"searchBox",children:[e.jsx(h,{className:"searchIcon"}),e.jsx("input",{type:"text",value:l,onChange:a=>v(a.target.value),placeholder:"Search by command, option, or description...","aria-label":"Search Linux commands"})]})}),e.jsx("div",{className:"chipRow",children:I.map(a=>e.jsx("button",{type:"button",className:`chip ${i===a?"active":""}`,onClick:()=>w(a),children:a},a))})]}),e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(u,{})}),e.jsx("h2",{children:"About this refactored page"})]}),e.jsx("p",{children:"The original post was a compact Linux command reference. This version keeps the same core information but restructures it into readable cards with categories, syntax blocks, and option lists."}),e.jsx("p",{children:'The visible commands from your pasted archive content are all included here. Since your original note says "There are more... I will post it", this layout is designed so more command objects can be appended later without changing the page structure.'})]}),e.jsxs(s.CommandSection,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(m,{})}),e.jsx("h2",{children:"Command reference"})]}),c.length?e.jsx("div",{className:"commandGrid",children:c.map(a=>{var r,t;return e.jsxs("article",{className:"commandCard",children:[e.jsx("div",{className:"commandTop",children:e.jsxs("div",{className:"titleWrap",children:[e.jsx("span",{className:"commandIcon",children:a.icon}),e.jsxs("div",{children:[e.jsx("h3",{children:a.name}),e.jsx("span",{className:"categoryTag",children:a.category})]})]})}),e.jsx("p",{className:"summary",children:a.summary}),e.jsxs("div",{className:"syntaxBox",children:[e.jsx("div",{className:"syntaxLabel",children:"Syntax"}),e.jsx("pre",{children:a.syntax})]}),(r=a.options)!=null&&r.length?e.jsxs("div",{className:"optionBlock",children:[e.jsx("h4",{children:"Options"}),e.jsx("div",{className:"optionList",children:a.options.map(o=>e.jsxs("div",{className:"optionItem",children:[e.jsx("div",{className:"flag",children:o.flag}),e.jsx("div",{className:"meaning",children:o.meaning})]},`${a.name}-${o.flag}`))})]}):null,(t=a.notes)!=null&&t.length?e.jsxs("div",{className:"noteBlock",children:[e.jsx("h4",{children:"Notes"}),e.jsx("ul",{children:a.notes.map(o=>e.jsx("li",{children:o},o))})]}):null]},a.name)})}):e.jsx("div",{className:"emptyState",children:"No commands match the current search or category filter."})]}),e.jsxs(s.FooterNote,{children:[e.jsx("h2",{children:"How to extend this page later"}),e.jsx("p",{children:"Add more command objects to the data array using the same structure:"}),e.jsx("pre",{children:`{
    name: "ls",
    category: "System",
    icon: <FiTerminal />,
    summary: "List directory contents.",
    syntax: "ls [options] [file...]",
    options: [
        { flag: "-l", meaning: "Use long listing format." }
    ],
    notes: ["Optional extra notes here."]
}`}),e.jsx("p",{children:"Once added, the page will automatically support searching, category filtering, and card rendering without any layout changes."})]})]})};export{z as default};
