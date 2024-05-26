import AddCont from "@/components/AdresCon";
import BigText from "@/components/BigText";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Text from "@/components/Text";

export default function Contact() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex flex-col gap-28">
        <Navbar />
        <div className="flex justify-center items-center">
          <BigText />
          <Text />
          <AddCont />
        </div>
        <Footer />
      </div>
    </div>
  );
}
