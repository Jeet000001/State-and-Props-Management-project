import { useTheme } from "./ThemeToggler";

/* ---------------- User Profile Card ---------------- */
const UserProfileCard = ({ user, theme, action }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`w-full max-w-md p-6 rounded-2xl shadow-xl transition-all duration-300
        ${
          isDark
            ? theme.darkBackgroundColor
            : theme.backgroundColor
        }
        ${isDark ? "text-gray-200" : theme.textColor}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-full text-2xl
            ${isDark ? theme.darkAvatarBg : theme.avatarBg}`}
        >
          {user.avatar}
        </div>

        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm opacity-80">{user.email}</p>

          <div className="flex gap-2 mt-1">
            <span
              className={`text-xs px-2 py-0.5 rounded-full text-white
                ${isDark ? theme.darkBadgeBg : theme.badgeBg}`}
            >
              {user.role}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full
                ${
                  isDark
                    ? "bg-gray-700 text-gray-200"
                    : "bg-white/70 text-gray-800"
                }`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`my-5 h-px ${isDark ? "bg-white/10" : "bg-black/10"}`}
      ></div>

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
        <button
          onClick={action.primary.onClick}
          className={`flex-1 ${action.primary.className}`}
        >
          {action.primary.label}
        </button>

        <button
          onClick={action.secondary.onClick}
          className={`flex-1 ${action.secondary.className}`}
        >
          {action.secondary.label}
        </button>
      </div>
    </div>
  );
};

/* ---------------- Main Component ---------------- */
const ComplexProps = () => {
  const { isDark } = useTheme();

  const Users = [
    {
      user: {
        name: "Jeet Paul",
        email: "jeet@gmail.com",
        avatar: "👨‍💻",
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
        darkBackgroundColor:
          "bg-gradient-to-br from-purple-900/60 to-blue-900/60",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-500",
        darkAvatarBg: "bg-purple-700",
        badgeBg: "bg-purple-500",
        darkBadgeBg: "bg-purple-700",
      },
      action: {
        primary: {
          label: "View Profile",
          onClick: () => alert("Viewing Jeet's Profile"),
          className:
            "bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition",
        },
        secondary: {
          label: "Message",
          onClick: () => alert("Messaging Jeet"),
          className:
            "bg-white/70 text-gray-800 py-2 rounded-lg hover:bg-white transition",
        },
      },
    },
    {
      user: {
        name: "Saheli Ghosh",
        email: "saheli@gmail.com",
        avatar: "👧",
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
        darkBackgroundColor:
          "bg-gradient-to-br from-green-900/60 to-emerald-900/60",
        textColor: "text-gray-800",
        avatarBg: "bg-green-500",
        darkAvatarBg: "bg-green-700",
        badgeBg: "bg-green-500",
        darkBadgeBg: "bg-green-700",
      },
      action: {
        primary: {
          label: "View Profile",
          onClick: () => alert("Viewing Saheli's Profile"),
          className:
            "bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition",
        },
        secondary: {
          label: "Message",
          onClick: () => alert("Messaging Saheli"),
          className:
            "bg-white/70 text-gray-800 py-2 rounded-lg hover:bg-white transition",
        },
      },
    },
  ];

  return (
    <section
      className={`p-10 rounded-2xl transition-colors duration-300 ${
        isDark ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-2 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        Complex / Nested Props
      </h2>

      <p
        className={`mb-5 max-w-3xl ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Complex props allow you to pass nested objects and functions, enabling
        sophisticated configuration and interactions.
      </p>

      <h3
        className={`text-xl font-semibold mb-8 ${
          isDark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        User Profile Card (Nested User, Theme & Actions)
      </h3>

      <div className="grid grid-cols-1 md:flex justify-center md:gap-20 gap-8">
        {Users.map((userData, index) => (
          <UserProfileCard key={index} {...userData} />
        ))}
      </div>
    </section>
  );
};

export default ComplexProps;
