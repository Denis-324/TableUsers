/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-prop-types */
import { Table as TableAnt } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import React, { useState } from 'react';
import styled from 'styled-components';

interface DataType {
  key: React.Key;
  name: string;
  surname: string;
  site: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Выделить ячейки',
    dataIndex: 'key',
  },
  {
    title: 'Имя',
    dataIndex: 'name',
  },
  {
    title: 'Фамилия',
    dataIndex: 'surname',
  },
  {
    title: 'Сайт',
    dataIndex: 'site',
  },
];

type TableUsersType = {
  key: number;
  name: string;
  surname: string;
  site: string;
};
type TableProps = {
  tableData: TableUsersType[];
};

export const TableUsers: React.FC<TableProps> = (pops) => {
  const { tableData } = pops;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedInfo, setSelectedInfo] = useState<DataType[]>();

  const onSelectChange = (newSelectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    setSelectedInfo(selectedRows);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Wrap>
      <TableAnt
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
        footer={() => (
          <>
            <strong>Пользователи: </strong>
            <span>
              {selectedInfo?.map((el, index, arr) => (
                <span key={el.key}>
                  {' '}
                  {index !== arr.length - 1 ? `${el.name}, ` : `${el.name}.`}{' '}
                </span>
              ))}
            </span>
          </>
        )}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  .ant-pagination {
    display: none;
  }
`;
