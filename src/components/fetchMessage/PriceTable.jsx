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
    price: '650',
  },
  {
    size: ' ',
    person: 2,
    price: '850',
  },
  {
    size: '24" x 30" ',
    person: 1,
    price: '810',
  },
  {
    size: ' ',
    person: 2,
    price: '1,000',
  },
  {
    size: '24" x 36" ',
    person: 1,
    price: '850',
  },

  {
    size: '',
    person: 2,
    price: '1,100',
  },
]

export function PrintPrice() {
  //   let ind = 0
  return (
    <div className='table-container'>
      {/* <p>ALL PRICES ARE IN AUD$</p> */}
      <br />
      <p>
        Please note: All paintings require a non-refundable 50% deposit before
        starting.
      </p>
      <br></br>
      <p>
        Portrait Price painted in oils on ready to hang canvas or wood panel.
      </p>

      <table className='dml_table' cellPadding={0} cellSpacing={0}>
        <thead className='sticky-thc'>
          <tr>
            <th>Size "inches"</th>
            <th>Person</th>
            <th>AUD</th>
          </tr>
        </thead>
        <tbody>
          {priceList.map((item, i) => (
            <tr key={i}>
              <td>{item.size}</td>
              <td>{item.person}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>(Please contact me if you want to enquire price on other sizes).</p>
        <br></br>
        <p>
          * All other paintings/commissions you may be considering, please
          contact me and I will get back to you as soon as possible.
        </p>
      </div>
    </div>
  )
}
