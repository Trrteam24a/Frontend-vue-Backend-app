<template>
    <div class="container">
      <h1>Welcome, {{ userData.name }}</h1>
      <img v-if="userData.picture" :src="userData.picture" alt="Profile Picture" class="profile-picture" />
      <div class="bio-data">
        <p><strong>Email:</strong> {{ userData.email }}</p>
      </div>
      <button @click="logout" class="logout-button">Logout</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getAuth, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  const auth = getAuth();
  const router = useRouter();
  const userData = ref({
    name: '',
    email: '',
    picture: '',
  });
  
  const retrieveUserData = () => {
    const user = auth.currentUser;
    if (user) {
      userData.name = user.displayName ;
      userData.email = user.email ;
      userData.picture = user.photoURL; 
    }
  };
  
  retrieveUserData();
  
  const logout = async () => {
    try {
      await signOut(auth);
      router.push('/sign-in');
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
  }
  
  .profile-picture {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-top: 10px;
  }
  
  .bio-data {
    margin-top: 20px;
    text-align: center;
  }
  
  .logout-button {
    background-color: white;
  border: 1px solid #4285F4;
  color: #4285F4;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 1px 4px 10px rgba(25, 24, 24, 0.1);
  }
  </style>
  