import { useTheme } from "./ThemeToggler";

const Navigation = () => {
  const { isDark } = useTheme();

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "children", label: "Children Props", icon: "🧒" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "theme", label: "Theme Toggler", icon: "🎨" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex justify-center p-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className={`px-4 py-2 rounded-lg font-medium m-2 transition
              ${
                isDark
                  ? "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500"
                  : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300"
              }
              focus:outline-none focus:ring-2
            `}
          >
            <span className="mr-1">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
