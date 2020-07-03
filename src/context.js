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
        this.setState(
            () => {
            return { earings: tempEarings, cart: [...this.state.cart, earing] };
            },
            () => {
                this.addTotals();
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
        let tempCart = [...this.state.cart];

        const selectedEaring = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedEaring);
        const earing = tempCart[index];

        earing.count = earing.count + 1;
        earing.total = earing.count * earing.price;

        this.setState(() => {
            return {
                cart: [...tempCart],
            }
        }, () => {
            this.addTotals();
        });
    }

    decrement = id => {
        let tempCart = [...this.state.cart];

        const selectedEaring = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedEaring);
        const earing = tempCart[index];

        earing.count = earing.count - 1;

        if(earing.count === 0) {
            this.removeItem(id);
        } else {
            earing.total = earing.count * earing.price;
            this.setState(() => {
                return {
                    cart: [...tempCart],
                }
            }, () => {
                this.addTotals();
            });
        };
    };

    removeItem = id => {
        let tempEarings = [...this.state.earings];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempEarings.indexOf(this.getEaring(id));

        let removedEaring = tempEarings[index];
        removedEaring.inCart = false;
        removedEaring.count = 0;
        removedEaring.total = 0;

        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                    earings: [...tempEarings]
                };
            },
            () => {
                this.addTotals();
            }
        );
    };

    clearCart = () => {
        this.setState(() => {
            return {cart: []};
        },() => {
            this.setEarings();
            this.addTotals();
        });
    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax. toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            };
        });
    };

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