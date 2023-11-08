// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val);
     if (!this.root) {
      this.root = newNode;
      return this;
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val, currentNode = this.root) {
    if (!currentNode) return false;
    if (val === currentNode.val) return true;
    if (val < currentNode.val) return this.search(val, currentNode.left);
    return this.search(val, currentNode.right);
  }


  preOrderTraversal(currentNode = this.root) {
    // Print the current node value
    if (!currentNode) return null;
    if (currentNode) console.log(currentNode.val);
    // Recursively call the left subtree
    this.preOrderTraversal(currentNode.left);
    // Recursively call the right subtree
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return null;
    //Recursively call the left subtree
    this.inOrderTraversal(currentNode.left);
    //Print the current node value
    console.log(currentNode.val);
    //Recursively call the right subtree
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return null;
    //Recursively call the left subtree
    this.postOrderTraversal(currentNode.left);
    //Recursively call the right subtree
    this.postOrderTraversal(currentNode.right);
    //Print the current node value
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    if (!this.root) return null;
    //Put the starting node in a queue
    const queue = [this.root];
    //While the queue is not empty, repeat steps 3-4
    while (queue.length) {
    //Dequeue a node and print it
    let currNode = queue.shift();
    console.log(currNode.val);
    //Put all of the node's children in the back of the queue
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    if (!this.root) return null;
    //Put the starting node on a STACK
    const stack = [this.root];
    //While the STACK is not empty, repeat steps 3-4
    while (stack.length) {
    //POP a node and print it
    let currNode = stack.pop();
    console.log(currNode.val);
    //Put all of the node's children on the TOP of the STACK
    if (currNode.left) stack.push(currNode.left);
    if (currNode.right) stack.push(currNode.right);
    }
}
}

module.exports = { BinarySearchTree, TreeNode };
