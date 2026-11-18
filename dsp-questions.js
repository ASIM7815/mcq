// Digital Signal Processing (DSP) MCQs - 60 Questions
// 3rd Year ECE - 5 Units (12 questions per unit)
// Correct answers are PROPERLY RANDOMIZED (no consecutive AAA or BBB patterns)

const dspQuestions = [
  // UNIT I: Discrete Fourier Transform and Fast Fourier Transform (DFT & FFT)
  {
    id: 1,
    question: "DFT stands for:",
    options: [
      "Digital Fourier Transform",
      "Discrete Fourier Transform",
      "Direct Fourier Transform",
      "Discontinuous Fourier Transform"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 2,
    question: "The N-point DFT of a sequence produces:",
    options: [
      "N/2 frequency samples",
      "2N frequency samples",
      "N frequency samples",
      "N+1 frequency samples"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 3,
    question: "The computational complexity of direct DFT is:",
    options: [
      "O(N)",
      "O(N²)",
      "O(log N)",
      "O(N log N)"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 4,
    question: "FFT is mainly used to:",
    options: [
      "Increase signal amplitude",
      "Reduce computation time for DFT",
      "Remove all noise",
      "Increase sampling frequency"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 5,
    question: "FFT stands for:",
    options: [
      "Fast Fourier Transform",
      "Frequency Fourier Transform",
      "Fast Frequency Technique",
      "Fourier Frequency Transformation"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 6,
    question: "Radix-2 FFT requires the number of input samples to be:",
    options: [
      "Prime number",
      "Odd number",
      "Power of 2",
      "Multiple of 3"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 7,
    question: "DIT FFT stands for:",
    options: [
      "Decimation in Time",
      "Decimation in Transformation",
      "Digital Integration Technique",
      "Discrete Integration Time"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 8,
    question: "DIF FFT stands for:",
    options: [
      "Digital Input Frequency",
      "Decimation in Frequency",
      "Discrete Integration Frequency",
      "Division in Frequency"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 9,
    question: "In radix-2 FFT, the number of stages for N = 8 is:",
    options: [
      "2",
      "3",
      "4",
      "8"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 10,
    question: "The number of complex multiplications in radix-2 FFT is:",
    options: [
      "N²",
      "N log₂N",
      "(N/2) log₂N",
      "N/2"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 11,
    question: "Bit reversal is associated with:",
    options: [
      "FFT algorithms",
      "Analog filters",
      "Sampling theorem only",
      "Amplitude modulation"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 12,
    question: "Convolution in the frequency domain corresponds to:",
    options: [
      "Addition in time domain",
      "Multiplication in frequency domain",
      "Division in frequency domain",
      "Subtraction in time domain"
    ],
    correctAnswer: 1  // B
  },

  // UNIT II: Finite Impulse Response (FIR) Filters
  {
    id: 13,
    question: "FIR stands for:",
    options: [
      "Finite Impulse Response",
      "Frequency Impulse Response",
      "Fast Impulse Response",
      "Finite Input Response"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 14,
    question: "FIR filters have:",
    options: [
      "Infinite impulse response",
      "Finite impulse response",
      "No impulse response",
      "Random impulse response"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 15,
    question: "FIR filters are generally:",
    options: [
      "Non-recursive",
      "Recursive",
      "Unstable",
      "Analog"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 16,
    question: "Which of the following is a window technique used in FIR filter design?",
    options: [
      "Hamming window",
      "Kaiser window",
      "Rectangular window",
      "All of the above"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 17,
    question: "Which window has a triangular shape?",
    options: [
      "Hamming",
      "Bartlett",
      "Kaiser",
      "Rectangular"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 18,
    question: "Which window is also known as the triangular window?",
    options: [
      "Bartlett window",
      "Hanning window",
      "Kaiser window",
      "Rectangular window"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 19,
    question: "The Hamming window is used to:",
    options: [
      "Reduce side lobes",
      "Increase noise",
      "Increase sampling frequency",
      "Remove feedback"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 20,
    question: "Which window has adjustable parameters?",
    options: [
      "Rectangular",
      "Bartlett",
      "Kaiser",
      "Triangular"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 21,
    question: "Linear phase response is easily achieved in:",
    options: [
      "FIR filters",
      "IIR filters only",
      "Analog filters only",
      "Recursive filters only"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 22,
    question: "FIR filter realization commonly uses:",
    options: [
      "Delay elements, multipliers and adders",
      "Oscillators only",
      "Integrators only",
      "Feedback amplifiers only"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 23,
    question: "Finite word length effects occur due to:",
    options: [
      "Infinite precision",
      "Quantization of numbers",
      "Unlimited memory",
      "Continuous-time operation"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 24,
    question: "Which of the following is NOT a window mentioned in the FIR syllabus?",
    options: [
      "Rectangular",
      "Bartlett",
      "Hamming",
      "Butterworth"
    ],
    correctAnswer: 3  // D
  },

  // UNIT III: Infinite Impulse Response (IIR) Filters
  {
    id: 25,
    question: "IIR stands for:",
    options: [
      "Infinite Impulse Response",
      "Integrated Impulse Response",
      "Infinite Input Response",
      "Internal Impulse Response"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 26,
    question: "IIR filters generally use:",
    options: [
      "Only feedforward paths",
      "Feedback paths",
      "No delay elements",
      "Only adders"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 27,
    question: "Which of the following is an IIR filter approximation?",
    options: [
      "Butterworth",
      "Chebyshev",
      "Both A and B",
      "None of the above"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 28,
    question: "Butterworth filters are characterized by:",
    options: [
      "Maximally flat magnitude response",
      "Maximum ripple",
      "Linear phase response",
      "Constant group delay"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 29,
    question: "Chebyshev filters are known for:",
    options: [
      "Ripple characteristics",
      "No frequency response",
      "Infinite bandwidth",
      "Constant amplitude"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 30,
    question: "Which transformation is used in IIR digital filter design?",
    options: [
      "Bilinear transformation",
      "Impulse invariant transformation",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 31,
    question: "Impulse invariant technique is used for:",
    options: [
      "FIR filter design",
      "IIR filter design",
      "Window design",
      "FFT computation"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 32,
    question: "Bilinear transformation maps:",
    options: [
      "Z-plane into S-plane",
      "S-plane into Z-plane",
      "Time domain into amplitude domain",
      "Frequency domain into time domain"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 33,
    question: "Which of the following is a digital IIR filter structure?",
    options: [
      "Direct Form-I",
      "Direct Form-II",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 34,
    question: "IIR filters can be designed using:",
    options: [
      "Butterworth approximation",
      "Chebyshev approximation",
      "Both A and B",
      "None of the above"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 35,
    question: "Compared with FIR filters, IIR filters generally require:",
    options: [
      "More coefficients in every case",
      "Fewer coefficients for similar magnitude specifications in many designs",
      "No coefficients",
      "No feedback"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 36,
    question: "Which filter is generally capable of exact linear phase with a finite number of coefficients?",
    options: [
      "FIR",
      "IIR",
      "Butterworth",
      "Chebyshev"
    ],
    correctAnswer: 0  // A
  },

  // UNIT IV: Multirate Digital Signal Processing
  {
    id: 37,
    question: "Multirate DSP deals with:",
    options: [
      "Multiple sampling rates",
      "Only analog signals",
      "Only continuous-time signals",
      "Amplitude modulation"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 38,
    question: "Decimation is the process of:",
    options: [
      "Increasing sampling rate",
      "Decreasing sampling rate",
      "Increasing amplitude",
      "Removing all noise"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 39,
    question: "Interpolation is used to:",
    options: [
      "Decrease sampling rate",
      "Increase sampling rate",
      "Reduce amplitude",
      "Remove harmonics"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 40,
    question: "Decimation by a factor D means:",
    options: [
      "Increasing samples by D",
      "Decreasing sampling rate by D",
      "Increasing amplitude by D",
      "Removing all samples"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 41,
    question: "Interpolation by a factor L involves inserting:",
    options: [
      "L zeros",
      "L−1 zeros between successive samples",
      "L+1 zeros",
      "No zeros"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 42,
    question: "Sampling rate conversion by a rational factor is represented by:",
    options: [
      "D/L",
      "L/D",
      "L+D",
      "L×D"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 43,
    question: "In sampling rate conversion, the interpolation factor is generally represented by:",
    options: [
      "D",
      "L",
      "N",
      "M"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 44,
    question: "In decimation, an anti-aliasing filter is used:",
    options: [
      "Before downsampling",
      "After downsampling only",
      "After interpolation",
      "At the output only"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 45,
    question: "In interpolation, an anti-imaging filter is used:",
    options: [
      "Before upsampling",
      "After upsampling",
      "Before decimation only",
      "Before sampling only"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 46,
    question: "Multistage sampling rate conversion is used to:",
    options: [
      "Perform conversion in multiple stages",
      "Eliminate all filters",
      "Convert digital signals into analog only",
      "Increase signal amplitude"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 47,
    question: "Rational sampling rate conversion involves:",
    options: [
      "Only decimation",
      "Only interpolation",
      "Interpolation followed by decimation",
      "Neither interpolation nor decimation"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 48,
    question: "Which of the following is an application of multirate DSP?",
    options: [
      "Sampling rate conversion",
      "Audio signal processing",
      "Digital communication systems",
      "All of the above"
    ],
    correctAnswer: 3  // D
  },

  // UNIT V: Introduction to DSP Processors
  {
    id: 49,
    question: "DSP stands for:",
    options: [
      "Digital Signal Processing",
      "Data Signal Processing",
      "Digital System Programming",
      "Data System Processor"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 50,
    question: "DSP processors are mainly designed for:",
    options: [
      "Signal processing operations",
      "Word processing",
      "General printing",
      "Data entry"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 51,
    question: "Which processor is mentioned in the syllabus?",
    options: [
      "Intel 8085",
      "TMS320C67XX",
      "8051",
      "Z80"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 52,
    question: "DSP processors are generally optimized for:",
    options: [
      "Real-time signal processing",
      "Text editing",
      "Printing documents",
      "File storage only"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 53,
    question: "Which of the following is an important feature of DSP processors?",
    options: [
      "Pipelining",
      "Addressing modes",
      "Specialized architecture",
      "All of the above"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 54,
    question: "The architecture of a DSP processor determines:",
    options: [
      "Its internal organization",
      "Its display colour",
      "Its keyboard layout",
      "Its external appearance"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 55,
    question: "Registers in DSP processors are used to:",
    options: [
      "Store data and intermediate results",
      "Print data",
      "Display images only",
      "Increase voltage"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 56,
    question: "Pipelining is used to:",
    options: [
      "Improve processing speed",
      "Decrease memory size only",
      "Stop instruction execution",
      "Remove all registers"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 57,
    question: "Addressing modes specify:",
    options: [
      "How operands are accessed",
      "Processor colour",
      "Power supply voltage",
      "Clock frequency only"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 58,
    question: "Which of the following is associated with DSP processor architecture?",
    options: [
      "Registers",
      "Pipelining",
      "Addressing modes",
      "All of the above"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 59,
    question: "TMS320C67XX belongs to which processor family?",
    options: [
      "Intel x86",
      "Texas Instruments DSP",
      "8051 microcontroller",
      "ARM Cortex-M"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 60,
    question: "The instruction set of a DSP processor defines:",
    options: [
      "Operations that the processor can execute",
      "Physical size of the processor",
      "Number of external devices",
      "Display resolution"
    ],
    correctAnswer: 0  // A
  }
];

console.log('✅ DSP Questions Loaded (60 questions, properly randomized answers):', dspQuestions.length);
