// /*Backend
//     Data we want to show on UI, and that data is changing, we need a way to get that data, create that data, update and delete
//     Entities: CRUD operations
//     UI-Client
//     API-Server
//     1. User - username, email, phone, password, role
//     2. Vehicle - name, type, id
//     3. Booking - user, vehicle, start_date, end_date, status

//     backend_uri = 'http://localhost:3000';
    
//     home -> /

//    (POST)User Create : Registration -> /api/users/register   |   /api/vehicles/availability
//    (GET)User Get : Login -> /api/users/login
//    (PUT/PATCH)User Update : Change Password -> api/users/:id
//    (DELETE)User Delete :

    
// */
// const express = require('express');

// const app = express();

// //adding services: part of code that helps our api +-> Middlewares
// app.use(express.json()); 
// //Routes Configuration
// //app.use('/api', routes);

// app.post('/api/users/register', (request, response)=>{
//     const { username, email, phone, password, role } = request.body; //username = request.body.username -> {username} = req.body
    
//     //check if user already exists
//     //if not, then create the user
//     //if yes, then return an error message
//     const isExists = true;
//     if(isExists) response.status(404).send({message: 'account already exists'});
//     try{
//     const newUser = {
//         username,
//         email,
//         phone,
//         password,
        
//     }
//     //save the user to the database
//     // save(newUser);
//     response.status(201).send({message:"user created successfully"});
// }catch(err){
//     response.status(500).send({message: err.message});
// }
// });
// //Controller Configuration

// app.listen(4000, () => {
//     console.log('Server is running on port 3000');
// })

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const { errorHandler } = require('./Middleware/errorMiddleware');
const authRoutes = require('./Routes/authRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
