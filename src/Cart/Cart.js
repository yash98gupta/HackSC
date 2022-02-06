import React from 'react'
import { Button, Image, Modal} from 'semantic-ui-react'
import CartTable from './CartTable'

function addPoints(){
  window.localStorage.setItem('score',parseInt(window.localStorage.getItem('score'))+parseInt(window.localStorage.getItem('points')));
  window.localStorage.removeItem('points');
  window.localStorage.removeItem('cart');
}

function Cart() {
  const [open, setOpen] = React.useState(false)
  let cart = window.localStorage.getItem('cart');
  let num = null;
  if(cart != null){
    num = cart.split(',').length;
  }


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div>{num}</div>}
      size="mini"
    >
      <Modal.Header>Carbon Cart</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <CartTable />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => {setOpen(false);addPoints()}} positive>Pay</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Cart