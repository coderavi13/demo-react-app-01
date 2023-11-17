import MyButton from "../MyButton/MyButton";

function Home() {
    function homeComponentFunction(){
console.log("Home component button cliocked");
    }
    return ( <>
   <MyButton 
      name= "Home Component Button"
      handleClick={homeComponentFunction} />
    </> );
}

export default Home;