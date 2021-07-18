const form = document.getElementById('forms')

forms.addEventListener('submit', (e) => {

    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let fone = document.getElementById('fone').value;
    let data = {
        nome,
        email,
        fone,
    }
    let cenvertData = JSON.stringify(data);

    localStorage.setItem('lead', cenvertData)    
    
})