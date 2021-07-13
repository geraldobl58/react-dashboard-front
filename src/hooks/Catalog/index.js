import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { useLoading } from '../Loading';
import { useMessages } from '../Messages';

export const CatalogContext = createContext();

CatalogContext.displayName = 'CatalogContext';

const CatalogProvider = ({ children }) => {
  // const [isToggle, setIsToggle] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [dataSearchCatalog, setDataSearchCatalog] = useState([]);

  const [nameOrSku, setNameOrSku] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  const { setIsLoading } = useLoading();
  const { setMessageAttrs } = useMessages();

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

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/produtos/`, {
        params: {
          nomeProduto: nameOrSku,
        },
      });
      setDataSearchCatalog(response.data);
      setIsLoading(false);
    } catch (error) {
      setMessageAttrs({
        show: true,
        severity: 'error',
        text: `${error}` || 'Whoops: Houve um erro no servidor!',
      });
    }
  };

  return (
    <CatalogContext.Provider
      value={{
        categories,
        setCategories,
        brands,
        setBrands,
        dataSearchCatalog,
        setDataSearchCatalog,
        nameOrSku,
        setNameOrSku,
        brand,
        setBrand,
        category,
        setCategory,
        search,
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
