const Notification = ({ message }) => {
  if (!message) return null
  return (
    <div style={{ color: 'green', padding: '10px', border: '1px solid green', margin: '10px 0'}}>
      {message}
    </div>
  )
}

export default Notification