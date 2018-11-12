const HashMap = require('./hashMap');

const lor = new HashMap();
lor.set('Hobbit','Bilbo');
lor.set('Hobbit','Frodo');
lor.set('Wizard','Gandolf');
lor.set('Human','Aragon');
lor.set('Elf', 'Legolas');
lor.set('Maiar','The Necromancer');
lor.set('Maiar', 'Sauron');
// lor.remove('Hobbit');
// console.log(lor);
// increases capacity
lor.set('RingBearer', 'Gollum');
lor.set('LadyOfLight', 'Galadriel');
lor.set('HalfElven', 'Arwen');
lor.set('Ent', 'Treebeard');


// console.log(lor);
// console.log(lor.get('Maiar'));



function permutationPalindrome(string){
  // create key for each letter
  // value is number of times it occurs
  // check if key is there, if it is add to value
  // otherwise create key with value of 1
  // either all values are even or only one value is odd;
  const hashMap = new HashMap();
  for(let i=0; i<string.length; i++){
    try{
      let value = hashMap.get(string[i]);
      hashMap.set(string[i], value+1);
    }catch(err){
      hashMap.set(string[i], 1);
    }
  }
  let odd = 0;
  for(let i of hashMap._slots){
    if(i !== undefined){
      if(i.value % 2 === 1){
        odd++;
      }
      if(odd > 1){
        return false;
      }
    }
  }
  return true;
}

// console.log(permutationPalindrome('acecarr'));

function isAnagram(hash1, hash2){
  let slots1 = hash1._slots;
  let slots2 = hash2._slots;
  for(let i of slots1){
    if(i !== undefined){
      try{
        let letterNum = hash2.get(i.key)
        if(hash1.get(i.key) !== letterNum){
          return false;
        }
      }
      catch(err){
        return false;
      }
    }
  }
  for(let j of slots2){
    if(j !== undefined){
      try{
        let letterNum = hash1.get(j.key)
        if(hash2.get(j.key) !== letterNum){
          return false;
        }
      }
      catch(err){
        return false;
      }
    }
  }
  return true;
}
function anagramGrouping(array){
  // for each word, create hashMap that counts number of times each
  // letter appears
  // compare hash maps of each word
  // create new array of arrays that would keep track of anagrams
  let hashArray = new HashMap();
  let answer = [];
  for(let i=0; i<array.length; i++){
    const hashMap = new HashMap();
    for(let j=0; j<array[i].length; j++){
      try{
        let value = hashMap.get(array[i][j]);
        hashMap.set(array[i][j], value+1);
      }catch(err){
        hashMap.set(array[i][j], 1);
      }
    }
    hashArray.set(array[i], hashMap);
  }
  answer=[[array[0]]];
  for(let i=1; i<array.length; i++){
    let anagram = hashArray.get(array[i]);
    let j=0;
    while(j < answer.length){
      if(isAnagram(hashArray.get(array[i]), hashArray.get(answer[j][0]))){
        answer[j].push(array[i]);
        break;
      }else if (j === answer.length - 1){
        answer.push([array[i]]);
        break;
      }else{
        j++;
      }
    }
  }
  return answer;

}

console.log(anagramGrouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
