<template>
  <div class="home-container">
    <nav class="navbar">
      <div class="brand">QuizSphere Student's Dashboard</div>
      <div class="nav-links">
       
      <router-link to="/upcoming-quizzes" class="nav-link">Upcoming Quizzes</router-link>
      <router-link to="/previous-attempts" class="nav-link">Previous Attempts</router-link>
        <div v-if="user" class="dropdown">
          <button class="nav-link dropdown-toggle">{{ user.displayName }}</button>
          <div class="dropdown-content">
            <router-link to="/profile" class="dropdown-item">Profile</router-link>
            <button @click="logout" class="dropdown-item">Logout</button>
          </div>
        </div>
        <router-link v-if="!user" to="/sign-in" class="nav-link">Sign In</router-link>
      <router-link to="/about" class="nav-link">About Us</router-link> 
    </div>
    </nav>
    <div class="image-container">
        <img src="../assets/gate-exam-mock-test-online-for-free.png" alt="Gate Exam Image" class="gate-image" />
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
    router.push('/home');
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>

.home-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative; 
}

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

.nav-link {
    color: white;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #910A67;
    margin-right: 10px;
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


h2 {
    margin: 0;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 60px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-item {
    padding: 10px;
    text-decoration: none;
    display: block;
    color: #333;
}

.dropdown-item:hover {
    background-color: #f1f1f1;
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
}
    .gate-image {
        border-radius: 10px;
        height: 100vh; 
        width: 100%; 
    }


    @media screen and (max-width: 768px) {
        .gate-image {
            height: auto; 
            max-width: 100%; 
        }
    }

</style>
