import newEvaluation2 from '../../Styles/my-new_evaluation_2.module.css'

function Field_Error_Component(prop) {
  return (
    <div className={newEvaluation2.fielderror}>*{prop.children}!</div>
  )
}

export default Field_Error_Component