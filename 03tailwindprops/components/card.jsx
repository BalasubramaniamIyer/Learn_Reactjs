function card({name,title='developer',img,discription}) {
  return (
    <div className="min-h-screen  grid place-items-center">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 border border-gray-100 grid place-items-center">
            <div className="flex flex-col items-center">
                <img 
                className="w-24 h-24 rounded-full shadow-md object-cover" 
                src={img} 
                alt="Profile Avatar"
                />
        
                <h2 className="text-center text-sm !text-red-500 px-4">{name}</h2>
                <p className="text-sm font-medium text-blue-600 mb-2">{title}</p>
                <p className="text-center text-sm text-gray-500 px-4">
                {discription}
                </p>
        
                <div className="mt-6 flex space-x-3 w-full">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Follow
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200 transition border border-gray-200">
                        Message
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card
