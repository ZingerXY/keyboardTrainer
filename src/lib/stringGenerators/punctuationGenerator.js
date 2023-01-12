const punctuationMarks = ['`', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~']

export const generateStringOfPunctuationMarks = (numberOfPunctuationMarksToGenerate) => {
  let stringOfPunctuationMarks = '';
  const lengthOfPunctuationMarksArray = punctuationMarks.length;
  for(let i = 0; i < numberOfPunctuationMarksToGenerate; i++){
    const randowIndex = Math.floor(Math.random() * lengthOfPunctuationMarksArray);
    stringOfPunctuationMarks += punctuationMarks[randowIndex];
  }
  return stringOfPunctuationMarks;
}