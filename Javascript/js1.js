var arr = [
    {name: 'Ernestas', age: 29},
    {name: 'Mantas', age: 27},
    {name: 'Tomas N.', age: 27},
    {name: 'Lina', age: 25},
    {name: 'Mantautas', age: 27},
    {name: 'Tautvydas', age: 27},
    {name: 'Eimantas', age: 30},
];

var spausdinti = function (kur, ka) {
    kur.innerHTML += ka;
};

function sukurtiSarasa(arr) {

    var sarasas = "";
    for (var i = 0; i < arr.length; i++) {
        var zmogus = arr[i];
        sarasas += "vardas: "
            + zmogus.name + " amzius: "
            + zmogus.age + "</br>";
    }
    return sarasas;

}

var sarasas1 = sukurtiSarasa(arr);

var kur1 = document.getElementsByClassName('demo')[0];

spausdinti(kur1, sarasas1);




