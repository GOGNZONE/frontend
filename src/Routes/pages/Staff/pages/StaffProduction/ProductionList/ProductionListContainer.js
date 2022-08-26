import React, { useEffect, useState, useRef } from 'react';
import ProductionListPresenter from 'Routes/pages/Staff/pages/StaffProduction/ProductionList/ProductionListPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { getProductions } from 'store/modules/production/productionActions';
// import { useLocation } from 'react-router-dom';

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

  // const location = useLocation();

  useEffect(() => {
    // if (data && !loading) {
    //   window.location.reload();
    // }
    dispatch(getProductions());
  }, [dispatch]);

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
