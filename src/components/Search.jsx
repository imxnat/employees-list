
const Search = ({setSearch, data}) => {

  const handleChange = (event) => {
    const inputContact = event.target.value;
    const filterContact = data.filter((contact) => {
      return contact.name.toLowerCase().includes(inputContact.toLowerCase());
    });
    setSearch(filterContact)
  }

  return (
    <div>
        <div className="searchbar">
            <label>Looking for:</label>
            <input 
              type="search" 
              placeholder='Search name...'
              onChange={handleChange}/>
        </div>
    </div>
  )
}

export default Search