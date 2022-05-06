import React from 'react';
import './PageContent.scss';

function PageContent({ children, className }) {

  return (
    <div className="page-content" id="page-content-id" ref={pageRef}>
        <h1>PageContent</h1>
      <div className={`container ${className}`}>{children}</div>
    </div>
  );
}

export default PageContent;