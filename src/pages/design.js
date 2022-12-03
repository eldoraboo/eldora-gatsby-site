import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import config from '../utils/config'

const images = [
  { url: '/instagram/tags-green.png', title: 'SCAMP Instagram Post #1' },
  { url: '/instagram/signup.png', title: 'SCAMP Instagram Post #2' },
  { url: '/instagram/teaser.png', title: 'SCAMP Instagram Post #3' },
  { url: '/logo_design/Colour_JS_Ver2.png', title: 'FOPCC Logo' },
  { url: '/merch_design/Front.png', title: 'FOPCC Shirt Design #1' },
  { url: '/merch_design/Back.png', title: 'FOPCC Shirt Design #2' },
  { url: '/merch_design/GameBoyD.png', title: 'FOPCC Totebag Design' },
  { url: '/merch_design/sds_tee.jpg', title: 'SDS Shirt Design' },
]

export default function Design() {
  const title = 'Design'

  return (
    <div>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <Hero title={title} color="red" />
      </div>

      <section className="segment">
        <div className="container">
          <div className="image-preview">
            {images.map((image) => {
              return (
                <div className="card" key={image.url}>
                  <a href={image.url} target="_blank" rel="noreferrer">
                    <h2>{image.title}</h2>

                    <div
                      className="image-thumbnail"
                      style={{ backgroundImage: `url('${image.url}')` }}
                      alt={image.title}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

Design.Layout = Layout
