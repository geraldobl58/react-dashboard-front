import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { useLoading } from '../Loading';
import { useMessages } from '../Messages';

import api from '../../services/api';

export const MultiStepsContext = createContext();

MultiStepsContext.displayName = 'MultiStepsContext';

const MultiStepsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  // const saveRules = async () => {
  //   try {
  //     setIsLoading(true);
  //     if (campaign === '') {
  //       setMessageAttrs({
  //         show: true,
  //         severity: 'error',
  //         text: 'Whoops: Todos os campos são obrigátorios.',
  //       });
  //     }
  //     await api.post('/regras/', {
  //       nome: ruleName,
  //       campanha: campaign,
  //       data_inicio: startDate,
  //       data_fim: endDate,
  //     });

  //     setMessageAttrs({
  //       show: true,
  //       severity: 'success',
  //       text: 'Sucesso: Registro salvo com sucesso.',
  //     });

  //     resetForm();

  //     setIsLoading(false);
  //   } catch (error) {
  //     setMessageAttrs({
  //       show: true,
  //       severity: 'error',
  //       text: `${error}` || 'Whoops: Houve um erro ao salvar o registro!',
  //     });
  //   }
  // };

  return (
    <MultiStepsContext.Provider
      value={{
        currentStep,
        setCurrentStep,

        // saveRules,
      }}
    >
      {children}
    </MultiStepsContext.Provider>
  );
};

const useSteps = () => useContext(MultiStepsContext);

export { useSteps };

export default MultiStepsProvider;

MultiStepsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
