// Python Programming MCQs - 60 Questions (2nd Year IT Department)
// Topics: Exception Handling, OOP, Regular Expressions, Database, NumPy, Seaborn, Flask, Matplotlib

const itpyQuestions = [
  // Questions 1-20: Exception Handling and OOP Basics
  {
    id: 1,
    question: "Which keyword is used to handle exceptions in Python?",
    options: [
      "catch",
      "except",
      "error",
      "final"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which block is always executed whether an exception occurs or not?",
    options: [
      "try",
      "except",
      "finally",
      "raise"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Which exception occurs when dividing a number by zero?",
    options: [
      "ValueError",
      "TypeError",
      "ZeroDivisionError",
      "NameError"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which keyword is used to generate an exception manually?",
    options: [
      "throw",
      "raise",
      "error",
      "exception"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is the purpose of the try block?",
    options: [
      "To define a function",
      "To execute risky code",
      "To stop a program",
      "To create a class"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which exception occurs when accessing an undefined variable?",
    options: [
      "IndexError",
      "NameError",
      "KeyError",
      "ImportError"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is the output of the following code? try: print(10 / 0) except ZeroDivisionError: print('Error')",
    options: [
      "10",
      "0",
      "Error",
      "None"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which keyword is used to define custom exceptions?",
    options: [
      "class",
      "def",
      "exception",
      "custom"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "What does OOPS stand for?",
    options: [
      "Object-Oriented Programming System",
      "Object Operating Programming System",
      "Online Object Programming System",
      "Ordered Object Programming System"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Which keyword is used to define a class in Python?",
    options: [
      "object",
      "class",
      "define",
      "struct"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Which function is called automatically when an object is created?",
    options: [
      "__start__()",
      "__init__()",
      "__main__()",
      "__create__()"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "What is inheritance?",
    options: [
      "Hiding data",
      "Acquiring properties of another class",
      "Creating functions",
      "Deleting objects"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Which concept allows the same function name to have different implementations?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Which keyword refers to the current instance of a class?",
    options: [
      "this",
      "self",
      "current",
      "object"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "What is encapsulation?",
    options: [
      "Combining data and methods into a single unit",
      "Creating multiple objects",
      "Copying a class",
      "Executing a loop"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Which of the following represents an object?",
    options: [
      "Blueprint of a class",
      "Instance of a class",
      "Function definition",
      "Variable declaration"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Which module is used for regular expressions in Python?",
    options: [
      "regex",
      "re",
      "regexp",
      "string"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which function searches for a pattern anywhere in a string?",
    options: [
      "re.match()",
      "re.search()",
      "re.find()",
      "re.check()"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Which symbol represents zero or more occurrences?",
    options: [
      "+",
      "?",
      "*",
      "^"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "Which symbol represents the beginning of a string?",
    options: [
      "$",
      "^",
      "*",
      "."
    ],
    correctAnswer: 1
  },

  // Questions 21-40: Regular Expressions, Database
  {
    id: 21,
    question: "Which function returns all non-overlapping matches?",
    options: [
      "re.findall()",
      "re.match()",
      "re.search()",
      "re.split()"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "What does the pattern \\d represent?",
    options: [
      "Alphabet",
      "Digit",
      "Whitespace",
      "Special character"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "Which function replaces matched patterns in a string?",
    options: [
      "re.search()",
      "re.match()",
      "re.sub()",
      "re.split()"
    ],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Which Python module is commonly used to connect to SQLite databases?",
    options: [
      "sqlite3",
      "database",
      "sql",
      "dbconnect"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "Which SQL command is used to retrieve data?",
    options: [
      "INSERT",
      "UPDATE",
      "SELECT",
      "DELETE"
    ],
    correctAnswer: 2
  },
  {
    id: 26,
    question: "Which method executes an SQL query using a cursor?",
    options: [
      "run()",
      "execute()",
      "query()",
      "start()"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Which method saves database changes permanently?",
    options: [
      "save()",
      "update()",
      "commit()",
      "execute()"
    ],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "Which SQL command is used to add new records?",
    options: [
      "INSERT",
      "SELECT",
      "DROP",
      "ALTER"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "Which method retrieves all rows from a query result?",
    options: [
      "fetchone()",
      "fetchall()",
      "fetchmany()",
      "getall()"
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    question: "What is the purpose of a primary key?",
    options: [
      "To store duplicate values",
      "To uniquely identify each record",
      "To delete records",
      "To sort records"
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "What does NumPy stand for?",
    options: [
      "Numerical Python",
      "Number Python",
      "New Python",
      "Network Python"
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "Which function is used to create a NumPy array?",
    options: [
      "np.list()",
      "np.array()",
      "np.create()",
      "np.matrix()"
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "Which attribute returns the dimensions of an array?",
    options: [
      "size",
      "shape",
      "ndim",
      "length"
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "Which function creates an array filled with zeros?",
    options: [
      "np.empty()",
      "np.ones()",
      "np.zeros()",
      "np.full()"
    ],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "Which function generates evenly spaced values within a given interval?",
    options: [
      "np.arange()",
      "np.linspace()",
      "np.random()",
      "np.range()"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Which function calculates the mean of an array?",
    options: [
      "np.average()",
      "np.mean()",
      "np.sum()",
      "np.median()"
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "What is the output of the following code? import numpy as np; a = np.array([1, 2, 3]); print(a * 2)",
    options: [
      "[1, 2, 3]",
      "[2, 4, 6]",
      "[1, 4, 9]",
      "Error"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "Which attribute returns the total number of elements in an array?",
    options: [
      "shape",
      "ndim",
      "size",
      "dtype"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    question: "Seaborn is primarily used for:",
    options: [
      "Web development",
      "Statistical data visualization",
      "Database management",
      "File handling"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Which command imports Seaborn?",
    options: [
      "import seaborn as sns",
      "import seaborn as sb",
      "import sns",
      "import visualization"
    ],
    correctAnswer: 0
  },

  // Questions 41-60: Seaborn, Flask, Matplotlib
  {
    id: 41,
    question: "Which function creates a scatter plot in Seaborn?",
    options: [
      "sns.barplot()",
      "sns.scatterplot()",
      "sns.lineplot()",
      "sns.boxplot()"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "Which function is used to create a heatmap?",
    options: [
      "sns.heatmap()",
      "sns.histplot()",
      "sns.countplot()",
      "sns.scatterplot()"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "Which Seaborn function creates a box plot?",
    options: [
      "sns.barplot()",
      "sns.boxplot()",
      "sns.lineplot()",
      "sns.pairplot()"
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "Which function is used to visualize the distribution of data?",
    options: [
      "sns.histplot()",
      "sns.heatmap()",
      "sns.scatterplot()",
      "sns.countplot()"
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: "Seaborn is built on top of which Python library?",
    options: [
      "NumPy",
      "Matplotlib",
      "Flask",
      "Pandas"
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "Flask is a:",
    options: [
      "Database",
      "Python web framework",
      "Data visualization library",
      "Machine learning library"
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "Which command is used to install Flask?",
    options: [
      "pip install flask",
      "install flask",
      "python get flask",
      "pip get flask"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "Which function creates a Flask application object?",
    options: [
      "Flask()",
      "app()",
      "create()",
      "run()"
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "Which decorator is used to define URL routes in Flask?",
    options: [
      "@app.url",
      "@app.route()",
      "@app.path()",
      "@app.link()"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Which method starts the Flask development server?",
    options: [
      "app.start()",
      "app.execute()",
      "app.run()",
      "app.open()"
    ],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "Which folder is conventionally used to store HTML templates in Flask?",
    options: [
      "static",
      "templates",
      "html",
      "views"
    ],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "Which function is used to render an HTML template in Flask?",
    options: [
      "render_html()",
      "render_template()",
      "display_template()",
      "open_template()"
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "Matplotlib is mainly used for:",
    options: [
      "Database connectivity",
      "Data visualization",
      "Web development",
      "Exception handling"
    ],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "Which module is commonly imported for plotting in Matplotlib?",
    options: [
      "matplotlib.pyplot",
      "matplotlib.plot",
      "matplotlib.graph",
      "matplotlib.chart"
    ],
    correctAnswer: 0
  },
  {
    id: 55,
    question: "Which function creates a line graph?",
    options: [
      "plt.bar()",
      "plt.plot()",
      "plt.scatter()",
      "plt.hist()"
    ],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "Which function creates a bar chart?",
    options: [
      "plt.line()",
      "plt.scatter()",
      "plt.bar()",
      "plt.pie()"
    ],
    correctAnswer: 2
  },
  {
    id: 57,
    question: "Which function displays a histogram?",
    options: [
      "plt.hist()",
      "plt.plot()",
      "plt.bar()",
      "plt.box()"
    ],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "Which function displays the graph on the screen?",
    options: [
      "plt.show()",
      "plt.display()",
      "plt.view()",
      "plt.print()"
    ],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "Which function is used to add a title to a graph?",
    options: [
      "plt.heading()",
      "plt.name()",
      "plt.title()",
      "plt.label()"
    ],
    correctAnswer: 2
  },
  {
    id: 60,
    question: "Which function is used to save a Matplotlib figure?",
    options: [
      "plt.save()",
      "plt.savefig()",
      "plt.export()",
      "plt.store()"
    ],
    correctAnswer: 1
  }
];
