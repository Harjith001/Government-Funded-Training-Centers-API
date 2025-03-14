# 🚀 Government-Funded Training Centers API

This project is a **Node.js and Express.js API** designed to manage **government-funded training centers**. The API allows users to **add, retrieve, and manage training centers**, ensuring efficient administration.

---

## 📌 Features
- ✅ **Add a New Training Center** with validated details.
- ✅ **Fetch All Training Centers** from the database.
- ✅ **Schema Validation** using Mongoose.
- ✅ **MongoDB Integration** for persistent storage.
- ✅ **RESTful API Structure** for easy consumption.

---

## 🏠 Project Structure
```
📺 Government-Funded-Training-Centers-API
👉 📚 models               # Mongoose schema for Training Centers
👉 📚 controllers          # API logic & business rules
👉 📚 routes               # API route definitions
👉 📚 config               # Database connection setup
👉 📚 middleware           # Custom middlewares (if any)
👉 📚 utils                # Helper functions (if any)
👉 📚 server.js            # Main entry point
👉 📚 package.json         # Dependencies & scripts
👉 📚 README.md            # Documentation
```

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Validation:** Mongoose Schema Validation
- **API Testing:** Postman

---

## 📄 API Endpoints

### 🎯 Add a Training Center
**POST** `/centers/add`

#### 📝 Request Body (JSON)
```json
{
  "centerName": "Tech Academy",
  "centerCode": "ABC123XYZ789",
  "address": {
    "detailedAddress": "123 Tech Street",
    "city": "Mumbai",
    "state": "Maharashtra",
    "pincode": "400001"
  },
  "studentCapacity": 100,
  "coursesOffered": ["Web Development", "Data Science"],
  "contactEmail": "info@techacademy.com",
  "contactPhone": "9876543210"
}
```

#### ✅ Response (201 Created)
```json
{
  "message": "Center added successfully",
  "center": {
    "_id": "65f25a5e3b1a4e2a10d9a678",
    "centerName": "Tech Academy",
    "centerCode": "ABC123XYZ789",
    "address": {
      "detailedAddress": "123 Tech Street",
      "city": "Mumbai",
      "state": "Maharashtra",
      "pincode": "400001"
    },
    "studentCapacity": 100,
    "coursesOffered": ["Web Development", "Data Science"],
    "contactEmail": "info@techacademy.com",
    "contactPhone": "9876543210",
    "createdOn": 1710529923
  }
}
```

---

### 🎯 Get All Training Centers
**GET** `/centers/all`

#### ✅ Response (200 OK)
```json
[
  {
    "_id": "65f25a5e3b1a4e2a10d9a678",
    "centerName": "Tech Academy",
    "centerCode": "ABC123XYZ789",
    "address": {
      "detailedAddress": "123 Tech Street",
      "city": "Mumbai",
      "state": "Maharashtra",
      "pincode": "400001"
    },
    "studentCapacity": 100,
    "coursesOffered": ["Web Development", "Data Science"],
    "contactEmail": "info@techacademy.com",
    "contactPhone": "9876543210",
    "createdOn": 1710529923
  }
]
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Harjith001/Government-Funded-Training-Centers-API.git
cd Government-Funded-Training-Centers-API
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
MONGO_URI=mongodb+srv://your_mongodb_url
PORT=5000
```

### 4️⃣ Start the Server
```sh
npm start
```
Server will run on `http://localhost:5000`.

---

## 🔥 Testing the API
Use **Postman**, **cURL**, or any REST client to test API endpoints.

### Example:
```sh
curl -X GET http://localhost:5000/centers/all
```

---

## 👨‍💻 Contributing
Contributions are welcome! Feel free to submit a **pull request**.

---

## 📝 License
This project is licensed under the **MIT License**.

---

## 📞 Contact
For queries, reach out at:
- ✉ **Email:** harjithcollege2021@gamil.com
- 🔗 **GitHub:** [Harjith001](https://github.com/Harjith001)
