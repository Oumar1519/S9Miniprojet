/**class Journaliste{
    constructor(nom,biographie,specialite,couleur){
        this.nom=nom;
        this.biographie=biographie;
        this.specialite=specialite;
        this.couleur=couleur;
    }
}**/
function Journaliste(nom="",biographie="",specialite="",couleur=""){
    this.nom=nom;
    this.biographie=biographie;
    this.specialite=specialite;
    this.couleur=couleur;
}
function Equipe(){
    this.listeJournaliste=[];
    this.contientPropriete=function (){
        let existe=false
        for (let x=0; x<=this.listeJournaliste.length;x++){
            for (let y=0; y<=this.listeJournaliste.length;y++){
                if (x!==y && (this.listeJournaliste[x]===this.listeJournaliste[y])){
                    existe=false;
                }
            }
        }

        return existe
    }
    /**this.contientPropriete = function(propriete, valeur){
        return this.journalistes.findIndex((journaliste) => journaliste[propriete] === valeur) >-1;
    }**/
}
//creation de l'équipe;
let equipe=new Equipe();

$('form').submit(function (ev){
    //let bio=$('#biographie').val();
    //if(ValiderFormulaire(bio))
    ev.preventDefault();
})

function ValiderFormulaire(biographie){
    $('p.alert').addClass('d-none');
    const $bioMsgErr=$('#biographie + p.alert');
    $bioMsgErr.empty();

    let valide=true;
    if (!biographie.includes('!')){
        valide=false;
        $bioMsgErr.append('doit avoir !').remove('d-none');
    }
    return valide;
}

