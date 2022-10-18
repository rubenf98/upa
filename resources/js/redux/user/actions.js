import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchUsers = (page = 1, filters = {}) => ({
    type: types.FETCH_USERS,
    payload: axios.get(`${window.location.origin}/api/user?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})