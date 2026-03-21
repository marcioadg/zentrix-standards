import { TopBar } from './components/TopBar'
import { Sidebar } from './components/Sidebar'
import { AllSections } from './components/Sections'

export default function Home() {
  return (
    <>
      <TopBar />
      <Sidebar />
      <main className="ml-[240px] mt-[48px] p-[24px] max-w-[1200px]">
        <h1 className="text-[24px] font-semibold leading-[32px] mb-[8px]" style={{ color: 'var(--text-primary)' }}>
          Design System
        </h1>
        <p className="text-[13px] mb-[32px]" style={{ color: 'var(--text-secondary)' }}>
          The complete visual language for all Zentrix ecosystem products.
        </p>
        <AllSections />
        <div className="h-[64px]" />
      </main>
    </>
  )
}
