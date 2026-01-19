function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    red: "border-red-500 bg-red-50",
    green: "border-green-500 bg-green-50",
    yellow: "border-yellow-500 bg-yellow-50",
  };
  return (
    <div
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-600">{title}</h3>
      )}

      <div className="text-gray-700">{children}</div>
    </div>
  );
}
function Conatiner({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizental: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return <div className={layoutClasses[layout]}>{children}</div>;
}

export default function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-md shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Children Props</h2>
      <p className="text-gray-600">
        Children props in React allow you to pass components or elements as
        children to other components. This is useful for creating reusable
        components that can wrap or contain other elements.
      </p>
      <div>
        <div className="pt-5">
          <h3 className=" text-lg font-medium mb-5">
            Card Component with children
          </h3>
          <Conatiner layout="grid">
            <Card title="User Profile" color="blue">
              <p className="mb-2">
                <strong>Name:</strong> John Doe
              </p>
              <p className="mb-2">
                <strong>Email:</strong> john.doe@example.com
              </p>
              <p className="mb-2">
                <strong>Role:</strong> Developer
              </p>
            </Card>
            <Card title="Statistics" color="green">
              <p className="mb-2">
                <strong>Active Users:</strong> 120
              </p>
              <p className="mb-2">
                <strong>Total Projects:</strong> 45
              </p>
              <p className="mb-2">
                <strong>Server Uptime:</strong> 99.9%
              </p>
            </Card>

            <Card title="Quick Actions" color="yellow" className="mb-2">
              <div className="flex flex-col w-full gap-2">
                <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
                  Create New
                </button>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
                  View All
                </button>
              </div>
            </Card>
            <Card title="User Actions" color="yellow">
              <p className="mb-2">
                Upgrade to Pro to unlock more features and benefits.
              </p>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer">
                Upgrade to Pro
              </button>
            </Card>
          </Conatiner>
        </div>
      </div>
    </section>
  );
}
