import React, { useEffect, useState, useRef } from 'react';
import ProductionListPresenter from './ProductionListPresenter';
// import { getProductionList } from '../../../../../../apis/productionApi';

const ProductionListContainer = () => {
  const [productions, setProductions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  // useEffect(() => {
  //   getProductionListApi();
  // }, []);

  // const getProductionListApi = () => {
  //   getProductionList().then((response) => {
  //     setProductions(response.data);
  //   });
  // };

  return (
    <ProductionListPresenter
      dataSource={productions}
      setSearchText={setSearchText}
      setSearchedColumn={setSearchedColumn}
      searchInput={searchInput}
      searchedColumn={searchedColumn}
      searchText={searchText}
    />
  );
};

export default ProductionListContainer;
