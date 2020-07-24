import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
import {Button} from 'react-bootstrap';

const Search = () =>{
    const [pokeId, setPokeId] = useState(1); //hook

    // console.log('state of pokeId: ', pokeId);

    return(
        <div className="search">   
            <h1>{pokeId}</h1>       
            <form>
                <label htmlFor="pokeId">
                    Type here: 
                    <input 
                    type="number" required 
                    placeholder="number" 
                    className="inputId"  
                    value={pokeId}
                    onChange={e => setPokeId(e.target.value)}
                    />
                </label>               
                <Button variant="success">Search</Button>
            </form>
        </div>
    )
}
export default Search;