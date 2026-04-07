import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';
import { COMPANIES } from '../constants';

interface AppleStyleDockProps {}

export function AppleStyleDock({}: AppleStyleDockProps = {}) {
  return (
    <div className='relative max-w-full z-50'>
      <Dock className='items-end pb-3'>
        {COMPANIES.map((company) => (
          <DockItem
            key={company.id}
            className='aspect-square rounded-none bg-gray-200 dark:bg-neutral-800 cursor-pointer'
            onClick={() => window.open('https://x.com/explore', '_blank')}
          >
            <DockLabel>{company.name}</DockLabel>
            <DockIcon>
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="w-full h-full rounded-none object-cover"
                referrerPolicy="no-referrer"
              />
            </DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
