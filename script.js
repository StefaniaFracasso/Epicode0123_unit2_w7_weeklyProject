const URL = 'https://striveschool-api.herokuapp.com/api/product/'
const APIKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MWZkNmY4MWI0MjAwMTM5YjI3YmYiLCJpYXQiOjE2NzkwNDA0NzAsImV4cCI6MTY4MDI1MDA3MH0.El-VrUKELdb6sVNDflMAoPg2UMvK3nQbdvlkNgWJNYM"

displayProducts = function(data) {
    let rowReference = document.getElementById('prodotti')
    data.forEach(data => {
        let newCol = document.createElement('div');
        newCol.classList.add('col-md-4');
        newCol.innerHTML = `
        <div class="card me-2 my-4 shadow">
        <img src="${data.imageUrl}" class="card-img-top img-fluid" alt="${data.name}  style="width:300px">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.description}</p>
          <p class="card-text">${data.price} €</p>
          <a href="./details.html?eventId=${data._id}" class="btn btn-primary">Scopri di più</a>
          <a href="./backoffice.html?eventId=${data._id}" class="btn btn-warning">Modifica</a>
        </div>
      </div>
        `;
        rowReference.appendChild(newCol);
    })

}

const hideSpinner = function () {
    let spinnerReference = document.getElementsByClassName(
      'spinner-border text-warning'
    )[0]
    spinnerReference.classList.add('d-none')
  }

const getProducts = function () {
    fetch(URL, {
        method: "GET",
        headers: {
            Authorization: APIKey
        }
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          return new Error('Errore nella gestione della chiamata')
        }
      })
      .then((products) => {
        console.log('PRODOTTI', products)
        hideSpinner()
        displayProducts(products)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getProducts()
