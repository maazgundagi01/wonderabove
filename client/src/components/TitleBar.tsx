interface TitleBarProps{
  title: string
}
function TitleBar({title}:TitleBarProps) {
  return (
    <header id="main-title" className=" bg-slate-800 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
        </div>
    </header>
  )
}

export default TitleBar