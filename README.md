Service Pets API 🐾

A beginner-friendly Node + Express + MongoDB app built for SBA 319.
It has three collections:

serviceDog

owners

trainers

Each collection has full CRUD (Create, Read, Update, Delete) routes.
The app also has simple logging, a global error handler, and MongoDB validation + indexes.

How to Run 🚀

Install dependencies

npm install


Set up .env (in the project root)

PORT=3000
mongoURI=your_mongodb_connection_here


Start server

npm start


You should see:

Connected to MongoDB...
Server Running on PORT: 3000

API Routes 📡
Service Dogs (/api/serviceDog)

POST /api/serviceDog → add a dog

GET /api/serviceDog → list all

GET /api/serviceDog/:id → get one

PUT /api/serviceDog/:id → update

DELETE /api/serviceDog/:id → delete

GET /api/serviceDog/habitat/:hab → filter by habitat

Example POST body

{ "name": "Buddy", "species": "canine", "age": 3, "habitat": "home" }

Owners (/api/owners)

CRUD endpoints (same style as above).

Trainers (/api/trainers)

CRUD endpoints (same style as above).

Features ✅

Three collections with CRUD

Indexes: species/habitat (dogs), city (owners), specialty (trainers)

Validation: required fields + min value for years/age

Error handling + request logging

Ready to test in Postman