'use client'

import {ArrowLongDownIcon, ArrowLongRightIcon} from '@heroicons/react/20/solid'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import {useRef, useState} from 'react'

const lists = [
  {
    heading: 'About me',
    elements: [
      {caption: 'Engineering background'},
      {caption: 'My ability to learn'},
      {caption: 'Going down rabbitholes'},
      {caption: 'Design – online & offline'},
      {caption: 'Private'}
    ]
  },
  {
    heading: 'My work',
    elements: [{caption: 'LW Works GmbH'}, {caption: 'Past projects'}, {caption: 'Open source'}, {caption: 'Teaching'}]
  }
]

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const {scrollY} = useScroll()
  const [show, setShow] = useState<boolean>(false)

  useMotionValueEvent(scrollY, 'change', (scroll) => {
    const top = ref.current?.getBoundingClientRect().top ?? 0
    setShow(top < window.innerHeight / 2)
  })

  const sectionVariants = {
    hidden: {opacity: 0, transition: {staggerChildren: 0.25}},
    show: {opacity: 1, transition: {staggerChildren: 0.25}}
  }
  const containerVariants = {
    hidden: {opacity: 0, y: 20, transition: {duration: 0.5}},
    show: {opacity: 1, y: 0, transition: {duration: 1}}
  }
  const listVariants = {
    hidden: {},
    show: {transition: {staggerChildren: 0.25}}
  }
  const elementVariants = {
    hidden: {opacity: 0, y: 20, transition: {duration: 0.5}},
    show: {opacity: 1, y: 0, transition: {duration: 0.5}}
  }

  return (
    <motion.div ref={ref} variants={sectionVariants} initial="hidden" animate={show ? 'show' : 'hidden'} className="relative mt-32 grid grid-cols-2">
      {lists.map(({heading, elements}, index) => (
        <motion.div key={index} variants={containerVariants}>
          <h2 className="font-display text-black text-3xl">{heading}</h2>
          <motion.ul variants={listVariants} initial="hidden" animate={show ? 'show' : 'hidden'} className="flex flex-col gap-2 mt-8 text-lg">
            {elements.map(({caption}, index) => (
              <motion.li key={index} variants={elementVariants}>
                <button className="flex items-center gap-2 group hover:text-black">
                  <div className="relative w-5 h-5 overflow-hidden">
                    <ArrowLongRightIcon className="absolute inset-0 text-indigo-400 group-hover:translate-x-5 transition-transform duration-150 group-hover:duration-300 delay-75 group-hover:delay-0" />
                    <ArrowLongDownIcon className="absolute inset-0 text-indigo-400 -translate-y-5 group-hover:translate-y-0 transition-transform duration-150 group-hover:duration-300 group-hover:delay-100" />
                  </div>
                  <span>{caption}</span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.div>
  )
}
