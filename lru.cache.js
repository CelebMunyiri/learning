"use strict";
//An LRU Cache is an al

function Cache(options) {
    this.size = options.size;
    this.storage = {};
}

Cache.prototype.get = function(key) {
    return this.storage[key];
};

Cache.prototype.set = function(key, value) {
    this.storage[key] = value;
};

Cache.prototype.remove = function(key) {
    delete this.storage[key];
};

Cache.prototype.has = function(key) {
    return key in this.storage;
};

Cache.prototype.clear = function() {
    this.storage = {};
};

Cache.prototype.keys = function() {
    return Object.keys(this.storage);
};

Cache.prototype.values = function() {
    return Object.values(this.storage);
};

module.exports = Cache;

//Two sum Array functions

function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement]!== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
}


//console.log(twoSum([1,2,3,4],7))

function AddTwoNums(ar,k){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
           // console.log(ar[i]+ar[j]);
            if(ar[i]+ar[j]===k){
                return [ar[i],ar[j]];
            }
        }
    }
}

console.log(AddTwoNums([10,15,3,7],17));

// function trialIdea(arr,t){
//     let n=arr.includes(n);
// for(let i=0;i<arr.length;i++){
//     if(t=arr[i]+n){
//         let v= arr[i];
//     }

// }
// return [n,v]
// }
//console.log(trialIdea([10,15,3,7],17))

