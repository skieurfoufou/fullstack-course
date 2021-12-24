const CHUCK_NORRIS_API = "https://api.chucknorris.io";

function getCategories() {
  return fetch(`${CHUCK_NORRIS_API}/jokes/categories`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
}

function getRandomJoke(category) {
  const randomJokeUrl = category
    ? `${CHUCK_NORRIS_API}/jokes/random?category=${category}`
    : `${CHUCK_NORRIS_API}/jokes/random`;

  return fetch(randomJokeUrl)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
}

async function getRandomJokeAsync() {
  try {
    const res = await fetch(`${CHUCK_NORRIS_API}/jokes/random`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function freeTextSearch(query) {
  if (!query || query.length < 3 || query.length > 120) {
    throw "query length not valid";
  }

  try {
    const res = await fetch(`${CHUCK_NORRIS_API}/jokes/search?query=${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

function createCategoryListItem(category) {
  const categoryEl = document.createElement("div");
  categoryEl.textContent = category;
  categoryEl.dataset.id = category;
  categoryEl.classList.add("list-item");
  categoryEl.style.fontSize = "40px";
  categoryEl.style.border = "2px dotted blue";
  categoryEl.style.color = "blue";
  categoryEl.style.fontFamily = "Arial";
  categoryEl.addEventListener("click", () => showRandomJoke(category));
  //categoryEl.addEventListener("mouseover",()=>{categoryEl.style.background-color="yellow"})
  return categoryEl;
}

function renderCategoriesList(categories) {
  const categoriesListEl = document.querySelector("#categories-list");

  categories.forEach((category) => {
    const el = createCategoryListItem(category);
    categoriesListEl.appendChild(el);
  });
}

function createJokeElement({ value, categories, icon_url }) {
  const jokeEl = document.createElement("div");
  jokeEl.classList.add("joke-item");

  const headerEl = document.createElement("div");
  headerEl.classList.add("joke-header");
  jokeEl.appendChild(headerEl);

  const imageEl = document.createElement("img");
  imageEl.classList.add("joke-image");
  imageEl.src = icon_url;
  headerEl.appendChild(imageEl);

  const titleEl = document.createElement("div");
  titleEl.classList.add("joke-title");
  titleEl.textContent = "Joke Of Category: " + categories;
  headerEl.appendChild(titleEl);

  const textEl = document.createElement("div");
  textEl.classList.add("joke-text");
  textEl.textContent = value;
  jokeEl.appendChild(textEl);

  return jokeEl;
}

async function showRandomJoke(category) {
  const jokeData = category
    ? await getRandomJoke(category)
    : await getRandomJoke();
  const jokesListEl = document.querySelector("#jokes-list");
  jokesListEl.innerHTML = "";
  const jokeEl = createJokeElement(jokeData);
  jokesListEl.appendChild(jokeEl);
}

async function showQueryJokes(event) {
  const query = event.target.value;
  if (query.length < 3) {
    return;
  }
  try {
    const jokes = await freeTextSearch(query);

    const jokesListEl = document.querySelector("#jokes-list");
    jokesListEl.innerHTML = "";

    jokes.result.forEach((jokeData) => {
      const jokeEl = createJokeElement(jokeData);
      jokesListEl.appendChild(jokeEl);
    });
  } catch (error) {
    console.log(error);
  }
}

getCategories()
  .then((categories) => {
    renderCategoriesList(categories);
  })
  .catch((err) => {
    console.log(err);
  });

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", () => showRandomJoke());

const inputEl = document.querySelector("input");
inputEl.addEventListener("input", showQueryJokes);
