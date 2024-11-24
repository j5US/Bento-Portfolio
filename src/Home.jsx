const Home = () => {
  // w = 1228px
  // h = 737.60px

  //  2560 x 1440
  // New Element Width:
  // New Width = 1228 x 1.6667 ≈ 2046.67 px
  // New Width=1228×1.6667≈2046.67px
  // New Element Height:
  // New Height = 736 × 1.6667 ≈ 1226.67 px
  // New Height=  736×1.6667≈1226.67px
  
  return (
    <div className="w-[100%] min-h-screen home-container 
    flex justify-center items-center 

  ">
      <div className="border border-red-300 p-[15px] min-h-[736px] max-w-[1228px] w-[1228px]
      2xl:w-[1900px] 2xl:max-w-[1535px] 2xl:min-h-[900px] 2xl:max-w-[1400px]
      max-2xl:max-w-[1228px]
      max-lgr:min-h-screen 
    ">
      </div>
    </div>
  );
};

export default Home;
