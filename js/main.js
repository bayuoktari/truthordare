var truth = [
  "Kapan Terakhir Kali Kamu Selingkuh ?",
  "Siapa nama mantan pacar temenmu yang pernah kamu sukai diam-diam ?",
  "Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya kaya kuda ?",
  "Siapa nama artis yang pernah kamu cium fotonya diam-diam ?",
  "Siapa lawan jenis yang paling sering terlintas di pikiranmu ?",
  "Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling ngenes ?",
  "Siapa nama orang yang pernah kamu ikutin diam-diam ?",
  "Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi ?",
  "Apa mimpi terkonyol yang pernah kamu inget ?",
  "Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu ?",
  "Apa hal yang sering kamu pikirkan sebelum tidur ?",
  "Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over ?",
  "Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekitarmu, wajah siapa yang akan kamu tiru ?",
  "Acara tv apa yang paling memuakkan ?",
  "Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman di sebelah kananmu ?",
  "Apa hal pertama yang kamu lihat saat kamu melihat lawan jenis?",
  "Apa hal paling buruk yang pernah kamu bilang tentang temenmu ?",
  "Kenangan bersama mantan yang mana yang belum kamu lupakan ?"
];
var dare = [
  "Makan 1 Sendok makan kecap manis dan kecap asin !",
  "Pergi ke lapangan yg luas, lalu berlari sekencang kencangnya sambil mengatakan “aku gila aku gila !",
  "Ajak orang yg tidak kamu kenal itu selfie berdua dengan mu lalu upload ke instastory !",
  "Ambil minuman apa saja yg ada didekat mu lalu campurkan dengan cabai dan minum !",
  "Cabut bulu kaki mu sendiri sebanyak 3x !",
  "Pura pura kerasukan",
  "Telpon mantan kamu dan bialng 'aku rindu kamu'",
  "Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari !",
  "Telpon salah satu kontak di hape kamu dan bilang “aku mau nikah secepatnya sama kamu”",
  "Hapus semua file yang ada di laptop/komputer/hp kamu !",
  "Teriak di depan umum dan katakan “aku siapa dan aku dimana“",
  "Coret muka sendiri dengan spidol permanen !",
  "Pergi ke Minimarket dan ambil satu barang tanpa bayar !",
  "Peragakan Monyet lagi nari !",
  "Gunting baju kamu sendiri !",
  "Samperin lawan jenis di ruangan ini dan katakan “Nikahin aku secepatnya !“",
  "Makan mie instan tanpa di masak !"
];

function truthClick() {
  let x = Math.floor(Math.random() * truth.length);
  let quest = document.getElementById("quest");
  quest.innerHTML = truth[x];
}
function dareClick() {
  let x = Math.floor(Math.random() * dare.length);
  let quest = document.getElementById("quest");
  quest.innerHTML = dare[x];
}
