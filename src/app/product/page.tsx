// import React from 'react';

// function CardComponent() {
//     // Array of card data
//     const cardsData = [
//         {
//             imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
//             title: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
//             rating: 5.0,
//             price: 599
//         },
//         {
//             imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
//             title: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
//             rating: 5.0,
//             price: 599
//         },
        
//         // Add more card data as needed
//     ];

//     return (
//         <div classNameName="max-w-2xl gap-6 grid-cols-12">
//             {cardsData.map((card, index) => (
//                 <div key={index} classNameName="bg-white shadow-md rounded-lg max-w-sm col-span-3 dark:bg-gray-800 dark:border-gray-700">
//                     <a href="#">
//                         <img classNameName="rounded-t-lg p-8" src={card.imageUrl} alt="product image" />
//                     </a>
//                     <div classNameName="px-5 pb-5">
//                         <a href="#">
//                             <h3 classNameName="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{card.title}</h3>
//                         </a>
//                         <div classNameName="flex items-center mt-2.5 mb-5">
//                             {[...Array(card.rating)].map((_, i) => (
//                                 <svg key={i} classNameName="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                 </svg>
//                             ))}
//                             <span classNameName="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{card.rating}</span>
//                         </div>
//                         <div classNameName="flex items-center justify-between">
//                             <span classNameName="text-3xl font-bold text-gray-900 dark:text-white">${card.price}</span>
//                             <a href="#" classNameName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//             <p classNameName="mt-5">This card component is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a classNameName="text-blue-600 hover:underline" href="#" target="_blank">Flowbite Documentation</a>.</p>
//         </div>
//     );
// }

// export default CardComponent;


import React from 'react'
import {PageWrapper} from "./../page-wrapper"

function page() {
  return (
    <PageWrapper>
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            </div>
          </div>
          
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            </div>
          </div>
          
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            </div>
          </div>
          
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            </div>
          </div>
          
        </li>
      </ul>
      
    </div>
  </div>
  </PageWrapper>
  )
}

export default page
