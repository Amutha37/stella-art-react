import React, { Fragment } from 'react'
import SlideControler from '../SlideControler'
import { MessageForSale } from '../../../components/fetchMessage/FetchMessage'
import { QuotesWildLife } from '../../../components/fetchMessage/FetchMessage'
import { WildLifeImages } from '../../../components/Images/Images'
import Footer from '../../Footer/Footer'

const BirdAnimal = () => {
  const PrintMessage = MessageForSale()
  const PrintQuotes = QuotesWildLife()

  return (
    <Fragment>
      <SlideControler
        slideImages={WildLifeImages}
        PrintMessage={PrintMessage}
        PrintQuotes={PrintQuotes}
      />

      <Footer />
    </Fragment>
  )
}

export default BirdAnimal
