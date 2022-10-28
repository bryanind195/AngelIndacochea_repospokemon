import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Main=()=>{
    const [pokeData,setDatapokemon]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setSigUrl]=useState();
    const [prevUrl,setAntUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setSigUrl(res.data.next);
        setAntUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setDatapokemon(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }
    useEffect(()=>{
        pokeFun();
    },[url])
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    
                    
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setDatapokemon([])
                           setUrl(prevUrl) 
                        }}>Anterior</button>}

                        { nextUrl && <button onClick={()=>{
                            setDatapokemon([])
                            setUrl(nextUrl)
                        }}>Siguiente</button>}

                    </div>
                </div>
                <div className="right-content">
                   <Pokeinfo data={pokeDex}/>
                </div>
                
            </div>
        </>
    )
}
export default Main;