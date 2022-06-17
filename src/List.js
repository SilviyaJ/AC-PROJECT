import { useEffect, useState } from "react"
import { Create } from "./Create"
import { Read } from "./Read"
import { executeDeleting, executeListing } from "./Storage"
import { Update } from "./Update"

export const List=()=>{

    const[see,setSee]=useState([])

    const[cview,setCview]=useState(false)
    const[rview,setRview]=useState(false)
    const[uview,setUview]=useState(false)

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
        (uview)?
        <>
        <Update give={specific}/>
        <button className="btn btn-outline-primary" onClick={()=>{
            setUview(false)
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
            <i class="bi bi-bag-plus-fill">create</i>

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
            <button className="btn btn-outline-info col-2 me-1" onClick={()=>{
                setRview(true)
                setSpecific(ele.brand)
            }}>
                <i class="bi bi-book-half"></i>

            </button>
            <button className="btn btn-outline-warning col-2 me-1" onClick={()=>{
                setUview(true)
                setSpecific(ele.brand)
            }}>
                <i class="bi bi-pencil-square"></i>

            </button>
            <button className="btn btn-outline-danger col-2 " onClick={()=>{
                executeDeleting(ele.brand)
                window.location.assign("/")
            }}>
                 <i class="bi bi-trash-fill"></i>

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