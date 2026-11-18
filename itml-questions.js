// Machine Learning MCQs - 50 Questions (IT Department)
// Unit III: Unsupervised Learning (1-17)
// Unit IV: Evolutionary Learning, Ensemble Algorithms & Dimensionality Reduction (18-34)
// Unit V: Reinforcement Learning (35-50)
// Correct answers are PROPERLY RANDOMIZED (not all option A)

const itmlQuestions = [
  // UNIT III – UNSUPERVISED LEARNING (1–17)
  {
    id: 1,
    question: "Unsupervised learning differs from supervised learning primarily because the training dataset:",
    options: [
      "Contains no target output labels",
      "Always uses linear regression equations",
      "Requires a reward signal at every time step",
      "Excludes all numerical input attributes"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 2,
    question: "In the standard K-Means clustering algorithm, each cluster center is updated at every iteration by computing:",
    options: [
      "The median value of all features",
      "The arithmetic mean of all data points assigned to that cluster",
      "The point with maximum Euclidean norm",
      "The variance of the nearest neighboring cluster"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 3,
    question: "Why is the standard K-Means algorithm highly sensitive to noisy data and outliers?",
    options: [
      "It automatically drops clusters with fewer than ten points",
      "It relies on Manhattan median distances",
      "Outliers distort the arithmetic mean used to compute cluster centroids",
      "It normalizes all vectors to zero length"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 4,
    question: "Which strategy is commonly used in K-Means to deal with noise and prevent empty or outlier-driven clusters?",
    options: [
      "Setting k equal to the total number of samples",
      "Replacing distance metrics with random guessing",
      "Eliminating input normalization",
      "Using trimmed means or removing points far from all centroids"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 5,
    question: "When implementing K-Means as a competitive neural network, why is input vector normalization important?",
    options: [
      "It converts unsupervised clustering into supervised backpropagation",
      "It ensures unit-length vectors so dot-product activation accurately reflects Euclidean proximity",
      "It eliminates the need for weight vectors",
      "It forces all neurons to fire simultaneously"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 6,
    question: "In a K-Means competitive neural network, how is the winning neuron selected for an input vector x?",
    options: [
      "The neuron with the smallest weight sum wins",
      "All neurons with negative outputs win",
      "The neuron with the highest activation (minimum Euclidean distance to x) wins",
      "Neurons are selected in strict sequential order"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 7,
    question: "Under the standard competitive learning weight update rule, when neuron j wins for input x, its weight vector wj is updated as:",
    options: [
      "Δwj = η (x − wj)",
      "Δwj = η (x + wj)",
      "Δwj = −η (x − wj)",
      "Δwj = 0 for all winning nodes"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 8,
    question: "What problem can occur in basic competitive learning if a neuron's initial weight vector is positioned far from all input data points?",
    options: [
      "It absorbs every cluster centroid into one node",
      "Its learning rate increases infinitely",
      "It converts into a supervised perceptron",
      "It becomes a 'dead unit' that never wins and never updates its weights"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 9,
    question: "How does a better weight update rule (such as leaky learning or conscience mechanism) resolve dead units in competitive learning?",
    options: [
      "By freezing the learning rate at zero from epoch 1",
      "By updating losing neurons slightly toward the input or penalizing frequent winners",
      "By deleting all hidden layers",
      "By sorting input vectors alphabetically"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 10,
    question: "Vector Quantisation (VQ) uses competitive learning to compress continuous input spaces into a discrete set of prototype vectors known as a:",
    options: [
      "Dendrogram",
      "Confusion Matrix",
      "Codebook",
      "Q-Table"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 11,
    question: "In the Self-Organising Feature Map (SOM) algorithm, the neuron whose weight vector is closest to the input vector is called the:",
    options: [
      "Support Vector",
      "Root Chromosome",
      "Greedy Policy Node",
      "Best Matching Unit (BMU)"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 12,
    question: "What distinguishes the Self-Organising Feature Map (SOM) from standard K-Means competitive learning?",
    options: [
      "SOM updates both the winning neuron and its topological neighbors on a lattice",
      "SOM uses labeled class targets during training",
      "SOM never decays its learning rate",
      "SOM operates only on one-dimensional binary strings"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 13,
    question: "In SOM neighbourhood connections, the neighborhood function (e.g., Gaussian kernel) typically shrinks over training iterations so that:",
    options: [
      "Neurons lose all spatial relationships at convergence",
      "Global topological ordering occurs first, followed by fine-grained local tuning",
      "The network expands to infinite dimensions",
      "Outliers become separate output layers"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 14,
    question: "Self-organisation in a Kohonen SOM produces a low-dimensional feature map that preserves what property of the high-dimensional input space?",
    options: [
      "Exact cryptographic hashes of input tuples",
      "Exact temporal timestamps of training samples",
      "Topological neighborhood relationships (similar inputs map to nearby nodes)",
      "Class conditional independence"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 15,
    question: "Why do boundary conditions (edge effects) arise in standard rectangular 2D SOM grids?",
    options: [
      "Edge neurons have infinite learning rates",
      "Corner neurons cannot compute Euclidean distance",
      "Boundary nodes are disconnected from the input layer",
      "Neurons on edges and corners have fewer neighbors than interior neurons"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 16,
    question: "Which topology eliminates boundary effects in a 2D Self-Organising Map by wrapping opposite edges together?",
    options: [
      "Toroidal (torus) topology",
      "Linear open chain",
      "Binary decision tree",
      "Disconnected star graph"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 17,
    question: "Which of the following is a classic practical application of using the Self-Organising Feature Map (SOM)?",
    options: [
      "Computing exact analytical derivatives of deep neural nets",
      "Visualizing and clustering high-dimensional data (such as document collections or acoustic speech patterns) on a 2D map",
      "Solving linear programming simplex tables",
      "Encrypting database primary keys"
    ],
    correctAnswer: 1  // B
  },

  // UNIT IV – EVOLUTIONARY LEARNING, ENSEMBLE ALGORITHMS & DIMENSIONALITY REDUCTION (18–34)
  {
    id: 18,
    question: "Evolutionary learning algorithms search for optimal solutions by mimicking biological evolution through a population of candidate solutions evaluated by a:",
    options: [
      "Gini Impurity Index",
      "Discount Factor γ",
      "Fitness Function",
      "Mahalanobis Metric"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 19,
    question: "In a Genetic Algorithm (GA), candidate solutions are typically encoded as fixed-length strings (such as binary bitstrings) called:",
    options: [
      "Eigenvectors",
      "Codebook Vectors",
      "Weak Learners",
      "Chromosomes"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 20,
    question: "Which genetic operator combines genetic material from two parent chromosomes to produce new offspring?",
    options: [
      "Crossover (Recombination)",
      "Mutation",
      "Roulette Wheel Selection",
      "Elitism"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 21,
    question: "What is the primary role of the Mutation operator in a Genetic Algorithm?",
    options: [
      "Sort chromosomes strictly by descending fitness",
      "Introduce random genetic diversity to prevent premature convergence to local optima",
      "Eliminate the top-performing individuals",
      "Reduce feature dimensions via covariance matrices"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 22,
    question: "How does Genetic Programming (GP) differ from standard Genetic Algorithms (GA)?",
    options: [
      "GP does not use selection or fitness evaluation",
      "GP requires gradient descent on every node",
      "GP evolves variable-sized executable computer programs or parse trees rather than fixed-length strings",
      "GP only evolves constant scalar numbers"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 23,
    question: "Ensemble learning improves predictive performance primarily by:",
    options: [
      "Training a single deep tree without pruning",
      "Removing all validation data",
      "Using only one feature per dataset",
      "Combining predictions from multiple diverse models to reduce variance or bias"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 24,
    question: "Bagging (Bootstrap Aggregating) generates diverse training subsets for individual base learners by:",
    options: [
      "Sampling uniformly with replacement from the original dataset",
      "Partitioning the dataset into disjoint sequential time windows",
      "Selecting only misclassified instances from the previous model",
      "Projecting data onto top principal components"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 25,
    question: "Which statement accurately describes how Boosting (such as AdaBoost) trains its ensemble of weak learners?",
    options: [
      "Learners are trained independently in parallel on unweighted samples",
      "Learners are trained sequentially, increasing weights on previously misclassified instances",
      "Every learner receives identical sample weights throughout training",
      "Misclassified instances are permanently deleted after round one"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 26,
    question: "Compared to a single unpruned decision tree, Bagging primarily reduces which component of generalization error?",
    options: [
      "Irreducible Bayes noise",
      "Feature dimensionality",
      "Variance",
      "Bellman backup error"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 27,
    question: "What is the main goal of Dimensionality Reduction techniques such as PCA and LDA?",
    options: [
      "Increase the number of redundant features to prevent overfitting",
      "Convert continuous rewards into discrete actions",
      "Evolve parse trees using crossover",
      "Transform high-dimensional data into a lower-dimensional space while retaining maximum relevant information"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 28,
    question: "Principal Component Analysis (PCA) is an unsupervised dimensionality reduction method that finds orthogonal axes maximizing:",
    options: [
      "The variance of the projected data",
      "The ratio of between-class to within-class scatter",
      "The temporal difference reward",
      "The number of support vectors"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 29,
    question: "In Principal Component Analysis (PCA), the principal components correspond to the eigenvectors of which matrix?",
    options: [
      "The confusion matrix",
      "The data covariance (or correlation) matrix",
      "The state-action transition probability matrix",
      "The distance adjacency matrix"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 30,
    question: "How do we select the top k principal components in PCA to preserve most of the dataset's information?",
    options: [
      "Select the k eigenvectors with eigenvalues closest to zero",
      "Select k random columns from the raw dataset",
      "Select the k eigenvectors associated with the k largest eigenvalues",
      "Select eigenvectors with negative variance"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 31,
    question: "Unlike PCA, Linear Discriminant Analysis (LDA) is a supervised dimensionality reduction technique because it explicitly uses:",
    options: [
      "Unlabeled bootstrap samples",
      "Fitness scores of binary chromosomes",
      "State value functions",
      "Class labels to maximize class separability"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 32,
    question: "Linear Discriminant Analysis (LDA) finds projection directions that simultaneously:",
    options: [
      "Maximize between-class scatter and minimize within-class scatter",
      "Minimize between-class scatter and maximize within-class scatter",
      "Maximize total variance while ignoring class boundaries",
      "Minimize Euclidean distance to all cluster centroids"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 33,
    question: "For a classification problem with C distinct classes, what is the maximum number of nonzero linear discriminants that LDA can extract?",
    options: [
      "C + 1",
      "C − 1",
      "2C",
      "Unlimited regardless of feature count"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 34,
    question: "Which preprocessing step is mandatory before applying PCA when input features are measured on vastly different scales (e.g., age in years vs. income in rupees)?",
    options: [
      "Applying genetic mutation",
      "Assigning one-hot class targets",
      "Feature standardization (zero mean and unit variance)",
      "Sorting rows by target label"
    ],
    correctAnswer: 2  // C
  },

  // UNIT V – REINFORCEMENT LEARNING (35–50)
  {
    id: 35,
    question: "In Reinforcement Learning (RL), an agent learns an optimal behavior policy by interacting with an environment and receiving scalar feedback called:",
    options: [
      "Class Labels",
      "Eigenvectors",
      "Bootstrap Weights",
      "Rewards"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 36,
    question: "What is the defining characteristic of Passive Reinforcement Learning?",
    options: [
      "The agent's policy π is fixed and it only evaluates how good that policy is by learning state utilities",
      "The agent continuously changes its policy to explore new actions",
      "The environment provides zero rewards",
      "The agent uses supervised backpropagation on labeled images"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 37,
    question: "How does Direct Utility Estimation evaluate the utility Uπ(s) of a state under a fixed policy π?",
    options: [
      "By solving linear Bellman equations using known transition probabilities",
      "By averaging the observed total reward-to-go from state s across multiple sample trials",
      "By maximizing over all possible actions in state s",
      "By applying Principal Component Analysis to state vectors"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 38,
    question: "What is the main drawback of Direct Utility Estimation in passive reinforcement learning?",
    options: [
      "It requires knowing the exact transition model T(s, a, s') in advance",
      "It only works for deterministic one-step episodes",
      "It ignores the Bellman relationship between adjacent states, leading to slow convergence",
      "It cannot handle discounted rewards"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 39,
    question: "Adaptive Dynamic Programming (ADP) evaluates a fixed policy in passive RL by:",
    options: [
      "Averaging raw episode returns without building a transition model",
      "Performing genetic crossover on state utilities",
      "Using k-Means clustering on actions",
      "Learning the transition model T(s, π(s), s') and reward function R(s) from experience and solving the Bellman equations"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 40,
    question: "How does Temporal Difference (TD) learning update state utilities without requiring a model of environment transitions?",
    options: [
      "By bootstrapping from the observed transition (s, r, s') using the TD error: r + γ U(s') − U(s)",
      "By waiting until the end of the episode to compute total Monte Carlo return",
      "By inverting the full transition probability matrix",
      "By computing exact eigenvalues of the reward matrix"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 41,
    question: "In Temporal Difference learning, the standard passive utility update equation upon transitioning from state s to s' with reward r is:",
    options: [
      "U(s) ← U(s) − α [r + γ U(s')]",
      "U(s) ← U(s) + α [r + γ U(s') − U(s)]",
      "U(s) ← r × U(s')",
      "U(s) ← maxa U(s')"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 42,
    question: "Active Reinforcement Learning differs from passive reinforcement learning because the active agent must:",
    options: [
      "Follow a pre-programmed fixed policy without ever deviating",
      "Ignore all immediate rewards",
      "Choose its own actions and learn an optimal policy while balancing exploration and exploitation",
      "Rely solely on static labeled training sets"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 43,
    question: "In Active Reinforcement Learning, what is the exploration–exploitation trade-off?",
    options: [
      "Choosing between supervised and unsupervised datasets",
      "Choosing between PCA and LDA",
      "Choosing between mutation and crossover rates",
      "Choosing between trying untried actions to discover higher rewards vs. choosing the currently known best action"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 44,
    question: "What does the acronym SARSA stand for in model-free active reinforcement learning?",
    options: [
      "State – Action – Reward – State – Action",
      "Stochastic – Adaptive – Reward – Selection – Algorithm",
      "Sequential – Agent – Reinforcement – State – Analysis",
      "Supervised – Action – Regression – State – Approximation"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 45,
    question: "SARSA is classified as an on-policy TD control algorithm because its Q-value update uses:",
    options: [
      "The maximum Q-value over all actions regardless of policy",
      "The actual next action a' chosen by the current policy in state s'",
      "Only the initial state s0",
      "Known transition probabilities T(s, a, s')"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 46,
    question: "Which equation represents the standard SARSA action-value update rule?",
    options: [
      "Q(s, a) ← Q(s, a) + α [r + γ maxa' Q(s', a') − Q(s, a)]",
      "Q(s, a) ← r + γ Q(s, a)",
      "Q(s, a) ← Q(s, a) + α [r + γ Q(s', a') − Q(s, a)]",
      "Q(s, a) ← Q(s', a') − Q(s, a)"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 47,
    question: "Q-Learning is classified as an off-policy TD control algorithm because it updates Q(s, a) using:",
    options: [
      "The exploratory action a' actually executed by an ε-greedy policy",
      "Fixed state utilities from passive direct estimation",
      "Exact dynamic programming sweeps over known models",
      "maxa' Q(s', a'), assuming greedy optimal behavior in the next state regardless of the exploratory action taken"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 48,
    question: "Which equation represents the standard Q-Learning update rule?",
    options: [
      "Q(s, a) ← Q(s, a) + α [r + γ maxa' Q(s', a') − Q(s, a)]",
      "Q(s, a) ← Q(s, a) + α [r + γ Q(s', a') − Q(s, a)]",
      "Q(s, a) ← α [r − Q(s, a)]",
      "Q(s, a) ← mina' Q(s', a')"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 49,
    question: "In the classic Cliff-Walking problem with an ε-greedy exploration policy, how do SARSA and Q-Learning behave differently?",
    options: [
      "Q-Learning avoids the cliff completely while SARSA falls off every episode",
      "SARSA learns a safer path away from the cliff accounting for exploratory slips, whereas Q-Learning learns the optimal path right along the cliff edge",
      "Both algorithms learn the exact same policy for all ε > 0",
      "SARSA cannot converge in grid-world environments"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 50,
    question: "What is the fundamental algorithmic difference between SARSA and Q-Learning?",
    options: [
      "SARSA requires a transition model T(s, a, s'), whereas Q-Learning is model-free",
      "SARSA is passive RL, whereas Q-Learning is supervised learning",
      "SARSA is on-policy (updates using Q(s', a') from the active policy), whereas Q-Learning is off-policy (updates using maxa' Q(s', a'))",
      "SARSA uses discount factor γ = 0, whereas Q-Learning uses γ = 1"
    ],
    correctAnswer: 2  // C
  }
];

console.log('✅ IT ML Questions Loaded (FIXED with randomized answers):', itmlQuestions.length);
