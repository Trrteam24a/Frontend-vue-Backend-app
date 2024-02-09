<template>
    <div>
      <header class="header">
        <div class="logo">QuizSphere</div>
      </header>
      <div class="your-component">
        <div class="text-overlay">
          <h1>"Empowering Success:<br><h1>Unleash Your Potential<br></h1></h1>
        </div>
        <div class="text-overlay-2">
          <h1>With Mock Tests<br></h1>
          
          <!-- Button to show student and teacher selection -->
          <button class="get-started-btn" @click="showRoleButtons">Get Started</button>
          
          <!-- Buttons for student and teacher selection (Initially hidden) -->
          <div v-if="showButtons" class="selection-buttons">
            <router-link to="/home" class="role-btn">Student</router-link>
            <router-link to="/teacher" class="role-btn">Teacher</router-link>
          </div>
        </div>
      </div>
      <div class="features">
        <h1>Why Choose QuizSphere ?<br></h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButtons: false
      };
    },
    methods: {
      showRoleButtons() {
        this.showButtons = true;
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: #333;
    color: white;
  }
  
  .logo {
    font-size: 30px;
  }
  
  .your-component {
    position: relative; 
    background-image: url('../assets/landing.jpg'); 
    background-size: cover; 
    background-position: center; 
    height: 100vh; 
  }
  
  .text-overlay {
    position: fixed;
    top: 30%;
    left: 50%; /* Adjusted to move to the left side */
    transform: translate(-50%, -50%);
    text-align: center;
    color: white; 
  }
  
  
  
  .text-overlay-2 {
    position: fixed;
    top: 50%;
    left: 50%; /* Adjusted to move to the left side */
    transform: translate(-50%, -50%);
    text-align: center;
    color: white; 
  }
  
  .text-overlay h1 {
    font-size: 34px; 
    font-family: 'Open Sans', sans-serif; 
    margin: 0; 
  }
  
  .features h1 {
    font-weight: bold;
    font-size: 40px;
    font-family: 'Open Sans', sans-serif; 
    margin-top: 90px;
    text-align: center;
  }
  
  .selection-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .role-btn {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .role-btn:hover {
    background-color:#007bff;
  }
  
  .get-started-btn {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color:#007bff; 
    color: white;
    cursor: pointer;
  }
  </style>
  