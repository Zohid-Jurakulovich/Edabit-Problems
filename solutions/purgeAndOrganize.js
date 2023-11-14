function uniqueSort(arr) {
  
  const uniqueArray = arr.reduce((accumulator, currentValue) => {
    
    if (!accumulator.includes(currentValue)) {  
      accumulator.push(currentValue);
    }
    return accumulator
  }, []);
  
  const sortedArr = uniqueArray.sort((a,b) => a-b)
  return sortedArr
}

uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10])

