const ru: any = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  є: "e",
  ё: "e",
  ж: "j",
  з: "z",
  и: "i",
  ї: "yi",
  й: "i",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "c",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ы: "y",
  э: "e",
  ю: "u",
  я: "ya",
  ъ: "",
  ь: "",
};

function rusToLatin(str: string): string {
  return Array.from(str).reduce((acc, letter) => {
    const lowLetter = letter.toLowerCase();
    const en = ru[lowLetter] ?? letter;
    const enNormalized = lowLetter === letter ? en : en.toUpperCase();
    return acc + enNormalized;
  }, "");
}

export const generateLink = (str: string): string => {
  let url: string = str.replace(/[\s]+/gi, "");
  url = rusToLatin(url);

  url = url
    .replace(/[^0-9a-z_\-]+/gi, "-")
    .replace("---", "")
    .replace("--", "")
    .replace("-", "")
    .toLowerCase();

  return url;
};
