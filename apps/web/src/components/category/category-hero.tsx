import Image from 'next/image'

interface CategoryHeroProps {
  category: {
    name: string
    description: string
    image: string
  }
}

export function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-96 lg:h-[500px]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-white lg:text-6xl mb-4">
                {category.name}
              </h1>
              <p className="text-lg text-white/90 lg:text-xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
