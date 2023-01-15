import { generateStringOfNumbers } from "./numbersGenerator";
import { generateStirngOfWords } from "./wordsGenerator";
import { generateStringOfPunctuationMarks } from "./punctuationGenerator";

export const generateStirng = (type, amount) => {
  switch(type) {
    case 'words':
      return generateStirngOfWords(amount);
    case 'numbers':
      return generateStringOfNumbers(amount);
    case 'punctuation':
      return generateStringOfPunctuationMarks(amount);
    case '':
  }
}