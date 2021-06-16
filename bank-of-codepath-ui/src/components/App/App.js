
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import "./App.css"

export default function App() {

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [filterInputValue, setFilterInputValue] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {

    const fetchTransactions = async () => {
      setIsFetching(true);

      try {

        let res = await axios.get("http://localhost:3001/bank/transactions");
        let trans = res?.data?.transactions;
        if (trans) {
          setTransactions(trans);
        }

        res = await axios.get("http://localhost:3001/bank/transfers");
        trans = res?.data?.transfers;
        if (trans) {
          setTransfers(trans);
        }
        
      } catch (err) {
        setError(err);
      }

      setIsFetching(false);
    }

    fetchTransactions();

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bank/transactions/:transactionId" element={<TransactionDetail />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}
