import { types } from "./types";
import axios from "axios";


export const fetchVideo = (filename) => ({
    type: types.FETCH_VIDEO,
    payload: axios.get(`${window.location.origin}/api/video/${filename}`, {
        responseType: 'arraybuffer'
    })
})

