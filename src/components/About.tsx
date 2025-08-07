// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Award, Users, Clock, Shield } from "lucide-react";

// const About = () => {
//   const stats = [
//     {
//       icon: Users,
//       number: "500+",
//       label: "Happy Customers",
//       description: "Satisfied clients across residential and commercial projects"
//     },
//     {
//       icon: Clock,
//       number: "15+",
//       label: "Years Experience",
//       description: "Decades of professional painting expertise"
//     },
//     {
//       icon: Award,
//       number: "100%",
//       label: "Quality Guarantee",
//       description: "We stand behind every project with our satisfaction guarantee"
//     },
//     {
//       icon: Shield,
//       number: "24/7",
//       label: "Customer Support",
//       description: "Always available to address your questions and concerns"
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gradient-subtle">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               Why Choose Aal-Zeyad Painting Services?
//             </h2>
//             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//               With over 15 years of experience in residential and commercial painting, 
//               we've built our reputation on quality workmanship, attention to detail, 
//               and exceptional customer service. Our team of skilled professionals is 
//               committed to transforming your space with precision and care.
//             </p>
//             <div className="space-y-4 mb-8">
//               <div className="flex items-start space-x-3">
//                 <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
//                 <div>
//                   <h4 className="font-semibold text-foreground">Premium Materials</h4>
//                   <p className="text-muted-foreground">We use only the highest quality paints and materials for lasting results.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
//                 <div>
//                   <h4 className="font-semibold text-foreground">Expert Craftsmanship</h4>
//                   <p className="text-muted-foreground">Our skilled painters take pride in every brushstroke and detail.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
//                 <div>
//                   <h4 className="font-semibold text-foreground">Timely Completion</h4>
//                   <p className="text-muted-foreground">We respect your schedule and complete projects on time, every time.</p>
//                 </div>
//               </div>
//             </div>
//             <Button variant="hero" size="lg">
//               Learn More About Us
//             </Button>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             {stats.map((stat, index) => (
//               <Card key={index} className="text-center p-6 shadow-soft hover:shadow-medium transition-all duration-300 bg-card/50 backdrop-blur-sm">
//                 <CardContent className="p-0">
//                   <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
//                     <stat.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
//                   <div className="font-semibold text-foreground mb-2">{stat.label}</div>
//                   <p className="text-sm text-muted-foreground">{stat.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;