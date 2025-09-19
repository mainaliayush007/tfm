import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import kon1 from "../../assets/Kon1.JPG";
import kon2 from "../../assets/Kon2.JPG";
import sun from "../../assets/sun.jpg";


export const Home = (): JSX.Element => {
 
  const tradingCategories = [
    {
      items: [
        "Farmer Direct",
        "Organic", 
        "Nurseries",
        "Crafted Foods",
        "Old Trades",
        "Hardware",
      ],
    },
    {
      items: [
        "Trash & Treasure",
        "Popup Clearance",
        "Car Boot",
        "Garage Sales", 
        "Trade Clean Outs",
        "Free Surplus Items",
      ],
    },
    {
      items: [
        "Australian Made",
        "Local Crafts",
        "Promotions",
        "Collectibles",
        "Cottage Industries",
        "Fund Raising",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto bg-[#f5f3e8]">

        {/* Trade Free Markets Section */}
        <section className="text-center py-8 bg-[#f5f3e8] px-4">
          <h1 style={{fontFamily:'Averia Libre'}} className="text-3xl md:text-5xl font-bold text-[#c41e3a] mb-6 tracking-[0.2em]">
            TRADE FREE MARKETS
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Badge style={{fontFamily:'Averia Libre'}} className="bg-[#fdce2f] text-[#634936] px-6 md:px-8 py-2 text-2xl md:text-4xl font-bold rounded-[14px] ">
              Every Wednesday
            </Badge>
            <span style={{fontFamily:'Averia Libre'}} className="text-xl md:text-2xl font-bold text-[#8B4513]">9am - 2pm</span>
          </div>
        </section>

        {/* Decorative Lines */}
        <div className="px-8 py-4">
          <div className="border-t-2 border-dashed border-[#8B4513] mb-3"></div>
        </div>

        {/* Trading Section */}
        <section style={{fontFamily:'Averia Libre'}} className="py-8 px-4 md:px-12 ">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#c41e3a] mb-8 tracking-[0.2em]">
            TRADING
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
            {tradingCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="text-sm  text-[#8B4513] font-semibold text-center md:text-2xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
         {/* Decorative Lines */}
        <div className="px-8 py-6">
          <div className="border-t-2 border-dashed border-[#8B4513]"></div>
        </div>
        {/* Market Photos Section */}
        <section className="px-4 md:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <Card className="overflow-hidden border-2 border-[#8B4513]">
              <CardContent className="p-0">
                <img
                  src={kon1}
                  alt="Market vendor with produce"
                  className="w-full h-48 md:h-56 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-2 border-[#8B4513]">
              <CardContent className="p-0">
                <img
                  src={kon2}
                  alt="Market scene with customers"
                  className="w-full h-48 md:h-56 object-cover"
                />
              </CardContent>
            </Card>
          </div>

          <h3 style={{fontFamily:'Averia Libre'}} className="text-center text-lg md:text-3xl font-bold text-[#8B4513] tracking-[0.15em] mb-6 px-2">
            OLD STYLE / FOR ALL AGES / COMMUNITIES
          </h3>
        </section>

        {/* Map Section */}
        <section className="px-4 md:px-8">
          <Card className="overflow-hidden border-2 border-[#8B4513]">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps?q=-36.7518708,144.2791603&z=13&output=embed"      
                className="w-full h-48 md:h-72 object-cover"
                loading="lazy"
                title="Bendigo map"
              />
            </CardContent>
          </Card>
        </section>

        {/* Weather Notice */}
        <section className="px-4 md:px-8 py-6">
          <Card className="bg-[#f4d03f] border-2 border-[#8B4513]">
            <CardContent className="p-4 md:p-6 text-center">
              <h4 className="font-bold text-[#c41e3a] mb-3 text-base md:text-2xl">
                Please Note - Weather
              </h4>
              <p className="text-base md:text-xl text-[#8B4513] mb-3 font-medium ">
                As Venues are mostly outdoor, Please check for extreme weather
                severe conditions that may result in the cancellation of that
                market day
              </p>
              <p className="text-base md:text-xl text-[#8B4513] font-medium">
                via BoM Weather / via Our Facebook / 0400000000
              </p>
            </CardContent>
          </Card>
        </section>
  {/* Sunset Image */}
          <div className="px-4 md:px-0  relative overflow-hidden mb-6">
            <img
              src={sun}
              alt="Sunset silhouette"
              className="w-full h-full object-cover opacity-80"
            />
          </div>    

      </div>
    </div>
  );
};
