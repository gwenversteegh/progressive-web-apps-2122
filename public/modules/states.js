import {list} from './API.js'

export function showLoadingState(){
    list.insertAdjacentHTML('afterbegin', 
        `<p>
        Some quotes are on the way, just a moment!
        </p>`)
}

export function hideLoadingState(){
    list.removeChild(list.firstElementChild);
}

export function showErrorState(){
    list.insertAdjacentHTML('afterbegin', 
        `<p>
        I'm sorry, something went wrong... please reload the page
        </p>`)
}