import React, { useEffect, useState } from "react";

export default function UserForm({ selectedUser, onSubmit }) {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ name: "", phone: "", email: "", age: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        {selectedUser ? "Update User" : "Add New User"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="number"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Enter Phone Number"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          placeholder="Enter Age"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className={`${
            selectedUser
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white font-semibold py-2 rounded-lg transition-all`}
        >
          {selectedUser ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
}
