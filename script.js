function showPage(id) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

function cekNilai() {
  let nilai = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');
  const q5 = document.querySelector('input[name="q5"]:checked');

  if (q1 && q1.value === "a") nilai += 20;
  if (q2 && q2.value === "b") nilai += 20;
  if (q3 && q3.value === "a") nilai += 20;
  if (q4 && q4.value === "a") nilai += 20;
  if (q5 && q5.value === "a") nilai += 20;

  const hasil = document.getElementById("hasil");

  if (hasil) {
    if (nilai >= 80) {
      hasil.innerHTML = "Nilai kamu: " + nilai + "/100<br>Selamat, kamu sudah memahami materi hardware komputer.";
    } else {
      hasil.innerHTML = "Nilai kamu: " + nilai + "/100<br>Pelajari kembali materi hardware komputer.";
    }
  }
}