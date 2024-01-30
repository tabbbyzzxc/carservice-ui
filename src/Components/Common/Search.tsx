
type SearchProps = {
    onSearchChange: (index: number, search: string ) => void;
};

const Search: React.FC<SearchProps> = ({ onSearchChange }) => {

    const handleSearch = (input: string) =>{
        if(input.length !== 0 && input.length < 4){
            return;
        }

        onSearchChange(0, input);
    }

    return(
        <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
        />
    )
}

export default Search;