import React, { useEffect, useState, useRef } from 'react';
import ProductionListPresenter from './ProductionListPresenter';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteProduction,
  getProductions,
} from 'store/modules/production/productionActions';

const ProductionListContainer = () => {
  /***** redux (state) *****/
  const productions = useSelector((state) => state.production.productions);
  const { data, loading, error } = productions;
  const dispatch = useDispatch();
  //   /***** search *****/
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    const callDispatch = () => {
      dispatch(getProductions());
    };
    !loading && callDispatch();
  }, []);

  const onDeleteProduction = (productionId) => {
    dispatch(deleteProduction(productionId));
  };

  return (
    <ProductionListPresenter
      dataSource={data}
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
