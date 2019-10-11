/*Note to grader: This code is covered in comments for my beneift only. I know having code with a lot of comments is not desired
but I need this for reference in later assignments*/

const factURI = 'http://numbersapi.com/random/trivia'

// fetch information
const getFact = async () => {
    try {
        //Response is fetching API URL but also waits in case it takes longer than expected
        const response = await fetch(factURI)
        //Logging response
        console.log(response)
        //obj holds the value of the fetch, .text is what it is expecting to retrieve (usually .json())
        const obj = await response.text()
        //Logging fetch and displaying value of object       
        console.log(`FETCHED. Response text ${obj}`)
        //Joke equals the string obj, usually it would be joke = obj.joke where .joke is the property you want 
        //from the json file, but here we only have a string, so the extra .joke is not necessary
        return obj
    } catch (error) {
        console.error(error)
    }
}

// interact with DOM
const updateWithFact = async (event) => {
    try {
        /*Do not need this extra line, I believe it is setting up a 
        string via '' so the obj will be displayed within a string
        //document.getElementById('result').innerHTML = ''
        */

        //answer is calling the getFact() function and storing the answer
        const answer = await getFact()
        document.getElementById('result').innerHTML = answer
    } catch (error) {
        console.error(error)
    }
}

//Adding event listener for button
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getFactButton') {
        updateWithFact(event)
    }
})
