const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  /* Check to see if rootNode exists */
  if (!rootNode) return;

  /* If rootNode has Left node, recursively call function */
  if (rootNode.left) {
    return findMinBST(rootNode.left);
  }
  /* Return value of rootNode after reaching end of tree */
  return rootNode.val;
}

function findMaxBST (rootNode) {
  /* Check to see if rootNode exists */
  if (!rootNode) return;

  /* If rootNode has Right node, recursively call function */
  if (rootNode.right) {
    return findMaxBST(rootNode.right);
  }
  /* Return value of rootNode after reaching end of tree */
  return rootNode.val;
}

function findMinBT (rootNode) {
  /* Check to see if rootNode exists */
  if (!rootNode) return;

  /* Create variable to hold min value */
  let minVal = Infinity;
  /* Create a Queue to enqueue rootNode and children nodes */
  const queue = [rootNode];

  /* While Queue is not empty, repeat */
  while (queue.length) {
    /* Dequeue a node and set it to a variable holding min value */
    let currNode = queue.shift();
    let currVal = currNode.val;

    /* If currVal is less than minVal, set minVal to equal currVal */
    if (currVal < minVal) minVal = currVal;

    /* Put all of the node's children in the back of the queue */
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }
  return minVal;
}

function findMaxBT (rootNode) {
  /* Check to see if rootNode exists */
  if (!rootNode) return;

  /* Create variable to hold max value */
  let maxVal = -Infinity;
  /* Create a Queue to enqueue rootNode and children nodes */
  const queue = [rootNode];

  /* While Queue is not empty, repeat */
  while (queue.length) {
    /* Dequeue a node and set it to a variable holding max value */
    let currNode = queue.shift();
    let currVal = currNode.val;

    /* If currVal is greater than maxVal, set maxVal to equal currVal */
    if (currVal > maxVal) maxVal = currVal;

    /* Put all of the node's children in the back of the queue */
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }
  return maxVal;

}

function getHeight (rootNode) {
  /* Check to see if rootNode exists */
  if (!rootNode) return -1;

  /* Calculate the height of the left and right sub trees recursively */
  const left = getHeight(rootNode.left);

  const right = getHeight(rootNode.right);

  /* Return Max height of left and right sub trees plus 1 for current node */
  return Math.max(left, right) + 1;
}

function balancedTree (rootNode) {
  /* Check to see if rootNode exists */
  if (!rootNode) return true;

 /* Recursively call getHeight on left nodes and right nodes */
  const left = getHeight(rootNode.left);
  const right = getHeight(rootNode.right);

/* Check to see if the difference in absolute value is greater than 1 between the left and right heights */
  if (Math.abs(left - right) > 1) return false;

/* If the difference in height is not greater than 1, recursively call balancedTree on each sub-tree */
  return balancedTree(rootNode.left) && balancedTree(rootNode.right);

}

function countNodes (rootNode) {
  /* Check to see if rootNode exists */
  if (!rootNode) return;

  /* Create a Queue to hold starting node */
  const queue = [rootNode];

  /* Create a variable to keep track of number of nodes */
  let count = 0;

  /* While Queue is not empty, repeat */
  while (queue.length) {
    /* Dequeue node, and create a variable to hold the value */
    let currNode = queue.shift();

    /* Increment count variable for each dequeued node */
    count++;

    /* Put all of the node's children in the back of the queue */
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }
  return count;
}

function getParentNode (rootNode, target) {
  /* Check to see if rootNode exists */
  if (!rootNode) return;

  /* Create a stack, and push the starting node to the stack */
  const stack = [];
  stack.push(rootNode);

  /* While the stack is not empty, repeat steps */
  while (stack.length) {
    let parentNode = stack.pop();
    if (parentNode.val === target) return null;
  }
}

function inOrderPredecessor (rootNode, target) {
  /* Check to see if rootNode exists */

}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
