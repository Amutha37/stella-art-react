// import React from 'react'

export const priceList = [
  {
    size: '8" x 10" ',
    person: 1,
    price: '310',
  },
  {
    size: '12" x 16" ',
    person: 1,
    price: '450',
  },
  {
    size: '16" x 20" ',
    person: 1,
    price: '610',
  },
  {
    size: ' ',
    person: 2,
    price: '650',
  },
  {
    size: '24" x 30" ',
    person: 1,
    price: '700',
  },
  {
    size: ' ',
    person: 2,
    price: '750',
  },
  {
    size: '24" x 36" ',
    person: 1,
    price: '730',
  },

  {
    size: '',
    person: 2,
    price: '780',
  },
]

export function PrintPrice() {
  //   let ind = 0
  return (
    <div className='table-container'>
      <p>ALL PRICES ARE IN AUDS.</p>
      <br />
      <p>
        Please note: All paintings require a non-refundable 50% deposit before
        starting.
      </p>
      <table className='dml_table' cellPadding={0} cellSpacing={0}>
        <thead className='sticky-thc'>
          <tr>
            <th>Size "inches"</th>
            <th>Person</th>
            <th>Price (A$)</th>
          </tr>
        </thead>
        <tbody>
          {priceList.map((item, i) => (
            <tr key={i}>
              <td>{item.size}</td>
              <td>{item.person}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
