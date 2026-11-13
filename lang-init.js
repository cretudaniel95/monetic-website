(function() {
  try {
    var saved = localStorage.getItem('monetic_preferred_lang');
    var lang = (saved === 'ro' || saved === 'en') ? saved : (navigator.language && navigator.language.toLowerCase().startsWith('ro') ? 'ro' : 'en');
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.classList.remove('lang-en', 'lang-ro');
    document.documentElement.classList.add('lang-' + lang);
  } catch (e) {}
})();
