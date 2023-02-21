//Imports from external js-file and exports.

import { addToDo, addToDoBtnEvents } from "./addBtnFunctionality.js"

export { audioListCancelled, audioListSwore, audioListCompleted, writeToDo, listToDo }


// Constants, id-selectors and empty arrays.

const btnToDo = document.getElementById("form-btn");
const writeToDo = document.getElementById("form-input");
const listToDo = document.getElementById("toDo-List");

const soundsCompleted = ["./sounds/completed/oh-yeah-2.mp3", "./sounds/completed/wild.mp3"];
const soundsCancelled = ["./sounds/cancelled/told-lies.mp3", "./sounds/cancelled/brokenPromises.mp3"];
const soundsSwore = ["./sounds/swore/shotgun-3.mp3"]

const audioListCompleted = [];
const audioListCancelled = [];
const audioListSwore = [];


//Print toDoList from localStorage

const savedToDoList = () =>
{
    if(localStorage.getItem("huskMeg"))
    {
        let newList = JSON.parse(localStorage.getItem("huskMeg"))
        for (let x = 0; x < newList.length; x++)
        {
            listToDo.innerHTML += 
            `
            <div class="toDoPledge">
                <p>${newList[x]}</p>
                <button type="button" class="toDo-Complete">WITNESS ME!!!</button>
                <button type="button" class="toDo-Cancel">I am weak...</button>
            </div>
            `
        };
        addToDoBtnEvents();
    }
};

savedToDoList();


// Creating audio-objects for each of the sounds: Completed, cancelled and swear an oath.

soundsCancelled.forEach((data, index) =>
{
    audioListCancelled[index] = new Audio(data);
});

soundsCompleted.forEach((data, index) =>
{
    audioListCompleted[index] = new Audio(data);
});

soundsSwore.forEach((data, index) =>
{
    audioListSwore[index] = new Audio(data);
});


// btnToDo.addEventListener("click", (data) => 
// {
//     data.preventDefault();
//     addToDo();
// });

