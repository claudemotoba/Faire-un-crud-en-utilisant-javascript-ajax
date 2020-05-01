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
})
