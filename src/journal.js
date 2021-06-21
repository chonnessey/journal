export default function Journal(title, body) {
  this.title = title;
  this.body = body;
  this.counter = 0;
  this.vowels = 0;
  this.consonants = 0;
}

Journal.prototype.addAllWords = function () {
  let titleEntry = this.title.split(' ');
  let bodyEntry = this.body.split(' ');
  let totalWords = titleEntry.length + bodyEntry.length;
  this.counter += totalWords;
  console.log(this.counter);
}

Journal.prototype.tallyVowels = function () {
  const totalTitleVowels = this.title.replace(/[^aeiou]/gi, "");
  const totalBodyVowels = this.body.replace(/[^aeiou]/gi, "");
  const totalVowels = totalTitleVowels.length + totalBodyVowels.length;
  this.vowels += totalVowels;
  console.log(this.vowels);
}

Journal.prototype.tallyConsonants = function () {
  const totalTitleConsonants = this.title.replace(/[aeiou\W]/gi, "");
  const totalBodyConsonants = this.body.replace(/[aeiou\W]/gi, "");
  const totalConsonants = totalTitleConsonants.length + totalBodyConsonants.length;
  this.consonants += totalConsonants;
  console.log(this.consonants);
}

let newJournal = new Journal("hello there", "what's up")
newJournal.addAllWords();
newJournal.tallyVowels();
newJournal.tallyConsonants();

