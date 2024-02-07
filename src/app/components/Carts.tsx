// Cart.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CartItem {
  id: number;
  image: string;
  date: string;
  time: string;
  title: string;
  description: string;
}

interface Props {
  items: CartItem[];
}

const Cart: React.FC<Props> = ({ items }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id.toString()}
          onClick={() => setSelectedId(item.id)}
          className="p-4 border border-gray-300 rounded-md cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-48 transition-transform transform hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-xs text-gray-500">
              {item.date} - {item.time}
            </p>
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            layoutId={selectedId.toString()}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white p-4 rounded-md"
            >

              <p className="text-lg font-semibold">{items[selectedId - 1].title}</p>
              <p className="text-sm text-gray-600">{items[selectedId - 1].description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setSelectedId(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
