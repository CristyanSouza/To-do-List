function removeTask(task) {
  task.parentNode.remove(true)
}

function doneTask(task){
  task.parentNode.classList.toggle('done')
}

function addTask() {
  const taskTitle = document.querySelector('#task-title').value

  if (taskTitle) {
    // add
    const template = document.querySelector('.template')
    const newTask = template.cloneNode(true)

    newTask.querySelector('.task-title').textContent = taskTitle

    newTask.classList.remove('template')
    newTask.classList.remove('hide')

    const ul = document.querySelector('#task-list')
    ul.appendChild(newTask)

    document.querySelector('#task-title').value = ""
    //remove
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
        removeTask(this)
      })
    //done

    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
      doneTask(this)
    })
  }

}

var addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', e => {
  e.preventDefault()
  addTask()
})


