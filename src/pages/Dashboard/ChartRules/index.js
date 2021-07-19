/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import { Line } from 'react-chartjs-2';

import api from '../../../services/api';

export default function ChartRules() {
  const [chartData, setChartData] = useState([]);

  const chartRule = () => {
    const ruleCampain = [];
    const ruleTotals = [];

    api
      .get('/regras')
      .then((response) => {
        for (const dataObj of response.data) {
          ruleCampain.push(dataObj.campanha);
          ruleTotals.push(parseInt(dataObj.id));
        }
        setChartData({
          labels: ruleCampain,
          datasets: [
            {
              label: `Regras cadastradas no momento: ${ruleCampain}`,
              data: ruleTotals,
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
    chartRule();
  }, []);

  return (
    <>
      <Typography component="h1" variant="h6">
        Regras
      </Typography>
      <Line data={chartData} width={100} height={30} />
    </>
  );
}
