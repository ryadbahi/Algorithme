# Algorithme

// Déclaration et initialisation des variables
length := 0;
word_count := 0;  // Initialisé à 0 pour éviter les erreurs
vowel_count := 0;
vowels := "aeiouyAEIOUY"; // Chaîne contenant toutes les voyelles

// Demande à l'utilisateur d'entrer une phrase se terminant par un point
REPEAT
    WRITE "Enter a sentence ending with a period: ";
    READ sentence;
UNTIL (Length(sentence) > 1) AND (sentence[Length(sentence)] = '.')  // Vérifie que l'entrée contient au moins un caractère avant le point

// Initialisation des variables de parcours
character := sentence[1];
i := 1;

// Vérification s'il y a au moins un mot avant de commencer l'analyse
IF character <> '.' THEN
    word_count := 1; // Si la phrase n'est pas vide avant le point, il y a au moins un mot
ENDIF

// Parcours de la phrase jusqu'au point final
WHILE character <> '.' DO
    length := length + 1; // Incrémente la longueur totale de la phrase

    // Vérification si le caractère est une voyelle
    FOR j FROM 1 TO Length(vowels) DO
        IF character = vowels[j] THEN
            vowel_count := vowel_count + 1; // Incrémente le compteur de voyelles
            EXIT; // On arrête la boucle une fois qu'on trouve une correspondance
        ENDIF
    ENDFOR

    // Détection d'un nouveau mot
    IF (character = ' ') AND (sentence[i+1] <> ' ' AND sentence[i+1] <> '.') THEN
        word_count := word_count + 1; // Incrémente le compteur de mots
    ENDIF

    // Passage au caractère suivant
    i := i + 1;
    character := sentence[i];
ENDWHILE;

// Affichage des résultats
WRITE "Length: ", length;
WRITE "Words: ", word_count;
WRITE "Vowels: ", vowel_count;


// ************* Voir le fichier js avec plus d'options ************* 
