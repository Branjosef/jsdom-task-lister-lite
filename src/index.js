document.addEventListener("DOMContentLoaded", () => {
  todo()
});

function todo () {
  const button = document.getElementById('create-task-form')
  button.addEventListener('submit', function(event){event.preventDefault();
  const inputBox = event.target.querySelector('#new-task-description');
  const list = document.getElementById('tasks');
  const input = document.createElement('li');
  const deletebtn = document.createElement('button');
  deletebtn.innerText = "X"
  deletebtn.addEventListener('click', function(){input.remove()});
  input.textContent = inputBox.value;
   list.appendChild(input);
   input.appendChild(deletebtn);
  });
}


// document.addEventListener("DOMContentLoaded", () => {
 
//   document.getElementById("create-task-form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     const ans = document.getElementById("new-task-description").value
//     const li = document.createElement("li")
//     const button = document.createElement("button")
//     li.innerText = ans + " "
//     button.setAttribute("data-desrciption", ans)
//     button.innerHTML = "X"
//     button.addEventListener('click', deleteTask)
//     li.appendChild(button)
//     document.getElementById("tasks").appendChild(li) 
//     function deleteTask() {
//       li.remove()
//     }
//   }, 
//   false);
// });

