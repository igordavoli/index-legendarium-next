import { createContext } from "react";

const SearchContext = createContext({});

function SearchProvider({ children, ...rest }) {
  const [search, setSearch] = React.useState("");

  let response;

  async function handleSearchSubmit(event) {
    event.preventDefault();

    response = await api.get(`/words?search=${search}`);

    console.log(response);
  }
  return (
    <SearchProvider value={(setSearch, handleSearchSubmit)}>
      {children}
    </SearchProvider>
  );
}

export { SearchContext, SearchProvider };
