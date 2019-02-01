const makeUnsortedArray = (obj) => {
  const result = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result.push({
        key: prop,
        value: obj[prop]
      });
    }
  }
  return result;
}

const sortByProperties = (initialObj, importantProps) => {
  const unsortedArray = makeUnsortedArray(initialObj);
  const importantArray = unsortedArray.filter(obj => importantProps.includes(obj.key));
  const unimportantArray = unsortedArray.filter(obj => !importantProps.includes(obj.key));
  const importantArraySorted = importantArray.sort((a, b) =>
    importantProps.indexOf(a.key) - importantProps.indexOf(b.key));
  const unimportantArraySorted = unimportantArray.sort((a, b) =>
    a.key < b.key ? -1 :
    a.key == b.key ? 0 : 1);
  return [...importantArraySorted, ...unimportantArraySorted];
}

export default sortByProperties;
