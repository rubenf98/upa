import { types } from "./types";
import axios from "axios";


export const fetchTransactions = (page = 1) => ({
    type: types.FETCH_TRANSACTIONS,
    payload: axios.get(`${window.location.origin}/api/transaction?page=${page}`)
})

export const createTransaction = (data) => ({
    type: types.CREATE_TRANSACTION,
    payload: axios.post(`${window.location.origin}/api/transaction`, data)
})

export const updateTransaction = (id, data) => ({
    type: types.UPDATE_TRANSACTION,
    payload: axios.post(`${window.location.origin}/api/transaction/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
})