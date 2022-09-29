import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteProduction,
  getProductions,
} from 'store/modules/production/productionActions';
import ProductionListCompletedPresenter from './ProductionListCompletedPresenter';

const ProductionListContainer = () => {
  /***** redux (state) *****/
  const { data, loading } = useSelector(
    (state) => state.production.productions,
  );
  const dispatch = useDispatch();
  /***** search *****/
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  let completedList = [];

  useEffect(() => {
    const callDispatch = () => {
      dispatch(getProductions());
    };
    !loading && callDispatch();
  }, []); // dependencies 추가 금지 (무한루프 걸림)

  const onDeleteHandler = () => {
    dispatch(deleteProduction);
  };

  if (data) {
    completedList = data.filter((d) => d.productionProgress === 2);
  }

  return (
    <ProductionListCompletedPresenter
      dataSource={completedList}
      setSearchText={setSearchText}
      setSearchedColumn={setSearchedColumn}
      searchInput={searchInput}
      searchedColumn={searchedColumn}
      searchText={searchText}
      loading={loading}
    />
  );
};

export default ProductionListContainer;
