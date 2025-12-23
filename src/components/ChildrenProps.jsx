const Card = ({ children, title, color = "blue" }) => {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    green: "border-green-500 bg-green-500",
    purple: "border-purple-500 bg-purple-500",
    red: "border-red-500 bg-red-500",
  };
  return (
    <div
      className={`${colorClasses[color]} border-l-4 p-6 rounded-lg shadow-md`}
    >
      {title && (
        <h2 className="text-xl font-bold mb-3 text-gray-600">{title}</h2>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

const Container = ({ children, layout = "vertical" }) => {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row  flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return <div className={`${layoutClasses[layout]}`}>{children}</div>;
};

const ChildrenProps = () => {
  return <div>ChildrenProps</div>;
};

export default ChildrenProps;
