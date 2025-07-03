import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PostCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

export default function PostCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
}: PostCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="aspect-video bg-gray-200 relative overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Icon name="Calendar" size={14} className="mr-1" />
            {date}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 line-clamp-3 mb-4">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Icon name="Clock" size={14} className="mr-1" />
            {readTime}
          </div>

          <button className="text-primary hover:text-primary/80 transition-colors flex items-center">
            Читать далее
            <Icon name="ArrowRight" size={16} className="ml-1" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
