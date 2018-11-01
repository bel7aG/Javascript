const regexTest = (regex, str) => {
  const result = regex.test(str) ? `${str}: matched ${regex.source}` : `${str}: Not matched ${regex.source}`;
  console.log(result);
}

let regex;

myString = `love ecmascript and react`;

regex = /^l/;  //Must start with l
regex = /react$/; //Must end with react
regex = /^.ove ecmas..... and react$/; //any caracters (a-zA-Z0-9*$_=&...)   TRUE

regex = /^love ecmascript and react$/; //Must be love ecmascript and react   TRUE

regex = /^love ecmascript and reac+$/; //not much because + 1 or more and it should be 1  FALSE
regex = /^love ecmascript and reac*$/; //not much because * 0 or more and it should be 1  FALSE
regex = /^love ecmascript and reac?$/; //not much because ? 0 or 1 and it should be 1      FALSE

regex = /^love ecmascript and reac+/; //much because + 1 or more and it should be 1 NOW TRUE because i remove the $
regex = /^love ecmascript and reac*/; //much because * 0 or more and it should be 1 NOW TRUE
regex = /^love ecmascript and reac?/; //much because ? 0 or 1 and it should be 1    NOW TRUE

regex = /^love ecmascript and reac[t]$/; //much
regex = /^love ecmascript and reac[t]/; //much

regex = /^love ecmascript and reac[^a]$/; // much
regex = /^love ecmascript and reac[^t]$/; // not much because it's react with a bigbigbig (t)

regexTest(regex, myString);
