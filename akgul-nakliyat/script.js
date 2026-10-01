(function () {
  var PHONE = '904240000000'; // WhatsApp numarası (başında + olmadan)
  document.getElementById('y').textContent = new Date().getFullYear();

  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
  });

  var form = document.getElementById('form');
  var note = document.getElementById('note');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ad = form.ad, tel = form.tel;
    [ad, tel].forEach(function (f) { f.classList.remove('err'); });
    var digits = tel.value.replace(/\D/g, '');
    if (!ad.value.trim() || digits.length < 10) {
      (ad.value.trim() ? tel : ad).classList.add('err');
      note.textContent = 'Lütfen ad soyad ve geçerli bir telefon numarası girin.';
      return;
    }
    note.textContent = '';
    var text = 'Merhaba, Akgül Nakliyat web sitesinden yazıyorum.\n' +
      'Ad: ' + ad.value.trim() + '\nTelefon: ' + tel.value.trim() +
      '\nHizmet: ' + form.hizmet.value +
      (form.mesaj.value.trim() ? '\nMesaj: ' + form.mesaj.value.trim() : '');
    window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });
})();
