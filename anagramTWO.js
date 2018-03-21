const destination = document.getElementById('div');

var anagramSets = {}; //start with empty object

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
  };

  document.getElementById("findButton").onclick = function() {

// for (i = 0; i < Object.keys(getAnagrams().length); i++) {
//     let anagram = Object.keys(getAnagrams()[i]);


for (let alphaWord of Object.keys(getAnagrams())) { 
    if (anagramSets[alphaWord].length > 4) {
        const wordArray = anagramSets[alphaWord];
        const wordNode = document.createTextNode(wordArray);
        newDiv = document.createElement('div');
        newDiv.appendChild(wordNode);
        destination.appendChild(newDiv);
    }
}

function getAnagrams() {
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    const alphaWord = alphabetize(words[i]);

    if (!anagramSets[alphaWord]) {
        anagramSets[alphaWord] = []
    };
     anagramSets[alphaWord].push(word);
};
return anagramSets;
    }
  }




