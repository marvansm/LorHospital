import Container from "@/components/ui/Container";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="text-[36px] md:text-[48px] font-bold font-inter text-[#3F3F3F] leading-tight tracking-tight">
              Nəyə görə Lor Hospital?
            </h2>
            <div className="flex flex-col gap-6">
              <Reveal delay={0.4}>
                <p className="text-[18px] md:text-[22px] font-normal font-inter text-[#3F3F3F] leading-[140%] tracking-[-2%] opacity-80">
                  Lor Hospital – 2013-cü ildən fəaliyyət göstərən{" "}
                  <br className="hidden md:block" />
                  Azərbaycanın eləcə də Qafqazın ilk və yeganə{" "}
                  <br className="hidden md:block" />
                  ixtisaslaşmış Qulaq Burun Boğaz və Baş-Boyun Mərkəziidir.{" "}
                  <br className="hidden md:block" />
                  Azərbaycanda ilk Qulaq Burun Boğaz və Baş-Boyun{" "}
                  <br className="hidden md:block" /> Mərkəzi olmağımızın vermiş
                  olduğu məsuliyyət ilə <br className="hidden md:block" />{" "}
                  poliklinika, laboratoriya, funksional diaqnostika{" "}
                  <br className="hidden md:block" />
                  müayinələrindən sonra pasiyentlərimizə daha dəqiq{" "}
                  <br className="hidden md:block" />
                  diaqnoz qoyularaq lazımi müalicələr aparılır.{" "}
                  <br className="hidden md:block" /> Qüsursuz xidmət anlayışını
                  əsas tutaraq Avropa <br className="hidden md:block" />{" "}
                  standartlarına uyğun müasir müalicə və diaqnostika{" "}
                  <br className="hidden md:block" /> üsulları ilə
                  xidmətlərimizin yüksək keyfiyyətini təmin edirik.
                </p>
              </Reveal>
              <Reveal delay={0.6}>
                <p className="text-[18px] md:text-[22px] font-normal font-inter text-[#3F3F3F] leading-[140%] opacity-80 tracking-[-2%]">
                  Endoskopik, mikroskopik və lazer texnologiyalarının{" "}
                  <br className="hidden md:block" />
                  istifadəsi dəqiq diaqnostikaya, hətta ən çətin{" "}
                  <br className="hidden md:block" />
                  əməliyyatlar zamanı minimal travmaya, bərpa dövrünü{" "}
                  <br className="hidden md:block" />
                  qısaltmağa və qısa müddətdə normal gündəlik həyata{" "}
                  <br className="hidden md:block" /> imkan yaradır.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <Reveal delay={0.3} y={100}>
              <div className="relative aspect-4/5 lg:w-[500px] xl:w-[700px] lg:h-[600px] xl:h-[800px] rounded-[15px] overflow-hidden shadow-xl mx-auto">
                <Image
                  src="/images/lorHospital.png"
                  alt="Lor Hospital Building"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
