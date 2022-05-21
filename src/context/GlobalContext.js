import { createContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState('');
  const [productList, setProductList] = useState([]);

  const handleSearchParam = async () => {
    const params = (new URL(document.location)).searchParams;
    const name = params.get('search');

    setSearchParam(name);
  };

  useEffect(() => {
    handleSearchParam();
  }, []);

  const data = {
    searchParam,
    setProductList,
    productList,
  };

  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
};

export { GlobalProvider };
export default GlobalContext;
