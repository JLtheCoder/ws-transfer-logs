import { LOCALHOST, WS_HOME_URL } from "./constants";

export const Button = () => {
  const onClick = () => {
    alert('Button clicked! Implement log viewing functionality here.');
  };

  if (window.location.hostname === LOCALHOST || window.location.href === WS_HOME_URL) {
    return (
      <button
        onClick={onClick}
        style={{
          position: 'fixed',
          top: '60px',
          left: '20px',
          zIndex: '1000000',
          backgroundColor: '#007bff',
          color: '#fff',
          border: '1px solid #115ec2',
          borderRadius: '5px',
          cursor: 'pointer',
          padding: '10px 10px',
        }}
      >View Transfer Logs</button>);
  }

  // Do not render the button if we're not on the Wealthsimple home page or localhost (for development)
  return null;
};