import { useEffect, useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import axios from "axios";
import { EMPTY_FORM_VALUES } from "./shared/constants";
import UserList from "./components/UserList";
import Loader from "./components/Loader";

//const BASE_URL = "https://users-crud.academlo.tech/swagger/?format=openapi";
const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [isShowModal, setIsShowModal] = useState(false); // is -> esta mostrando el modal si ò no
  const [users, setUsers] = useState([]);
  const [isUserToUpdate, setIsUserToUpdate] = useState(null); // permite saber si hay informacion o no para editar
  const [imgGender, setImgGender] = useState(null);// imgGender guarda informacion como el genero y la imagen

  //Loader
  const [loaderConfi, setLoaderConfi] = useState(true);

  //Dark
  const [eventsDark, setEventsDark] = useState(false);
  const [eventIcono, setEventIcono] = useState(null);

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data)) //
      .catch((err) => console.log(err));
  };

  // funcion encargada de crear mis usuarios
  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => {
        getAllUsers(); //llamado de usuarios
        setIsShowModal(false); //cierra mi modal
        reset(EMPTY_FORM_VALUES); //vacia el formulario
      })
      .catch((err) => console.log(err));
  };

  // funcion encargada de eliminar mis usuarios
  const deleteUsers = (idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (userUpdated, reset) => {
    axios
      .patch(BASE_URL + `users/${isUserToUpdate.id}/`, userUpdated)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(EMPTY_FORM_VALUES);
        setIsUserToUpdate(null);
      })
      .catch((err) => console.log(err));
  };
  const getPicWithGender = () => {
    const URL = "https://randomuser.me/api/";
    axios
      .get(URL)
      .then(({ data }) => setImgGender(data.results[0]))
      .catch((err) => console.log(err));
  };
  const imgGetGender = (gender) => {
    if (imgGender.gender === gender) {
    } else {
      for (let i = 0; i < 10; i++) {
        getPicWithGender();
        if (imgGender.gender === gender) {
          break;
        }
      }
    }

    // const img =
    // && getPicWithGender()
    // console.log(img)
  };

  const handleClickUpdateUser = (user) => {
    setIsShowModal(true);
    setIsUserToUpdate(user);
    //setIsShowModal(user)
  };

  const handleClickOpenModal = () => {
    setIsShowModal(true);
  };

  useEffect(() => {
    getAllUsers();
    getPicWithGender();
  }, []);

  // efecto para confi loader
  useEffect(() => {
    setTimeout(() => {
      setLoaderConfi(false);
    }, 3000);
  }, []);

  //inicio de mi dark 
  const handleChangeDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("dark");
      setEventsDark(false);
      setEventIcono(<i className="bx bx-moon  text-slate-950 text-3xl"></i>);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", true);
      setEventsDark(true);
      setEventIcono(<i className="bx bx-sun  text-blue-500 text-3xl"></i>);
    }
  };

  const savedInfo = localStorage.getItem("dark");



  useEffect(() => {
    if (savedInfo) {
      document.documentElement.classList.add("dark");
      setEventIcono(<i className="bx bx-sun text-blue-500 text-3xl"></i>);
    } else {
      setEventIcono(<i className="bx bx-moon text-slate-950 text-3xl"></i>);
    }
  }, []);

  return (
    <main className="font-fira-roboto grid justify-center items-center min-h-screen p-8 bg-white  dark:bg-gray-900  ">
      <header className="flex flex-col sm:flex-row justify-between items-center pt-4">
        <div className="w-[200px] relative " >
            <div>
            <img className="absolute top-0 " src="/LogoUser1.png" alt="" />
            </div>
            <div>
              <img className=" animate-spin-slow"  src="/LogoUser2.png" alt="" />
            </div>
            
        </div>
        <div className="w-[250px] sm:w-[250px] pb-2">
          <img src="nombreLogo.png" alt="" />
        </div>
      <div>
      <button
        onClick={handleClickOpenModal}
        className="bg-[#555A88] p-2 rounded-md text-white"
      >
        <i class='bx bxs-user-plus pr-2'></i>
        Crear nuevo usuario
      </button>
      {/* inicio de mi dark */}
      <button
            onClick={handleChangeDarkMode}
            className=" text-white px-4 mb-4 hover:animate-wiggle my-3"
          >
            {eventIcono}
          </button>
      </div>
      
      </header>
      

      <ModalForm
        isShowModal={isShowModal}
        setIsUserToUpdate={setIsUserToUpdate}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        setIsShowModal={setIsShowModal}
        imgGetGender={imgGetGender}
        imgGender={imgGender}
      />

      <UserList
        users={users}
        deleteUsers={deleteUsers}
        handleClickUpdateUser={handleClickUpdateUser}
      />
      {loaderConfi &&  <Loader />}
    </main>
  );
}

export default App;
