import { Logo } from '../components/Logo'
import { Button } from '../components/Button'

const APPLY_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSehQlbNermYzdRPcAGe3I2ujBUIIB8Qmw7-VsHEhRHnk7YzWw/viewform';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] gap-4 opacity-10">
        {Array.from({ length: 1600 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
        ))}
      </div>
      
      <div className="w-full max-w-3xl mx-auto text-center space-y-8 relative z-10">
        <div className="animate-float">
          <Logo />
        </div>
        
        <h1 className="heading-primary space-x-2">
          <span className="font-bold">PDH</span>
          <span className="font-light">School</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 tracking-[0.2em] uppercase">
          BUILD · SELL · LAUNCH
        </p>
        
        <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
          Apply to join India's first-of-its-kind school, where learning meets 
          action. Here, you don't just gain knowledge – you build, innovate, and 
          launch your ideas for the world to see.
        </p>
        
        <Button 
          href={APPLY_FORM_URL}
          className="hover:shadow-lg hover:shadow-white/10"
        >
          Apply Now
        </Button>
      </div>
    </main>
  );
}