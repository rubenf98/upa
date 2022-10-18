import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchUsers } from "../../../../redux/user/actions";
import { dimensions, maxWidth } from "../../../../helper";
import TableContainer from "./TableContainer";

const ContentContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    margin: 50px 0px;

    @media (max-width: ${dimensions.lg}){
        width: 100%;
    }

    @media (max-width: ${maxWidth}) {
        padding: 0 20px;
        box-sizing: border-box;
    }
`;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Table = styled.div`
     width: 100%;
`;

class User extends Component {
    state = {
        filters: {},
        page: 1,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isAdmin != this.props.isAdmin && this.props.isAdmin) {
            this.props.fetchUsers();
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    setFilters = (aFilters) => {
        var { filters } = this.state;
        filters = { ...filters, ...aFilters };
        this.setState({ filters });

        this.props.fetchUsers(1, filters);
    }

    handlePageChange = (pagination) => {
        var { filters } = this.state;
        this.setState({ page: pagination.current });

        this.props.fetchUsers(pagination.current, filters);
    }

    render() {
        var { data, loading, meta, isAdmin } = this.props;

        return (
            <Container>
                <ContentContainer>
                    {isAdmin &&
                        <Table>
                            <TableContainer
                                handlePageChange={this.handlePageChange}
                                data={data}
                                loading={loading}
                                meta={meta}
                            />
                        </Table>
                    }

                </ContentContainer>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (page, filters) => dispatch(fetchUsers(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        data: state.user.data,
        meta: state.user.meta,
        isAdmin: state.auth.isAdmin,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
