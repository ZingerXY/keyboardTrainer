export const generateStringOfNumbers = (numberOfNumbersToGenerate) => {
  let stringOfNumbers = '';
  for(let i = 0; i < numberOfNumbersToGenerate; i++){
    const randowNumber = Math.floor(Math.random() * 10);
    stringOfNumbers += randowNumber;
  }
  return stringOfNumbers;
}