import React from "react";
import { db } from "./firebase";
import { collection, addDoc, doc } from "firebase/firestore";

export default async function SendEmail(nombre, apellido, email, texto) {
  const collectionRef = collection(db, "everseek-web","data","emails");
  const emailContent = {
	  pass:"wof3000",
    message: {
      header: "Comentarios de pagina web Everseek.io",
      human_being: `${"Comentario de: " +nombre + " " + apellido}`,
      mail: `${email}`,
      text: `${texto}`,
    },
  };
  try {
    const docRef = await addDoc(collectionRef, emailContent);
    return docRef;
  } catch (error) {
    console.error("Error adding email document: ", error);
    throw error;
  }
}
