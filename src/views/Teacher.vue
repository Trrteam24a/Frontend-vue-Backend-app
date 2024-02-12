<template>
    <div class="home-container">
      <nav class="navbar">
        <div class="brand">QuizSphere Teacher's Dashboard</div>
        <div class="nav-links">
         
        <router-link to="/upcoming-quizzes" class="nav-link">Quizzes</router-link>
        <router-link to="/previous-attempts" class="nav-link">Student's Responses</router-link>
          <div v-if="user" class="dropdown">
            <button class="nav-link dropdown-toggle">{{ user.displayName }}</button>
            <div class="dropdown-content">
              <router-link to="/profile" class="dropdown-item">Profile</router-link>
              <button @click="logout" class="dropdown-item">Logout</button>
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
  .image-container {
    display: flex;
    justify-content: space-between;
}

.gate-image {
    border-radius: 10px;
    margin-top: 6%;
  
}

.male {
  order: 2; /* Adjust order to place female teacher on the right */
    height: 90vh;
    width: 35%;
    margin-left: 20px; /* Increase the margin between images */
}

.female {
  order: 1; /* Adjust order to place male teacher on the left */
    height: 90vh;
    margin-right: 20px; /* Increase the margin between images */
}

@media screen and (max-width: 768px) {
    .gate-image {
        height: auto;
        max-width: 100%;
        margin-right: 0; /* Reset margin for smaller screens */
        margin-left: 0; /* Reset margin for smaller screens */
    }

    .male {
        margin-right: 0; /* Reset margin for smaller screens */
    }

    .female {
        margin-left: 0; /* Reset margin for smaller screens */
    }
}

  
  </style>
  