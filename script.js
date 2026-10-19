const tabs = document.querySelectorAll('.tab');
const snippets = { curl: 'code-curl', js: 'code-js', py: 'code-py' };
let active = 'curl';

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    active = tab.dataset.tab;
    tabs.forEach(t => t.classList.toggle('active', t === tab));
    document.querySelectorAll('.snippet').forEach(s => s.classList.remove('show'));
    document.getElementById(snippets[active]).classList.add('show');
  });
});

const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', async () => {
  const text = document.getElementById(snippets[active]).innerText;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Copied!';
  } catch (e) {
    copyBtn.textContent = 'Press Ctrl+C';
  }
  setTimeout(() => (copyBtn.textContent = 'Copy'), 1800);
});
