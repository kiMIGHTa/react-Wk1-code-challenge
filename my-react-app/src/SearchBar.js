import { useState, useEffect } from "react";

function SearchBar({searchFunction}){
    const [search, setSearch] = useState("");

    useEffect(() => {
      searchFunction(search)
    },
    [search])
  
    // update state on input change 
    function handleSearch(e){
      e.preventDefault();
      setSearch(e.target.value);
    }
    return (
      <form>
      <input id="search" type="text" placeholder="Search transactions" onChange={handleSearch}/>
      <button id= "searchBtn">search</button>
          
  </form>
    
    );
  }


export default SearchBar