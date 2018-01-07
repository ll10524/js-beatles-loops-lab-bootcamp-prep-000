function theBeatlesPlay(musicians, instruments) {
  var result = [];
  
  for (let i=0; i<musicians.length; i++) {
    word = `${musicians[i]} plays ${instruments[i]}`;
    result.push(word);
  }
  return result;
}

function 