// Original value

const table = document.querySelector('table')
const boutonValider = document.querySelector('#btn')
const boutonMettreAjour = document.querySelector('#maj')
const tbody = document.querySelector('#tbody');
const form = document.querySelector('.ui');
const boutonreinitialiser = document.querySelector('#reinitialiser')
const users = []

boutonMettreAjour.style.display = 'none'
boutonreinitialiser.style.display = 'none'

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
                tbody.textContent = ' ';
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
                                        <td><button type='button' class="bt-${users[i].id}"><i class="fas fa-edit"></i></button><input type='hidden' value="${i}"></td>
                                        <td><button id="btn-${users[i].id}" type='button'><i class="fas fa-trash-alt"></i></button><input type='hidden' value="${i}"></td></tr>`;

                            tbody.insertAdjacentHTML('beforeend', htmlSTRING);

                            // bouton supprimer

                            const btnDelete = document.querySelector(`#btn-${users[i].id}`);
                            const employeID = users[i].id;
                            btnDelete.addEventListener('click', function() {

                                // affichage d'un alert

                                if (confirm(
                                    `Etes-vous sûr de supprimer l'employé ${monObjet.firstName}  ${monObjet.name}`
                                  )){
                                        const tr = document.querySelector(`#row-${users[i].id}`);
                                        console.log('TBODY : ', tbody);
                                        console.log('TR : ', tr);
                                        tbody.removeChild(tr);
                                        for (let i = 0; i < users.length; i++) {
                                            if (users[i].id === employeID) {
                                                users.splice(i, 1);
                                            }
                                        }         
                                }
                                
                            });

                            // btn Modifier

                            const btnModifier = document.querySelector(`.bt-${users[i].id}`)
                            console.log(btnModifier);
                            
                            btnModifier.addEventListener('click', function () {
                                firstName.value =  monObjet.firstName;
                                name.value = monObjet.name;
                                email.value = monObjet.email;
                                old.value = monObjet.old;
                                post.value = monObjet.post;
                                number.value = monObjet.number;
                                state.value = monObjet.state;
                                country.value = monObjet.country;
                                checkbox.checked = true;
                                boutonValider.style.display = 'none';
                                boutonMettreAjour.style.display = 'inline';
                            })

                            // checkbox
            
                            checkbox.addEventListener('click', function () {
                                if (checkbox.checked) {
                                    boutonMettreAjour.style.display = 'inline';
                                    boutonValider.style.display = 'none'
                                }else{
                                    boutonMettreAjour.style.display = 'none';
                                }
                            })
                }
            }

            AjouterUnEmployer()

            form.reset();

                // button mettre a jour

                boutonMettreAjour.addEventListener('click', function (e) {
                    e.preventDefault()

                    let index= users.findIndex(a => a.id === nombreAleatoir())
                    users.splice(index, 1, {
                             id: nombreAleatoir(),
                        firstName: firstName.value,
                        name: name.value,
                        email: email.value,
                        old: old.value,
                        post: post.value,
                        number: number.value,
                        state: state.value,
                        country: country.value
                    })
                    console.log(index);

                    AjouterUnEmployer()

                    // checkbox 

                    boutonMettreAjour.style.display = 'none';

                    checkbox.addEventListener('click', function () {
                        if (checkbox.checked) {
                            boutonMettreAjour.style.display = 'none';
                            boutonValider.style.display = 'inline';    
                        }else{
                            boutonValider.style.display = 'none';
                        }
                    })
                    boutonreinitialiser.style.display = 'inline';
                    boutonreinitialiser.addEventListener('click', function () {
                        boutonreinitialiser.style.display = 'none';
                    })
                })
        }   
})
