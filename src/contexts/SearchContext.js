import { useState, createContext } from "react";
import { api } from "../services/api";

const SearchContext = createContext({});

function SearchProvider({ children, ...rest }) {
  const [search, setSearch] = useState("");

  const [word, setWord] = useState(null);
  const [message, setMessage] = useState(null);
  const [searchedWord, setSearchedWord] = useState(null);

  async function handleSearchSubmit(event) {
    event.preventDefault();

    const response = await api.get(`/words?search=${search}`);

    if ("message" in response.data) {
      setMessage(response.data.message);
      setSearchedWord(response.data.searchedWord);
      setWord(null);
      console.log(response.data.searchedWord);
    } else {
      setWord(response.data);
      setMessage(null);
      setSearchedWord(null);
    }
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        handleSearchSubmit,
        word,
        message,
        searchedWord,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
