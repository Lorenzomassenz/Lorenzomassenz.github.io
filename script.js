document.addEventListener("DOMContentLoaded", function() {
    const currentDate = document.getElementById("current-date");
    const sezioniPrincipali = document.querySelectorAll("main section");
    const menuItems = document.querySelectorAll('[data-section]');

    inizializzaSito();

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            const nomeSezione = this.getAttribute("data-section");
            if (nomeSezione) {
                mostraSezione(nomeSezione);
            }
        });
    });

    function inizializzaSito() {
        aggiornaDataOra();
        setInterval(aggiornaDataOra, 1000);
        mostraSezione("introduzione");
    }

    function mostraSezione(id) {
        // Rimuove classe active da tutto
        menuItems.forEach(item => item.classList.remove("active"));
        sezioniPrincipali.forEach(section => section.classList.remove("active"));
        document.querySelectorAll(".sottosezione").forEach(sotto => sotto.classList.remove("active"));

        const voceMenu = document.querySelector(`[data-section="${id}"]`);
        const sezionePrincipale = document.getElementById(id);
        const sottosezione = document.querySelector(`.sottosezione#${id}`);

        // Se clic su sezione principale
        if (sezionePrincipale) {
            voceMenu?.classList.add("active");
            sezionePrincipale.classList.add("active");
        }

        // Se clic su sottosezione (dentro una sezione principale)
        if (sottosezione) {
            const contenitore = sottosezione.closest("section");
            contenitore?.classList.add("active");
            voceMenu?.classList.add("active");
            sottosezione.classList.add("active");
        }

        // Effetto fade
        document.body.style.opacity = "0.8";
        setTimeout(() => {
            document.body.style.opacity = "1";
        }, 300);
    }

    function aggiornaDataOra() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        currentDate.textContent = `${day}/${month}/${year} ${hours}:${minutes}`;
    }
});
