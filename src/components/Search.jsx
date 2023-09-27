function Search({query,setQuery}) {
    return (
        <div className="search">

      <input 
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        </div>
    );
}

export default Search
