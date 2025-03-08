import BookReader from "../books/BookReader";

const Header = () => {


  return (
    <div className="header-wrapper flex justify-between items-center p-4 pl-11 text-accent-color">
      <h1 className="text-[50px] tracking-wide">Fable</h1>
      <div className="text-2xl">
        Search library: <input type="text" className="w-[400px]"/>
      </div>
    </div>
  );
};

export default Header;
