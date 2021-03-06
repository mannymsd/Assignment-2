//http://api.wordnik.com

//this is where the link the website
var url1 = "http://api.wordnik.com/v4/word.json/";
//the word that we want to get related to at first
var word = "graphics";
//the api and the function that we want to get words that relate to the word show on the screen
var url2 = "/relatedWords?useCanonical=false&limitPerRelationshopType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

var link;

function setup() {
  createCanvas(400, 100);
  background(150);
  link = createA('#', word);
  link.mousePressed(askWordnik);
}

function askWordnik() {
  loadJSON(url1 + word + url2, gotData);
}

function gotData(data) {
  var index1 = floor(random(0, data.length));
  var index2 = floor(random(0, data[index1].words.length));
  word = data[index1].words[index2];
  link.html(word);
}
