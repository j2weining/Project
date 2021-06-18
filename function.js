function calculate() {
    let name = document.getElementById('name').value;
    let tele = document.getElementById('tele').value;
    let address = document.getElementById('address').value;
    let pname1 = document.getElementById('pname1').value;
    let price1 = document.getElementById('price1').value;
    let quantity1 = document.getElementById('quantity1').value;
    let pname2 = document.getElementById('pname2').value;
    let price2 = document.getElementById('price2').value;
    let quantity2 = document.getElementById('quantity2').value;

    var total1 = price1 * quantity1;
    var total2 = price2 * quantity2;
    var GTotal = total1 + total2;

    if (name == '') {
        alert('Please enter your name.')
    } else if (tele == '') {
        alert('Please enter your telephone number.')
    } else if (address == '') {
        alert('Please enter your address.')
    } else if (pname1 == '') {
        alert('Please enter product name')
    } else if (price1 == '') {
        alert('Please enter product price.')
    } else if (quantity1 == '') {
        alert('Please enter product quantity.')
    } else if (pname2 == '') {
        alert('Please enter product name.')
    } else if (price2 == '') {
        alert('Please enter product price')
    } else if (quantity2 == '') {
        alert('Please enter product quantity.')
    } else {
        document.getElementById('oname').innerHTML = name;
        document.getElementById("otele").innerHTML = tele;
        document.getElementById('oaddress').innerHTML = address;
        document.getElementById('opname1').innerHTML = pname1;
        document.getElementById('oprice1').innerHTML = price1;
        document.getElementById('oquantity1').innerHTML = quantity1;
        document.getElementById('total1').innerHTML = 'RM' + total1;
        document.getElementById('opname2').innerHTML = pname2;
        document.getElementById('oprice2').innerHTML = price2;
        document.getElementById('oquantity2').innerHTML = quantity2;
        document.getElementById('total2').innerHTML = 'RM' + total2;
        document.getElementById('GTotal').innerHTML = 'RM' + GTotal;
    }
}

function reset() {
    location.reload()
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}