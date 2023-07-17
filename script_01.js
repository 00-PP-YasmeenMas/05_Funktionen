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

ausgabeNamen();

function ausgabeNamen () {
// What happens in VEGAS ...
let firstname = "Yasmeen";
    console.log("Hallo " + firstname + "!");
}

console.log(firstname); // Fehler --> SCOPE!

