function MemoryCard() {
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
      background-color: #b4b4b4;
      border-radius: 30px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
    }
    .memory-card.-active .card {
      display: none;
    }
    .memory-card.-active .card.-front{
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
  <div class="memory-card" onClick="handleClick(this)">
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
}

const handleClick = ($component) => {
  if (qtdActiveMemoryCard < 2) {
    $component.classList.toggle("-active");
  }

  if (qtdActiveMemoryCard === 1) {
    setTimeout(() => {
      const $activeMemoryCard = document.querySelectorAll(
        ".memory-card.-active",
      );

      $activeMemoryCard.forEach(($memoryCard) => {
        $memoryCard.classList.remove("-active");
      });

      qtdActiveMemoryCard = 0;
    }, 1000);
  }
};
