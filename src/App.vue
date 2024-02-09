<script setup>
import { onMounted,ref } from 'vue';
import { getAuth, onAuthStateChanged} from 'firebase/auth';

const isloggedIn=ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) =>{
    if(user){
      isloggedIn.value = true;
    }
    else{
      isloggedIn.value=false;
    }
  });
});


</script>

<template>
      <nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/home"></RouterLink>
        <RouterLink to="/sign-in"></RouterLink>
        <RouterLink to="/feed"></RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>
</style>