import { useState } from "react";

//
const UserCard = ({user,deleteUsers,handleClickUpdateUser}) => {
    
    


    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
    setModalVisible(!modalVisible);}


    return (    
        <div class="w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-md p-2 ">
        
            <div class="flex flex-col items-center p-4">

                <img class="w-24 h-24 mb-3 rounded-full shadow-lg " src={user.image_url} alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.first_name} {user.last_name}</h5>
                <section className="grid w-full border-b-2 border-[#E5E5E5]  border-t-2 py-4    ">
                    <span class="text-sm text-gray-500 dark:text-gray-400">Correo:</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>

                    <span class="text-sm text-gray-500 dark:text-gray-400">Cumpleaños:</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400"><i className='bx bxs-cake pr-2'></i>{user.birthday?user.birthday:"No se ingreso"}</span>
                </section>
                
                <div class="flex mt-4 space-x-3 md:mt-6 ">

                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"  onClick={toggleModal}><i className='bx bxs-trash text-white text-2xl'></i></button>
                
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"  onClick={()=>handleClickUpdateUser(user)}><i className='bx bxs-edit-alt text-[#D3D3D3] text-2xl' ></i></button>
                </div>
            </div>

            {modalVisible && (
            <div className="fixed  bg-black/50 top-0 left-0 right-0 z-50 block p-4 overflow-x-hidden overflow-y-auto    md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative top-[30%] w-full max-w-md max-h-full mx-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                    onClick={toggleModal}
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center   dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="popup-modal"
                >
                    <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    >
                    <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                    <svg
                    className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    >
                    <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Está seguro de que desea eliminar este Usuario?
                    </h3>
                    <button
                    onClick={() => {
                        deleteUsers(user.id)
                        setModalVisible(!modalVisible)
                    }}
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300    dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5    text-center mr-2"
                    >
                    si, estoy seguro
                    </button>
                    <button
                    onClick={toggleModal}
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none     focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5   hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500   dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                    No, cancela
                    </button>
                </div>
                </div>
        </div>
        </div>
    )}

        </div>)
    }





    export default UserCard