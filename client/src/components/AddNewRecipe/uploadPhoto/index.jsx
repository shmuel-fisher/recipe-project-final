import React from "react";
import { useState } from "react";
import assets from "../../../assets/assets.gif";
import axios from "axios";

export default function UploadImage({setImageUrl}) {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState([]);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function uploadSingleImage(base64) {
    setLoading(true);
    try {
      axios
        .post("http://localhost:8000/api/uplaod/image", { image: base64 })
        .then((res) => {
          setUrl(res.data);
          setImageUrl(res.data);
          alert("התמונה עלתה בהצלחה!");
        })
        .then(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }


  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files.length);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }
  };

  function UploadInput() {
    return (
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <input
            onChange={uploadImage}
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple
          />
        </label>
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col m-8 ">
      <div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          העלאת תמונה
        </h2>
      </div>
      <div>
        {url && (
          <div>
            העלאת תמונה{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </div>
        )}
      </div>
      <div>
        {loading ? (
          <div className="flex items-center justify-center">
            <img src={assets} />{" "}
          </div>
        ) : (
          <UploadInput />
        )}
      </div>
      <br />
      <br />
      <br />

      <img src={url} height="100px" width="200px"></img>
    </div>
    
  );
}

