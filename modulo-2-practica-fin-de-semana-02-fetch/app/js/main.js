"use strict";

const urlBaseAdalab =
  "https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data";
const urlBaseRepo =
  "https://raw.githubusercontent.com/saraalite/royal-fun/master/modulo-2-practica-fin-de-semana-02-fetch/data";

const isAdalabUrl = false;
const urlBase = isAdalabUrl ? urlBaseAdalab : urlBaseRepo;

const ENDPOINT = `${urlBase}/users.json`;

let users = [];
let favorites = [];

/* Do your magic! 🦄🦄🦄*/

function getImage(url) {
  if (isAdalabUrl) {
    return url;
  } else {
    const path = url.split("/");
    const urlChanged = `${urlBase}/${path[path.length - 2]}/${
      path[path.length - 1]
    }`;
    return urlChanged;
  }
}

function addBlueColor(event) {
  console.log(event);
  event.target.classList.toggle('blue');
}

function addEventToContainer () {
  const containers = document.querySelectorAll(".comment-group"); 

  console.log(containers);

  for (let i = 0; i < containers.length; i++ ){
    containers[i].addEventListener("click", addBlueColor);
  }
}

function getPrincessInfo() {
  //Aquí la constante userName se pone DENTRO de la función porque recoge un value, que se va a alterar (o no, pero casi siempre) cada vez que suceda el evento (lleva un .value)

  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      users = data;
      const characterList = document.querySelector(".js-user-list");
      let characterContent = "";
      for (let i = 0; i < users.length; i++) {
        const characterName = users[i].name;
        const characterComment = users[i].comment;
        const imageUrl = getImage(users[i].picture);
        const imgHtml = `<img class="profile-image" src="${imageUrl}" alt="foto de perfil">`;
        const nameHtml = `<div class="profile-name">${characterName}</div>`;
        const commentHtml = `<div class="profile-comment">${characterComment}</div>`;
        characterContent += `<li><div class="comment-group"><div class="image-name">${
          imgHtml + nameHtml
        }</div>${commentHtml}</div></li>`;
      }
      characterList.innerHTML = characterContent;
      addEventToContainer();
      
    });
}

getPrincessInfo();

