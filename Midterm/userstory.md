# Userstory

## As a User

I want to add Dates to my ToDo's to have an overview of when I have to finish it/when it is due. I would also like to sort them by date (ascending and descending).

## As a Developer

### For the DatePicker

- Add a new DatePicker input field
  - Add it to Create ToDo
  - Add it to Edit ToDo
- The Datepicker will need an `onChange` listener and a `changeHandler` function that will update the ToDo's date variable
- Add the date information to the display of each Item

### For the Sorting

- Add a new Button for sorting
  - It has to have an `onClick` listener and a `clickHandler` function that makes it toggle between Ascending and Descending (View and State)
- Create a sorting function for Ascending and Descending
- Apply the corresponding sorting function to the list depending on the buttons state

## What i forgot initially

- Update the `createTodo()` function in the `TodoContext`
- Add the current `sortMode` to the `TodoContext` so that it does not need to be passed through props
- Also add the `toggleSortMode()` function to the `TodoContext` so the `sortMode` can be manipulated from anywhere

##### Slides

https://www.canva.com/design/DAGTxl0MX6M/4cc4XWhRIJWj3v7reIYo1A/edit?utm_content=DAGTxl0MX6M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
