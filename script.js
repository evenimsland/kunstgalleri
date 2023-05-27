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
        var pdata = button.data('p');
        console.log(recipient);
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        
        var modal = $(this)
        modal.find('.modal-title').text('New messag to ' + recipient)
        modal.find('.modal-body input').val(recipient)

        console.log(modal);
        console.log(typeof modal)
        modal.find('.modal-body #imageInfocus')[0].setAttribute('src',imageSource);//.setAttribute('src',"imageSource");
        modal.find('.modal-body #pExample')[0].innerHTML = pdata;
        //modal.getElementById('imageInfocus').setAttribute('src',"imageSource")
      })
  });

  
