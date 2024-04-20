import NavBar from "../../component/Navebar/Navbar";
import Form from "react-bootstrap/Form";
import { BsTelephoneForward, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
} from "react-icons/tb";

import "./Home.css";
import ImageTest from "../../photo/Ellipse.png";
import ImageTest1 from "../../photo/Ellipse1.png";
import ImageTest2 from "../../photo/Ellipse2.png";
import ImageTest4 from "../../photo/indian_meat/رقبه-0.jpg";
import ImageTest5 from "../../photo/indian_meat/انتركوت-0-1.jpg";
import ImageTest6 from "../../photo/indian_meat/arbae.jpg";
import ImageTest7 from "../../photo/indian_meat/روزبيف-0.jpg";
import ImageTest8 from "../../photo/indian_meat/سمانه-1.jpg";
import ImageTest9 from "../../photo/indian_meat/سن-0-1.jpg";
import ImageTest10 from "../../photo/Rectangle 14.png";
import ImageTest11 from "../../photo/Rectangle 15.png";
import ImageTest12 from "../../photo/Logo.png";
import ImageTest13 from "../../photo/Rectangle 16.png";
import ImageTest14 from "../../photo/Rectangle 17.png";
import ImageTest15 from "../../photo/Rectangle 18.png";
import ImageTest16 from "../../photo/indian_meat/صوابع-0.jpg";
import ImageTest17 from "../../photo/indian_meat/ظهر-فخده-0.jpg";
import ImageTest18 from "../../photo/indian_meat/فخده.jpg";
import ImageTest19 from "../../photo/indian_meat/فليتو-02.jpg";
import ImageTest20 from "../../photo/indian_meat/كتف-.jpg";
import ImageTest21 from "../../photo/indian_meat/كولاطه-0.jpg";
import ImageTest22 from "../../photo/indian_meat/وش-فخده-0-.jpg";
import ImageTest23 from "../../photo/meat_product/برجر-صغير-كبير-2.jpg";
import ImageTest24 from "../../photo/meat_product/برجر-صغير-كبير-3.jpg";
import ImageTest25 from "../../photo/meat_product/سجق-صغير-0كبير-1.jpg";
import ImageTest26 from "../../photo/meat_product/كفتة-صغير-كبير (1).jpg";
import ImageTest27 from "../../photo/meat_product/كفتة-صغير-كبير.jpg";
import ImageTest28 from "../../photo/meat_product/سجق-صغير-كبير-2.jpg";
import chicken_breast from "../../photo/chickens/chicken_breast.png";
import chicken_hip from "../../photo/chickens/chicken_hip.jpg";
import whole_chicken from "../../photo/chickens/whole_chicken.png";
import shawerma from "../../photo/chickens/shawrma.png";
import Nour from "../../photo/Nour.png";
import Black_pepper from "../../photo/species/Black_pepper.png";
import Cardamom from "../../photo/species/Cardamom.png";
import Chili from "../../photo/species/Chili.png";
import Cinnamon from "../../photo/species/Cinnamon.png";
import Laura_Paper from "../../photo/species/Laura Paper.png";
import Nutmeg from "../../photo/species/Nutmeg.png";
import Paprika from "../../photo/species/Paprika.png";
import carnation from "../../photo/species/carnation.png";
import cumin from "../../photo/species/cumin.png";
import ginger from "../../photo/species/ginger.png";
import saffron from "../../photo/species/saffron.png";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function Home() {
  const [Arabic, setArabic] = useState(true);
  return (
    <>
      <section>
        <NavBar Arabic={Arabic} setArabic={setArabic} />
      </section>
      <section
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example "
        style={{ backgroundColor: "#ffff" }}
        tabindex="0"
      >
        {Arabic ? (
          <section className=" section1_bg  bg-flip  " >
            <div className="container-fluid">
              <div className=" row text_div left-to-right  ">
                <div className="text1_div  col-xxl-5 col-xl-5 col-lg-5 col-md-12  bg-flip me-5  col-12 d-flex" style={{flexDirection:"column",alignItems:"self-start",gap:10}} >
                  <h3 className="text2-content right-to-left mt-5 " style={{fontSize:"4.5rem",fontWeight:700,display:"inline-block"}}>
                    دلتا للاستيراد والتصدير
                  </h3>
                  <h5 className="text-balck mt-2 right-to-left" style={{color:"#000",WebkitTextFillColor:"#000",fontSize:18}}>
                    أكثر من 38 عامًا من الخبرة في مجال اللحوم المجمدة
                  </h5>
                </div>

                <div className=" text2_div col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 bg-flip">
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className=" section1_bg left-to-right " style={{transform: "rotateY(180deg)"}} >
            <div className="container-fluid">
              <div className=" row text_div left-to-right  ">
                <div className="text1_div  col-xxl-5 col-xl-5 ms-5 col-lg-5 col-md-12  col-12 " style={{transform: "rotateY(-180deg)"}}  >
                  <h2 className="text2-content mt-5" style={{fontSize:"4.5rem",fontWeight:700}}>
                    Delta for import & export
                  </h2>
                  <p className="text-black   mt-3" style={{color:"#000",WebkitTextFillColor:"#000",fontSize:18}}>
                    More than 38 years of experience in frozen meat
                  </p>
                </div>
                <div className=" text2_div col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
                </div>
              </div>
            </div>
          </section>
        )}
        {Arabic ? (
          <section id="aboutUs" className="section2_bg vh-100 mb-5 pt-5  ">
            <div className="container ">
              <div className="row right-to-left ">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12  ">
                  <div className=" mt-5 underline right-to-left">
                    <h2 className=" sec2_text1">عن الموجي جروب</h2>
                  </div>

                  <div className="mt-5 right-to-left">
                    <p className="text-black" style={{fontSize:18}}>
                      خبرة أكثر من 38 عاما في مجال اللحوم المجمدة الموجي
                      <br />
                      يريد اسمًا له تاريخ من أعلى مستويات الجودة المجمدة
                      <br />
                      لحمة.
                      <h5 className="mt-3 " style={{ color: "#BD0000",fontSize:"1.5rem" }}>
                        مصر:
                      </h5>
                      الشركة الرائدة الأولى في جمهورية مصر العربية في
                      <br />
                      استيراد اللحوم المجمدة . <br /> شركة الموجي للتجارة تستورد
                      (لحوم - كبدة - كلاوي- <br />
                      القلب - الدهون). من أفضل المراعي في (الهند - البرازيل -
                      أستراليا - <br />
                      كولومبيا - باراجواي).
                      <h5 className="mt-3" style={{ color: "#BD0000",fontSize:"1.5rem" }}>
                        المملكة العربية السعودية:
                      </h5>
                      نبحث دائما عن الأفضل لتغطية احتياجات عملائنا المميزين
                      وتقديم أفضل المنتجات
                      <br />
                      وأقل الأسعار.
                    </p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 position-relative  left_to_right">
                  <div className="  circles_div   ">
                    <div className=" circle_photo1  ">
                      <img className="w-100 " src={ImageTest} alt="" />
                    </div>
                    <div className=" circle_photo2 ">
                      <img className="w-100 " src={ImageTest1} alt="" />
                    </div>
                    <div className="circle_photo3 ">
                      <img className="w-100  " src={ImageTest2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section id="aboutUs" className="section2_bg h-auto pb-5 pt-5   ">
            <div className="container ">
              <div className="row  ">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12  ">
                  <div className=" mt-5 underline ">
                    <h2 className=" sec2_text1">About Elmogy group</h2>
                  </div>

                  <div className="mt-5  ">
                    <p className="text-black " style={{fontSize:18}}>
                      More than 38 years of experience in frozen meat, Elmogy
                      <br />
                      wants a name with a history of the highest quality frozen
                      <br />
                      meat.
                      <h5 className="mt-3 " style={{ color: "#BD0000",fontSize:"1.5rem" }}>
                        Egypt:
                      </h5>
                      The first leading company in the Arab Republic of Egypt in
                      <br />
                      importing frozen meat. <br /> Elmogy Trade Company imports
                      (meat - liver - kidneys - <br />
                      heart - fat). Of the best pastures in (India - Brazil -
                      Australia - <br />
                      Colombia - Paraguay).
                      <h5 className="mt-3" style={{ color: "#BD0000",fontSize:"1.5rem" }}>
                        Saudi Arabia:
                      </h5>
                      We always look for the best to cover the needs of our
                      distinguished customers and provide the best products
                      <br />
                      and the lowest prices.
                    </p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 position-relative  ">
                  <div className="  circles_div   ">
                    <div className=" circle_photo1  ">
                      <img className="w-100 " src={ImageTest} alt="" />
                    </div>
                    <div className=" circle_photo2 ">
                      <img className="w-100 " src={ImageTest1} alt="" />
                    </div>
                    <div className="circle_photo3 ">
                      <img className="w-100  " src={ImageTest2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {Arabic ? (
          <section
            id="OurProducts"
            className=" h-auto  mb-4 pt-5 position-relative"
          >
            <div className=" container-fluid">
              <div className="row justify-content-center ">
                <div className=" mt-5  underline right-to-left me-5">
                  <h2 className=" sec2_text1 me-5 ">منتجاتنا </h2>
                </div>

                <div className="section3_bg pb-5">
                  <div className=" sec3-text-underline d-flex justify-content-center">
                    <h2 className="text-white text-center mt-3 ">لحوم هندي</h2>
                  </div>

                  <div className=" mx-auto mt-5  w-75 ">
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper "
                      slidesPerView={5}
                      spaceBetween={20}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400: {
                          slidesPerView: 1,
                        },
                        500: {
                          slidesPerView: 2,
                        },
                        600: {
                          slidesPerView: 2,
                        },
                        639: {
                          slidesPerView: 2,
                        },
                        750: {
                          slidesPerView: 3,
                        },
                        865: {
                          slidesPerView: 3,
                        },
                        1000: {
                          slidesPerView: 5,
                        },
                        1500: {
                          slidesPerView: 5,
                        },
                        1700: {
                          slidesPerView: 7,
                        },
                        2560: {
                          slidesPerView: 8,
                        },
                        3840: {
                          slidesPerView: 9,
                        },
                        4096: {
                          slidesPerView: 10,
                        },
                        5120: {
                          slidesPerView: 11,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <img
                          src={ImageTest4}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">رقبه</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest5}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center"> انتركوت</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest6}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center"> أرباع</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest7}
                          className="w-100 rounded-2"
                          alt=""
                        />

                        <h5 className="text-white text-center">روزبيف</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest8}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">سمانه</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest9}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">سن</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest16}
                          className="w-100 rounded-2"
                          alt=""
                        />

                        <h5 className="text-white text-center">صوابع</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest17}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">ظهر-فخده</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest18}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">فخده كامله</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest19}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">فليتو</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest20}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">كتف</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest21}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">كولاطه</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest22}
                          className="w-100 rounded-2"
                          alt=""
                        />

                        <h5 className="text-white text-center">وش-فخده</h5>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="sec3-line col-5 text-center mt-5"></div>
                <div className="section3_bg mt-5 pb-5">
                  <div className=" sec3-text-underline d-flex justify-content-center">
                    <h2 className="text-white text-center mt-3 ">
                      مصنعات اللحوم
                    </h2>
                  </div>
                  <div className=" mx-auto mt-5  w-75 ">
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper "
                      slidesPerView={5}
                      spaceBetween={20}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400: {
                          slidesPerView: 1,
                        },
                        500: {
                          slidesPerView: 2,
                        },
                        600: {
                          slidesPerView: 2,
                        },
                        639: {
                          slidesPerView: 2,
                        },
                        750: {
                          slidesPerView: 3,
                        },
                        865: {
                          slidesPerView: 3,
                        },
                        1000: {
                          slidesPerView: 5,
                        },
                        1500: {
                          slidesPerView: 5,
                        },
                        1700: {
                          slidesPerView: 7,
                        },
                        2560: {
                          slidesPerView: 8,
                        },
                        3840: {
                          slidesPerView: 9,
                        },
                        4096: {
                          slidesPerView: 10,
                        },
                        5120: {
                          slidesPerView: 11,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <img
                          src={ImageTest23}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center">برجر صغير</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest24}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center">برجر كبير</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest25}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center"> سجق صغير</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest26}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center"> كفتة كبير</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest27}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center"> كفتة صغير</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest28}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center"> سجق كبير</h5>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="sec3-line col-5 text-center mt-5"></div>
                <div className="checken_bg mt-5 pb-5">
                  <div className=" sec3-text-underline d-flex justify-content-center">
                    <h2 className="text-white text-center mt-3 ">
                      مصنعات الفراخ
                    </h2>
                  </div>
                  <div className=" mx-auto mt-5  w-75 d-flex justify-content-center">
                    <div className="me-5">
                      <img src={whole_chicken} className="photo_size " alt="" />
                      <h5 className="text-white text-center">فرخة كاملة</h5>
                    </div>
                    <div className="me-5">
                      <img src={chicken_breast} className="photo_size" alt="" />
                      <h5 className="text-white text-center">صدور فراخ</h5>
                    </div>
                    <div>
                      <img
                        src={shawerma}
                        className="photo_size rounded-4"
                        alt=""
                      />
                      <h5 className="text-white text-center">شاويرما</h5>
                    </div>
                  </div>
                </div>
                <div className="sec3-line col-5 text-center mt-5"></div>
                <div className="speics_bg mt-5 pb-5">
                  <div className=" sec3-text-underline d-flex justify-content-center">
                    <h2 className="text-white text-center mt-3 ">توابل</h2>
                  </div>
                  <div className=" mx-auto mt-5  w-75 ">
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper "
                      slidesPerView={3}
                      spaceBetween={20}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400: {
                          slidesPerView: 1,
                        },
                        500: {
                          slidesPerView: 2,
                        },
                        600: {
                          slidesPerView: 2,
                        },
                        639: {
                          slidesPerView: 2,
                        },
                        750: {
                          slidesPerView: 3,
                        },
                        865: {
                          slidesPerView: 3,
                        },
                        1000: {
                          slidesPerView: 5,
                        },
                        1500: {
                          slidesPerView: 5,
                        },
                        1700: {
                          slidesPerView: 7,
                        },
                        2560: {
                          slidesPerView: 8,
                        },
                        3840: {
                          slidesPerView: 9,
                        },
                        4096: {
                          slidesPerView: 10,
                        },
                        5120: {
                          slidesPerView: 11,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <img src={Black_pepper} className="w-100" alt="" />
                        <h5 className="text-white text-center">فلفل اسود</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Cardamom} className="w-100" alt="" />
                        <h5 className="text-white text-center">حب الهال</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Chili} className="w-100" alt="" />
                        <h5 className="text-white text-center">
                          {" "}
                          الفلفل الحار
                        </h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Cinnamon} className="w-100" alt="" />
                        <h5 className="text-white text-center"> قرفة</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Laura_Paper} className="w-100" alt="" />
                        <h5 className="text-white text-center"> ورقة لورا</h5>
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={Nutmeg} className="w-100" alt="" />
                        <h5 className="text-white text-center"> جوزة الطيب</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Paprika} className="w-100" alt="" />
                        <h5 className="text-white text-center"> فلفل أحمر</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={carnation} className="w-100" alt="" />
                        <h5 className="text-white text-center"> قرنفل</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={cumin} className="w-100" alt="" />
                        <h5 className="text-white text-center"> كمون</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={ginger} className="w-100" alt="" />
                        <h5 className="text-white text-center"> زنجبيل</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={saffron} className="w-100" alt="" />
                        <h5 className="text-white text-center"> زعفران</h5>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section
            id="OurProducts"
            className=" h-auto  mb-4 pt-5 position-relative"
          >
            <div className=" container-fluid">
              <div className="row justify-content-center ">
                <div className=" mt-5 underline">
                  <h2 className=" sec2_text1 ms-5">Our products</h2>
                </div>
                <div className="section3_bg pb-5">
                  <div className=" sec3-text-underline d-flex justify-content-center">
                    <h2 className="text-white text-center mt-3 ">
                      Indian meat
                    </h2>
                  </div>

                  <div className=" mx-auto mt-5  w-75 ">
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper "
                      slidesPerView={5}
                      spaceBetween={20}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400: {
                          slidesPerView: 1,
                        },
                        500: {
                          slidesPerView: 2,
                        },
                        600: {
                          slidesPerView: 2,
                        },
                        639: {
                          slidesPerView: 2,
                        },
                        750: {
                          slidesPerView: 3,
                        },
                        865: {
                          slidesPerView: 3,
                        },
                        1000: {
                          slidesPerView: 5,
                        },
                        1500: {
                          slidesPerView: 5,
                        },
                        1700: {
                          slidesPerView: 7,
                        },
                        2560: {
                          slidesPerView: 8,
                        },
                        3840: {
                          slidesPerView: 9,
                        },
                        4096: {
                          slidesPerView: 10,
                        },
                        5120: {
                          slidesPerView: 11,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <img
                          src={ImageTest4}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">Neck</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest5}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center"> Cube roll</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest6}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center"> Forequarter</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest7}
                          className="w-100 rounded-2"
                          alt=""
                        />

                        <h5 className="text-white text-center"> Strip lion</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest8}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">Thick Flank</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest9}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">Chunk</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest16}
                          className="w-100 rounded-2"
                          alt=""
                        />

                        <h5 className="text-white text-center">
                          {" "}
                          Chuck Tender
                        </h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest17}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center"> Silver Side</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest18}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">full thigh</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest19}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">Tender Lion</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest20}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">Shoulder</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest21}
                          className="w-100 rounded-2"
                          alt=""
                        />
                        <h5 className="text-white text-center">Rump Steak</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest22}
                          className="w-100 rounded-2"
                          alt=""
                        />

                        <h5 className="text-white text-center">Top Side</h5>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="sec3-line col-5 text-center mt-5"></div>
                <div className="section3_bg mt-5 pb-5">
                  <div className=" sec3-text-underline d-flex justify-content-center">
                    <h2 className="text-white text-center mt-3 ">
                      meat products
                    </h2>
                  </div>
                  <div className=" mx-auto mt-5  w-75 ">
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper "
                      slidesPerView={5}
                      spaceBetween={20}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400: {
                          slidesPerView: 1,
                        },
                        500: {
                          slidesPerView: 2,
                        },
                        600: {
                          slidesPerView: 2,
                        },
                        639: {
                          slidesPerView: 2,
                        },
                        750: {
                          slidesPerView: 3,
                        },
                        865: {
                          slidesPerView: 3,
                        },
                        1000: {
                          slidesPerView: 5,
                        },
                        1500: {
                          slidesPerView: 5,
                        },
                        1700: {
                          slidesPerView: 7,
                        },
                        2560: {
                          slidesPerView: 8,
                        },
                        3840: {
                          slidesPerView: 9,
                        },
                        4096: {
                          slidesPerView: 10,
                        },
                        5120: {
                          slidesPerView: 11,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <img
                          src={ImageTest23}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center">small burger</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest24}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center">big burger</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest25}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center">
                          {" "}
                          small sausage
                        </h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest26}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center"> small kofta</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest27}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center"> large kofta</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={ImageTest28}
                          className="w-100 rounded-4"
                          alt=""
                        />
                        <h5 className="text-white text-center"> big sausage</h5>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="sec3-line col-5 text-center mt-5"></div>
                <div className="checken_bg mt-5 pb-5">
                  <div className=" sec3-text-underline d-flex justify-content-center">
                    <h2 className="text-white text-center mt-3 ">
                      chicken products
                    </h2>
                  </div>
                  <div className=" mx-auto mt-5  w-75 d-flex justify-content-center">
                    <div className="me-5">
                      <img src={whole_chicken} className="photo_size " alt="" />
                      <h5 className="text-white text-center">whole chicken</h5>
                    </div>
                    <div className="me-5">
                      <img src={chicken_breast} className="photo_size" alt="" />
                      <h5 className="text-white text-center">chicken breast</h5>
                    </div>
                    <div>
                      <img
                        src={shawerma}
                        className="photo_size rounded-4"
                        alt=""
                      />
                      <h5 className="text-white text-center"> Shawerma</h5>
                    </div>
                  </div>
                </div>
                <div className="sec3-line col-5 text-center mt-5"></div>
                <div className="speics_bg mt-5 pb-5">
                  <div className=" sec3-text-underline d-flex justify-content-center">
                    <h2 className="text-white text-center mt-3 ">species</h2>
                  </div>
                  <div className=" mx-auto mt-5  w-75 ">
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper "
                      slidesPerView={3}
                      spaceBetween={20}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400: {
                          slidesPerView: 1,
                        },
                        500: {
                          slidesPerView: 2,
                        },
                        600: {
                          slidesPerView: 2,
                        },
                        639: {
                          slidesPerView: 2,
                        },
                        750: {
                          slidesPerView: 3,
                        },
                        865: {
                          slidesPerView: 3,
                        },
                        1000: {
                          slidesPerView: 5,
                        },
                        1500: {
                          slidesPerView: 5,
                        },
                        1700: {
                          slidesPerView: 7,
                        },
                        2560: {
                          slidesPerView: 8,
                        },
                        3840: {
                          slidesPerView: 9,
                        },
                        4096: {
                          slidesPerView: 10,
                        },
                        5120: {
                          slidesPerView: 11,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <img src={Black_pepper} className="w-100" alt="" />
                        <h5 className="text-white text-center">Black_pepper</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Cardamom} className="w-100" alt="" />
                        <h5 className="text-white text-center">Cardamom</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Chili} className="w-100" alt="" />
                        <h5 className="text-white text-center"> Chili</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Cinnamon} className="w-100" alt="" />
                        <h5 className="text-white text-center"> Cinnamon</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Laura_Paper} className="w-100" alt="" />
                        <h5 className="text-white text-center"> Laura_Paper</h5>
                      </SwiperSlide>

                      <SwiperSlide>
                        <img src={Nutmeg} className="w-100" alt="" />
                        <h5 className="text-white text-center"> Nutmeg</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Paprika} className="w-100" alt="" />
                        <h5 className="text-white text-center"> Paprika</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={carnation} className="w-100" alt="" />
                        <h5 className="text-white text-center"> carnation</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={cumin} className="w-100" alt="" />
                        <h5 className="text-white text-center"> cumin</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={ginger} className="w-100" alt="" />
                        <h5 className="text-white text-center"> ginger</h5>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={saffron} className="w-100" alt="" />
                        <h5 className="text-white text-center"> saffron</h5>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {Arabic ? (
          <section id="BrandNour" className="section2_bg h-auto mb-5 pt-5">
            <div className="container right-to-left">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 ">
                <div className=" mt-5 underline">
                  <h2 className=" sec2_text1">براند نور</h2>
                </div>
              </div>
              <div className=" row justify-content-center mt-5">
                <div className=" text-black text-center  col-xxl-4 col-xl-4 col-lg-4 col-12 mt-5 pt-4">
                  <h5 className="mb-2 me-3">نور أحمر</h5>
                  <img className="Red_Nour_img" src={ImageTest10} alt="" />
                </div>
                <div className=" text-black text-center  col-xxl-4 col-xl-4 col-lg-4 col-12 ">
                  <h5 className="mb-2  text-center">نور جولد الانا</h5>
                  <img src={Nour} alt="" />
                </div>
                <div className=" text-black  text-center col-xxl-4 col-xl-4 col-lg-4 col-12  pb-5 mt-5 pt-4">
                  <h5 className="mb-2 me-3">نور جولد</h5>
                  <img src={ImageTest11} alt="" />
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section id="BrandNour" className="section4_bg h-auto  pt-5 pb-5">
            <div className="container">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 ">
                <div className=" mt-5 underline">
                  <h2 className=" sec2_text1">Brand Nour</h2>
                </div>
              </div>
              <div className=" row justify-content-center mt-5">
                <div className=" text-black text-center  col-xxl-4 col-xl-4 col-lg-4 col-12 mt-5 pt-4">
                  <h5 className="mb-2 me-3">Red Nour</h5>
                  <img className="Red_Nour_img" src={ImageTest10} alt="" />
                </div>
                <div className=" text-black text-center  col-xxl-4 col-xl-4 col-lg-4 col-12 ">
                  <h5 className="mb-2">Nour Gold Allana</h5>
                  <img src={Nour} alt="" />
                </div>
                <div className=" text-black  text-center col-xxl-4 col-xl-4 col-lg-4 col-12  pb-5 mt-5 pt-4">
                  <h5 className="mb-2 me-3">Nour Gold</h5>
                  <img src={ImageTest11} alt="" />
                </div>
              </div>
            </div>
          </section>
        )}
        {Arabic ? (
          <section id="Quality" className="section4_bg pt-5 ">
            <div className="container-fluid right-to-left ">
              <div>
                <div className=" me-5 mt-5 underline">
                  <h2 className="me-4 sec2_text1">الجودة</h2>
                </div>
              </div>
              <div className="row section4_div mt-5 text-white ">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12  mt-5">
                  <h5 className="me-5  fw-bold">
                    نحن نهتم بالجودة تماماً كما تهتمون أنتم!
                  </h5>
                  <h6 className="me-5 mb-5">
                    في عدد من البلدان حول العالم
                    <br /> تشهد طلبات المنتجات الحيوانية زيادة حادة <br /> تلبى
                    هذه الطلبات إلى حد كبير من خلال إنتاج الحيوانات الضخم على
                    نطاق واسع
                    <br /> وسلاسل الغذاء المرتبطة بها .
                  </h6>
                  <div className="row mb-5">
                    <div className="col-10 me-5">
                      <div className="row">
                        <div className="col-1">
                          <span className=" fs-5">
                            <TbSquareRoundedNumber1Filled />
                          </span>
                        </div>
                        <div className="col-11 mt-2">
                          <h6>إدارة موارد الوراثة الحيوانية</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <span className=" fs-5">
                            <TbSquareRoundedNumber2Filled />
                          </span>
                        </div>
                        <div className="col-11 mt-2">
                          <h6>
                            الثروة الحيوانية، تغير المناخ واستخدام الموارد
                            الطبيعية
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <span className=" fs-5">
                            <TbSquareRoundedNumber3Filled />
                          </span>
                        </div>
                        <div className="col-11 mt-2">
                          <h6>الرعي</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 position-relative">
                  <div className=" d-flex">
                    <div className="Square_photo1 ">
                      <img className="w-100 h-100 " src={ImageTest13} alt="" />
                    </div>
                    <div className="Square_photo2 ">
                      <img className="w-100 h-100" src={ImageTest14} alt="" />
                    </div>
                    <div className="Square_photo3 ">
                      <img className="w-100 h-100" src={ImageTest15} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section id="Quality" className="  pt-4 ">
            <div className="container-fluid  ">
              <div>
                <div className=" ms-5  underline">
                  <h2 className="ms-4 sec2_text1">Quality</h2>
                </div>
              </div>
              <div className="row section4_div mt-5 ">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12  mt-5">
                  <h5 className="ms-5  fw-bold text-white">
                    We care about quality as you do!
                  </h5>
                  <p className="ms-5 mb-5 text-white">
                    In a number of countries around the world, the <br />
                    sharply increasing demand for animal products is <br /> met
                    in large part by large-scale livestock production
                    <br /> and associated food chains.
                  </p>
                  <div className="row mb-5">
                    <div className="col-10 ms-5">
                      <div className="row">
                        <div className="col-1">
                          <span className=" fs-5 text-white">
                            <TbSquareRoundedNumber1Filled />
                          </span>
                        </div>
                        <div className="col-11 mt-2">
                          <h6 className="text-white">
                            Management Of Animal Genetic Resources
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <span className=" fs-5 text-white">
                            <TbSquareRoundedNumber2Filled />
                          </span>
                        </div>
                        <div className="col-11 mt-2">
                          <h6 className="text-white">
                            Livestock, climate change and the use of natural
                            resources
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
                          <span className=" fs-5 text-white">
                            <TbSquareRoundedNumber3Filled />
                          </span>
                        </div>
                        <div className="col-11 mt-2">
                          <h6 className="text-white">Grazing</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 position-relative">
                  <div className=" d-flex">
                    <div className="Square_photo1 ">
                      <img className="w-100 h-100 " src={ImageTest13} alt="" />
                    </div>
                    <div className="Square_photo2 ">
                      <img className="w-100 h-100" src={ImageTest14} alt="" />
                    </div>
                    <div className="Square_photo3 ">
                      <img className="w-100 h-100" src={ImageTest15} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {Arabic ? (
          <section id="ContactUs">
            <div className="footer_wave bg-flip  " style={{transform: "rotateY(180deg)"}}>
              <div className="container-fluid right-to-left">
                <div className="row special  bg-flip " style={{transform: "rotateY(-180deg)"}}>
                  <div className="  col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12    ">
                    <div>
                      <h5 className="text-white  mt-2  me-4  ">الموجي جروب</h5>
                      <p className="text-white  mt-5 ">
                        أكثر من 38 عامًا من الخبرة في دلتا اللحوم المجمدة تريد
                        اسمًا له تاريخ من أعلى مستويات الجودة للحوم المجمدة في
                        السوق المصري
                      </p>
                      <img
                        className="mb-3 mt-5 ms-5 "
                        src={ImageTest12}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 ">
                    <div>
                      <h5 className="text-white me-4   mt-2">فروع مصر</h5>
                      <h5 className="text-white ms-5 mt-5  ">
                        طنطا:
                        <span className=" ms-2 me-1">
                          <MdLocationPin />
                        </span>
                        <span className=" fs-6 ">
                          المقر الادارى برج التاون مول اول البحر مع الخان الدور
                          12 شقة 11
                        </span>
                      </h5>
                      {/* <div className=" ms-5  text-white">
                        <h6 className="me-5 ">
                          <span>
                            <BsTelephoneForward className="ms-3 me-2" />
                          </span>
                          0403420712
                        </h6>
                      </div> */}
                    </div>
                    <div className="mt-3 right-to-left ">
                      <h5 className="text-white ms-5  ">
                        بنها:
                        <span className=" ms-2 me-1">
                          <MdLocationPin />
                        </span>
                        <span className=" fs-6">
                          ثلاجة الامل - طريق القاهرة اسكندرية الزراعى
                        </span>
                      </h5>
                    </div>
                    <div
                      className=" ms-5  text-white"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      <h5>تواصل معنا:</h5>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 20,
                          flexWrap: "wrap",
                        }}
                      >
                        <h6 className="">
                          <BsTelephoneForward className="ms-3" />
                          01100075910
                        </h6>

                        <h6 className="">
                          <BsTelephoneForward className="ms-3" />
                          01228808843
                        </h6>

                        <h6 className="">
                          <BsTelephoneForward className="ms-3" />
                          01116222877
                        </h6>

                      </div>
                    </div>
                  </div>
                  <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 ">
                    <div>
                      <h5 className="text-white me-4   mt-2">فرع السعودية</h5>
                      <h5 className="text-white ms-5 mt-5  ">
                        الرياض:
                        <span className=" ms-2 me-1">
                          <MdLocationPin />
                        </span>
                        <span className=" fs-6 ">
                         حي الملك فهد
                        </span>
                      </h5>
                      {/* <div className=" ms-5  text-white">
                        <h6 className="me-5 ">
                          <span>
                            <BsTelephoneForward className="ms-3 me-2" />
                          </span>
                          0403420712
                        </h6>
                      </div> */}
                    </div>
                    <div
                      className=" ms-5  text-white"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      <h5>تواصل معنا:</h5>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 20,
                          flexWrap: "wrap",
                        }}
                      >
                        <h6 className="">
                          <BsTelephoneForward className="ms-3 " />
                          966582597117+
                        </h6>

                        <h6 className="">
                          <BsTelephoneForward className="ms-3 " />
                          966536812703+
                        </h6>

                        <h6 className="">
                          <BsTelephoneForward className="ms-3 " />
                          966530282721+
                        </h6>

                      </div>
                    </div>
                  </div>
                  {/* <div className="  col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 text-white  pb-4 ">
                    <h5 className=" me-5  mt-2  ">تواصل معنا</h5>
                    <h5 className="me-5 mb-3 mt-2 mt-5 ">التسويق</h5>
                    <h6 className=" me-5 ">
                      <span className="ms-2">
                        <BsWhatsapp />
                      </span>
                      01116222877
                    </h6>
                    <h5 className="me-5 mb-3 mt-2  ">المبيعات</h5>
                    <h6 className="me-5 ">
                      <span className="ms-2">
                        <BsWhatsapp />
                      </span>
                      01050147610
                    </h6>
                    <h5 className="me-5 mb-3 mt-2  ">الادارة</h5>
                    <h6 className="me-5 ">
                      <span className="ms-2">
                        <BsWhatsapp />
                      </span>
                      01228808843
                    </h6>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section id="ContactUs">
            <div className="footer_wave">
              <div className="container-fluid">
                <div className="row special  left_to_right">
                  <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12   pt-5 "> 
                    <h5 className="text-white mb-4 mt-2   " >
                      Elmogy group
                    </h5>
                    <p className="text-white mb-4  ">
                      More than 38 years of experience
                       in frozen meat Delta wants a name with a
                      history of the  highest quality frozen meat in the
                       Egyptian market
                    </p>
                    <img
                      className="mb-3  "
                      src={ImageTest12}
                      alt=""
                    />
                  </div>
                  <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-12 pt-5">
                    <div>
                      <h5 className="text-white me-4   mb-4 mt-2">Egypt Branches</h5>
                      <h5 className="text-white   ">
                        Tanta:
                        <span className=" ms-2 me-1">
                          <MdLocationPin />
                        </span>
                        <span className=" fs-6 ">
                          Administrative headquarters, Town Tower Mall, at the
                          beginning of the sea, with Al Khan, 12th floor,
                          apartment 11
                        </span>
                      </h5>
                      {/* <div className="   text-white">
                        <h6 className=" mt-3">
                          <span>
                            <BsTelephoneForward className="ms-3 me-2 " />
                          </span>
                          0403420712
                        </h6>
                      </div> */}
                    </div>
                    <div className="mt-2 ">
                      <h5 className="text-white   ">
                        Banha:
                        <span className=" ms-2 me-1">
                          <MdLocationPin />
                        </span>
                        <span className=" fs-6">
                          Al-Amal Coldstore - Cairo Alexandria Agricultural Road
                        </span>
                      </h5>
                      {/* <div className="  text-white">
                        <h6 className=" mt-3">
                          <span>
                            <BsTelephoneForward className="ms-3 me-3" />
                          </span>
                          00201116222877
                        </h6>
                      </div> */}
                    </div>
                    <div
                      className=" text-white"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      <h5>Contact us :</h5>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 20,
                          flexWrap: "wrap",
                        }}
                      >
                        <h6 className="">
                          <BsTelephoneForward className="me-3" />
                          01100075910
                        </h6>

                        <h6 className="">
                          <BsTelephoneForward className="mx-3" />
                          01228808843
                        </h6>

                        <h6 className="">
                          <BsTelephoneForward className="mx-3" />
                          01116222877
                        </h6>
                        

                      </div>
                    </div>
                  </div>
                  <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-12 pt-5">
                    <div>
                      <h5 className="text-white me-4   mb-4 mt-2">Saudia Branche</h5>
                      <h5 className="text-white   ">
                       Riyadh:
                        <span className=" ms-2 me-1">
                          <MdLocationPin />
                        </span>
                        <span className=" fs-6 ">
                        King Fahd District
                        </span>
                      </h5>
                      {/* <div className="   text-white">
                        <h6 className=" mt-3">
                          <span>
                            <BsTelephoneForward className="ms-3 me-2 " />
                          </span>
                          0403420712
                        </h6>
                      </div> */}
                    </div>
                    <div
                      className=" text-white"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      <h5>Contact us :</h5>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 20,
                          flexWrap: "wrap",
                        }}
                      >
                        <h6 className="">
                          <BsTelephoneForward className=" me-3 " />
                          +966582597117
                        </h6>

                        <h6 className="">
                          <BsTelephoneForward className=" mx-3 " />
                          +966536812703
                        </h6>

                        <h6 className="">
                          <BsTelephoneForward className=" mx-3 " />
                          +966530282721
                        </h6>
                        

                      </div>
                    </div>
                  </div>
                  {/* <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 text-white pt-5 ">
                    <h5 className=" me-5 mb-4 mt-2  ">Contact us</h5>
                    <h6 className=" me-5">
                      Marketing :
                      <span className="ms-2 me-2">
                        <BsWhatsapp />
                      </span>
                      01116222877
                    </h6>
                    <h6 className="me-5 ">
                      the sales :
                      <span className="ms-2 me-2">
                        <BsWhatsapp />
                      </span>
                      01050147610
                    </h6>
                    <h6 className="me-5">
                      management :
                      <span className="ms-2 me-2">
                        <BsWhatsapp />
                      </span>
                      01228808843
                    </h6>
                    <h6 className="mt-5">
                      email :
                      <span className="ms-2 me-2">
                        <MdEmail />
                      </span>
                      info@elmogygroub
                    </h6>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        )}
        <footer className="footerlast text-white">
          <p className=" pt-2 ms-5">
            All rights reserved EBDAA
            <span className=" fs-6">software house</span>
          </p>
        </footer>
      </section>
    </>
  );
}
{
  /* <section id="ContactUs">
<div className="footer_wave ">
  <div className="row   special ">
    <div className=" col-xxl-3 col-xl-3 col-lg-5 col-md-12 col-12  ">
      <h5 className="text-white mb-4 mt-2 ms-5 ">Elmogy Group</h5>
      <p className="text-white mb-4 ms-5 ">
        More than 20 years of experience
        <br /> in frozen meat Delta wants a<br /> name with a history
        of the <br /> highest quality frozen meat in the <br />
        Egyptian market
      </p>
      <img className="mb-3 ms-5" src={ImageTest12} alt="" />
    </div>
    <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-12  ">
      <h5 className="text-white ms-5  mb-4 mt-2">Branches</h5>
      <div className="row mb-5">
        <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-3 col-3 ">
          <h5 className="text-white ms-5 ">Tanta:</h5>
        </div>
        <div className="col-8 text-white">
          <div className="row">
            <div className="col-1">
              <span className="me-2">
                <MdLocationPin />
              </span>
            </div>
            <div className="col-10">
              <h6>
                Al Haramain Refrigerator - Cairo Alexandria
                Agricultural Road - next to Kafr Essam Bridge
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <span>
                <BsTelephoneForward className="me-2" />
              </span>
            </div>
            <div className="col-10">
              <h6>00201104549647</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <span>
                <BsTelephoneForward className="me-2" />
              </span>
            </div>
            <div className="col-10">
              <h6>00201011496001</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <span>
                <BsTelephoneForward className="me-2" />
              </span>
            </div>
            <div className="col-10">
              <h6>20403412257</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-4 ">
          <h5 className="text-white ms-4  ">Banha:</h5>
        </div>
        <div className="col-8 text-white">
          <div className="row">
            <div className="col-1">
              <span className="me-2">
                <MdLocationPin />
              </span>
            </div>
            <div className="col-10">
              <h6>
                Al-Amal Coldstore - Cairo Alexandria Agricultural Road
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <span>
                <BsTelephoneForward className="me-2" />
              </span>
            </div>
            <div className="col-11">
              <h6>00201116222877</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-12 col-12  text-white ">
      <h5 className=" mb-4 mt-2 ms-5 ">Contact us</h5>

      <div className="row ms-5 ">
        <div className="col-1">
          <span>
            <BsWhatsapp />
          </span>
        </div>
        <div className="col-10 mt-1">
          <h6>00201022372510</h6>
        </div>
      </div>
      <div className="row ms-5">
        <div className="col-1">
          <span>
            <BsWhatsapp />
          </span>
        </div>
        <div className="col-10 mt-1">
          <h6>00201003005063</h6>
        </div>
      </div>
      <div className="row ms-5">
        <div className="col-1">
          <span>
            <BsWhatsapp />
          </span>
        </div>
        <div className="col-10 mt-1">
          <h6>00201228808843</h6>
        </div>
      </div>
      <div className="row ms-5">
        <div className="col-1">
          <span>
            <BsWhatsapp />
          </span>
        </div>
        <div className="col-10 mt-1">
          <h6>20403415722</h6>
        </div>
      </div>
      <div className="row ms-5 mt-4">
        <div className="col-1">
          <span>
            <MdEmail className=" text-bg-white" />
          </span>
        </div>
        <div className="col-10 mt-1 mb-3">
          <h6>info@elmogygroub.com</h6>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */
}
