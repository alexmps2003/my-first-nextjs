// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex items-center gap-2 p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="h-4 w-16 rounded-md bg-gray-200" />
      </div>
      <div className="flex items-center justify-center rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className="w-full">
      <div className={`${shimmer} mb-4 h-6 w-32 rounded-md bg-gray-100`} />
      <div className={`${shimmer} h-80 rounded-xl bg-gray-100`} />
      <div className={`${shimmer} mt-4 h-4 w-28 rounded-md bg-gray-100`} />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="w-full">
      <div className={`${shimmer} mb-4 h-6 w-40 rounded-md bg-gray-100`} />
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`${shimmer} relative flex items-center justify-between overflow-hidden rounded-md bg-gray-100 px-3 py-3`}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <div className="space-y-1">
                  <div className="h-3 w-28 rounded-md bg-gray-200" />
                  <div className="h-3 w-20 rounded-md bg-gray-200" />
                </div>
              </div>
              <div className="h-3 w-10 rounded-md bg-gray-200" />
            </div>
          ))}
        </div>
        <div className={`${shimmer} mt-6 h-4 w-32 rounded-md bg-gray-100`} />
      </div>
    </div>
  );
}

// Full-page skeleton for loading.tsx
export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-6 w-28 overflow-hidden rounded-md bg-gray-100`}
      />
      <CardsSkeleton />
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}
