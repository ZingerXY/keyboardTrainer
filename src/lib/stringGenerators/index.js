import { generateStringOfNumbers } from "./numbersGenerator";
import { generateStirngOfWords } from "./wordsGenerator";
import { generateStringOfPunctuationMarks } from "./punctuationGenerator";

export const generateStirng = (type, amount, language) => {
  switch(type) {
    case 'words':
      return generateStirngOfWords(amount, language);
    case 'numbers':
      return generateStringOfNumbers(amount);
    case 'punctuation':
      return generateStringOfPunctuationMarks(amount);
    case '':
  }
}