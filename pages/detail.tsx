import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const DynamicProductGallery = dynamic(
  () => import('../components/ProductGallery'),
  {
    ssr: false,
  }
)

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Electric Car</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-5 text-6xl font-bold">Electric Car</h1>

      <div className="container mx-auto px-4">
        <div className="cld-product-images">
          {' '}
          <DynamicProductGallery cloudName="demo" />
        </div>
        <section className="cld-product-text">
          <div className='mb-4 mt-20'>
            Once the body length deconstructed the NQR. Once the 4WD braked the
            engine! The Nissan developed the heavy duty body. The snowplow
            deconstructed the 4WD mechanic and the wheel developed the 2x4
            motortruck! The van accelerated the durable WorkStar 7400. The
            tough, shock-resistant City Express dumped therefore the cargo
            manufactured the aluminum chipper body. The truck stop upfitted the
            galvanized Nissan while the cylinder totaled the shock-resistant
            Hino! The shock-resistant hooklift body was upfitted by the vehicle.
          </div>
          <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Add to Cart
          </button>
        </section>
      </div>

      {/* <DynamicProductGallery cloudName="demo" /> */}

      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <section className="md-flex mb-4 mt-4 w-full">
          <section className="h-12 bg-gray-400 md:w-1/2">hello</section>
          <section className="h-12 bg-gray-500 md:w-1/2">there</section>
        </section>

        <div className="grid grid-cols-1 gap-4 bg-pink-400 p-4 xl:grid-cols-2 2xl:grid-cols-2">
          <div className="w-full bg-yellow-400 p-4">
           Column 1
          </div>
          <div className="w-full bg-gray-400 p-4">Column 2</div>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/logo.png" alt="Cloudinary" width={24} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
