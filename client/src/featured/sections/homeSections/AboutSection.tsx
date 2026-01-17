import Container from "@/components/ui/Container";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-50 ">
          <div className="flex-1 flex flex-col gap-8 pt-15">
            <h2 className="text-[48px] font-bold font-inter text-[#3F3F3F] leading-tight tracking-tight">
              Nəyə görə Lor Hospital?
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-[22px] font-normal font-inter text-[#3F3F3F] leading-[140%] tracking-[-2%] opacity-80 ">
                Lor Hospital – 2013-cü ildən fəaliyyət göstərən <br />
                Azərbaycanın eləcə də Qafqazın ilk və yeganə <br />{" "}
                ixtisaslaşmış Qulaq Burun Boğaz və Baş-Boyun Mərkəziidir. <br />{" "}
                Azərbaycanda ilk Qulaq Burun Boğaz və Baş-Boyun <br /> Mərkəzi
                olmağımızın vermiş olduğu məsuliyyət ilə <br /> poliklinika,
                laboratoriya, funksional diaqnostika <br />
                müayinələrindən sonra pasiyentlərimizə daha dəqiq <br />
                diaqnoz qoyularaq lazımi müalicələr aparılır. <br /> Qüsursuz
                xidmət anlayışını əsas tutaraq Avropa <br /> standartlarına
                uyğun müasir müalicə və diaqnostika <br /> üsulları ilə
                xidmətlərimizin yüksək keyfiyyətini təmin edirik.
              </p>
              <p className="text-[22px] font-normal font-inter text-[#3F3F3F] leading-[140%] opacity-80  tracking-[-2%]">
                Endoskopik, mikroskopik və lazer texnologiyalarının <br />{" "}
                istifadəsi dəqiq diaqnostikaya, hətta ən çətin <br />{" "}
                əməliyyatlar zamanı minimal travmaya, bərpa dövrünü <br />{" "}
                qısaltmağa <br /> və qısa müddətdə normal gündəlik həyata
                qayıtmağa <br /> imkan yaradır.
              </p>
            </div>
          </div>
          <div className=" relative w-[862px] h-[879px] rounded-[15px] overflow-hidden shadow-xl">
            <Image
              src="/images/lorHospital.png"
              alt="Lor Hospital Building"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
