import React, { Component} from 'react'
import "./header.css"
import {BiBuildingHouse} from "react-icons/bi"

class Header extends Component {
    render() {
        return(
            <div class="bg-slate-800 mt-6">
                <div class="bg-white dark:bg-gray-800  ">
                    <div class="max-w-7xl mx-auto px-8">
                        <div class="flex items-center justify-between h-16">
                            <div class=" flex items-center">
                                <a class="flex-shrink-0 " href="https://react-icons.github.io/react-icons/search?q=build" target="_blank" >
                                    <div class="">
                                       
                                    <BiBuildingHouse size={40}/>
                                    </div>
                                </a>
                                
                            </div>
                            <div class="block">
                                <div class="ml-4 flex items-center ">
                                    <div class="typewriter">
                                        <h1 class="font-semibold arial text-2xl lg:hidden">Innovative solutions in construction industry.</h1>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        );

    }
}    


export default Header