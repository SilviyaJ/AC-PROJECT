import { useEffect, useState } from "react"
import { executeReading } from "./Storage"

export const Read=(Jessy)=>{

    const[temp,setTemp]=useState({})

    useEffect(()=>{
        const t=executeReading(Jessy.which)
        setTemp(t)
    },[])

    return(
        <>
        <div className="container">
            <div className="row justify-content-center mt-3">
                <div className="card col-lg-8 col-md-10 col-sm-12 shadow text-danger bg-warning">
                <h3 className="card-title text-center display-3">{temp.brand}</h3>
                <div className="card-body">
                    <p className="card-text float-start">{temp.weight}</p>
                    <p className="card-text float-end">{temp.price}</p>

                </div>

                </div>

            </div>

        </div>
        </>
    )
}