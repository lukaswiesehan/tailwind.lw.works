'use client'

import {TextReveal} from '@/components/text-reveal'
import {cn} from '@/utils/cn'
import Image from 'next/image'
import Lukas from '../../public/images/lukas.jpg'
import {HandRaisedIcon} from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'

const text = `a self-taught Design Engineer from Germany. I have been self-employed for over 3 years now, building websites for software startups most of the time.`

export const Intro = () => {
  return (
    <section className="relative text-lg sm:text-xl">
      <TextReveal body={text} className="h-[36rem]">
        {(tokens: any) => (
          <div className="sticky top-[28rem]">
            <div className="flex justify-between items-center mb-16">
              <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.5, ease: 'easeInOut'}}}>
                <div className="mb-1 flex items-center space-x-4 font-mono text-sm sm:text-lg uppercase text-indigo-500 dark:text-indigo-400 sm:mb-3">
                  <span>Design Engineer</span>
                  <span className="text-black/20 dark:text-white/20">{'///'}</span>
                </div>
                <div className="font-display text-2xl sm:text-5xl text-black">Lukas Wiesehan</div>
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 1.5, ease: 'easeInOut', delay: 0.3}}}
                className="rounded-full aspect-square h-20 sm:h-32 bg-white/50 backdrop-blur shadow-xl shadow-slate-500/10 p-1 sm:p-2"
              >
                <div className="relative h-full aspect-square rounded-full overflow-hidden border border-indigo-400">
                  <Image src={Lukas} alt="Lukas Wiesehan" fill className="object-cover object-center" />
                </div>
              </motion.div>
            </div>
            <div className="leading-normal">
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0, transition: {duration: 1.5, ease: 'easeOut', delay: 1}}}
                className="mb-4"
              >
                <span>Hey Adam & Steve!</span>
                <span className="inline-block animate-wave origin-bottom ml-3 -mb-1">
                  <HandRaisedIcon className="h-6 text-indigo-500/25 -scale-x-100" />
                </span>
              </motion.div>
              <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0, transition: {duration: 1.5, ease: 'easeOut', delay: 1.3}}}>
                <span>{`I am Lukas, `}</span>
                {tokens.map((token: any, index: number) => (
                  <TextReveal.Token key={index} index={index}>
                    {(isActive: boolean) => (
                      <span
                        className={cn(
                          {
                            'opacity-20': !isActive
                          },
                          'transition'
                        )}
                      >
                        {token}
                      </span>
                    )}
                  </TextReveal.Token>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </TextReveal>
    </section>
  )
}
