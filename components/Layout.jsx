import { Header } from '.';

const Layout = ({ children }) => {
  return (
      <>
        <div className="flex">
        <Header className="fixed"/>
        {children}
        </div>
      </>
      )
};

export default Layout;
