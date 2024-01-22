import React from 'react'

export default function Layout(
  {children}:{children:React.ReactNode}
) {
  return (
    <section>
      Esto es un layout
      {children}
    </section>
  )
}
