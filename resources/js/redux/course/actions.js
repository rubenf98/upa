import { types } from "./types";
import axios from "axios";

export const fetchCourses = () => ({
    type: types.FETCH_COURSES,
    payload: axios.get(`${window.location.origin}/api/course`)
})

export const fetchCourse = (id) => ({
    type: types.FETCH_COURSE,
    payload: axios.get(`${window.location.origin}/api/course/${id}`)
})

export const deleteReservation = id => ({
    type: types.DELETE_COURSE,
    payload: axios.delete(`${window.location.origin}/api/course/${id}`),
    meta: { id }
});

export const updateReservation = (id, data) => ({
    type: types.UPDATE_COURSE,
    payload: axios.put(`${window.location.origin}/api/course/${id}`, data),
});