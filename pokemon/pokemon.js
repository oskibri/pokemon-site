const url = "https://pokeapi.co/api/v2/pokemon/"
const msg = document.getElementById('wait')
const input = document.getElementById('choice')

document.addEventListener('keyup', event => {
    if (event.key === "Enter") {
        getPokemon();
    };
});

function getPokemon() {
    const inputValue = input.value.toLowerCase().trim().replaceAll(" ", "-");
    console.log(inputValue);

    msg.textContent = "Searching...";

    fetch(url + inputValue)
        .then((response) => {
            
            if (!response.ok) {throw new Error(response.status)};
            return response.json();
        })
        .then(pokemon => {

            const img1 = document.getElementById('pokemon1');
            const img2 = document.getElementById('pokemon2');
            img1.src = pokemon.sprites.front_default;
            img2.src = pokemon.sprites.back_default;
            img1.style.display = "block";
            img2.style.display = "block";
            return "Done!"
        })
        .then(done => msg.textContent = done)
        .catch(error => {
            if (error.message === "404") {

                let name = (inputValue[0].toUpperCase() + inputValue.slice(1));
                const regex = /-/g, indexArr = [];

                while (regObj = regex.exec(name)) {
                    indexArr.push(regObj.index)
                };

                indexArr.forEach(index => {
                    name = name.substring(0, index + 1) + name[index + 1].toUpperCase() + name.substring(index + 2);
                });

                name = name.replaceAll("-", " ");
                msg.innerHTML = 
                    `Couldn't find Pokemon: <span style="color: tomato; text-decoration: underline">${name}</span>`;
            }
        });
}

