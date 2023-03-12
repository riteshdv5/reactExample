import React, { useState, useEffect } from "react";

import FileUploadService from "../services/FileUploadService";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
  MDBBtn,
  MDBProgress, MDBProgressBar ,
  MDBListGroup,
  MDBListGroupItem
} from "mdb-react-ui-kit";

const FileUpload = () => {
  
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const [fileInfos, setFileInfos] = useState([]);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  }

  const upload = () => {
    let currentFile = selectedFiles[0];

    // setProgress(0);
    setCurrentFile(currentFile);

    FileUploadService.upload(currentFile, (event) => {
      console.log("Events ", event)
      setProgress(Math.round((100 * event.loaded) / event.total));
 
    })
      .then((response) => {
        setMessage(response.data.message);
        return FileUploadService.getFiles();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  const download = (filename) => {
    FileUploadService.download(filename).then((response)=>{
      console.log("response data from download", response);
      if(response.data){
        window.location = response.config.baseURL + response.config.url
        setMessage("File Downloaded Successfully : " + filename);
      }
    })
  } 


  useEffect(() => {
    FileUploadService.getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);

  return (
    <MDBContainer>
      <div className="mt-3" >
        <h1>File Upload </h1>
      </div>
      <MDBRow className="mb-3 mt-5">
        <MDBCol md="6" offsetMd={3}>
          <MDBCard>
          {currentFile && 
          <MDBProgress height='20'>
                <MDBProgressBar width={ progress } valuemin={0} valuemax={100}>
                {progress}%
                </MDBProgressBar>
            </MDBProgress>}
            <MDBInput label='' onChange={selectFile} type='file'  multiple/>
            <MDBBtn className='me-1' disabled={!selectedFiles} onClick={upload}>
                Upload
            </MDBBtn>
            <div className="alert alert-light" role="alert">
                {message}
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBCard>
            <MDBCardHeader>List of Files Uploaded</MDBCardHeader>
            <MDBCardBody>
                <MDBListGroup flush>
                {fileInfos &&
                    fileInfos.map((file, index) => (
                    <MDBListGroupItem className="list-group-item" key={index}>
                        <a onClick={ (e)=> download(file.name)} href={file.url}>{file.name}</a>
                    </MDBListGroupItem>
                    ))}
                </MDBListGroup>
            </MDBCardBody>
            </MDBCard>
    </MDBContainer>
  );
};

export default FileUpload;