const Header=()=>{

  return(
    <div className=" bg-[#1a1a1a] h-20 w-full m-0 rounded-md  px-6 flex justify-between items-center flex-row text-white">
       <div className="= w-52">
      <h2>Team <a href="https://github.com/Fer-Win/SHN1609" className="text-indigo-500 hover:text-zinc-500 hover:ease-in duration-150">Kakarot</a></h2>
                      </div>
    <p className= " text-gray-50 text-xl  rounded-md w-full my-5">Novelly</p>
     <div className="= w-96">
        By<span className="px-2 hover:text-zinc-500 hover:ease-in text-indigo-500"><a href="https://www.linkedin.com/in/ferwin-lopez/">Ferwin Lopez</a></span>&
        <span className="px-2 hover:text-zinc-500 hover:ease-in duration-150 text-indigo-500"><a href="https://www.linkedin.com/in/samthe030201/">Sam Peter</a></span>
      </div>
    </div>
   
  )
}

export default Header;