let num = 0;

$('#todo-button').click(function(){
  let input = $('#add-todo-input').val();

  if(input != ''){
    num++
    let listItem = $('<li>')
    listItem.attr('id', num);
    listItem.attr('class', 'list-item')
    $('#todos-div').append(listItem);
    listItem.text(input);
    console.log(listItem)

    const xButton = $('<button>')
    listItem.append(xButton);
    xButton.text('x')
    xButton.click(function(){
      $(this).parent(num).remove();
    });
  }else{
    alert('Please Enter To-Do');
  }

  $('.list-item').click(function(){
    console.log('This works')
    $('#update-todo-modal').show()
  });


  $('#update-text-button').click(function(){
    let newVal = $('#update-text-input').val();
    console.log(newVal)
    input = $('#update-text-input').val()
  });

  $('.close-button').click(function(){
    $('#update-todo-modal').hide();
  })





});
