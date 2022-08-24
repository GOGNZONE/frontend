import React, { useEffect, useState, useRef } from 'react';
import ProductionListPresenter from './ProductionListPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { getProductions } from 'store/modules/production/productionActions';

const ProductionListContainer = () => {
  /***** redux (state) *****/
  const { data, loading, error } = useSelector(
    (state) => state.production.productions,
  );
  const dispatch = useDispatch();
  /***** search *****/
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    dispatch(getProductions());
  }, [data]);

  return (
    <ProductionListPresenter
      dataSource={data}
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
