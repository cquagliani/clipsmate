import React from 'react'
import Link from 'next/link'

const InvertButton = ({text, link}) => {
  return (
    <div>
        <Link className="border-2 bg-transparent border-pink rounded-2xl w-32 h-16 py-4 px-6 font-bold text-light" href={link}>{text}</Link>
    </div>
  )
}

export default InvertButton