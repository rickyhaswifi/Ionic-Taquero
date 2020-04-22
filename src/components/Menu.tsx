import React, { Component } from 'react';
import { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton } from '@ionic/react';

class Menu extends Component {
  state={
    Cartera:0,
    Carta:[
      {id:1, name:'Taco', cost: 2, Cantidad:0},
      {id:2, name:'Torta', cost: 5, Cantidad:0,},
      {id:3, name:'Burrito', cost: 5, Cantidad:0,},
      {id:4, name:'Quesadilla', cost: 3, Cantidad:0,},
      {id:5, name:'Orden', cost: 9, Cantidad:0,},
    ]
  }

  TotalFoodCountMinus = () => {
    let Cartera = this.state.Cartera
    Cartera -= 1
    this.setState({Cartera: Cartera})
  }

  TotalFoodCountAdd = () => {
    let Cartera = this.state.Cartera
    Cartera += 1
    this.setState({Cartera: Cartera})
  }

render() { 
  return ( 
      <>
    {this.state.Carta.map(c => (
      <IonCard key={c.id} style={{width:'25%', display:'inline-block'}}>
        <IonCardContent>
       <IonCardTitle>{c.name}</IonCardTitle> 
       <IonCardSubtitle>${c.cost}</IonCardSubtitle>
       
        <div style={{width:'100%', display:'flex'}}>
        <IonButton onClick={this.TotalFoodCountMinus}>-</IonButton>
        <IonInput value={c.Cantidad}/>
        <IonButton onClick={this.TotalFoodCountAdd}>+</IonButton>
        </div>
      </IonCardContent>
     </IonCard>
   ))}

   <h1>Total Items: {this.state.Cartera}</h1>
      </>
  )}};

export default Menu;