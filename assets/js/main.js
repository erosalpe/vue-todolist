const { createApp } = Vue

createApp({
  data() {
    return {
      todoArray: [],
      testoTask: "",
    }
  },
  methods: {
    addTask() {
        if(this.testoTask !== ""){
            this.todoArray.unshift({text: `${this.testoTask}`, done: false})
        }
        this.testoTask = ""
    },
    removeTask(){
        this.todoArray.splice(this.index,1)
    },
    taskLine(){
        if(this.todoArray[index].done === false){
            this.todoArray[index].done = true
        } else {
            this.todoArray[index].done = false
        }
    }
  },
  mounted() {
    window.addEventListener('keyup', event => {
      if (event.key === 'Enter') { 
        this.addTask()
      }
    })
  }
}).mount('#app')