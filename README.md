# **Quiz App 🎓**

This is a fully functional **Quiz Application** built using **React.js**. It allows users to select a category, answer questions with a timer, navigate through questions, and view their scores at the end.

---

## **Features 🚀**

1. **Multiple Categories**:  
   - Programming  
   - Math  
   - Science  

2. **Question Timer**:  
   Each question comes with a **15-second timer** to ensure a quick-paced quiz.

3. **Navigation Panel**:  
   Users can navigate between questions using the **question navigator**.

4. **Progress Bar**:  
   A progress bar visually represents the quiz completion status.

5. **Answer Status**:  
   Questions are marked as:  
   - **Unanswered**: No option selected before moving to the next question.  
   - **Answered**: Option selected before moving ahead.

6. **Anti-Cheating Features 🛡️**:
   - **Disables Copying**: Right-click and text selection are disabled.  
   - **Disables Keyboard Shortcuts**: Prevents common shortcuts like `Ctrl+C`, `Ctrl+V`, and `F12`.  
   - **Full-Screen Mode**: App forces full-screen mode to prevent distractions.  
   - **Monitor Focus**: Users are alerted if they minimize the browser or switch tabs.

7. **Scoring System**:  
   - Tracks the user’s score dynamically and displays the result at the end of the quiz.

---

## **Technologies Used 🛠️**

- **Frontend**: React.js
- **State Management**: React Context API
- **Styling**: CSS Flexbox and custom styles

---

## **Getting Started 💻**

Follow the steps below to set up and run the quiz app locally.

### **Prerequisites**

- Install **Node.js** and **npm** on your system.  
  Check with the following commands:
  ```bash
  node -v
  npm -v


## **How to Use 🧑‍💻**
Run the app.
Choose a category (Programming, Math, or Science).
Answer each question before the timer ends.
Navigate between questions using the question navigator.
Submit the quiz to view your score.
Anti-Cheating Guidelines 🔒
The app implements the following anti-cheating measures:

Copying and text selection are disabled.
Common shortcuts (Ctrl+C, Ctrl+V, F12, etc.) are blocked.
The quiz runs in full-screen mode.
Switching tabs or minimizing the browser triggers an alert.

## **Demo 🔗**
You can check the live demo of the app here.

Contribution Guidelines 🤝
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-branch
Commit changes:
bash
Copy code
git commit -m "Add new feature"
Push to the branch:
bash
Copy code
git push origin feature-branch
Open a pull request.
License 📄
This project is licensed under the MIT License.

## **Contact 📧**
For any questions or feedback, feel free to reach out to:
Your Name | [Your Email] | GitHub Profile

yaml
Copy code

---

### **Instructions to Edit**:
- Replace `yourusername` with your GitHub username.  
- Update the **live demo link** if you have deployed the app.  
- Add your **contact information** (email, GitHub link, etc.).  


### **Installation Steps**
Clone the Repository:

```bash
git clone https://github.com/muralikrishna1729/quiz-app.git
```

cd quiz-app
Install Dependencies:

```bash
npm install
```
Start the App:

```bash
npm start
```

Open the app in your browser at:
```bash
http://localhost:3000
```

### **Project Structure 📂**

  ```bash
quiz-app/
│
├── public/                       # Public assets
│
├── src/                          # Source code
│   ├── components/               # React components
│   │   └── Quiz.js               # Main Quiz component
│   │
│   ├── Helper/                   # Helper files
│   │   ├── GameStateContext.js   # Context API for state management
│   │   └── Questions/            # Question files
│   │       ├── ProgrammingQuestions.js
│   │       ├── MathQuestions.js
│   │       └── ScienceQuestions.js
│   │
│   ├── App.js                    # Main app component
│   ├── index.js                  # React entry point
│   └── App.css                   # Global styling
│
└── package.json                  # Project configuration
```





