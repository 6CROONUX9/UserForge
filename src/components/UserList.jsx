import UserCard from "./UserCard";

//me renderisa los usuarios
const UserList = ({users,deleteUsers,handleClickUpdateUser}) => {
  
  return (
    <section className="flex flex-wrap gap-6 justify-center items-center max-w-[1200px] mt-10">
        {
            users.map((user) => 
                < UserCard 
                  key={user.id}
                  user={user}
                  deleteUsers={deleteUsers}
                  handleClickUpdateUser={handleClickUpdateUser}
                  />)
        }
    </section>
  )
}
export default UserList