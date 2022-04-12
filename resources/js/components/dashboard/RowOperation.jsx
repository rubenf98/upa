import React from "react";
import Menu from "antd/es/menu"
import Dropdown from "antd/es/dropdown"
import Popconfirm from "antd/es/popconfirm"
import styled from "styled-components";

const StyledDropdownLink = styled.div`
    cursor: pointer;

    img {
        width: 15px;
    }
`;
const RowOperation = ({ onDeleteConfirm, children, onUpdateClick }) => {
    const menu = (
        <Menu>
            {onUpdateClick && (
                <Menu.Item key="update" onClick={() => onUpdateClick()}>
                    Atualizar
                </Menu.Item>
            )}
            {onDeleteConfirm && (
                <Menu.Item key="delete" >
                    <Popconfirm
                        title="De certeza que quer apagar este registo?"
                        okText="Sim"
                        cancelText="Não"
                        onConfirm={() => onDeleteConfirm()}
                    >

                        Apagar

                    </Popconfirm>
                </Menu.Item>
            )}
            {children}
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <StyledDropdownLink className="ant-dropdown-link">
                <img src="/icon/arrow_down_black.svg" alt="menu" />
            </StyledDropdownLink>
        </Dropdown>
    );
};

export default RowOperation;
