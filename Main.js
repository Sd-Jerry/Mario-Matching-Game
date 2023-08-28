let chck1 = document.querySelector('#chck1');
let chck2 = document.querySelector('#chck2');
let chck3 = document.querySelector('#chck3');
let reset = document.querySelector('.reset');

chck1.onclick = function () {
    if (chck1.checked === true) {
        chck1.disabled = 'true';
    }
}
chck2.onclick = function () {
    if (chck2.checked === true) {
        chck2.disabled = 'true';
    }
}
chck3.onclick = function () {
    if (chck3.checked === true) {
        chck3.disabled = 'true';
    }
}

reset.onclick = function () {
    chck1.disabled = false;
    chck1.checked = false;

    chck2.disabled = false;
    chck2.checked = false;

    chck3.disabled = false;
    chck3.checked = false;
}