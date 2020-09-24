import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <img src="chanel.jpg" alt='Logo' className="App-logo"></img><br></br>
       <div className="subApp">
         <p className='su'>Sign Up</p>
       <h1 className="t">Create Your Account</h1>
       <div class="col">
        <table className='tt'>
        <th className='tab'><button class='fb' ><img src='fblogo.png' alt='face' className='fblogo'></img>  <a href="#" className='deco' >
          <i class="fa fa-facebook fa-fw"></i>   Sign Up 
        </a></button></th>
        <th className='ta'><button class="google" ><img src='goologo.png' alt='face' className='fblogo'></img><a href="#" className='decoo' >
          <i class="fa fa-google fa-fw"></i> Sign Up
        </a></button></th></table>

      </div>
       <br></br><br></br>
       <form>
         <input type="text" className="input" placeholder='First Name'></input><br></br>
         <input type={Text} className="input" placeholder='Last Name'></input><br></br>
         <input type={Text} className="input" placeholder='Email'></input><br></br>
         <input type='password' className="input" placeholder='Password'></input><i class="far fa-eye" ></i>
         <p className='para'>By clicking Sign Up you agree to our <a href="#" color='blue' className='deco'>Terms of use</a> and our <a href="#" color='blue' className='deco'>Privacy Policy</a>.<br></br></p>
         <input type="Submit" value="Sign Up" onSubmit="https://reqres.in" className='submit'></input>
       </form>
     </div>
    </div>
  );
}

export default App;
