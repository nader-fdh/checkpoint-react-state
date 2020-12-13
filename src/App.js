import react, { Component } from 'react';
import './App.css';


class App extends Component {
  state= {
    statut:false ,
    fullName : 'Fadhel Nader',
    bio : 'Devlopper',
    profession : 'FullStack js Dev',
    img : 'https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/118063791_1497914803748532_1300174053195448940_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=enR3DbxtpjIAX8GRz8P&_nc_ht=scontent.ftun3-1.fna&oh=9b321fc1bbe892b352e08a234bac14d8&oe=5FFCC450',

  } ;
  render() {
return(
   <div className='App'>
     <button onClick={() => this.setState({statut:!this.state.statut})}>Click me</button>

     {this.state.statut 
      ? 
      <div className="card">
        <div className="image">
            <img src={this.state.img} alt="image"/>
        </div>
        <div className="contents">
      <h2>{this.state.fullName}<br/><p>{this.state.profession+' junior '+this.state.bio}</p></h2>
            
        </div>
      </div>
      :<h1 style={{color:'white'}}> Click the Button</h1>}
   </div>
     

)}
}

export default App;
