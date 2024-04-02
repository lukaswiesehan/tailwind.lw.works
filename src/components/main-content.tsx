'use client'

import Link from 'next/link'
import Image from 'next/image'
import Office from '../../public/images/office.jpg'
import Fire from '../../public/images/fire.jpg'
import Next from '../../public/logos/next.svg'
import Tailwind from '../../public/logos/tailwind.svg'
import Motion from '../../public/logos/framer-motion.svg'
import Radix from '../../public/logos/radix.svg'
import Headless from '../../public/logos/headlessui.svg'
import Contentlayer from '../../public/images/contentlayer.jpg'
import Urlbox from '../../public/images/urlbox.jpg'
import Effect from '../../public/images/effect.jpg'
import {CursorArrowRaysIcon} from '@heroicons/react/24/solid'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import {useRef, useState} from 'react'

export const MainContent = () => {
  const ref = useRef<HTMLDivElement>(null)
  const {scrollY} = useScroll()
  const [show, setShow] = useState<boolean>(false)

  useMotionValueEvent(scrollY, 'change', (scroll) => {
    const top = ref.current?.getBoundingClientRect().top ?? 0
    setShow(top < window.innerHeight / 2)
  })

  const variants = {
    hidden: {opacity: 0, y: 10, transition: {duration: 0.5}},
    show: {opacity: 1, y: 0, transition: {duration: 1}}
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={show ? 'show' : 'hidden'}
      className="relative mt-32 prose sm:prose-lg prose-li:my-0 text-slate-500 prose-headings:text-black prose-headings:font-display prose-a:text-black prose-img:rounded-xl prose-img:shadow-lg prose-img:border-4 prose-img:border-white/50 prose-img:-mx-1 prose-strong:text-black"
    >
      <h2>About me</h2>
      <p>
        I live and work in a small town near Hamburg in Germany. As this application style is obviously inspired by the one from Robin,{' '}
        <Link href="https://x.com/adamwathan/status/1770253702391026010?s=20" target="_blank">
          shared by Adam on X
        </Link>
        , let&apos;s note that my timezone would make a great fit for working together with Robin.
      </p>
      <h3>TL;DR</h3>
      <p>These are the most important things you need to know about me:</p>
      <ul>
        <li>
          Originally, I&apos;m a <strong>Mechatronics Engineer</strong>
        </li>
        <li>
          In web development, I have the most fun when <strong>exploring new things</strong>
        </li>
        <li>
          I <strong>love to design in code</strong> and get lost in the details
        </li>
        <li>My tech stack: Next.js, TailwindCSS, Framer Motion, Radix UI, Headless UI</li>
        <li>I love interior design and do some clothing and electronics design for fun</li>
      </ul>
      <h3>Design & Engineering Background</h3>
      <p>
        Originally, I&apos;m a Mechatronics Engineer, which is an interdisciplinary degree bridging the gap between mechanical, electric and software
        engineering. Besides the technical skills, I also learned a lot about project management and communication at University.
      </p>
      <p>
        At the same time, I was always interested in Design. I started graphic design back in High School, designing prints for local events. Later on,
        while learning software engineering at University, I discovered Web Design as the perfect blend of engineering and design for me.
      </p>
      <h3>Ability to Learn</h3>
      <p>
        During my studies I realized that learning was somewhat easier for me than for most of the others. I was awarded the best Mechatronics degree in
        2021.
      </p>
      <p>
        After finishing the degree, I decided to give it a shot on building websites full-time. Before, I had always been building and designing as a side
        hustle. I could make a good living with these self-tought skills from then on.
      </p>
      <h3>Going down Rabbitholes</h3>
      <p>
        In web development, I noticed that I have the most fun when exploring new things. When learning, I get often get so fascinated that I even forget
        to eat until the end of the day. The last time this happend was when I learned to use{' '}
        <Link href="https://storybook.js.org/" target="_blank">
          Storybook
        </Link>{' '}
        for a freelance client this march.
      </p>
      <p>
        By the way, Storybook is a great tool for me as a Design Engineer because it allows me to build design systems right inside the code. I love to
        design in code and get lost in the details. Unfortunately, I can&apos;t do this to the extend I&apos;d like in client projects because of tight
        budgets.
      </p>
      <h2>My Work</h2>
      <p>As already mentioned, my design and development skills are mostly self-taught. This is my tech stack most of the time.</p>
      <div className="flex flex-wrap not-prose gap-8 items-center w-full my-8">
        <Image src={Next} alt="Next.js" className="h-4 w-auto" />
        <Image src={Tailwind} alt="TailwindCSS" className="h-4 w-auto" />
        <Image src={Motion} alt="Framer Motion" className="h-5.5 w-auto" />
        <Image src={Radix} alt="Radix UI" className="h-5 w-auto" />
        <Image src={Headless} alt="Headless UI" className="h-5.5 w-auto" />
      </div>
      <p>
        Besides learning those hard skills, I&apos;m having a lot of fun learning what it takes to build a business. After freelancing full-time for around
        3 years, I just founded a full-blown company: LW Works GmbH. I have learned a lot about time management, psychology, money and so many other things
        along the way and I&apos;m more motivated than ever to build amazing online experiences.
      </p>
      <p>
        <Link href="https://lw.works/" target="_blank">
          My company website
        </Link>{' '}
        is a good example of what happens, when I have time & budget to get lost in some details. Actually, it is built fully in code. I only did a mockup
        of the hero section last year, but all the rest was designed on the go. Here is the{' '}
        <Link href="https://github.com/lukaswiesehan/lw.works/tree/main" target="_blank">
          repository on GitHub
        </Link>{' '}
        – I assume you would want to have a look at my coding style.
      </p>
      <h3>Past Projects</h3>
      <p>
        In recent years, I mostly worked on projects with clients from the SaaS/Software/Developer space. I think that is the space I identify with myself,
        but also because my design style looks somewhat technical. Here are some of the bigger clients/projects.
      </p>
      <h4>Urlbox</h4>
      <p>
        I did a full website relaunch for{' '}
        <Link href="https://urlbox.com/" target="_blank">
          Urlbox
        </Link>{' '}
        a while ago. Some of the pages as well as the docs have also been updated in the meantime, but most of what you see online on the marketing page is
        my work.
      </p>
      <Image src={Urlbox} alt="Urlbox website" />
      <h4>Contentlayer</h4>
      <p>
        One of the developer tools I built the website for is{' '}
        <Link href="https://contentlayer.dev/" target="_blank">
          Contentlayer
        </Link>
        . It was one of my earlier projects and from time to time, I still contribute to the site as it&apos;s open-source.
      </p>
      <Image src={Contentlayer} alt="Contentlayer docs" />
      <p>Contentlayer is great tool by the way. I actually use it in many other projects to handle MDX content.</p>
      <h4>Effect</h4>
      <p>
        The most recent project is the{' '}
        <Link href="https://effect.website/" target="_blank">
          Effect
        </Link>{' '}
        website. I designed and built the site including blog and docs pages. I still do some open-source contributions here from time to time.
      </p>
      <Image src={Effect} alt="Effect website" />
      <h4>Stackbit</h4>
      <p>
        I designed and built the documentation site of{' '}
        <Link href="https://www.stackbit.com/" target="_blank">
          Stackbit
        </Link>
        . After being acquired by Netlify, the product as well as the docs pages have been reworked.
      </p>
      <h4>Open-Source</h4>
      <p>
        To be honest, I don&apos;t do as many open-source contributions as I would like to do. I really like helping out and teaching others, but most of
        the time, I have been too busy with my freelance projects. So I only do some smaller contributions to the Contentlayer and Effect sites as the paid
        work here is finished. A tiny project I recently started is a chat widget for Next.js websites that only uses the Slack API. I&apos;m planning to
        maintain this as an open-source project so that other developers can make use of it on their sites.
      </p>
      <h2>Offline</h2>
      <p>
        Besides designing and building digitally, I absolutely love interior design and also do a little clothing & electronics design for fun. Here&apos;
        a little peek at my office space:
      </p>
      <Image src={Office} alt="LW Works Office" />
      <p>
        I spend a lot of my free time at the volunteer fire department, where I am one of the two commanders. This is the biggest fire we put out with the
        team.
      </p>
      <Image src={Fire} alt="Firefighting" />
      <p>When there&apos;s some time left, I also like to go running or cycling. I actually did two marathons already!</p>
      <hr className="border-slate-100" />
      <p className="text-center">I hope this got you a little curious. If so,</p>
      <h2 className="text-5xl text-center text-indigo-500 font-display not-prose">
        <Link href="https://lw.works/en/contact/lukas" target="_blank" className="relative">
          <span>let&apos;s chat!</span>
          <CursorArrowRaysIcon className="h-8 text-indigo-500/25 absolute not-sr-only -right-4 -bottom-2" />
        </Link>
      </h2>
    </motion.div>
  )
}
