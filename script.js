// Original value

const table = document.querySelector('table')
const boutonValider = document.querySelector('#btn')
const boutonMettreAjour = document.querySelector('#maj')
const tbody = document.querySelector('#tbody');
const form = document.querySelector('.ui');
const boutonreinitialiser = document.querySelector('#reinitialiser')
const users = []
const identifiant = document.querySelector('#identifiant')

// Recuperation des inputs

const firstName = document.querySelector('#firstName')
const names = document.querySelector('#names')
const email = document.querySelector('#email')
const post = document.querySelector('#post');
const number = document.querySelector('#number');
const state = document.querySelector('#state');
const country = document.querySelector('#country');

// checkbox area

const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        boutonValider.style.display = 'inline';
    }else{
        boutonValider.style.display = 'none';
    }
}) 

boutonValider.style.display = 'none'
boutonMettreAjour.style.display = 'none'
boutonreinitialiser.style.display = 'none'
identifiant.setAttribute('readOnly', 'true')

var monObjet = {
    firstName: firstName.value,
    names: names.value,
    email: email.value,
    post: post.value,
    number: number.value,
    state: state.value,
    country: country.value,
}

users.push(monObjet)

nouvelEmploye()

function nouvelEmploye() {
    axios.get('http://167.71.45.243:4000/api/employes?api_key=xjsljqa').then(function(response){
     const createEmploye = () =>{
        //console.log(response.data);
        for ( property of response.data) {
            const a = `<tr>
                        <td>${property._id}</td>
                        <td>${property.prenom}</td>
                        <td>${property.nom}</td>
                        <td>${property.email}</td>
                        <td>${property.poste}</td>
                        <td>${property.numeroTelephone}</td>
                        <td>${property.estMarie}</td>
                        <td>${property.pays}</td>
                        <td><button type='button' class="bt-${property._id} btn btn-primary"><i class="fas fa-edit"></i></button><input type='hidden' value="${property}"></td>
                        <td><button id="btn-${property._id}" type='button' class="btn btn-danger"><i class="fas fa-trash-alt"></i></button><input type='hidden' value="${property}"></td></tr>`
                        tbody.insertAdjacentHTML('beforeend', a);


                        const btnDelete = document.querySelector(`#btn-${property._id}`);
                        btnDelete.style.backgroundColor = 'red';
                        const employeID = property._id;
                        btnDelete.addEventListener('click', function() {

                        // affichage d'un alert

                            if (confirm(
                                `Etes-vous sûr de vouloir supprimer cet employé`
                            )){       
                                axios.delete(`http://167.71.45.243:4000/api/employes/${employeID}?api_key=xjsljqa`).then(function(response) {
                                console.log(response);
                                }).catch(function(erreur) {
                                    console.log(erreur);
                                })
                            }
                        
                        });

                            const btnModifier = document.querySelector(`.bt-${property._id}`)
                            btnModifier.style.backgroundColor = 'blue';
                            const idEmploye = property._id
                            //console.log(btnModifier);
                            
                            btnModifier.addEventListener('click', function () {
                                identifiant.style.display = 'inherit';
                                identifiant.setAttribute('readOnly', 'true')
                                axios.get(`http://167.71.45.243:4000/api/employes/${idEmploye}?api_key=xjsljqa`).then(function(response) {
                                    
                                    identifiant.value = response.data._id;
                                    firstName.value =  response.data.prenom;
                                    names.value = response.data.nom;
                                    email.value = response.data.email;
                                    post.value = response.data.poste;
                                    number.value = response.data.numeroTelephone;
                                    state.value = response.data.estMarie;
                                    country.value = response.data.pays;
                                    checkbox.checked = true;
                                    boutonValider.style.display = 'none';
                                    boutonMettreAjour.style.display = 'inline';
                                }).catch(function(erreur) {
                                    console.log(erreur);
                                })
                                // checkbox
            
                                checkbox.addEventListener('click', function () {
                                    if (checkbox.checked) {
                                        boutonValider.style.display = 'none'
                                        boutonMettreAjour.style.display = 'inline';
                                    }else{
                                        boutonMettreAjour.style.display = 'none';
                                    }
                                })

                                
                            })
                    
        }
     }
     createEmploye()
    }).catch(function(erreur){
    console.log(erreur)
    })

}

boutonMettreAjour.addEventListener('click', function (e) {
    e.preventDefault()
    
    const userId = identifiant.value;
    axios.put(`http://167.71.45.243:4000/api/employes/${userId}?api_key=xjsljqa`, {    
        prenom: firstName.value,
        nom: names.value,
        email: email.value,
        poste: post.value,
        numeroTelephone: number.value,
        estMarie: state.value,
        pays: country.value}).then(function(response) {

            // checkbox 

            boutonMettreAjour.style.display = 'none';
            checkbox.checked = true;

            checkbox.addEventListener('click', function () {
                if (checkbox.checked) {
                    boutonValider.style.display = 'inline';    
                }else{
                    boutonValider.style.display = 'none';
                }
            })

    }).catch(function(erreur) {
        console.log(erreur);
    })


})

// Creation d'un nouvel enregistrement

boutonValider.addEventListener('click', function(e){
    
        e.preventDefault();
          
        //error handling

        const erreurPrenom = document.querySelector('#erreurPrenom');
        const nameError = document.querySelector('#nameError');
        const postError = document.querySelector('#postError');
        const stateError = document.querySelector('#stateError');
        const countryError = document.querySelector('#countryError');
            
            if (!firstName.value.length) {
                erreurPrenom.innerText = 'Ce champ est obligatoire'
            }else{
                erreurPrenom.innerText = ' '
            };
            
            if (!names.value.length) {
                nameError.innerText = 'Ce champ est obligatoire'
            }else{
                nameError.innerText = ' '
            }
            
            if (!post.value.length) {
                postError.innerText = 'Ce champ est obligatoire'
            }else{
                postError.innerText =''
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

        if (firstName.value.length && names.value.length && post.value.length && state.value.length && country.value.length) {

            let objetApi ={
                prenom: firstName.value,
                nom: names.value,
                email: email.value,
                poste: post.value,
                numeroTelephone: number.value,
                estMarie: state.value,
                pays: country.value, 
            }

            console.log(objetApi);
            
            axios.post(`http://167.71.45.243:4000/api/employes/?api_key=xjsljqa`, objetApi).then(function(response) {
                console.log(response.data);

                

            }).catch(function(erreur) {
                console.log(erreur);
            })


                
        }   
})
