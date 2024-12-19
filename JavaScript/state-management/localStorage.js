// in a class using static methods
class Storage {

    static setLocalStorage(){
        localStorage.setItem('allTasks',JSON.stringify(listArr));
        console.log('data stored')
      }
    
      static getLocalStorage(){
        const data = JSON.parse(localStorage.getItem('allTasks'))
        if (data){
          listArr = [...data]; // merge data into listArr
          console.log(`${data.length} tasks retrieved`)
        }
        
        
      }
}