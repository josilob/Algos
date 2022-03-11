function designerPdfViewer(h, word) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const letterHeights = {}
  alphabet.forEach((letter,idx)=>letterHeights[letter]=h[idx])

  let tallestLetter = 0
  word = word.split('').map(char=>letterHeights[char])

  return Math.max(...word)*word.length
}