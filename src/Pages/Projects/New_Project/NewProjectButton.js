

const style= {
  backgroundColor:'#31609A', 
  fontWeight: 600,
  color: '#FFFFFF',  
  fontSize: '12px', 
  width: '95px', 
  height: '34px',
  border:'none',
  borderRadius:'8px'
}

function NewProjectButton({handleNavigate}) {

  return (
    <button onClick={handleNavigate} style={style}>
        New Project
    </button>
  )
}

export default NewProjectButton