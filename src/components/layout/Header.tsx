export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <span className="text-xl font-bold">RongLeo</span>
        <nav className="flex items-center gap-4">
          <a href="/" className="text-sm font-medium">Home</a>
          <a href="/products" className="text-sm font-medium">Products</a>
          <a href="/admin" className="text-sm font-medium">Admin</a>
        </nav>
      </div>
    </header>
  );
}
