import { types } from "./types";
import axios from "axios";
import { download } from "../../helper";

export const fetchEbooks = () => ({
    type: types.FETCH_EBOOKS,
    payload: axios.get(`${window.location.origin}/api/ebook`)
})

export const downloadEbook = (id) => ({
    type: types.DOWNLOAD_EBOOK,
    payload: axios({
        url: `${window.location.origin}/api/download/ebook/${id}`,
        method: "GET",
        responseType: "blob",
    }).then(
        response => {
            download(response, ' ebook.pdf')
        },
        error => {
            return error.data;
        }
    ),
});
