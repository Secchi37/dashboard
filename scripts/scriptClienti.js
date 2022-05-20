let codice = document.getElementById(".codice");
let nomeCliente = document.getElementById(".nomeCliente");
let cognomeCliente  = document.getElementById(".cognomeCliente");
let emailCliente = document.getElementById(".emailCliente");
let passCliente = document.getElementById(".passCliente");
let indirizzoliente = document.getElementById(".indirizzoCliente");



window.addEventListener("load", () => {
	
			// API URL
			const base ="https://d765-87-8-204-239.eu.ngrok.io/cliente/lista";
				
			// Calling the API
			fetch(base)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log('__________________________________________________');
					console.log(data);
					console.log('__________________________________________________');
					

				});
		});
        