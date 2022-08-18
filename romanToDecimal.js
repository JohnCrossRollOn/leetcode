function romToDec(rom){
  var romD = {
  'I':1,
  'V':5,
  'X':10,
  'L':50,
  'C':100,
  'D':500,
  'M':1000
}
 return[...rom].map((v,i)=>romD[v]).reduce((t,v,i,a)=>{return v<a[i+1]?t-v:t+v},0);
}

romToDec('DCLXXIV') //this returns 674
