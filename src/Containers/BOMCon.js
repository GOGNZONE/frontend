import React, { useEffect, useState } from 'react';
import BOM from '../components/BOM';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeLogField,
  changeSpecField,
  deleteModifyLine,
  initialChange,
  plusModifyLine,
  deleteRegisterLine,
} from '../modules/bom';
import BomModal from '../modal/BomModal';
import Pagination from '../components/Pagination';
import * as api from '../lib/api/index';
import SearchSubModal from '../modal/SearchSubModal';
import SearchObjModal from '../modal/SearchObjModal';
import Swal from 'sweetalert2';

const BOMCon = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsCount, setPostsCount] = useState(10);
  const [subject, setSubject] = useState();
  const [line, setLine] = useState();
  const [select, setSelect] = useState();
  const [search, setSearch] = useState();
  const [reloading, setReloading] = useState();
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minSubPageNumberLimit, setMinSubPageNumberLimit] = useState(0);
  const [maxSubPageNumberLimit, setMaxSubPageNumberLimit] = useState(5);

  const [subPosts, setSubPosts] = useState([]);
  const [currentSubPage, setCurrentSubPage] = useState(1);
  const [postsSubCount, setPostsSubCount] = useState(10);
  const [subjectSearchVisible, setsubjectSearchVisible] = useState();
  const [subKey, setSubKey] = useState();
  //========== 서브 모달 (객체) ==========================
  const [selectSubPosts, setselectSubPosts] = useState([]);
  const [selectNumber, setselectNumber] = useState();
  const [subSubjectVisible, setSubSubjectVisible] = useState();
  const [subLineVisible, setSubSLineVisible] = useState();
  const [currentSelectSubPage, setCurrentSelectSubPage] = useState(1);
  const [postsSelectSubCount, setPostsSelectSubCount] = useState(10);
  //====================================================
  const { bom_log, bom_spec } = useSelector(({ bom }) => {
    return {
      bom_log: bom.bom_log,
      bom_spec: bom.bom_spec,
    };
  });

  const dispatch = useDispatch();

  // dispatch가 변경 될때 마다 callAPI 실행
  useEffect(() => {
    callAPI();
  }, [reloading]);

  const plusLogInfo = {
    pro_cd: '',
    pro_name: '',
    ln_cd: '',
    ft_cd: '',
    ln_num: '',
    ln_ox: 1,
  };
  const plusSpecInfo = {
    bom_cd: '',
    sj_cd: '',
    sj_name: '',
    sj_type: '',
    sj_amt: '',
    sj_unit: '',
    bom_crud: '0',
  };

  const callAPI = () => {
    api.bomGet().then((res) => {
      setPosts(res.data);
    });
    api.bomCount();
    api.subjectGet().then((res) => {
      setSubject(res.data);
    });
    api.lineGet().then((res) => {
      setLine(res.data);
    });
  };

  // 입력값을 실시간으로 저장(bom_log)
  const bomLogOnChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeLogField({
        form: 'bom_log',
        key: name,
        value,
      }),
    );
  };

  // 입력값을 실시간으로 저장(bom_spec)
  const bomSpecOnChange = (e) => {
    const { value, name, id } = e.target;
    dispatch(
      changeSpecField({
        num: id,
        key: name,
        value,
      }),
    );
  };

  // 입력받은 값을 이용하여 새로운 정보 등록
  const onRegister = async (e) => {
    e.preventDefault();
    let checkCd = 0;
    for (let i = 0; i < posts.length; i++) {
      if (
        posts[i].pro_cd === bom_log.pro_cd &&
        posts[i].ln_cd === bom_log.ln_cd
      ) {
        checkCd = 1;
      }
    }
    if (checkCd === 1) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '동일한 BOM이 존재합니다.',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const { pro_cd, ln_cd } = bom_log;
      for (let i = 0; i < bom_spec.length; i++) {
        const { bom_cd, sj_cd, sj_amt } = bom_spec[i];
        let data = {
          bom_cd: bom_cd,
          pro_cd: pro_cd,
          sj_cd: sj_cd,
          sj_amt: sj_amt,
          ln_cd: ln_cd,
        };
        api.bomRegister(data).then(() => {
          setReloading(data);
        });
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '등록되었습니다.',
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href = '#';
    }
  };

  // 입력받은 값을 이용하여 정보 수정
  const onUpdate = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: '수정하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        let checkCd = 0;
        for (let i = 0; i < posts.length; i++) {
          if (
            posts[i].pro_cd === bom_log.pro_cd &&
            posts[i].ln_cd === bom_log.ln_cd &&
            posts[i].bom_cd !== bom_log.bom_cd
          ) {
            checkCd = 1;
          }
        }
        if (checkCd === 1) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: '동일한 BOM이 존재합니다.',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          const { ln_cd, pro_cd } = bom_log;
          for (let i = 0; i < bom_spec.length; i++) {
            const { bom_cd, sj_cd, sj_amt } = bom_spec[i];
            let data = {
              bom_cd: bom_cd,
              pro_cd: pro_cd,
              sj_cd: sj_cd,
              sj_amt: sj_amt,
              ln_cd: ln_cd,
            };
            switch (bom_spec[i].bom_crud) {
              case '0':
                api.bomRegister(data).then(() => {
                  setReloading(data);
                });
                break;
              case '1':
                api.bomUpdate(data).then(() => {
                  setReloading(data);
                });
                break;
              case '2':
                api.bomDelete(data).then(() => {
                  setReloading(data);
                });
                break;
              default:
                break;
            }
          }
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '수정되었습니다.',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      window.location.href = '#';
    });
  };

  // bom 상세보기 열 추가
  const plusSpecLine = () => {
    dispatch(plusModifyLine({ key: plusSpecInfo }));
  };

  // bom 등록하기 열 삭제
  const deleteSpecRegisterLine = (key) => {
    if (bom_spec.length === 1) {
      dispatch(plusModifyLine({ key: plusSpecInfo }));
    }
    dispatch(
      deleteRegisterLine({
        form: 'bom_spec',
        key: key,
      }),
    );
  };

  // bom 상세보기 열 삭제
  const deleteSpecModifyLine = (key) => {
    let crud = bom_spec[key].bom_crud;
    let crud_wh = 0;
    for (let i = 0; i < bom_spec.length; i++) {
      if (bom_spec[i].bom_crud !== '2') {
        crud_wh++;
      }
    }
    if (crud !== '1') {
      dispatch(
        deleteRegisterLine({
          form: 'bom_spec',
          key: key,
        }),
      );
    } else {
      dispatch(
        deleteModifyLine({
          num: key,
          key: 'bom_crud',
        }),
      );
    }
    if (crud_wh === 1) {
      dispatch(
        plusModifyLine({
          key: plusSpecInfo,
        }),
      );
    }
  };

  // 등록 modal 열기
  const openModal = () => {
    dispatch(
      initialChange({
        form: 'bom_log',
        key: plusLogInfo,
      }),
    );
    dispatch(
      initialChange({
        form: 'bom_spec',
        key: [plusSpecInfo],
      }),
    );
    window.location.href = '#bRegister';
  };

  // 수정 modal 열기
  const openUpdate = async (key) => {
    const data = {
      pro_cd: currentPosts(posts)[key].pro_cd,
      ln_cd: currentPosts(posts)[key].ln_cd,
    };
    await api.bomListes(data).then((res) => {
      dispatch(
        initialChange({
          form: 'bom_log',
          key: res.data[0],
        }),
      );
      dispatch(
        initialChange({
          form: 'bom_spec',
          key: res.data,
        }),
      );
    });
    window.location.href = '#bList';
  };

  const closeUpdate = () => {
    setSubSubjectVisible(false);
    setSubSLineVisible(false);
    setsubjectSearchVisible(false);
    window.location.href = '#';
  };

  // 페이지 슬라이스
  const indexOfLast = currentPage * postsCount;
  const indexOfFirst = indexOfLast - postsCount;
  const currentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevHellipbtn = () => {
    setCurrentPage(minPageNumberLimit);
    setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  };
  const handleNextHellipbtn = () => {
    setCurrentPage(maxPageNumberLimit + 1);
    setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  };
  const handleSubPrevbtn = () => {
    setCurrentSubPage(currentSubPage - 1);
    setCurrentSelectSubPage(currentSelectSubPage - 1);
    if ((currentSelectSubPage - 1) % pageNumberLimit === 0) {
      setMaxSubPageNumberLimit(maxSubPageNumberLimit - pageNumberLimit);
      setMinSubPageNumberLimit(minSubPageNumberLimit - pageNumberLimit);
    }
  };
  const handleSubNextbtn = () => {
    setCurrentSubPage(currentSubPage + 1);
    setCurrentSelectSubPage(currentSelectSubPage + 1);
    if (currentSelectSubPage + 1 > maxSubPageNumberLimit) {
      setMaxSubPageNumberLimit(maxSubPageNumberLimit + pageNumberLimit);
      setMinSubPageNumberLimit(minSubPageNumberLimit + pageNumberLimit);
    }
  };
  const handleSubPrevHellipbtn = () => {
    setCurrentSubPage(minSubPageNumberLimit);
    setCurrentSelectSubPage(minSubPageNumberLimit);
    setMaxSubPageNumberLimit(maxSubPageNumberLimit - pageNumberLimit);
    setMinSubPageNumberLimit(minSubPageNumberLimit - pageNumberLimit);
  };
  const handleSubNextHellipbtn = () => {
    setCurrentSubPage(maxSubPageNumberLimit + 1);
    setCurrentSelectSubPage(maxSubPageNumberLimit + 1);
    setMaxSubPageNumberLimit(maxSubPageNumberLimit + pageNumberLimit);
    setMinSubPageNumberLimit(minSubPageNumberLimit + pageNumberLimit);
  };

  //서브 페이징처리
  const SubindexOfLast = currentSubPage * postsSubCount;
  const SubindexOfFirst = SubindexOfLast - postsSubCount;
  const currentSubPosts = (tmp) => {
    let currentSubPosts = 0;
    currentSubPosts = tmp.slice(SubindexOfFirst, SubindexOfLast);
    return currentSubPosts;
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSelect = (e) => {
    setSelect(e.target.value);
  };
  const onSearchSubmit = async (e) => {
    e.preventDefault();
    await api.bomSearch({ [select]: search }).then((res) => {
      setPosts(res.data);
    });
    setCurrentPage(1);
  };

  const onSubSearchSubmit = (e) => {
    e.preventDefault();
    searchInit();
    api.subjectSearch({ sj_name: search }).then((res) => {
      setSubPosts(res.data);
    });
  };

  const subModal = (key) => {
    searchInit();
    closeVisible();
    setSubKey(key);
    api.subjectGet().then((res) => {
      setSubPosts(res.data);
      setsubjectSearchVisible(true);
    });
  };

  const selectValue = (value, id) => {
    let num = 0;
    for (let i = 0; i < bom_spec.length; i++) {
      if (bom_spec[i].sj_cd === value) {
        num = 1;
      }
    }
    if (num === 0) {
      dispatch(
        changeSpecField({
          num: id,
          key: 'sj_cd',
          value,
        }),
      );
    } else {
      dispatch(
        changeSpecField({
          num: id,
          key: 'sj_cd',
          value: bom_spec[id].sj_cd,
        }),
      );
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '존재하는 품목 코드입니다',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    closeVisible();
  };

  const mainPageCountChange = (e) => {
    setCurrentPage(1);
    const { value } = e.target;
    setPostsCount(value);
  };

  //=======================================================================
  //서브 모달(객체)
  //=======================================================================
  const selectSubindexOfLast = currentSelectSubPage * postsSelectSubCount;
  const selectSubindexOfFirst = selectSubindexOfLast - postsSelectSubCount;
  const currentSelectSubPosts = (tmp) => {
    let currentSelectSubPosts = 0;
    currentSelectSubPosts = tmp.slice(
      selectSubindexOfFirst,
      selectSubindexOfLast,
    );
    return currentSelectSubPosts;
  };

  const openSelectSubModal = (value) => {
    searchInit();
    if (value === 'pro_cd') {
      api.subjectGet().then((res) => {
        setselectSubPosts(res.data);
        setselectNumber(1);
      });
      closeVisible();
      setSubSubjectVisible(true);
    } else if (value === 'ln_cd') {
      api.lineGet().then((res) => {
        setselectSubPosts(res.data);
        setselectNumber(2);
      });
      closeVisible();
      setSubSLineVisible(true);
    }
  };

  const onSelectSubSearch = (e) => {
    e.preventDefault();
    searchInit();
    if (selectNumber === 1) {
      api.subjectSearch({ [select]: search }).then((res) => {
        setselectSubPosts(res.data);
      });
    } else if (selectNumber === 2) {
      api.lineSearch({ [select]: search }).then((res) => {
        setselectSubPosts(res.data);
      });
    }
  };

  const selectSubValue = (value, id) => {
    dispatch(
      changeLogField({
        form: 'bom_log',
        key: id,
        value,
      }),
    );
    closeVisible();
  };

  const searchInit = () => {
    setMinSubPageNumberLimit(0);
    setMaxSubPageNumberLimit(5);
    setCurrentSubPage(1);
    setCurrentSelectSubPage(1);
  };
  const closeVisible = () => {
    setSubSubjectVisible(false);
    setSubSLineVisible(false);
    setsubjectSearchVisible(false);
  };
  const paginate = (number) => {
    setCurrentSubPage(number);
    setCurrentSelectSubPage(number);
  };

  //========================================================================
  return (
    <>
      <BOM
        bom={currentPosts(posts)}
        openUpdate={openUpdate}
        openModal={openModal}
        onSearch={onSearch}
        onSelect={onSelect}
        onSearchSubmit={onSearchSubmit}
        postsCount={postsCount}
        mainPageCountChange={mainPageCountChange}
      />
      <BomModal
        bom_log={bom_log}
        bom_spec={bom_spec}
        onUpdate={onUpdate}
        bomLogOnChange={bomLogOnChange}
        bomSpecOnChange={bomSpecOnChange}
        onRegister={onRegister}
        subject={subject}
        line={line}
        deleteSpecRegisterLine={deleteSpecRegisterLine}
        plusSpecLine={plusSpecLine}
        deleteSpecModifyLine={deleteSpecModifyLine}
        subModal={subModal}
        openSelectSubModal={openSelectSubModal}
        closeUpdate={closeUpdate}
      />
      <SearchSubModal
        subPosts={currentSubPosts(subPosts)}
        onSearch={onSearch}
        closeSubModal={closeVisible}
        subjectSearchVisible={subjectSearchVisible}
        onSubSearchSubmit={onSubSearchSubmit}
        totalSubPosts={subPosts.length}
        paginate={paginate}
        currentSubPage={currentSubPage}
        selectValue={selectValue}
        subKey={subKey}
        minSubPageNumberLimit={minSubPageNumberLimit}
        maxSubPageNumberLimit={maxSubPageNumberLimit}
        handleSubPrevbtn={handleSubPrevbtn}
        handleSubNextbtn={handleSubNextbtn}
        handleSubPrevHellipbtn={handleSubPrevHellipbtn}
        handleSubNextHellipbtn={handleSubNextHellipbtn}
      />
      <SearchObjModal
        onSelect={onSelect}
        onSearch={onSearch}
        selectSubPosts={currentSelectSubPosts(selectSubPosts)}
        closeSelectSubModal={closeVisible}
        onSelectSubSearch={onSelectSubSearch}
        subSubjectVisible={subSubjectVisible}
        subLineVisible={subLineVisible}
        selectSubValue={selectSubValue}
        totalSelectSubPosts={selectSubPosts.length}
        selectPaginate={setCurrentSelectSubPage}
        currentSelectSubPage={currentSelectSubPage}
        minSubPageNumberLimit={minSubPageNumberLimit}
        maxSubPageNumberLimit={maxSubPageNumberLimit}
        handleSubPrevbtn={handleSubPrevbtn}
        handleSubNextbtn={handleSubNextbtn}
        handleSubPrevHellipbtn={handleSubPrevHellipbtn}
        handleSubNextHellipbtn={handleSubNextHellipbtn}
      />
      <br />
      <Pagination
        postsCount={postsCount}
        totalPosts={posts.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
        minPageNumberLimit={minPageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        handlePrevbtn={handlePrevbtn}
        handleNextbtn={handleNextbtn}
        handlePrevHellipbtn={handlePrevHellipbtn}
        handleNextHellipbtn={handleNextHellipbtn}
      />
    </>
  );
};

export default BOMCon;
