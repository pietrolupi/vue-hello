
const {createApp} = Vue;

createApp({

  data(){
    return{

      message: 'Ciao da VueJS! Speriamo di capirci :)',

      image: ` <img class="mt-5" src="img0.jpg" alt="">`,

      isOkFlag: true,

      greenText: 'green',

      coloreTesto2: '',

      messaggioCheCambia: 'Questo messaggio cambia scrivendo qua sotto e premendo INVIO',
      messaggioCambiato : ''
    }
    
  },

  methods: {
    switchImg(){
      this.image =  ` <img class="mt-5" src="img1.webp" alt="">`;
      this.message = '....... ah';
      this.isOkFlag = false;
      
    },


    stampSecondMessage(){
      const containerMessaggio = document.querySelector('.messaggio2');
      const message2 = document.createElement('p');
      message2.innerHTML = 'Messaggio secondario stampato tramite methods e mounted direttamente, un pochino di testo su cui sperimentare.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet pariatur expedita mollitia ipsum aut eligendi veritatis accusantium recusandae magni quibusdam. ';

      containerMessaggio.append(message2);
      
    },

    cambioMessaggio(){
      this.messaggioCheCambia = this.messaggioCambiato;
    }
  },

  mounted(){
    
    this.stampSecondMessage();

  }
}).mount('#app')