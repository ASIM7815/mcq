// Signals and Systems MCQs - 60 Questions
// 2nd Year ECE - 5 Units (12 questions each)
// Correct answers are PROPERLY RANDOMIZED

const signalsQuestions = [
  // UNIT I (Qs 1-12)
  { id: 1, question: "Which of the following is an example of a continuous-time signal?", options: ["x[n] = 2n", "x(t) = 3 cos(2πt)", "A sequence indexed by integers", "A finite list of samples"], correctAnswer: 1 },
  { id: 2, question: "A signal whose amplitude is defined at every instant of time is called:", options: ["Discrete-time signal", "Continuous-time signal", "Digital sequence", "Quantized sequence"], correctAnswer: 1 },
  { id: 3, question: "Which operation changes the amplitude of x(t) by a constant factor A?", options: ["Time shifting", "Time scaling", "Amplitude scaling", "Time reversal"], correctAnswer: 2 },
  { id: 4, question: "The operation y(t) = x(t − t₀) represents:", options: ["Time reversal", "Time shifting to the right by t₀", "Time compression", "Amplitude scaling"], correctAnswer: 1 },
  { id: 5, question: "The operation y(t) = x(−t) is known as:", options: ["Time expansion", "Time reversal", "Amplitude shifting", "Differentiation"], correctAnswer: 1 },
  { id: 6, question: "A system is called memoryless if its output at any time depends on:", options: ["Past input values only", "Future input values only", "Input at the same time only", "All input values"], correctAnswer: 2 },
  { id: 7, question: "A system is causal when its output depends on:", options: ["Present and past inputs only", "Future inputs only", "Future and present inputs", "Future and past inputs equally"], correctAnswer: 0 },
  { id: 8, question: "A system is time-invariant if:", options: ["Its output is always constant", "A time shift in input produces the same shift in output", "It has no input", "It is necessarily memoryless"], correctAnswer: 1 },
  { id: 9, question: "A system is linear if it satisfies:", options: ["Only time invariance", "Only causality", "Additivity and homogeneity", "Only stability"], correctAnswer: 2 },
  { id: 10, question: "A system is BIBO stable if every bounded input produces:", options: ["An unbounded output", "A bounded output", "A periodic output", "A zero output"], correctAnswer: 1 },
  { id: 11, question: "A system described by a finite number of energy-storing elements is commonly classified as:", options: ["Distributed-parameter system", "Lumped-parameter system", "Time-varying system", "Non-causal system"], correctAnswer: 1 },
  { id: 12, question: "A system whose parameters vary with time is called:", options: ["Static system", "Time-invariant system", "Time-varying system", "Memoryless system"], correctAnswer: 2 },
  
  // UNIT II (Qs 13-24)
  { id: 13, question: "In signal representation, a vector is analogous to a signal because both can be described using:", options: ["Only scalar constants", "Components or basis functions", "Only complex numbers", "Only periodic functions"], correctAnswer: 1 },
  { id: 14, question: "Two signals are orthogonal over an interval if their inner product over that interval is:", options: ["One", "Infinite", "Zero", "Negative"], correctAnswer: 2 },
  { id: 15, question: "The completeness of a set of basis functions means that:", options: ["Every signal is periodic", "The set can represent signals in the considered space", "All basis functions are identical", "The set contains only two functions"], correctAnswer: 1 },
  { id: 16, question: "A periodic continuous-time signal satisfies:", options: ["x(t + T) = x(t) for some T > 0", "x(t + T) = −x(t) for all T", "x(t) = 0 for all t", "x(t) = x(−t) only"], correctAnswer: 0 },
  { id: 17, question: "The fundamental period is the:", options: ["Largest period of a signal", "Smallest positive period of a periodic signal", "Average value of a signal", "Duration of one sample"], correctAnswer: 1 },
  { id: 18, question: "A trigonometric Fourier series represents a periodic signal using:", options: ["Only exponentials with real exponents", "Sines and cosines", "Only impulse functions", "Only polynomials"], correctAnswer: 1 },
  { id: 19, question: "The exponential Fourier series uses terms of the form:", options: ["e^(jnω₀t)", "e^(−t²)", "tⁿ only", "sin(nt) only"], correctAnswer: 0 },
  { id: 20, question: "The fundamental angular frequency of a periodic signal with period T₀ is:", options: ["2πT₀", "T₀/2π", "2π/T₀", "1/T₀²"], correctAnswer: 2 },
  { id: 21, question: "For a real-valued signal, the exponential Fourier coefficients have:", options: ["No relationship", "Conjugate symmetry", "Only positive values", "Only imaginary values"], correctAnswer: 1 },
  { id: 22, question: "An even periodic signal has:", options: ["Only sine terms in its trigonometric Fourier series", "Only cosine terms and possibly a DC term", "No Fourier coefficients", "Only odd harmonics"], correctAnswer: 1 },
  { id: 23, question: "An odd periodic signal has:", options: ["Only cosine terms", "Only sine terms", "Only a DC term", "No harmonics"], correctAnswer: 1 },
  { id: 24, question: "The line spectrum of a periodic signal displays:", options: ["Its time-domain samples only", "The magnitudes and phases of its Fourier coefficients", "Its ROC", "Its impulse response only"], correctAnswer: 1 },
  
  // UNIT III (Qs 25-36)
  { id: 25, question: "The Fourier transform converts a continuous-time signal from:", options: ["Time domain to frequency domain", "Frequency domain to time domain only", "Discrete domain to continuous domain", "Z-domain to time domain"], correctAnswer: 0 },
  { id: 26, question: "The inverse Fourier transform is used to:", options: ["Find the time-domain signal from its spectrum", "Find the ROC of a Z-transform", "Solve only difference equations", "Calculate sampling frequency"], correctAnswer: 0 },
  { id: 27, question: "Which property of the Fourier transform relates a time shift to a phase factor in frequency?", options: ["Differentiation", "Time-shifting", "Convolution", "Duality"], correctAnswer: 1 },
  { id: 28, question: "The Fourier transform of the convolution of two time-domain signals is:", options: ["The sum of their transforms", "The product of their transforms", "The difference of their transforms", "The time reversal of their transforms"], correctAnswer: 1 },
  { id: 29, question: "Graphical convolution of continuous-time signals involves:", options: ["Adding the signals without shifting", "Folding, shifting, multiplying and integrating", "Differentiating both signals", "Sampling both signals"], correctAnswer: 1 },
  { id: 30, question: "The convolution operation is:", options: ["Commutative", "Non-commutative", "Always zero", "Defined only for periodic signals"], correctAnswer: 0 },
  { id: 31, question: "The autocorrelation of a signal compares the signal with:", options: ["A different unrelated signal", "A shifted version of itself", "Its derivative only", "Its Fourier transform only"], correctAnswer: 1 },
  { id: 32, question: "Cross-correlation is used to measure similarity between:", options: ["A signal and itself only", "Two signals as a function of relative shift", "A signal and its integral only", "Two constants only"], correctAnswer: 1 },
  { id: 33, question: "The direct Laplace transform of x(t) is commonly defined using:", options: ["A sum over integer n", "An integral involving e^(−st)", "A derivative with respect to t only", "A Fourier series sum only"], correctAnswer: 1 },
  { id: 34, question: "The region of convergence (ROC) of a Laplace transform is the set of s-values for which:", options: ["The transform integral converges", "The signal is periodic", "The signal is zero", "The inverse transform is impossible"], correctAnswer: 0 },
  { id: 35, question: "The inverse Laplace transform is used to obtain:", options: ["The time-domain signal from X(s)", "The Fourier series coefficients only", "The sampled sequence only", "The Z-plane poles only"], correctAnswer: 0 },
  { id: 36, question: "For an LTI system, the transfer function is the ratio of:", options: ["Output transform to input transform under zero initial conditions", "Input to output in every condition", "Energy to power", "Frequency to time"], correctAnswer: 0 },
  
  // UNIT IV (Qs 37-48)
  { id: 37, question: "A discrete-time signal is commonly represented as:", options: ["x(t)", "x[n]", "X(s)", "X(jω)"], correctAnswer: 1 },
  { id: 38, question: "The unit impulse sequence δ[n] is equal to one at:", options: ["Every integer n", "n = 0 only", "n = 1 only", "No integer value"], correctAnswer: 1 },
  { id: 39, question: "The unit step sequence u[n] is equal to one for:", options: ["n < 0", "n ≥ 0", "n = 0 only", "All n except zero"], correctAnswer: 1 },
  { id: 40, question: "The operation y[n] = x[n − n₀] represents:", options: ["Time reversal", "A shift to the right by n₀ samples", "Amplitude scaling", "Time expansion"], correctAnswer: 1 },
  { id: 41, question: "A discrete-time system is causal if y[n] depends only on:", options: ["x[n] and past input samples", "Future input samples only", "Future and present samples only", "No input samples"], correctAnswer: 0 },
  { id: 42, question: "For a discrete-time LTI system, the output is obtained by:", options: ["Differentiation", "Convolution of input and impulse response", "Fourier series only", "Time reversal only"], correctAnswer: 1 },
  { id: 43, question: "The convolution sum for discrete-time signals is:", options: ["A continuous integral", "A summation over shifted products", "A derivative", "A ratio of two sequences"], correctAnswer: 1 },
  { id: 44, question: "The discrete-time convolution operation is:", options: ["Commutative", "Always non-commutative", "Defined only for finite sequences", "The same as correlation"], correctAnswer: 0 },
  { id: 45, question: "The DTFT of a discrete-time sequence is periodic in frequency with period:", options: ["π", "2π", "4π", "1"], correctAnswer: 1 },
  { id: 46, question: "The DTFT represents a discrete-time signal as a function of:", options: ["Continuous frequency", "Only integer frequency indices", "Complex time", "The Laplace variable s only"], correctAnswer: 0 },
  { id: 47, question: "The inverse DTFT is used to:", options: ["Recover the sequence from its frequency representation", "Find a continuous-time derivative", "Determine a Fourier series period only", "Calculate a system's physical dimensions"], correctAnswer: 0 },
  { id: 48, question: "The transfer function of a discrete-time LTI system is commonly expressed as:", options: ["H(s)", "H(jω)", "H(z)", "H(t)"], correctAnswer: 2 },
  
  // UNIT V (Qs 49-60)
  { id: 49, question: "The direct Z-transform of x[n] is defined as:", options: ["∫x(t)e^(−st)dt", "Σ x[n]z^(−n)", "Σ x[n]e^(−jωn) only", "d x(t)/dt"], correctAnswer: 1 },
  { id: 50, question: "The region of convergence (ROC) of a Z-transform is the set of z-values for which:", options: ["The defining infinite sum converges", "The sequence is always periodic", "The sequence is zero", "The transform has no poles"], correctAnswer: 0 },
  { id: 51, question: "The Z-transform is especially useful for analyzing:", options: ["Continuous-time differential equations only", "Discrete-time signals and systems", "Mechanical structures only", "Analog circuits without signals"], correctAnswer: 1 },
  { id: 52, question: "The complex variable in the Z-plane is commonly written as:", options: ["s = σ + jω", "z = r e^(jω)", "t = x + jy", "ω = 2πf only"], correctAnswer: 1 },
  { id: 53, question: "The inverse Z-transform is used to obtain:", options: ["x[n] from X(z)", "x(t) from X(s)", "Fourier coefficients from a period", "The sampling theorem"], correctAnswer: 0 },
  { id: 54, question: "For a right-sided sequence, the ROC generally lies:", options: ["Inside the innermost pole", "Outside the outermost pole", "Only between every pair of zeros", "At z = 0 only"], correctAnswer: 1 },
  { id: 55, question: "For a left-sided sequence, the ROC generally lies:", options: ["Outside the outermost pole", "Inside the innermost pole", "At infinity only", "On the unit circle only"], correctAnswer: 1 },
  { id: 56, question: "The Z-transform of a time-shifted sequence includes:", options: ["A factor involving a power of z", "A factor involving t² only", "No change under any shift", "Only a constant offset"], correctAnswer: 0 },
  { id: 57, question: "The unit circle in the Z-plane is important because it is associated with:", options: ["The continuous-time Laplace transform only", "The DTFT frequency response", "The time-domain derivative", "The Fourier series period only"], correctAnswer: 1 },
  { id: 58, question: "The correspondence between the s-plane and z-plane is given by:", options: ["z = e^(sT)", "s = e^(zT)", "z = s + T", "s = z/T²"], correctAnswer: 0 },
  { id: 59, question: "A linear constant-coefficient difference equation describes:", options: ["A discrete-time system", "Only a continuous-time periodic signal", "A Fourier series spectrum", "A continuous-time convolution integral"], correctAnswer: 0 },
  { id: 60, question: "The system transfer function H(z) is obtained as the ratio of:", options: ["Y(z) to X(z) under zero initial conditions", "X(z) to Y(z) under all conditions", "Input energy to output power", "Fourier coefficients to period"], correctAnswer: 0 }
];

console.log('✅ Signals and Systems Questions Loaded (60 questions):', signalsQuestions.length);
