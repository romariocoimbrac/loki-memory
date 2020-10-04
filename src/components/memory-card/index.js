const memoryCard = (function () {
  const module = {};

  module.create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    div {
      width: 155px;
      height: 155px;
      position: relative;
    }
    .memory-card .card {
      width: 100%;
      height: 100%;
      background-color: #af9faf;
      border-radius: 30px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
    }
    .memory-card.-active .card,
    .memory-card.-score .card {
      display: none;
    }
    .memory-card.-active .card.-front,
    .memory-card.-score .card.-front {
      display: flex;
    }
    .memory-card .card.-front {
      background-color: #fff;
    }
    .memory-card .card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }
    .memory-card .card > .icon {
      width: 100px;
    }
    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-10px);
    }
  `;
    $head.insertBefore($style, null);

    return ({ src, alt }) => `
  <div class="memory-card" onClick="memoryCard.handleClick(this)">
    <article class="card -front">
      <img src=${src} alt=${alt}
      class="icon" 
      />
    </article>
    <article class="card">
      <img src="img/loki-card.png" alt="Loki Card"
      class="icon"
      />
  </article>
</div>`;
  };

  module.handleClick = ($component) => {
    if (!$component.classList.contains("-active")) {
      module._activeMemoryCard($component);
      module._checkSure();
    }
  };

  module._activeMemoryCard = ($component) => {
    if (store.qtdActiveMemoryCard < 2) {
      $component.classList.add("-active");
    }
  };

  module._checkSure = () => {
    if (store.qtdActiveMemoryCard === 1) {
      const $activeMemoryCard = document.querySelectorAll(
        ".memory-card.-active",
      );
      if (
        $activeMemoryCard[0]
          .querySelector(".-front .icon")
          .getAttribute("src") ===
        $activeMemoryCard[1].querySelector(".-front .icon").getAttribute("src")
      ) {
        console.log(++store.score);
        $activeMemoryCard.forEach(($memoryCard) => {
          $memoryCard.classList.add("-score");
          $memoryCard.classList.remove("-active");
        });
      } else {
        setTimeout(() => {
          $activeMemoryCard.forEach(($memoryCard) => {
            $memoryCard.classList.remove("-active");
          });
          store.qtdActiveMemoryCard = 0;
        }, 1000);
      }
    }
  };

  return {
    create: module.create,
    handleClick: module.handleClick,
  };
})();
