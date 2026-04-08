
 import  { use } from 'react';
import ModelsCard from './ModelsCard';

const Models = ({ dataPromise  ,carts,setCarts}) => {
  const models = use(dataPromise);
  // const [activeTab ] =useState("Products")
  // console.log(activeTab);

  return (
    <div className='px-4 md:px-10 lg:px-20'>
      
     


      {/* Cards Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10  max-w-6xl  mx-auto'>
        {models.map((model,index) => (
          <ModelsCard key={index} model={model} setCarts={setCarts} carts={carts}/>
        ))}
      </div>

    </div>
  );
};

export default Models;