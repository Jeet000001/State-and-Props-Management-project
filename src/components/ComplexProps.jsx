const UserProfileCard = ({ user, theme, action }) => {
  return (
    <div
      className={`w-full max-w-md p-6 rounded-2xl shadow-lg ${theme.backgroundColor} ${theme.textColor}`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-full text-2xl ${theme.avaterBg}`}
        >
          {user.avater}
        </div>

        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm opacity-80">{user.email}</p>

          <div className="flex gap-2 mt-1">
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${theme.badgeBg} text-white`}
            >
              {user.role}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/60">
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-black/10"></div>

      {/* Stats */}
      {user.stats && (
        <div className="grid grid-cols-3 text-center mb-6">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key}>
              <div className="text-lg font-bold">{value}</div>
              <div className="text-xs uppercase opacity-70">{key}</div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button className={`flex-1 ${action.primary.className}`}>
          {action.primary.label}
        </button>
        <button className={`flex-1 ${action.secondary.className}`}>
          {action.secondary.label}
        </button>
      </div>
    </div>
  );
};

const ComplexProps = () => {
  const Users = [
    {
      user: {
        name: "Jeet Paul",
        email: "jeet@gmail.com",
        avater: "👨‍💻",
        role: "Developer",
        status: "Active",
        stats: {
          posts: 100,
          followers: 10000,
          following: 100,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-200 to-blue-200",
        textColor: "text-gray-800",
        avaterBg: "bg-purple-500",
        badgeBg: "bg-purple-500",
      },
      action: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Jeet's Profile"),
          className:
            "bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Messaging Jeet"),
          className:
            "bg-white/70 text-gray-800 py-2 rounded-lg hover:bg-white transition",
        },
      },
    },
    {
      user: {
        name: "Saheli Ghosh",
        email: "saheli@gmail.com",
        avater: "👧",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 1200,
          following: 300,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-200 to-emerald-200",
        textColor: "text-gray-800",
        avaterBg: "bg-green-500",
        badgeBg: "bg-green-500",
      },
      action: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Saheli's Profile"),
          className:
            "bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Messaging Saheli"),
          className:
            "bg-white/70 text-gray-800 py-2 rounded-lg hover:bg-white transition",
        },
      },
    },
  ];

  return (
    <div className="h-auto bg-gray-50 p-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-2">Complex/Nested Props</h2>
      <p className="mb-5">
        Complex props allow you to pass nested objects and functions, enabling
        sophisticated configaration and interactions.
      </p>
      <h3 className="text-xl font-semibold mb-6">
        User Profile Card (Nested User, Theme, and Actions) :{" "}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Users.map((userData, index) => (
          <UserProfileCard key={index} {...userData} />
        ))}
      </div>
    </div>
  );
};

export default ComplexProps;
