function App() {
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
    </div>
  );
}

export default App;
