import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

export const CatalogContext = createContext();

CatalogContext.displayName = 'CatalogContext';

const CatalogProvider = ({ children }) => {
  // const [isToggle, setIsToggle] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [data, setData] = useState([]);

  const [nameOrSku, setNameOrSku] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    async function getCategories() {
      const response = await api.get('/categorias');
      setCategories(response.data);
    }
    getCategories();
  }, []);

  useEffect(() => {
    async function getBrands() {
      const response = await api.get('/marcas');
      setBrands(response.data);
    }
    getBrands();
  }, []);

  return (
    <CatalogContext.Provider
      value={{
        categories,
        setCategories,
        brands,
        setBrands,
        data,
        setData,
        nameOrSku,
        setNameOrSku,
        brand,
        setBrand,
        category,
        setCategory,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

const useCatalog = () => useContext(CatalogContext);

export { useCatalog };

export default CatalogProvider;

CatalogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
