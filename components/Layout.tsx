const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">Static Blog Site</h1>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Static Blog Site
      </footer>
    </div>
  );
};

export default Layout;
