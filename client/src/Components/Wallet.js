import React from 'react'
import "../Style/Wallet.css"
const Wallet = () => {
  return (
    <div class="wallet-container">
        <h1>Wallet</h1>
        <div class="balance-info">
            <div class="balance">
                <h2>Total Balance</h2>
                <p class="amount">$100.00</p>
            </div>
            <div class="balance">
                <h2>Available Balance</h2>
                <p class="amount">$75.00</p>
            </div>
        </div>
        <button class="add-funds">Add Funds</button>
        <button class="view-transactions">View Transactions</button>
    </div>
  )
}

export default Wallet