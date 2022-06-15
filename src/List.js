import { useEffect, useState } from "react"
import { Create } from "./Create"
import { Read } from "./Read"
import { executeListing } from "./Storage"

export const List=()=>{

    const[see,setSee]=useState([])

    const[cview,setCview]=useState(false)
    const[rview,setRview]=useState(false)

    const[specific,setSpecific]=useState(0)

    useEffect(()=>{
        //affect()
        setSee(executeListing())
    },[]
        
    )

    return(
      
        <>
    <div className="container mt-3">
        {(cview)?
        <>
        <Create/>
        <button className="btn btn-outline-success" onClick={()=>{
          setCview(false)
          window.location.assign("/")
        }}>
           <i class="bi bi-back"></i>
                     

        </button>
        </>
        :
        (rview)?
        <>
        <Read which={specific}/>
        <button className="btn btn-outline-primary" onClick={()=>{
            setRview(false)
            window.location.assign("/")
        }}>
              <i class="bi bi-back"></i>
        </button>
        </>
        :
        <>
        <button className="btn btn-outline-success" onClick={()=>{
            setCview(true)
        }}>
            <i class="bi bi-bag-plus-fill"></i>

        </button>
        <div className="row justify-content-center"> 
            <table className="table table-bordered table-hover text-center col-lg-8 col-md-10 col-sm-12 shadow">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>weight</th>
                </tr>
            </thead>
            <tbody>
{see.map((ele,ind)=>(
    <tr>
        <td>{ele.brand}</td>
        <td>{ele.quantity}</td>
        <td>{ele.weight}</td>
        <td>{ele.price}</td>
        <td>
            <button className="btn btn-outline-info col-4" onClick={()=>{
                setRview(true)
                setSpecific(ele.brand)
            }}>
                <i class="bi bi-book-half"></i>

            </button>
        </td>
    </tr>
))

}
            </tbody>

        </table>
        </div>
        </>}
        </div>
        </>


    )
}