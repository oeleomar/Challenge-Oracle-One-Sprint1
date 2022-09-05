const criptografia = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
};

const descriptografia = {
  ai: 'a',
  enter: 'e',
  imes: 'i',
  ober: 'o',
  ufat: 'u'
};

const textArea = document.querySelector('#text-input');
const cript = document.querySelector('#cript');
const descript = document.querySelector('#descript');
//Display text
const noMessege = document.querySelector('.no-messege');
const messege = document.querySelector('.with-messege');
const paragraph = document.querySelector('.messege-response');
//Button Copiar
const copy = document.querySelector('#copy');

const criptografar = () => {
  showNoMessageDisplay();
  
  const text = textArea.value;
  textArea.value = '';

  const validator = textVerify(text);
  if (validator) return alert('Apenas letras minúsculas e sem acentos');
  if(text.length <= 0) return alert('Textos vazios não são permitidos');
  const newText = text.replace(/a|e|i|o|u/g, changeText);

  showDisplay(newText);
}

const textVerify = (text) => {
  const hasUpper = (str) => /[A-Z]/.test(str);
  const hasAcento = (str) => /[^a-z\s]/.test(str);
  
  return hasUpper(text) || hasAcento(text);
}

const changeText = (text) => {
  if(text === 'a') return criptografia.a;
  if(text === 'e') return criptografia.e;
  if(text === 'i') return criptografia.i;
  if(text === 'o') return criptografia.o;
  if(text === 'u') return criptografia.u;

  if(text === 'ai') return descriptografia.ai;
  if(text === 'enter') return descriptografia.enter;
  if(text === 'imes') return descriptografia.imes;
  if(text === 'ober') return descriptografia.ober;
  if(text === 'ufat') return descriptografia.ufat;
}

const showDisplay = (text) => {
  noMessege.setAttribute('id', 'display-none');
  messege.setAttribute('id', '');
  paragraph.innerText = text;

}

const showNoMessageDisplay = () => {
  messege.setAttribute('id', 'display-none');
  noMessege.setAttribute('id', '');
}

const descripto = () => {
  showNoMessageDisplay();

  const text = textArea.value;
  textArea.value = '';

  const validator = textVerify(text);
  if (validator) return alert('Apenas letras minúsculas e sem acentos');
  if(text.length <= 0) return alert('Textos vazios não são permitidos');
  const newText = text.replace(/ai|enter|imes|ober|ufat/g, changeText);

  showDisplay(newText);
}

const copyText = async () => {
  const text = paragraph.textContent;
  console.log(text);
  if(text.length <= 0) return alert('Nada a copiar');
  await navigator.clipboard.writeText(text);

  copy.innerText = 'Copiado';
  setTimeout(() => {
    copy.innerText = 'Copiar';
  }, 3000);
}

cript.addEventListener('click', criptografar);
descript.addEventListener('click', descripto);
copy.addEventListener('click', copyText);