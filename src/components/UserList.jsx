import UserCard from "./UserCard";

//me renderisa los usuarios
const UserList = ({users,deleteUsers,handleClickUpdateUser,modalVisible,setModalVisible}) => {
  
  return (
    <section className="flex flex-wrap gap-6 justify-center items-center max-w-[1200px] mt-10">
        {
            users.map((user) => 
                < UserCard 
                  key={user.id}
                  user={user}
                  deleteUsers={deleteUsers}
                  handleClickUpdateUser={handleClickUpdateUser}
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  />)
        }
    </section>
  )
}
export default UserList