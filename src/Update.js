import { useEffect, useState } from "react"
import { executeReading, executeUpdating } from "./Storage"

export const Update=(sillu)=>{

    const[one,setOne]=useState({})

    useEffect(()=>{
        setOne(executeReading(sillu.give))
    },[])

    const onTrack=(sil)=>{
        const{name,value}=sil.target

        setOne((remain)=>{
            return{
                ...remain,

                [name]:value
            }

        })
    }
      const change=()=>{
        executeUpdating(one)
        alert (one.brand+"has updated")
      }
    return(
        <>
        <h2>Update component</h2>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow">
                    <input type="text" onChange={onTrack} value={one.brand} readOnly="true" name="brand" className="form-control" placeholder="brandname"/>
                    <input type="text" onChange={onTrack} value={one.quantity} name="quantity" className="form-control" placeholder="qunatity"/>
                    <input type="text" onChange={onTrack} value={one.weight}  name="weight" className="form-control" placeholder="weight"/>
                    <input type="text" onChange={onTrack} value={one.price}   name="price" className="form-control" placeholder="price"/>
                     <div className="row justify-content-center mt-3">
                      <button className="btn btn-outline-success col-1" onClick={change}>
                      <i class="bi bi-cloud-download-fill"></i>
                      </button>
                     </div>
                </div>

            </div>

        </div>
        </>
    )
}