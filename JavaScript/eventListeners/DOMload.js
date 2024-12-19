// do some action once the DOM has loaded
document.addEventListener('DOMContentLoaded',()=> {
    Task.getLocalStorage();
    Task.addTasks();
  })