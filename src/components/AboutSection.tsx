import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Обо мне</h2>
            <p className="text-xl text-gray-600">
              Делюсь своими мыслями о моде, стиле и важных событиях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="Sparkles" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Мода и стиль
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Анализирую последние тренды и делюсь советами по стилю
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="Globe" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Актуальные новости
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Рассказываю о важных событиях с личной точки зрения
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="Heart" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Личные размышления
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Делюсь опытом и мыслями о жизни и творчестве
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Добро пожаловать!
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Здесь я делюсь своими мыслями о моде, стиле и важных
                    событиях современности.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-xs text-gray-500">Статей</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-xs text-gray-500">Категории</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
