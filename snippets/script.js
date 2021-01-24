

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
postscribe('#scr', `<script src="https://gist.github.com/anwarulislam/${id}.js"></script>`);
