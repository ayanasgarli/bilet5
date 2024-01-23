import axios from "axios";

export async function getAll() {
  let clothes;
  await axios.get("http://localhost:7070/api/clothes").then(res => {
    clothes = res.data;
  });
  return clothes;
}

export async function getById(id) {
  let cloth;
  await axios.get(`http://localhost:7070/api/clothes/${id}`).then((res) => {
    cloth = res.data;
  });
  return cloth;
}

export async function postData(payload) {
  let newData;
  await axios.post("http://localhost:7070/api/clothes", payload).then(res => {
    newData = res.data;
  });
  return newData;
}

export async function deleteById(id) {
  let deletedCloth;
  await axios.delete(`http://localhost:7070/api/clothes/${id}`).then(res => {
  deletedCloth = res.data;
  });
  return deletedCloth
}