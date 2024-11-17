
## **Task Manager Application**

The **Task Manager** is a React-based web application designed to help users manage tasks efficiently. It allows users to:
1. Add new tasks with a title and priority queue.
2. Search for specific tasks using a search bar.
3. Delete tasks as needed.
4. Persist tasks using `localStorage` so that they remain available even after refreshing the page.

### **Core Features**
- **Add Tasks**: Users can input a task title and assign a priority queue number.
- **Search Tasks**: A real-time search bar filters tasks based on the title.
- **Delete Tasks**: Remove tasks from the list with a delete button.
- **Local Storage Persistence**: Tasks are saved to `localStorage` and automatically loaded on page reload.

---

## **Setup and Launch Process**

### **Requirements**
- Node.js (version 14+)
- npm (Node Package Manager)

### **Steps to Setup**
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/task-manager.git
   cd task-manager
   ```

2. **Install Dependencies**
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the development server with:
   ```bash
   npm start
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to access the application.

---

## **Assumptions Made During Development**
1. **Unique Task IDs**: Task IDs are generated using `Date.now()` to ensure uniqueness.
2. **Priority Queue Field**: It's assumed that the priority queue number is optional but must be a positive integer if provided.
3. **Search Functionality**: The search bar filters tasks by title in a case-insensitive manner.
4. **Local Storage Behavior**: The app uses `localStorage` to save tasks in JSON format. It's assumed the user will not manually alter the stored data.
5. **Basic UI**: Minimal styling is applied for simplicity; users may customize or integrate additional UI frameworks like Bootstrap or TailwindCSS.

---

## **Screenshots**

### **Home Screen with Tasks**
![Task Manager Home Screen](/app//src/Images/home.png)

### **Add Task Form**
![Add Task Form](/app/src/Images/form.png)

### **Search Functionality**
![Search Tasks](/app/src/Images/search.png)

### **Delete Task**
![Delete Task](/app//src/Images/delete.png)


Feel free to improve, customize, and expand upon this application for your personal or professional use! 

**Happy Coding!** 😊

