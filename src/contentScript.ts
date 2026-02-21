const BUTTON_ID = 'ws-transfer-logs-extension-button';

function injectButtonOnPage() {
  const existingButton = document.getElementById(BUTTON_ID);
  if (existingButton) {
    return; // Button already exists, do not inject again
  }

  const button = document.createElement('button');
  button.id = BUTTON_ID;
  button.textContent = 'View Logs on Existing Transfers';


  Object.assign(button.style, {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: '1000000',
    backgroundColor: '#007bff',
    color: '#fff',
    border: '1px solid #115ec2',
    borderRadius: '5px',
    cursor: 'pointer',
  });

  button.addEventListener('click', () => {
    alert('Button clicked! Implement log viewing functionality here.');
  });

  document.body.appendChild(button);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectButtonOnPage);
} else {
  injectButtonOnPage();
}