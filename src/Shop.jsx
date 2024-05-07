import React from 'react'
import './styles/shop.css'
import { imagesto } from './assets/images'


export const Shop = () => {
  return (
    <>
      <div className='container'>
        <section className='pic'>
          <article>
            <img src={imagesto.img11} alt='bati-dora' />
          </article>
          <article>
            <img src={imagesto.img22} alt='bati-dora' />
          </article>
          <article>
            <img src={imagesto.img11} alt='bati-dora' />
          </article>
          <article>
            <img src={imagesto.img22} alt='bati-dora' />
          </article>
          <article>
          <img src={imagesto.img11} alt='bati-dora'/>
        </article>
        </section>
      </div>
    </>
  )
}
