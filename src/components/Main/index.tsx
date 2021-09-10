import React from 'react'

export interface MainProps {
  title: string
}

const Main: React.FC<MainProps> = ({ title = 'Totem App' }) => {
  return (
    <main>
      <h1 className="text-9xl font-bold">{title}</h1>
    </main>
  )
}

export default Main
