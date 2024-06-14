import { useState } from "react";
import Container from "react-bootstrap/Container";
import {Form} from 'react-bootstrap';
import Uploadimg from '../assets/uploadimg.png'

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setImagePreview(null);
      alert("Please select a valid image file (JPEG, PNG, GIF).");
    }
  };

  return (
    <Container
      style={{
        height: "460px",
        width: "50%",
        background: "white",
        margin: "20px 50px",
        display:'flex',
        flexDirection:'column',
        border: "0.5px solid #cccccc",
        borderRadius: "20px",
        justifyContent: "center",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }}
    >
      <div
        style={{
          height: "75%",
          width: "100%",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            border: "1.5px dotted grey",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <label htmlFor="fileInput">
            <div
              style={{
                background: "#dddddd",
                height: "130px",
                width: "130px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Uploaded"
                  style={{ width: "130px", height: "130px", borderRadius: "100%" }}
                />
              ) : (
                <>
                  <img
                    src={Uploadimg}
                    alt="Upload here"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p style={{ margin: "0px", fontSize: "12px",color:"gray" }}>Upload photo</p>
                </>
              )}
            </div>
          </label>
        </div>
          <p style={{ margin: "35px",fontSize:'15.5px' }}>
            Allowed *.jpeg, *.jpg, *.png,*.gif max size of 3 Mb
          </p>
        
      </div>
      <div style={{ textAlign: "left",width:'90%' }}>
        <strong>Email Verified</strong>
        <div style={{display:'flex'}}>
        <p>
          Disabling this will automatically send the user a verification email
        </p>
        <Form.Check type="switch"
        id="custom-switch" />
        
        </div>
        </div>
      
    </Container>
  );
}

export default Upload;