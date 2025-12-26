import { useTheme } from "./ThemeToggler";

/* ---------------- Card Component ---------------- */
const Card = ({ children, title, color = "blue" }) => {
  const { isDark } = useTheme();

  const colorClasses = {
    blue: isDark
      ? "border-blue-400 from-blue-900/40 to-blue-800/40"
      : "border-blue-500 from-blue-50 to-blue-100",

    green: isDark
      ? "border-green-400 from-green-900/40 to-green-800/40"
      : "border-green-500 from-green-50 to-green-100",

    purple: isDark
      ? "border-purple-400 from-purple-900/40 to-purple-800/40"
      : "border-purple-500 from-purple-50 to-purple-100",

    red: isDark
      ? "border-red-400 from-red-900/40 to-red-800/40"
      : "border-red-500 from-red-50 to-red-100",
  };

  return (
    <div
      className={`
        bg-linear-to-br ${colorClasses[color]}
        border-l-4 p-6 rounded-2xl
        shadow-md hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      `}
    >
      {title && (
        <h2
          className={`text-xl font-semibold mb-4 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h2>
      )}

      <div
        className={`space-y-2 text-sm leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

/* ---------------- Container Component ---------------- */
const Container = ({ children, layout = "vertical" }) => {
  const layoutClasses = {
    vertical: "flex flex-col space-y-6",
    horizontal: "flex flex-wrap gap-6",
    grid: "grid grid-cols-1 sm:grid-cols-2 gap-6",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
};

/* ---------------- Main Component ---------------- */
const ChildrenProps = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`p-10 rounded-2xl shadow-xl transition-colors duration-300 ${
        isDark ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <h2
        className={`text-3xl font-bold mb-3 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        Children Props
      </h2>

      <p
        className={`max-w-2xl mb-8 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        This example demonstrates how children props allow flexible and reusable
        components with custom layouts and content.
      </p>

      <div>
        <h3
          className={`text-xl font-semibold mb-5 ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Card Component with Children
        </h3>

        <Container layout="grid">
          <Card title="User Profile" color="blue">
            <p>
              <strong>Name:</strong> Jeet Paul
            </p>
            <p>
              <strong>Email:</strong> jeet@gmail.com
            </p>
            <p>
              <strong>Role:</strong> Frontend Developer
            </p>
          </Card>

          <Card title="User Profile" color="green">
            <p>
              <strong>Name:</strong> Saheli Paul
            </p>
            <p>
              <strong>Email:</strong> saheli@gmail.com
            </p>
            <p>
              <strong>Role:</strong> Government Job
            </p>
          </Card>
        </Container>
      </div>
    </section>
  );
};

export default ChildrenProps;
