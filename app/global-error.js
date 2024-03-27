'use client'

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <h2>oops {error}</h2>
      </body>
    </html>
  )
}
