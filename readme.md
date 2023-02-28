<!-- Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
<!-- Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. -->

--MILESTONE 1
Creiamo tramite html un container e successivamente questo container avrà due div (uno per andare avanti e uno per andare indietro). Inseriamo momentaneamente le immagini staticamente che poi andremo a togliere usando js.


--MILESTONE 2
Rimuoviamo il markup statico e inseriamo le immagini dinamiche grazie a js e un ciclo for.

--Creiamo un Array con all'interno le immagini, succcessivamente creiamo una variabile vuota che utilizzeremo successivamente 

--Nel ciclo for inseriamo la variabile creata in precendenza con all'interno un div inserendogli la classe .item

--Selezioniamo le classi .prev e .next (i bottoni) e selezioniamo anche il div item
--Creiamo degli eventi che provocheranno al click che la variabile active avrà un incremento o un decremento
