/**class Journaliste{
    constructor(nom,biographie,specialite,couleur){
        this.nom=nom;
        this.biographie=biographie;
        this.specialite=specialite;
        this.couleur=couleur;
    }
}**/
function Journaliste(nom,biographie,specialite,couleur){
    this.nom=nom;
    this.biographie=biographie;
    this.specialit=specialite;
    this.couleu=couleur;
}
function Equipe(){
    this.listeJournaliste=[];
    /**for (let element=0;element<=this.listeJournaliste.length;element++){
        if (this.listeJournaliste.includes(element)){
            return false;
        }
        else {
            return false
        }
    }**/
    this.contientPropriete=function (element){
        for (let i=0;i<=this.listeJournaliste.length;i++){
            if (element===this.listeJournaliste[i]){
                return false;
            }
            else {
                return true;
            }
        }

    }
    /**this.contientPropriete = function(propriete, valeur){
        return this.listeJournaliste.findIndex((journaliste) => journaliste[propriete] === valeur) >-1;
    }**/
    this.ajoutJournaliste=function (journalistes){
        this.listeJournaliste.push(journalistes);
    }
}

const equipe = new Equipe();
$('form').submit(function (ev){
    const nom = $('#nom').val();
    const bio = $('#biographie').val();
    const specialite = $('#specialite').val();
    const couleur = $('#couleur').val();
    if(validerFormulaire(bio, specialite, couleur)){
        equipe.ajoutJournaliste(new Journaliste(nom,bio,specialite,couleur));
        afficheEquipe();
    }
    ev.preventDefault();
})
function validerFormulaire(biographie, specialite, couleur){
    $('p.alert').addClass('d-none');
    const $bioMsgErr=$('#biographie + p.alert');
    const $special=$('#specialite + p.alert');
    const $coulMsg=$('#couleur + p.alert');
    $bioMsgErr.empty();
    $special.empty();
    $coulMsg.empty();
    let validForm = true;
    if (!biographie.includes('!')){
        validForm=false;
        $bioMsgErr.append('doit avoir !').removeClass('d-none');
    }
    if (!(/^[A-Z]/.test(biographie))){
        validForm=false;
        $bioMsgErr.append('doit commencer par une lettre majuscule').removeClass('d-none');
    }
    if (equipe.contientPropriete(specialite)){
        validForm=false;
        $special.append('specialite existe deja').removeClass('d-none');
    }
    if (equipe.contientPropriete(couleur)){
        validForm=false;
        $coulMsg.append('Cette couleur existe deja').removeClass('d-none');
    }
    return validForm;
}
function afficheEquipe(){
    const listeEquipe=$('ul');
    listeEquipe.empty();
    equipe.listeJournaliste.forEach((jounaliste)=>{
    listeEquipe.append(`<li class="list-group-item">${jounaliste.nom}<span class="ms-2 badge rounded-pill">${jounaliste.specialit}</span> </li>`);
    listeEquipe.find('span').last().css('background-color',jounaliste.couleu)
    })
}

