console.log('$', $)

//click button, add todo list item

function addItem () {
  //get input
  let input = $('input')
  console.log('input', input)
  //get value of input
  let inputVal = input.val()
  console.log('inputVal', inputVal)
  //add value to list of items in $(.todo-list)
  let list = $('.todo-list')
  //create element to append to list
  let styleObj = {
    "display": "flex",
    'justify-content': 'space-around'
  }
  let listItem = $("<li></li>")
  // add input to li
  listItem.text(inputVal)
  //add inputVal to listItem
  let listItemVal = listItem.text(inputVal)
  //add item to list
  list.append(listItemVal)
  //clear input
  input.val('')

  //on hover, add delete button
  listItem.hover(function() {
    let deleteBtn = $('<button onclick='deleteItem')
  })

}