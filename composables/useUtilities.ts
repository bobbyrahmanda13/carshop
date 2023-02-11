export const useUtilities = () => {
  // function toTitleCase untuk membuat title huruf awalnya jadi huruf besar
  // function toTitleCase(str) {
  //   return str.replace(/\w\S*/g, function (txt: string) {
  //     return txt.charAt(0).toUpperCase() + txt.substr(1);
  //   });
  // }

  // function titleCaseWord untuk membuat title huruf awalnya jadi huruf besar
  function titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }
  return {
    titleCaseWord,
  };
};
