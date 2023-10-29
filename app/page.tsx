import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col text-center justify-center items-center min-h-screen">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={110}
          height={110}
          className="rounded"
          priority
        />
      </div>
      <div>
        <h1 className="subpixel-antialiased text-3xl font-medium mt-2 mb-2">UNWISHINGMOON</h1>
      </div>
      <div>
        <span className="mb-2 font-light"><q>Be the change that you wish to see in the world.</q> &mdash; Mahatma Gandhi</span>
      </div>
      <div className='flex gap-8 mt-3 justify-center items-center dark:invert'>
        <Link href="https://www.twitch.tv/unwishingmoon" target='_blank'>
          <Image
            src="/icons/twitch.svg"
            alt="twitch icon"
            width={20}
            height={20}
            className='auto'
            priority
          />
        </Link>
        <Link href="https://www.twitter.com/unwishingmoon" target='_blank'>
          <Image
            src="/icons/twitter.svg"
            alt="twitch icon"
            width={20}
            height={20}
            priority
          />
        </Link>
        <Link href="https://discord.gg/McqatXEup9" target='_blank'>
          <Image
            src="/icons/discord.svg"
            alt="twitch icon"
            width={20}
            height={20}
            priority
          />
        </Link>
      </div>
    </main>
  )
}
