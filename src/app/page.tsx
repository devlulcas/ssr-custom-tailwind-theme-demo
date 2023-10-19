import { UserSelectionForm } from '@/components/user-selection-form'

export default function Home() {
  return (
    <div className='grid grid-cols-3 grid-rows-5 h-screen w-screen bg-gray-50 gap-2 p-2'>
      <div className="bg-white rounded text-black border border-black col-span-3">
          <UserSelectionForm />
      </div>
      <div className='w-full h-full row-span-2 border border-black bg-background text-foreground rounded-md p-2'>background</div>
      <div className='w-full h-full row-span-2 border border-black bg-foreground text-background rounded-md p-2'>foreground</div>
      <div className='w-full h-full row-span-2 border border-black bg-primary text-primary-foreground rounded-md p-2'>primary</div>
      <div className='w-full h-full row-span-2 border border-black bg-primary-foreground text-primary rounded-md p-2'>primary-foreground</div>
      <div className='w-full h-full row-span-2 border border-black bg-secondary text-secondary-foreground rounded-md p-2'>secondary</div>
      <div className='w-full h-full row-span-2 border border-black bg-secondary-foreground text-secondary rounded-md p-2'>secondary-foreground</div>
    </div>
  )
}
