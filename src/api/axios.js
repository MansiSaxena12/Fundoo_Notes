import axios from "axios";
const api= axios.create({
    baseURL:'http://localhost:3000'
})
const BASE_URL = "http://localhost:3000/notes";
export const getNotes=()=>axios.get(BASE_URL);
export const getArchiveNotes = () => axios.get(`${BASE_URL}?archived=true`);

export const addNoteApi = (note) =>
  axios.post(BASE_URL, {
    ...note,
    archived: false,
    trash: false,
  });

export const archiveNoteApi=(id)=>
    axios.patch(`${BASE_URL}/${id}`, {archived:true,trash: false,})


export const unarchiveNoteApi = (id) =>
  axios.patch(`${BASE_URL}/${id}`, { archived: false });


export const trashNoteApi=(id) =>
    axios.patch(`${BASE_URL}/${id}`, {trash: true, archived:false})

export const restoreNoteApi= (id) =>
    axios.patch(`${BASE_URL}/${id}`, {archived:false, trash:false})

export const updateNoteColorApi = (id, color) =>
  axios.patch(`${BASE_URL}/${id}`, { color });

export default api;