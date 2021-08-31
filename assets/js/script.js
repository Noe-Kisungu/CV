const form = document.getElementById('submit');
const formReset = document.getElementById('reset');
//Les regex :
// Pour l'organisation  :  guillemets, chevrons, parenthèses, slash et arobase son interdits
const forganisation = new RegExp(/^[^"<>@/()]+$/g);
// Pour l'email : apostrophe, guillemets, chevrons, arobase (suplémentaire) ou espaces son interdits
const femail = new RegExp(/^[^'"<>@ ]+@+[^'"<>@ ]+\.[^'"<>@ ]+$/g);
//Pour l'objet : chevrons, guillemets et titre dépassant les 50 caractères seront interdits
const fobject = new RegExp(/^[^"<>]{1,50}$/g);

form.onclick = function() {
    let bool = true;
    let organisation = document.getElementById('organisation').value;
    let email = document.getElementById('email').value;
    let object = document.getElementById('object').value;
    let message = document.getElementById('message').value;

    if (organisation == "" || organisation == null) {
        document.getElementById('errOrganisation').className = "alert alert-warning col-12";
        document.getElementById('errOrganisation').innerHTML = "Vous devez entrer votre organisation!";
        // console.log(organisation);
        document.getElementById('organisation').style.borderColor = "red";
        bool = false;
    }
    else if (!organisation.match(forganisation)) {
        document.getElementById('errOrganisation').className = "alert alert-danger col-12";
        document.getElementById('errOrganisation').innerHTML = "Veuillez ne pas mettre de guillemets, de parenthèses, de slash, d'arobases ou de chevrons!";
        document.getElementById('organisation').style.borderColor = "red";
        bool = false;
    }
    else {
        document.getElementById('errOrganisation').className = "d-none";
        document.getElementById('errOrganisation').innerHTML = "";
        document.getElementById('organisation').style.borderColor = "limegreen";
    }


    if (email == "" || email == null) {
        document.getElementById('errEmail').className = "alert alert-warning col-12";
        document.getElementById('errEmail').innerHTML = "Vous devez entrer votre email!";
        document.getElementById('email').style.borderColor = "red";
        bool = false;
    }
    else if (!email.match(femail)) {
        document.getElementById('errEmail').className = "alert alert-danger col-12";
        document.getElementById('errEmail').innerHTML = "Veuillez ne pas mettre de guillemets, d'apostrophes, d'espaces, de chevrons ainsi qu'un seul arobase";
        document.getElementById('email').style.borderColor = "red";
        bool = false;
    }
    else {
        document.getElementById('errEmail').className = "d-none";
        document.getElementById('errEmail').innerHTML = "";
        document.getElementById('email').style.borderColor = "limegreen";
    }


    if (object == "" || object == null) {
        document.getElementById('errObject').className = "alert alert-warning col-12";
        document.getElementById('errObject').innerHTML = "Veuillez préciser l'objet de votre message!";
        document.getElementById('object').style.borderColor = "red";
        bool = false;
    }
    else if (!object.match(fobject)) {
        document.getElementById('errObject').className = "alert alert-danger col-12";
        document.getElementById('errObject').innerHTML = "Veuillez ne pas y inclure de guillemets ou de chevrons!";
        document.getElementById('object').style.borderColor = "red";
        bool = false;
    }
    else {
        document.getElementById('errObject').className = "d-none";
        document.getElementById('errObject').innerHTML = "";
        document.getElementById('object').style.borderColor = "limegreen";
    }


    if (message == "" || message == null) {
        document.getElementById('errMessage').className = "alert alert-warning col-12";
        document.getElementById('errMessage').innerHTML = "Ce champs est obligatoires!";
        document.getElementById('message').style.borderColor = "red";
        bool = false;
    }
    else {
        document.getElementById('errMessage').className = "d-none";
        document.getElementById('errMessage').innerHTML = "";
        document.getElementById('message').style.borderColor = "limegreen";
    }

    return bool;/* retour de la variable bool qui permet ou non l'envoi du formulaire*/
};
formReset.onclick = function() {
    document.getElementById('errMessage').innerHTML = "";
    document.getElementById('errObject').innerHTML = "";
    document.getElementById('errEmail').innerHTML = "";
    document.getElementById('errOrganisation').innerHTML = "";
};
