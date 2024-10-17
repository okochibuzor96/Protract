import {data} from './Data'
import settings from '../../Styles/my-settings.module.css'
import Modal from './Add_New_Question_Modal'
import Edit_Question_Modal from './Edit_Question_Modal';
import Delete_Question_Modal from './Delete_Question_Modal';
import { useQuery, useQueryClient } from 'react-query';
import CRUDfunc from '../../../hooks/useQuery/useProject';
import { LuPencil } from "react-icons/lu";
import { useState } from 'react';

// import Delete from './Delete_Modal'
// import Edit from './Edit_Modal';

function Attribute_Question() {

    const [Id, setId] = useState('')
    const [showInitialValue, setShowInitialValue] = useState(true)

    const queryClient = useQueryClient()

    const {data, isLoading} = useQuery('questions',()=> CRUDfunc.get('questions'))

    const {data:getDataById} = useQuery(['question-Edit',Id],()=> CRUDfunc.get(`questions/${Id}`),{
        initialData:()=>{
            const details = queryClient.getQueryData('questions')?.data.find((Value)=> Value.id === parseInt(Id))

            if(details){
                return {
                    data:details
                }
            }
        }
    })

    const handleEdit = (id)=>{
        setId(id)
        setShowInitialValue(!showInitialValue)
    }

    const handleDelete = (id)=>{
        setId(id)
    }

    if(isLoading){
        return <div>...Loading</div>
    }



  return (
    <div className={settings.attributeQuestion}>

        <header>

            <div>Attribute Questions</div>

            <Modal/>

        </header>

        <table>

            <thead>
                <tr>
                    <td>
                        Category
                    </td>
                </tr>

                <tr>
                    <td>
                       Question
                    </td>
                </tr>

                <tr>
                    <td>
                        Answer Type
                    </td>
                </tr>
            </thead>
            
<div>
                {
                    data?.data.map((value,i) =>(
                        <tbody key={i}>
                            <tr>
                                <td>
                                {value.category}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                {value.qstn}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                {value.answerType}
                                </td>
                            </tr>

                            <tr className={settings.addNewButton}>

                                <td>

                                    <Edit_Question_Modal
                                      Id={Id}
                                      data={getDataById}
                                      showInitialValue={showInitialValue}
                                      setShowInitialValue={setShowInitialValue}
                                    >

                                        <button 
                                            onClick={()=>handleEdit(value.id)}
                                           
                                        >

                                            <LuPencil size={16} />

                                        </button>

                                    </Edit_Question_Modal>

                                </td>

                            </tr>

                            {/* <Edit_Question_Modal/> */}

                            <Delete_Question_Modal/>

                        </tbody>
                    ))
                }

</div>

        </table>
    </div>
  )
}

export default Attribute_Question