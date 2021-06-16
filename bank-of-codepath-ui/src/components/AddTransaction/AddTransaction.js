import { useState } from "react"
import "./AddTransaction.css"

export default function AddTransaction() {

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    description: "",
    category: "",
    amount: ""
  })

  const handleOnFormChange = () => {
    
  } 

  return (
    <div className="AddTransaction">
      <h2>Add Transaction</h2>

      <div className="form">
        <div className="fields">
          <div className="field">
            <label>Description</label>
            <input type="text" name="description" placeholder="Enter a description..." onChange={handleOnFormChange} />
          </div>
          <div className="field">
            <label>Category</label>
            <input type="text" name="category" placeholder="Enter a category..." onChange={handleOnFormChange} />
          </div>
          <div className="field" style={{ flex: 0.5 }}>
            <label>Amount (cents)</label>
            <input type="number" name="amount" onChange={handleOnFormChange} />
          </div>

          <button className="btn add-transaction" type="submit">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
