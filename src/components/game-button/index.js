const gameButton = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .game-button {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #bdb;
      border: 3px solid #9b9;
      color: #575;
      font-weight: bold;
      font-size: 1.1em;
      text-transform: uppercase
      cursor: pointer;
      box-shadow: 1px 1px 2px #020;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
    <button class="game-button">Start</button>
  `;
  };

  return {
    render: module.render,
  };
})();
