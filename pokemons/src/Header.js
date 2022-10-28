import React from "react";

function Header({titulo}){
    return(
        <nav>
            
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titulo} </a>
            </div>

            <div class="SearchDiv">
                <form action="" onsubmit="SearchPokemon(event)" >
                <input type="text" name="searchQuery" required /> <input
            type="submit" name="searchBtn" title="search" value="search"/>
    </form>
</div>
            
        </nav>
        
    )
}

export default Header;