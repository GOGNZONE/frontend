import React, { useEffect, useState, useRef } from 'react';
import ProductionListPresenter from './ProductionListPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { getProductions } from 'store/modules/production/productionActions';

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
  let incompletedList = [];

  useEffect(() => {
    const callDispatch = () => {
      dispatch(getProductions());
    };
    !loading && callDispatch();
  }, [dispatch, loading]);

  if (data) {
    incompletedList = data.filter((d) => d.productionProgress !== 2);
  }

  return (
    <ProductionListPresenter
      dataSource={incompletedList}
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
