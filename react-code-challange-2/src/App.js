
import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import "./index.css";
const App = () => {
  const [army, setArmy] = useState([]);
  const handleEnlist = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };
  const handleRelease = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };
  return (
    <div className="app-container">
      <BotCollection army={army} setArmy={setArmy} onEnlist={handleEnlist}  />
      <div className='army-container'>
      <YourBotArmy army={army} setArmy={setArmy} onRelease={handleRelease} />
      </div>
    </div>
  );
};
export default App;