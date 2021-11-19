class GameEngine {
  constructor() {
    console.log("trackor");
    this.init();
  }

  init() {
    console.log("init");
    this.onInit();
    this.load();
  }

  onInit() {}

  load() {
    console.log("load");
    this.onLoad();
    this.render();
  }

  onLoad() {}

  render() {
    console.log("run");
    for (let i = 0; i < 10; i++) {
      console.log(`[${i}] running`);
      this.onRender();
    }
  }

  onRender() {}
}

class Game extends GameEngine {
  constructor() {
    super();
  }

  onLoad() {
    console.log("game - load");
  }

  onRender() {
    console.log("game - render");
  }
}

const game = new Game();
