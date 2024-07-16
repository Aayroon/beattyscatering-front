import {
    HeartIcon,
    BriefcaseIcon,
    GiftIcon,
    AcademicCapIcon,
    UserGroupIcon,
    TrophyIcon,
    ShoppingBagIcon,
    SparklesIcon,
    StarIcon,
    HomeIcon,
    LightBulbIcon,
    FireIcon,
  } from '@heroicons/react/24/outline'

  import Customfooter from '../components/Footer'
  
  const features = [
    {
      name: 'Weddings',
      description: 'Celebrate your special day with our bespoke wedding catering services, ' +
          'offering elegant and personalized menus to make your wedding unforgettable.',
      icon: HeartIcon,
    },
    {
      name: 'Corporate Events',
      description: 'Impress your colleagues and clients with our professional corporate event catering, ' +
          'featuring a variety of options for meetings, conferences, and office parties.',
      icon: BriefcaseIcon,
    },
    {
      name: 'Birthday Parties',
      description: 'Make your birthday celebration extra special with our tailored catering services, ' +
          'offering delicious menus that cater to all tastes and preferences.',
      icon: GiftIcon,
    },
    {
      name: 'Graduation Parties',
      description: 'Celebrate academic achievements with our graduation party catering, ' +
          'offering a range of festive and delicious menu options.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Family Reunions',
      description: 'Bring the family together with our family reunion catering, ' +
          'offering hearty and home-style dishes that everyone will enjoy.',
      icon: UserGroupIcon,
    },
    {
      name: 'Sports Events',
      description: 'Fuel your team and fans with our sports event catering, ' +
          'offering a variety of hearty and satisfying menu options.',
      icon: TrophyIcon,
    },
      {
          name: 'Baby Shower',
          description: 'Celebrate the upcoming arrival with our baby shower catering, ' +
              'offering sweet and savory options that delight guests of all ages.',
          icon: ShoppingBagIcon,
      },
      {
          name: 'Bridal Shower',
          description: 'Treat the bride-to-be to a delightful bridal shower with our elegant and themed catering options, ' +
              'perfect for a memorable gathering.',
          icon: SparklesIcon,
      },
      {
          name: 'Anniversary Celebrations',
          description: 'Commemorate your anniversary with a romantic dining experience, ' +
              'complete with a custom menu and impeccable service.',
          icon: StarIcon,
      },
      {
          name: 'Retirement Parties',
          description: 'Honor the retiree with a special event featuring our catering, ' +
              'providing delicious food and exceptional service.',
          icon: HomeIcon,
      },
      {
          name: 'Charity Events',
          description: ' Make your charity event a success with our comprehensive catering services, ' +
              'offering delicious menus that support your cause.',
          icon: LightBulbIcon,
      },
      {
          name: 'Picnic Events',
          description: 'Savor an outdoor event, featuring a selection of gourmet delights, perfect for a delightful and laid-back gathering.',
          icon: FireIcon,
      },
  ]
  
  export default function Services() {
      return (
          <div className="relative bg-cream py-24 sm:py-32 lg:py-40">
              <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                  <h2 className="text-lg font-semibold text-gold">Our Services</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-burgundy sm:text-4xl">
                      Tailored Catering for Every Event
                  </p>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-gray-600">
                      Delve into our comprehensive suite of catering services, crafted to transform your event into an unforgettable occasion. Whether you're hosting a small, intimate gathering or a large, grand celebration, our versatile options are designed to cover every aspect, ensuring a memorable experience for all.
                  </p>
                  <div className="mt-20">
                      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                          {features.map((feature) => (
                              <div key={feature.name} className="pt-6">
                                  <div className="flow-root rounded-lg bg-white px-6 pb-8 shadow-lg">
                                      <div className="-mt-6">
                                          <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-burgundy p-3 shadow-lg">
                        <feature.icon className="h-8 w-8 text-gold" aria-hidden="true" />
                      </span>
                                          </div>
                                          <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-burgundy">
                                              {feature.name}
                                          </h3>
                                          <p className="mt-5 text-base leading-7 text-gray-600">
                                              {feature.description}
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
              <Customfooter />
          </div>
      );
  }
  