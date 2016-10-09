const styles = {
  layout: {
    textAlign: 'center',
    border: 'solid 1px #ccc',
    width: '80%',
    margin: '0 auto',
    fontSize: '4rem',
    fontFamily: 'Helvetica',
    background: 'linear-gradient(135deg, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 37%, rgba(73,165,191,1) 100%)',
  },
  header: {
    margin: '1rem 5rem',
    color: '#fff',
    textShadow: '3px 3px 1px rgba(255,255,255,0.5)',
    ebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    backgroundClip: 'text',
  },
  button: {
    fontSize: '2rem',
    display: 'inline-block',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '15px',
    boxShadow: '0 5px #4642a3',
    outline: 'none',
    color: '#fff',
    padding: '15px 25px',
    width: '10rem',
    margin: '1rem'
  },
  record: {
    width: '100%',
    borderBottom: '5px soild #ccc',
  },
  panel: {
    margin: '0 8rem',
    border: '3px solid #ccc',
    padding: '0.5rem',
    fontSize: '2rem',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  list: {
    border: '2px solid #ccc',
    padding: '0.5rem',
    fontSize: '2.5rem',
    borderRadius: '10px',
    margin: '1rem 5rem',
    backgroundColor: '#fff',
    minHeight: '40px',
    overflow: 'scroll',
    height: '200px',
  },
};
export default styles;