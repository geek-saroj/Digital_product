"use client"

// App.tsx
import React from 'react';
import Cart from './Carts'; 
interface CartItem {
    id: number;
    image: string;
    date: string;
    time: string;
    title: string;
    description: string;
  }

// Make sure the path to Cart.tsx is correct

const App: React.FC = () => {
  // Static data for demonstration
  const staticData: CartItem[] = [
    {
        id: 1,
        image: "https://www.mooc.org/hubfs/applications-of-computer-programming.jpg",
        date: "2024-02-04",
        time: "10:30",
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
        date: "2024-02-05",
        time: "12:45",
        title: "Product 2",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2dyYW1taW5nfGVufDB8fDB8fHww",
        date: "2024-02-06",
        time: "15:00",
        title: "Product 3",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        id: 4,
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "2024-02-07",
        time: "17:30",
        title: "Product 4",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    // Add more items as needed
  ];

  return <Cart items={staticData} />;
};

export default App;
