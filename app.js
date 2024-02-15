import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC4MsMnwyJ8TN-OPOpWusW9nQdahCE3AWg",
    authDomain: "prub-d6eca.firebaseapp.com",
    databaseURL: "https://prub-d6eca-default-rtdb.firebaseio.com",
    projectId: "prub-d6eca",
    storageBucket: "prub-d6eca.appspot.com",
    messagingSenderId: "769917956022",
    appId: "1:769917956022:web:c064e44e708db676b29b17"
};

const app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos de Firebase
const database = getDatabase();

// Obtiene una referencia a los datos que deseas escuchar
const dataRef = ref(database, "Respuestas");
// Escucha cambios en los datos
onValue(dataRef, (snapshot) => {
  const data = snapshot.val();

  // Actualiza la interfaz de usuario con los datos
  // Puedes usar jQuery o manipulación del DOM aquí
  updateTable(data);
});

// Función para actualizar la tabla con los datos
function updateTable(data) {
  const tableBody = document.getElementById("data-body");
  tableBody.innerHTML = ""; // Limpia el contenido existente

  // Itera sobre los datos y crea filas en la tabla
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const rowData = data[key];
      const row = document.createElement("tr");

      // Ajusta las propiedades según la estructura de tus datos

      const nameCell = document.createElement("td");
      nameCell.textContent = rowData.nombre;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = rowData.email;
      row.appendChild(emailCell);

      const subjectCell = document.createElement("td");
      subjectCell.textContent = rowData.asunto;
      row.appendChild(subjectCell);

      const messageCell = document.createElement("td");
      messageCell.textContent = rowData.mensaje;
      row.appendChild(messageCell);

      tableBody.appendChild(row);
    }
  }
}
