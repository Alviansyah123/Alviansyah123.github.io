var countDate = new Date("jul 20 2022 00:00:00").getTime();
function Sunmori() {
  var now = new Date().getTime();
  gap = countDate - now;

  var detik = 1000;
  var menit = detik * 60;
  var jam = menit * 60;
  var hari = jam * 24;

  var h = Math.floor(gap / hari);
  var j = Math.floor((gap % hari) / jam);
  var m = Math.floor((gap % jam) / menit);
  var d = Math.floor((gap % menit) / detik);

  document.getElementByid("hari").innerText = h;
  document.getElementByid("jam").innerText = j;
  document.getElementByid("menit").innerText = m;
  document.getElementByid("detik").innerText = d;
}

setInterval(function () {
  Sunmori();
}, 1000);
