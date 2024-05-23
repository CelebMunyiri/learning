"use strict";
class Node {
    constructor(data){
        this.data=data;
        this.next=null; //initializing next pointer to null
    }
}

class LinkedList{
    constructor(){
        this.head=null;//initializing an empty list
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
        } else {
            let current=this.head;

            while(current.next){
                current=current.next;
            }
            current.next=newNode;
        }
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

//Usage
const myList=new LinkedList();
myList.append(10);
myList.append(20);
myList.append(30);

myList.print();


