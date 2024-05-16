'use client'
import { useState } from "react"
import Card from "@/components/Card";

export default function Home({ searchParams }) {
  const [isVisible, setIsVisible] = useState(true);

  const [names, setNames] = useState(['John', 'Sarah', 'Alex', 'George'])

  const name = 'Vlad'
  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const handleAdd = () => {
    setNames([...names, 'New Element'])
  }

  const cards = isVisible && names.map((name, index) => <Card key={index}>{name}</Card>)

  console.log(searchParams);

  if (searchParams.error) throw new Error('hello!')
  return (
    <div className="space-y-4">
      <div>Hello, {name}!</div>
      {cards}
      <div className="flex space-x-4">
        <button onClick={handleClick}>
          {isVisible ? 'Hide' : 'Show'}
        </button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
