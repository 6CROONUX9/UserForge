import { useEffect, useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import axios from "axios";
import { EMPTY_FORM_VALUES } from "./shared/constants";
import UserList from "./components/UserList";
import Loader from "./components/Loader";
import ModalDeleteUser from "./components/ModalDeleteUser";

//const BASE_URL = "https://users-crud.academlo.tech/swagger/?format=openapi";
const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [isShowModal, setIsShowModal] = useState(false); // is -> esta mostrando el modal si ò no
  const [users, setUsers] = useState([]);
  const [isUserToUpdate, setIsUserToUpdate] = useState(null); // permite saber si hay informacion o no para editar
  const [imgGender, setImgGender] = useState(null); // imgGender guarda informacion como el genero y la imagen

  //Loader
  const [loaderConfi, setLoaderConfi] = useState(true);

  //Dark
  const [eventsDark, setEventsDark] = useState(false);
  const [eventIcono, setEventIcono] = useState(null);

  //Delete User
  const [modalVisible, setModalVisible] = useState(null);

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

  const getPicWithGender = (gender) => {
    const URL = `https://randomuser.me/api/?gender=${gender}`;
    axios
      .get(URL)
      .then(({ data }) => setImgGender(data.results[0]))
      .catch((err) => console.log(err));
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
  }, []);

  // efecto para confi loader
  useEffect(() => {
    setTimeout(() => {
      setLoaderConfi(false);
    }, 2000);
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
    <main className="relative font-fira-roboto  justify-center items-center min-h-screen p-8 bg-white  dark:bg-gray-900  ">
      <header className="flex flex-col sm:flex-row justify-between items-center pt-4">
        <div className="w-[200px] relative ">
          <div>
            <img className="absolute top-0 " src="/LogoUser1.png" alt="" />
          </div>
          <div>
            <img className=" animate-spin-slow" src="/LogoUser2.png" alt="" />
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
            <i className="bx bxs-user-plus pr-2"></i>
            Crear nuevo usuario
          </button>
          {/* inicio de mi dark */}
          <button
            onClick={handleChangeDarkMode}
            className="absolute top-3 right-3 text-white px-4 mb-4 hover:animate-wiggle my-3"
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
        getPicWithGender={getPicWithGender}
        imgGender={imgGender}
      />

      <UserList
        users={users}
        deleteUsers={deleteUsers}
        handleClickUpdateUser={handleClickUpdateUser}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* disparador del modal */}
      {modalVisible && (
        <ModalDeleteUser
          deleteUsers={deleteUsers}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
      {/* disparador del loader */}
      {loaderConfi && <Loader />}

      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 my-4 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://userforge-2023.netlify.app/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="/UserForgeLogo.png"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                USER FORGE
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://github.com/6CROONUX9"
                  className="mr-4  md:mr-6 "
                >
                  ir al repositorio{" "}
                  <span className="hover:underline">Danilo F</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/6CROONUX9/UserForge.git"
                  className="mr-2 hover:underline md:mr-2"
                >
                  <i className="bx bxl-github hover:scale-110  text-2xl"></i>
                </a>{" "}
                {/* tarea implementar hover:animate-wiggle  */}
                <a
                  href="https://userforge-2023.netlify.app"
                  className="hover:underline  mr-4"
                >
                  <i className="bx bxl-netlify hover:scale-110 text-2xl "></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MMiigguueellGS"
                  className="mr-4  md:mr-6 "
                >
                  ir al repositorio{" "}
                  <span className="hover:underline">Miguel G</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/6CROONUX9/UserForge.git"
                  className="mr-2 hover:underline md:mr-2"
                >
                  <i className="bx bxl-github hover:scale-110  text-2xl"></i>
                </a>
                <a
                  href="https://userforge-2023.netlify.app"
                  className="hover:underline"
                >
                  <i className="bx bxl-netlify hover:scale-110 text-2xl "></i>
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://userforge-2023.netlify.app/"
              className="hover:underline"
            >
              UserForge™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}

export default App;
