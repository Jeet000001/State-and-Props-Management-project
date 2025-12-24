// Card Component
const Card = ({ children, title, color = "blue" }) => {
  const colorClasses = {
    blue: "border-blue-500 from-blue-50 to-blue-100",
    green: "border-green-500 from-green-50 to-green-100",
    purple: "border-purple-500 from-purple-50 to-purple-100",
    red: "border-red-500 from-red-50 to-red-100",
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
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {title}
        </h2>
      )}

      <div className="text-gray-700 space-y-2 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};


//Container Component
const Container = ({ children, layout = "vertical" }) => {
  const layoutClasses = {
    vertical: "flex flex-col space-y-6",
    horizontal: "flex flex-wrap gap-6",
    grid: "grid grid-cols-1 sm:grid-cols-2 gap-6",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
};

  //  Main Component
const ChildrenProps = () => {
  return (
    <section className="p-10 bg-gray-50 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Children Props
      </h2>

      <p className="text-gray-600 max-w-2xl mb-8">
        This example demonstrates how children props allow flexible and reusable
        components with custom layouts and content.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-5 text-gray-700">
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
