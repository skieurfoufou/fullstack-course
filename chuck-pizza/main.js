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
      console.log(data);
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
  return categoryEl;
}

function renderCategoriesList(categories) {
  const categoriesListEl = document.querySelector("#categories-list");

  categories.forEach((category) => {
    const el = createCategoryListItem(category);
    categoriesListEl.appendChild(el);
  });
}

getCategories()
  .then((categories) => {
    renderCategoriesList(categories);
  })
  .catch((err) => {
    console.log(err);
  });

getRandomJoke().then().catch();
