import { useState, createContext } from "react";
import { useRouter } from "next/router";
import { api } from "../services/api";

const SearchContext = createContext({});

function SearchProvider({ children, ...rest }) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [word, setWord] = useState(null);

  async function handleSearchSubmit(event) {
    event.preventDefault();

    const response = await api.get(`/words?search=${search}`);

    setWord(response.data);

    router.push(`/words?search=${search}`);
  }

  return (
    <SearchContext.Provider
      value={{
        setSearch,
        handleSearchSubmit,
        word,
        search,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
