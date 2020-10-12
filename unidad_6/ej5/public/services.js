const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Your web app's Firebase configuration
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore();

const crearRegistro = (data) => {
  return db.collection("users").add(data);
};

const updateRegistro = (id, data) => {
  const recordRef = db.collection("users").doc(id);
  return recordRef.update(data);
};

const eliminarRegistro = (id) =>{
  db.collection("users")
  .doc(id)
  .delete()
}



const suscribe = (cb) => {
  return db.collection("users").onSnapshot(cb);
};

export default {
  crearRegistro,
  updateRegistro,
  eliminarRegistro,
  suscribe
}