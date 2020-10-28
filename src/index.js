document.addEventListener("DOMContentLoaded", () => {
  todo()
});


function todo () {

  const button = document.getElementById('create-task-form')
  button.addEventListener('submit', function(event){
    event.preventDefault();
  const inputBox = event.target.querySelector('#new-task-description');
  const list = document.getElementById('tasks');
  const input = document.createElement('li');
  const deletebtn = document.createElement('button');
  deletebtn.innerText = "X"
  deletebtn.addEventListener('click', function(){
    input.remove();
  });
  input.textContent = inputBox.value;
   list.appendChild(input);
   list.appendChild(deletebtn);
  });
}

