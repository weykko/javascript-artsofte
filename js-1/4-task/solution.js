export function unionLog(type, msg) {
    if (type === "log") console.log(msg);
    else if (type === "warn") console.warn(msg);
    else if (type === "error") console.error(msg);
    else if (type === "clear") console.clear();
    else if (type === "table") console.table(msg);
    else if (type === "dir") console.dir(msg);
    else if (type === "group") console.group(msg);
    else if (type === "groupCollapsed") console.groupCollapsed(msg);
    else if (type === "count") console.count(msg);
    else if (type === "trace") console.trace(msg);
    else if (type === "time") console.time(msg);
    else throw new Error();
}