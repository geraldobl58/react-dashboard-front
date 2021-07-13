const columns = [
  {
    name: '_id',
    label: 'Sku',
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: 'nome',
    label: 'Produto',
    options: {
      filter: false,
      sort: true,
    },
  },
  // {
  //   name: 'nomeMarca',
  //   label: 'Marca',
  //   options: {
  //     filter: false,
  //     sort: true,
  //   },
  // },
  // {
  //   name: 'nomeCategoriaPai',
  //   label: 'Categoria',
  //   options: {
  //     filter: false,
  //     sort: true,
  //   },
  // },
  // {
  //   name: 'precoVenda',
  //   label: 'Preço',
  //   options: {
  //     filter: false,
  //     sort: true,
  //     customBodyRender: (value) => {
  //       return new Intl.NumberFormat('pt-BR', {
  //         style: 'currency',
  //         currency: 'BRL',
  //       }).format(value);
  //     },
  //   },
  // },
];

export default columns;
