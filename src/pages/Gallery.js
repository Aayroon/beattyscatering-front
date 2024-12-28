/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Customfooter from '../components/Footer'
import image1 from '../images/1000208658.jpg'
import image2 from '../images/1000208615.jpg'
import image3 from '../images/1000208551.jpg'
import image4 from '../images/1000208644.jpg'
import image5 from '../images/1000208665.jpg'
import image6 from '../images/1000208639.jpg'
import image7 from '../images/1000085119.jpg'
import image8 from '../images/1000208564.jpg'
import image9 from '../images/1000208655.jpg'
import image10 from '../images/1000208669.jpg'
import image11 from '../images/292.jpg'
import image12 from '../images/1000208495.jpg'
import image13 from '../images/1000208603.jpg'
import image14 from '../images/1000208612.jpg'
import image15 from '../images/1000208678.jpg'
import image16 from '../images/1000208671.jpg'

const products = [
    {
        id: 1,
        /*name: 'Earthen Bottle',*/
        href: '#',
        /*price: '$48',*/
        imageSrc: image1,
        // imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        /*name: 'Nomad Tumbler',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image2,
        // imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        /*name: 'Focus Paper Refill',*/
        href: '#',
        /*price: '$89',*/
        imageSrc: image3,
        // imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image4,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image5,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 6,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image6,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 7,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image7,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 8,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image8,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 9,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image9,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 10,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image10,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 11,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image11,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 12,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image12,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 13,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image13,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 14,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image14,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 15,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image15,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 16,
        /*name: 'Machined Mechanical Pencil',*/
        href: '#',
        /*price: '$35',*/
        imageSrc: image16,
        // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function Gallery() {
    return (
        <div className="pages-section bg-cream">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-burgundy sm:text-4xl text-center">Gallery</h2>

                <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Customfooter />
        </div>
    )
}
