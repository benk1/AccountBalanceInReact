import React, { Component } from 'react';
import Header from "./components/Header";
import './App.css';

class App extends Component {

  state = {
    incomes: [{description : 'salary', amount: 3000},
    {description: 'bonus', amount: 1000},
    {description: 'online courses', amount: 5000}],

    expenses: [{description:'rent', amount: 1000},
    {description:'shopping', amount: 1000},
    {description: 'travel', amount: 1000}],

    description: "",

    amount: "",
    transaction: "Income"
   
  };

  handleChange = (e) => {
    this.setState({ 
    [e.target.name]: e.target.value
    
    });
  }

getadd = () => {
  
  if(this.state.transaction === "Expense"){
    this.addExpense(this.state.description, this.state.amount);
  }else if((this.state.transaction === "Income")){
    this.addIncome(this.state.description, this.state.amount);
  }
  this.refs.desc.value = "";
  this.refs.amou.value = "";
  
  }

  addIncome = (description,amount) => {
    
    this.setState({
    incomes: [...this.state.incomes,{description: description, amount: Number(amount)}]
  });
  }

  addExpense = (description,amount) => {
  
  this.setState({
  expenses: [...this.state.expenses,{description: description, amount: Number(amount)}]
});
}

  
render() {
  
  const {description, amount} = this.state;
    
    const incomeresult = this.state.incomes.map((income,i) => {
      
       return <li className="align" key={i}>{income.description} {income.amount} </li>
    });


    const totalincome = this.state.incomes.reduce((sum, i) => (sum +=  i.amount), 0)

    const expenseresult = this.state.expenses.map((expense,i) => {
      
      return <li className="align" key={i}>{expense.description} {expense.amount}</li>
   });

   const totalexpenses = this.state.expenses.reduce((sum, i) => (sum +=  i.amount), 0)

   const balance = totalincome - totalexpenses;
     
   
return (
<div className="App">
      <Header title="Account Balance" />
    <div className="container">
      <input name="description" value={description} type="text" ref="desc"  placeholder="Enter description" onChange={this.handleChange}/>

      <input name="amount" value={amount} type="number" ref="amou"  placeholder="Enter the Amount" onChange={this.handleChange}/>

      <select name="transaction" value={this.state.value} onChange={this.handleChange}>
        <option value="Income" id="1">Income</option>
        <option value="Expense" id="2">Expense</option>
      </select>

      <button onClick={this.getadd}>Add</button>

       

  <div className="incomeexpensediv">

      <div className="incomeresult">
      <p id="incomeParagraph">Incomes</p>
      <hr color="green" width="90%" align="CENTER" id="textIncome"></hr>
      
         {incomeresult}  
         
         <h3>Totalincome: {totalincome}</h3>
      </div>
      
     
      <div className="expenseresult">
      <p id="expenseParagraph">Expenses</p>
      <hr color="green" width="90%" align="CENTER" id="textExpense"></hr>
        {expenseresult}
        <h3>Totalexpense: {totalexpenses }</h3>  
      </div> 

  </div>

  <div className="balance">
  <h2>Balance</h2>
  <hr color="green" width="20%" align="CENTER" id="balance"></hr>
  <h2>Net: {balance}</h2>
  </div>  
  </div>
</div>
    
    );
  }
}

export default App;
