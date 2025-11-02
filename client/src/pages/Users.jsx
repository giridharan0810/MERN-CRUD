import UserForm from "../components/UserForm";
import { useState ,useEffect } from "react";
import API from "../api/axios";
import UserTable from "../components/UserTable";

export default function Users() {
  const [users, setUser] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    const { data } = await API.get("/users");
    setUser(data);
  };
  const handleSubmit = async (user) => {
    try {
      if (editUser) {
        await API.put(`/users/${editUser._id}`, user);
        setEditUser(null);
      } else {
        await API.post("/users", user);
      }
      fetchUsers();
    } catch (error) {
      console.error('Error submitting user:', error);
    }
  };

  const handleDelete=async(id)=>
  {
    await API.delete(`/users/${id}`);
    fetchUsers();
  }
  useEffect(() => {
    fetchUsers();
  },[]);
  return (
    <div>
      CRUD
      <UserForm onSubmit={handleSubmit} selectedUser={editUser} />
      <UserTable onEdit={setEditUser} onDelete={handleDelete} users={users}/>
    </div>
  );
}
