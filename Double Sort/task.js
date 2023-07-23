function dbSort(a){
  let arrNum = [];
  let arrStr = [];

  a.forEach(item => {
    if(typeof item === 'number'){
      arrNum = [...arrNum, item];
    } else {
      arrStr = [...arrStr, item];
    }
  })
  
  arrNum.sort((a,b) => a - b)
  arrStr.sort()
  
  return [...arrNum, ...arrStr];
}