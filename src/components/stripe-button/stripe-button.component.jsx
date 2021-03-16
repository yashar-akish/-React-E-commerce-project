import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IVQF3HMkg3QZuhUWmOmbcIsEH3TThwUqXH0T6klxeggpBwyP1cbZXvTua7UV9Tie01akEZrhR0REKVrM8zHBBuM00KtCyTCZy';

  const onToken = token => {
    console.log(token);
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;