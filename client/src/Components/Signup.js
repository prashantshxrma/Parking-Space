import React from 'react'
import "../Style/Signup.css"
export default function Signup() {
  return (
    <div>
    <div class="container">
    <h1>Sign Up</h1>
    <form>
        <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required/>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/>
        </div>
        <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required/>
        </div>
        <button type="submit">Sign Up</button>
    </form>
</div> 
</div>
  )
}

