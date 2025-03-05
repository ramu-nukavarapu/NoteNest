# NoteNest - Secure Notes Taking App

## Project Overview
NoteNest is a secure note-taking application that allows users to create, manage, and store their notes efficiently. The backend system ensures data security using authentication and authorization mechanisms. Built with Node.js, Express.js, and MongoDB, NoteNest provides a scalable and secure environment for users to manage their notes.

## Implementations

### User Management
- **Signup Route:** Allows new users to register.
- **Login Route:** Enables users to authenticate.
- **Fetch User Route:** Retrieves user profile data.
- **Update User Route:** Allows users to update their information.
- **Delete User Route:** Enables users to delete their accounts.

### Notes Management
- **Fetch Notes Route:** Retrieves all notes associated with a user.
- **Add Notes Route:** Allows users to create and store notes.
- **Update Notes Route:** Enables users to modify existing notes.
- **Delete Notes Route:** Allows users to remove notes.

### Security Features
- **JWT Access Token Generation**
- **JWT Refresh Token Generation**
- **Access Token Verification Middleware**
- **Refresh Token Verification Middleware**
- **Generate Access Token by Refresh Token Route**

## Installation Guide

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/try/download/community)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ramu-nukavarapu/NoteNest.git
   cd NoteNest
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   JWT_REFRESH_SECRET=your_refresh_secret_key
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Use Postman or any API testing tool to interact with the API.

## API Documentation

### Authentication Endpoints
#### User Signup
- **Endpoint:** `POST /signup`
- **Request Body:**
  ```json
  {
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "userId": "123456789"
  }
  ```

#### User Login
- **Endpoint:** `POST /login`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful",
    "accessToken": "<JWT_ACCESS_TOKEN>",
    "refreshToken": "<JWT_REFRESH_TOKEN>"
  }
  ```

#### Get User Details
- **Endpoint:** `GET /getuserdetails`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_ACCESS_TOKEN>"
  }
  ```
- **Response:**
  ```json
  {
    "id": "123456789",
    "username": "exampleUser",
    "email": "user@example.com"
  }
  ```

#### Update User
- **Endpoint:** `PUT /updateuser`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_ACCESS_TOKEN>"
  }
  ```
- **Request Body:**
  ```json
  {
    "username": "updatedUser",
    "email": "updated@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User updated successfully"
  }
  ```

#### Delete User
- **Endpoint:** `DELETE /deleteuser`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_ACCESS_TOKEN>"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

### Notes Endpoints
#### Fetch Notes
- **Endpoint:** `GET /notes`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_ACCESS_TOKEN>"
  }
  ```
- **Response:**
  ```json
  [
    {
      "id": "note1",
      "title": "First Note",
      "description": "This is my first note.",
      "tags": ["work", "important"]
    }
  ]
  ```

#### Add Note
- **Endpoint:** `POST /addnotes`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_ACCESS_TOKEN>"
  }
  ```
- **Request Body:**
  ```json
  {
    "title": "New Note",
    "description": "This is the content of the note.",
    "tags": ["work", "important"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Note added successfully",
    "noteId": "note123"
  }
  ```

#### Update Note
- **Endpoint:** `PUT /updatenotes/:id`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_ACCESS_TOKEN>"
  }
  ```
- **Request Body:**
  ```json
  {
    "title": "Updated Note",
    "description": "Updated content.",
    "tags": ["updated", "work"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Note updated successfully"
  }
  ```

#### Delete Note
- **Endpoint:** `DELETE /deletenotes/:id`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_ACCESS_TOKEN>"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Note deleted successfully"
  }
  ```

## Conclusion
The NoteNest backend is a fully functional, secure API for managing notes. It features robust authentication, note management, and security mechanisms. The implementation ensures scalability, security, and ease of use for developers and end users alike.
