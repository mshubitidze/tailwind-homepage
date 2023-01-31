import NavBar from "./components/NavBar";
import "./App.css";

type TCard = Record<"imgSrc" | "title" | "description" | "idx", string>;

const cardsData: TCard[] = [
  {
    idx: "1",
    imgSrc: "./images/image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    idx: "2",
    imgSrc: "./images/image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budget",
  },
  {
    idx: "3",
    imgSrc: "./images/image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities",
  },
];

function Card({ imgSrc, title, description, idx }: TCard) {
  return (
    <div className="flex flex-row gap-5 h-44 mt-8 order-5">
      <img src={imgSrc} />
      <div className="flex flex-col justify-between">
        <p className="text-gray-300 text-4xl md:text-4xl font-semibold">
          0{idx}
        </p>
        <p className="font-bold text-xl">{title}</p>
        <p className="text-gray-500 text-md md:text-blueGray">{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="mx-8 md:mx-44 mb-20">
      <NavBar />
      <main className="w-full h-full gap-12 mb-28 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 order-1">
          <img src="./images/image-web-3-desktop.jpg" alt="" />
        </div>
        <div className="flex flex-col p-10 order-4 lg:order-2 justify-between lg:row-span-2 bg-blueGray gap-10 text-[#FEFDF9]">
          <h2 className="text-3xl lg:text-4xl font-semibold text-yellow-500">
            New
          </h2>
          <div>
            <h3 className="text-xl text-[#FEFDF9] text font-bold pb-2">
              Hydrogen VS Electric Cars
            </h3>
            <p className="text-sm text-gray-400">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="bg-gray-100 h-[0.5px]"></div>
          <div>
            <h3 className="text-xl text-[#FEFDF9] font-bold pb-2">
              The Downsides of AI Artistry
            </h3>
            <p className="text-sm text-gray-400">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="bg-gray-100 h-[0.5px]"></div>
          <div>
            <h3 className="text-xl text-[#FEFDF9] font-bold pb-2">
              is VC Funding Drying Up?
            </h3>
            <p className="text-sm text-gray-400">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <h1 className="font-extrabold text-blueGray order-2 lg:order-3 text-4xl md:text-6xl lg:text-7xl">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col gap-10 order-3 lg:order-4 justify-between">
          <p className="text-xl text-gray-500">
            We dive into the next evolution of the web that claims to but the
            power of the plattorms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="hover:bg-red-400 hover tracking-widest bg-red-500 px-14 md:px-12 text-xl md:text-lg py-4 md:py-3 w-fit text-[#FEFDF9]">
            READ MORE
          </button>
        </div>
        {cardsData.map(({ idx, imgSrc, title, description }) => (
          <Card
            imgSrc={imgSrc}
            idx={idx}
            title={title}
            description={description}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
