import {Footer} from '@/components/footer'
import {Intro} from '@/components/intro'
import {MainContent} from '@/components/main-content'

export default function Home() {
  return (
    <main className="w-full max-w-3xl mx-auto px-6 sm:px-12 lg:px-16">
      <Intro />
      <MainContent />
      <Footer />
    </main>
  )
}
