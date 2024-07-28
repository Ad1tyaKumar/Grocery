import React, { useEffect } from 'react'
import axios from "axios";
import backEndUrl from '../../host';
import { useNavigate } from 'react-router';
import Loader from '../Loader/Loader';
import { getUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import { getItems } from '../../actions/cartActions';

const Validate = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    useEffect(() => {
        validate();
    }, [])
    const validate = async () => {
        const response = await axios.get(`${backEndUrl}/api/v1/login/success`, { withCredentials: true });
        if (response.data.success) {
            dispatch(getUser());
            dispatch(getItems());
            history('/');
        } else {
            history('/auth/signin');
        }
    }
    return (
        <Loader />
    )
}

export default Validate