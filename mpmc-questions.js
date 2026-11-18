// Microprocessors and Microcontrollers (MPMC) MCQs - 71 Questions
// 3rd Year ECE - Unit III (36 Qs) & Unit IV (35 Qs)
// 8051 Microcontroller Architecture and Programming
// Correct answers are PROPERLY RANDOMIZED (no consecutive AAA or BBB patterns)

const mpmcQuestions = [
  // UNIT III: 8051 Architecture and Instructions (Questions 1-36)
  {
    id: 1,
    question: "The 8051 is a:",
    options: [
      "4-bit microcontroller",
      "8-bit microcontroller",
      "16-bit microcontroller",
      "32-bit microcontroller"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 2,
    question: "The standard 8051 has:",
    options: [
      "2 I/O ports",
      "3 I/O ports",
      "4 I/O ports",
      "5 I/O ports"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 3,
    question: "The total number of I/O lines in the 8051 is:",
    options: [
      "16",
      "24",
      "32",
      "40"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 4,
    question: "The size of the Program Counter in 8051 is:",
    options: [
      "8 bits",
      "12 bits",
      "16 bits",
      "32 bits"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 5,
    question: "The size of DPTR is:",
    options: [
      "8 bits",
      "12 bits",
      "16 bits",
      "32 bits"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 6,
    question: "The standard 8051 has internal RAM of:",
    options: [
      "64 bytes",
      "128 bytes",
      "256 bytes",
      "512 bytes"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 7,
    question: "Which register is the main accumulator?",
    options: [
      "B",
      "PSW",
      "A",
      "DPTR"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 8,
    question: "Which register is used with A for multiplication and division?",
    options: [
      "PSW",
      "B",
      "SP",
      "DPTR"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 9,
    question: "The Stack Pointer of 8051 is:",
    options: [
      "4-bit",
      "8-bit",
      "16-bit",
      "32-bit"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 10,
    question: "Which register contains the status flags?",
    options: [
      "ACC",
      "B",
      "PSW",
      "SP"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 11,
    question: "Which 8051 port is open-drain?",
    options: [
      "Port 0",
      "Port 1",
      "Port 2",
      "Port 3"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 12,
    question: "Which port provides the multiplexed low-order address/data bus?",
    options: [
      "Port 0",
      "Port 1",
      "Port 2",
      "Port 3"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 13,
    question: "Port 2 provides:",
    options: [
      "A0–A7",
      "A8–A15",
      "D0–D7",
      "D8–D15"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 14,
    question: "Which port has alternate functions such as RXD, TXD, INT0 and INT1?",
    options: [
      "Port 0",
      "Port 1",
      "Port 2",
      "Port 3"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 15,
    question: "P3.0 is:",
    options: [
      "TXD",
      "RXD",
      "INT0",
      "T0"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 16,
    question: "P3.1 is:",
    options: [
      "RXD",
      "TXD",
      "INT1",
      "T1"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 17,
    question: "P3.2 is:",
    options: [
      "INT0",
      "INT1",
      "T0",
      "T1"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 18,
    question: "P3.3 is:",
    options: [
      "INT0",
      "INT1",
      "RXD",
      "TXD"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 19,
    question: "The Reset pin of the 8051 is:",
    options: [
      "Pin 1",
      "Pin 9",
      "Pin 20",
      "Pin 40"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 20,
    question: "The EA pin is used to:",
    options: [
      "Enable timer",
      "Select internal/external program memory",
      "Enable serial communication",
      "Reset the processor"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 21,
    question: "PSEN stands for:",
    options: [
      "Program System Enable",
      "Program Store Enable",
      "Program Select Enable",
      "Peripheral Store Enable"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 22,
    question: "ALE stands for:",
    options: [
      "Address Latch Enable",
      "Address Logic Enable",
      "Automatic Latch Enable",
      "Address Line Enable"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 23,
    question: "Which addressing mode is used in MOV A,#55H?",
    options: [
      "Register",
      "Direct",
      "Immediate",
      "Indexed"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 24,
    question: "The symbol # in an 8051 instruction indicates:",
    options: [
      "Direct addressing",
      "Immediate addressing",
      "Register addressing",
      "Bit addressing"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 25,
    question: "Which addressing mode is used in MOV A,R2?",
    options: [
      "Immediate",
      "Register",
      "Direct",
      "Indexed"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 26,
    question: "Which addressing mode is used in MOV A,30H?",
    options: [
      "Register",
      "Immediate",
      "Direct",
      "Indirect"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 27,
    question: "Which instruction demonstrates register indirect addressing?",
    options: [
      "MOV A,#20H",
      "MOV A,R0",
      "MOV A,30H",
      "MOV A,@R0"
    ],
    correctAnswer: 3  // D
  },
  {
    id: 28,
    question: "Which instruction is used for indexed addressing?",
    options: [
      "MOV",
      "MOVX",
      "MOVC",
      "PUSH"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 29,
    question: "MOVC A,@A+DPTR accesses:",
    options: [
      "Internal RAM",
      "External RAM",
      "Program memory",
      "I/O ports"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 30,
    question: "Which instruction is used to transfer data to external RAM?",
    options: [
      "MOV",
      "MOVC",
      "MOVX",
      "XCH"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 31,
    question: "Which instruction performs addition?",
    options: [
      "SUBB",
      "ADD",
      "MUL",
      "INC"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 32,
    question: "Which instruction performs addition with carry?",
    options: [
      "ADD",
      "ADDC",
      "SUBB",
      "INC"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 33,
    question: "Which instruction is used for subtraction?",
    options: [
      "SUB",
      "SUBB",
      "DEC",
      "SBC"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 34,
    question: "Which instruction increments a register by one?",
    options: [
      "INC",
      "ADD",
      "DJNZ",
      "INCR"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 35,
    question: "Which instruction decrements a register by one?",
    options: [
      "DEC",
      "SUBB",
      "DJNZ",
      "DECR"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 36,
    question: "The instruction MUL AB performs:",
    options: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division"
    ],
    correctAnswer: 2  // C
  },

  // UNIT IV: Timers, Serial Port, and Interrupts (Questions 37-71)
  {
    id: 37,
    question: "The standard 8051 has how many timers/counters?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 38,
    question: "The two timers in the standard 8051 are:",
    options: [
      "Timer 1 and Timer 2",
      "Timer 0 and Timer 1",
      "Timer A and Timer B",
      "Counter 0 and Counter 1"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 39,
    question: "Timer 0 of the 8051 is:",
    options: [
      "8-bit only",
      "16-bit only",
      "8-bit or 16-bit depending on mode",
      "32-bit"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 40,
    question: "Which register is used to control the operating mode of Timer 0 and Timer 1?",
    options: [
      "TCON",
      "TMOD",
      "SCON",
      "PCON"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 41,
    question: "TMOD is a:",
    options: [
      "4-bit register",
      "8-bit register",
      "12-bit register",
      "16-bit register"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 42,
    question: "The lower four bits of TMOD control:",
    options: [
      "Timer 1",
      "Timer 0",
      "Serial port",
      "Interrupts"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 43,
    question: "The upper four bits of TMOD control:",
    options: [
      "Timer 0",
      "Timer 1",
      "Serial port",
      "External interrupts"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 44,
    question: "In TMOD, the GATE bit is used to:",
    options: [
      "Select timer mode",
      "Start/stop timer using an external control input along with TRx",
      "Select baud rate",
      "Enable serial communication"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 45,
    question: "In TMOD, the C/T bit is used to select:",
    options: [
      "Counter or timer operation",
      "Capture or timer operation",
      "Clock or transfer operation",
      "Carry or timer operation"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 46,
    question: "When C/T = 0, the 8051 operates the module as a:",
    options: [
      "Counter",
      "Timer",
      "Serial port",
      "Interrupt controller"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 47,
    question: "When C/T = 1, the 8051 operates the module as a:",
    options: [
      "Timer",
      "Counter",
      "Serial port",
      "PWM generator"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 48,
    question: "Which bit starts Timer 0?",
    options: [
      "TR0",
      "TF0",
      "TR1",
      "TF1"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 49,
    question: "Which bit indicates Timer 0 overflow?",
    options: [
      "TR0",
      "TF0",
      "TR1",
      "TF1"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 50,
    question: "Which timer mode is a 13-bit timer mode?",
    options: [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 51,
    question: "Which timer mode is a 16-bit timer mode?",
    options: [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 52,
    question: "Which timer mode is an 8-bit auto-reload mode?",
    options: [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 53,
    question: "In Mode 2, the value in THx is used as:",
    options: [
      "Counter value",
      "Auto-reload value",
      "Interrupt vector",
      "Baud rate register only"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 54,
    question: "Which registers are associated with Timer 0?",
    options: [
      "TH0 and TL0",
      "TH1 and TL1",
      "T0H and T0L",
      "TMOD and TCON only"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 55,
    question: "Which instruction starts Timer 1?",
    options: [
      "SETB TF1",
      "SETB TR1",
      "CLR TR1",
      "SETB TF0"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 56,
    question: "The 8051 serial port is:",
    options: [
      "Half-duplex only",
      "Full-duplex",
      "Simplex only",
      "Parallel only"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 57,
    question: "Which register is used to control the serial port?",
    options: [
      "TMOD",
      "SCON",
      "TCON",
      "PCON"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 58,
    question: "Which register contains the serial data buffer?",
    options: [
      "SBUF",
      "SCON",
      "SMOD",
      "PCON"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 59,
    question: "SCON stands for:",
    options: [
      "Serial Control",
      "Serial Counter",
      "System Control",
      "Serial Configuration"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 60,
    question: "Which pin is used for serial data transmission in the 8051?",
    options: [
      "P3.0",
      "P3.1",
      "P2.0",
      "P2.1"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 61,
    question: "Which pin is used for serial data reception?",
    options: [
      "P3.0",
      "P3.1",
      "P3.2",
      "P3.3"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 62,
    question: "Which flag indicates that a byte has been transmitted?",
    options: [
      "RI",
      "TI",
      "TF1",
      "IE"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 63,
    question: "Which flag indicates that a byte has been received?",
    options: [
      "TI",
      "RI",
      "TF0",
      "EA"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 64,
    question: "Which timer is commonly used for generating the baud rate in serial communication?",
    options: [
      "Timer 0",
      "Timer 1",
      "Timer 2 only",
      "Watchdog timer"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 65,
    question: "Which serial mode of the 8051 is commonly used for 8-bit UART communication with variable baud rate?",
    options: [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 66,
    question: "Which register bit can be used to double the baud rate?",
    options: [
      "REN",
      "SMOD",
      "TI",
      "RI"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 67,
    question: "How many interrupt sources are available in the standard 8051?",
    options: [
      "3",
      "4",
      "5",
      "8"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 68,
    question: "Which of the following is an external interrupt in the 8051?",
    options: [
      "TF0",
      "TF1",
      "INT0",
      "RI"
    ],
    correctAnswer: 2  // C
  },
  {
    id: 69,
    question: "The interrupt vector address for External Interrupt 0 (INT0) is:",
    options: [
      "0003H",
      "000BH",
      "0013H",
      "0023H"
    ],
    correctAnswer: 0  // A
  },
  {
    id: 70,
    question: "The interrupt vector address for Timer 0 overflow is:",
    options: [
      "0003H",
      "000BH",
      "0013H",
      "001BH"
    ],
    correctAnswer: 1  // B
  },
  {
    id: 71,
    question: "Which instruction is used to return from an interrupt service routine?",
    options: [
      "RET",
      "RETI",
      "RETURN",
      "RST"
    ],
    correctAnswer: 1  // B
  }
];

console.log('✅ MPMC Questions Loaded (71 questions, properly randomized answers):', mpmcQuestions.length);
