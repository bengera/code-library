// listen for enter key
taskField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      Task.handleTask();
    }
  });