import Reveal from "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/reveal.esm.min.js";
import Markdown from "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/markdown/markdown.esm.min.js";

let deck = new Reveal(document.querySelector(".deck1"), {
  plugins: [Markdown],
  embedded: true,
  slideNumber: true,
  mouseWheel: true,
  progress: false,
  keyboardCondition: "focused", // only react to keys when focused
  center: false,
});

deck.initialize({
  width: 1280,
  // height: 800,
});

document.querySelector(".deck1").style.width = "100vw";
document.querySelector(".deck1").style.height = "100%";

deck.layout();
