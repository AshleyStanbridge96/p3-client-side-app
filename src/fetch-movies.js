
const jokeURI = 'http://numbersapi.com/random/trivia'
/*{
    "fact": "string",
    "length": 0
  }
*/

// fetch information
const getJoke = async () => {
    try {
        const response = await fetch(jokeURI)
        console.log(response)
        const obj = await response.text()        
        console.log(`FETCHED. Response text ${obj}`)
        const joke = obj
        return joke
    } catch (error) {
        console.error(error)
    }
}

const getFact = () =>{

    const fact = ''
    return fact
}


// interact with DOM
const updateWithJoke = async (event) => {
    try {
        document.getElementById('result').innerHTML = ''
        const answer = await getJoke()
        document.getElementById('result').innerHTML = answer
    } catch (error) {
        console.error(error)
    }
}

document.addEventListener('click', event => {
    if(event.target && event.target.id === 'getMovieButton'){
        updateWithJoke(event)
    }
})


/*
const numberURI = 'http://cors-anywhere.herokuapp.com/numbersapi.com/42/math?callback=showNumber'

// fetch information
const getNumFact = async () => {
    try {
        const response = await fetch(numberURI)
        const obj = await response.json()
        console.log(`FETCHED. Response JSON ${obj}`)
        const numFact = obj.value.numFact || 'No fact for you.'
        return numFact
    }
    catch (error) {
        console.error(error)
    }
}

// interact with DOM
const updateWithFact = async (event) => {
    try {
        document.querySelector('#result').innerHTML = ''
        const answer = await getNumFact()
        document.querySelector('#result').innerHTML = answer
    }
    catch (error) {
        console.error(error)
    }
}


    function showNumber(str) {
        const str = await showNumber()
        document.querySelector('#result').innerHTML = str;
    }

    (function updateWithJoke() {
        var scriptTag = document.createElement('script');
        scriptTag.async = true;
        scriptTag.src = "http://numbersapi.com/42/math?callback=showNumber";
        document.body.appendChild(scriptTag);
    })
    ();
*/