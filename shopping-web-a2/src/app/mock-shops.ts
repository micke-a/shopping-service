import {Shop} from './shop';

export const SHOPS: Shop[] = [];

for(let i=0; i < 5; i++){
  let s:Shop = {id:i, name:'Shop '+i, location :{id:i, longitude:i, latitude:i}, address:{street: i+" Buckwells Field", postCode: "SG143FF"}};
  SHOPS.push(s);
}
