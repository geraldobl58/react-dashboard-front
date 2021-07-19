/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import { Bar } from 'react-chartjs-2';

import api from '../../../services/api';

export default function ChartProducts() {
  const [chartProducts, setChartProducts] = useState([]);

  const chartProduct = () => {
    const productName = [];
    const productFinalPrice = [];

    api
      .get('/produtos')
      .then((response) => {
        for (const dataObj of response.data) {
          productName.push(dataObj.nomeProduto);
          productFinalPrice.push(parseInt(dataObj.precoVendaFinal));
        }
        setChartProducts({
          labels: productName,
          datasets: [
            {
              label: undefined ? '' : 'Todos Produtos',
              data: productFinalPrice,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgba(255, 99, 132, 0.2)',
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chartProduct();
  }, []);

  return (
    <>
      <Typography component="h1" variant="h6">
        Produtos
      </Typography>
      <Bar data={chartProducts} width={100} height={30} />
    </>
  );
}
