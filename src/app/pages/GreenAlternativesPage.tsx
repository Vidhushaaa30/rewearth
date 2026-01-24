import { ExternalLink, Star, Leaf, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const brands = [
  {
    id: 1,
    name: 'Patagonia',
    rating: 4.8,
    certifications: ['Fair Trade', 'Organic Cotton', 'Recycled Materials'],
    image: 'https://images.unsplash.com/photo-1545007805-a44ee83438fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGNsb3RoaW5nJTIwd2FyZHJvYmV8ZW58MXx8fHwxNzY5MDg3MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Outdoor clothing company committed to environmental activism and sustainable practices',
    website: 'https://patagonia.com',
  },
  {
    id: 2,
    name: 'Reformation',
    rating: 4.6,
    certifications: ['Carbon Neutral', 'Sustainable Fabrics', 'Water Conservation'],
    image: 'https://images.unsplash.com/photo-1749813991859-8953e5b4dd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGZhc2hpb258ZW58MXx8fHwxNzY4OTg5OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Fashion brand focused on sustainability and transparency in every step of production',
    website: 'https://reformation.com',
  },
  {
    id: 3,
    name: 'Everlane',
    rating: 4.5,
    certifications: ['Transparent Pricing', 'Ethical Factories', 'Renewable Energy'],
    image: 'https://images.unsplash.com/photo-1586363090844-099253d6a1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY290dG9uJTIwc2hpcnR8ZW58MXx8fHwxNzY4OTg5OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern basics with radical transparency and ethical manufacturing',
    website: 'https://everlane.com',
  },
  {
    id: 4,
    name: 'Tentree',
    rating: 4.7,
    certifications: ['Tree Planting', 'Organic Materials', 'B Corp Certified'],
    image: 'https://images.unsplash.com/photo-1556630184-066f7ac4e15f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2hpdGUlMjBjbG90aGluZ3xlbnwxfHx8fDE3NjkwODcwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sustainable apparel brand that plants 10 trees for every item purchased',
    website: 'https://tentree.com',
  },
  {
    id: 5,
    name: 'People Tree',
    rating: 4.4,
    certifications: ['Fair Trade', 'GOTS Certified', 'Slow Fashion'],
    image: 'https://images.unsplash.com/photo-1545007805-a44ee83438fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGNsb3RoaW5nJTIwd2FyZHJvYmV8ZW58MXx8fHwxNzY5MDg3MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pioneer of Fair Trade fashion with eco-friendly and ethical collections',
    website: 'https://peopletree.co.uk',
  },
  {
    id: 6,
    name: 'Outerknown',
    rating: 4.6,
    certifications: ['Fair Labor', 'Sustainable Materials', 'Circular Economy'],
    image: 'https://images.unsplash.com/photo-1749813991859-8953e5b4dd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGZhc2hpb258ZW58MXx8fHwxNzY4OTg5OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Premium sustainable surf and lifestyle brand co-founded by Kelly Slater',
    website: 'https://outerknown.com',
  },
];

export function GreenAlternativesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Green Alternatives</h1>
        <p className="mt-2 text-muted-foreground">
          Discover sustainable brands that align with your values
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2">
        <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          All Brands
        </button>
        <button className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
          Fair Trade
        </button>
        <button className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
          Organic
        </button>
        <button className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
          Recycled
        </button>
        <button className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
          B Corp
        </button>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-video overflow-hidden bg-muted">
              <ImageWithFallback
                src={brand.image}
                alt={brand.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{brand.name}</h3>
                  <div className="mt-1 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium text-foreground">{brand.rating}</span>
                    <span className="text-sm text-muted-foreground">/5.0</span>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{brand.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {brand.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    <Leaf className="h-3 w-3" />
                    {cert}
                  </span>
                ))}
              </div>

              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                <span>Visit Website</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Info Card */}
      <div className="rounded-xl bg-primary/5 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Leaf className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">Why Choose Sustainable Brands?</h3>
            <p className="text-sm text-muted-foreground">
              Sustainable fashion brands prioritize ethical production, use eco-friendly materials, and
              ensure fair wages for workers. By supporting these brands, you're contributing to a more
              sustainable future while getting quality products that last longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
