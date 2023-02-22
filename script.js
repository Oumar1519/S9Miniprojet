class Journaliste{
    constructor(nom,biographie,specialite,couleur){
        this.nom=nom;
        this.biographie=biographie;
        this.specialite=specialite;
        this.couleur=couleur;
    }
}
function Equipe(){
    this.listeJournaliste=[];
    this.contientPropriete = function(propriete, valeur){
        return this.journalistes.findIndex((journaliste) => journaliste[propriete] === valeur) >-1;
    }
}