function confirmEnding(str, target) {
    if (str.endsWith(target)){
        return true;
    }else{
        return false
    }
  }
  

alert (confirmEnding("Bastian", "n")) // => true
confirmEnding("Congratulation", "on") // => true
