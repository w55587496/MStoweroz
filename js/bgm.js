
var vm = new Vue({
  el: '#app',
  data: {
    musics: []
  },
  ready: function() {
    var self = this;
    $.ajax({
      url: 'config.json',
      method: 'get',
      dataType: 'json',
      success: function(sources) {
        for(i = 0; i < sources.length; ++i) {
          self.musics.push({name: sources[i].name, url: sources[i].url, ans: 0});
        } 
      }
    });
  },
  // https://stackoverflow.com/questions/45041383/target-the-textarea-of-a-child-component-to-copy-to-clipboard
  methods: {
    copy(music){
      // console.log(music.name)
      var dummy = document.createElement("input");
      // Add it to the document
      
      document.body.appendChild(dummy);
      // Set its ID
      dummy.setAttribute("id", "dummy_id");
    
      // Output the array into it
      document.getElementById("dummy_id").value = music.name;
    
      // Select it
      dummy.select();
    
      // Copy its contents
      document.execCommand("copy");
    
      // Remove it as its not needed anymore
      document.body.removeChild(dummy);
    }
  }
});


