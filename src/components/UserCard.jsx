import { useState } from "react";

//
const UserCard = ({user,deleteUsers,handleClickUpdateUser,modalVisible,setModalVisible}) => {
    
    



    

    return (    
        <div className="w-[270px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-md p-2 hover:scale-110 ">
        
            <div className="flex flex-col items-center p-4">

                <img className="w-24 h-24 mb-3 rounded-full shadow-lg " src={user.image_url} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.first_name} {user.last_name}</h5>
                <section className="grid w-full border-b-2 border-[#E5E5E5]  border-t-2 py-4    ">
                    <span className="text-sm text-black ">Correo:</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>

                    <span className="text-sm text-black">Cumpleaños:</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400"><i className='bx bxs-cake pr-2'></i>{user.birthday?user.birthday:"No se ingreso"}</span>
                </section>
                
                <div className="flex mt-4 space-x-3 md:mt-6 ">
                    
                    <button  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={()=>setModalVisible(user)}><i className='bx bxs-trash text-white text-2xl'></i></button>
                
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"  onClick={()=>handleClickUpdateUser(user)}><i className='bx bxs-edit-alt text-[#D3D3D3] text-2xl' ></i></button>
                </div>
            </div>

            

        </div>)
    }





    export default UserCard