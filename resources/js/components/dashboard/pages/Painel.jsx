import React from "react";
import { connect } from "react-redux";
import Admin from "./Painel/Admin";
import Client from "./Painel/Client";

function Painel({ isAdmin }) {
    return (
        <>{isAdmin ? <Admin /> : <Client />}</>
    )
}

const mapStateToProps = (state) => {
    return {
        isAdmin: state.auth.isAdmin,
    };
};

export default connect(mapStateToProps, null)(Painel);