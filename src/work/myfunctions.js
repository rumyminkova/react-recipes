function getRandomIndexes(arr){
    let n;
    let indexArr = new Set();
    while (indexArr.length<3){
      n = Math.floor(Math.random() * arr.length);
      indexArr.add(n);   
      console.log(n);
    }
    return indexArr;
  }
  let randomArr = getRandomIndexes(RECIPES);
  console.log(randomArr.length);

  