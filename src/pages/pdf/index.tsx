import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from './index.less';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const fileUrl = 'https://www.gjtool.cn/pdfh5/git.pdf';

const IndexPage = () => {
  const [numPages, setNumPages] = useState(0);

  return (
    <>
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {new Array(numPages).fill(0).map((item, index) => {
          return (
            <Page width={document.body.clientWidth} pageNumber={index + 1}>
              <span className={styles.tip}>
                {index + 1}/{numPages}
              </span>
            </Page>
          );
        })}
      </Document>
    </>
  );
};
IndexPage.title = 'pdf';
export default IndexPage;
