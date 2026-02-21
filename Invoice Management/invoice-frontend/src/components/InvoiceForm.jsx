import { useState } from "react";
import api from "../services/api";

export default function InvoiceForm(){

  const [customerName,setCustomerName]=useState("");
  const [items,setItems]=useState([{productName:"",quantity:1,price:0}]);

  const addItem=()=>{
    setItems([...items,{productName:"",quantity:1,price:0}]);
  };

  const removeItem=(index)=>{
    const list=[...items];
    list.splice(index,1);
    setItems(list);
  };

  const handleChange=(index,field,value)=>{
    const list=[...items];
    list[index][field]=value;
    setItems(list);
  };

  const calculateTotal=()=>{
    let total=0;
    items.forEach(i=> total+=i.quantity*i.price);
    return total;
  };

  const submit=async()=>{
    await api.post("/invoices",{
      customerName,
      items
    });
    alert("Invoice Created");
    window.location="/invoices";
  };

  return(
    <div>

      <input
        className="input"
        placeholder="Customer Name"
        onChange={e=>setCustomerName(e.target.value)}
      />

      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item,index)=>(
            <tr key={index}>
              <td>
                <input onChange={e=>handleChange(index,"productName",e.target.value)} />
              </td>

              <td>
                <input type="number"
                  onChange={e=>handleChange(index,"quantity",e.target.value)}
                />
              </td>

              <td>
                <input type="number"
                  onChange={e=>handleChange(index,"price",e.target.value)}
                />
              </td>

              <td>{item.quantity*item.price}</td>

              <td>
                <button onClick={()=>removeItem(index)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addItem}>Add Item</button>

      <h3>Subtotal: ₹ {calculateTotal()}</h3>
      <button className="btn" onClick={submit}>Save Invoice</button>

    </div>
  );
}
