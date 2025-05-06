import { JSX } from "solid-js";
import Navbar from "./components/Navbar";



export const Layout = (props:any) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};
