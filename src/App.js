import React, { Component } from 'react';
import Header from "./components/Header";
//import Select from 'react-select'
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
  
  }

  addIncome = (description,amount) => {
      //const newincomes = this.incomes.push({description: description, amount: amount}) ;  
    this.setState({
    incomes: [...this.state.incomes,{description: description, amount: Number(amount)}]
  });
  }

  addExpense = (description,amount) => {
    //const newincomes = this.incomes.push({description: description, amount: amount}) ;  
  this.setState({
  expenses: [...this.state.expenses,{description: description, amount: Number(amount)}]
});
}


/*calculateTotal = (accumulator, currentValue) => {
  return this.state.accumulator + (currentValue.amount);
}*/


/*totalIncome = () => {
    const incomes1 =  this.state.incomes.reduce((sum, i) => (sum +=  i.amount), 0);
    this.setState({
      incomes: incomes1,
    });
  }*/


/*totalExpense = () => {        
    const expenses1 = this.state.expenses.reduce((sum, i) => (sum +=  i.amount), 0);
    this.setState({
      expenses: expenses1,
    });
    console.log(expenses1)
  }*/

  

  
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

   /*const Totalincomes = ({ incomes}) => ( 
    <h3>
      Totalincomes:
      {incomes.reduce((sum, i) => (sum +=  i.amount), 0)}
    </h3> 
   )*/
  
    
   /*const Totalexpenses = ({expenses}) => ( 
    <h3>
      TotalExpenses:
      {expenses.reduce((sum, i) => (sum +=  i.amount), 0)}
    </h3>
   )*/
  
  
   
     
   
return (
<div className="App">
      <Header  />
    
      <input name="description" value={description} type="text"   placeholder="Enter description" onChange={this.handleChange}/>

      <input name="amount" value={amount} type="number"   placeholder="Enter the Amount" onChange={this.handleChange}/>

      <select name="transaction" value={this.state.value} onChange={this.handleChange}>
        <option value="Income" id="1">Income</option>
        <option value="Expense" id="2">Expense</option>
      </select>

      <button onClick={this.getadd}>Add</button>

       

  <div className="incomeexpensediv">

      <div className="incomeresult">
      <p id="incomeParagraph">Incomes</p>
      <hr width="40%" align="CENTER" id="textIncome"></hr>
      
         {incomeresult}  
         
         <h3>Totalincomes:{totalincome}</h3>
      </div>
      
     
        

      <div className="expenseresult">
      <p id="expenseParagraph">Expenses</p>
      <hr width="60%" align="CENTER" id="textExpense"></hr>
        {expenseresult}
        <h3>Totalexpenses:{totalexpenses }</h3>  
      </div> 
  </div>
  <div className="balance">
  <h3>Balance</h3>
  <hr width="20%" align="CENTER" id="balance"></hr>
  <h3>Net: {balance}</h3>
  </div>     
</div>
    
    );
  }
}

export default App;
