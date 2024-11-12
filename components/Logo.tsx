import Image from 'next/image';

export const Logo: React.FC = () => {
  return (
    <div className="relative w-24 h-24 mb-6 mx-auto">
      <Image
        src="/s.png"
        alt="PDH School Logo"
        fill
        priority
        className="object-contain"
        sizes="(max-width: 768px) 96px, 96px"
      />
    </div>
  );
};