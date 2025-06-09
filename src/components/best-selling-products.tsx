"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ShoppingCart, Heart } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const featuredProducts = [
  {
    id: 1,
    name: "Classic Dresses",
    category: "Clothing",
    price: 29.99,
    image: "/images/ladies-dress-wear.jpg?height=400&width=300", // space removed
    rating: 4.5,
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 89.99,
    image: "/images/leatherbag.jpg?height=400&width=300",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Running Sneakers",
    category: "Footwear",
    price: 119.99,
    image: "/images/snakers.jpg?height=400&width=300",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Denim Jacket",
    category: "Clothing",
    price: 79.99,
    image: "/images/denimjackets.jpg?height=400&width=300",
    rating: 4.6,
    className: "object-cover", // corrected
  },
  // baaki products waise hi hain
]

export function BestSellingProducts() {
  return (
    <section className="px-12 py-6 container mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <Badge className="px-3 py-1 text-sm bg-green-500 text-white rounded-sm">Best Selling Product</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10" id="carousel-prev">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10" id="carousel-next">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={(api) => {
          if (api) {
            const prevBtn = document.getElementById("carousel-prev")
            const nextBtn = document.getElementById("carousel-next")

            if (prevBtn) {
              prevBtn.onclick = () => api.scrollPrev()
            }

            if (nextBtn) {
              nextBtn.onclick = () => api.scrollNext()
            }
          }
        }}
      >
        <CarouselContent>
          {featuredProducts.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
              <Card className="border-0 shadow-sm overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden group">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className={`object-cover transition-transform group-hover:scale-105 ${product.className || ""}`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <Button className="w-full gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                  <Link href={`/products/${product.id}`} className="font-medium hover:underline">
                    {product.name}
                  </Link>
                  <div className="mt-1 font-semibold">${product.price.toFixed(2)}</div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => {
                      const fillClass =
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : i < product.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      return (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${fillClass}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    })}
                    <span className="ml-1 text-xs text-muted-foreground">({product.rating})</span>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex justify-center md:hidden">
          <CarouselPrevious className="static translate-y-0 mr-2" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  )
}













// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { ArrowLeft, ArrowRight, ShoppingCart, Heart } from "lucide-react"

// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// // Mock product data
// const featuredProducts = [
//   {
//     id: 1,
//     name: "Classic Dresses",
//     category: "Clothing",
//     price: 29.99,
//     image: "/images/ladies-dress-wear.jpg? height=400&width=300",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "Leather Crossbody Bag",
//     category: "Accessories",
//     price: 89.99,
//     image: "/images/leatherbag.jpg?height=400&width=300",
//     rating: 4.8,
//   },
//   {
//     id: 3,
//     name: "Running Sneakers",
//     category: "Footwear",
//     price: 119.99,
//     image: "/images/snakers.jpg?height=400&width=300",
//     rating: 4.7,
//   },
//   {
//     id: 4,
//     name: "Denim Jacket",
//     category: "Clothing",
//     price: 79.99,
//     image: "/images/denimjackets.jpg?height=400&width=400",
//     rating: 4.6,
//     className: "object fit",
//   },
//   {
//     id: 5,
//     name: "Wireless Earbuds",
//     category: "Accessories",
//     price: 149.99,
//     image: "/images/earbuds.jpg?height=400&width=300",
//     rating: 4.9,
//   },
//   {
//     id: 6,
//     name: "Leather Boots",
//     category: "Footwear",
//     price: 199.99,
//     image: "/images/leatherboots.jpg?height=400&width=300",
//     rating: 4.8,
//   },
//   {
//     id: 7,
//     name: "Graphic Print Hoodie",
//     category: "Clothing",
//     price: 69.99,
//     image: "/images/hoodie.jpg?height=400&width=300 ",
//     rating: 4.5,
//   },
//   {
//     id: 8,
//     name: "Smartwatch",
//     category: "Accessories",
//     price: 249.99,
//     image: "/images/smartwatch.jpg?height=400&width=300",
//     rating: 4.7,
//   },
// ]

// export function BestSellingProducts() {
//   return (
//     <section className="px-12 py-6 container">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-4">
//           <Badge className="px-3 py-1 text-sm bg-green-500 text-white rounded-sm">Best Selling Product</Badge>
//           <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
//         </div>
//         <div className="hidden md:flex items-center gap-2">
//           <Button variant="outline" size="icon" className="rounded-full h-10 w-10" id="carousel-prev">
//             <ArrowLeft className="h-5 w-5" />
//           </Button>
//           <Button variant="outline" size="icon" className="rounded-full h-10 w-10" id="carousel-next">
//             <ArrowRight className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>

//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full"
//         setApi={(api) => {
//           if (api) {
//             const prevBtn = document.getElementById("carousel-prev")
//             const nextBtn = document.getElementById("carousel-next")

//             if (prevBtn) {
//               prevBtn.addEventListener("click", () => api.scrollPrev())
//             }

//             if (nextBtn) {
//               nextBtn.addEventListener("click", () => api.scrollNext())
//             }
//           }
//         }}
//       >
//         <CarouselContent>
//           {featuredProducts.map((product) => (
//             <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
//               <Card className="border-0 shadow-sm overflow-hidden h-full">
//                 <CardContent className="p-0">
//                   <div className="relative aspect-square overflow-hidden group">
//                     <Image
//                       src={product.image || "/placeholder.svg"}
//                       alt={product.name}
//                       fill
//                       className="object-cover transition-transform group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
//                     <Button
//                       variant="secondary"
//                       size="icon"
//                       className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
//                     >
//                       <Heart className="h-4 w-4" />
//                     </Button>
//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
//                       <Button className="w-full gap-2">
//                         <ShoppingCart className="h-4 w-4" />
//                         Add to Cart
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex flex-col items-start p-4">
//                   <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
//                   <Link href={`/products/${product.id}`} className="font-medium hover:underline">
//                     {product.name}
//                   </Link>
//                   <div className="mt-1 font-semibold">${product.price.toFixed(2)}</div>
//                   <div className="flex items-center mt-2">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className={`w-4 h-4 ${
//                           i < Math.floor(product.rating)
//                             ? "text-yellow-400"
//                             : i < product.rating
//                               ? "text-yellow-400"
//                               : "text-gray-300"
//                         }`}
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                     <span className="ml-1 text-xs text-muted-foreground">({product.rating})</span>
//                   </div>
//                 </CardFooter>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <div className="mt-8 flex justify-center md:hidden">
//           <CarouselPrevious className="static translate-y-0 mr-2" />
//           <CarouselNext className="static translate-y-0" />
//         </div>
//       </Carousel>
//     </section>
//   )
// }
