const kawasakoButton = document.getElementById('kawasako-btn');
const vixianButton = document.getElementById('vixian-btn')
const inputForm = document.getElementById('input-form');

kawasakoButton.addEventListener('click', showForm);
vixianButton.addEventListener('click', showForm);

//  function showForm() {
//     console.log('Clicked!');
//     inputForm.classList.add('input-form');
//     kawasakoButton.classList.remove('choose-product');
//     // kawasakoButton.classList.add('choose-product');
//     // inputForm.classList.remove('input-form');
//  }

function showForm() {
//    alert("clicked!");
//    kawasakoButton.hide();
//    inputForm.show();
    document.getElementById('hide-content').style.display = "none";
    inputForm.style.display = "block";
    if(kawasakoButton.onclick === true) {
        document.getElementById('vixian-pict').style.display = "none";
        document.getElementById('kawasako-pict').style.display = "block";
    }
}