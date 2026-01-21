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
  });

export const archiveNoteApi=(id)=>
    axios.patch(`${BASE_URL}/${id}`, {archived:true})
export default api;

export const unarchiveNoteApi = (id) =>
  axios.patch(`${BASE_URL}/${id}`, { archived: false });