// Software Engineering MCQs - 100 Questions
// Unit III: Building the Analysis Model and Design Engineering (50 Questions)
// Unit IV: Architectural Design, User Interface Design and Risk Management (50 Questions)

const seQuestions = [
  // UNIT III – Building the Analysis Model and Design Engineering (50 Questions)
  {
    id: 1,
    question: "What is the primary objective of requirements analysis?",
    options: [
      "To write program code",
      "To understand and define what the system must do",
      "To test the completed software",
      "To deploy the application"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is a major activity in requirements analysis?",
    options: [
      "Requirement elicitation",
      "Code compilation",
      "Software installation",
      "Database backup"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Requirements analysis primarily focuses on:",
    options: [
      "How to implement the system",
      "What the system should accomplish",
      "Which programming language to use",
      "How to maintain hardware"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which model represents the data objects and their relationships?",
    options: [
      "Data model",
      "Network model",
      "Deployment model",
      "Testing model"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which of the following is used to represent the flow of data through a system?",
    options: [
      "Class diagram",
      "Data Flow Diagram",
      "State diagram",
      "Deployment diagram"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "DFD stands for:",
    options: [
      "Data File Design",
      "Data Flow Diagram",
      "Design Function Diagram",
      "Digital Flow Development"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "In a Data Flow Diagram, a rectangle generally represents:",
    options: [
      "Data store",
      "External entity",
      "Data flow",
      "Process"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "In a DFD, a circle or rounded rectangle generally represents:",
    options: [
      "Process",
      "Data store",
      "External entity",
      "Data flow"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Which of the following represents stored data in a DFD?",
    options: [
      "Arrow",
      "Data store",
      "Process",
      "External entity"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What does an arrow represent in a DFD?",
    options: [
      "Data flow",
      "Data storage",
      "System boundary",
      "User interface"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "What is the main purpose of a context-level DFD?",
    options: [
      "To describe internal algorithms",
      "To represent the entire system as a single process and its interactions",
      "To show database tables",
      "To represent source code"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which modeling approach focuses on objects and their relationships?",
    options: [
      "Object-oriented analysis",
      "Structured programming",
      "Procedural testing",
      "Network analysis"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "UML stands for:",
    options: [
      "Unified Modeling Language",
      "Universal Machine Language",
      "Unified Management Logic",
      "User Modeling Language"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "Which UML diagram represents the static structure of a system?",
    options: [
      "Sequence diagram",
      "Class diagram",
      "Activity diagram",
      "State diagram"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "A class in object-oriented modeling contains:",
    options: [
      "Only data",
      "Attributes and operations",
      "Only functions",
      "Only relationships"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "What is an object?",
    options: [
      "An instance of a class",
      "A database query",
      "A programming language",
      "A software testing technique"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "Which relationship represents inheritance in object-oriented modeling?",
    options: [
      "Association",
      "Generalization",
      "Dependency",
      "Aggregation"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Encapsulation refers to:",
    options: [
      "Hiding internal data and combining data with methods",
      "Creating multiple objects",
      "Dividing a program into files",
      "Executing multiple processes"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "Polymorphism means:",
    options: [
      "One interface with multiple forms of implementation",
      "Hiding all classes",
      "Storing data permanently",
      "Removing inheritance"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Which modeling approach represents system functionality through user interactions?",
    options: [
      "Scenario-based modeling",
      "Data modeling",
      "Network modeling",
      "Hardware modeling"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "A use-case diagram primarily describes:",
    options: [
      "Database structure",
      "Functional interactions between actors and the system",
      "Source code structure",
      "Hardware components"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "In a use-case diagram, an actor represents:",
    options: [
      "A system user or external entity interacting with the system",
      "A database table",
      "A software function only",
      "An internal variable"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "What is a use case?",
    options: [
      "A description of interaction to achieve a system goal",
      "A programming statement",
      "A database index",
      "A testing tool"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "Which diagram shows the sequence of interactions between objects over time?",
    options: [
      "Class diagram",
      "Sequence diagram",
      "Component diagram",
      "Deployment diagram"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "Which model describes the dynamic behavior of a system?",
    options: [
      "Behavioral model",
      "Data model",
      "Structural model",
      "Database model"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "An activity diagram is mainly used to represent:",
    options: [
      "Workflow and control flow",
      "Database relationships",
      "Hardware architecture",
      "Source code size"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: "Which diagram represents different states of an object and transitions between them?",
    options: [
      "Class diagram",
      "State diagram",
      "Component diagram",
      "Package diagram"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "What is the purpose of scenario-based modeling?",
    options: [
      "To describe system behavior through user scenarios",
      "To design hardware",
      "To calculate software cost only",
      "To compile source code"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "What is the primary purpose of data modeling?",
    options: [
      "To describe data objects, attributes and relationships",
      "To design user interfaces only",
      "To identify programming errors",
      "To allocate CPU time"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "Which of the following is an example of a data object in a library management system?",
    options: [
      "Book",
      "Compiler",
      "Operating system",
      "Keyboard"
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "What is the main purpose of design engineering?",
    options: [
      "Transforming the analysis model into a design representation",
      "Writing only test cases",
      "Installing the software",
      "Collecting user feedback after deployment"
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "Software design primarily describes:",
    options: [
      "How the system will be implemented",
      "Only what the user wants",
      "Only the cost of the project",
      "Only the testing schedule"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "Which of the following is a major software design concept?",
    options: [
      "Abstraction",
      "Compilation",
      "Debugging",
      "Execution"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "Abstraction means:",
    options: [
      "Representing essential features while hiding unnecessary details",
      "Removing all system functionality",
      "Increasing program complexity",
      "Writing code without planning"
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: "Modularity refers to:",
    options: [
      "Dividing software into manageable components",
      "Combining all code into one function",
      "Removing system documentation",
      "Eliminating software testing"
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: "What is information hiding?",
    options: [
      "Hiding internal implementation details of a module",
      "Hiding software from users",
      "Deleting source code",
      "Encrypting all database records"
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "Cohesion measures:",
    options: [
      "The degree to which elements within a module are related",
      "Dependencies between different modules",
      "Number of software developers",
      "Number of test cases"
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "Which type of cohesion is generally considered the strongest?",
    options: [
      "Coincidental cohesion",
      "Logical cohesion",
      "Functional cohesion",
      "Temporal cohesion"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    question: "Coupling measures:",
    options: [
      "Dependency between software modules",
      "Internal relationship within a module",
      "Software reliability",
      "Number of classes"
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: "Which type of coupling is generally preferred?",
    options: [
      "Content coupling",
      "Common coupling",
      "Data coupling",
      "Control coupling"
    ],
    correctAnswer: 2
  },
  {
    id: 41,
    question: "A good software design should have:",
    options: [
      "High coupling and low cohesion",
      "Low coupling and high cohesion",
      "High coupling and high complexity",
      "Low cohesion and high complexity"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "What is a design pattern?",
    options: [
      "A reusable solution to a commonly occurring design problem",
      "A programming error",
      "A software testing report",
      "A database backup method"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "Which design pattern ensures that a class has only one instance?",
    options: [
      "Factory",
      "Singleton",
      "Observer",
      "Adapter"
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "Which design pattern provides an interface for creating objects?",
    options: [
      "Factory Method",
      "Observer",
      "Decorator",
      "Strategy"
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: "The Observer design pattern is used when:",
    options: [
      "One object needs to notify multiple dependent objects about changes",
      "Only one object can exist",
      "A class must be inherited",
      "Data must be permanently deleted"
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "What is the primary advantage of using design patterns?",
    options: [
      "They provide reusable and proven design solutions",
      "They eliminate the need for coding",
      "They guarantee zero defects",
      "They remove the need for testing"
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "Which design principle encourages software entities to be open for extension but closed for modification?",
    options: [
      "Single Responsibility Principle",
      "Open-Closed Principle",
      "Dependency Inversion Principle",
      "Interface Segregation Principle"
    ],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "The Single Responsibility Principle states that:",
    options: [
      "A class should have one main reason to change",
      "A class should perform all system operations",
      "Every class must inherit from another class",
      "Every method must contain multiple responsibilities"
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "What is design quality?",
    options: [
      "The degree to which a design satisfies functional and non-functional requirements",
      "The number of lines of code",
      "The number of programmers",
      "The size of the source file"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "Which of the following improves software design quality?",
    options: [
      "High coupling",
      "Poor modularity",
      "Low coupling and high cohesion",
      "Unnecessary complexity"
    ],
    correctAnswer: 2
  },

  // UNIT IV – Architectural Design, User Interface Design and Risk Management (50 Questions)
  {
    id: 51,
    question: "What is software architecture?",
    options: [
      "The detailed source code of a program",
      "The overall structure of a software system and its components",
      "A testing document",
      "A database backup"
    ],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "The primary purpose of software architecture is to:",
    options: [
      "Define system structure and component interactions",
      "Write test cases",
      "Compile the application",
      "Design hardware circuits"
    ],
    correctAnswer: 0
  },
  {
    id: 53,
    question: "Which of the following is a common architectural style?",
    options: [
      "Layered architecture",
      "Circular scheduling",
      "Binary search",
      "Linear programming"
    ],
    correctAnswer: 0
  },
  {
    id: 54,
    question: "In layered architecture, the system is divided into:",
    options: [
      "Independent layers with specific responsibilities",
      "Random functions",
      "Hardware registers",
      "Disk sectors"
    ],
    correctAnswer: 0
  },
  {
    id: 55,
    question: "Which architectural style is commonly used in web applications?",
    options: [
      "Client-server architecture",
      "Single-register architecture",
      "Random architecture",
      "Flat memory architecture"
    ],
    correctAnswer: 0
  },
  {
    id: 56,
    question: "In client-server architecture, the client:",
    options: [
      "Requests services from the server",
      "Always controls the server hardware",
      "Stores all network data permanently",
      "Performs no processing"
    ],
    correctAnswer: 0
  },
  {
    id: 57,
    question: "What is the main advantage of layered architecture?",
    options: [
      "Better separation of concerns",
      "Elimination of all communication",
      "No need for maintenance",
      "No system testing required"
    ],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "Which architectural style organizes the system around independent services?",
    options: [
      "Service-oriented architecture",
      "Monolithic architecture only",
      "Sequential architecture",
      "Flat architecture"
    ],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "What is a component in software architecture?",
    options: [
      "A modular and replaceable part of a system",
      "A user password",
      "A hardware cable",
      "A test report"
    ],
    correctAnswer: 0
  },
  {
    id: 60,
    question: "What is data design?",
    options: [
      "Transforming the analysis data model into implementation-level data structures",
      "Designing only screen layouts",
      "Preparing test schedules",
      "Managing software risks"
    ],
    correctAnswer: 0
  },
  {
    id: 61,
    question: "What is the primary purpose of database design?",
    options: [
      "Organizing data for efficient storage and retrieval",
      "Increasing CPU frequency",
      "Designing network cables",
      "Creating user passwords only"
    ],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "Which of the following is a database design concept?",
    options: [
      "Normalization",
      "Compilation",
      "Debugging",
      "Scheduling"
    ],
    correctAnswer: 0
  },
  {
    id: 63,
    question: "Database normalization is used to:",
    options: [
      "Reduce data redundancy and improve data integrity",
      "Increase duplicate records",
      "Delete all relationships",
      "Increase hardware requirements"
    ],
    correctAnswer: 0
  },
  {
    id: 64,
    question: "Which architectural pattern separates presentation, business logic and data access?",
    options: [
      "Three-tier architecture",
      "Peer-to-peer architecture only",
      "Circular architecture",
      "Random architecture"
    ],
    correctAnswer: 0
  },
  {
    id: 65,
    question: "What is interface design in software engineering?",
    options: [
      "Designing interactions between users and the system",
      "Designing only hardware connections",
      "Writing database queries",
      "Testing processor speed"
    ],
    correctAnswer: 0
  },
  {
    id: 66,
    question: "Which of the following is a golden rule of user interface design?",
    options: [
      "Place the user in control",
      "Make the interface unpredictable",
      "Increase unnecessary complexity",
      "Avoid consistency"
    ],
    correctAnswer: 0
  },
  {
    id: 67,
    question: "Which is an important principle of good user interface design?",
    options: [
      "Consistency",
      "Unpredictability",
      "Complexity",
      "Ambiguity"
    ],
    correctAnswer: 0
  },
  {
    id: 68,
    question: "What does user feedback mean in UI design?",
    options: [
      "Providing information about the result of user actions",
      "Preventing users from interacting",
      "Hiding all system messages",
      "Removing error messages"
    ],
    correctAnswer: 0
  },
  {
    id: 69,
    question: "Which of the following improves interface usability?",
    options: [
      "Clear navigation",
      "Complicated menus",
      "Inconsistent buttons",
      "Unclear instructions"
    ],
    correctAnswer: 0
  },
  {
    id: 70,
    question: "What is the purpose of interface analysis?",
    options: [
      "Understanding users, tasks and the operating environment",
      "Calculating processor speed",
      "Selecting disk scheduling algorithms",
      "Writing source code directly"
    ],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "Which factor is important during user interface design?",
    options: [
      "User characteristics",
      "Only programming language",
      "Only hardware cost",
      "Number of developers"
    ],
    correctAnswer: 0
  },
  {
    id: 72,
    question: "What is a prototype in UI design?",
    options: [
      "An early representation of the interface",
      "A completed database",
      "A final executable program only",
      "A software failure report"
    ],
    correctAnswer: 0
  },
  {
    id: 73,
    question: "What is the main purpose of interface prototyping?",
    options: [
      "To evaluate and improve the interface before final implementation",
      "To eliminate user involvement",
      "To replace all testing",
      "To increase system complexity"
    ],
    correctAnswer: 0
  },
  {
    id: 74,
    question: "Which of the following is a usability attribute?",
    options: [
      "Learnability",
      "Disk capacity",
      "CPU frequency",
      "Network bandwidth only"
    ],
    correctAnswer: 0
  },
  {
    id: 75,
    question: "What is user-centered design?",
    options: [
      "Designing the system based on user needs and characteristics",
      "Designing only for developers",
      "Designing without user feedback",
      "Designing only for hardware requirements"
    ],
    correctAnswer: 0
  },
  {
    id: 76,
    question: "What is an error message in a user interface intended to do?",
    options: [
      "Explain the problem and guide the user toward correction",
      "Hide system failures",
      "Terminate all processes",
      "Prevent further user interaction permanently"
    ],
    correctAnswer: 0
  },
  {
    id: 77,
    question: "What is the purpose of consistency in UI design?",
    options: [
      "To make similar operations behave in similar ways",
      "To make every screen different",
      "To remove navigation",
      "To increase user confusion"
    ],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "Which of the following is an example of a UI design evaluation technique?",
    options: [
      "Usability testing",
      "Disk formatting",
      "Code compilation",
      "CPU scheduling"
    ],
    correctAnswer: 0
  },
  {
    id: 79,
    question: "What is risk management in software engineering?",
    options: [
      "Identifying, analyzing and controlling project risks",
      "Removing all software requirements",
      "Writing source code",
      "Designing databases only"
    ],
    correctAnswer: 0
  },
  {
    id: 80,
    question: "Which of the following is a software project risk?",
    options: [
      "Key developer leaving the project",
      "Successful software delivery",
      "Improved productivity",
      "Completed documentation"
    ],
    correctAnswer: 0
  },
  {
    id: 81,
    question: "Risk identification involves:",
    options: [
      "Finding possible risks that may affect the project",
      "Writing final code",
      "Installing software",
      "Executing test cases only"
    ],
    correctAnswer: 0
  },
  {
    id: 82,
    question: "What is risk projection?",
    options: [
      "Estimating the probability and impact of identified risks",
      "Eliminating all project requirements",
      "Designing the user interface",
      "Creating database tables"
    ],
    correctAnswer: 0
  },
  {
    id: 83,
    question: "Which of the following is a risk management strategy?",
    options: [
      "Risk avoidance",
      "Risk creation",
      "Risk multiplication",
      "Risk ignoring"
    ],
    correctAnswer: 0
  },
  {
    id: 84,
    question: "What is risk mitigation?",
    options: [
      "Taking actions to reduce the probability or impact of a risk",
      "Increasing project uncertainty",
      "Ignoring possible failures",
      "Deleting project documentation"
    ],
    correctAnswer: 0
  },
  {
    id: 85,
    question: "What is a risk contingency plan?",
    options: [
      "A backup plan to follow if a risk occurs",
      "A software design diagram",
      "A programming language",
      "A database structure"
    ],
    correctAnswer: 0
  },
  {
    id: 86,
    question: "Which of the following is an example of a technical risk?",
    options: [
      "Technology not meeting performance requirements",
      "Employee salary changes",
      "Office relocation",
      "Marketing delay"
    ],
    correctAnswer: 0
  },
  {
    id: 87,
    question: "Which of the following is an example of a project risk?",
    options: [
      "Unrealistic project schedule",
      "Incorrect algorithm syntax only",
      "Database normalization",
      "Interface consistency"
    ],
    correctAnswer: 0
  },
  {
    id: 88,
    question: "What is risk refinement?",
    options: [
      "Breaking a risk into more detailed and understandable elements",
      "Deleting all risks",
      "Increasing project cost",
      "Completing software testing"
    ],
    correctAnswer: 0
  },
  {
    id: 89,
    question: "What is the Risk Mitigation, Monitoring and Management (RMMM) plan?",
    options: [
      "A plan for reducing, tracking and managing identified risks",
      "A software coding standard",
      "A database recovery method",
      "A user interface design tool"
    ],
    correctAnswer: 0
  },
  {
    id: 90,
    question: "In an RMMM plan, mitigation refers to:",
    options: [
      "Actions taken to reduce risk",
      "Tracking risk indicators only",
      "Managing a risk after it occurs only",
      "Ignoring the risk"
    ],
    correctAnswer: 0
  },
  {
    id: 91,
    question: "In an RMMM plan, monitoring means:",
    options: [
      "Tracking identified risks and their indicators",
      "Deleting project files",
      "Writing source code",
      "Designing the database"
    ],
    correctAnswer: 0
  },
  {
    id: 92,
    question: "In an RMMM plan, management refers to:",
    options: [
      "Actions taken when a risk becomes a reality",
      "Only identifying risks",
      "Only preparing requirements",
      "Only testing the interface"
    ],
    correctAnswer: 0
  },
  {
    id: 93,
    question: "Risk exposure is calculated using:",
    options: [
      "Probability of risk × Potential loss",
      "Cost + Time",
      "Quality × Performance",
      "Probability + Number of developers"
    ],
    correctAnswer: 0
  },
  {
    id: 94,
    question: "If the probability of a risk is 0.5 and the potential loss is ₹20,000, what is the risk exposure?",
    options: [
      "₹5,000",
      "₹10,000",
      "₹20,000",
      "₹40,000"
    ],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "Which risk has the highest priority?",
    options: [
      "High probability and high impact",
      "Low probability and low impact",
      "No probability and no impact",
      "Low impact only"
    ],
    correctAnswer: 0
  },
  {
    id: 96,
    question: "What is the primary purpose of risk prioritization?",
    options: [
      "To focus attention on the most significant risks",
      "To remove project planning",
      "To increase software complexity",
      "To ignore minor and major risks equally"
    ],
    correctAnswer: 0
  },
  {
    id: 97,
    question: "Which of the following is a risk avoidance technique?",
    options: [
      "Choosing a proven technology instead of an untested technology",
      "Ignoring technical limitations",
      "Increasing project uncertainty",
      "Delaying all project activities"
    ],
    correctAnswer: 0
  },
  {
    id: 98,
    question: "What is the main purpose of risk monitoring?",
    options: [
      "To identify changes in risk status throughout the project",
      "To stop software development",
      "To eliminate project documentation",
      "To avoid all communication"
    ],
    correctAnswer: 0
  },
  {
    id: 99,
    question: "Which of the following can reduce software project risks?",
    options: [
      "Proper planning and continuous communication",
      "Unclear requirements",
      "Unrealistic deadlines",
      "Lack of testing"
    ],
    correctAnswer: 0
  },
  {
    id: 100,
    question: "Why is risk management important in software engineering?",
    options: [
      "It helps reduce project failures and improve project success",
      "It eliminates the need for software design",
      "It guarantees that no defects will occur",
      "It removes the need for project management"
    ],
    correctAnswer: 0
  }
];
