var x = '';

function gauti(a) {
    var x =  document.getElementById(a).value;
    var y = parseInt(x);
    document.getElementById(a).value = "";
    return y;
}

function rodytiAtsakyma(a) {
    document.getElementById('rezultatas').innerHTML = x + a;
}

function rodytiAts () {
    if (x === '') {
         x = document.getElementById('rezultatas').innerHTML;
    }
    return x;
}

function Sudeti() {
    rodytiAts();
    var a = gauti('A');
    var b = gauti('B');

    sum = a + b;

    rodytiAtsakyma(sum);
}

function Atimti() {
    rodytiAts();

    var a = gauti('A');
    var b = gauti('B');

    sum = a - b;

    rodytiAtsakyma(sum);
}

function Dauginti() {
    rodytiAts();

    var a = gauti('A');
    var b = gauti('B');

    sum = a * b;

    rodytiAtsakyma(sum);
}

function Dalinti() {
    rodytiAts();

    var a = gauti('A');
    var b = gauti('B');

    if (b === 0) {
        rodytiAtsakyma('dalyba negalima is nulio')
    }
    else {
        sum = a / b;
        rodytiAtsakyma(sum);
    }
}
