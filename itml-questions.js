// Machine Learning MCQs - 50 Questions (IT Department)
// Unit III: Unsupervised Learning (1-17)
// Unit IV: Evolutionary Learning, Ensemble Algorithms & Dimensionality Reduction (18-34)
// Unit V: Reinforcement Learning (35-50)

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
    correctAnswer: 0
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
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Why is the standard K-Means algorithm highly sensitive to noisy data and outliers?",
    options: [
      "Outliers distort the arithmetic mean used to compute cluster centroids",
      "It automatically drops clusters with fewer than ten points",
      "It relies on Manhattan median distances",
      "It normalizes all vectors to zero length"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which strategy is commonly used in K-Means to deal with noise and prevent empty or outlier-driven clusters?",
    options: [
      "Using trimmed means or removing points far from all centroids",
      "Setting k equal to the total number of samples",
      "Replacing distance metrics with random guessing",
      "Eliminating input normalization"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "When implementing K-Means as a competitive neural network, why is input vector normalization important?",
    options: [
      "It ensures unit-length vectors so dot-product activation accurately reflects Euclidean proximity",
      "It converts unsupervised clustering into supervised backpropagation",
      "It eliminates the need for weight vectors",
      "It forces all neurons to fire simultaneously"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "In a K-Means competitive neural network, how is the winning neuron selected for an input vector x?",
    options: [
      "The neuron with the highest activation (minimum Euclidean distance to x) wins",
      "The neuron with the smallest weight sum wins",
      "All neurons with negative outputs win",
      "Neurons are selected in strict sequential order"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 8,
    question: "What problem can occur in basic competitive learning if a neuron's initial weight vector is positioned far from all input data points?",
    options: [
      "It becomes a 'dead unit' that never wins and never updates its weights",
      "It absorbs every cluster centroid into one node",
      "Its learning rate increases infinitely",
      "It converts into a supervised perceptron"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "How does a better weight update rule (such as leaky learning or conscience mechanism) resolve dead units in competitive learning?",
    options: [
      "By updating losing neurons slightly toward the input or penalizing frequent winners",
      "By freezing the learning rate at zero from epoch 1",
      "By deleting all hidden layers",
      "By sorting input vectors alphabetically"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Vector Quantisation (VQ) uses competitive learning to compress continuous input spaces into a discrete set of prototype vectors known as a:",
    options: [
      "Codebook",
      "Dendrogram",
      "Confusion Matrix",
      "Q-Table"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "In the Self-Organising Feature Map (SOM) algorithm, the neuron whose weight vector is closest to the input vector is called the:",
    options: [
      "Best Matching Unit (BMU)",
      "Support Vector",
      "Root Chromosome",
      "Greedy Policy Node"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 13,
    question: "In SOM neighbourhood connections, the neighborhood function (e.g., Gaussian kernel) typically shrinks over training iterations so that:",
    options: [
      "Global topological ordering occurs first, followed by fine-grained local tuning",
      "Neurons lose all spatial relationships at convergence",
      "The network expands to infinite dimensions",
      "Outliers become separate output layers"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "Self-organisation in a Kohonen SOM produces a low-dimensional feature map that preserves what property of the high-dimensional input space?",
    options: [
      "Topological neighborhood relationships (similar inputs map to nearby nodes)",
      "Exact cryptographic hashes of input tuples",
      "Exact temporal timestamps of training samples",
      "Class conditional independence"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Why do boundary conditions (edge effects) arise in standard rectangular 2D SOM grids?",
    options: [
      "Neurons on edges and corners have fewer neighbors than interior neurons",
      "Edge neurons have infinite learning rates",
      "Corner neurons cannot compute Euclidean distance",
      "Boundary nodes are disconnected from the input layer"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 17,
    question: "Which of the following is a classic practical application of using the Self-Organising Feature Map (SOM)?",
    options: [
      "Visualizing and clustering high-dimensional data (such as document collections or acoustic speech patterns) on a 2D map",
      "Computing exact analytical derivatives of deep neural nets",
      "Solving linear programming simplex tables",
      "Encrypting database primary keys"
    ],
    correctAnswer: 0
  },

  // UNIT IV – EVOLUTIONARY LEARNING, ENSEMBLE ALGORITHMS & DIMENSIONALITY REDUCTION (18–34)
  {
    id: 18,
    question: "Evolutionary learning algorithms search for optimal solutions by mimicking biological evolution through a population of candidate solutions evaluated by a:",
    options: [
      "Fitness Function",
      "Gini Impurity Index",
      "Discount Factor γ",
      "Mahalanobis Metric"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "In a Genetic Algorithm (GA), candidate solutions are typically encoded as fixed-length strings (such as binary bitstrings) called:",
    options: [
      "Chromosomes",
      "Eigenvectors",
      "Codebook Vectors",
      "Weak Learners"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 21,
    question: "What is the primary role of the Mutation operator in a Genetic Algorithm?",
    options: [
      "Introduce random genetic diversity to prevent premature convergence to local optima",
      "Sort chromosomes strictly by descending fitness",
      "Eliminate the top-performing individuals",
      "Reduce feature dimensions via covariance matrices"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "How does Genetic Programming (GP) differ from standard Genetic Algorithms (GA)?",
    options: [
      "GP evolves variable-sized executable computer programs or parse trees rather than fixed-length strings",
      "GP does not use selection or fitness evaluation",
      "GP requires gradient descent on every node",
      "GP only evolves constant scalar numbers"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "Ensemble learning improves predictive performance primarily by:",
    options: [
      "Combining predictions from multiple diverse models to reduce variance or bias",
      "Training a single deep tree without pruning",
      "Removing all validation data",
      "Using only one feature per dataset"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 25,
    question: "Which statement accurately describes how Boosting (such as AdaBoost) trains its ensemble of weak learners?",
    options: [
      "Learners are trained sequentially, increasing weights on previously misclassified instances",
      "Learners are trained independently in parallel on unweighted samples",
      "Every learner receives identical sample weights throughout training",
      "Misclassified instances are permanently deleted after round one"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "Compared to a single unpruned decision tree, Bagging primarily reduces which component of generalization error?",
    options: [
      "Variance",
      "Irreducible Bayes noise",
      "Feature dimensionality",
      "Bellman backup error"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: "What is the main goal of Dimensionality Reduction techniques such as PCA and LDA?",
    options: [
      "Transform high-dimensional data into a lower-dimensional space while retaining maximum relevant information",
      "Increase the number of redundant features to prevent overfitting",
      "Convert continuous rewards into discrete actions",
      "Evolve parse trees using crossover"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 29,
    question: "In Principal Component Analysis (PCA), the principal components correspond to the eigenvectors of which matrix?",
    options: [
      "The data covariance (or correlation) matrix",
      "The confusion matrix",
      "The state-action transition probability matrix",
      "The distance adjacency matrix"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "How do we select the top k principal components in PCA to preserve most of the dataset's information?",
    options: [
      "Select the k eigenvectors associated with the k largest eigenvalues",
      "Select the k eigenvectors with eigenvalues closest to zero",
      "Select k random columns from the raw dataset",
      "Select eigenvectors with negative variance"
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "Unlike PCA, Linear Discriminant Analysis (LDA) is a supervised dimensionality reduction technique because it explicitly uses:",
    options: [
      "Class labels to maximize class separability",
      "Unlabeled bootstrap samples",
      "Fitness scores of binary chromosomes",
      "State value functions"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 33,
    question: "For a classification problem with C distinct classes, what is the maximum number of nonzero linear discriminants that LDA can extract?",
    options: [
      "C − 1",
      "C + 1",
      "2C",
      "Unlimited regardless of feature count"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "Which preprocessing step is mandatory before applying PCA when input features are measured on vastly different scales (e.g., age in years vs. income in rupees)?",
    options: [
      "Feature standardization (zero mean and unit variance)",
      "Applying genetic mutation",
      "Assigning one-hot class targets",
      "Sorting rows by target label"
    ],
    correctAnswer: 0
  },

  // UNIT V – REINFORCEMENT LEARNING (35–50)
  {
    id: 35,
    question: "In Reinforcement Learning (RL), an agent learns an optimal behavior policy by interacting with an environment and receiving scalar feedback called:",
    options: [
      "Rewards",
      "Class Labels",
      "Eigenvectors",
      "Bootstrap Weights"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 37,
    question: "How does Direct Utility Estimation evaluate the utility Uπ(s) of a state under a fixed policy π?",
    options: [
      "By averaging the observed total reward-to-go from state s across multiple sample trials",
      "By solving linear Bellman equations using known transition probabilities",
      "By maximizing over all possible actions in state s",
      "By applying Principal Component Analysis to state vectors"
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "What is the main drawback of Direct Utility Estimation in passive reinforcement learning?",
    options: [
      "It ignores the Bellman relationship between adjacent states, leading to slow convergence",
      "It requires knowing the exact transition model T(s, a, s') in advance",
      "It only works for deterministic one-step episodes",
      "It cannot handle discounted rewards"
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "Adaptive Dynamic Programming (ADP) evaluates a fixed policy in passive RL by:",
    options: [
      "Learning the transition model T(s, π(s), s') and reward function R(s) from experience and solving the Bellman equations",
      "Averaging raw episode returns without building a transition model",
      "Performing genetic crossover on state utilities",
      "Using k-Means clustering on actions"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 41,
    question: "In Temporal Difference learning, the standard passive utility update equation upon transitioning from state s to s' with reward r is:",
    options: [
      "U(s) ← U(s) + α [r + γ U(s') − U(s)]",
      "U(s) ← U(s) − α [r + γ U(s')]",
      "U(s) ← r × U(s')",
      "U(s) ← maxa U(s')"
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "Active Reinforcement Learning differs from passive reinforcement learning because the active agent must:",
    options: [
      "Choose its own actions and learn an optimal policy while balancing exploration and exploitation",
      "Follow a pre-programmed fixed policy without ever deviating",
      "Ignore all immediate rewards",
      "Rely solely on static labeled training sets"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "In Active Reinforcement Learning, what is the exploration–exploitation trade-off?",
    options: [
      "Choosing between trying untried actions to discover higher rewards vs. choosing the currently known best action",
      "Choosing between supervised and unsupervised datasets",
      "Choosing between PCA and LDA",
      "Choosing between mutation and crossover rates"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 45,
    question: "SARSA is classified as an on-policy TD control algorithm because its Q-value update uses:",
    options: [
      "The actual next action a' chosen by the current policy in state s'",
      "The maximum Q-value over all actions regardless of policy",
      "Only the initial state s0",
      "Known transition probabilities T(s, a, s')"
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "Which equation represents the standard SARSA action-value update rule?",
    options: [
      "Q(s, a) ← Q(s, a) + α [r + γ Q(s', a') − Q(s, a)]",
      "Q(s, a) ← Q(s, a) + α [r + γ maxa' Q(s', a') − Q(s, a)]",
      "Q(s, a) ← r + γ Q(s, a)",
      "Q(s, a) ← Q(s', a') − Q(s, a)"
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "Q-Learning is classified as an off-policy TD control algorithm because it updates Q(s, a) using:",
    options: [
      "maxa' Q(s', a'), assuming greedy optimal behavior in the next state regardless of the exploratory action taken",
      "The exploratory action a' actually executed by an ε-greedy policy",
      "Fixed state utilities from passive direct estimation",
      "Exact dynamic programming sweeps over known models"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 49,
    question: "In the classic Cliff-Walking problem with an ε-greedy exploration policy, how do SARSA and Q-Learning behave differently?",
    options: [
      "SARSA learns a safer path away from the cliff accounting for exploratory slips, whereas Q-Learning learns the optimal path right along the cliff edge",
      "Q-Learning avoids the cliff completely while SARSA falls off every episode",
      "Both algorithms learn the exact same policy for all ε > 0",
      "SARSA cannot converge in grid-world environments"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "What is the fundamental algorithmic difference between SARSA and Q-Learning?",
    options: [
      "SARSA is on-policy (updates using Q(s', a') from the active policy), whereas Q-Learning is off-policy (updates using maxa' Q(s', a'))",
      "SARSA requires a transition model T(s, a, s'), whereas Q-Learning is model-free",
      "SARSA is passive RL, whereas Q-Learning is supervised learning",
      "SARSA uses discount factor γ = 0, whereas Q-Learning uses γ = 1"
    ],
    correctAnswer: 0
  }
];
