function dateMask(input) {
    var v = input.value;
    if (v.match(/^\d{2}$/) !== null) {
        input.value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
        input.value = v + '/';
    }
}

function hourMask(input) {
    var v = input.value;
    if (v.match(/^\d{2}$/) !== null) {
        input.value = v + ':';
    }
}

