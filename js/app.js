document.addEventListener("DOMContentLoaded", (event) => {
    
    const $linkSave =document.querySelector('.submit')
    const $addFavoris =document.querySelector('.favori-form')



    
    $addFavoris.addEventListener("click", () => {


        fetch('http://10.59.122.17:8100', {
            method: 'POST' ,
            headers: {Authorization: 'Bearer {d531765f44a694d70b23744ecd624ea2}'}
          })
             .then(resp => resp.json())
             .then(json => console.log(JSON.stringify(json)))

            //  ?? je ne saurais pas comment post 


    });



    
    $linkSave.addEventListener("click", () => {
        console.log("boutton fonctionelle")
        fetch('http://10.59.122.17:8100', {
            headers: {Authorization: 'Bearer {d531765f44a694d70b23744ecd624ea2}'}
          })
             .then(resp => resp.json())
             .then(json => console.log(JSON.stringify(json)))
            const $favorisWrapper = document.querySelector('.favoris-container')
            
            favoris.forEach(function (fav) {
                const $liFav = document.createElement('li')

                const $link = document.createElement('a')
                $link.textContent = fav.url

                const $description = document.createElement('p')
                $description.classList.add('.description')
                $description.textContent = fav.description


                $liFav.appendChild($description)
                $liFav.appendChild($link)

                $favorisWrapper.appendChild($liFav)

            });

            
            
    })



  });
  

