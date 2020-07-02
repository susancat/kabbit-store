import React, { Component } from 'react';
import { storeEarings, detailEaring } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        earings: [],
        detailEaring: detailEaring,
        cart: [],
        modalOpen: false,
        modalEaring: detailEaring,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };
   
    componentDidMount() {
        this.setEarings();
    }

    setEarings = () => {
        let tempEarings = [];
        storeEarings.forEach(item => {
            const singleItem = {...item};
            tempEarings = [...tempEarings, singleItem];
        });
        this.setState(() => {
            return { earings: tempEarings };
        });
    }

    getEaring = id => {
        const earing = this.state.earings.find(earing => earing.id === id);
        return earing;        
    }

    addToCart = id => {
        let tempEarings = [...this.state.earings];
        const index = tempEarings.indexOf(this.getEaring(id));
        const earing = tempEarings[index];
        earing.inCart = true;
        earing.count = 1;
        const price = earing.price;
        earing.total = price;
        this.setState(() => {
            return { earings: tempEarings, cart: [...this.state.cart, earing] };
        },() => {console.log(this.state);
        }
        );
    };

    handleDetail = id => {
       const earing = this.getEaring(id);
       this.setState(() => {
           return {detailEaring: earing};
       });
    };


    openModal = id => {
        const earing = this.getEaring(id);
        this.setState(() => {
            return { modalEaring: earing, modalOpen: true };
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    }

    increment = id => {
        console.log("this is increment method");
    }

    decrement = id => {
        console.log("this is decrement method");
    }

    removeItem = id => {
        console.log("item removed");
    }

    clearCart = () => {
        console.log("cart was cleared")
    }

    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
{/* value here including all the data and functions */}
                { this.props.children }
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };