import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Form, notification } from 'antd';
import styled from "styled-components";
import Activity from './Form/Activity';
import Location from './Form/Location';
import People from './Form/People';
import { dimensions } from "../../helper";
import axios from "axios";

const Content = styled.div`
    padding: 30px;

    @media (max-width: ${dimensions.md}) {
        padding: 15px;
    }

    @media (max-width: ${dimensions.sm}) {
        padding: 5px;
    }

`;

const ModalContainer = styled(Modal)`
    .ant-modal-content {
        border-radius: 8px;
        background-color: #fbfbfb;
    }
`;

const OrderForm = ({ visible, onCreate, onCancel, activities = [], initForm = [0, 0] }) => {
    const [step, setStep] = useState(0);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [calendarMetadata, setCalendarMetadata] = useState({});
    const [form] = Form.useForm();



    return (
        <div></div>
    );
};

export default OrderForm;