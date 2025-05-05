let libro = {
    titolo: "Il Signore degli Anelli",
    autore: "J.R.R. Tolkien",
    anno: 1954,
    descrizione: function() {
        return `Titolo: ${this.titolo}, Autore: ${this.autore}, Anno: ${this.anno}`;
    }
};

console.log(libro.descrizione());