export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">User List</h2>

      <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Age</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">{u.name}</td>
                <td className="py-3 px-4">{u.age}</td>
                <td className="py-3 px-4">{u.phone}</td>
                <td className="py-3 px-4">{u.email}</td>
                <td className="py-3 px-4 flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(u)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(u._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="text-center text-gray-500 py-6">No users found</p>
        )}
      </div>
    </div>
  );
}
