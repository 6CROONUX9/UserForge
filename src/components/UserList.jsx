import UserCard from "./UserCard";

//me renderisa los usuarios
const UserList = ({users,deleteUsers,handleClickUpdateUser}) => {
  
  return (
    <section className="grid gap-8">
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