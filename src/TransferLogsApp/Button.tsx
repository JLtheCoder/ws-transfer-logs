export const Button = () => {
  const onClick = () => {
    alert('Button clicked! Implement log viewing functionality here.');
  }

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
};