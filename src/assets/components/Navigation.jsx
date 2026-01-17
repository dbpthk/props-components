const Navigation = () => {
  const isDark = true;
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "children", label: "Children Props", icon: "🧒" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "theme", label: "Theme Toggler", icon: "🎨" },
  ];
  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div className="flex flex-col justify-center items-center">
        <div>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 rounded-lg font-medium bg-blue-500 text-white m-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2 mt-2 cursor-pointer`}
            >
              <span className="mr-1">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
