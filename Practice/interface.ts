interface KeyPair<K,V>{
    key : K;
    pair :V;
}
let obj:KeyPair<string,number>={
    key :"puppy",
    pair:101
}
let obj1:KeyPair<number,boolean>={
    key:101,
    pair:true
}
console.log(obj);
console.log(obj1);