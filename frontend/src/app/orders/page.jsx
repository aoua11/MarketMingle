"use client"

import { useEffect, useState } from "react"
import axios from "axios";



export default function Orders() {
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/orders')
            .then((resp) => {
                setOrder(resp.data)
            })
    }, [])

    return(
        <>
        
        {
            orders.map((order)=>{
                return(
                    <div key={order._id} className="border-4 border-black">
                        <h1>{order.name}</h1>
                        <h1>{order.address}</h1>
                        <h1>{order.phone}</h1>
                    </div>
                )
            })
        }
        
        
        </>
    )

}