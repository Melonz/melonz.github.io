if (window.location.hash.length >= 3) {
  const h = window.location.hash.replace('#','');
  document.getElementById(h.toLowerCase()).className += ' hashed';
  // window.location.hash = '';
}
