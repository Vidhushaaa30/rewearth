import { Droplets, Leaf, Recycle, Award, TrendingUp } from 'lucide-react';

const achievements = [
  { id: 1, name: 'Water Warrior', description: 'Saved 1000L of water', icon: Droplets, unlocked: true },
  { id: 2, name: 'Carbon Cutter', description: 'Reduced 10kg CO₂', icon: Leaf, unlocked: true },
  { id: 3, name: 'Swap Master', description: 'Completed 10 swaps', icon: Recycle, unlocked: true },
  { id: 4, name: 'Eco Champion', description: 'Reached 200 eco points', icon: Award, unlocked: false },
  { id: 5, name: 'Sustainable Star', description: '30 day streak', icon: TrendingUp, unlocked: false },
  { id: 6, name: 'Green Guru', description: '50 wardrobe items', icon: Leaf, unlocked: false },
];

export function ImpactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Environmental Impact</h1>
        <p className="mt-2 text-muted-foreground">
          Track your positive contribution to the planet
        </p>
      </div>

      {/* Eco Points Summary */}
      <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Your Eco Impact</h2>
          <p className="text-white/80">You're making a real difference!</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Droplets className="h-6 w-6" />
              <span className="text-sm font-medium">Water Saved</span>
            </div>
            <div className="text-3xl font-bold">12,450L</div>
            <div className="mt-1 text-sm text-white/80">Equivalent to 83 bathtubs</div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              <span className="text-sm font-medium">CO₂ Reduced</span>
            </div>
            <div className="text-3xl font-bold">52.8kg</div>
            <div className="mt-1 text-sm text-white/80">Equal to 264km driven</div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <Recycle className="h-6 w-6" />
              <span className="text-sm font-medium">Waste Reduced</span>
            </div>
            <div className="text-3xl font-bold">8.4kg</div>
            <div className="mt-1 text-sm text-white/80">From landfills</div>
          </div>
        </div>
      </div>

      {/* Monthly Progress */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Monthly Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Water Conservation</span>
              <span className="text-sm text-muted-foreground">68%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[68%] rounded-full bg-primary"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Carbon Reduction</span>
              <span className="text-sm text-muted-foreground">82%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[82%] rounded-full bg-primary"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Waste Prevention</span>
              <span className="text-sm text-muted-foreground">54%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[54%] rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-6 text-lg font-semibold text-foreground">Achievements</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.id}
                className={`rounded-lg border p-4 transition-all ${
                  achievement.unlocked
                    ? 'border-primary/20 bg-primary/5'
                    : 'border-border bg-muted/20 opacity-60'
                }`}
              >
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${
                    achievement.unlocked ? 'bg-primary/10' : 'bg-muted'
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${achievement.unlocked ? 'text-primary' : 'text-muted-foreground'}`}
                  />
                </div>
                <h4 className="mb-1 font-semibold text-foreground">{achievement.name}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                {achievement.unlocked && (
                  <div className="mt-3 text-xs font-medium text-primary">Unlocked!</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Impact Timeline */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Recent Milestones</h3>
        <div className="space-y-4">
          {[
            { date: '2 days ago', title: 'Reached 50kg CO₂ reduction', icon: Leaf },
            { date: '1 week ago', title: 'Saved 10,000L of water', icon: Droplets },
            { date: '2 weeks ago', title: 'Completed 10th swap', icon: Recycle },
          ].map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground">{milestone.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
