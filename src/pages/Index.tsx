import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import CategoryCard from "@/components/CategoryCard";
import AboutSection from "@/components/AboutSection";

export default function Index() {
  const featuredPosts = [
    {
      title: "Тренды весны 2024: что будет актуально",
      excerpt:
        "Анализирую главные модные тенденции нового сезона. Какие цвета, силуэты и стили будут определять весну.",
      category: "Мода",
      date: "15 марта",
      readTime: "5 мин",
      image: "/placeholder.svg",
    },
    {
      title: "Влияние социальных сетей на современную моду",
      excerpt:
        "Как Instagram и TikTok изменили индустрию моды и восприятие стиля молодым поколением.",
      category: "Новости",
      date: "12 марта",
      readTime: "7 мин",
      image: "/placeholder.svg",
    },
    {
      title: "Минимализм в гардеробе: мой личный опыт",
      excerpt:
        "Рассказываю о том, как переход к минималистичному стилю изменил мое отношение к одежде и покупкам.",
      category: "Стиль",
      date: "8 марта",
      readTime: "4 мин",
      image: "/placeholder.svg",
    },
  ];

  const categories = [
    {
      title: "Мода",
      description: "Последние тренды, обзоры коллекций и модные новости",
      icon: "Sparkles",
      postCount: 18,
    },
    {
      title: "Новости",
      description: "Важные события и их влияние на современную жизнь",
      icon: "Globe",
      postCount: 24,
    },
    {
      title: "Стиль",
      description: "Личные размышления о стиле жизни и моде",
      icon: "Heart",
      postCount: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Мода, стиль и размышления
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Личный блог о моде, актуальных новостях и жизни. Делюсь своими
                мыслями и наблюдениями.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Последние статьи
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Категории
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <CategoryCard key={index} {...category} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Мой Блог</h3>
            <p className="text-gray-400 mb-6">
              Спасибо за внимание к моим мыслям о моде и жизни
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Мой Блог. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
