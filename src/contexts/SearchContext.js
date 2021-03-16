import { useState, createContext } from "react";
import { api } from "../services/api";

const SearchContext = createContext({});

function SearchProvider({ children, ...rest }) {
  const [search, setSearch] = useState("");

  const [word, setWord] = useState(null);

  async function handleSearchSubmit(event) {
    event.preventDefault();

    const response = await api.get(`/words?search=${search}`);

    setWord(response.data);
  }

  return (
    <SearchContext.Provider
      value={{
        setSearch,
        handleSearchSubmit,
        word,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
