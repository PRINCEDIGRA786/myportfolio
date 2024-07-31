import React from 'react';

export default function Projects({ tab }) {
  const data = [
    {
      'pic': require("../assets/bazaarhub.png"),
      'name': 'Bazaarhub',
      'description': "Bazaarhub is an ecommerce website made using the mern stack with the tailwindcss",
      'link': "https://ecommercemern-y3wn-dbfj8m1qv-princedigra786.vercel.app"
    },
    {
      'pic': require('../assets/apiapp.png'),
      'name': "Apiapp",
      'description': "Apiapp is an website created with the mern stack whose ultimate aim is to create user defined api's",
      'link': "https://apiapp-frontend-i8deug2ca-princedigra786s-projects.vercel.app/"
    },
    {
      'pic': require('../assets/instagram.png'),
      'name': 'Instagramclone',
      'description': "Instagram clone made using the mern stack with the tailwindcss",
      'link': "https://instagramclone-frontend.vercel.app/"
    },
    {
      'pic': require('../assets/netflixcopy.png'),
      'name': 'Netflixcopy',
      'description': "Netflix clone made using the mern stack with the tailwindcss",
      'link': "https://netflixcopy-oas4.vercel.app/"
    }
  ];
  const data2 = [
      {
        'pic': require('../assets/portfolio.png'),
        'name': 'Portfolio.com',
        'description': "Portfolio.com is an application made using the mern stack with the tailwindcss",
        'link': "hhttps://portfoliofrontend-eight.vercel.app/"
      },
    {
      'pic': require("../assets/weather.png"),
      'name': 'Weatherapp',
      'description': "Weatherapp is a frontend applicaiton made using the tailwindcss and the React JS",
      'link': "https://weatherapp-one-fawn.vercel.app/"
    },
    {
      'pic': require('../assets/chatgpt.png'),
      'name': "Chatgptclone",
      'description': "Chatgptclone is a  application made using the tailwindcss and the mern stack",
      'link': "https://client-ai-iota.vercel.app/"
    },
    {
      'pic': require('../assets/dribble.png'),
      'name': 'Dribbleintern',
      'description': "Dribble.com clone of signup and login made using the mern stack with the tailwindcss",
      'link': "https://dribbleintern-3p6q.vercel.app/"
    }
  ];

  return (
    <>
      {
        tab === '1' &&
        <div className='grid grid-cols-2 text-center justify-center ml-12 gap-10 mt-5'>
          {data.map((element,i) => (
            <a href={element.link} target='_blank' key={i}>

            <div className="relative group cursor-pointer">
              <img src={element.pic} className='h-80 w-[550px] rounded-3xl' />
              <div className="absolute inset-0 bg-purple-500 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                <h3 className="text-xl font-bold">{element.name}</h3>
                <p className="mt-2">{element.description}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
      }
       {
        tab === '2' &&
        <div className='grid grid-cols-2 text-center justify-center ml-12 gap-10 mt-5'>
          {data2.map((element,i) => (
            <a href={element.link} target='_blank' key={i}>

            <div className="relative group cursor-pointer">
              <img src={element.pic} className='h-80 w-[550px] rounded-3xl' />
              <div className="absolute inset-0 bg-purple-500 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                <h3 className="text-xl font-bold">{element.name}</h3>
                <p className="mt-2">{element.description}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
      }
       {
        tab === '3' &&
        <h1 className='text-[#393939] font-extrabold text-[30px] mx-auto text-center'>
            Developer is still working on it
        </h1>
       
      }
    </>
  );
}
