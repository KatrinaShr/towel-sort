module.exports = function towelSort(matrix) {
  let result = [];
  if (!matrix) { return [] }
  
  matrix.forEach((element, index) => {
    if (index % 2 === 0) {
      result.push(element.sort((a, b) => a - b));
    }
    else {
      result.push(element.sort((a, b) => b - a));
    }    
  });
  
  return result.flat();
}