// Attendi che il documento sia completamente caricato
document.addEventListener("DOMContentLoaded", function() {
    // Elementi DOM
    const currentDate = document.getElementById("current-date");
    const menuItems = document.querySelectorAll(".sidebar-nav li");
    const sections = document.querySelectorAll("main section");

    // Inizializzazione
    inizializzaSito();

    // Imposta gli event listener
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            const sectionName = this.getAttribute("data-section");
            if (sectionName) {
                cambiaSezionePrincipale(sectionName);
            }
        });
    });

    // Funzioni principali
    function inizializzaSito() {
        // Imposta timer per aggiornamenti periodici
        aggiornaDataOra();
        setInterval(aggiornaDataOra, 1000);

        // Attiva prima sezione
        cambiaSezionePrincipale("introduzione");
    }

    function cambiaSezionePrincipale(sectionName) {
        // Deseleziona tutte le voci di menu e sezioni
        menuItems.forEach(item => item.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active"));

        // Seleziona la voce di menu e la sezione richiesta
        document.querySelector(`[data-section="${sectionName}"]`).classList.add("active");
        document.getElementById(sectionName).classList.add("active");

        // Applica un semplice effetto visivo durante il cambio
        document.body.style.opacity = "0.8";
        setTimeout(() => {
            document.body.style.opacity = "1";
        }, 300);
    }


    function aggiornaDataOra() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Gennaio è 0!
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        currentDate.textContent = `${day}/${month}/${year} ${hours}:${minutes}`;
    }


});
