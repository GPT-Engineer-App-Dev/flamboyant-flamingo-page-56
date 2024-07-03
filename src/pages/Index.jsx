import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import flamingoImage from "/placeholder.svg"; // Placeholder image
import flamingoHabitatImage from "/placeholder.svg"; // Placeholder image
import flamingoDietImage from "/placeholder.svg"; // Placeholder image

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <header className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${flamingoImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Discover the World of Flamingos</h1>
          <p className="mt-4 text-xl">Learn about these fascinating birds and their habitats.</p>
          <Button className="mt-6">Learn More</Button>
        </div>
      </header>

      {/* About Flamingos Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>About Flamingos</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center">
            <img src={flamingoImage} alt="Flamingo" className="w-full md:w-1/2 rounded-lg" />
            <p className="mt-4 md:mt-0 md:ml-6">
              Flamingos are large birds known for their bright pink feathers, long legs, and distinctive downward-bending beaks. They are social animals that live in large colonies and are found in warm, watery regions on many continents.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Habitat Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Habitat</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center">
            <img src={flamingoHabitatImage} alt="Flamingo Habitat" className="w-full md:w-1/2 rounded-lg" />
            <p className="mt-4 md:mt-0 md:ml-6">
              Flamingos are typically found in shallow lakes, lagoons, mangrove swamps, and sandy islands. They thrive in environments with plenty of water and food sources, such as algae, crustaceans, and small fish.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Diet Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Diet</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center">
            <img src={flamingoDietImage} alt="Flamingo Feeding" className="w-full md:w-1/2 rounded-lg" />
            <p className="mt-4 md:mt-0 md:ml-6">
              Flamingos primarily feed on algae, crustaceans, and small fish. Their diet is rich in pigments called carotenoids, which give their feathers their vibrant pink color. The more carotenoids they consume, the brighter their feathers become.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-6 text-center">
        <p>&copy; 2023 Flamingo World. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;