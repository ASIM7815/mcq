// Automata Theory & Languages MCQs - 50 Questions (IT Department)
// Unit III: Context-Free Grammars & Properties of CFLs
// Unit IV: Pushdown Automata (PDA)
// Unit V: Turing Machines & Undecidable Problems
// Note: Question 12 is intentionally skipped
// Correct answers are RANDOMIZED (not all option A)

const italcQuestions = [
  // UNIT III – Context-Free Grammars & Properties of CFLs
  {
    id: 1,
    question: "A Context-Free Grammar (CFG) is formally defined as a 4-tuple G = (V, T, P, S), where V stands for:",
    options: [
      "Finite set of non-terminal variables",
      "Finite set of terminal symbols",
      "Infinite set of output strings",
      "Set of stack alphabets"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 2,
    question: "In a Context-Free Grammar, every production rule has the general form:",
    options: [
      "α → β, where both α and β contain only terminals",
      "A → α, where A is a single variable and α ∈ (V ∪ T)*",
      "a → b, where a and b are terminal symbols",
      "S → ε only"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 3,
    question: "What is the yield of a parse tree in a Context-Free Grammar?",
    options: [
      "The label of the root node",
      "The total number of internal nodes",
      "The string obtained by reading the leaf nodes from left to right",
      "The height of the longest branch"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 4,
    question: "Which of the following is a primary real-world application of Context-Free Grammars?",
    options: [
      "Symmetric key cryptography",
      "Disk block defragmentation",
      "Analog-to-digital signal conversion",
      "Syntax analysis (parsing) in programming language compilers and XML"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 5,
    question: "A Context-Free Grammar G is called ambiguous if there exists at least one string w ∈ L(G) that has:",
    options: [
      "No derivation from the start symbol S",
      "Two or more distinct leftmost derivations (or parse trees)",
      "Only one unique rightmost derivation",
      "Zero terminal symbols"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 6,
    question: "A Context-Free Language L is said to be inherently ambiguous if:",
    options: [
      "L is a finite regular language",
      "At least one unambiguous CFG exists for L",
      "Every CFG generating L is ambiguous",
      "L contains only the empty string ε"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 7,
    question: "Before converting a CFG into Chomsky Normal Form (CNF), which types of productions must be eliminated?",
    options: [
      "All terminal productions",
      "All productions starting with S",
      "All binary variable productions",
      "Useless symbols, ε-productions, and unit productions"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 8,
    question: "In Chomsky Normal Form (CNF), every production rule (except possibly S → ε) must take which form?",
    options: [
      "A → BC or A → a (where A, B, C are variables and a is a terminal)",
      "A → aα (where a is a terminal and α is a string of variables)",
      "A → aBb (where a, b are terminals)",
      "AB → CD"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 9,
    question: "In Greibach Normal Form (GNF), every production rule has the structure:",
    options: [
      "A → BC",
      "A → aα (where a is a terminal and α is a string of variables)",
      "A → ε only",
      "A → AA"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 10,
    question: "The Pumping Lemma for Context-Free Languages helps to prove:",
    options: [
      "A language is regular",
      "A language is finite",
      "A language is not context-free",
      "A language is decidable"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 11,
    question: "According to the Pumping Lemma for CFLs, for every CFL L there exists a pumping length p such that any string s ∈ L with |s| ≥ p can be divided as s = uvwxy where:",
    options: [
      "|vwx| ≤ p and |vx| ≥ 1",
      "|uvxy| ≤ p",
      "v = x always",
      "|w| = p"
    ],
    correctAnswer: 0  // A
  },
  // Question 12 is SKIPPED as per your instruction
  {
    id: 13,
    question: "The closure properties of Context-Free Languages include:",
    options: [
      "Intersection with any language",
      "Complement",
      "Union, concatenation, and Kleene star",
      "Reverse complement"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 14,
    question: "Are Context-Free Languages closed under complement?",
    options: [
      "Yes, always",
      "Yes, but only for deterministic CFLs",
      "No, never",
      "Only for finite languages"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 15,
    question: "If L₁ and L₂ are both context-free, is L₁ ∩ L₂ always context-free?",
    options: [
      "Yes, always",
      "No, CFLs are not closed under intersection",
      "Only if both are regular",
      "Only for deterministic CFLs"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 16,
    question: "Which of the following languages is NOT context-free?",
    options: [
      "{aⁿbⁿcⁿ | n ≥ 0}",
      "{aⁿbⁿ | n ≥ 0}",
      "{ww | w ∈ {a, b}*}",
      "Both A and C"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 17,
    question: "A useless symbol in a CFG is one that:",
    options: [
      "Is a terminal symbol",
      "Does not appear in any derivation of a terminal string from S",
      "Appears only once in the grammar",
      "Is the start symbol S"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 18,
    question: "The CYK (Cocke-Younger-Kasami) parsing algorithm requires the grammar to be in which normal form?",
    options: [
      "Greibach Normal Form",
      "Chomsky Normal Form",
      "Kuroda Normal Form",
      "Backus-Naur Form"
    ],
    correctAnswer: 1  // B

  },
  
  // UNIT IV – Pushdown Automata (PDA)
  {
    id: 19,
    question: "A Pushdown Automaton (PDA) is formally defined as a 7-tuple (Q, Σ, Γ, δ, q₀, Z₀, F), where Γ represents:",
    options: [
      "Stack alphabet",
      "Input alphabet",
      "Set of states",
      "Start state"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 20,
    question: "In a PDA, the transition function δ maps:",
    options: [
      "Q × (Σ ∪ {ε}) × Γ → finite subsets of Q × Γ*",
      "Q × Σ → Q",
      "Σ × Γ → Q",
      "Q → Σ × Γ"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 21,
    question: "What is the primary difference between a PDA and a finite automaton?",
    options: [
      "PDA has multiple start states",
      "PDA has no accept states",
      "PDA has an additional stack memory",
      "PDA operates on tape"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 22,
    question: "A PDA accepts a string by final state if:",
    options: [
      "The stack becomes empty",
      "After consuming the entire input, the PDA is in one of the accept states",
      "The input is rejected",
      "The stack overflows"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 23,
    question: "A PDA accepts a string by empty stack if:",
    options: [
      "After consuming the input, the stack becomes empty",
      "The PDA reaches a final state",
      "The input string is empty",
      "The stack has exactly one symbol"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 24,
    question: "Are acceptance by final state and acceptance by empty stack equivalent for PDAs?",
    options: [
      "No, they are completely different",
      "Yes, any PDA accepting by one method can be converted to accept by the other",
      "Only for deterministic PDAs",
      "Only for regular languages"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 25,
    question: "A Deterministic Pushdown Automaton (DPDA) is characterized by:",
    options: [
      "Having multiple transitions for the same input and stack top",
      "Having at most one transition for each (state, input symbol, stack top) triple",
      "Never using ε-transitions",
      "Having infinite states"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 26,
    question: "Which class of languages can be recognized by DPDAs?",
    options: [
      "All context-free languages",
      "Deterministic context-free languages (a proper subset of CFLs)",
      "All regular languages only",
      "Context-sensitive languages"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 27,
    question: "Which of the following languages can be accepted by a PDA?",
    options: [
      "{aⁿbⁿ | n ≥ 0}",
      "{aⁿbⁿcⁿ | n ≥ 0}",
      "{aⁿ | n is prime}",
      "All of the above"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 28,
    question: "Can a PDA recognize the language {ww | w ∈ {a, b}*}?",
    options: [
      "Yes, easily",
      "No, because it is not context-free",
      "Only with two stacks",
      "Yes, but only for w of length 1"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 29,
    question: "The equivalence between CFGs and PDAs states that:",
    options: [
      "Every CFG can be converted to an equivalent PDA, and vice versa",
      "CFGs are more powerful than PDAs",
      "PDAs are more powerful than CFGs",
      "They recognize different language classes"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 30,
    question: "Given a CFG G, how can we construct an equivalent PDA?",
    options: [
      "Simulate leftmost or rightmost derivations using the stack",
      "Convert all productions to regular expressions",
      "Remove all ε-productions first",
      "Create separate states for each variable"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 31,
    question: "To convert a PDA to an equivalent CFG, the variables in the grammar represent:",
    options: [
      "Transitions in the PDA",
      "Configurations of the form [q, A, p] indicating paths from state q to p that pop A",
      "Stack symbols only",
      "Input symbols only"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 32,
    question: "In a PDA, an ε-transition means:",
    options: [
      "The PDA reads an input symbol without changing the stack",
      "The PDA changes state and/or stack without consuming input",
      "The input is rejected",
      "The stack is cleared"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 33,
    question: "For a PDA to be deterministic (DPDA), it must not have:",
    options: [
      "Any final states",
      "Both an ε-transition and a regular transition from the same configuration",
      "A stack",
      "An input alphabet"
    ],
    correctAnswer: 1  // B
  },
  
  // UNIT V – Turing Machines & Undecidable Problems
  {
    id: 34,
    question: "A Turing Machine (TM) is formally defined as a 7-tuple (Q, Σ, Γ, δ, q₀, q_accept, q_reject), where Γ represents:",
    options: [
      "Tape alphabet (includes Σ and blank symbol)",
      "Input alphabet",
      "Set of states",
      "Transition function"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 35,
    question: "In a Turing Machine, the transition function δ maps:",
    options: [
      "Q × Γ → Q × Γ × {L, R}",
      "Q × Σ → Q",
      "Σ → Γ",
      "Q → Q"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 36,
    question: "What is the primary capability that distinguishes a Turing Machine from a PDA?",
    options: [
      "Infinite tape that can be read and written",
      "Multiple accept states",
      "Determinism",
      "Finite input"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 37,
    question: "A Turing Machine accepts an input string w if:",
    options: [
      "It halts in the accept state q_accept",
      "It halts in any state",
      "It never halts",
      "It reaches the end of the tape"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 38,
    question: "The Church-Turing Thesis states that:",
    options: [
      "Turing Machines can solve all mathematical problems",
      "Any algorithm can be computed by a Turing Machine",
      "All languages are decidable",
      "PDAs are equivalent to Turing Machines"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 39,
    question: "A language L is Turing-decidable (recursive) if:",
    options: [
      "There exists a TM that halts and accepts every string in L, and halts and rejects every string not in L",
      "There exists a TM that accepts L but may not halt on strings not in L",
      "L is finite",
      "L is regular"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 40,
    question: "A language L is Turing-recognizable (recursively enumerable) if:",
    options: [
      "L is decidable",
      "There exists a TM that accepts all strings in L, but may loop forever on strings not in L",
      "L is context-free",
      "L is regular"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 41,
    question: "The Halting Problem asks:",
    options: [
      "Can we determine if a TM halts on all inputs?",
      "Given a TM M and input w, does M halt on w?",
      "Is every TM deterministic?",
      "Does a TM accept the empty string?"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 42,
    question: "The Halting Problem is:",
    options: [
      "Decidable",
      "Undecidable",
      "Context-free",
      "Regular"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 43,
    question: "Alan Turing proved the undecidability of the Halting Problem using:",
    options: [
      "A diagonalization argument (proof by contradiction)",
      "Dynamic programming",
      "Pumping lemma",
      "Regular expressions"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 44,
    question: "Rice's Theorem states that:",
    options: [
      "All languages are decidable",
      "Any non-trivial property of Turing-recognizable languages is undecidable",
      "All context-free languages are recognizable",
      "PDAs are more powerful than TMs"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 45,
    question: "A property of TM languages is non-trivial if:",
    options: [
      "It holds for some but not all Turing-recognizable languages",
      "It holds for all languages",
      "It holds for no languages",
      "It is decidable"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 46,
    question: "Which of the following problems is undecidable?",
    options: [
      "Determining if a DFA accepts a given string",
      "Determining if a TM accepts the empty language",
      "Determining if a regular expression matches a string",
      "Parsing a context-free language"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 47,
    question: "The acceptance problem for TMs (A_TM) is:",
    options: [
      "Decidable",
      "Undecidable but recognizable",
      "Not recognizable",
      "Regular"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 48,
    question: "A reduction from problem A to problem B shows that:",
    options: [
      "A is at least as hard as B",
      "B is at least as hard as A",
      "A and B are equivalent",
      "Both are decidable"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 49,
    question: "If a language L is decidable, then its complement L' is:",
    options: [
      "Also decidable",
      "Undecidable",
      "Not recognizable",
      "Regular"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 50,
    question: "A Universal Turing Machine (UTM) is a TM that:",
    options: [
      "Solves all problems",
      "Can simulate any other Turing Machine given its description and input",
      "Recognizes all decidable languages",
      "Has infinite states"
    ],
    correctAnswer: 1  // B
  }
];

console.log('✅ IT ALC Questions Loaded (FIXED with randomized answers):', italcQuestions.length);
