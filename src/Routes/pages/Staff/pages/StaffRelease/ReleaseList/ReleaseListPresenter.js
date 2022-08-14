import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Typography, Table, BackTop, Button, Input, Space } from 'antd';

import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';

const ReleaseListPresenter = ({
  dataSource,
  setSearchText,
  setSearchedColumn,
  searchInput,
  searchedColumn,
  searchText,
}) => {
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={'생산 코드를 입력해 주세요.'}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            검색
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            초기화
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            검색 취소
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: '출고코드',
      dataIndex: 'releaseId',
      ...getColumnSearchProps('releaseId'),
      render: (id) => <Link to={`/staff/release/${id}`}>{id}</Link>,
    },
    {
      title: '출고일자',
      dataIndex: 'releaseDate',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.releaseDate - b.releaseDate,
    },
    {
      title: '출고수량',
      dataIndex: 'releaseQuantity',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.releaseQuantity - b.releaseQuantity,
    },
    {
      title: '출고방식',
      dataIndex: 'releaseType',
    },
    {
      title: '출고 대상 회사',
      dataIndex: 'clientName',
      ...getColumnSearchProps('clientName'),
    },
    {
      title: '출고 대상 상품',
      dataIndex: 'productionName',
      ...getColumnSearchProps('productionName'),
    },
    {
      title: '카카오 알림톡',
      dataIndex: 'kakaoNotification',
      align: 'center',
      render: () => (
        <Button
          type="primary"
          size="middle"
          style={{
            backgroundColor: '#FAE100',
            border: '#FAE100',
            color: '#3C1E1E',
          }}
        >
          전송
        </Button>
      ),
    },
  ];
  return (
    <>
      <Typography.Title level={3} style={{ margin: 5 }}>
        출고 목록
      </Typography.Title>
      <Table
        rowKey="releaseId"
        columns={columns}
        dataSource={dataSource}
        tableLayout="fixed"
      ></Table>
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default ReleaseListPresenter;
