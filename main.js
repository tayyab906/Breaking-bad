

var loader = document.querySelector('.loader');

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}




const charactersList = document.querySelector('.charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filteredCharacters  = hpCharacters.filter(character => {
        return character.name.toLowerCase().includes(searchString); 
    });
    console.log(filteredCharacters);
    displayCharacters(filteredCharacters);

})





const loadCharacters = async () => {
    try {
        const res = await fetch(`https://www.breakingbadapi.com/api/characters?name`);
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
        console.log(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="${character.img}" alt="" class="img">
                </div>
                <div class="card-back">
                    <h1>${character.name}</h1>
                    <ul class="namelist">
                        <li class="name " id="name" ><strong>Actor Name : </strong>${character.portrayed}</li>
                        <li class="name" id="name" ><strong>Status : </strong>${character.status}</li>
                        <li class="name" id="name" ><strong>Birthday : </strong>${character.birthday}</li>
                        <li class="name" id="name" ><strong>Nick name : </strong>${character.nickname}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();