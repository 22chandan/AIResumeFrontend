Here's the updated README with a separate backend repository URL:

---

# AI Resume Builder

AI Resume Builder is a web application that allows users to generate customized resumes using AI. This tool enables users to input their professional information and receive tailored resume formats, which can be exported for job applications.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js
- **State Management**: Cleark
- **Database**: MongoDB

## Features
- AI-powered resume generation
- User-friendly interface for entering personal and professional information
- Resume format customization
- Downloadable resume options in various formats

## Backend Repository
The backend of this project can be found here: [AI Resume Builder Backend Repo](https://github.com/22chandan/ResumeBuilderBackend.git)

## Steps to Run

### Prerequisites
Make sure you have the following installed:
- Node.js (version 14.x or above)
- MongoDB
- Cleark (if used as a separate package)

### Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/ai-resume-builder.git
    cd ai-resume-builder
    ```

2. **Install frontend dependencies**

    ```bash
    cd client
    npm install
    ```

3. **Clone the backend repository**

    Navigate to the folder where you want to store the backend code and clone the backend repository:

    ```bash
    git clone https://github.com/your-username/ai-resume-builder-backend.git
    cd ai-resume-builder-backend
    ```

4. **Install backend dependencies**

    ```bash
    npm install
    ```

5. **Configure environment variables**

    In the backend repository, create a `.env` file and add the following values:

    ```bash
    MONGO_URI=your_mongo_db_connection_string
    PORT=5000
    ```

6. **Run MongoDB**
   
   Make sure your MongoDB server is running locally or use a cloud MongoDB service.

7. **Start the backend**

    In the backend directory, run:

    ```bash
    npm start
    ```

8. **Start the frontend**

    Open a new terminal, go to the `client` folder of the frontend repo, and run:

    ```bash
    npm start
    ```

9. **Access the Application**

    Open your browser and go to `http://localhost:3000` to see the app in action.

