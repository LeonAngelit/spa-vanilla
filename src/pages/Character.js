import getData from "../utils/getData";
import getHash from "../utils/getHash";


const Character = async() =>{
    let id = await getHash();
    let characterData = await getData(id);

    let episodes = [];
    characterData.episode.forEach(singleEpisode =>{
        episodes.push(singleEpisode.substr(40));
    });



    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="${characterData.image}" alt="${characterData.name}">
                <h2>${characterData.name}</h2>
            </article>
            <article class="Characters-card">
            <h3>Episodes: ${episodes}</h3>
            <h3>Status: ${characterData.status}</h3>
            <h3>Species: ${characterData.species}</h3>
            <h3>Gender: ${characterData.gender}</h3>
            <h3>Origin: ${characterData.origin.name}</h3>
            <h3>Last Location: ${characterData.location.name}</h3>
        </article>
        </div>
    `;

    return view;
}

export default Character;