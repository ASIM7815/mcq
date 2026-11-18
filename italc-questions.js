// Automata Theory & Languages MCQs - 50 Questions (IT Department)
// Unit III: Context-Free Grammars & Properties of CFLs
// Unit IV: Pushdown Automata (PDA)
// Unit V: Turing Machines & Undecidable Problems
// Note: Question 12 is intentionally skipped

const italcQuestions = [
  // UNIT III – Context-Free Grammars & Properties of CFLs (Questions 1-18, skipping 12)
  {
    id: 1,
    question: "A Context-Free Grammar (CFG) is formally defined as a 4-tuple G = (V, T, P, S), where V stands for:",
    options: [
      "Finite set of non-terminal variables",
      "Finite set of terminal symbols",
      "Infinite set of output strings",
      "Set of stack alphabets"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "In a Context-Free Grammar, every production rule has the general form:",
    options: [
      "A → α, where A is a single variable and α ∈ (V ∪ T)*",
      "α → β, where both α and β contain only terminals",
      "a → b, where a and b are terminal symbols",
      "S → ε only"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "What is the yield of a parse tree in a Context-Free Grammar?",
    options: [
      "The string obtained by reading the leaf nodes from left to right",
      "The label of the root node",
      "The total number of internal nodes",
      "The height of the longest branch"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which of the following is a primary real-world application of Context-Free Grammars?",
    options: [
      "Syntax analysis (parsing) in programming language compilers and XML",
      "Symmetric key cryptography",
      "Disk block defragmentation",
      "Analog-to-digital signal conversion"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "A Context-Free Grammar G is called ambiguous if there exists at least one string w ∈ L(G) that has:",
    options: [
      "Two or more distinct leftmost derivations (or parse trees)",
      "No derivation from the start symbol S",
      "Only one unique rightmost derivation",
      "Zero terminal symbols"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "A Context-Free Language L is said to be inherently ambiguous if:",
    options: [
      "Every CFG generating L is ambiguous",
      "At least one unambiguous CFG exists for L",
      "L is a finite regular language",
      "L contains only the empty string ε"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Before converting a CFG into Chomsky Normal Form (CNF), which types of productions must be eliminated?",
    options: [
      "Useless symbols, ε-productions, and unit productions",
      "All terminal productions",
      "All productions starting with S",
      "All binary variable productions"
    ],
    correctAnswer: 0
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
    correctAnswer: 0
  },
  {
    id: 9,
    question: "In Greibach Normal Form (GNF), every production rule has the structure:",
    options: [
      "A → aα, where a is a single terminal and α is a string of zero or more variables",
      "A → BC, where B and C are variables",
      "A → αa, ending with a terminal symbol",
      "A → ε for every variable"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "What is the main purpose of the Pumping Lemma for Context-Free Languages?",
    options: [
      "To prove that a given language is NOT context-free",
      "To prove that a given language is definitely context-free",
      "To minimize the states of a DFA",
      "To convert a Turing Machine into a regular expression"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "According to the Pumping Lemma for CFLs, a sufficiently long string z ∈ L is divided into five substrings z = uvwxy such that:",
    options: [
      "|vx| ≥ 1, |vwx| ≤ n, and uv^iwx^iy ∈ L for all i ≥ 0",
      "All strings are empty",
      "u^iv^iwxy ∈ L for all i ≥ 0",
      "|uvwxy| ≤ 2"
    ],
    correctAnswer: 0
  },
  // Question 12 is SKIPPED as requested
  {
    id: 13,
    question: "Context-Free Languages are closed under which of the following operations?",
    options: [
      "Union, Concatenation, and Kleene Star",
      "Intersection and Complementation",
      "Set Difference and Intersection",
      "Complementation only"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "Context-Free Languages are NOT closed under:",
    options: [
      "Intersection and Complementation",
      "Union",
      "Concatenation",
      "Kleene Closure (*)"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "The intersection of a Context-Free Language and a Regular Language is always:",
    options: [
      "Context-Free",
      "Regular",
      "Non-recursive",
      "Finite"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Which algorithm is commonly used to decide the membership problem (whether w ∈ L(G)) for a CFG in Chomsky Normal Form?",
    options: [
      "CYK (Cocke-Younger-Kasami) Algorithm",
      "Dijkstra's Shortest Path Algorithm",
      "Kruskal's Algorithm",
      "Bellman-Ford Algorithm"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "Which of the following decision problems is DECIDABLE for Context-Free Grammars?",
    options: [
      "Emptiness of L(G) and Finiteness of L(G)",
      "Equivalence of two CFGs (L(G1) = L(G2))",
      "Ambiguity of an arbitrary CFG",
      "Whether L(G) = Σ*"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Which of the following decision problems is UNDECIDABLE for Context-Free Grammars?",
    options: [
      "Checking whether two arbitrary CFGs generate the exact same language",
      "Checking whether a given string w is generated by G",
      "Checking whether L(G) is empty",
      "Checking whether L(G) is finite"
    ],
    correctAnswer: 0
  },

  // UNIT IV – Pushdown Automata (PDA) (Questions 19-32)
  {
    id: 19,
    question: "A Pushdown Automaton (PDA) is essentially a Finite Automaton equipped with which auxiliary memory structure?",
    options: [
      "An unbounded LIFO Stack",
      "A FIFO Queue",
      "A two-way infinite tape",
      "A fixed-size register array"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "A Pushdown Automaton is formally defined as a 7-tuple P = (Q, Σ, Γ, δ, q0, Z0, F), where Γ represents:",
    options: [
      "Finite set of stack symbols (stack alphabet)",
      "Set of final accepting states",
      "Input tape alphabet",
      "Initial state of the machine"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "In the formal definition of a PDA, the symbol Z0 denotes:",
    options: [
      "The initial stack start symbol",
      "The blank tape symbol",
      "The dead state",
      "The empty input string"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "An Instantaneous Description (ID) of a Pushdown Automaton is represented by the triple:",
    options: [
      "(q, w, γ) — current state, remaining input, and current stack contents",
      "(Q, Σ, F) — states, alphabet, and final states",
      "(q0, Z0, ε) — start state, stack bottom, and empty string",
      "(V, T, P) — variables, terminals, and productions"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "What are the two standard ways a Pushdown Automaton accepts an input string w?",
    options: [
      "Acceptance by Final State and Acceptance by Empty Stack",
      "Acceptance by Full Stack and Acceptance by Timeout",
      "Acceptance by Halting Left and Halting Right",
      "Acceptance by Regular Expression and Truth Table"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "How do the two acceptance modes of a PDA (Final State vs. Empty Stack) compare in computational power?",
    options: [
      "They are equivalent — any language accepted by final state can be accepted by empty stack and vice versa",
      "Final state acceptance is strictly more powerful",
      "Empty stack acceptance only recognizes regular languages",
      "Neither mode can accept palindromes"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "The class of languages accepted by non-deterministic Pushdown Automata (NPDA) is exactly the class of:",
    options: [
      "Context-Free Languages (CFLs)",
      "Regular Languages",
      "Context-Sensitive Languages",
      "Recursively Enumerable Languages"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "When converting a Context-Free Grammar G = (V, T, P, S) directly into an equivalent PDA accepting by empty stack, the PDA starts with what symbol on its stack?",
    options: [
      "The start variable S of the grammar",
      "The terminal symbol a",
      "An empty stack ε",
      "All production rules simultaneously"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: "In a PDA constructed from a CFG, when the top of the stack is a terminal symbol 'a' matching the current input symbol 'a', the PDA:",
    options: [
      "Pops 'a' from the stack and advances the input pointer",
      "Pushes two new variables onto the stack",
      "Halts and rejects the input string",
      "Resets the stack to S"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "A Pushdown Automaton is called Deterministic (DPDA) if for every state q, input symbol a (or ε), and stack top X:",
    options: [
      "There is at most one possible transition move, and if δ(q, ε, X) is non-empty then δ(q, a, X) must be empty for all a ∈ Σ",
      "Every transition pushes at least three symbols",
      "ε-transitions are completely forbidden",
      "The stack height never exceeds 1"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "How does the computational power of a Deterministic PDA (DPDA) compare to a Non-Deterministic PDA (NPDA)?",
    options: [
      "NPDA is strictly more powerful than DPDA (DCFL ⊂ CFL)",
      "DPDA and NPDA accept the exact same class of languages",
      "DPDA is more powerful than a Turing Machine",
      "DPDA can only accept finite languages"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "Which of the following languages can be accepted by an NPDA, but CANNOT be accepted by any Deterministic PDA (DPDA)?",
    options: [
      "Even-length palindromes",
      "Regular expressions",
      "Binary numbers",
      "Empty language"
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "What is the key limitation of Deterministic PDAs compared to Non-Deterministic PDAs?",
    options: [
      "DPDAs cannot accept all context-free languages",
      "DPDAs have no stack",
      "DPDAs can only process binary input",
      "DPDAs cannot halt"
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "Which statement about Pushdown Automata is correct?",
    options: [
      "Every regular language can be accepted by a PDA",
      "No regular language can be accepted by a PDA",
      "PDAs can only accept finite languages",
      "PDAs are less powerful than finite automata"
    ],
    correctAnswer: 0
  },

  // UNIT V – Turing Machines & Undecidable Problems (Questions 33-50)
  {
    id: 33,
    question: "A standard Turing Machine (TM) uses which type of storage medium for reading and writing symbols?",
    options: [
      "An infinite tape divided into cells with a two-way read/write head",
      "A read-only one-way input tape",
      "A single LIFO stack",
      "A finite circular buffer"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "In one transition step δ(q, X) = (p, Y, D) of a Turing Machine, what actions are performed?",
    options: [
      "Change state to p, overwrite X with Y on the tape, and move head Left (L) or Right (R)",
      "Push Y onto the stack and move right only",
      "Delete the current tape cell permanently",
      "Halt immediately without moving the head"
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: "What is the special tape symbol B (or ⊔) on a Turing Machine tape?",
    options: [
      "The Blank symbol filling all infinitely many unused cells",
      "The start state symbol",
      "A binary bit 1",
      "The end-of-file rejection character"
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: "The class of all languages accepted by Turing Machines is known as:",
    options: [
      "Recursively Enumerable (Turing-Recognizable) Languages",
      "Regular Languages",
      "Context-Free Languages",
      "Deterministic Context-Free Languages"
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "A language is called Recursive (Decidable) if there exists a Turing Machine that:",
    options: [
      "Halts on every input string (accepting strings in L and rejecting strings not in L)",
      "Loops infinitely on all rejected strings",
      "Uses zero tape cells",
      "Never enters a final state"
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "Which programming technique for Turing Machines allows storing a fixed finite tuple of symbols inside a single tape cell?",
    options: [
      "Multiple Tracks",
      "Storage in the Finite Control",
      "Subroutines",
      "Shifting"
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "Which programming technique remembers a finite amount of data directly inside the states of a Turing Machine?",
    options: [
      "Storage in the Finite Control",
      "Multi-tape extension",
      "Two-way infinite tape",
      "Random access memory"
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: "How does the computational power of a Multi-Tape Turing Machine compare to a standard Single-Tape Turing Machine?",
    options: [
      "They have the exact same computational power (recognize the exact same languages)",
      "Multi-tape TM can solve undecidable problems",
      "Single-tape TM is strictly more powerful",
      "Multi-tape TM only recognizes regular languages"
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "How does a Non-Deterministic Turing Machine (NTM) compare in language recognition power to a Deterministic Turing Machine (DTM)?",
    options: [
      "Every NTM can be simulated by an equivalent DTM (equal recognition power)",
      "NTM recognizes languages that no DTM can recognize",
      "DTM is strictly more powerful than NTM",
      "NTM has no transition function"
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "A Restricted Turing Machine with two stacks (a Two-Stack PDA) has the exact same computational power as:",
    options: [
      "A standard Turing Machine",
      "A Deterministic Finite Automaton (DFA)",
      "A single-stack Pushdown Automaton",
      "A Moore Machine"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "A Counter Machine with at least how many counters can simulate an arbitrary Turing Machine?",
    options: [
      "Two counters",
      "Zero counters",
      "One counter",
      "Infinite counters only"
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "According to the Church-Turing Thesis, any function that can be computed by an algorithm on a physical computer can be computed by:",
    options: [
      "A Turing Machine",
      "A Finite Automaton",
      "A Pushdown Automaton",
      "A Regular Expression"
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: "A Universal Turing Machine (UTM) is a Turing Machine capable of:",
    options: [
      "Taking the encoded description ⟨M⟩ of any TM M and an input w, and simulating M on w",
      "Solving the Halting Problem for all machines",
      "Running without any tape",
      "Deciding all undecidable problems"
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "The Halting Problem (determining whether an arbitrary Turing Machine M halts on input w) is:",
    options: [
      "Undecidable",
      "Decidable in polynomial time",
      "Solvable by a DFA",
      "Regular"
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "What is the language Ld (the Diagonalization Language) used to prove the existence of problems computers cannot solve?",
    options: [
      "The set of binary encodings wi of Turing Machines Mi that do NOT accept their own encoding wi",
      "The set of all strings containing equal 0s and 1s",
      "The set of all valid C programs",
      "The set of all Turing Machines that halt on empty input"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "Post's Correspondence Problem (PCP) over an alphabet Σ with at least two symbols is:",
    options: [
      "Undecidable",
      "Decidable for all input lists",
      "Solvable using a finite automaton",
      "Equivalent to binary search"
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "In Post's Correspondence Problem (PCP), given two lists A = (w1, ..., wk) and B = (x1, ..., xk) of non-empty strings, a solution exists if there is a sequence of indices i1, ..., im (m ≥ 1) such that:",
    options: [
      "wi1wi2...wim = xi1xi2...xim",
      "wi1 ≠ xi1 for every index",
      "The sum of string lengths equals zero",
      "Every string in list A is a palindrome"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "According to Rice's Theorem, any non-trivial semantic property of the language recognized by a Turing Machine is:",
    options: [
      "Undecidable",
      "Decidable",
      "Regular",
      "Context-Free"
    ],
    correctAnswer: 0
  }
];
