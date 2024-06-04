"use strict";
// #11[medium]
/*
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/
//Solution

// function autoComplete(s,arr){
//     while(s.length>0 && arr.length> 0)
//         {
//             let possibleStrings=[];
//             for(let i=0; i<arr.length; i++){
// if(arr[i].startsWith(s)){
//     possibleStrings.push(arr[i]);
// }
//             }
//         }
//         return possibleStrings;

// }

// console.log(autoComplete("de",["dog", "deer", "deal"]));

class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    _searchNode(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (node.children[char]) {
          node = node.children[char];
        } else {
          return null;
        }
      }
      return node;
    }
  
    _collectAllWords(node, prefix, words) {
      if (node.isEndOfWord) {
        words.push(prefix);
      }
      for (let char in node.children) {
        this._collectAllWords(node.children[char], prefix + char, words);
      }
    }
  
    autocomplete(prefix) {
      let node = this._searchNode(prefix);
      if (!node) {
        return [];
      }
      let words = [];
      this._collectAllWords(node, prefix, words);
      return words;
    }
  }
  
  function buildTrie(words) {
    let trie = new Trie();
    for (let word of words) {
      trie.insert(word);
    }
    return trie;
  }
  
  // Sample set of possible query strings
  let words = ["dog", "deer", "deal"];
  
  // Build the Trie
  let trie = buildTrie(words);
  
  // Example query
  let queryString = "de";
  let results = trie.autocomplete(queryString);
  console.log(results);  // Output: ['deer', 'deal']
  