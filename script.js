function helloWorld() {
    alert('hi!')
}
/*
let images = document.querySelector(".image");
console.log(images)
*/

document.addEventListener("DOMContentLoaded", () => {
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('date') // Extract info from data-* attributes¨
        var imageSource = button.data('src');
        console.log(recipient);
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)

        console.log(modal);
        console.log(typeof modal)
        var ele = modal.find('.modal-body #imageInfocus');//.setAttribute('src',"imageSource");
        console.log(ele[0])
        ele[0].setAttribute('src',imageSource);
        //modal.getElementById('imageInfocus').setAttribute('src',"imageSource")
      })
  });

  
