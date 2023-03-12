import http from "./http-common";


const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/upload/uploadfile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const download = (filename) => {
  return http.get("/upload/files/" + filename);
}

const getFiles = () => {
  return http.get("/upload/files");
};

export default {
  upload,
  getFiles,
  download
};