import React, { useEffect } from 'react';
// @ts-ignore
import FileViewer from 'react-file-viewer';

const fileUrl = 'https://www.gjtool.cn/pdfh5/git.pdf';

const ReactFileViewerPage = () => {
  return (
    <FileViewer
      fileType="pdf"
      filePath={fileUrl}
      errorComponent={<div>error</div>}
      onError={console.log}
    />
  );
};
ReactFileViewerPage.title = 'react-file-viewer';
export default ReactFileViewerPage;
