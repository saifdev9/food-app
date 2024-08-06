"use client";

import { useRef, useState } from "react";
import styles from "./ImagePicker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [ImagePick, setImagePick] = useState();
  const ImageRef = useRef();

  function handlePick(e) {
    ImageRef.current.click();
  }

  function handleImagePre(e) {
    const file = e.target.files[0];
    if (!file) {
      setImagePick(null);
      return;
    }

    const fileRead = new FileReader();
    fileRead.onload = () => {
      setImagePick(fileRead.result);
    };
    fileRead.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!ImagePick && <p>No image picked yet.</p>}
          {ImagePick && <Image src={ImagePick} alt="image" fill />}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          name={name}
          ref={ImageRef}
          required
          onChange={handleImagePre}
          accept="image/png, image/jpeg"
        />
        <button onClick={handlePick} className={styles.button} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
