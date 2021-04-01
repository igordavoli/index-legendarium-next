import { useState, createContext } from "react";
import { api } from "../services/api";
import { useRouter } from "next/router";

const SearchContext = createContext({});

function SearchProvider({ children }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const [word, setWord] = useState(null);
  const [message, setMessage] = useState(null);
  const [searchedWord, setSearchedWord] = useState(null);

  async function handlerSearchSubmit(event) {
    event.preventDefault();

    let response = null;

    try {
      response = await api.get(`/words?search=${search}`);
    } catch (error) {
      const { message, searchedWord } = error.response.data;

      setMessage(message);
      setSearchedWord(searchedWord);
      setWord(null);
      return;
    }

    setWord(response.data);
    setMessage(null);
    setSearchedWord(null);

    router.push(`/words?search=${search}`);
  }
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        handlerSearchSubmit,
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
