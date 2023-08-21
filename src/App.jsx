import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalForm from './components/ModalForm';
import axios from 'axios';
import { EMPTY_FORM_VALUES } from './shared/constants';
import UserList from './components/UserList';

//const BASE_URL = "https://users-crud.academlo.tech/swagger/?format=openapi";
const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  
  const [isShowModal, setIsShowModal] = useState(false) // is -> esta mostrando el modal si ò no
  const [users, setUsers] = useState([])
  const [isUserToUpdate, setIsUserToUpdate] = useState(null) // permite saber si hay informacion o no para editar
  const [imgGender, setImgGender] = useState(null)
  

  const getAllUsers =() => {
    axios
      .get(BASE_URL + "users/")
      .then(({data}) => setUsers(data)) //
      .catch((err) => console.log(err))
  }
  
  const getPicWithGender = () => {
    const URL = "https://randomuser.me/api/"
    axios
      .get(URL)
      .then(({data}) => console.log(data.results[0]))
      .catch((err) => console.log(err))

  }

  // funcion encargada de crear mis usuarios
  const createUser =(newUser,reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => 
        {
          getAllUsers()               //llamado de usuarios
          setIsShowModal(false)       //cierra mi modal
          reset(EMPTY_FORM_VALUES)    //vacia el formulario
        })
      .catch((err) => console.log(err))
  }

  // funcion encargada de eliminar mis usuarios
  const deleteUsers =(idUser)=> {
    axios
      .delete(BASE_URL + `users/${idUser}/`)
      .then(() => getAllUsers()  )
      .catch((err) => console.log(err))
  }


  const updateUser = (userUpdated, reset)=> {
    axios
      .patch(BASE_URL + `users/${isUserToUpdate.id}/`, userUpdated)
      .then(() => {
        getAllUsers()           
        setIsShowModal(false)   
        reset(EMPTY_FORM_VALUES)
        setIsUserToUpdate(null)
      })
      .catch((err) => console.log(err));
  }

  // const imgGetGender = (gender) => {

  // }


  const handleClickUpdateUser = (user) => {
    setIsShowModal(true)
    setIsUserToUpdate(user)
    //setIsShowModal(user)
  }

  const handleClickOpenModal = () => {
    setIsShowModal(true)
  }

  useEffect(() => {
    getAllUsers()
    getPicWithGender()
  }, [])


  return (
    <>
    <button onClick={handleClickOpenModal} className='bg-black p-2 rounded-md text-white'>Crear nuevo usuario</button>
      
    < ModalForm 
          isShowModal={isShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
          createUser={createUser}
          isUserToUpdate={isUserToUpdate}
          updateUser={updateUser}
          setIsShowModal={setIsShowModal}
          setImgGender ={setImgGender }/>

    < UserList 
          users={users}
          deleteUsers={deleteUsers}
          handleClickUpdateUser={handleClickUpdateUser}  />
    </>
  )
}

export default App
