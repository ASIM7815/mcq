// Cyber Security MCQs - 100 Questions
// Unit 4: Cyber Forensics (50 Questions)
// Unit 5: Cyber Forensics Tools & Techniques (50 Questions)

const csQuestions = [
  // UNIT 4 – Cyber Forensics (50 Questions)
  // Section 1: Introduction to Cyber Forensics (Questions 1-7)
  {
    id: 1,
    question: "What is the primary objective of Cyber Forensics?",
    options: [
      "To prevent all cyberattacks",
      "To identify, preserve, analyze, and present digital evidence",
      "To develop antivirus software",
      "To monitor employee productivity"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is the most important principle when handling digital evidence?",
    options: [
      "Evidence should be modified to make analysis easier",
      "Evidence should be immediately deleted after examination",
      "Evidence integrity must be maintained throughout the investigation",
      "Evidence should be shared with all investigators"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What is meant by the chain of custody in cyber forensics?",
    options: [
      "A list of computer passwords",
      "A documented record of evidence collection, transfer, handling, and storage",
      "A network connection history",
      "A record of installed applications"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which of the following is commonly used to verify the integrity of a forensic image?",
    options: [
      "IP address",
      "MAC address",
      "Cryptographic hash value",
      "DNS record"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which type of evidence is considered volatile?",
    options: [
      "Data stored on a CD-ROM",
      "Data stored on a hard disk",
      "Data present in RAM",
      "Data stored on a USB drive"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "What is the purpose of a write blocker in digital forensics?",
    options: [
      "To prevent unauthorized network access",
      "To prevent modification of the original storage device",
      "To encrypt forensic evidence",
      "To increase disk-reading speed"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which of the following is an example of digital evidence?",
    options: [
      "Fingerprints on a keyboard",
      "CCTV footage stored digitally",
      "Physical damage to a computer",
      "A handwritten note"
    ],
    correctAnswer: 1
  },

  // Section 2: Handling Preliminary Investigations (Questions 8-13)
  {
    id: 8,
    question: "What should an investigator generally do first when arriving at a cybercrime scene?",
    options: [
      "Immediately switch off all computers",
      "Secure the scene and assess the situation",
      "Delete suspicious files",
      "Reinstall the operating system"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Why is photographing a computer crime scene important?",
    options: [
      "To improve computer performance",
      "To document the original condition and arrangement of equipment",
      "To recover deleted files",
      "To identify network vulnerabilities"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which of the following should be documented during a preliminary investigation?",
    options: [
      "Date and time of seizure",
      "Device condition",
      "Connected peripherals and network connections",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "Why should an investigator avoid unnecessarily switching off a running computer?",
    options: [
      "It may damage the monitor",
      "It may destroy volatile evidence stored in memory",
      "It may permanently damage the keyboard",
      "It may increase storage capacity"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "What is the primary purpose of an initial investigation report?",
    options: [
      "To provide a complete legal judgment",
      "To document preliminary observations, actions, and findings",
      "To replace forensic examination",
      "To identify the final suspect automatically"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Which of the following is the best practice when collecting digital devices?",
    options: [
      "Handle devices without documentation",
      "Label, photograph, and properly secure each device",
      "Allow unauthorized persons to access devices",
      "Connect all devices to the Internet"
    ],
    correctAnswer: 1
  },

  // Section 3: Controlling an Investigation (Questions 14-18)
  {
    id: 14,
    question: "What does controlling a cyber forensic investigation primarily involve?",
    options: [
      "Allowing every investigator to perform independent actions",
      "Managing investigative activities, evidence, resources, and procedures",
      "Deleting irrelevant system files",
      "Sharing evidence publicly"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Why is maintaining an investigation log important?",
    options: [
      "It records every investigative action and supports accountability",
      "It increases hard disk capacity",
      "It automatically identifies malware",
      "It prevents all cyberattacks"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "What is the primary purpose of establishing an investigation scope?",
    options: [
      "To increase the number of suspects",
      "To define the boundaries, objectives, and limitations of the investigation",
      "To eliminate the need for evidence collection",
      "To restrict all forensic tools"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Which action can compromise the integrity of digital evidence?",
    options: [
      "Creating a verified forensic image",
      "Maintaining chain-of-custody records",
      "Analyzing the original evidence without appropriate protection",
      "Calculating cryptographic hashes"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "Why should access to collected forensic evidence be restricted?",
    options: [
      "To prevent unauthorized modification, loss, or contamination",
      "To reduce computer processing speed",
      "To make evidence inaccessible to investigators",
      "To prevent evidence duplication"
    ],
    correctAnswer: 0
  },

  // Section 4: Conducting Disk-Based Analysis (Questions 19-25)
  {
    id: 19,
    question: "What is disk imaging in cyber forensics?",
    options: [
      "Increasing disk storage capacity",
      "Creating a bit-by-bit copy of a storage device",
      "Formatting a hard disk",
      "Installing a new operating system"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which file system is commonly associated with Windows operating systems?",
    options: ["EXT4", "NTFS", "HFS+", "UFS"],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "What is the purpose of examining unallocated disk space?",
    options: [
      "To increase system performance",
      "To locate remnants of deleted files and other residual data",
      "To identify network bandwidth",
      "To recover RAM contents"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Which of the following can help investigators identify deleted files?",
    options: [
      "File system metadata and file carving",
      "DNS lookup",
      "Packet filtering",
      "Firewall configuration"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "What does the term file carving refer to?",
    options: [
      "Encrypting files using passwords",
      "Recovering files based on their content and file signatures",
      "Compressing files",
      "Deleting duplicate files"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "Which information can be obtained from file system metadata?",
    options: [
      "File creation and modification timestamps",
      "File ownership information",
      "File attributes",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 25,
    question: "What is the primary purpose of a forensic hash comparison?",
    options: [
      "To determine file size",
      "To verify whether two digital copies are identical",
      "To identify the computer manufacturer",
      "To recover encrypted passwords"
    ],
    correctAnswer: 1
  },

  // Section 5: Investigating Malicious Code (Questions 26-32)
  {
    id: 26,
    question: "What is malware?",
    options: [
      "Legitimate system software",
      "Malicious software designed to harm or exploit systems",
      "Hardware components",
      "Network protocols"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Which of the following is a type of malware?",
    options: ["Virus", "Trojan", "Worm", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 28,
    question: "What does a Trojan horse typically do?",
    options: [
      "Increases system speed",
      "Disguises itself as legitimate software while performing malicious activities",
      "Enhances computer security",
      "Repairs damaged files"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "Which of the following is used to analyze malware behavior?",
    options: [
      "Sandboxing and dynamic analysis",
      "Password cracking",
      "Disk formatting",
      "Network monitoring only"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "What is ransomware?",
    options: [
      "Software that increases disk space",
      "Malware that encrypts files and demands payment for decryption",
      "A legitimate data backup tool",
      "A network monitoring application"
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "What is the purpose of reverse engineering malware?",
    options: [
      "To develop new malware",
      "To understand malware functionality and identify countermeasures",
      "To improve malware performance",
      "To distribute malware widely"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "Which technique involves analyzing malware without executing it?",
    options: [
      "Dynamic analysis",
      "Static analysis",
      "Behavioral analysis",
      "Runtime monitoring"
    ],
    correctAnswer: 1
  },

  // Section 6: Network Forensics (Questions 33-40)
  {
    id: 33,
    question: "What is network forensics?",
    options: [
      "Analysis of network traffic to detect and investigate security incidents",
      "Installation of network devices",
      "Increasing network speed",
      "Designing network topologies"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "Which tool is commonly used to capture network packets?",
    options: ["Notepad", "MS Paint", "Wireshark", "Calculator"],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "What information can be obtained from analyzing network logs?",
    options: [
      "IP addresses involved in communication",
      "Timestamp of connections",
      "Protocols used",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 36,
    question: "What is a packet sniffer?",
    options: [
      "A device that increases network bandwidth",
      "A tool that captures and analyzes network traffic",
      "A physical network cable",
      "A type of firewall"
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "What does the term intrusion detection refer to?",
    options: [
      "Blocking all network traffic",
      "Monitoring networks to detect unauthorized access or attacks",
      "Installing antivirus software",
      "Increasing CPU speed"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "Which protocol is commonly analyzed during network forensics?",
    options: ["HTTP", "TCP/IP", "DNS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 39,
    question: "What does analyzing firewall logs help identify?",
    options: [
      "Blocked and allowed connections",
      "Disk space usage",
      "RAM specifications",
      "Monitor resolution"
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: "What is the purpose of conducting traffic analysis?",
    options: [
      "To identify patterns, anomalies, and potential threats in network traffic",
      "To increase internet speed",
      "To reduce electricity consumption",
      "To install hardware drivers"
    ],
    correctAnswer: 0
  },

  // Section 7: Investigating Logs (Questions 41-50)
  {
    id: 41,
    question: "What are system logs?",
    options: [
      "Physical notebooks",
      "Records of system events, activities, and errors",
      "Hardware components",
      "Network cables"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "Why are logs important in cyber forensics?",
    options: [
      "They provide evidence of user activities and system events",
      "They increase storage capacity",
      "They enhance graphics quality",
      "They reduce file sizes"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "Which of the following is a type of log file?",
    options: [
      "Event logs",
      "Security logs",
      "Application logs",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 44,
    question: "What can Windows Event Viewer be used for?",
    options: [
      "To view and analyze Windows system logs",
      "To edit photos",
      "To play video games",
      "To browse the internet"
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: "What information can typically be found in authentication logs?",
    options: [
      "Login and logout attempts",
      "User credentials",
      "Failed authentication attempts",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 46,
    question: "Why might an attacker attempt to delete or modify log files?",
    options: [
      "To improve system performance",
      "To hide traces of malicious activities",
      "To create backups",
      "To update the operating system"
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "What does log correlation involve?",
    options: [
      "Deleting all logs",
      "Analyzing and comparing multiple log sources to identify related events",
      "Increasing log file size",
      "Disabling logging"
    ],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "Which of the following can be identified from web server logs?",
    options: [
      "IP addresses of visitors",
      "Pages accessed",
      "Timestamps of requests",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 49,
    question: "What is the purpose of analyzing application logs?",
    options: [
      "To monitor application behavior and identify errors or security issues",
      "To delete applications",
      "To increase screen brightness",
      "To change wallpaper"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "What does maintaining log integrity ensure?",
    options: [
      "Logs are accurate, complete, and have not been tampered with",
      "Logs are automatically deleted",
      "Logs consume more storage",
      "Logs are inaccessible"
    ],
    correctAnswer: 0
  },

  // UNIT 5 – Cyber Forensics Tools & Techniques (50 Questions)
  // Section 8: Forensic Tools Overview (Questions 51-60)
  {
    id: 51,
    question: "Which of the following is a popular digital forensics tool?",
    options: ["EnCase", "Photoshop", "Excel", "PowerPoint"],
    correctAnswer: 0
  },
  {
    id: 52,
    question: "What is FTK (Forensic Toolkit) used for?",
    options: [
      "Video editing",
      "Digital forensics and data analysis",
      "Web browsing",
      "Music production"
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "Which tool is commonly used for memory forensics?",
    options: ["Volatility", "MS Word", "Chrome", "iTunes"],
    correctAnswer: 0
  },
  {
    id: 54,
    question: "What does Autopsy provide?",
    options: [
      "Video streaming",
      "An open-source digital forensics platform",
      "Social media integration",
      "Gaming services"
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "What is the primary use of Wireshark in forensics?",
    options: [
      "Document editing",
      "Network packet capture and analysis",
      "Image processing",
      "Audio recording"
    ],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "Which tool is specifically designed for mobile device forensics?",
    options: ["Cellebrite", "VLC Player", "Zoom", "Skype"],
    correctAnswer: 0
  },
  {
    id: 57,
    question: "What is X-Ways Forensics?",
    options: [
      "A forensic analysis and disk imaging tool",
      "A video game",
      "An email client",
      "A cloud storage service"
    ],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "Which tool can be used to create forensic disk images?",
    options: ["FTK Imager", "Paint", "Notepad", "Calculator"],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "What does the tool Sleuth Kit provide?",
    options: [
      "Command-line tools for file system analysis",
      "Video playback",
      "Music streaming",
      "Web hosting"
    ],
    correctAnswer: 0
  },
  {
    id: 60,
    question: "Which of the following is a forensic write blocker hardware device brand?",
    options: ["Tableau", "Samsung", "LG", "Sony"],
    correctAnswer: 0
  },

  // Section 9: Data Acquisition Techniques (Questions 61-70)
  {
    id: 61,
    question: "What is the difference between logical and physical data acquisition?",
    options: [
      "Logical acquires allocated files; physical acquires bit-by-bit copies",
      "Logical is faster than physical in all cases",
      "Physical only works on mobile devices",
      "There is no difference"
    ],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "Which acquisition method captures the entire disk including deleted files?",
    options: [
      "Logical acquisition",
      "Physical acquisition",
      "Selective acquisition",
      "Manual acquisition"
    ],
    correctAnswer: 1
  },
  {
    id: 63,
    question: "What is live data acquisition?",
    options: [
      "Acquiring data from a powered-on system",
      "Acquiring data from a switched-off system",
      "Acquiring data from cloud storage only",
      "Acquiring data from printed documents"
    ],
    correctAnswer: 0
  },
  {
    id: 64,
    question: "Why is a write blocker important during data acquisition?",
    options: [
      "It speeds up data transfer",
      "It prevents modification of the original evidence",
      "It increases storage capacity",
      "It encrypts the evidence"
    ],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "What should be done immediately after acquiring data?",
    options: [
      "Delete the original",
      "Calculate and verify cryptographic hash values",
      "Share it on social media",
      "Format the disk"
    ],
    correctAnswer: 1
  },
  {
    id: 66,
    question: "Which hash algorithm is commonly used in forensic imaging?",
    options: ["MD5 and SHA-256", "MP3", "JPEG", "HTML"],
    correctAnswer: 0
  },
  {
    id: 67,
    question: "What does a bit-stream image include?",
    options: [
      "Only visible files",
      "All data sectors including unallocated space",
      "Only system files",
      "Only user documents"
    ],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "What is remote data acquisition?",
    options: [
      "Acquiring data over a network from a remote system",
      "Physically transporting hard drives",
      "Using a USB flash drive",
      "Printing documents"
    ],
    correctAnswer: 0
  },
  {
    id: 69,
    question: "Which tool can create a dd image of a disk?",
    options: [
      "dd command in Linux",
      "MS Paint",
      "Adobe Reader",
      "Windows Media Player"
    ],
    correctAnswer: 0
  },
  {
    id: 70,
    question: "What is the purpose of documenting the acquisition process?",
    options: [
      "To support chain of custody and evidence authenticity",
      "To increase file size",
      "To delete unnecessary files",
      "To enhance graphics"
    ],
    correctAnswer: 0
  },

  // Section 10: File System Analysis (Questions 71-80)
  {
    id: 71,
    question: "What does NTFS stand for?",
    options: [
      "New Technology File System",
      "Network Transfer File Service",
      "Non-Technical File Storage",
      "National Technology Framework System"
    ],
    correctAnswer: 0
  },
  {
    id: 72,
    question: "Which file system is commonly used in Linux?",
    options: ["FAT32", "NTFS", "EXT4", "HFS+"],
    correctAnswer: 2
  },
  {
    id: 73,
    question: "What is the Master File Table (MFT) in NTFS?",
    options: [
      "A database that stores information about every file and directory",
      "A network configuration file",
      "A password storage system",
      "An email client"
    ],
    correctAnswer: 0
  },
  {
    id: 74,
    question: "What does file slack refer to?",
    options: [
      "Unused space in a disk cluster after a file ends",
      "Extra storage capacity",
      "Network latency",
      "CPU usage"
    ],
    correctAnswer: 0
  },
  {
    id: 75,
    question: "Which metadata attribute indicates when a file was last modified?",
    options: ["File size", "Modified timestamp", "File name", "File extension"],
    correctAnswer: 1
  },
  {
    id: 76,
    question: "What is the purpose of analyzing the $MFT file?",
    options: [
      "To understand file system structure and recover deleted files",
      "To play multimedia files",
      "To connect to the internet",
      "To edit photos"
    ],
    correctAnswer: 0
  },
  {
    id: 77,
    question: "What can examining alternate data streams (ADS) in NTFS reveal?",
    options: [
      "Hidden data attached to files",
      "Network speed",
      "Monitor resolution",
      "Keyboard layout"
    ],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "What is file system journaling?",
    options: [
      "A mechanism to track file system changes for recovery",
      "A method to increase file size",
      "A way to delete files permanently",
      "A technique to compress images"
    ],
    correctAnswer: 0
  },
  {
    id: 79,
    question: "Which tool can be used to analyze FAT file systems?",
    options: ["Autopsy", "iTunes", "VLC", "Spotify"],
    correctAnswer: 0
  },
  {
    id: 80,
    question: "What does the term unallocated space mean?",
    options: [
      "Disk space not currently assigned to any file",
      "Space used by the operating system",
      "Space used by applications",
      "Space reserved for updates"
    ],
    correctAnswer: 0
  },

  // Section 11: Email and Internet Forensics (Questions 81-90)
  {
    id: 81,
    question: "What information can be obtained from email headers?",
    options: [
      "Sender IP address and routing information",
      "Only the subject line",
      "Only the recipient's name",
      "Nothing useful"
    ],
    correctAnswer: 0
  },
  {
    id: 82,
    question: "Which protocol is commonly used for sending emails?",
    options: ["FTP", "HTTP", "SMTP", "DNS"],
    correctAnswer: 2
  },
  {
    id: 83,
    question: "What does analyzing browser history reveal?",
    options: [
      "Websites visited and timestamps",
      "CPU temperature",
      "Disk fragmentation",
      "RAM capacity"
    ],
    correctAnswer: 0
  },
  {
    id: 84,
    question: "Where are browser cookies typically stored?",
    options: [
      "In the browser's data directory",
      "In the BIOS",
      "On the network router",
      "In the operating system kernel"
    ],
    correctAnswer: 0
  },
  {
    id: 85,
    question: "What is the purpose of investigating cached web content?",
    options: [
      "To recover previously viewed web pages and images",
      "To increase internet speed",
      "To install browser extensions",
      "To change DNS settings"
    ],
    correctAnswer: 0
  },
  {
    id: 86,
    question: "Which file format is commonly used for storing emails in Microsoft Outlook?",
    options: ["TXT", "PST", "JPG", "MP3"],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "What can be learned from analyzing download history?",
    options: [
      "Files downloaded and their sources",
      "Screen brightness",
      "Audio volume",
      "Printer settings"
    ],
    correctAnswer: 0
  },
  {
    id: 88,
    question: "What is phishing email analysis used for?",
    options: [
      "Identifying fraudulent emails designed to steal information",
      "Improving email delivery speed",
      "Increasing attachment size",
      "Changing email themes"
    ],
    correctAnswer: 0
  },
  {
    id: 89,
    question: "Which tool can help analyze email evidence?",
    options: ["MailXaminer", "Photoshop", "Excel", "PowerPoint"],
    correctAnswer: 0
  },
  {
    id: 90,
    question: "What does examining browser artifacts help identify?",
    options: [
      "User browsing behavior and online activities",
      "Hardware specifications",
      "Keyboard shortcuts",
      "Mouse sensitivity"
    ],
    correctAnswer: 0
  },

  // Section 12: Mobile and Cloud Forensics (Questions 91-100)
  {
    id: 91,
    question: "What is mobile forensics?",
    options: [
      "Recovery and analysis of data from mobile devices",
      "Manufacturing mobile phones",
      "Selling mobile accessories",
      "Repairing mobile screens"
    ],
    correctAnswer: 0
  },
  {
    id: 92,
    question: "Which of the following can be extracted from a mobile device?",
    options: [
      "Call logs",
      "Text messages",
      "App data",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 93,
    question: "What challenge is unique to mobile forensics?",
    options: [
      "Device encryption and variety of operating systems",
      "Large screen size",
      "High battery capacity",
      "Wireless charging"
    ],
    correctAnswer: 0
  },
  {
    id: 94,
    question: "What is cloud forensics?",
    options: [
      "Investigation of data stored in cloud environments",
      "Weather prediction",
      "Cloud storage sales",
      "Internet speed testing"
    ],
    correctAnswer: 0
  },
  {
    id: 95,
    question: "Which tool is used for iOS device forensics?",
    options: ["Elcomsoft iOS Forensic Toolkit", "iTunes", "Safari", "iMovie"],
    correctAnswer: 0
  },
  {
    id: 96,
    question: "What is a challenge in cloud forensics?",
    options: [
      "Data is distributed across multiple servers and jurisdictions",
      "Cloud storage is always free",
      "Cloud data cannot be deleted",
      "Cloud services do not require authentication"
    ],
    correctAnswer: 0
  },
  {
    id: 97,
    question: "What information can be obtained from GPS data on a mobile device?",
    options: [
      "Location history and movement patterns",
      "Screen resolution",
      "Battery health",
      "Camera megapixels"
    ],
    correctAnswer: 0
  },
  {
    id: 98,
    question: "Which Android forensic tool is commonly used?",
    options: ["Oxygen Forensic Suite", "Google Maps", "YouTube", "Gmail"],
    correctAnswer: 0
  },
  {
    id: 99,
    question: "What is SIM card forensics?",
    options: [
      "Analysis of data stored on a SIM card",
      "Manufacturing SIM cards",
      "Selling SIM cards",
      "Activating SIM cards"
    ],
    correctAnswer: 0
  },
  {
    id: 100,
    question: "Why is it important to isolate mobile devices during forensic examination?",
    options: [
      "To prevent remote wiping or data modification",
      "To improve battery life",
      "To increase signal strength",
      "To enhance camera quality"
    ],
    correctAnswer: 0
  }
];
