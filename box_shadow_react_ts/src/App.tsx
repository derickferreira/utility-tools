import  { useState } from "react";
// components
import Controls from "./components/Controls";
import GeneratedRule from "./components/GeneratedRule";
import Preview from "./components/Preview";

function App() {
  const [boxShadow, setBoxShadow] = useState({
    horizontal: 5,
    vertical: 5,
    blur: 5,
    spread: 5,
    color: "#00000",
    opacity: 0.05,
    inset: false,
  });

  return (
    <div>
      <p className="text-lg font-sans">
        “Tailwind CSS is the only framework that I've seen scale on large teams.
        Its easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>
    </div>
  );
}

export default App;
