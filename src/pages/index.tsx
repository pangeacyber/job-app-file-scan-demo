import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ApplicationFormComponent } from '@/components/application-form-component'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ApplicationFormComponent />
      <Toaster />
    </>
  )
}
