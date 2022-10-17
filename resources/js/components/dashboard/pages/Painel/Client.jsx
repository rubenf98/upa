import Row from "antd/es/row"
import Col from "antd/es/col"
import Upload from "antd/es/upload"
import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { dimensions, fonts, maxWidth } from "../../../../helper";
import { fetchSelf } from "../../../../redux/auth/actions";
import { downloadEbook } from "../../../../redux/ebook/actions";

import { fetchTransactions, updateTransaction } from "../../../../redux/transaction/actions";
import { connect } from "react-redux";
import { Button, Spin } from "antd";
import TableContainer from "../../../common/TableContainer";

const Container = styled.div`
    width: 100%;
    margin: auto;
    max-width: ${maxWidth};

    h1 {
        font-size: 28px;
    }
`;

const CardContainer = styled.div`
    background: white;
    width: 100%;
    
    @media (max-width: ${dimensions.sm}){
        margin: 10px 0;
    }

    

    .no-data {
        width: 80%;
        margin: 20px auto;
        display: block;
        max-width: 120px;
    }

    p {
        margin: 15px auto;
        font-size: 14px;

        span {
            opacity: .5;
        }
        
    }
`;

const Content = styled(Row)`
    margin: 50px auto;
    width: 100%;
`;

const Here = styled(Link)`
    font-weight: bold;
    color: black;
    opacity: 1;

    &:hover {
        color: black;
    }
`;

const CardItem = styled.div`
    box-sizing: border-box;
    text-align: left;
    padding: 0px 30px 30px 0px;
    width: 25%;

    .image-container {
        height: 0;
        overflow: hidden;
        padding-top: 70%;
        box-sizing: border-box;
        position: relative;
        transition: all .3s ease-in-out;
        cursor: pointer;
        margin-bottom: 10px;


        &:hover {
            transform: scale(1.01);
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
        }

        img {
            width: 100%;
            vertical-align: top;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            object-fit: cover;
        }
    }
    
    .info-container {
        display: flex;
        align-items: flex-start;

        div {
            flex: 1;
            margin-right: 10px;
            width: 70%;
        }

        img, .ant-spin {
            width: 35px;
            height: 35px;
            margin: 0px;
            margin-top: 15px;
            
            cursor: pointer;
        }
    }
    

    h3 {
        font-family: ${fonts.text};
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 0px;
        text-transform: capitalize;
    }

    p {
        margin: 0px;
        font-size: 12px;
        opacity: .7;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;


function Client({ fetchSelf, loading, currentUser, fetchTransactions, transactions, meta, updateTransaction, downloadEbook,loadingDownload }) {
    var navigate = useNavigate();

    useEffect(() => {
        fetchSelf();
        fetchTransactions()
    }, [])

    function handleFileUpload(info, transaction) {
        if (info.file.status !== 'uploading') {
            const formData = new FormData();
            formData.append("file", info.file);
            formData.append("_method", "PATCH");
            updateTransaction(transaction, formData);
        }
    }

    function handlePageChange(pagination) {
        fetchTransactions(pagination.current);
    }

    function handleActionClick(element) {
        if (element.type == "course") {
            navigate("/painel/sessoes/" + element.id);
        } else {
            downloadEbook(element.id);
        }
    }


    const columns = [
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
            dataIndex: '',
            render: (element, row) =>
                row.statuses[0].id == 1 && <Upload
                    onChange={(file) => handleFileUpload(file, row.id)}
                    showUploadList={false}
                    accept=".pdf"
                    beforeUpload={file => {
                        return false;
                    }}
                >
                    <Button>Submeter comprovativo</Button>
                </Upload>
            ,
        },
    ];

    return (
        <Container>
            <Content type="flex" justify="space-between">
                <h1>A sua oferta formativa</h1>
                <CardContainer>
                    {[...currentUser?.courses, ...currentUser?.ebooks].length ?
                        <div>
                            <Row type="flex">
                                {[...currentUser?.courses, ...currentUser?.ebooks].map((element, index) => (
                                    <>{
                                        <CardItem key={index}>
                                            <div className="image-container">
                                                <img src={element.thumbnail} alt={element.title} />
                                            </div>
                                            <div className="info-container">
                                                <div>
                                                    <h3>{element.title} </h3>
                                                    <p className="subtitle">{element.subtitle} </p>
                                                </div>
                                                {loadingDownload ? <Spin /> : <img onClick={() => handleActionClick(element)} src={"/icon/" + (element.type == "course" ? "link" : "download") + ".svg"} alt={element.title} />}
                                                
                                            </div>
                                        </CardItem>}
                                    </>
                                ))}
                            </Row>
                            <p><span>Verifique a restante oferta </span> <Here to="/painel/sessoes">aqui</Here></p>

                        </div>
                        :
                        <>
                            <img className="no-data" src="/image/dashboard/no_sessions.svg" alt="sem dados" />
                            <p><span>Ainda não adquiriu nenhuma oferta formativa, verifique </span> <Here to="/painel/sessoes">aqui</Here></p>
                        </>
                    }
                </CardContainer>

            </Content>
            <h1>Histórico de transações</h1>
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
        updateTransaction: (id, data) => dispatch(updateTransaction(id, data)),
        downloadEbook: (id) => dispatch(downloadEbook(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.transaction.loading,
        currentUser: state.auth.currentUser,
        transactions: state.transaction.data,
        meta: state.transaction.meta,
        loadingDownload: state.ebook.loadingDownload
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Client));