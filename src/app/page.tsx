import {AboutSection} from '@/components/about-section'
import {IntroSection} from '@/components/intro-section'

export default function Home() {
  return (
    <main className="w-full max-w-3xl mx-auto px-6 sm:px-12 lg:px-16">
      <IntroSection />
      <AboutSection />
      <section className="my-96 py-96"></section>
      <section className="my-96 py-96"></section>
      <section className="my-96 py-96"></section>
    </main>
  )
}
