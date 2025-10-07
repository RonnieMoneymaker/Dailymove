import { ProductGridSkeleton } from "@/components/LoadingSkeleton";

export default function LoadingProducts() {
  return (
    <div className="space-y-10">
      <div className="space-y-4 animate-pulse">
        <div className="h-12 w-64 rounded-xl bg-gray-200 dark:bg-gray-700" />
        <div className="h-6 w-96 rounded-lg bg-gray-200 dark:bg-gray-700" />
      </div>
      <ProductGridSkeleton count={6} />
    </div>
  );
}




