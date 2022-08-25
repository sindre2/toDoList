import { listToDo, audioListCancelled, audioListCompleted, writeToDo, audioListSwore } from "./mainjs.js";

//Necessary boolean values

let completedSound = false;
let cancelledSound = false;
let completedOperation = false;
let memoryCard = [];

//Function to add innerHTML text and buttons.

export function addToDo ()
{
    const pledge = writeToDo.value;
    // if()
    listToDo.innerHTML += 
    // Adds innerHTML with backtick in the line beneath " ` ".
    `
    <div class="toDoPledge">
        <p>${pledge}</p>
        <button type="button" class="toDo-Complete">WITNESS ME!!!</button>
        <button type="button" class="toDo-Cancel">I am weak...</button>
    </div>
    `
    audioListSwore[0].pause();
    audioListSwore[0].play();
    addToDoBtnEvents();
    saveToMemory();
};

//Function to add events to buttons.

export function addToDoBtnEvents()
{
    const toDoPledges = Array.from(document.querySelectorAll(".toDoPledge"));
    const toDoPledgeBtnsCompleted = Array.from(document.querySelectorAll(".toDo-Complete"));
    const toDoPledgeBtnsCancelled = Array.from(document.querySelectorAll(".toDo-Cancel"));

    //Adding event listeners for the completed button
    toDoPledgeBtnsCompleted.forEach((data, index) =>
    {
        data.addEventListener("click", () =>
        {
            if(!completedOperation)
            {
                toDoPledges[index].classList.add("completed");
                audioListCompleted[numberRandom(audioListCompleted.length)].play();
                completedOperation = true;

                //Delayed function for deleting innerHTML toDoPledge
                setTimeout(() =>
                {
                    completedOperation = false;
                    listToDo.removeChild(toDoPledges[index]);
                    saveToMemory();
                }, 500);
            };
        });
    });

    //Adding events for the cancelled buttons
    toDoPledgeBtnsCancelled.forEach((data, index) =>
    {
        data.addEventListener("click", () =>
        {
            if(!completedOperation)
            {
                toDoPledges[index].classList.add("cancelled");
                // listToDo.removeChild(toDoPledges[index]);
                if(!cancelledSound)
                {
                    audioListCancelled[numberRandom(audioListCancelled.length)].play();
                    cancelledSound = true;
                    setTimeout(() =>
                    {
                        cancelledSound = false;
                        listToDo.removeChild(toDoPledges[index]);
                        saveToMemory();
                    }, 1200);
                };
            };
        });
    });
};

//Random number generator

function numberRandom(max)
{
    return Math.floor(Math.random() * max);
};

//Save to localStorage function

function saveToMemory()
{
    memoryCard = [];
    localStorage.clear();
    const loopToDoPledge = Array.from(document.querySelectorAll(".toDoPledge > p"));
    loopToDoPledge.forEach((data) =>
    {
       memoryCard.push(data.textContent);
       console.log(memoryCard);
    });
    localStorage.setItem(`huskMeg`, JSON.stringify(memoryCard));  
    console.log(localStorage.getItem("huskMeg"));
};