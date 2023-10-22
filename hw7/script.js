function removeElement(array, item, newEl) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        array[i] = newEl;
      }
    }
    return array;
  }

  const myArray = [1, 2, 3, 4, 5,];
  const itemToRemove = 3;
  const newItem = 10;
  
  const newArray = removeElement(myArray, itemToRemove, newItem);
  console.log(newArray);
  

  