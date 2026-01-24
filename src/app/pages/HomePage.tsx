import { Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Welcome back!</h1>
        <p className="mt-2 text-muted-foreground">Track your sustainable fashion journey</p>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary p-8">
        <div className="relative z-10 max-w-xl">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">
            Your Impact This Month
          </h2>
          <p className="mb-6 text-foreground/80">
            You've saved 120L of water and reduced 5.2kg of CO₂ emissions through sustainable choices
          </p>
          <button className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90">
            View Full Impact
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1675225660576-64a2cafc7fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50cyUyMG5hdHVyZXxlbnwxfHx8fDE3NjkwMjI1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Green nature"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="text-2xl font-semibold text-foreground">42</div>
          <div className="text-sm text-muted-foreground">Wardrobe Items</div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div className="text-2xl font-semibold text-foreground">8</div>
          <div className="text-sm text-muted-foreground">Items Swapped</div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div className="text-2xl font-semibold text-foreground">156</div>
          <div className="text-sm text-muted-foreground">Eco Points</div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div className="text-2xl font-semibold text-foreground">12</div>
          <div className="text-sm text-muted-foreground">Achievements</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556630184-066f7ac4e15f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2hpdGUlMjBjbG90aGluZ3xlbnwxfHx8fDE3NjkwODcwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Clothing item"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Added organic cotton shirt</div>
                <div className="text-sm text-muted-foreground">2 hours ago</div>
              </div>
              <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                +5 points
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
