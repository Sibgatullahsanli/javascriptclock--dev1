
/*Bu kod bölümü sayfa açılışında isim sormak için başkasının yazdığı kod 
Ancak bunun çalışması için htm bölümünde badiye şunun eklenmesi gerekir:->onload="myFunction()"
*/
// function myFunction() {
//     const name = prompt("Lütfen adınızı giriniz: ");
//     document.getElementById("myName").innerHTML = name;
// }

let fulName = prompt("Lütfen Adınızı Giriniz:")
fulName = fulName.toUpperCase()
let myName = document.querySelector("#myName")

myName.innerHTML = fulName 



function showTime(){
    var date = new Date();
    var saat = date.getHours(); // 0 - 23
    var dakika = date.getMinutes(); // 0 - 59
    var saniye = date.getSeconds(); // 0 - 59
    var today = date.toLocaleDateString("tr-TR", { weekday: 'long' });  
  
    // Saat, dakika ve saniyenin her zaman çift hane görünebilmesi için ternany ifade
    saat = (saat < 10) ? "0" + saat : saat;
    dakika = (dakika < 10) ? "0" + dakika : dakika;
    saniye = (saniye < 10) ? "0" + saniye : saniye;
    
    var time = saat + ":" + dakika + ":" + saniye + " " + today;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
  }
  
  showTime();
