var records=[
    {
        "brand":"panasonic",
        "quantity":2,
        "weight":"1ton",
        "price":12000,
    },
    {
        "brand":"voltas",
        "quantity":3,
        "weight":"1.5ton",
        "price":17000,
    },
    {
        "brand":"hitachi",
        "quantity":4,
        "weight":"2ton",
        "price":19000,
    }
]

const affect=()=>{
    localStorage.setItem("data",JSON.stringify(records))
}

const loading=()=>{
    const temp=localStorage.getItem("data")
    records=JSON.parse(temp)
}

export const executeCreating=(obj)=>{
    loading()
    records.push(obj)
    affect()
}

export const executeReading=(key)=>{
loading()
for(var ind=0;ind<records.length;ind++)
{
    if(records[ind].brand===key)
    {
      return records[ind]  
    }
}
return{}
}

export const executeListing=()=>{
    loading()
    return records
}