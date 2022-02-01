// selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".btn.btn-primary")

// event listeners
todoButton.addEventListener("click", fsubmit)

//functions
async function getAge() {

  const inpval = document.getElementById("todo-input").value

  let url = "https://api.agify.io?name=" + inpval

  try {
    let res = await fetch(url);
    let user = await res.json();
    document.getElementById("resultAge").innerHTML = "I think your age is: " + user.age
  } catch (error) {
    console.log(error);
  }
}

function fsubmit(event) {
  // prevent form from submitting
  event.preventDefault()

  getAge()
}

// © redandgreen.co.uk 2022

