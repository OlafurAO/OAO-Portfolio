interface Props {
  children: React.ReactNode[];
}

export const LayoutContainer = ({ children }: Props) => {
  return (
    <div className='items-center justify-center min-h-screen p-6 lg:p-8 pb-20 lg:gap-16'>
      <main className='lg:flex items-center sm:items-start'>
        {children}
      </main>
    </div>
  );
}