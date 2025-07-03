import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Feather" size={24} className="text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">Мой Блог</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              О блоге
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Посты
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Категории
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Обо мне
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}
