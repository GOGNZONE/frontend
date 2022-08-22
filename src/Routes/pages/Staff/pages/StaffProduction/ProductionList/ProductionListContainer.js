import React, { useEffect, useState, useRef, useCallback } from 'react';
import ProductionListPresenter from './ProductionListPresenter';
import * as api from 'Apis/index';
import { getProductions } from 'store/modules/production/productionAction';
import { useSelector, useDispatch } from 'react-redux';

const ProductionListContainer = () => {
  /***** redux (state) *****/
  const dispatch = useDispatch();
  const production = useSelector((state) => state.production.data);
  /***** search *****/
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    getProductionListAPI();
  }, []);

  const getProductionListAPI = async () => {
    try {
      const response = await api.getProductionList();
      console.log(response);
      if (response) {
        dispatch(getProductions(response.data));
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <ProductionListPresenter
      dataSource={production}
      setSearchText={setSearchText}
      setSearchedColumn={setSearchedColumn}
      searchInput={searchInput}
      searchedColumn={searchedColumn}
      searchText={searchText}
    />
  );
};

export default ProductionListContainer;
