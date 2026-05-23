export default function RecipeCardSkeleton() {
  return (
    <div className="rounded-[8px] overflow-hidden border border-gray-100 shadow-sm animate-pulse">
      {/* Image container skeleton */}
      <div className="relative h-[256px] bg-gray-200">
        {/* Type badge skeleton */}
        <div className="absolute top-2.5 left-2.5 bg-gray-300 h-7 w-20 rounded-[12px]" />
      </div>

      {/* Body skeleton */}
      <div className="bg-white p-8 space-y-4">
        {/* Rating and Duration row */}
        <div className="flex justify-between items-center">
          {/* Rating skeleton */}
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-200 rounded-full" />
            <div className="h-4 w-8 bg-gray-200 rounded" />
          </div>
          {/* Duration skeleton */}
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-200 rounded-full" />
            <div className="h-4 w-12 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Name/Title skeleton (Multi-line layout placeholder for 28px text) */}
        <div className="space-y-2 py-1">
          <div className="h-7 bg-gray-200 rounded w-5/6" />
          <div className="h-7 bg-gray-200 rounded w-1/2" />
        </div>

        {/* Difficulty badge skeleton */}
        <div className="pt-1">
          <div className="bg-gray-200 h-8 w-24 rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}
