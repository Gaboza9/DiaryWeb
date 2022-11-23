import React , {useState} from 'react'

function MenuItem(props) {
  return (
    <>
    <div className="px-4 py-3" >
        <div className="px-2">
        <i className={props.icon}></i>
        </div>
        <p>{props.title}</p>
    </div>
    </>
  )
}

export default MenuItem