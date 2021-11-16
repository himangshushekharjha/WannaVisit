<template>
  <v-container>
      <h1>WannaVisit ?</h1>

      <p>Search for malicious sites ?</p>
      <v-btn
        class="mx-2" fab dark color="indigo" v-on:click="findPaths">
        <v-icon dark>
          mdi-arrow-right-bold-circle
        </v-icon>
      </v-btn>

  </v-container>
</template>
<script>
import axios from 'axios';
  export default {
    name: 'HelloWorld',
     data: () => ({
       currentUrl : "aasda"
    }),
    async created(){
      
    },
    async mounted() {
      const ref = this;
      console.log("this", this)
      chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        (tabs)=>{
          // ref.currentUrl = tabs[0].url
          ref.setURL(tabs[0].url)
        } 
      );
    },
    methods: {
      setURL(url){
          this.currentUrl = url
          console.log(this.currentUrl)
      },
      async findPaths(){
        console.log("Visit",this.currentUrl)
        let response = await axios.post("http://localhost:3000/api/malicious-url-find",{src : this.currentUrl, maxHops : 2 });
        console.log(response);
      },

    },
  }
</script>
