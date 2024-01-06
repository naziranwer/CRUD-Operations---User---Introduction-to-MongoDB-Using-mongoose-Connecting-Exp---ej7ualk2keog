// Import the necessary modules and models
const User = require('../model/userModel');
const express = require('express');
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  // Implement user creation logic here
  // 1. Extract user data from the request body (req.body)
  // 2. Create a new user using User.create()
  // 3. Handle success: Respond with a 201 status code and the created user
  // 4. Handle errors: Respond with appropriate error messages and status codes
  try{

    const {name,email}=req.body;
    const newUser= await User.create({name,email});

    res.status(201).json({message: "User created",user: newUser});

  } catch(err){
    res.status(500).json({message: "Internal server error" });
  }
});

// Retrieve a user by ID
router.get('/users/:id', async (req, res) => {
  // Implement user retrieval logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 2. Find the user by ID using User.findById()
  // 3. Handle success: Respond with a 200 status code and the user data
  // 4. Handle errors: Respond with appropriate error messages and status codes
  try{

    const userId=req.params.id;
    // userId*=1;

    const user= await User.findById(userId);
    
    if(user){
      res.status(200).json({message:"Profile data",user:user})
    }
    else{
      res.status(404).json({message: "User not found"});
    }
    

  } catch(err){
    res.status(500).json({message: "Internal server error" });
  }
});

// Update a user by ID
router.patch('/users/:id', async (req, res) => {
  // Implement user update logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 2. Extract updated user data from the request body (req.body)
  // 3. Use User.findByIdAndUpdate() to update the user
  // 4. Handle success: Respond with a 200 status code and the updated user data
  // 5. Handle errors: Respond with appropriate error messages and status codes
  try{

    const userId=req.params.id;
    // userId*=1;
    const body=req.body;
    const user= await User.findByIdAndUpdate(userId,body,{new:true});
    
    if(user){
      res.status(200).json({message:"User updated",user:user})
    }
    else{
      res.status(404).json({message: "User not found"});
    }
    

  } catch(err){
    res.status(500).json({message: "Internal server error" });
  }
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  // Implement user deletion logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 2. Use User.findByIdAndDelete() to delete the user
  // 3. Handle success: Respond with a 200 status code and a deletion confirmation message
  // 4. Handle errors: Respond with appropriate error messages and status codes

  try{

    const userId=req.params.id;
    // userId*=1;

    const user= await User.findByIdAndDelete(userId);
    
    if(user){
      res.status(200).json({message:"User deleted"})
    }
    else{
      res.status(404).json({message: "User not found"});
    }
    

  } catch(err){
    res.status(500).json({message: "Internal server error" });
  }
});

module.exports = router;
