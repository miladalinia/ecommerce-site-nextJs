'use client';
import { useEffect, useState } from "react";

export default function Dashboard({ heroName }: { heroName: string }) {
  const [name, setName] = useState('')
  if (heroName === 'joker') {
    throw new Error('joker Not a hero')
  }
  useEffect(() => {
    const sayHello = async (): Promise<{ name: string }> => {
      let condition: boolean = true;
      return new Promise((resolve, reject) => {
        if (condition) {
          resolve({ name: "Milad" })
        }
        reject("Rejected!")
      })
    }

    sayHello()
      .then(res => setName(res.name))
      .catch(err => console.log(err))
  }, [])

  
  return (
    <>
      <h1>Dashboard</h1>
      <h1 className="text-3xl">{name}</h1>
    </>
  )
}
