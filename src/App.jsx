import "./App.css";
import BasicProps from "./assets/components/BasicProps";
import ChildrenProps from "./assets/components/ChildrenProps";
import ComplexProps from "./assets/components/ComplexProps";
import ThemeToggler, { useTheme } from "./assets/components/ThemeToggler";
import Navigation from "./assets/components/Navigation";
import RefProps from "./assets/components/RefProps";

function App() {
  // const isDark = true;

  const { isDark } = useTheme();
  return (
    <div
      className={`min-h-screen w-screen bg-gray-800 ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-purple-50"} py-10 px-5`}
    >
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          } `}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Learned</h1>
          <p>A comprehensive guide to understanding props in React</p>
          <p className="font-bold text-xs mt-5">
            Built with Bun + Vite + React + Tailwind CSS
          </p>
        </header>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="children" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="complex" className="scroll-mt-200">
            <ComplexProps />
          </div>

          <div id="ref" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="theme" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
