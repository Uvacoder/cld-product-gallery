import React, { useRef, useEffect, useState } from 'react'

type PGProps = {
  cloudName: string
}

declare global {
  interface Window {
      cloudinary:any;
  }
}

function ProductGallery({ cloudName }: PGProps) {
  const [cldName, setCldName] = useState<string>(cloudName)
  const [loaded, setLoaded] = useState(false)

  // const pgElement = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = 'https://product-gallery.cloudinary.com/all.js'
    // debugger;
    scriptTag.addEventListener('load', () => setLoaded(true))
    document.body.appendChild(scriptTag)
  }, [])

  useEffect(() => {
    if (!loaded) return
    // debugger;

    console.log('Component mounted')
    // const cld: any = window.cloudinary;
    const productGallery = window.cloudinary.galleryWidget({
      container: '#product-gallery',
      cloudName: cldName,
      mediaAssets: [
        { tag: 'electric_car_product_gallery_demo' },
        { tag: 'electric_car_product_gallery_demo', mediaType: 'video' },
        { tag: 'electric_car_360_product_gallery_demo', mediaType: 'spin' },
      ],
    })
    productGallery.render()
  }, [loaded])

  return (
    <>
      {/* <h4 className="mt-5 mb-5 text-center text-lg md:text-left">
        Use Cloudinary Upload Widget to Upload and share images.
      </h4> */}
      <div id="product-gallery" ></div>
    </>
  )
}
export default ProductGallery
