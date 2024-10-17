// import {data} from './Attribute_CategoryData'
import settings from '../../Styles/my-settings.module.css'
import Modal from './Add_New_Modal'
import Delete from './Delete_Modal'
import Edit from './Edit_Modal';
import CRUDfunc from '../../../hooks/useQuery/useProject';
import { HiOutlineTrash } from "react-icons/hi2";
import { useMutation, useQuery,useQueryClient } from 'react-query';
import { LuPencil } from "react-icons/lu";
import { useState } from 'react';


function Attribute_Category() {

    const [Id, setId] = useState('')
    const [showInitialValue, setShowInitialValue] = useState(true)
    const queryclient = useQueryClient()

    const {data,isLoading} = useQuery('settings_category', ()=>CRUDfunc.get("category"))

//  const {mutate} = useMutation((id)=> CRUDfunc.delete(`category${id}`))

    const {data:getDataById} = useQuery(['settings-category-details',Id], ()=>CRUDfunc.get(`category/${Id}`),{
        initialData:()=>{
            const details = queryclient.getQueryData('settings_category')?.data.find((Value)=> Value.id === parseInt(Id))

            if(details){
                return {
                    data:details
                }
            }
        }
    })

    if(isLoading){
        return <div>...isLoading</div>
    }

    const handleEdit = (id)=>{
        setId(id)
        setShowInitialValue(!showInitialValue)
    }

    const handleDelete = (id)=>{
        setId(id)
    }

  return (
    <div>

        <header>

            <div>Attribute Categories</div>

            
            <Modal/>

        </header>

        <table>

            <thead>
                <tr>
                    <td>
                        Project Nature
                    </td>
                </tr>

                <tr>
                    <td>
                     Attribute Category
                    </td>
                </tr>

                <tr>
                    <td>
                     
                    </td>
                </tr>

                <tr>
                    <td>
                     
                    </td>
                </tr>
            </thead>

            <div>

                {
                    data?.data.map((value,i) =>(
                        <tbody key={i}>
                            <tr>
                                <td>
                                {value.projectNature}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                {value.attributeCategory}
                                </td>
                            </tr>

                            <tr>

                                <td>
                                    

                                    <Edit
                                    Id={Id}
                                    data={getDataById}
                                    setShowInitialValue={setShowInitialValue}
                                    showInitialValue={showInitialValue}
                                    >
                                        <button className={settings.attributeCategoryThirdRow} onClick={()=> handleEdit(value.id)}> <LuPencil size={16} /></button>

                                    </Edit>

                                </td>

                            </tr>

                            <tr>

                                <td>

                                <Delete
                                    Id={Id}
                                    data={getDataById}
                                >

                                    <button className={settings.deleteIcon} onClick={()=> handleDelete(value.id)}>
                                        <HiOutlineTrash size={16}/>
                                    </button>

                                </Delete>
                                    
                                </td>

                            </tr>

                        
                            
                        </tbody>
                    ))
                }
                
            </div>

        </table>
    </div>
  )
}

export default Attribute_Category