import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Customfooter from '../components/Footer'
import myImage from '../images/1000208591.jpg';




export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className="pages-section bg-ivory">
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 lg:w-full lg:max-w-2xl">
              <svg
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-ivory lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Bringing gourmet experiences to your celebrations.{' '}
                      <a href="about" className="whitespace-nowrap font-semibold text-burgundy">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Why choose us <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-burgundy sm:text-6xl">
                    Savor the Taste of Excellence
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    From intimate gatherings to grand celebrations, we provide top-notch catering services for weddings, corporate events, parties, and more.
                    Our dedicated team brings culinary artistry and exceptional service to your special events, making them truly unforgettable.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                        href="contact"
                        className="rounded-md bg-burgundy px-3.5 py-2.5 text-sm font-semibold text-ivory shadow-sm hover:bg-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
                    >
                      Get a Quote
                    </a>
                    <a href="services" className="text-sm font-semibold leading-6 text-burgundy hover:text-white hover:bg-[#800020] p-2 rounded">
                      Explore Services <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-ivory lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
                className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                src={myImage}
                alt=""
            />
          </div>
        </div>
        <Customfooter />
      </div>
  );
}
