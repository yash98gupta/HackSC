import React, { Component } from 'react';
import { Card, Button, Icon, Label, Image} from 'semantic-ui-react'
import './Products.css'
import Receipt from '../Receipt/Receipt';

class Products extends Component{

  state={
    cart:[]
  }

  addToCart=(idx)=>{
    let updated_cart = window.localStorage.getItem('cart');
    let added = updated_cart
    if(updated_cart == null){
      added = idx;
    }else{
      added += ',' + idx;
    }
    window.localStorage.setItem('cart',added);
  }

  render(){

    const products = [
      {color: 'green', src:'https://m.media-amazon.com/images/I/51gm2nMvZXL._AC_UL320_.jpg', header:"Resuable Grocery Bags", points:"92 pts", price:"$10"},
      {color: 'green', src:'https://i.insider.com/5ada5f5419ee861a008b469e?width=700&format=jpeg&auto=webp', header:"Rechargeable Batteries", points:"95 pts", price:"$20"},
      {color: 'green', src:'https://i.insider.com/5a6799e400d0ef1e008b4cfd?width=700&format=jpeg&auto=webp', header:"Biodegradable trash bags", points:"98 pts", price:"$25"},
      {color: 'green', src:'https://i.insider.com/59e4cc2dd4e920b4108b5766?width=700&format=jpeg&auto=webp', header:"Resuable straws", points:"96 pts", price:"$12"},

      {color: 'teal', src:'https://i.insider.com/5ada507819ee861d008b4687?width=700&format=jpeg&auto=webp', header:"Recycled Notebooks", points:"80 pts", price:"$18"},
      {color: 'teal', src:'https://i.insider.com/5a67982d00d0ef36008b45d4?width=700&format=jpeg&auto=webp', header:"Compostable cutlery and bowls", points:"87 pts", price:"$22"},
      {color: 'teal', src:'https://i.insider.com/5e9f47054bca6310a75265b8?width=700&format=jpeg&auto=webp', header:"Natural laundry detergent", points:"81 pts", price:"$28"},
      {color: 'teal', src: 'https://theworldpursuit.com/wp-content/uploads/2020/07/eeco-friendly-products.jpg', header:"Reusable Coffee Cup Cover", points:"89 pts", price:"$15"},

      {color: 'olive', src:"https://theworldpursuit.com/wp-content/uploads/2020/05/Eco-Friendly-Products3-768x543.jpg", header:"Flip FLops", points:"75 pts", price:"$30"},
      {color: 'olive', src:"https://theworldpursuit.com/wp-content/uploads/2020/03/eco-friendly-travel-products-768x856.png", header:"Plastic Snack Bags", points:"73 pts", price:"$35"},
      {color: 'olive', src:"https://theworldpursuit.com/wp-content/uploads/2020/07/environmentally-friendly-products-1.jpg", header:"Plastic Tiffin Boxes", points:"74 pts", price:"$40"},
      {color: 'olive', src:"https://theworldpursuit.com/wp-content/uploads/2020/07/environmentally-friendly-products.-2.jpg", header:"Belt", points:"77 pts", price:"$59"},

      {color: 'red', src:"https://target.scene7.com/is/image/Target/GUEST_4c583132-80cd-46b4-87a6-e319d7b287df?qlt=85&fmt=&hei=325&wid=325", header:"Paper towels", points:"55 pts", price:"$20"},
      {color: 'red', src:"https://m.media-amazon.com/images/I/81cVs7+sRGL._AC_UL320_.jpg", header:"Adhesive Tape", points:"10 pts", price:"$15"},
      {color: 'red', src:"https://m.media-amazon.com/images/I/71y2JwbqINL._AC_UL320_.jpg", header:"Tea Boxes", points:"30 pts", price:"$28"},
      {color: 'red', src:"https://m.media-amazon.com/images/I/81yPotMTjFL._AC_UL320_.jpg", header:"Soy Milk", points:"49 pts", price:"$8"},
    ]

    let products_display=[];

    for(let i=0;i<products.length;i++){
      products_display.push(
        <span className="product-card">
          <Label as='a' color={products[i].color} ribbon='right' className="points-label">{products[i].points}</Label>
          <Card color={products[i].color}>
            <Card.Content>
              <Image src={products[i].src} className="image-size"/>
              <Card.Header style={{textAlign:'center'}}>{products[i].header}</Card.Header>
              <Card.Description>
                {products[i].description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button animated='fade'>
                  <Button.Content hidden >Shop Online</Button.Content>
                  <Button.Content visible onClick={()=>this.addToCart(i)}>
                    <Icon name='shop' />
                  </Button.Content>
                </Button>

                <Receipt />
              </div>
            </Card.Content>
          </Card>
        </span>
      )
    }
      return (
        <Card.Group itemsPerRow={4}>
          {products_display}
        </Card.Group>
      );
  }

}

export default Products;
