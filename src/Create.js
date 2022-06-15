import { useState } from "react"
import { executeCreating } from "./Storage"


export const Create=()=>{

    const[mydata,setMydata]=useState({
       "brand":"",
       "quantity":0,
       "weight":0,
       "price":0,
    })

    const onTrack=(sil)=>{
        const{name,value}=sil.target

        setMydata((remain)=>{
            return{
                ...remain,
                [name]:value
            }

        })
    }

    const verify=()=>{
        alert(JSON.stringify(mydata))
        executeCreating(mydata)
    }

    return(
        <>
        <h2>Create component</h2>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow">
                    <input type="text" onChange={onTrack} value={mydata.brand}   name="brand" className="form-control" placeholder="brandname"/>
                    <input type="text" onChange={onTrack} value={mydata.quantity} name="quantity" className="form-control" placeholder="qunatity"/>
                    <input type="text" onChange={onTrack} value={mydata.weight}  name="weight" className="form-control" placeholder="weight"/>
                    <input type="text" onChange={onTrack} value={mydata.price}   name="price" className="form-control" placeholder="price"/>
                     <div className="row justify-content-center mt-3">
                      <button className="btn btn-outline-success col-1" onClick={verify}>
                      <i class="bi bi-cloud-download-fill"></i>
                      </button>
                     </div>
                </div>

            </div>

        </div>
        </>
    )
}