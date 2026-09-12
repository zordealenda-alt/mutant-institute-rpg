export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-mutant-600 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-mutant-400 font-display font-bold mb-4">MUTANT INSTITUTE</h3>
            <p className="text-gray-400 text-sm">A complete RPG platform for mutant-powered adventures.</p>
          </div>
          <div>
            <h4 className="text-mutant-400 font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/lore" className="hover:text-mutant-400 transition">Lore</a></li>
              <li><a href="/mutations" className="hover:text-mutant-400 transition">Mutations</a></li>
              <li><a href="/characters" className="hover:text-mutant-400 transition">Characters</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-mutant-400 font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-mutant-400 transition">Discord</a></li>
              <li><a href="#" className="hover:text-mutant-400 transition">Forum</a></li>
              <li><a href="#" className="hover:text-mutant-400 transition">Wiki</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-mutant-400 font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-mutant-400 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-mutant-400 transition">Terms</a></li>
              <li><a href="#" className="hover:text-mutant-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-mutant-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Mutant Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
