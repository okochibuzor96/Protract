
const btnStyles = {
  
  backgroundColor: '#31609a',
  color: '#ffffff', 
  fontSize: '12px',
  fontWeight: '700', 
  width: '56px',
  borderRadius: '8px',
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '28px',
  border: '#31609A',

}

export function ViewButtons({click}) {

    return(
       
      <button onClick={click} style={btnStyles}>
        View
      </button>
       
    )
}

