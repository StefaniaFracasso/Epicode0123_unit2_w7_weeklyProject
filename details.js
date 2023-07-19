const URL = 'https://striveschool-api.herokuapp.com/api/product/'
const APIKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MWZkNmY4MWI0MjAwMTM5YjI3YmYiLCJpYXQiOjE2ODk3NTMzMTAsImV4cCI6MTY5MDk2MjkxMH0.EP_lTsrhXAAveyiEhHAMnkzCHcPHZ2UUVX-WZJeoptc"

let productId = new URLSearchParams(window.location.search).get('eventId')
console.log('productId', productId)

const getSingleProduct = async function () {
    try {
      let response = await fetch(URL + productId, {
        headers: {
            method: 'GET',
            Authorization: APIKey
        }
    })
      if (response.ok) {
        let productData = await response.json()
        console.log(productData)

        let containerDivReference = document.getElementById('details-container')
        containerDivReference.innerHTML = `
        <div class="row">
        <div class="col col-12 col-md-6 py-5 text-md-end" >
            <img src="${productData.imageUrl}" alt="${productData.name}" class="img-fluid"> 
        </div>
        <div class="col col-12 col-md-6 d-flex flex-column justify-content-center">
            <h2>${productData.name}</h2>
            <h6>${productData.brand}</h6>
            <h3>${productData.price} €</h3>
            <p>${productData.description}</p>
            <div class="col col-md-4">
            <button type="button" class="btn btn-primary">Acquista</button>
        </div>
        </div>
    </div>
        `
      } else {
        return new Error("Problema nel recuperare i dettagli del prodotto")
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  getSingleProduct()
