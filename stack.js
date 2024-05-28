"use strict";

class Stack{
    constructor(){
        this.items=[];
    }

    push(number){
        this.items.push(number);
    }

    pop(){
        if(this.items.length===0){
            return "The Stack is empty";
        }
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length===0;
    }

    size(){
        return this.items.length;
    }

}