'use strict';

const ENDPOINT = 'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json'

let users = [];
let favorites = [];

/* Do your magic! 🦄🦄🦄*/



function getPrincessInfo() {

  //Aquí la constante userName se pone DENTRO de la función porque recoge un value, que se va a alterar (o no, pero casi siempre) cada vez que suceda el evento (lleva un .value)
  fetch(ENDPOINT)
    .then(response => {
      debugger;
      response.json()
    })
    .then(data => {
      console.log(data);
    }
  );

  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      debugger;
      const characters = data.results;
      const characterList = document.querySelector('.js-user-list');
      let characterContent = '';
      for (let i = 0; i < characters.length; i++) {
        const characterName = characters[i].name;
        const characterEmail = characters[i].email;
        const characterPhone = characters[i].phone;
        const characterComment = characters[i].comment;
        console.log(characterName);
        characterContent += `<li>Name: ${characterName}  --- Email: ${characterEmail}  ---Phone:${characterPhone} ---Comment:${characterComment}</li>`;
        console.log(characterContent);
    }
    console.log(characterContent);

/*       console.log(userName);
      const img = document.querySelector("img");
      console.log(data);
      img.src = data.avatar_url;
      img.alt = "Avatar";
      const name = document.querySelector (".name");
      name.innerHTML = name.innerHTML + data.login;
      const repo = document.querySelector (".repos");
      repo.innerHTML = repo.innerHTML + data.public_repos; */
    });
}
getPrincessInfo()
/* const btn = document.querySelector(".js-button");
btn.addEventListener("click",getGithubInfo); */