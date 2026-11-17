// Data Structures MCQs - 40 Questions
const dsaQuestions = [
  // Part 1: Linked Lists, Stacks, Queues and Hashing
  {
    id: 1,
    question: "What is a linked list?",
    options: [
      "A collection of elements stored in continuous memory locations",
      "A collection of nodes connected using pointers",
      "A collection of elements arranged in a tree",
      "A collection of sorted arrays"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which field of a singly linked list node stores the address of the next node?",
    options: ["Data", "Previous", "Next", "Head"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "In a singly linked list, the last node points to:",
    options: ["First node", "NULL", "Previous node", "Head node"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which linked list allows traversal in both forward and backward directions?",
    options: [
      "Singly linked list",
      "Circular linked list",
      "Doubly linked list",
      "Linear linked list"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "In a circular linked list, the last node points to:",
    options: ["NULL", "Previous node", "First node", "Middle node"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "What is the main advantage of a linked list over an array?",
    options: [
      "Random access",
      "Dynamic memory allocation",
      "Less memory usage in all cases",
      "Direct indexing"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which pointer is used to access the first node of a linked list?",
    options: ["Tail", "Head", "Previous", "Next"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which data structure is commonly used to implement a polynomial using linked lists?",
    options: ["Array only", "Linked list", "Stack only", "Queue only"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "In a linked-list representation of a polynomial, each node generally stores:",
    options: [
      "Coefficient and exponent",
      "Only coefficient",
      "Only exponent",
      "Address only"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Which operation requires updating the links between nodes in a linked list?",
    options: [
      "Insertion",
      "Deletion",
      "Both A and B",
      "Searching only"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Which principle does a stack follow?",
    options: ["FIFO", "LIFO", "FCFS", "Random order"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which operation inserts an element into a stack?",
    options: ["Pop", "Push", "Peek", "Delete"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Which operation removes an element from a stack?",
    options: ["Push", "Insert", "Pop", "Search"],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Which principle does a queue follow?",
    options: ["LIFO", "FIFO", "FILO", "Random order"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "In a queue, insertion takes place at the:",
    options: ["Front", "Middle", "Rear", "Top"],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "What is a hash function used for?",
    options: [
      "Sorting elements",
      "Mapping keys to table indices",
      "Deleting elements",
      "Traversing trees"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is a collision in hashing?",
    options: [
      "Two keys generating the same hash index",
      "Deleting a key",
      "Empty hash table",
      "Sorting hash values"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Which of the following is a collision resolution technique?",
    options: [
      "Inorder traversal",
      "Chaining",
      "Tree rotation",
      "Recursion"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Which technique resolves collisions by storing multiple elements in the same index using a linked list?",
    options: [
      "Linear probing",
      "Chaining",
      "Binary search",
      "Selection sorting"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which of the following is an open addressing technique?",
    options: [
      "Chaining",
      "Linear probing",
      "Linked list traversal",
      "Tree traversal"
    ],
    correctAnswer: 1
  },
  
  // Part 2: Trees and Tree Traversals
  {
    id: 21,
    question: "A tree is a:",
    options: [
      "Linear data structure",
      "Non-linear data structure",
      "Sequential data structure",
      "Static data structure"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "The topmost node of a tree is called:",
    options: ["Leaf", "Root", "Parent", "Child"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "A node that has no children is called:",
    options: ["Root node", "Internal node", "Leaf node", "Parent node"],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "The maximum number of children a node can have in a binary tree is:",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "Which traversal visits the root node first?",
    options: ["Inorder", "Postorder", "Preorder", "Level order"],
    correctAnswer: 2
  },
  {
    id: 26,
    question: "Which traversal follows Left – Root – Right?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Which traversal follows Left – Right – Root?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "Which data structure is commonly used for level-order traversal of a tree?",
    options: ["Stack", "Queue", "Array only", "Hash table"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "In a binary tree, the maximum number of nodes at level 2 (root at level 0) is:",
    options: ["2", "3", "4", "8"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Which of the following is an application of trees?",
    options: [
      "File system organization",
      "Hierarchical data representation",
      "Expression evaluation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  
  // Part 3: Binary Search Trees (BST) and AVL Trees
  {
    id: 31,
    question: "In a Binary Search Tree, the left subtree contains values:",
    options: [
      "Greater than the root",
      "Smaller than the root",
      "Equal to all root values",
      "Randomly arranged"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "In a BST, the right subtree contains values:",
    options: [
      "Smaller than the root",
      "Greater than the root",
      "Always equal to the root",
      "No values"
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "Which traversal of a BST produces values in sorted order (assuming distinct keys)?",
    options: ["Preorder", "Postorder", "Inorder", "Level order"],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "What is the average time complexity of searching in a balanced BST?",
    options: ["O(1)", "O(log n)", "O(n²)", "O(n log n)"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What is the worst-case search time complexity of an unbalanced BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "What is an AVL tree?",
    options: [
      "A linear data structure",
      "A self-balancing binary search tree",
      "A graph",
      "A complete array"
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "What is the balance factor of an AVL tree node?",
    options: [
      "Height of left subtree + height of right subtree",
      "Height of left subtree − height of right subtree",
      "Number of children",
      "Number of leaf nodes"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "What are the possible balance factors of a balanced AVL tree node?",
    options: ["-2, 0, 2", "-1, 0, +1", "1, 2, 3", "0, 2, 4"],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "Which rotation is used to correct an LL imbalance in an AVL tree?",
    options: [
      "Left rotation",
      "Right rotation",
      "Left-right rotation",
      "Right-left rotation"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Which rotation is used to correct an LR imbalance in an AVL tree?",
    options: [
      "Single left rotation",
      "Single right rotation",
      "Left-right rotation",
      "Right-left rotation"
    ],
    correctAnswer: 2
  }
];
