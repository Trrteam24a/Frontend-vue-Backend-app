<template>
  <div class="home-container">
    <nav class="navbar">
      <div class="brand">QuizSphere Teacher's Dashboard</div>
      <div class="nav-links">
        <div class="dropdown">
          <button class="nav-link dropdown-toggle">Create-Quiz</button>
          <div class="dropdown-content">
            <router-link to="/manual-quiz" class="dropdown-item">Manually</router-link>
            <router-link to="/excel-upload" class="dropdown-item">Excel upload</router-link>
          </div>
        </div>
        <div class="dropdown">
          <button class="nav-link dropdown-toggle">Student's Responses</button>
          <div class="dropdown-content">
            <router-link to="/previous-quiz" class="dropdown-item">Previous quizzes</router-link>
            <router-link to="/general-feedback" class="dropdown-item">General Feedback</router-link>
          </div>
        </div>
        <div v-if="user" class="dropdown">
          <button class="nav-link dropdown-toggle">{{ user.displayName }}</button>
          <div class="dropdown-content">
            <router-link to="/profile" class="dropdown-item">Profile</router-link>
            <button @click="logout" class="dropdown-item logout-btn">Logout</button>
          </div>
        </div>
        <router-link v-if="!user" to="/sign-in-teacher" class="nav-link">Sign In</router-link>
      </div>
    </nav>
    <div class="image-container">
      <img src="../assets/gate teacher male.png" alt="Male Teacher" class="gate-image male" />
      <img src="../assets/gate teacher female.png" alt="Female Teacher" class="gate-image female" />
    </div>
    <div class="content">
      <div class="user-info" v-if="user">
        <img :src="user.photoURL" alt="User Photo" class="user-photo" />
        <h2>Welcome, {{ user.displayName }}!</h2>
        <h3>Let's Start your GATE journey with us !!</h3>
        <router-link to="/ongoing-quiz" class="nav-link blinking-text">Ongoing Quiz</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const auth = getAuth();
const user = ref(auth.currentUser);
const router = useRouter();

onMounted(() => {
  onAuthStateChanged(auth, (newUser) => {
    user.value = newUser;
  });
});

const logout = async () => {
  try {
    await signOut(auth);
    router.push('/teacher');
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  background-color: #333;
  color: white;
  padding: 15px 10px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; 
  top: 0;
  width: calc(100% - 20px); 
  z-index: 999; 
}

.brand {
  font-size: 30px;
}

.nav-links {
  display: flex;
}

/* Dropdown Styles */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: #910A67;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
}

.dropdown-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown-content a:hover {
  background-color: #83e285;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropdown-toggle {
  background-color: #7b165c;
}

/* Button Styles */
.nav-link {
  background-color: #910A67;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
}

.nav-link:hover {
  background-color: #7b165c;
}

/* Other Styles */
.home-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative; 
}

.image-container {
  display: flex;
  justify-content: space-between;
}

.gate-image {
  border-radius: 10px;
  margin-top: 6%;
}

.logout-btn {
  background-color: #910A67;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.logout-btn:hover {
  background-color: #83e285;
}


.user-info {
    position: absolute;
    top: 39%; 
    left: 49%; 
    transform: translate(-50%, -50%); 
    text-align: center;
    font: 1em sans-serif;
    color: #442222;
}

.user-photo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 10px;
    display: block; 
    margin-left: auto; 
    margin-right: auto; 
}

.blinking-text {
    animation: blink 1s infinite alternate;
}

@keyframes blink {
    0% {
        color: gold;
        text-shadow: none;
    }
    100% {
        color: white;
        text-shadow: 0 0 5px gold;
    }
}

.male {
  order: 2; 
  height: 90vh;
  width: 35%;
  margin-left: 20px; 
}

.female {
  order: 1; 
  height: 90vh;
  margin-right: 20px; 
}

@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .brand {
    margin-bottom: 10px;
  }

  .nav-links {
    margin-top: 10px;
  }

  .nav-link {
    margin: 5px 0;
  }

  .user-info {
    position: relative;
    top: auto;
    transform: none;
    margin-top: 20px;
  }

  .gate-image {
    height: auto;
    max-width: 100%;
    margin-right: 0;
    margin-left: 0; 
  }

  .male {
    margin-right: 0; 
  }

  .female {
    margin-left: 0; 
  }
}
</style>
