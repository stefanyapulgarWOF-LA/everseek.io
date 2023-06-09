import React from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function SendEmail(nombre, apellido, email, texto) {
  const collectionRef = collection(db, "emails");
  const emailContent = {
	pass:"wof3000",
    to: "info@firehawkdetection.com",
    // to: "stefanya.pulgar@wof-la.com",
    replyTo: email,
    message: {
      subject: "Comentarios de pagina web Everseek.io",
      text: `${"Comentario de: " +nombre + " " + apellido}`,
      html: `
			<div style={{margin:'100px'}}>
			<p><strong>Nombre:</strong> ${nombre + " " + apellido}</p>
			       <p><strong>Email:</strong> ${email}</p>
			      <p> <strong>Comentario:</strong> ${texto}</p>
			</div>`,
    },
  };
  return await addDoc(collectionRef, emailContent);
}
