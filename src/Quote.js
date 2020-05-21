export const mixinExample = {
  data(){
    return {
      languages: ["Ruby", "JavaScript", "Python"]
    }
  },
  computed: {
    returnLan(){
      console.log("I am in the mixin")
    }
  }
}
