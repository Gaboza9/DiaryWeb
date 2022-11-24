import React from 'react'
import Picture from './Picture';

function LocalImage(key) {
    const url = localStorage.getItem(key.days+"Url");
    const id = localStorage.getItem(key.days+"Id");
    const icon = localStorage.getItem(key.days+"Icon");

    console.log(icon);
    if(url){
        return (
            <div class="text-center">
            <Picture url={require(`../../img/${url}.png`)} id={id} />
            </div>
        )
    }  
}

export default LocalImage