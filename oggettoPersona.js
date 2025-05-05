let persona = {
    nome: "Mario",
    cognome: "Rossi",
    annoNascita: 1999,
    calcolaEta: function() {
        let annoCorrente = 2025;
        return annoCorrente - this.annoNascita;
    }
}

console.log(`${persona.nome} ${persona.cognome} ha ${persona.calcolaEta()} anni.`);