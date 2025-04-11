# Student Job Tracker Backend

This is the backend service for the **Student Job Tracker** web application. It provides RESTful API endpoints to manage job applications, allowing users to add, view, filter, update, and delete job entries.

---

## 🔧 Tech Stack

1. **Node.js**: Runtime environment to build server-side applications.
2. **Express.js**: Web framework for creating RESTful APIs.
3. **MongoDB (Atlas)**: NoSQL database to store job applications.
4. **Deployment**:
   - Frontend: [Vercel](https://vercel.com/)
   - Backend: [Render](https://render.com/) or [Railway](https://railway.app/)

---

## 🚀 Features

1. **Add Job Application**:

   - Fields: `Company`, `Role`, `Status`, `Date of Application`, `Link`.

2. **List All Applications**:

   - Retrieve all job entries.
   - Includes filtering options by:
     - **Status**: Applied, Interview, Offer, Rejected.
     - **Date**: Sort by newest or oldest.

3. **Update Job Status**:

   - Modify the application status of a job entry.

4. **Delete Job Application**:
   - Remove a job application permanently.

---

## 📂 Folder Structure

1. **Backend Directory**:

````
 backend/
 ├── src/
 │ ├── controllers/ # Handles business logic
 │ │ └── jobController.js
 │ ├── routes/ # Defines API endpoints
 │ │ └── jobRoutes.js
 │ ├── models/ # Mongoose schemas
 │ │ └── Job.js
 │ ├── config/ # Database connection setup
 │ │ └── db.js
 │ └── index.js # Main entry point for the backend
 ├── .env # Environment variables (not pushed to GitHub)
 ├── .gitignore # To ignore unnecessary files (e.g., node_modules)
 ├── package.json # Node.js dependencies and scripts
 └── README.md # Documentation for the backend

---

## 🛠️ Installation and Setup

1. **Clone the Repository**:

- Copy the repository URL from GitHub and run:
```bash
git clone https://github.com/RahulBarolia/Student_Job_Tracker_Backend_Apis.git
cd backend
````

2. **Install Dependencies**:

- Run the following command:
  ```bash
  npm install
  ```

3. **Set Environment Variables**:

- Create a `.env` file in the root directory with the following values:
  ```env
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```

4. **Start the Server**:

- Launch the backend server locally:

  ```bash
  npm start
  ```

- Your server will be available at `http://localhost:5000`.

---

## 📄 API Documentation

### Base URL

- `http://localhost:5000/api/jobs`

### Endpoints

1. **Add Job Application**:

- **Method**: `POST`
- **Endpoint**: `/jobs`
- **Request Body**:
  ```json
  {
    "company": "inxee systems pvt ltd",
    "role": "Software developer",
    "status": "Applied",
    "applicationDate": "2025-11-04",
    "link": "https://inxee.com/"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Job added successfully",
    "job": {
      "company": "inxee systems pvt ltd",
      "role": "Software developer",
      "status": "Applied",
      "applicationDate": "2025-11-04T00:00:00.000Z",
      "link": "https://inxee.com/",
      "_id": "67f89feb295d27a1f66b4486",
      "createdAt": "2025-04-11T04:51:55.427Z",
      "updatedAt": "2025-04-11T04:51:55.427Z",
      "__v": 0
    }
  }
  ```

2. **Get All Job Applications**:

- **Method**: `GET`
- **Endpoint**: `/jobs`
- **Query Parameters**:
  - `status`: Filter by job status (e.g., `Applied`, `Interview`, `Offer`, `Rejected`).
  - `sortByDate`: Sort jobs by date (e.g., `true` for descending order).
- **Response**:
  ```json
  {
    "jobs": [
      {
        "_id": "67f89feb295d27a1f66b4486",
        "company": "inxee systems pvt ltd",
        "role": "Software developer",
        "status": "Applied",
        "applicationDate": "2025-11-04T00:00:00.000Z",
        "link": "https://inxee.com/",
        "createdAt": "2025-04-11T04:51:55.427Z",
        "updatedAt": "2025-04-11T04:51:55.427Z",
        "__v": 0
      }
    ]
  }
  ```

3. **Update Job Status**:

- **Method**: `PATCH`
- **Endpoint**: `/jobs/:id`
- **Request Body**:
  ```json
  {
    "status": "Interview"
  }
  ```
- **Response**:
  ```json
  {
    "jobs": [
      {
        "_id": "67f89feb295d27a1f66b4486",
        "company": "inxee systems pvt ltd",
        "role": "Software developer",
        "status": "Interview",
        "applicationDate": "2025-11-04T00:00:00.000Z",
        "link": "https://inxee.com/",
        "createdAt": "2025-04-11T04:51:55.427Z",
        "updatedAt": "2025-04-11T04:56:57.788Z",
        "__v": 0
      }
    ]
  }
  ```

4. **Delete Job Application**:

- **Method**: `DELETE`
- **Endpoint**: `/jobs/:id`
- **Response**:
  ```json
  {
    "message": "Job application deleted successfully"
  }
  ```

---

## 🌐 Deployment

1. **Push Backend Code**:

- Push your backend code to a GitHub repository:
  ```bash
  git add .
  git commit -m "Initial backend setup"
  git push origin main
  ```

2. **Deploy on Render or Railway**:

- Connect your GitHub repository to [Render](https://render.com/) or [Railway](https://railway.app/).
- Set environment variables (`MONGO_URI` and `PORT`) in Render/Railway settings.
- Deploy the backend server.

---

## 🐞 Error Handling

1. **400 (Bad Request)**:

- Missing or invalid data in the request.

2. **404 (Not Found)**:

- Resource not found, e.g., an invalid job ID.

3. **500 (Server Error)**:

- Server-side issues.
