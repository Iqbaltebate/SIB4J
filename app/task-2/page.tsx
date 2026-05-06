import Image from 'next/image';
export default function Task() {
    return (
//   tanah
  <div className="bg-white w-full h-screen px-30">
    
    {/* rumah */}
    <div className=" mx-50  h-190 w-300  rounded-4xl p-15  flex-col  " >

    {/* ruangan */}
    <div className="flex justify-between p-5">

        {/* kotak 1 */}
      <div className="bg-blue-100 h-78 w-120 rounded-4xl flex flex-col justify-between p-5 gap-5 text-black"    >
          <div className='flex gap-5'>
           <img src="/logo.png  " alt="logo" className='w-5 h-5' />
           <p> desain</p> 
          </div>    

        {/* 2 */}
          <div className="flex-col justify-between">
                 <div >
                 <h1 className="text-5xl">adobe photoshop</h1>
                 </div>

                 <div className='flex justify-between'>
                 <p>in 3 days</p>
                 <img src="/oi.png" alt="oi" className='w-10 h-10 rounded-full'/>
                 </div>

          </div> 

      </div>  
        {/* kotak 2 */}
      <div className="bg-green-100 h-78 w-120 rounded-4xl flex flex-col justify-between p-5 gap-5 text-black"    >
          <div className='flex gap-5'>
           <img src="/brand.png" alt="brand" className='w-5 h-5' />
           <p> AI</p> 
          </div>    

          <div>
            <div>
                 <h1 className="text-4xl">DALL.E 2, Midjourney, Stable Diffusion</h1>
            </div>
            <div className='flex justify-between'>
                <p>in 5 days</p>
                <img src="/logo.png" alt="logo" className='w-5 h-5'  />
            </div>
           
          </div>    
     </div>  

      </div>

      {/* ruangan 2 */}
      <div className="flex gap-13">

      <div className="bg-purple-100 h-78 w-80 rounded-4xl flex flex-col justify-between p-5 gap-5 text-black"    >
          <div className='flex gap-5'> 
          <img src="/logo.png" alt="logo" className='w-5 h-5'  />
          
           <p> desain</p> 
          </div>    

          <div>
           <h1>Figma</h1>
           <p>in 8 hours ago</p>
          </div>    
      </div>  

      <div className="bg-orange-100 h-78 w-80 rounded-4xl flex flex-col justify-between p-5 gap-5 text-black"    >
          <div className='flex gap-5'>
           <img src="/code.png" alt="code" className='w-5- h-5' />
           <p> Codding</p> 
          </div>    

          <div>
           <h1>Pyhton</h1>
           <p>2 days</p>
          </div>    
      </div>  

      <div className="bg-pink-100 h-78 w-80 rounded-4xl flex flex-col justify-between p-5 gap-5 text-black"    >
          <div className='flex gap-5'>
           <img src="/logo.png" alt="logo" className='w-5- h-5' />
           <p> desain</p> 
          </div>    

          <div>
           <h1>Sketch</h1>
           <p>4 days</p>
          </div>    
      </div>  

      </div>



    </div>

  </div>
    );
  }
  