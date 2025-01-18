export default function UserProfile({ user }) {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}
