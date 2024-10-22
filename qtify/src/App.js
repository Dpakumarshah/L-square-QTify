import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <Navbar searchData={[...topAlbum, newAlbum]}>
        <Logo />
        <Search placeholder={"Search a album of your choice"} />
        <Button
          text="Give Feedback"
          onClick={() => alert("Feedback button clicked!")}
        />
      </Navbar>
      <Outlet context={{ data: { topAlbum, newAlbum, genres, songs } }} />
    </>
  );
}

export default App;