let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

// Function to add items
function addItem(e) {
    e.preventDefault();

    // Getting the input value
    let newItem = document.getElementById('item').value;

    // Create a new li element
    let li = document.createElement('li');
    // Add class to the li
    li.className = 'list-group-item';
    // Append the newItem to the created li
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    let delBtn = document.createElement('button');
    // Add classes to the btn
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    delBtn.appendChild(document.createTextNode('X'));
    //Append btn to li
    li.appendChild(delBtn);

    // Appending li to the list ul
    itemList.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    // Convert text to lower case
    let text = e.target.value.toLowerCase();

    // Get li
    let items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}