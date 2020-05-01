// Original value

const table = document.querySelector('table')
const boutonValider = document.querySelector('#btn')
const boutonMettreAjour = document.querySelector('#maj')
const tbody = document.querySelector('#tbody');
const users = []

boutonMettreAjour.style.display = 'none'

// checkbox area

const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        boutonValider.style.display = 'inline';
    }else{
        boutonValider.style.display = 'none';
    }
})
// Beginning of the event

boutonValider.addEventListener('click', function(e){
    
        e.preventDefault();
        // value recovery
       
        
        const firstName = document.querySelector('#firstName')
        const name = document.querySelector('#name')
        const email = document.querySelector('#email')
        const old = document.querySelector('#old');
        const post = document.querySelector('#post');
        const number = document.querySelector('#number');
        const state = document.querySelector('#state');
        const country = document.querySelector('#country');
        tbody.textContent = ' ';

        //error handling

        const erreurPrenom = document.querySelector('#erreurPrenom');
        const nameError = document.querySelector('#nameError');
        const mailError = document.querySelector('#mailError');
        const postError = document.querySelector('#postError');
        const numberError = document.querySelector('#numberError');
        const stateError = document.querySelector('#stateError');
        const countryError = document.querySelector('#countryError');
            
            if (!firstName.value.length) {
                erreurPrenom.innerText = 'Ce champ est obligatoire'
            }else{
                erreurPrenom.innerText = ' '
            };
            
            if (!name.value.length) {
                nameError.innerText = 'Ce champ est obligatoire'
            }else{
                nameError.innerText = ' '
            }
            
            if (!email.value.length) {
                mailError.innerText = 'Ce champ est obligatoire'
            }else{
                mailError.innerText =''
            }
            
            if (!post.value.length) {
                postError.innerText = 'Ce champ est obligatoire'
            }else{
                postError.innerText =''
            }
            
            if (!number.value.length) {
                numberError.innerText = 'Ce champ est obligatoire'
            }else{
                numberError.innerText =''
            }
            
            if (!state.value.length) {
                stateError.innerText = 'Ce champ est obligatoire'
            }else{
                stateError.innerText =''
            }
            
            if (!country.value.length) {
                countryError.innerText = 'Ce champ est obligatoire'
            }else{
                countryError.innerText =''
            }

        // si toutes les cases sont remplit

        if (firstName.value.length && name.value.length && email.value.length && post.value.length && number.value.length && state.value.length && country.value.length) {
            
            // Generer un nombre aleatoire pour le matricule

            function nombreAleatoir () {
                return Math.floor(Math.random() * 1678404); 
            }

            // creation d'un objet

            let monObjet = {
                id: nombreAleatoir(),
                firstName: firstName.value,
                name: name.value,
                email: email.value,
                old: old.value,
                post: post.value,
                number: number.value,
                state: state.value,
                country: country.value,
            }

            users.push(monObjet)

            // Ajouter des elements dans le tableau

            const AjouterUnEmployer = ()=>{
                for (let i = 0; i < users.length; i++) {
                    const htmlSTRING = 
                                      `<tr id="row-${users[i].id}">
                                        <td>${users[i].id}</td>
                                        <td>${users[i].firstName}</td>
                                        <td>${users[i].name}</td>
                                        <td>${users[i].email}</td>
                                        <td>${users[i].old}</td>
                                        <td>${users[i].post}</td>
                                        <td>${users[i].number}</td>
                                        <td>${users[i].state}</td>
                                        <td>${users[i].country}</td>
                                        <td><button type='button'>modifier</button><input type='hidden' value="${i}"></td>
                                        <td><button id="btn-${users[i].id}" type='button'>supprimer</button><input type='hidden' value="${i}"></td></tr>`;

                            tbody.insertAdjacentHTML('beforeend', htmlSTRING);
                }
            }

            AjouterUnEmployer()
            
            // reinitialisation de zone de saisie

            function reinitialisation() {
                firstName.value ='';
                name.value ='';
                email.value ='';
                old.value ='';
                post.value = '';
                number.value ='';
                state.value ='';
                country.value ='';
                checkbox.checked = false;
                boutonValider.style.display = 'none';
            }

            reinitialisation()
        }   
})
