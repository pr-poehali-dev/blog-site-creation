import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  postCount: number;
}

export default function CategoryCard({
  title,
  description,
  icon,
  postCount,
}: CategoryCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300 cursor-pointer group">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Icon name={icon as any} size={24} className="text-primary" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{postCount} статей</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
