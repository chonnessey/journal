export default function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.addAllWords = function () {
  let titleEntry = this.title.split(' ');
  let bodyEntry = this.body.split(' ');
  
  
  console.log(titleEntry);
  console.log(bodyEntry);
}
let newJournal = new Journal("hello there", "what's up")
newJournal.addAllWords();