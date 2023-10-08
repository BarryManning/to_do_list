// popup window 

const popupwindow = document.getElementById('containerPopup');
const addTaskButton = document.getElementById('addTaskButton');

function openpopup() {
    if (popupwindow.style.display === 'none') {
        popupwindow.style.display = 'flex'
    } else {
        popupwindow.style.display = 'none'
    }
};

addTaskButton.onclick = openpopup;

// make input box send items to the pendingTasks array

let pendingTasks = [''];

let tasksRow = document.getElementById('tasksRow');

const inputBox = document.getElementById('inputBox');

function addToList() {
    pendingTasks.push(inputBox.value)
    console.log(pendingTasks);
}

inputBox.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        addToList;
    }
});


// create and add task to list
/*
write function that loops through pendingTasks array
and creates a p tag inside of the tasksRow container
for each item in the array
*/


