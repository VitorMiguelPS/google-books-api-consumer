import React, { createContext, useState } from "react";

const ContextCommon = createContext({});

const ProviderCommon = ({ children }) => {
  const [currentlyUser, setCurrentlyUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [allSelectedBooks, setAllSelectedBooks] = useState([]);

  return (
    <ContextCommon.Provider
      value={{
        currentlyUser,
        setCurrentlyUser,
        searchTerm,
        setSearchTerm,
        usersList,
        setUsersList,
        selectedBook,
        setSelectedBook,
        allSelectedBooks,
        setAllSelectedBooks,
      }}
    >
      {children}
    </ContextCommon.Provider>
  );
};

export { ContextCommon, ProviderCommon };
