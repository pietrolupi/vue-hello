
const {createApp} = Vue;

createApp({

  data(){
    return{

      message: 'Ciao da VueJS! Speriamo di capirci :)',

      image: ` <img class="mt-5" src="img0.jpg" alt="">`,

    }
    
  },

  methods: {
    switchImg(){
      this.image =  ` <img class="mt-5" src="img1.webp" alt="">`
      this.message = '.......'
    }
  }
}).mount('#app')