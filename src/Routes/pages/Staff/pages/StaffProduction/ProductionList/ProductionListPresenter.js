import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Table, Typography, BackTop, Input, Space, Spin } from 'antd';
import Highlighter from 'react-highlight-words';
import Today from 'components/Today';

const { Text } = Typography;

const ProductionListPresenter = ({
  dataSource,
  setSearchText,
  setSearchedColumn,
  searchInput,
  searchedColumn,
  searchText,
  loading,
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
      title: '생산코드',
      dataIndex: 'productionId',
      width: 150,
      ...getColumnSearchProps('productionId'),
      sorter: (a, b) => a.productionId - b.productionId,
    },
    {
      title: '생산품목',
      dataIndex: 'productionName',
      width: 150,
      ...getColumnSearchProps('productionName'),
      render: (name, record) => (
        <Link to={`/staff/production/${record.productionId}`}>{name}</Link>
      ),
    },
    {
      title: '브랜드',
      dataIndex: 'productionBrandName',
      width: 170,
      ...getColumnSearchProps('productionBrandName'),
    },
    {
      title: '제품수량',
      dataIndex: 'productionQuantity',
      width: 150,
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.productionQuantity - b.productionQuantity,
    },
    {
      title: '단가',
      dataIndex: 'productionPrice',
      width: 150,
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.productionPrice - b.productionPrice,
    },
    {
      title: '출고일자',
      dataIndex: 'releaseDate',
      width: 190,
      render: (_, { releases }) => (
        <>
          {releases.length === 0 ? (
            <Text type="danger">출고 정보 없음</Text>
          ) : (
            releases.map((release) => {
              return (
                <div
                  style={{ display: 'flex', alignItems: 'center' }}
                  key={release.releaseId}
                >
                  <Text mark style={{ marginRight: 5 }}>
                    {release.releaseDate}
                  </Text>
                  <Today releaseDate={release.releaseDate} />
                </div>
              );
            })
          )}
        </>
      ),
    },
    {
      title: '비고',
      dataIndex: 'productionDescription',
    },
  ];
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ marginBottom: 25 }}>
          생산 목록
        </Typography.Title>
        <div>
          <Link to="/staff/release/list">
            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#293462',
                border: '#293462',
              }}
            >
              출고 목록
            </Button>
          </Link>
          <Link to="/staff/production">
            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#FEB139',
                border: '#FEB139',
              }}
            >
              등록
            </Button>
          </Link>
        </div>
      </div>
      <Spin spinning={loading}>
        <Table
          rowKey="productionId"
          columns={columns}
          dataSource={dataSource}
        />
      </Spin>
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default ProductionListPresenter;
