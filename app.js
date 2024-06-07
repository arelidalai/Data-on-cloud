
//PERSONALIZADO-----------------------------------------------
// Importa las funciones que necesitas del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC3jjjGGMahycSvhZu_PLLYLQq8dsr_vhE",
    authDomain: "data-on-cloud-aec2e.firebaseapp.com",
    projectId: "data-on-cloud-aec2e",
    storageBucket: "data-on-cloud-aec2e.appspot.com",
    messagingSenderId: "764738563955",
    appId: "1:764738563955:web:b50bd2df8c995d7b5f1f06",
    measurementId: "G-ZV4PLGK4YY"
  };
//fin de codigo personalizado-------------------------------------

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Conexióna a firebase establecida correctamente");

document.getElementById('student-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const boleta = document.getElementById('boleta').value;
    const edad = document.getElementById('edad').value;
    const semestre = document.getElementById('semestre').value;
    const carrera = document.getElementById('carrera').value;

    try {
        await addDoc(collection(db, "students"), {
            name: name,
            boleta: boleta,
            edad: edad,
            semestre: semestre,
            carrera: carrera
        });
        document.getElementById('status').innerText = "Datos guardados correctamente";
    } catch (error) {
        console.error("Error al guardar los datos: ", error);
    }
});
