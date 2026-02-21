import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./TransferLogsApp/Button";

const BUTTON_ID = 'ws-transfer-logs-extension-button';

function injectButtonOnPage() {
  const existingButton = document.getElementById(BUTTON_ID);
  if (existingButton) {
    return; // Button already exists, do not inject again
  }

  const button = document.createElement('div');
  button.id = BUTTON_ID;


  Object.assign(button.style, {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: '1000000',
    // backgroundColor: '#007bff',
    // color: '#fff',
    // border: '1px solid #115ec2',
    // borderRadius: '5px',
    // cursor: 'pointer',
  });

  // button.addEventListener('click', () => {
  //   alert('Button clicked! Implement log viewing functionality here.');
  // });

  const reactRootForInjectedButton = createRoot(button);
  reactRootForInjectedButton.render(<React.StrictMode><Button /></React.StrictMode>);

  document.body.appendChild(button);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectButtonOnPage);
} else {
  injectButtonOnPage();
}