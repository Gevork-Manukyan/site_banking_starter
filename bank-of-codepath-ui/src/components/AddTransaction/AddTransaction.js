import axios from "axios";
import { useState } from "react"
import "./AddTransaction.css"

export default function AddTransaction(props) {

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    description: "",
    category: "",
    amount: ""
  })

  const handleOnFormChange = (evt) => {
    setForm(oldForm => ({
      ...oldForm, 
      [evt.target.name]: evt.target.value
    }))
  } 

  const handleOnSubmit = async () => {

    const newTransaction = await axios.post("/bank/transactions", {
      description: form.description,
      category: form.category,
      amount: form.amount
    })

    setIsProcessing(true);
    await props.AddTransaction(newTransaction);
    setIsProcessing(false);
  }

  return (
    <div className="AddTransaction">
      <h2>Add Transaction</h2>

      <div className="form">
        <div className="fields">
          <div className="field">
            <label>Description</label>
            <input type="text" name="description" placeholder="Enter a description..." value={form.description} onChange={handleOnFormChange} />
          </div>
          <div className="field">
            <label>Category</label>
            <input type="text" name="category" placeholder="Enter a category..." value={form.category} onChange={handleOnFormChange} />
          </div>
          <div className="field" style={{ flex: 0.5 }}>
            <label>Amount (cents)</label>
            <input type="number" name="amount" value={form.amount} onChange={handleOnFormChange} />
          </div>

          <button className="btn add-transaction" type="submit" onClick={handleOnSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
