import React, { useEffect, useRef } from 'react'

function ProductGallery(cloudName) {
//   const pgElement = useRef();
//   useEffect(() => {
//     const productGallery = cloudinary.galleryWidget({
//       container: pgElement.current,
//       cloudName: cloudName,
//       mediaAssets: [
//         { tag: 'electric_car_product_gallery_demo' }, // by default mediaType: "image"
//         { tag: 'electric_car_product_gallery_demo', mediaType: 'video' },
//         { tag: 'electric_car_360_product_gallery_demo', mediaType: 'spin' },
//       ]
//     })
//     productGallery.render();
//   }, []);
  return (
    <>
      <h4 className="mt-5 mb-5 text-center text-lg md:text-left">
        Use Cloudinary Upload Widget to Upload and share images.
      </h4>
      <div
        id="my-gallery"
        // ref={pgElement}
        style="max-width: 80%; margin: auto;"
      ></div>
    </>
  )
}
export default ProductGallery
