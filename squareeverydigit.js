function squareDigits(num){
    arr = (""+num).split("");
    
    for(i=0; i<arr.length; i++){
      arr[i] = arr[i] * arr[i];
    }
    
    result = arr.join("");
    result = parseInt(result, 0);
    return result;
  }