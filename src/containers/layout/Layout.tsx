import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="viewport">
      <div className="viewport-top">
        <Header />
        <main className="site-main">{children}</main>
      </div>

      <div className="viewport-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
