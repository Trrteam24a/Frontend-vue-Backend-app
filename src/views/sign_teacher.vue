<template>
    <div class="container">
      <h1>Welcome Gate Tutor's ! </h1>
      <h2>Please Sign-in with Google to use our App</h2>
      <p>
        <button @click="signInWithGoogle" class="google-button">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" class="google-logo" />
          Sign In With Google
        </button>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(getAuth(), new GoogleAuthProvider());
      router.push("/teacher");
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    margin-top: 5%;
  }
  
  .google-button {
    background-color: white;
    border: 1px solid #4285F4;
    color: #4285F4;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 4px 10px rgba(25, 24, 24, 0.1);
    margin-top: 100%;
  }
  
  .google-logo {
    width: 20px;
    margin-right: 10px;
  }
  </style>
  