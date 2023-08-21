//
const UserCard = ({user,deleteUsers,handleClickUpdateUser}) => {
    
return (
    <article className=" bg-red-500 ">
        <ul>
            <li>{user.first_name} {user.last_name}</li>
            <li>Correo:{user.email}</li>
            <li>Cumpleaños:{user.birthday}</li>
        </ul>
        <div className="bg-blue-500  absolute">
        <button className="relative bottom-0 right-0"  onClick={()=>deleteUsers(user.id)}><i className='bx bxs-trash text-black text-2xl'></i></button>
        <button className="relative bottom-0 right-0"  onClick={()=>handleClickUpdateUser(user)}><i className='bx bxs-edit-alt text-black text-2xl' ></i></button>
        </div>
    </article>
)
}
export default UserCard