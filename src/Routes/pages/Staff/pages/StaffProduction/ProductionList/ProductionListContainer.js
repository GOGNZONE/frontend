import React, { useEffect, useState, useRef } from 'react';
import ProductionListPresenter from './ProductionListPresenter';
import * as api from '../../../../../../Apis/index';

const ProductionListContainer = () => {
  const [productions, setProductions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    getProductionListAPI();
  }, []);

  const getProductionListAPI = async () => {
    await api.getProductionList().then((response) => {
      setProductions(response.data);
    });
  };

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
