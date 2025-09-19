import img1 from "../../assets/1.JPG";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.JPG";
import img4 from "../../assets/4.JPG";
import img5 from "../../assets/5.JPG";
import img6 from "../../assets/6.JPG";
import img7 from "../../assets/7.JPG";
import img8 from "../../assets/8.JPG";
import img9 from "../../assets/9.JPG";
import img10 from "../../assets/10.JPG";
import img11 from "../../assets/11.JPG";
import img12 from "../../assets/12.JPG";
import img13 from "../../assets/13.JPG";
import img14 from "../../assets/14.JPG";
import img15 from "../../assets/15.JPG";
import img16 from "../../assets/16.JPG";
import img17 from "../../assets/17.JPG";
import img18 from "../../assets/18.JPG";
import img19 from "../../assets/19.JPG";
import img20 from "../../assets/20.JPG";
import img21 from "../../assets/21.JPG";


export const Gallery = (): JSX.Element => {

    const imageList = [
        { label: "trade-free-market", image: img1 },
        { label: "trade-free-market", image: img2 },
        { label: "trade-free-market", image: img3 },
        { label: "trade-free-market", image: img4 },
        { label: "trade-free-market", image: img5 },
        { label: "trade-free-market", image: img6 },
        { label: "trade-free-market", image: img7 },
        { label: "trade-free-market", image: img8 },
        { label: "trade-free-market", image: img9 },
        { label: "trade-free-market", image: img10 },
        { label: "trade-free-market", image: img11 },
        { label: "trade-free-market", image: img12 },
        { label: "trade-free-market", image: img13 },
        { label: "trade-free-market", image: img14 },
        { label: "trade-free-market", image: img15 },
        { label: "trade-free-market", image: img16 },
        { label: "trade-free-market", image: img17 },
        { label: "trade-free-market", image: img18 },
        { label: "trade-free-market", image: img19 },
        { label: "trade-free-market", image: img20 },
        { label: "fat-cat", image: img21 },
        { label: "fat-cat", image: img21 },
    ]

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto  bg-[#f5f3e8]">

                {/* Decorative border */}
                <div className="px-8 py-4">
                    <div className="border-t-2 border-dashed border-[#8B4513]"></div>
                </div>
                <section style={{ fontFamily: 'Averia Libre' }}>
                    <h2 className="text-center text-2xl md:text-4xl font-bold text-[#c41e3a]  tracking-[0.2em]">GALLERY</h2>
                </section>
                {/* Decorative border */}
                <div className="px-8 py-4">
                    <div className="border-t-2 border-dashed border-[#8B4513]"></div>
                </div>
                <div className="max-w-7xl mx-auto  bg-[#f5f3e8]">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-5">

                        {imageList.map((img) => (
                            <div className="p-2 ">
                                <img src={img.image} ></img>
                            </div>


                        ))}

                    </div>

                </div>


            </div>

        </div>

    )
}