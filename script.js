
const {createApp} = Vue;

createApp({

  data(){
    return{

      message: 'Ciao da VueJS! Speriamo di capirci :)',
      image: ` <img src="img1.webp" alt="">`

    }
    
  }
}).mount('#app')