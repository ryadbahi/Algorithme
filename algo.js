// "node algo.js" pour executer :)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a sentence ending with a period: ", (sentence) => {
  processSentence(sentence);
});

function processSentence(sentence) {
  let wordCount = 0;
  let vowelCount = 0;
  let letterCount = 0;
  const vowels = "aeiouyAEIOUY";

  // Variables supplémentaires pour compter les espaces, la longueur totale et la ponctuation
  let spaceCount = 0;
  let totalLength = sentence.length;
  let punctuationCount = 0;
  const punctuation = ".!?,;:"; // On aurait pu utilier "/[^a-zA-Z\s]/;" pour compter tout ce qui n'est pas une lettre ou un espace, donc ponctuation charateres spéciaux etc
  sentence = sentence.trim(); // .trim() supprime les espaces au début et à la fin de la phrase pour éviter qu'une entrée mal formatée ne fausse le comptage.

  // Error handling pour nous assurer que notre input se termine bien par un point
  if (!sentence.endsWith(".")) {
    console.log("❌ Error: The sentence must end with a period.");
    rl.close();
    return;
  }

  let lastCharWasSpace = true; //pour détecter le début d'un nouveau mot après un espace

  for (let char of sentence) {
    // On parcourt chaque caractère de la phrase pour les compter
    if (vowels.includes(char)) {
      // On verifie si le caractère est une voyelle
      vowelCount++; // On incrémente le compteur de voyelles
    }

    if (char === " ") {
      // On verifie si le caractère est un espace
      spaceCount++; // On incrémente le compteur d'espaces
      lastCharWasSpace = true; // On marque le dernier caractère comme un espace
    } else if (char.match(/[a-zA-Z]/)) {
      // On verifie si le caractère est une lettre
      letterCount++; // On incrémente le compteur de lettres
      if (lastCharWasSpace) {
        // On verifie si le dernier caractère était un espace
        wordCount++; // On incrémente le compteur de mots
        lastCharWasSpace = false; // si c'est le cas on le marque comme faux pour ne pas compter plusieurs mots à la suite
      }
    } else if (punctuation.includes(char)) {
      // On verifie si le caractère est une ponctuation
      punctuationCount++; // On incrémente le compteur de ponctuation
    }
  }

  console.log(
    `✅ Length: ${totalLength} (${letterCount} letters, ${spaceCount} spaces, ${punctuationCount} punctuation marks)`
  );
  console.log(`✅ Words: ${wordCount}`);
  console.log(`✅ Vowels: ${vowelCount}`);

  rl.close();
}
