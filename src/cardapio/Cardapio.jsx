import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight )

import NavBar from "../elements/navbar"
import Card from '../elements/Card'
import './cardapio.css'
import data from "../media/cardapio.json"


export default function Cradapio() {
    const [getCategory, setCategory] = useState("");
    const [getFood, setFood] = useState(data.food);

    const Categories = ['Brasileira', 'Italiana', 'Panquecas',  'Strogonoffs', 'Salgados', 'Congelados', 'Bebidas']


    function filter_food() {
        let value = document.getElementById("FilterInput").value.toLowerCase()
        let item = document.getElementsByClassName("card")
         for (let x = 0; x < item.length; x++) {
            let name = item[x].children[1].children[0].innerHTML.toLowerCase()
            if ( name.indexOf(value) > -1) {
                item[x].style.display = "flex";
            } else {
                item[x].style.display = "none";
            }
        }
    }

    function set_category(value) {
        let item = document.getElementsByClassName("card")
        for (let x = 0; x < item.length; x++) {
            let name = item[x].children[1].children[2].innerHTML
            if ( name.indexOf(value) > -1) {
                item[x].style.display = "flex";
            } else {
                item[x].style.display = "none";
            }
        }
    }

    function set_all() {
        let item = document.getElementsByClassName("card")
        for (let x = 0; x < item.length; x++) {
            item[x].style.display = "flex";
        } 
    }   

    function show_sidebar() {
        let bar = document.getElementById("sideBar")
        if (bar.className == "sidebar") {
            bar.classList.add("responsive")
        } else {
            bar.className = "sidebar"
        }
    }

    useEffect(() => {
    }, []);


    return (
        <>
            <div className="page">
                <NavBar></NavBar>
                <div className='sidebar' id='sideBar'>
                    <div className='sidebar-align-items'>
                        <input type='Text' placeholder='Buscar' className='sidebar-filter' id='FilterInput' onChange={filter_food}></input>
                        {Categories.map((data) => (
                            <a className='sidebar-category' onClick={() => set_category(data)}> {data} </a>
                        ))}
                        <a className='sidebar-category' onClick={set_all}> Todos </a>
                    </div>
                    <div className='sidebar-icon' onClick={show_sidebar}>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" className='icon-arrow' />
                    </div>
                </div>
                
                <div className='div-cards'>
                    {getFood.map((data) => (
                        <Card key={data.id} data={data} ></Card> ))}
                </div>
            </div>
        </>
    )
}