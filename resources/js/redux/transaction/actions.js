import { types } from "./types";
import axios from "axios";
import { download } from "../../helper";

export const fetchTransactions = (page = 1) => ({
    type: types.FETCH_TRANSACTIONS,
    payload: axios.get(`${window.location.origin}/api/transaction?page=${page}`)
})

export const createTransaction = (data) => ({
    type: types.CREATE_TRANSACTION,
    payload: axios.post(`${window.location.origin}/api/transaction`, data)
})

export const validateTransaction = (id) => ({
    type: types.VALIDATE_TRANSACTION,
    payload: axios.put(`${window.location.origin}/api/transaction/validate/${id}`)
})

export const updateTransaction = (id, data) => ({
    type: types.UPDATE_TRANSACTION,
    payload: axios.post(`${window.location.origin}/api/transaction/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
})

export const downloadProof = (id) => ({
    type: types.DOWNLOAD_PROOF,
    payload: axios({
        url: `${window.location.origin}/api/download/proof/${id}`,
        method: "GET",
        responseType: "blob",
    }).then(
        response => {
            download(response, ' comprovativo.pdf')
        },
        error => {
            return error.data;
        }
    ),
});