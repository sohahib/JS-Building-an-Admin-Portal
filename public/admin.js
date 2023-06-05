
// Your Code Here
async function getData(){
    let result =  await fetch('http://localhost:3001/listBooks')
    let books =  await result.json()
    
    books.forEach(book =>{
        let bookList = document.getElementById('root')
    
        let list = document.createElement('li')
        list.textContent = book.title
    
        let textInput = document.createElement('input')
        textInput.value = book.quantity
    
        let saveButton = document.createElement('button')
        saveButton.textContent = 'Save'
        saveButton.style.border = 'none'
        
        saveButton.addEventListener('click', ()=>{
            fetch('http://localhost:3001/updateBook',{
                method:'PATCH',
                headers:{
                    'conten-Type':'application/json'
                },
                body:JSON.stringify({
                    id: book.id,
                    quantity: textInput.value
                })
            })
        })

        list.append(textInput, saveButton)
        bookList.append(list);
    })
}
getData()



// function renderBooks(book){
   

// }
