<template>
  <div>
    <header class="header">
      <div class="logo">QuizSphere</div>
      <div class="button-container">
        <button class="get-started-btn" @click="toggleRoleButtons">Get Started</button>
        <!-- Use a click event listener to trigger scrolling -->
        <button class="about-us-btn" @click="scrollToAboutUs">About Us</button>
      </div>
    </header>
    <div class="your-component">
      <div class="text-overlay">
        <h1>"Empowering Success:<br><br><br></h1>
      </div>
      <div class="text-overlay-1">
        <h1>Unleash Your Potential<br></h1>
      </div>
      <div class="text-overlay-2">
        <h1>With Mock Tests"<br></h1>
        <div v-if="showButtons" class="selection-buttons">
          <div class="button-container">
            <router-link v-if="!studentSelected" to="/home" class="role-btn" @click="selectStudent">Student</router-link>
          </div>
          <div class="button-container">
            <router-link v-if="!teacherSelected" to="/teacher" class="role-btn" @click="selectTeacher">Teacher</router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="about-us-section" class="about-us-section">     
  <div class="feature">
    <img src="" alt="Feature 1">
    <div class="feature-content">
      <h2>Topic-Wise Tests</h2>
      <p>Description of feature 1.</p>
    </div>
  </div>
  <div class="feature">
    <img src="" alt="Feature 2">
    <div class="feature-content">
      <h2>Full Syllabus Tests</h2>
      <p>Description of feature 2.</p>
    </div>
  </div>
  <div class="feature">
    <img src="" alt="Feature 3">
    <div class="feature-content">
      <h2>Mock Tests</h2>
      <p>Description of feature 4.</p>
    </div>
  </div>
  <div class="feature">
    <img src="" alt="Feature 4">
    <div class="feature-content">
      <h2>Know where you stand with AIR</h2>
      <p>Description of feature 4.</p>
    </div>
  </div>
  
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showButtons: false,
      studentSelected: false,
      teacherSelected: false
    };
  },
  methods: {
    toggleRoleButtons() {
      this.showButtons = !this.showButtons;
      // Scroll to top when toggling role buttons
      this.scrollToTop();
    },
    selectStudent() {
      this.studentSelected = true;
    },
    selectTeacher() {
      this.teacherSelected = true;
    },
    
    scrollToAboutUs() {
      const aboutUsSection = document.getElementById('about-us-section');
      
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    },
    
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 3px; 
  background-color: #333;
  color: white;
  position: fixed; 
  top: 0; 
  width: calc(100% - 21px); 
  z-index: 999; 
  
}

.logo {
  font-size: 50px;
}

.button-container {
  margin-top: 16px; 
}

.get-started-btn {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color:#910A67; 
  color: white;
  cursor: pointer;
  margin-bottom: 10%;
  margin-right: 10px;
}

.about-us-btn {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color:#910A67; 
  color: white;
  cursor: pointer;
  margin-bottom: 10%;
  margin-right: 10px;
}

.your-component {
  position: relative; 
  background-image: url('../assets/landing.jpg'); 
  background-size: cover; 
  background-position: center; 
  height: calc(160vh - 80px); 
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.your-component::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); 
}

.text-overlay {
  position: absolute;
  top: 17%;
  left: 20%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.text-overlay-1 {
  position: absolute;
  top: 22%;
  left: 25%;
  transform: translate(-50%, -50%);
  font-family: 'Open Sans', sans-serif; 
  text-align: center;
  color: white;
}

.text-overlay-2 {
  position: absolute;
  top: 34%;
  left: 34%; 
  transform: translate(-50%, -50%);
  font-family: 'Open Sans', sans-serif; 
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
  background-color: #910A67;
  color: white;
  cursor: pointer;
}

.role-btn:hover {
  background-color:#83e285;
  color: white;
}

.about-us-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjusts to fill one screen */
}

.feature-container {
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  gap: 20%; /* Spacing between feature boxes */
  padding: 20px; /* Padding around the feature container */
  white-space: nowrap; /* Prevent wrapping of feature boxes */
}

.feature {
  width: 300px; /* Adjust width of each box */
  background-color: wheat; /* White background color */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(1, 1, 1, 1); /* Shadow effect */
  padding: 20px;
  display: inline-block; /* Display feature boxes inline */
}

.feature img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.feature-content {
  flex: 1;
}

.feature-content h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.feature-content p {
  font-size: 14px;
  color: #666;
}

.marquee {
  animation: marquee 20s linear infinite; /* Adjust animation duration as needed */
}

@keyframes marquee {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
