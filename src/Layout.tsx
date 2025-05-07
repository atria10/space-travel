import Navbar from "./components/Navbar";

export const Layout = (props: any) => {
  return (
    <div id="layout">
      <Navbar />
      {props.children}
    </div>
  );
};
