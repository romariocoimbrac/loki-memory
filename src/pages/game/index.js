(function () {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();

  const createMemoryCard = memoryCard.create();

  const $memoryCardHype = createMemoryCard({
    src: "img/loki-hype.png",
    alt: "Loki Hype",
  });
  const $memoryCardNormal = createMemoryCard({
    src: "img/loki-normal.png",
    alt: "Loki Normal",
  });
  const $memoryCardSmile = createMemoryCard({
    src: "img/loki-smile.png",
    alt: "Loki Smile",
  });
  const $memoryCardTall = createMemoryCard({
    src: "img/loki-tall.png",
    alt: "Loki Tall",
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardHype);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardHype);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardNormal);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardNormal);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSmile);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSmile);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardTall);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardTall);

  $root.insertAdjacentElement("beforeend", $cardsWrapper);
})();
