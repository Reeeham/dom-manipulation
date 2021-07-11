
//Dom content loaded event

document.addEventListener('DOMContentLoaded',function(e){
    var titles = document.getElementsByClassName('title');

    console.log(Array.isArray(titles)); //it's a html collection
    console.log(Array.isArray(Array.from(titles))); //it's a html collection
    
    Array.from(titles).forEach(function(item) { 
        console.log(item);
    });
    
    const wrap = document.querySelector('#book-list li:nth-child(2) .name');
    console.log(wrap);
    
    var books = document.querySelector('#book-list li .name'); // it returns only one single item 
    
    books = document.querySelectorAll('#book-list li .name'); // it returns a collection NodeList
    console.log(books);
    
    Array.from(books).forEach(function(book) {
        console.log(book);
    });
    
    //we can use
    books.forEach(function(book){
       //book.textContent += "  title"
       console.log(book);
    });
    
    //we only need Array.from with querySelector because it returns single item 
    
    
    const bookListObject = document.querySelector('#book-list');
    //bookListObject.innerHTML ='<h2>Books and more books..</h2>';
    bookListObject.innerHTML +='<p>this is how you add to html</p>';
    console.log(bookListObject);
    
    const banner = document.querySelector('#page-banner');
    console.log('#page-banner node type is',banner.nodeType);
    console.log('#page-banner node Name is',banner.nodeName);
    console.log('#page-banner hasChildNodes is',banner.hasChildNodes());
    const clonedBanner = banner.cloneNode(true);//true to the content inside element 
    console.log(clonedBanner);
    
    
    console.log(bookListObject.parentNode);
    console.log(bookListObject.parentElement.parentElement);
    console.log(bookListObject.parentElement.childNodes);
    console.log(bookListObject.parentElement.children);
    console.log('book-list next sibling is',bookListObject.nextSibling);
    console.log('book-list next sibling is',bookListObject.nextElementSibling);
    console.log('book-list prev sibling is',bookListObject.previousSibling);
    console.log('book-list prev sibling is',bookListObject.previousElementSibling);
    
    bookListObject.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else!';
    
    var h2 = document.querySelector("#book-list h2").addEventListener('click',function(e){
        console.log(e);
    });
    
    
    const link = document.querySelector('#page-banner a');
    
    link.addEventListener('click', function(e){
        e.preventDefault();
        //will prevent the default action from execution
        console.log(e.target.textContent, 'is prevented');
    });
    
    // var btns = document.querySelectorAll('#book-list .delete'); //all delete buttons 
    // btns.forEach(function(btn){
    //   btn.addEventListener('click', function(e){
    //       const li = e.target.parentElement;
    //       li.parentNode.removeChild(li);
    //   });
    // });
    
    // delete books
    const list = document.querySelector('#book-list ul');
    list.addEventListener('click', function(e) {
        if(e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
            //list.parentNode.removeChild(li);
        }
    });
    
    
    //document.forms[0]
    //document.forms['add-book]
    
    //add books
    const addForm = document.forms['add-book'];
    addForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const value = addForm.querySelector('input[type="text"]').value;
            console.log('input value',value);
    
            //create element
            const li = document.createElement("li");
            const bookName = document.createElement("span");
            const deleteBtn = document.createElement("span");
             
    
             //append to document
             bookName.textContent = value;
             bookName.classList.add('name');
             //bookName.classList.remove('name');
             deleteBtn.textContent = "delete";
             //deleteBtn.style.color = 'red'
             //deleteBtn.style.marginTop = '30px'
             deleteBtn.className = 'delete';
             li.appendChild(bookName);//to the end
             li.appendChild(deleteBtn);
             list.appendChild(li);
    
    });
    
    
    //attributes of html elements
    var book = document.querySelector('li:first-child .name');
    var attr1 = book.getAttribute('class');
    var attr2 = book.getAttribute('href');
    book.setAttribute('class','name-2');
    book.hasAttribute('class');//true
    book.removeAttribute('class');
    
    
    //checkboxes and change events
    //hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change',function(e){
        if(hideBox.checked){
            list.style.display = 'none';
        }else { 
            list.style.display = 'block';
        }
    });
    
    
    //custom search
    //filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup',function(e){
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach(function(book) {
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) != -1) {
                book.style.display = 'block';
            } else { 
                book.style.display = 'none';
            }
        });
    });
    
    
    //tabbed content
    
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', function(e) {
        if(e.target.tagName == 'LI') {
            const targetPanel = document.querySelector(e.target.dataset.target);//#about
            panels.forEach(function(panel){
                if(panel == targetPanel){
                    panel.classList.add('active');
                }else {
                    panel.classList.remove('active');
                }
            });
        }
    });
    
})