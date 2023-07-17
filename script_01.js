"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Tobias!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen () {
// What happens in VEGAS ...
let firstname = "Yasmeen";
    console.log("Hallo " + firstname + "!");
}

// console.log(firstname); // Fehler --> SCOPE!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für Parameter
ausgabeNamen2("Sohrab"); // call +Argument(e)
ausgabeNamen2("Nico");
ausgabeNamen2("Yasmeen");

// Funktion mit Parameter(n)
function ausgabeNamen2 (firstname) {
    console.log("Hallo " + firstname + "!");
}
