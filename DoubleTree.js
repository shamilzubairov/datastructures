class Node {
    constructor() {
      this.iData;
      this.dData;
      this.leftChild = null;
      this.rightChild = null;
      this.isDeleted = false;
    }
    display() {
      console.log(`${this.iData} - ${this.dData}`);
    }
  }
  
  class Tree {
    constructor() {
      this.root;
    }
    find(key) {
      let current = this.root;
      while(current.iData != key) {
        if(key < current.iData) {
          current = current.leftChild;
        } else {
          current = current.rightChild;
        }
        if(current == null) return null;
      }
      return current;
    }
    insert(id, dd) {
      let newNode = new Node();
      newNode.iData = id;
      newNode.dData = dd;
      if(this.root == null) this.root = newNode;
      else {
        let current = this.root;
        let parent;
        while(1) {
          parent = current;
          if(id < current.iData) {
            current = current.leftChild;
            if(current == null) {
              parent.leftChild = newNode;
              newNode.parent = parent;
              return;
            }
          } else if(id > current.iData) {
            current = current.rightChild;
            if(current == null) {
              parent.rightChild = newNode;
              newNode.parent = parent;
              return;
            }
          } else if(id == current.iData) {
            current.iData = id;
            current.dData = dd;
            return;
          }
        }
      }
    }
    delete(key) {
      // debugger;
      let delNode = this.root;
      let parent = this.root;
      while(delNode.iData != key) {
        parent = delNode;
        if(key < delNode.iData) {
          delNode = delNode.leftChild;
        } else {
          delNode = delNode.rightChild;
        }
        if(delNode == null) return false;
      }
      // Если узел не имеет потомков, он просто удаляется.
      if(delNode.leftChild == null && delNode.rightChild == null) {
        if(delNode == this.root) this.root = null;
        else if(parent.leftChild == delNode) {
          parent.leftChild = null;
        } else {
          parent.rightChild = null;
        }
      }
      // Если нет правого потомка, узел заменяется левым поддеревом
      else if(delNode.rightChild == null) {
        if(delNode == this.root) this.root = delNode.leftChild;
        else if(parent.leftChild == delNode) {
          parent.leftChild = delNode.leftChild;
        } else {
          parent.rightChild = delNode.leftChild;
        }
      }
      // Если нет левого потомка, узел заменяется правым поддеревом
      else if(delNode.leftChild == null) {
        if(delNode == this.root) this.root = delNode.rightChild;
        else if(parent.leftChild == delNode) {
          parent.leftChild = delNode.rightChild;
        } else {
          parent.rightChild = delNode.rightChild;
        }
      }
      // Два потомка, узел заменяется преемником
      else {
        let successor = this.getSuccessor(delNode);
        if(delNode == this.root) this.root = successor;
        else if(parent.leftChild == delNode) {
          parent.leftChild = successor;
        } else {
          parent.rightChild = successor;
        }
        successor.leftChild = delNode.leftChild;
      }
      return true;
    }
    getSuccessor(delNode) {
      let successorParent = delNode;
      let successor = delNode;
      let current = delNode.rightChild;
      while(current != null) {
        successorParent = successor;
        successor = current;
        current = current.leftChild;
      }
      if(successor != delNode.rightChild) {
        successorParent.leftChild = successor.rightChild;
        successor.rightChild = delNode.rightChild;
      }
      return successor;
    }
    preOrder(localRoot) {
      if(localRoot != null) {
        console.log(localRoot.iData);
        this.preOrder(localRoot.leftChild);
        this.preOrder(localRoot.rightChild);
      }
    }
    inOrder(localRoot) {
      if(localRoot != null) {
        this.preOrder(localRoot.leftChild);
        console.log(localRoot.iData);
        this.preOrder(localRoot.rightChild);
      }
    }
    postOrder(localRoot) {
      if(localRoot != null) {
        this.preOrder(localRoot.leftChild);
        this.preOrder(localRoot.rightChild);
        console.log(localRoot.iData);
      }
    }
    displayTree() {
      // debugger;
      let Printer = ''
      let globalStack = [];
      globalStack.push(this.root);
      let nBlanks = 64;
      let isRowEmpty = false;
  
      console.log(
      "......................................................");
      while(isRowEmpty == false) {
        let localStack = [];
        isRowEmpty = true;
  
        for(let j = 0; j < nBlanks; j++) {
          Printer += ' ';
        }
        // debugger;
  
        while(globalStack.length > 0) {
          let temp = globalStack.pop();
          if(temp != null) {
            Printer += temp.iData;
            localStack.push(temp.leftChild);
            localStack.push(temp.rightChild);
            if(temp.leftChild != null || temp.rightChild != null) isRowEmpty = false;
          } else {
            Printer += '--';
            localStack.push(null);
            localStack.push(null);
          }
  
          for(let j = 0; j < nBlanks * 2 - 2; j++) {
            Printer += ' ';
          }
          // debugger;
        }
        Printer += '\n\n';
        nBlanks = ~~(nBlanks / 2);
        while(localStack.length > 0) globalStack.push(localStack.pop());
      }
      console.log(Printer);
      console.log(
      "......................................................");
    }
  }
  
  var tree = new Tree();
  tree.insert(30);
  tree.insert(1);
  tree.insert(16);
  tree.insert(5);
  tree.insert(9);
  tree.insert(22);
  tree.insert(8);
  tree.insert(47);
  tree.insert(42);
  tree.insert(50);
  tree.insert(0);
  tree.insert(3);
  