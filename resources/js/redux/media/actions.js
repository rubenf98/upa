import { types } from "./types";
import axios from "axios";
import { download } from "../../helper";

export const fetchVideo = (filename) => ({
    type: types.FETCH_VIDEO,
    payload: axios.get(`${window.location.origin}/api/video/${filename}`, {
        responseType: 'arraybuffer'
    })
})

export const downloadAudio = (id) => ({
    type: types.DOWNLOAD_AUDIO,
    payload: axios({
        url: `${window.location.origin}/api/download/audio/${id}`,
        method: "GET",
        responseType: "blob",
    }).then(
        response => {
            download(response, ' audio.mp3')
        },
        error => {
            return error.data;
        }
    ),
});

export const downloadInstructions = (id) => ({
    type: types.DOWNLOAD_INSTRUCTIONS,
    payload: axios({
        url: `${window.location.origin}/api/download/instructions/${id}`,
        method: "GET",
        responseType: "blob",
    }).then(
        response => {
            download(response, ' instructions.pdf')
        },
        error => {
            return error.data;
        }
    ),
});
