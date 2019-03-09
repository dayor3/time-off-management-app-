import React,  { Component } from 'react';
class Main extends Component{
    render(){
        return (


<main>
    <h2 className = "subtitle">Policy</h2>
    <p className = "intro"> 
A leave of absence is time allowed away from work, generally requested by an employee, to cover unusual circumstances occurring in the employee’s life. 
The leave of absence is used when the employee’s time off from work is not covered under an employer’s existing benefits such as sick leave, paid vacation, 
paid holidays and paid time off. This leave policy allows flexibility for employees to meet personal, family, work and community commitments without 
compromising the achievement of business objectives. The policy applies to all employees. Full-time employees are entitled to annual leave of 
20 working days for eachyear of service. Part-time employees are entitled to annual leave on a pro-rata basis. Annual leave may not be taken for periods of less than one day.  
Accumulation of more than 30 days annual leave is discouraged and employees will be directed to take their leave annually.
</p>


    <div className="help">
        <h3>How to Apply</h3>
        <p>
        Endeavour to read the policy. Understand before applying. In case, of uncertainty see the HR.
        As an employee, you're expected to use your email and authenticated password to login if you have signed up earlier by using 
        the login button. For a new employee please sign up before proceeding to take a leave of absence.</p>

    </div>
        
             
                     <div>
                        <button type ="button" >Sign-Up</button>
                        <button type ="button">Login</button>
                    </div>
</main>
        );
    }
}

export default Main;