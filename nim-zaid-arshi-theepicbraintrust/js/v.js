// render all players

const createCoinsView = (numberOfCoins) => {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < numberOfCoins; ++i) {
    const img = createCoinView();
    frag.appendChild(img);
  }
  return frag;
};

const createCoinView = () => {
  const img = document.createElement("img");
  img.classList.add("coin");
  img.src = "images/coin.png";
  return img;
};

const renderCoinsView = (coinsView) => {
  els.coinsSection.innerHTML = "";
  els.coinsSection.appendChild(coinsView);
};

const createMoveView = ({ name, choice, remaining }) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  const shouldBePlural = remaining !== 1;
  li.textContent = `${name} chose ${choice}. Now there ${
    shouldBePlural ? "are" : "is"
  } ${remaining} coin${shouldBePlural ? "s" : ""} left!`;
  return li;
};

const renderMoveView = (moveView) => els.history.appendChild(moveView);
