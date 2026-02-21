import { useEffect, useState } from "react";
import API from "../api/api";

export default function CreateEstimate(){

  const [customers,setCustomers]=useState([]);
  const [products,setProducts]=useState([]);
  const [customerId,setCustomerId]=useState("");
  const [items,setItems]=useState([]);

  const [total,setTotal]=useState(0);

  useEffect(()=>{
    loadData();
  },[]);

  const loadData=async()=>{
    const c=await API.get("/customers");
    const p=await API.get("/products");
    setCustomers(c.data);
    setProducts(p.data);
  }

  // Add Row
  const addItem=()=>{
    setItems([...items,{productId:"",quantity:1,price:0,amount:0}]);
  }

  // Update Item
  const updateItem=(index,field,value)=>{
    const newItems=[...items];
    newItems[index][field]=value;

    if(field==="productId"){
      const prod=products.find(p=>p.id==value);
      if(prod) newItems[index].price=prod.price;
    }

    newItems[index].amount=newItems[index].price*newItems[index].quantity;

    setItems(newItems);
    calculateTotal(newItems);
  }

  const calculateTotal=(list)=>{
    let t=0;
    list.forEach(i=>t+=Number(i.amount||0));
    setTotal(t);
  }

  // SAVE ESTIMATE
  const save=async()=>{

    const payload={
      estimateNumber:"EST-"+Date.now(),
      date:new Date().toISOString().split("T")[0],
      customer:{id:customerId},
      items:items.map(i=>({
        product:{id:i.productId},
        quantity:i.quantity,
        price:i.price
      }))
    };

    await API.post("/estimates",payload);
    alert("Estimate Saved!");
    setItems([]);
  }

  return(
    <div className="container mt-4">
      <h2>Create Estimate</h2>

      {/* Customer */}
      <select className="form-control mb-3"
        onChange={e=>setCustomerId(e.target.value)}>
        <option>Select Customer</option>
        {customers.map(c=>(
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      {/* Items Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>

          {items.map((item,index)=>(
            <tr key={index}>

              <td>
                <select className="form-control"
                  onChange={e=>updateItem(index,"productId",e.target.value)}>
                  <option>Select</option>
                  {products.map(p=>(
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </td>

              <td>
                <input type="number" className="form-control"
                  value={item.quantity}
                  onChange={e=>updateItem(index,"quantity",e.target.value)} />
              </td>

              <td>{item.price}</td>
              <td>{item.amount}</td>

            </tr>
          ))}

        </tbody>
      </table>

      <button className="btn btn-secondary" onClick={addItem}>Add Item</button>

      <h4 className="mt-3">Total: ₹ {total}</h4>

      <button className="btn btn-success mt-2" onClick={save}>
        Save Estimate
      </button>
    </div>
  )
}
