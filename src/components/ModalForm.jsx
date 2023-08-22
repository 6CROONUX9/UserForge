import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { EMPTY_FORM_VALUES } from "../shared/constants";
import { validationEmailInput, validationNameInput, validationPasswordInput } from "../services/users";

// encargado de tener el modal del formulario para crear y actualizar
const ModalForm = ( {
    isShowModal,
    createUser,
    isUserToUpdate,
    updateUser,
    setIsShowModal,
    setIsUserToUpdate,
    imgGetGender,
    imgGender
}) => {

const {handleSubmit, register, reset, formState:{errors}} = useForm();
const [gender, setGender] = useState("")

// argumento de mi funcion handleSubmit - se ejecuta con el boton
const submit = (data) => {
    data.image_url=imgGender.picture.medium
    if(data.birthday === ""){
        data.birthday  = null
    }
    if(isUserToUpdate){
        updateUser(data, reset)
        imgGetGender(gender)
        
    }else{
        createUser(data, reset)
        imgGetGender(gender)
    }
    
    
}

// dispara el modal setIsShowModal = true se mostrara
const handleClickCloseModal = () => {
    setIsShowModal(false)
    reset(EMPTY_FORM_VALUES)
    setIsUserToUpdate(null)
}

const handleGenderOnChange = (e) => {
    console.log(e.target.value);
    setGender(e.target.value)
    

}


//escucha nuestro cambios en isUserToUpdate
useEffect(() => {
    if (isUserToUpdate) {
        reset(isUserToUpdate) 
            // {
            // email: isUserToUpdate.email,
            // password: isUserToUpdate.password,
            // first_name: isUserToUpdate.first_name,
            // last_name: isUserToUpdate.last_name,
            // birthday: isUserToUpdate.birthday,
            // })
    }

}, [isUserToUpdate])

return (
    <section className={`fixed bg-black/60 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-300 ${isShowModal ? "visible opacity-100 sclae-100" : "invisible opacity-0 scale-0"} z-10`}>

        
        <form 
            onSubmit={handleSubmit(submit)} 
            className="bg-gray-800  grid gap-4 p-2 rounded-md relative">

            <button 
                type="button"
                onClick={handleClickCloseModal} 
                className="font-bold absolute top-1 right-2"
                >
                    <i className='bx bx-x-circle text-red-500 text-2xl'  ></i>
            </button>

            <h2 className="text-center">{isUserToUpdate?"Editar Usuario" : "Crear Usuario"}</h2>

            <div className="flex gap-2  ">
                <label>
                    <input onChange={handleGenderOnChange} checked={gender==="male"}  type="radio" name="male" value="male"/> Masculino
                </label>

                <label>
                    <input onChange={handleGenderOnChange} checked={gender==="female"} type="radio" name="female" value="female"/> Femenino
                </label>
                
                {/* <input className="outline-none border-[1px] border-black p-1" id="image_url" type="radio" /> */}
                
            </div>

            <div className="grid">
                <label htmlFor="email">Correo</label>
                <input 
                    className="outline-none border-[1px] border-black p-1 bg-gray-400" 
                    id="email" 
                    type="text" 
                    {...register("email", validationEmailInput)} /> {/* register me enlaza un campo */}
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}  {/* aca podemos mostrar nuestros mensajes de modals */} 
            </div>

            <div className="grid">
                <label htmlFor="password">Contraseña</label>
                <input 
                    className="outline-none border-[1px] border-black p-1 bg-gray-400" 
                    id="password" 
                    type="text" 
                    {...register("password", validationPasswordInput)} />
                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>} 
            </div>

            <div className="grid">
                <label htmlFor="first_name">Nombre</label>
                <input 
                    className="outline-none border-[1px] border-black p-1 bg-gray-400" 
                    id="first_name" 
                    type="text" 
                    {...register("first_name", validationNameInput)} />
                {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name.message}</p>}  
            </div>

            <div className="grid">
                <label htmlFor="last_name">Apellido</label>
                <input 
                    className="outline-none border-[1px] border-black p-1 bg-gray-400" 
                    id="last_name" 
                    type="text" 
                    {...register("last_name", validationNameInput)} />
                {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name.message}</p>}
            </div>

            <div className="grid">
                <label htmlFor="birthday">Cumpleaños</label>
                <input 
                    className="outline-none border-[1px] border-black p-1 bg-gray-400" 
                    id="birthday" 
                    type="date" 
                    {...register("birthday")} />
                {errors.birthday && <p className="text-red-500 text-xs">{errors.birthday.message}</p>}
            </div>

            

            <button className="bg-black rounded-md text-white">{isUserToUpdate?"Guardar Cambios":"Crear Usuarios"}</button>

        </form>
    </section>
)
}
export default ModalForm