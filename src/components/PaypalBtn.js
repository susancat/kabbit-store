import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
 
export default class PaypalBtn extends Component {
    render() {
        return (
          <PayPalButton
            amount={this.props.total}
            onSuccess={(clearCart, history) => {
              clearCart();
              history.push('/');
              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({

                })
              });
            }}
            options={{
              clientId: "AcTYUBC7jH9yCVTCXV4xLE3U9NVZKwTR2vnpQs_89_Cfl1RTHLHQTes78cS_ZliovFNbbpQLcWAQihGy",
              currency: "USD"
            }}
          />
        );
      }
    }