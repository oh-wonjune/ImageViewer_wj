import ImageViewer  from './ImageViewer/ImageViewer'
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ImageViewer/>
  </React.StrictMode>
);
export {ImageViewer}