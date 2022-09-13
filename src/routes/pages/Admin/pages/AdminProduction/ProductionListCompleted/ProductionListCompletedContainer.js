import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProductions,
  deleteProduction,
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
  }, [dispatch, loading]);

  if (data) {
    completedList = data.filter((d) => d.productionProgress === 2);
  }

  const onDeleteProduction = (productionId) => {
    dispatch(deleteProduction(productionId));
  };

  return (
    <ProductionListCompletedPresenter
      dataSource={completedList}
      setSearchText={setSearchText}
      setSearchedColumn={setSearchedColumn}
      searchInput={searchInput}
      searchedColumn={searchedColumn}
      searchText={searchText}
      loading={loading}
      onDeleteProduction={onDeleteProduction}
    />
  );
};

export default ProductionListContainer;
