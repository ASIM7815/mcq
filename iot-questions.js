// IoT (Internet of Things) MCQs - 30 Questions (3rd Year AIDS)
// Unit III: Design and Development - Sensors, Actuators, Communication, Architecture
// Questions 21-50

const iotQuestions = [
  // Section 3: IoT System Building Blocks (Continued)
  {
    id: 21,
    question: "What is the role of an Actuator in an IoT system?",
    options: [
      "To detect temperature",
      "To perform physical actions based on control signals",
      "To store information",
      "To process images"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "What is the main function of the Processing Unit in an IoT device?",
    options: [
      "To process sensor data and execute instructions",
      "To generate electricity",
      "To connect mechanical wires",
      "To display advertisements"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "What is the purpose of the Communication Module in an IoT system?",
    options: [
      "To exchange data between devices and networks",
      "To measure humidity",
      "To increase battery size",
      "To control screen brightness"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "Which of the following is an example of an IoT sensor?",
    options: [
      "Temperature Sensor",
      "Electric Motor",
      "LED Bulb",
      "Speaker"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "Which component is used to convert electrical energy into physical movement?",
    options: [
      "Sensor",
      "Actuator",
      "Resistor",
      "Capacitor"
    ],
    correctAnswer: 1
  },
  
  // Section 4: Sensors and Actuators
  {
    id: 26,
    question: "Which sensor is used to measure temperature?",
    options: [
      "DHT11",
      "PIR Sensor",
      "Ultrasonic Sensor",
      "IR Transmitter"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: "Which sensor is commonly used to detect human movement?",
    options: [
      "Temperature Sensor",
      "PIR Sensor",
      "Gas Sensor",
      "Light Sensor"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "What is the primary function of an Ultrasonic Sensor?",
    options: [
      "To measure distance using sound waves",
      "To measure temperature",
      "To detect electricity",
      "To measure humidity"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "Which device is commonly used as an actuator to control the flow of liquid?",
    options: [
      "Temperature Sensor",
      "Solenoid Valve",
      "LDR",
      "Microphone"
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    question: "What does an LDR sensor detect?",
    options: [
      "Sound",
      "Light intensity",
      "Temperature",
      "Pressure"
    ],
    correctAnswer: 1
  },
  
  // Section 5: IoT Communication Technologies and Protocols
  {
    id: 31,
    question: "What is the full form of Wi-Fi?",
    options: [
      "Wireless Fidelity",
      "Wired File Interface",
      "Wireless File Integration",
      "Wide Frequency Internet"
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "Which wireless communication technology is commonly used for short-range communication between IoT devices?",
    options: [
      "Bluetooth",
      "Satellite Television",
      "Ethernet Cable",
      "HDMI"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "What is MQTT in IoT?",
    options: [
      "A lightweight messaging protocol used for communication between IoT devices",
      "A type of temperature sensor",
      "A programming language",
      "A hardware component"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "Which communication protocol follows the Publish-Subscribe messaging model?",
    options: [
      "HTTP",
      "MQTT",
      "FTP",
      "SMTP"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What is the primary purpose of HTTP in IoT applications?",
    options: [
      "To transfer data between clients and web servers",
      "To measure temperature",
      "To control battery voltage",
      "To detect motion"
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: "Which wireless technology is designed for low-power, short-range communication and is commonly used in IoT mesh networks?",
    options: [
      "Zigbee",
      "HDMI",
      "VGA",
      "USB"
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "What is the main advantage of LoRaWAN in IoT applications?",
    options: [
      "Long-range communication with low power consumption",
      "High-quality video gaming",
      "Short-range wired communication",
      "Unlimited data storage"
    ],
    correctAnswer: 0
  },
  
  // Section 6: IoT Architecture and Cloud Computing
  {
    id: 38,
    question: "How many layers are commonly present in the basic three-layer IoT architecture?",
    options: [
      "Two",
      "Three",
      "Five",
      "Seven"
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "Which layer of IoT architecture is responsible for collecting data from sensors?",
    options: [
      "Application Layer",
      "Network Layer",
      "Perception Layer",
      "Business Layer"
    ],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "What is the main function of the Network Layer in IoT architecture?",
    options: [
      "To transmit data between devices and processing systems",
      "To collect physical data only",
      "To display graphical reports",
      "To manufacture sensors"
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "What is the main function of the Application Layer in IoT?",
    options: [
      "To provide services and applications to end users",
      "To measure voltage",
      "To manufacture hardware",
      "To generate physical signals"
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "What is Cloud Computing in IoT?",
    options: [
      "Using remote internet-based servers for data storage, processing, and management",
      "Storing data only on paper",
      "Using computers without electricity",
      "Connecting devices using only cables"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "What is Edge Computing in IoT?",
    options: [
      "Processing data close to where it is generated instead of sending everything to the cloud",
      "Processing data only in distant servers",
      "Deleting all sensor information",
      "Storing data only in external hard disks"
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "What is the main advantage of Edge Computing?",
    options: [
      "Reduced latency and faster response time",
      "Increased internet cable length",
      "Higher screen resolution",
      "Unlimited battery power"
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: "Which of the following is an example of a cloud platform used for IoT applications?",
    options: [
      "AWS IoT Core",
      "MS Paint",
      "Notepad",
      "Calculator"
    ],
    correctAnswer: 0
  },
  
  // Section 7: IoT Applications, Security and Development
  {
    id: 46,
    question: "Which of the following is an example of Smart Home IoT technology?",
    options: [
      "Automatically controlled smart lights",
      "Traditional paper books",
      "Manual typewriter",
      "Mechanical clock"
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "What is the primary purpose of IoT in Smart Agriculture?",
    options: [
      "Monitoring soil moisture and automating irrigation",
      "Increasing paper production",
      "Designing computer games",
      "Manufacturing mobile phones"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "What is the main purpose of IoT security?",
    options: [
      "To protect devices, communication, and data from unauthorized access",
      "To increase screen brightness",
      "To reduce sensor accuracy",
      "To remove network connectivity"
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "Which technology is commonly used to uniquely identify IoT devices over an IP network?",
    options: [
      "IP Address",
      "HTML Tag",
      "Image File",
      "Audio Signal"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "Which of the following best describes the Internet of Things (IoT)?",
    options: [
      "A network of physical objects connected to the internet that collect and exchange data",
      "A collection of offline computer games",
      "A system used only for word processing",
      "A network of printers without communication"
    ],
    correctAnswer: 0
  }
];
