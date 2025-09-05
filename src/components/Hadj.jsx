import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hadj() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      {/* Two Cards Side by Side */}
      <div className="flex flex-wrap justify-center gap-6">
        
        {/* Card 1 - Kaaba */}
        <div className="card bg-base-100 image-full w-96 shadow-2xl hover:scale-105 transition-transform duration-300">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1470&auto=format&fit=crop"
              alt="Kaaba"
              className="object-cover"
            />
          </figure>
          <div className="card-body justify-end">
            <button
              className="btn btn-primary w-full"
              onClick={() => navigate('/kaaba')}
            >
              View the History  of  Kaaba
            </button>
          </div>
        </div>

        {/* Card 2 - Medina */}
        <div className="card bg-base-100 image-full w-96 shadow-2xl hover:scale-105 transition-transform duration-300">
          <figure>
            <img
              src="https://i.pinimg.com/736x/0c/29/c6/0c29c685332f0353490e1d976494e6dc.jpg"
              alt="Medina"
              className="object-cover"
            />
          </figure>
          <div className="card-body justify-end">
            <a
              href="https://en.wikipedia.org/wiki/Medina"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              View the History of Medina
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hadj
