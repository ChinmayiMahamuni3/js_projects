
let input = document.getElementById('task')
let addBtn = document.getElementById('addButton')
let unList = document.getElementById('taskList')
let subCon = document.querySelector('.sub-container')

// console.log(document.getElementsByClassName('sub-container'));



addBtn.addEventListener('click', function(){

    if(input.value == ""){
        alert("Please add task!!");
    }else{
         
        subCon.style.visibility = 'visible';
        let li = document.createElement('li');
        li.textContent = input.value;
        li.classList.add('list-item')

        let delBtn = document.createElement('button')
        delBtn.textContent = "X"
        delBtn.id = "del-button"

        delBtn.addEventListener('click',function(){
            li.remove();

            if (unList.children.length === 0) {
                subCon.style.visibility = 'hidden';
            }
        })

        unList.appendChild(li);
        li.appendChild(delBtn);

        input.value = "";
    }

})