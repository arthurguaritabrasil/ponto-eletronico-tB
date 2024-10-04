export function GenerateUUID() {
    let myuuid = crypto.randomUUID();
    return myuuid;
}

export function alternateDisplay(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none") {
        document.getElementById(el).style.display = 'block';
    } else {
        document.getElementById(el).style.display = 'none';
    }
}