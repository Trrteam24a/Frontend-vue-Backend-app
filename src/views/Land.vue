<template>
  <div>
    <header class="header">
      <div class="logo">QuizSphere</div>
    </header>
    <div class="your-component">
      <div class="text-overlay">
        <h1>"Empowering Success:<br></h1>
      </div>
      <div class="text-overlay-1">
        <h1>Unleash Your Potential<br></h1>
      </div>
      <div class="text-overlay-2">
        <h1>With Mock Tests"<br></h1>
        <div class="button-container">
          <button class="get-started-btn" @click="toggleRoleButtons">Get Started</button>
        </div>
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
    <div class="features">
      <h1>Why Choose QuizSphere ?<br></h1>
      <ul>
        <li>Topic-Wise Tests</li>
        <li>Full Syllabus Tests</li>
        <li>Mock Tests</li>
        <li>Know where you stand with AIR</li>
      </ul>
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
    },
    selectStudent() {
      this.studentSelected = true;
    },
    selectTeacher() {
      this.teacherSelected = true;
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
  position: fixed; 
  top: 0; 
  width: 100%;
  z-index: 999; 
}

.logo {
  font-size: 30px;
}

.your-component {
  position: relative; 
  background-image: url('../assets/landing.jpg'); 
  background-size: cover; 
  background-position: center; 
  height: calc(150vh - 80px); 
  margin-top: 64px;
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
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.text-overlay-1 {
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Open Sans', sans-serif; 
  text-align: center;
  color: white;
}

.text-overlay-2 {
  position: absolute;
  top: 34%;
  left: 50%; 
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
  background-color:#007bff;
}

.get-started-btn {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color:#910A67; 
  color: white;
  cursor: pointer;
}
.button-container {
  margin-top: 20px; 
}
</style>
