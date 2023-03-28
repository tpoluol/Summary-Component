import reaction from '../images/icon-reaction.svg';
import memory from '../images/icon-memory.svg';
import verbal from '../images/icon-verbal.svg';
import visual from '../images/icon-visual.svg';
import { useState } from 'react';
import datas from '../data.json';

function App() {
  const [items] = useState(datas);
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="w-[250px] h-[350px] bg-gradient-to-tl from-LightRoyalBlue to-LightSlateBlue rounded-3xl text-center">
        <p className="mt-5 text-LightLavender font-bold">Your Result</p>
        <div className="mt-5 flex justify-center text-center">
          <div className="flex-col w-[130px] h-[130px] bg-gradient-to-r from-VioletBlue to-PersianBlue rounded-full">
            <h3 className="text-white font-extrabold mt-7 text-5xl">76</h3>
            <p className="text-LightLavender text-sm"> of 100 </p>
          </div>
        </div>
        <p className="text-white mt-5 text-xl font-bold">Great</p>
        <p className="text-LightLavender mt-3 text-sm mx-7">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="p-7 flex-col w-[250px] h-[350px] rounded-3xl shadow-xl">
        <p>Summary</p>
        {items.map((itemsa, index) => {
          return <Item key={index} {...itemsa} />;
        })}
        <button className="bg-red-200">Continue</button>
      </div>
    </div>
  );
}

function Item({ category, score, icon }) {
  console.log(category);
  console.log(score);
  console.log(icon);
  return (
    <div className="flex justify-between">
      <img src={icon} />
      <p>{category}</p>
      <p>{score}</p>
      <p>/ 100</p>
    </div>
  );
}

export default App;
