import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, CheckCircle } from 'lucide-react'

interface Review {
  id: string
  name: string
  rating: number
  title: string
  comment: string
  date: string
  verified: boolean
}

interface ProductReviewsProps {
  reviews: Review[]
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }))

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Klantbeoordelingen</h2>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Rating summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">{averageRating.toFixed(1)}</div>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(averageRating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{reviews.length} beoordelingen</p>
                </div>
                
                <div className="space-y-2">
                  {ratingCounts.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center gap-2">
                      <span className="text-sm w-8">{rating}</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8">{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Reviews list */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{review.name}</h4>
                          {review.verified && (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(review.date).toLocaleDateString('nl-NL')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <h5 className="font-medium mb-2">{review.title}</h5>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
