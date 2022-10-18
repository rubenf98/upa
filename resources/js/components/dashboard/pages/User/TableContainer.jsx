import React from "react";
import styled from "styled-components";
import Table from "../../../common/TableContainer";
import moment from "moment";

const Container = styled.div`
    width: 100%;
`;

function TableContainer({ loading, data, meta, handlePageChange }) {

    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            fixed: "left",
            width: 80,
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Nome',
            dataIndex: 'name',
        },
        {
            title: 'Cursos',
            dataIndex: 'courses',
            render: (courses) => (<div>{courses.map((course, index) => (
                <span key={course.id}>{course.title} {index != courses.length- 1 && ","} </span>
            ))}</div>),
        },
        {
            title: 'Ebooks',
            dataIndex: 'ebooks',
            render: (ebooks) => (<div>{ebooks.map((ebook, index) => (
                <span key={ebook.id}>{ebook.title} ({ebook.subtitle}) {index != ebooks.length - 1 && ","} </span>
            ))}</div>),
        },
        {
            title: 'Membro desde',
            dataIndex: 'created_at',
        },
        {
            title: 'Conta validada',
            dataIndex: 'email_verified_at',
            render: (validation) => (<div>{validation ? validation : "Esta conta ainda não se encontra validada"}</div>),
        },
    ];


    return (
        <Container>
            <Table
                loading={loading}
                data={data}
                columns={columns}
                meta={meta}
                handlePageChange={(aPage) => handlePageChange(aPage)}
            />
        </Container>
    )
}

export default TableContainer;
