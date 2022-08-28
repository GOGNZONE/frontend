import React, { useEffect } from 'react';
import { getReleases } from 'store/modules/release/releaseActions';
import ReleaseListPresenter from './ReleaseListPresenter';
import { useSelector, useDispatch } from 'react-redux';

const ReleaseListContainer = () => {
  /***** redux (state) *****/
  const releases = useSelector((state) => state.release.releases);
  const { data, loading, error } = releases;
  const dispatch = useDispatch();
  /***** search *****/
  // const [searchText, setSearchText] = useState('');
  // const [searchedColumn, setSearchedColumn] = useState('');
  // const searchInput = useRef(null);

  useEffect(() => {
    const callDispatch = () => {
      dispatch(getReleases());
    };
    !loading && callDispatch();
  }, []);

  return <ReleaseListPresenter dataSource={data} loading={loading} />;
};

export default ReleaseListContainer;
