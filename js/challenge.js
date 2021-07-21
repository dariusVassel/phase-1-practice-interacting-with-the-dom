//Incrementing the counter


//PART 1:
//SETTING UP A TIMER DISPLAYED ON THE WEBPAGE
let time = 0 
let timeIncrement = 1

function stopWatch(){
    ++time;
    document.getElementById('counter').innerHTML = time;   
}

let countUp = setInterval(stopWatch, 1000)
let status = "started"
let pauseButton = document.getElementById('pause')


//PART 2:
//CREATING BUTTONS THAT ALLOW YOU TO ADD OR SUBTRACT TIME
//click to add or subtract time
document.getElementById('plus').addEventListener('click', () => {
    time+=1;
    document.getElementById('counter').innerHTML = time; 
});

document.getElementById('minus').addEventListener('click', () => {
    time-=1;
    document.getElementById('counter').innerHTML = time; 
});


//PART 3: LIKING A NUMBER
//Event listening for a like
document.getElementById('heart').addEventListener('click', function(){
    addItem();
})

//Counting the number of times the element has been liked
let addToArray = []

let countOccurences = function(array, value){
    return array.reduce((accumulator, elem) => {
        return (value === elem ? ++accumulator : accumulator)
    },0)
}

//Callback function adding list item counter
function addItem(){
    let likesList = document.querySelector('.likes')
    let spans = document.createElement('span')
    let countTracker = countOccurences(addToArray, time)

    let entry = `${time} has been clicked ${spans.innerText = countTracker+1} times`
    let likesEntry = document.createElement('li')

    addToArray.push(time)
    console.log(addToArray)

    likesEntry.setAttribute('id', entry)
    likesEntry.appendChild(document.createTextNode(entry));
    likesList.appendChild(likesEntry)
}

//PART 4: PAUSING THE COUNTER- //PART 5: RESUMING THE COUNTER

pauseButton.setAttribute('onclick', "startStop()")
//pauseButton.addEventListener('click', startStop)

function startStop(){
    if (status === "stopped"){
        countUp = setInterval(stopWatch, 1000)
        pauseButton.innerText = "pause";
        status = "started"

    } else if (status === "started"){
        clearInterval(countUp)
        pauseButton.innerText = "resume";
        status= "stopped"
    }
}

//PART 6: ALLOWING USER TO LEAVE COMMENTS
document.getElementById("comment-form").addEventListener("submit", (e) => {
    e.preventDefault()
    postComments(e.target.comment_input.value)
})

function postComments(elements){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)

    btn.textContent = "x"
    p.textContent = `${elements}  `
    p.appendChild(btn)

    document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove()
}
