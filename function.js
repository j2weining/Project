function calculate() {
    let selection1 = confirm('Are you sure to calculate?');
    if (selection1 == true) {

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

        if (name != "") {
            if (tele != "") {
                if (address != "") {
                    if (pname1 && pname2 != "") {
                        if(price1 && price2 != ""){
                            if(quantity1 && quantity2 != ""){
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
                            }else{
                                alert('Please enter product quantity.')
                                location.reload()
                            }
                        }else{
                            alert('Please enter product price')
                            location.reload()
                        }
                    }else{
                        alert('Please enter product name.')
                        location.reload()
                    }
                }else{
                    alert('Please enter your address.')
                    location.reload()
                }
            }else{
                alert('Please enter your telephone number.')
                location.reload()
            }
        }else{
            alert('Please enter your name.')
            location.reload()
        }
    }
    else{
        alert('Sorry, Please try again.')
        location.reload()
    }
}
function reset(){
    location.reload()
}