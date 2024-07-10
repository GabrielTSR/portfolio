import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'
import settings from '../../content/_settings.json'

export default function Footer() {
  return (
    <footer className={css.container}>
      <Container spacing={['verticalXXLrg', 'bottomLrg']}>
        <section className={css.sections}>
          <ul className={css.contacts}>
            <li>
              <h4>Contact Information</h4>
            </li>
            {content.contacts.map(({ type, value, url }, index) => {
              return (
                <li key={index}>
                  <a href={url} rel="noreferrer" target="_blank">
                    {type}
                    <Icon icon={['fad', 'arrow-up-right-from-square']} />
                  </a>
                  <p>{value}</p>
                </li>
              )
            })}
          </ul>
          <ul className={css.links}>
            <li>
              <h4>Address</h4>
            </li>
            <li>
              <p>
                City: {content.address.city}
              </p>
              <p>
                State: {content.address.state}
              </p>
              <p>
                Country: {content.address.country}
              </p>
            </li>
          </ul>
          <ul className={css.social}>
            <li>
              <h4>Social</h4>
            </li>
            <li className={css.socialList}>
              {content.social.map(({ url, icon }, index) => {
                return (
                  <a key={index} href={url} rel="noreferrer" target="_blank">
                    <Icon icon={['fab', icon]} />
                  </a>
                )
              })}
            </li>
          </ul>
        </section>
        <section className={css.github}>
          <a rel="noreferrer" target="_blank">
            <h5>{settings.portfolio.forkthis}</h5>
          </a>
        </section>
      </Container>
      <canvas id="gradient-canvas" className={''} data-transition-in></canvas>
    </footer>
  )
}
