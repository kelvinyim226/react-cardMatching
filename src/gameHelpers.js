export const cardCollection = [
  ["apple", "word", "unmatch"],
  ["apple", "pic", "unmatch", "apple.png"],
  ["orange", "word", "unmatch"],
  ["orange", "pic", "unmatch", "orange.png"],
  ["pinapple", "word", "unmatch"],
  ["pinapple", "pic", "unmatch", "pinapple.png"],
  ["cat", "word", "unmatch"],
  ["cat", "pic", "unmatch", "cat.png"],
  ["dog", "word", "unmatch"],
  ["dog", "pic", "unmatch", "dog.png"],
  ["panada", "word", "unmatch"],
  ["panada", "pic", "unmatch", "panada.png"],
  ["ballon", "word", "unmatch"],
  ["ballon", "pic", "unmatch", "ballon.png"],
  ["monkey", "word", "unmatch"],
  ["monkey", "pic", "unmatch", "monkey.png"],
  ["donut", "word", "unmatch"],
  ["donut", "pic", "unmatch", "donuts.png"],
  ["lion", "word", "unmatch"],
  ["lion", "pic", "unmatch", "lion.png"],
];

export const shuffledCardCollection = () => {
  return shuffle(cardCollection);
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
