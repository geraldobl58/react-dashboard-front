import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { useLoading } from '../Loading';
import { useMessages } from '../Messages';

import api from '../../services/api';

export const RulesContext = createContext();

RulesContext.displayName = 'RulesContext';

const RulesProvider = ({ children }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { setIsLoading } = useLoading();
  const { setMessageAttrs } = useMessages();

  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [campaign, setCampaign] = useState('');
  const [ruleName, setRuleName] = useState('');

  useEffect(() => {
    async function getAllDataSearch() {
      const response = await api.get('/campanhas');
      setDataSearch(response.data);
    }
    getAllDataSearch();
  }, []);

  const search = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/campanhas/`, {
        params: {
          nome: campaign,
        },
      });
      setData(response.data);
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
    <RulesContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        data,
        setData,
        dataSearch,
        setDataSearch,
        campaign,
        setCampaign,
        ruleName,
        setRuleName,
        search,
      }}
    >
      {children}
    </RulesContext.Provider>
  );
};

const useRules = () => useContext(RulesContext);

export { useRules };

export default RulesProvider;

RulesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
