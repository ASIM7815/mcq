// Discrete Mathematics MCQs - 50 Questions
const dmQuestions = [
  // Part 1: Counting Principles, Permutations, Combinations, Binomial Theorem and Pigeonhole Principle
  {
    id: 1,
    question: "The addition principle of counting is used when:",
    options: [
      "Two tasks must be performed one after another",
      "One of several mutually exclusive choices is made",
      "Arrangements are made in a circle",
      "Repetition is always allowed"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "If a task can be done in m ways and a second independent task in n ways, the number of ways to do both tasks is:",
    options: ["m + n", "m − n", "mn", "m/n"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "How many ways can 5 distinct books be arranged on a shelf?",
    options: ["25", "60", "120", "240"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "The number of ways to select 3 students from 8 students is:",
    options: ["24", "56", "336", "512"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Which expression represents the number of permutations of n distinct objects taken r at a time?",
    options: [
      "n!/[r!(n−r)!]",
      "n!/(n−r)!",
      "r!/(n−r)!",
      "n!/r!"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which expression represents the number of combinations of n distinct objects taken r at a time?",
    options: [
      "n!/(n−r)!",
      "n!/(n−r)!r!",
      "n!r!",
      "(n−r)!/n!"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "How many 3-letter codes can be formed from 5 letters if repetition is allowed?",
    options: ["15", "60", "125", "243"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 if repetition is not allowed?",
    options: ["15", "60", "100", "125"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "How many distinct arrangements can be made from the letters of the word LEVEL?",
    options: ["10", "30", "20", "60"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "How many ways can 4 identical balls be distributed among 3 distinct boxes if boxes may be empty?",
    options: ["12", "15", "24", "81"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "The coefficient of x³ in (1 + x)⁵ is:",
    options: ["5", "10", "15", "20"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "According to the binomial theorem, the general term in the expansion of (a + b)ⁿ is:",
    options: [
      "ⁿCᵣ aⁿ⁻ʳ bʳ",
      "ⁿPᵣ aʳ bⁿ",
      "ⁿCᵣ aʳ bʳ",
      "aⁿ + bⁿ"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "The sum of all binomial coefficients in the expansion of (1 + x)ⁿ is:",
    options: ["n", "2ⁿ", "n!", "2n"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "The number of terms in the expansion of (x + y)ⁿ is:",
    options: ["n", "n + 1", "2n", "2ⁿ"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "In the multinomial theorem, the expansion of (x₁ + x₂ + ... + xₖ)ⁿ contains terms whose coefficients are:",
    options: [
      "Only binomial coefficients",
      "Multinomial coefficients",
      "Fibonacci numbers",
      "Prime numbers"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "The coefficient of x²y² in (x + y)⁴ is:",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "The inclusion–exclusion principle for two finite sets A and B states that:",
    options: [
      "|A∪B| = |A| + |B|",
      "|A∪B| = |A| + |B| − |A∩B|",
      "|A∩B| = |A| + |B|",
      "|A∪B| = |A||B|"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "If |A| = 20, |B| = 15, and |A∩B| = 5, then |A∪B| is:",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "The inclusion–exclusion principle is especially useful for:",
    options: [
      "Counting elements in overlapping sets",
      "Finding shortest paths",
      "Sorting a list",
      "Solving differential equations"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "The pigeonhole principle states that if more than n objects are placed into n boxes, then:",
    options: [
      "Every box contains exactly one object",
      "At least one box contains at least two objects",
      "One box must be empty",
      "All boxes contain the same number"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "If 13 people are present, at least two must have birthdays in the same month because:",
    options: [
      "There are 13 months",
      "There are 12 months",
      "Every month has 31 days",
      "Birthdays are equally distributed"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "If 25 students are assigned to 4 groups, at least one group contains at least:",
    options: ["5 students", "6 students", "7 students", "8 students"],
    correctAnswer: 2
  },
  {
    id: 23,
    question: "What is the number of ways to choose a committee of 2 from 6 people?",
    options: ["12", "15", "30", "36"],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "How many distinct 4-digit PINs can be formed using digits 0–9 if repetition is allowed?",
    options: ["1,000", "5,040", "10,000", "40,000"],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "In how many ways can 6 people be seated around a circular table, considering rotations identical?",
    options: ["120", "360", "720", "60"],
    correctAnswer: 0
  },

  // Part 2: Recurrence Relations and Generating Functions
  {
    id: 26,
    question: "A recurrence relation defines a sequence by:",
    options: [
      "Giving every term independently",
      "Expressing one or more terms using earlier terms",
      "Listing only the first term",
      "Giving a graph of the sequence"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Which of the following is a recurrence relation for the Fibonacci sequence?",
    options: [
      "aₙ = 2n",
      "aₙ = aₙ₋₁ + aₙ₋₂, for n ≥ 2",
      "aₙ = n!",
      "aₙ = aₙ₋₁²"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "For the recurrence aₙ = 3aₙ₋₁ with a₀ = 2, the value of a₃ is:",
    options: ["18", "27", "54", "81"],
    correctAnswer: 2
  },
  {
    id: 29,
    question: "A sequence is uniquely determined by a recurrence relation when it is accompanied by suitable:",
    options: [
      "Initial conditions",
      "Graph labels",
      "Prime numbers",
      "Matrix dimensions"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "The ordinary generating function of a sequence {aₙ} is:",
    options: [
      "Σ aₙxⁿ",
      "Σ aₙⁿx",
      "Σ x/aₙ",
      "Σ aₙ + x"
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "What is the generating function of the constant sequence 1, 1, 1, 1, ...?",
    options: [
      "1 + x",
      "1/(1 − x)",
      "1/(1 + x)",
      "x/(1 − x)"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "The generating function of the sequence 1, 2, 3, 4, ... (with a₀ = 1) is:",
    options: [
      "1/(1 − x)²",
      "x/(1 − x)",
      "1/(1 + x)²",
      "1 − x"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "If A(x) = Σₙ₌₀∞ aₙxⁿ, the coefficient of xᵏ in A(x) is:",
    options: ["A(k)", "aₖ", "k!", "xᵏ"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "The coefficient of x⁴ in 1/(1 − x) is:",
    options: ["0", "1", "4", "24"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "The coefficient of x³ in 1/(1 − x)² is:",
    options: ["3", "4", "6", "8"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "The generating function for the sequence 1, 0, 0, 0, ... is:",
    options: ["1", "x", "1/(1 − x)", "1/(1 + x)"],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "Which operation on generating functions corresponds to adding two sequences term by term?",
    options: [
      "Multiplication",
      "Addition",
      "Differentiation only",
      "Division"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "For a sequence with generating function A(x), multiplying A(x) by x shifts the sequence:",
    options: [
      "One position to the right",
      "One position to the left",
      "By two positions to the left",
      "Without any shift"
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "The characteristic equation of the recurrence aₙ − 5aₙ₋₁ + 6aₙ₋₂ = 0 is:",
    options: [
      "r² − 5r + 6 = 0",
      "r² + 5r + 6 = 0",
      "r − 5 + 6 = 0",
      "r² − 6r + 5 = 0"
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: "The roots of the characteristic equation r² − 5r + 6 = 0 are:",
    options: [
      "1 and 6",
      "2 and 3",
      "−2 and −3",
      "5 and 6"
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "If a second-order homogeneous linear recurrence has two distinct characteristic roots r₁ and r₂, its general solution is:",
    options: [
      "aₙ = C₁r₁ⁿ + C₂r₂ⁿ",
      "aₙ = C₁ + C₂n",
      "aₙ = r₁ + r₂",
      "aₙ = C₁n²"
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "If the characteristic equation has a repeated root r, the solution form for a second-order homogeneous recurrence is:",
    options: [
      "aₙ = C₁rⁿ + C₂nrⁿ",
      "aₙ = C₁rⁿ + C₂(−r)ⁿ",
      "aₙ = C₁ + C₂r",
      "aₙ = C₁n + C₂"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "The substitution method for solving a recurrence relation involves:",
    options: [
      "Repeatedly expanding the recurrence to identify a pattern",
      "Drawing a planar graph",
      "Finding a matrix inverse only",
      "Using a truth table"
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "The recurrence aₙ = aₙ₋₁ + 2 with a₀ = 1 has the solution:",
    options: [
      "aₙ = n",
      "aₙ = 2n + 1",
      "aₙ = 2ⁿ",
      "aₙ = n² + 1"
    ],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "A non-homogeneous linear recurrence relation contains:",
    options: [
      "Only terms involving previous sequence values",
      "A non-zero forcing term independent of the sequence terms",
      "No initial conditions",
      "Only products of sequence terms"
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "The general solution of a linear non-homogeneous recurrence is the sum of:",
    options: [
      "Two particular solutions",
      "The homogeneous solution and one particular solution",
      "The initial values only",
      "The characteristic roots only"
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "For a non-homogeneous recurrence with constant forcing term, a constant particular solution is often tried when:",
    options: [
      "The constant trial does not duplicate a homogeneous solution",
      "The recurrence has no roots",
      "The sequence is always zero",
      "The order is necessarily three"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "If a trial particular solution duplicates a term in the homogeneous solution, the trial is generally multiplied by:",
    options: [
      "0",
      "n (or a suitable power of n)",
      "−1 only",
      "The characteristic root only"
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "The generating-function method solves a recurrence by converting it into:",
    options: [
      "An algebraic equation involving the generating function",
      "A geometric construction",
      "A system of inequalities only",
      "A probability tree"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "Which is the generating function of the sequence aₙ = 2ⁿ for n ≥ 0?",
    options: [
      "1/(1 − 2x)",
      "1/(1 − x)²",
      "1/(1 + 2x)",
      "2/(1 − x)"
    ],
    correctAnswer: 0
  }
];
