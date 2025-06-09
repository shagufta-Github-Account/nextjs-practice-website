
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/60 z-10" />

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>

      <div className="container relative z-20 px-17 py-24 md:py:32 lg:py-40">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              New Collection
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Your Style <span className="text-primary">Today</span>
            </h1>

            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
              Shop the latest trends and discover premium quality products that define your unique style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="h-5 w-5" />
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Browse Collections
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-muted border-2 border-background" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">2,000+</span> happy customers
              </p>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/featured-product.jpg"
              alt="Featured product"
              fill
              priority
              className="object-fit"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-medium text-white">Summer Collection</h3>
                  <p className="text-white/80">Starting at $29.99</p>
                </div>
                <Link href="/products/summer-collection">
                  <Button size="sm" variant="secondary" className="gap-1">
                    View
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


















// import Link from "next/link"
// import Image from "next/image"
// import { ShoppingBag, ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background to-background/60 z-10" />

//       {/* Background image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/images/hero.jpg"
//           alt="Background"
//           fill
//           priority
//           className="object-cover opacity-30"
//         />
//       </div>

//       <div className="container relative z-20 px-4 py-24 md:py-32 lg:py-40">
//         <div className="grid gap-8 md:grid-cols-2 items-center">
//           <div className="flex flex-col space-y-6">
//             <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               New Collection
//             </div>

//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
//               Discover Your Style <span className="text-primary">Today</span>
//             </h1>

//             <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
//               Shop the latest trends and discover premium quality products that define your unique style.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Button size="lg" className="gap-2">
//                 <ShoppingBag className="h-5 w-5" />
//                 Shop Now
//               </Button>
//               <Button size="lg" variant="outline" className="gap-2">
//                 Browse Collections
//                 <ArrowRight className="h-4 w-4" />
//               </Button>
//             </div>

//             <div className="flex items-center gap-6 pt-6">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="h-8 w-8 rounded-full bg-muted border-2 border-background" />
//                 ))}
//               </div>
//               <p className="text-sm text-muted-foreground">
//                 <span className="font-medium text-foreground">2,000+</span> happy customers
//               </p>
//             </div>
//           </div>

//           <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
//             <Image
//               src="/images/featured-product.jpg"
//               alt="Featured product"
//               fill
//               priority
//               className="object-fit"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
//               <div className="flex justify-between items-end">
//                 <div>
//                   <h3 className="text-xl font-medium text-white">Summer Collection</h3>
//                   <p className="text-white/80">Starting at $29.99</p>
//                 </div>
//                 <Link href="/products/summer-collection">
//                   <Button size="sm" variant="secondary" className="gap-1">
//                     View
//                     <ArrowRight className="h-3 w-3" />
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Featured categories */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
//           {["Clothing", "Accessories", "Footwear", "New Arrivals"].map((category) => (
//             <Link
//               key={category}
//               href={`/category/${category.toLowerCase().replace(" ", "-")}`}
//               className="group relative h-40 overflow-hidden rounded-lg bg-muted"
//             >
//               <Image
//                 src="/images/clothing.jpg" // Replace with dynamic image source based on category
//                 alt={category}
//                 fill
//                 className="object-fit transition-transform group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <h3 className="text-xl font-medium text-white">{category}</h3>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
