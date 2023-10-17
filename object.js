const heroes = [
    { firstName: "Ahsoka", lastName: "Tano", job: "padawan" },
    { firstName: "Boba", lastName: "Fett", job: "fejvadász" },
    { firstName: "Han", lastName: "Solo", job: "csempész" },
    { firstName: "Leia", lastName: "Organa", job: "szenátor" }
];

function renderHeroCard(hero) {
    return `
        <div class="hero-card">
            <h3>${hero.firstName} ${hero.lastName}</h3>
            <p>Job: ${hero.job}</p>
        </div>
    `;
}

function renderHeroTable(heroes) {
    const tableBody = document.querySelector("#heroTable tbody");
    tableBody.innerHTML = "";

    heroes.forEach(hero => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = hero.firstName;
        cell2.textContent = hero.lastName;
        cell3.textContent = hero.job;
    });
}

function renderHeroes() {
    const heroCardsContainer = document.querySelector("#heroCards");
    heroCardsContainer.innerHTML = heroes.map(hero => renderHeroCard(hero)).join("");
    
    renderHeroTable(heroes);
}

renderHeroes();
