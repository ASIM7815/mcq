// AI (Artificial Intelligence) MCQs - 30 Questions (3rd Year AIDS)
// Unit IV: Machine Learning Systems, Neural Networks & Reinforcement Learning
// Questions 31-60

const aiQuestions = [
  // Section 3: Artificial Neural Networks (Continued)
  {
    id: 31,
    question: "What is the function of weights in an Artificial Neural Network?",
    options: [
      "To store images",
      "To determine the importance of input values",
      "To increase screen brightness",
      "To store passwords"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "What is Bias in an Artificial Neural Network?",
    options: [
      "An additional parameter that shifts the neuron's output",
      "A type of computer virus",
      "A method of deleting data",
      "A storage device"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "Which activation function produces an output between 0 and 1?",
    options: [
      "ReLU",
      "Sigmoid",
      "Linear",
      "Step Function"
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "What is the full form of ANN?",
    options: [
      "Automatic Network Node",
      "Artificial Neural Network",
      "Advanced Numeric Network",
      "Automated Natural Network"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What is the primary purpose of the Input Layer in a neural network?",
    options: [
      "To provide input data to the network",
      "To generate final predictions",
      "To calculate errors only",
      "To store output values"
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: "What is the main function of the Output Layer?",
    options: [
      "To receive raw input data",
      "To produce the final prediction or result",
      "To delete training data",
      "To initialize the computer"
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "What is a Hidden Layer in an Artificial Neural Network?",
    options: [
      "A layer that processes information between input and output layers",
      "A layer that stores files",
      "A layer that displays images",
      "A layer that connects external devices"
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "What is Deep Learning?",
    options: [
      "Learning through manual calculations",
      "A type of machine learning that uses neural networks with multiple hidden layers",
      "Learning without computers",
      "A database management technique"
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "What is Backpropagation in neural networks?",
    options: [
      "A method of deleting network layers",
      "An algorithm used to calculate errors and update weights by propagating error gradients backward",
      "A method of storing input data",
      "A technique for compressing files"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "What is the purpose of a Loss Function in a neural network?",
    options: [
      "To measure the difference between predicted and actual outputs",
      "To increase the number of neurons",
      "To store training images",
      "To reduce screen resolution"
    ],
    correctAnswer: 0
  },
  
  // Section 4: Neural Network Training and Architectures
  {
    id: 41,
    question: "What is an Epoch in neural network training?",
    options: [
      "One complete pass through the entire training dataset",
      "One single input value",
      "A type of activation function",
      "A method of deleting neurons"
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "What is the purpose of the Learning Rate in neural network training?",
    options: [
      "To control how much the model's weights are updated during training",
      "To control computer internet speed",
      "To determine the number of input files",
      "To increase storage capacity"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "Which neural network architecture is commonly used for image recognition?",
    options: [
      "CNN (Convolutional Neural Network)",
      "SQL Network",
      "FTP Network",
      "Decision Table"
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "Which neural network is commonly used for sequential data such as text and time series?",
    options: [
      "CNN",
      "RNN (Recurrent Neural Network)",
      "Decision Tree",
      "K-Means"
    ],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "What is the main purpose of the Dropout technique in neural networks?",
    options: [
      "To prevent overfitting by randomly disabling some neurons during training",
      "To delete the entire neural network",
      "To increase the dataset size",
      "To stop the computer from running"
    ],
    correctAnswer: 0
  },
  
  // Section 5: Reinforcement Learning
  {
    id: 46,
    question: "What is Reinforcement Learning?",
    options: [
      "Learning using only labeled datasets",
      "Learning by interacting with an environment and receiving rewards or penalties",
      "Learning by deleting unnecessary information",
      "Learning through fixed programming instructions only"
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "What is an Agent in Reinforcement Learning?",
    options: [
      "The learner or decision-maker that interacts with the environment",
      "The computer's hard disk",
      "A database table",
      "A programming language"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "What is an Environment in Reinforcement Learning?",
    options: [
      "The external system or world with which the agent interacts",
      "A storage device",
      "A type of neural network layer",
      "A computer monitor"
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "What is a Reward in Reinforcement Learning?",
    options: [
      "A feedback signal that indicates how good an action is",
      "A training dataset",
      "A computer memory unit",
      "A programming error"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "What is an Action in Reinforcement Learning?",
    options: [
      "A decision or move taken by the agent in the environment",
      "A database record",
      "A type of activation function",
      "A storage operation"
    ],
    correctAnswer: 0
  },
  {
    id: 51,
    question: "What is a State in Reinforcement Learning?",
    options: [
      "The current situation or condition of the environment",
      "The final reward only",
      "The name of the algorithm",
      "The computer's operating system"
    ],
    correctAnswer: 0
  },
  {
    id: 52,
    question: "Which of the following is a real-world application of Reinforcement Learning?",
    options: [
      "Training a robot to walk",
      "Alphabetically sorting a text file",
      "Changing the font size",
      "Opening a folder"
    ],
    correctAnswer: 0
  },
  {
    id: 53,
    question: "What is the main objective of an agent in Reinforcement Learning?",
    options: [
      "To maximize the total cumulative reward",
      "To minimize the computer's storage",
      "To delete all previous actions",
      "To increase the number of input files"
    ],
    correctAnswer: 0
  },
  {
    id: 54,
    question: "What is Q-Learning?",
    options: [
      "A model-free Reinforcement Learning algorithm that learns the value of actions in different states",
      "A supervised classification algorithm",
      "An image compression technique",
      "A database query language"
    ],
    correctAnswer: 0
  },
  {
    id: 55,
    question: "What does the Q-value represent in Q-Learning?",
    options: [
      "The expected future reward for taking an action in a particular state",
      "The size of the training dataset",
      "The number of neurons in a network",
      "The speed of a processor"
    ],
    correctAnswer: 0
  },
  {
    id: 56,
    question: "What is the Exploration strategy in Reinforcement Learning?",
    options: [
      "Trying new actions to discover potentially better rewards",
      "Always selecting the same action",
      "Deleting previous rewards",
      "Stopping the learning process"
    ],
    correctAnswer: 0
  },
  {
    id: 57,
    question: "What is Exploitation in Reinforcement Learning?",
    options: [
      "Selecting the best-known action based on previous experience",
      "Randomly deleting actions",
      "Ignoring all rewards",
      "Restarting the environment"
    ],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "Which algorithm is commonly associated with Reinforcement Learning?",
    options: [
      "Q-Learning",
      "Linear Regression",
      "K-Means",
      "ID3 Decision Tree"
    ],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "What is a Policy in Reinforcement Learning?",
    options: [
      "A strategy that defines which action an agent should take in a given state",
      "A method of storing data",
      "A computer security rule",
      "A type of database"
    ],
    correctAnswer: 0
  },
  {
    id: 60,
    question: "Which of the following best describes the difference between Supervised Learning and Reinforcement Learning?",
    options: [
      "Supervised Learning uses labeled examples, while Reinforcement Learning learns through rewards and interactions",
      "Both use only unlabeled data",
      "Reinforcement Learning requires no interaction",
      "Supervised Learning uses only rewards"
    ],
    correctAnswer: 0
  }
];
