var removeCartItemButton = document.getElementsByClassName('btn-remove')
console.log(removeCartItemButton)
for (var i = 0; i < removeCartItemButton.length; i++){
    var button = removeCartItemButton[i]
    button.addEventListener('click', function(event){
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
    })
}