import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useStore } from '../lib/store';
import { Link } from 'react-router-dom';

export function CartPage() {
  const { cart, products, removeFromCart, addToCart } = useStore();

  const cartItems = cart.map(item => ({
    ...item,
    product: products.find(p => p.id === item.productId)
  })).filter(item => item.product);

  const total = cartItems.reduce((sum, item) => 
    sum + (item.product?.price || 0) * item.quantity, 0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any services to your cart yet.
            </p>
            <Link
              to="/services"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Services
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.productId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.product?.name}</h3>
                      <div className="text-sm text-gray-600 mb-2">
                        <p>CPU: {item.product?.specs.cpu} cores</p>
                        <p>RAM: {item.product?.specs.ram} GB</p>
                        <p>Storage: {item.product?.specs.storage} GB</p>
                      </div>
                      <p className="text-lg font-bold text-teal-600">
                        ₹{item.product?.price}/month
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              // In a real app, you'd have a decreaseQuantity function
                              removeFromCart(item.productId);
                              for (let i = 0; i < item.quantity - 1; i++) {
                                addToCart(item.productId);
                              }
                            }
                          }}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item.productId)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl p-6 shadow-lg sticky top-8"
              >
                <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.productId} className="flex justify-between text-sm">
                      <span>{item.product?.name} x{item.quantity}</span>
                      <span>₹{(item.product?.price || 0) * item.quantity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{total}/month</span>
                  </div>
                </div>
                
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors mb-4">
                  Proceed to Checkout
                </button>
                
                <Link
                  to="/services"
                  className="w-full border border-teal-600 text-teal-600 hover:bg-teal-50 py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}