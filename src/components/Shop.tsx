import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  badge?: string;
  ribbonLabel?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    title: 'DBSK Starter Kit',
    price: 149.99,
    image: './dron kit tech.jpg',
    description: 'The complete modular drone building experience. Includes frame, motors, flight controller, and access to the learning app.',
    features: ['No Soldering Required', 'Includes Protective Glasses, Battery & Charger, Safe Battery Storage Box'],
    badge: 'Best Seller'
  },
  {
    id: 2,
    title: 'Classroom Education Pack',
    price: 1250.00,
    image: './unnamed-2.jpg',
    description: "The ultimate STEM solution. 10 complete kits plus a comprehensive teacher's guide and lesson plans.",
    features: ['10x Drone Kits', "10x Protective Glasses", "Teacher Curriculum Guide", 'Safe Battery Storage Box'],
    ribbonLabel: 'SCHOOLS'
  },
  {
    id: 3,
    title: 'Crash Pack (Spare Parts)',
    price: 19.99,
    image: './spare set drone.jpg',
    description: "Don't let a crash stop the fun. Snap-on replacements for arms and propellers.",
    features: ['4x Snap-fit Arms', '8x Propellers', 'Replacement Screws']
  }
];

interface ShopProps {
  onNavigate?: (page: 'home' | 'learning' | 'shop') => void;
}

export default function Shop({ onNavigate }: ShopProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("This is a demo! In a real version, this would take you to Stripe Payment.");
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate?.('home')}>
              <span className="font-extrabold text-2xl tracking-tight text-brand-blue">DBSK</span>
              <span className="ml-2 text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">STORE</span>
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => onNavigate?.('home')}
                className="hidden md:block text-slate-600 hover:text-brand-blue text-sm font-medium"
              >
                Back to Home
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-600 hover:text-brand-blue transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-brand-dark pt-32 pb-12 text-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">Start Your Journey</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Free shipping within the EU for all orders over €200.</p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col relative">
              {product.ribbonLabel && (
                <div className="absolute top-4 left-[-30px] rotate-[-45deg] bg-brand-accent text-white text-xs font-bold py-1 px-10 shadow-md z-10">
                  {product.ribbonLabel}
                </div>
              )}
              
              <div className="relative h-64 bg-slate-100 group">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-brand-dark">{product.title}</h3>
                <p className="text-sm text-slate-500 mt-2 mb-4">{product.description}</p>
                
                <ul className="text-xs text-slate-500 mb-6 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg className="w-4 h-4 inline text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-2xl font-bold text-brand-blue">€{product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-brand-dark text-white px-4 py-2 rounded-lg hover:bg-brand-blue transition font-semibold text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div 
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        />
      )}

      {/* Cart Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-brand-dark text-white">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-slate-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-slate-400 mt-10">
              <svg className="w-16 h-16 mx-auto mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md bg-slate-100" />
                <div className="flex-grow">
                  <h4 className="text-sm font-bold text-brand-dark">{item.title}</h4>
                  <p className="text-brand-blue font-semibold text-sm">€{item.price.toFixed(2)}</p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-slate-400 hover:text-red-500 transition px-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-500">Total</span>
            <span className="text-2xl font-bold text-brand-dark">€{total.toFixed(2)}</span>
          </div>
          <button 
            onClick={checkout}
            className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
