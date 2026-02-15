document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});

const form = document.querySelector('#gameForm');
const experienceSelect = document.querySelector('#experience');
const resultsContainer = document.querySelector('#resultsContainer');

const beginnerGames = [
{
    game:"Ticket to Ride",
    info:"2-5 | Time: 60 min",
    description:"A fun, easy-to-learn game about building train routes across the country.",
    imageUrl:
    "images/ticket-to-ride.webp"
},
{
    game:"Codenames",
    info:"2-8+ players | Time: 15 min",
    description:"A fast-paced word game where teams give clever one word clues to uncover secret agents before the other team does.",
    imageUrl:
    "images/codenames.webp" 
},
{
    game:"Sushi Go!",
    info:"2-5 players| Time: 15 min",
    description:"A fast and colorful card drafting game where you pick and pass sushi cards to build the best combinations and score the most points.",
    imageUrl:
    "images/shushi-go.webp"
},
{
    game:"Guess Who?",
    info:"2 | Time: 10-20 min",
    description:"A fun deduction game where players ask yes/no questions to figure out their opponent’s mystery character.",
    imageUrl:
    "images/guess-who.webp"
},
{
    game:"Carcassonne",
    info:"2-5 players | Time: 30-45 min",
    description:"Tile-laying game where players create cities, roads, and farms while placing followers to earn points.",
    imageUrl:
    "images/carcassonne.webp"
},
 {
    game:"Uno",
    info:"2-10 players| Time: 15-30 min",
    description:"A fast-paced card game where players match colors or numbers to play all their cards first. Great for casual fun.",
    imageUrl:
    "images/uno.webp"
}
]
const intermediateGames =[
{
    game:"Catan",
    info:"3-4 | Time: 90 min",
    description:"A classic resource-management game where players trade and build settlements.",
    imageUrl:
    "images/catan.webp"
},
{
    game:"Wingspan",
    info:"1-5 | Time: 40-70 min",
    description:"A beautifully designed engine-building game where players attract birds to their wildlife preserves, building powerful combinations and scoring through careful planning.",
    imageUrl:
    "images/wingspan.webp"
},
{
    game:"Azul",
    info:"2-4 | Time: 30-45 min",
    description:"A strategic tile-drafting game where players carefully select colorful tiles to create beautiful patterns and score the most points.",
    imageUrl:
    "images/azul.webp"
},
{
    game:"Everdell",
    info:"1-4 | Time: 40-80 min",
    description:"A charming worker placement and card-building game where players construct woodland cities, gather resources, and plan clever combos to score points.", 
    imageUrl:
    "images/everdell.webp"
},
{
    game:"Scythe",
    info:"1-5 | Time: 90-115 min",
    description:"A strategic engine-building game set in an alternate-history 1920s Europe, where players control factions, gather resources, and expand territories to dominate the board.",
    imageUrl:
    "images/scythe.webp"
},
{
    game:"Viticulture",
    info:"1-6 | Time: 45-90 min",
    description:"A worker placement game where players run vineyards, produce wine, fulfill orders, and optimize their workers and seasons to grow a successful winery.", 
    imageUrl:
    "images/viticulture.webp"
}
];
const advancedGames = [
{
    game:"Root",
    info:"2-4 | Time: 90-120 min",
    description:"An asymmetric strategy game where woodland factions battle for control, each with unique abilities and play styles that create deep, ever-changing strategy.", 
    imageUrl:
    "images/root.webp"
},
{
    game:"Brass: Birmingham",
    info:"2-4 | Time: 60-120 min",
    description:"A deep economic strategy game where players build industries, expand networks, and compete to dominate England’s Industrial Revolution through careful planning and smart resource management.", 
    imageUrl:
    "images/Brass-Birmingham.webp"
},
{
    game:"Terraforming Mars",
    info:"1-5 | Time: 120-180 min",
    description:"A strategic engine-building game where players develop corporations to transform Mars—raising temperature, creating oceans, and building infrastructure to make the planet habitable.", 
    imageUrl:
    "images/Terraforming-Mars.webp"
},
{
    game:"Dune: Imperium",
    info:"1-4 | Time: 60-120 min",
    description:"A strategic blend of deckbuilding and worker placement where players compete for influence, resources, and military power to control the Imperium.", 
    imageUrl:
    "images/dune-imperium.webp"
},
{
    game:"Spirit Island",
    info:"1-4 | Time: 90-120 min",
    description:"A deep cooperative strategy game where players become powerful spirits defending their island from invading colonizers through careful planning and unique abilities.", 
    imageUrl:
    "images/spirit-island.webp"
},
{
    game:"Gloomhaven",
    info:"1-4 | Time: 90-150 min",
    description:"A massive campaign-driven dungeon crawler featuring tactical combat, character progression, and long-term strategic decision-making.", 
    imageUrl:
    "images/gloomhaven.webp"
}

];

function createGameCard(gamesArray) {
    resultsContainer.innerHTML = "";
    gamesArray.forEach(game => {
        const div = document.createElement('div');
        div.classList.add('game-card'); 
        
        const img = document.createElement('img');
        img.src = game.imageUrl;
        img.alt = game.game;
        img.loading = "lazy";
        
        const h4 = document.createElement('h4');
        h4.textContent = game.game;
        
        const p1 = document.createElement('p');
        p1.textContent = `Players: ${game.info}`;
        
        const p2 = document.createElement('p');
        p2.textContent = `Description: ${game.description}`;
        
        div.appendChild(img);
        div.appendChild(h4);
        div.appendChild(p1);
        div.appendChild(p2);
        
        resultsContainer.appendChild(div);
   });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedLevel = experienceSelect.value;
    localStorage.setItem('lastSelectedLevel', selectedLevel);
    if (selectedLevel === "Beginner") {
        createGameCard(beginnerGames);
    } else if (selectedLevel === "Intermediate") {
        createGameCard(intermediateGames);
    } else if (selectedLevel === "Advanced") {
        createGameCard(advancedGames);
    }
});
window.addEventListener('load', () => {
    const lastLevel = localStorage.getItem('lastSelectedLevel');
    if (lastLevel) {
        experienceSelect.value = lastLevel;
        if (lastLevel === "Beginner") {
            createGameCard(beginnerGames);
        } else if (lastLevel === "Intermediate") {
            createGameCard(intermediateGames);
        } else if (lastLevel === "Advanced") {
            createGameCard(advancedGames);
        }
    }
});