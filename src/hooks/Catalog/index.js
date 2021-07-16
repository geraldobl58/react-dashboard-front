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
  const [products, setProducts] = useState([]);

  const [nameOrSku, setNameOrSku] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [priceInitial, setPriceInitial] = useState('');
  const [priceFinal, setPriceFinal] = useState('');

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

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/produtos');
      console.log(response.data);
      setProducts(response.data);
    }
    getProducts();
  }, []);

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/produtos/`, {
        params: {
          nomeProduto: nameOrSku,
          precoVendaInicial: priceInitial,
          precoVendaFinal: priceFinal,
        },
      });
      if (response.data.length > 0) {
        setDataSearchCatalog(response.data);
      } else {
        setMessageAttrs({
          show: true,
          severity: 'error',
          text: 'Whoops: Os filtros não estão corretos, tente novamente!',
        });
      }

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
        priceInitial,
        setPriceInitial,
        priceFinal,
        setPriceFinal,
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
