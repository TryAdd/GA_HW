function init(){
    const image = document.querySelector('img')
    const weather = document.querySelector('#weather')
    const weatherbh = document.querySelector('#weatherbh')
    const weatherCity = document.querySelector('#weathercity')
    const quotes = document.querySelector('#quotes')
    const clock = document.querySelector('#clock')
    
    const category = 'happiness'

    //? image
    // axios({
    //     method:'get', 
    //     url: 'https://api.unsplash.com/photos/random/?client_id=iWGs2nYvmlTh-Cvabs1pfDWKGwTaohyHMORn0DnvE_4'
    // })
    // .then(response => {
    //     // image.src = response.data.message
    //     image.src = response.data.urls.regular;
    // })
    // .catch(error =>{
    //     console.log(error)
    // })

    //! weather
    axios({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=26.232691&lon=50.578110&appid=9e844cd4de1a64caa31e0c75c2eae257&units=metric'
    })
    .then(response =>{
        weather.textContent = response.data.main.temp
    })
    .catch(error =>{
        console.log(error)
    })

    //* weather bh
    axios({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=26.232691&lon=50.578110&appid=9e844cd4de1a64caa31e0c75c2eae257'
    })
    .then(response =>{
        weatherbh.textContent = response.data.sys.country
    })
    .catch(error =>{
        console.log(error)
    })

    //* weather city
    axios({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=26.232691&lon=50.578110&appid=9e844cd4de1a64caa31e0c75c2eae257'
    })
    .then(response =>{
        weatherCity.textContent = response.data.name
    })
    .catch(error =>{
        console.log(error)
    })

    //? quetes
    axios({
        method: 'get',
        url: 'https://api.api-ninjas.com/v1/quotes?category='+ category,
         headers: {
             'X-Api-Key': 'WCtDaqm3mLXGM3LtEGMf/w==RFVqXpE2bCBAuHXp'
          }
    })
    .then(response =>{
        // console.log(response.data)
        quotes.textContent = response.data[0].quote
    })
    .catch(error =>{
        console.log(error)
    })

    // console.log(moment().format('LTS'))
    clock.textContent = moment().format('LTS')
}

window.addEventListener('DOMContentLoaded', init)

