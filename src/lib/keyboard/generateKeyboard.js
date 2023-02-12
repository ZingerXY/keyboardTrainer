


export const generateKeyboard = (language_keys) => {
  const LanguageKeysList = language_keys.keys.split('');
  console.log(language_keys);

  const alphabetLines = {
    firstLine: [language_keys.topLeftCharacter, ...'1234567890-='.split('')],
    secondLine: [...LanguageKeysList.slice(0, 12)],
    thirdLine: [...LanguageKeysList.slice(12, 23)],
    fourthLine: [...LanguageKeysList.slice(23, 33)],
  }

  return alphabetLines;
}