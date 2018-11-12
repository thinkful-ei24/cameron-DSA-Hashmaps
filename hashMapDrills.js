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

console.log(permutationPalindrome('acecarr'));
