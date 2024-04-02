import Image from 'next/image'
import LW from '../../public/logos/lw-works.svg'
import Github from '../../public/logos/github.svg'
import X from '../../public/logos/x.svg'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="relative mt-16 py-16 border-t border-slate-100">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <Link href="https://lw.works/" target="_blank">
            <Image src={LW} alt="LW Works" className="h-6 w-auto" />
          </Link>
          <Link href="https://github.com/lukaswiesehan/tailwind.lw.works" target="_blank">
            <Image src={Github} alt="Github" className="h-6 w-auto" />
          </Link>
          <Link href="https://twitter.com/lukaswiesehan" target="_blank">
            <Image src={X} alt="Twitter" className="h-6 w-auto" />
          </Link>
        </div>
        <p className="text-slate-400 text-sm">
          Credits:{' '}
          <Link href="https://ui.aceternity.com/components/aurora-background" className="hover:text-black">
            Acernity UI
          </Link>
          ,{' '}
          <Link href="https://lunarui.dev/components/react/scroll-animations/text-reveal" className="hover:text-black">
            Lunar UI
          </Link>
        </p>
      </div>
    </div>
  )
}
