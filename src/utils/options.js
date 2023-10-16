export function getOption(id, name, defaultValue) {
    let options = localStorage.getItem(`options:${id}`);
    if (!options || !id) {
        return defaultValue;
    }
    options = JSON.parse(options);
    if (options[name] === undefined) {
        return defaultValue;
    }
    return options[name];
}

export function setOption(id, name, value) {
    if (!id) {
        return;
    }
    let options = localStorage.getItem(`options:${id}`);
    if (options) {
        options = JSON.parse(options);
    } else {
        options = {};
    }
    options[name] = value;
    localStorage.setItem(`options:${id}`, JSON.stringify(options));
}
