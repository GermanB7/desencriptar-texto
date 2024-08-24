function encrypt() {
    const input = document.getElementById('input').value;
    const output = input.replace(/e/g, 'enter')
                       .replace(/i/g, 'imes')
                       .replace(/a/g, 'ai')
                       .replace(/o/g, 'ober')
                       .replace(/u/g, 'ufat');
    updateOutput(output);
}

function decrypt() {
    const input = document.getElementById('input').value;
    const output = input.replace(/enter/g, 'e')
                       .replace(/imes/g, 'i')
                       .replace(/ai/g, 'a')
                       .replace(/ober/g, 'o')
                       .replace(/ufat/g, 'u');
    updateOutput(output);
}

function updateOutput(text) {
    document.getElementById('empty-message').style.display = 'none';
    document.getElementById('output').style.display = 'block';
    document.getElementById('output').value = text;
    document.getElementById('output-panel').querySelector('.buttons').style.display = 'flex';
}

function copy() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
}