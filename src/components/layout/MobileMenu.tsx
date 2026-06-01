export function MobileMenu() {
  return (
    <div className="md:hidden">
      <nav className="flex flex-col gap-2 p-4">
        <a href="/" className="text-sm font-medium">Home</a>
        <a href="/products" className="text-sm font-medium">Products</a>
        <a href="/admin" className="text-sm font-medium">Admin</a>
      </nav>
    </div>
  );
}
