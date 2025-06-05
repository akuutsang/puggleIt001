import React, { useState } from "react";
import "./App.css";
import FamilySupportCard from "./familySupportCard";
import EducationalAssistanceCard from "./educationalAssistanceCard";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full flex justify-center bg-gray-200  ">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <FamilySupportCard /> : <EducationalAssistanceCard />}
      </div>
    </div>
  );
}

export default App;
