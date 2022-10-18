import React from "react";
import styled from "styled-components";
import Table from "antd/es/table"
import { dimensions } from "../../helper";

const Container = styled.div`
    background: transparent;
    border-radius: 5px;

    .table-row  {
        &:hover {
            cursor: pointer;
        }

        @media (max-width: ${dimensions.sm}){
            &:hover {
                cursor: auto;
            }
        }
    }
`;


function TableContainer({ onRow, columns, data, meta, handlePageChange, loading,
    showQuickJumper = false, handleExpandable, bordered = false }) {

    return (
        <div>
            <Container>
                <Table
                    scroll={{ x: 1270 }}
                    rowClassName="table-row"
                    bordered={bordered}
                    onRow={onRow}
                    onChange={handlePageChange}
                    pagination={meta ? {
                        showQuickJumper: showQuickJumper,
                        total: meta.total,
                        showTotal: (total, range) => `${range[0]} a ${range[1]} de ${total}`,
                        total: meta.total,
                        current: meta.current_page,
                        pageSize: meta.per_page,
                    } : false}
                    columns={columns}
                    loading={loading}
                    dataSource={data}
                    rowKey={(record) => record.id}
                    expandable={handleExpandable}
                />
            </Container>

        </div>
    );
}

export default TableContainer;
