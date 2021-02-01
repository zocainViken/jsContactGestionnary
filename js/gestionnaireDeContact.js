	// définition de mes variable et de mes fonctions
	var Contact = {
	    // création de contact
	    init: function(nom, prenom) {
	        this.nom = nom;
	        this.prenom = prenom;
	    },
	    // déscription avec nom et prénom de mes contacts
	    describe: function() {
	        return `| ${this.nom} | ${this.prenom} |`;
	    }
	};

	// liste de mes contacts existant
	var contact1 = Object.create(Contact);
	contact1.init("Lévisse", "Carole");

	var contact2 = Object.create(Contact);
	contact2.init("Nelsonne", "Mélodie");

	// création du menu console
	function listchoice() {
	    var menu = `
  ######## MENU #########
  1 : Lister les contacts
  2 : Ajouter un contact
  0 : Quitter
  #######################
  `;
	    console.log(menu);
	}

	// fonction pour ajouter un nouveau contact à ma liste
	function addContact(nom, prenom) {
	    var newContact = Object.create(Contact);

	    newContact.init(nom, prenom);
	    contacts.push(newContact);

	    console.log("Le nouveau contact à été ajouté.");
	}

	// création d' une fonction pour lister mes contacts
	function listerContacts(contacts) {
	    console.log("Voici la liste de vos contacts :");
	    console.log('| Nom       | Prenom   |');
	    contacts.forEach(function(contact) {
	        console.log(`${contact.describe()}`);
	       // alert(`${contact.describe()}`);
	    });
	}

	// début du programme 
	console.log("Bienvenue dans le gestionnaire des contacts !");
	alert("Bienvenue dans le gestionnaire des contacts !");

	var contacts = [contact1, contact2];
	var choice;
	// tant que l'on ne chosis pas 0 je boucle
	while(choice !== "0") {
	    // je viens demander à l'utilisateur de faire un choix 
	    listchoice();
	    choice = prompt("menu: \n 1 = lister les contacts,\n 2 = ajouter un contact,\n 0 = démarrer/quitter,\n\n ctrl+Maj+i pour la console");

	    // je peut alterner entre 2 choix lister les contact ou ajouter un contact
	    switch (choice) {
	        // choix 1 je liste les contacts
	        case "1":
	            listerContacts(contacts);
	            break;

	            // choix 2 je demande a l'utilisateur les infos dont j'ai besoin et j'ajoute le contact
	        case "2":
	            var nom = prompt("Saisir le nom :");
	            var prenom = prompt("Saisir le prénom :");
	            addContact(nom, prenom);
	            alert("contact ajouter");
	            break;

	            // au cas ou l'utilisateur entre un choix non prévue
	        default:
	            console.log("Choix invalide.");
	            break;
	    }
	}
	// si l'utilisateur choisis 0 fin de boucle + message de fin
	if(choice === "0") {
	    console.log("Au revoir !");
	    alert("Au revoir !");
	}
