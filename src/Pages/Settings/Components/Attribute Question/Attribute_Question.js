import {data} from './Data'
import settings from '../../Styles/my-settings.module.css'
import Modal from './Add_New_Question_Modal'
import Edit_Question_Modal from './Edit_Question_Modal';
import Delete_Question_Modal from './Delete_Question_Modal';
import { useQuery, useQueryClient } from 'react-query';
import CRUDfunc from '../../../hooks/useQuery/useProject';
import { LuPencil } from "react-icons/lu";
import { useContext, useState,useEffect } from 'react';
import { HiOutlineTrash } from "react-icons/hi2";
import DataContext from '../../../Context API/Create_Context';
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import contractor from '../../../../styles/my-contractors.module.css'

// import Delete from './Delete_Modal'
// import Edit from './Edit_Modal';

function Attribute_Question({setPage, page}) {

    const {questions, setQuestions} = useContext(DataContext)

    const [Id, setId] = useState('')
    const [showInitialValue, setShowInitialValue] = useState(true)

    // const queryClient = useQueryClient()

    // const {data, isLoading} = useQuery('questions',()=> CRUDfunc.get('questions'))

    // const {data:getDataById} = useQuery(['question-Edit',Id],()=> CRUDfunc.get(`questions/${Id}`),{
    //     initialData:()=>{
    //         const details = queryClient.getQueryData('questions')?.data.find((Value)=> Value.id === parseInt(Id))

    //         if(details){
    //             return {
    //                 data:details
    //             }
    //         }
    //     }
    // })

    const handleEdit = (id)=>{
        setId(id)
        setShowInitialValue(!showInitialValue)
    }

    const handleDelete = (id)=>{
        setId(id)
    }

    useEffect(()=>{
        localStorage.removeItem("questions")
      },[])

    // if(!questions){
    //     return <div>...Loading</div>
    // }



  return (
    <div className={settings.attributeQuestion}>

        <header>

            <div>Attribute Questions</div>

            <Modal>
                Add New
            </Modal>

        </header>

        <table>

            <thead>
                <tr>
                    <td>
                        Category
                    </td>
                </tr>

                <tr className={settings.trmobile}>
                    <td>
                       Question
                    </td>
                </tr>

                <tr className={settings.trmobile}>
                    <td>
                        Answer Type
                    </td>
                </tr>
            </thead>

            {
                questions?(

                    <div className={settings.scroll}>
                        {
                            questions.map((value,i) =>(
                                <tbody key={i}>
                                    <tr>
                                        <td>
                                        {value.category}
                                        </td>
                                    </tr>

                                    <tr className={settings.trmobile}>
                                        <td>
                                        {value.qstn}
                                        </td>
                                    </tr>

                                    <tr className={settings.trmobile}>
                                        <td>
                                        {value.answerType}
                                        </td>
                                    </tr>

                                    <tr className={settings.editButton}>

                                        <td>

                                            <Edit_Question_Modal
                                            Id={Id}
                                            //   data={getDataById}
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

                                    <tr>

                                        <td>

                                        <Delete_Question_Modal
                                            Id={Id}
                                            // data={getDataById}
                                        >

                                            <button className={settings.deleteIcon} onClick={()=> handleDelete(value.id)}>
                                                <HiOutlineTrash size={16}/>
                                            </button>

                                        </Delete_Question_Modal>
                                            
                                        </td>

                                    </tr>


                                </tbody>
                            ))
                        }

                    </div>
                ):
                (
                    <div className={contractor.noDataWrapper}>

                        <h2>Oops no data found!!!</h2>

                        <div> 
                            click on the Add New button at the top right to add data
                        </div>

                    </div>
                )

            }
                        

        </table>

        

        
    </div>
  )
}

export default Attribute_Question