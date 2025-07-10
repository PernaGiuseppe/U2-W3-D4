const pexelsHamsters = 'https://api.pexels.com/v1/search?query=hamsters'
const apiKey = 'OnXxsXU4AN0n1hfzB34Mr8rsmp9OJUqgCGRicbYPZBC3Gi3hsJKljR2q'

const headers = {
  Authorization: apiKey,
}
const loadImagesBtn = document.getElementById('loadImgBTN')
const imgSrc = document.querySelectorAll('.imgToChange')

const getHamsters = () => {
  fetch(pexelsHamsters, { headers: headers })
    .then((risposta) => {
      if (risposta.ok) {
        console.log('Link trovato', risposta)
        return risposta.json()
      } else {
        throw new Error('Errore')
      }
    })

    .catch((error) => console.error('Errore nella fetch:', error))
}
getHamsters()

loadImgBTN.addEventListener('click', () => {
  fetch('https://api.pexels.com/v1/search?query=hamsters', { headers: headers })
    .then((risposta) => risposta.json())
    .then((data) => {
      data.photos.forEach((photo) => {})
    })
    .catch((error) =>
      console.error('Errore nel caricare le immagini dei gatti:', error)
    )
})
