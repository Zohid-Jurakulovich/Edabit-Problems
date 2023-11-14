function mean(number) {
  
  let splitedNum = number.toString()
  let numb = []
  
  let total = 0
  let count = 0
  
  for (let index = 0; index < splitedNum.length; index++) {
    numb.push(splitedNum[index] * 1)
  }
  numb.forEach(function(item, index){
    total += item;
    count++;
    
  });
  return total/count
}

