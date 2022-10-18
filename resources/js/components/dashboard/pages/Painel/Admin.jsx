import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { maxWidth } from "../../../../helper";
import { fetchSelf } from "../../../../redux/auth/actions";
import { fetchTransactions, validateTransaction, downloadProof } from "../../../../redux/transaction/actions";
import { connect } from "react-redux";
import { Button, Popconfirm, Row } from "antd";
import TableContainer from "../../../common/TableContainer";

const Container = styled.div`
    width: 100%;
    margin: auto;
    max-width: ${maxWidth};

    h1 {
        font-size: 28px;
    }

    @media (max-width: ${maxWidth}) {
        padding: 0 20px;
        box-sizing: border-box;
    }
`;


function Admin({ fetchSelf, loading, fetchTransactions, transactions, meta, validateTransaction, downloadProof }) {

    useEffect(() => {
        fetchSelf();
        fetchTransactions()
    }, [])


    function handlePageChange(pagination) {
        fetchTransactions(pagination.current);
    }


    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            fixed: "left",
            width: 80,
        },
        {
            title: 'Cliente',
            dataIndex: 'user',
            render: (user) => user.email,
        },
        {
            title: 'Total',
            dataIndex: 'price',
            render: (price) => <span>{price}.00€</span>,
        },

        {
            title: 'Serviços',
            dataIndex: 'items',
            render: (items) =>
                items.map((item, index) => (
                    <span key={index}>{item.title}{index == items.length - 1 ? "" : ", "}</span>
                ))
            ,
        },
        {
            title: 'Data',
            dataIndex: 'created_at',
        },
        {
            title: 'Estado',
            dataIndex: 'statuses',
            render: (status) => <span style={{ textTransform: "capitalize" }}>{status[0].name}</span>,
        },

        {
            title: '',
            dataIndex: 'proof',
            render: (element, row) =>
                row.statuses[0].id == 2 &&
                <Row type="flex">
                    <Button onClick={() => downloadProof(element)}>Descarregar comprovativo</Button>
                    <Popconfirm
                        title="Tem a certeza que pretende validar esta transação?"
                        onConfirm={() => validateTransaction(row.id)}
                        okText="Sim"
                        cancelText="Não"
                    >
                        <Button>Validar transação</Button>
                    </Popconfirm>
                </Row>

            ,
        },
    ];

    return (
        <Container>
            <h1>Transações</h1>
            <TableContainer
                handlePageChange={handlePageChange}
                data={transactions}
                loading={loading}
                meta={meta}
                columns={columns}
            />
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSelf: () => dispatch(fetchSelf()),
        fetchTransactions: (page) => dispatch(fetchTransactions(page)),
        validateTransaction: (id, data) => dispatch(validateTransaction(id, data)),
        downloadProof: (filename) => dispatch(downloadProof(filename)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.transaction.loading,
        currentUser: state.auth.currentUser,
        transactions: state.transaction.data,
        meta: state.transaction.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Admin));