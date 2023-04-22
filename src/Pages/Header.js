import React, {useState,useEffect} from "react";
import "./Header.css";
import Logo from "../Components/Logo";
import Category from "../Components/Category";
import SearchBar from "../Components/SearchBar";



const Header = ({SearchForText}) => {
  const [isMobileView, setIsMobileView] = useState(false);


  const onSearch = (searchTerm) => {
    SearchForText(searchTerm);
   
  };

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 1137);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      
      <div className="header-left">
        <Logo />
      </div>


      {!isMobileView ?
      (
      <><div className="header-center">
            <Category />

          </div><div className="header-right">
              <SearchBar onSearch={onSearch} />
            </div></>
      
      ):(

        <><div className="header-right">
            <SearchBar onSearch={onSearch} />
          </div><div className="header-center">
              <Category />
            </div></>
      )}
    
    </header>
  );
};

export default Header;
