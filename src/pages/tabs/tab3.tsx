import React, { useEffect } from 'react';
// @ts-ignore
import Pdfh5 from 'pdfh5';
import 'pdfh5/css/pdfh5.css';

// https://github.com/gjTool/pdfh5
const fileUrl = 'https://www.gjtool.cn/pdfh5/git.pdf';

const IndexPage = () => {
  useEffect(() => {
    const pdfh5 = new Pdfh5('#demo', {
      pdfurl: fileUrl,
      lazy: true,
    });

    pdfh5.on('complete', (status: string, msg: string, time: string) => {
      console.log(status, msg, time);
    });
  }, []);

  return <div id="demo" />;
};
IndexPage.title = 'tab3';
export default IndexPage;
