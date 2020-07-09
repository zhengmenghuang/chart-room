import React from 'react';
import { history } from 'umi';

const IndexPage = () => {
  return (
    <div>
      <h1>Page index</h1>
      <button onClick={() => history.push('/test')}>Test</button>
    </div>
  );
};
IndexPage.title = 'umi3 demo';
export default IndexPage;
