import Image from 'next/image';
export default function Card() {
    return (
    // dasar
    <div className='p-20 bg-white w-full h-screen'> 
        {/* mid */}
        <div className='bg-blue-300 w-200 h-100 p-10' >
            {/* kotak 1 */}
            <div className='bg-white h-80 w-65 rounded-xl px-auto p-2 text-black  flex-col justify-between' >

                <div className='bg-blue-200 h-60 w-60 rounded-xl mx-auto p-2 '>
                    <h1>web design</h1>
                     <p>carfts engaging, user-friendly website</p> 
                     
                 {/* bagian dalam biru */}
                 <div className='flex gap-2'>
                    <div className='flex-col'>
                    <div className='bg-blue-400 h-10 w-30 rounded-xl gap-2'>
                        <p>landing page</p>
                    </div>
                    <div className='bg-blue-400 h-10 w-30 rounded-xl '>
                        <p>landing page</p>
                    </div>
                    </div>
                    <div className='flex'>
                    <div className='bg-blue-400 h-10 w-30 rounded-xl '>
                        <p>landing page</p>
                    </div>
                    </div>
                 </div>

                </div>

            </div> 

        </div>
    </div>
    );
  }
  