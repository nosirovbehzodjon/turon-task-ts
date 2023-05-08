"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import detail from "@/styles/pages/detail.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import useQueries from "@/src/hooks/useQueries";
import Loading from "@/src/components/loading";
import { Video, Error } from "@/src/components";
type Employees = {
    id: number;
    fullName: string;
    full_name_en: string;
    photo: string;
};
const Details = () => {
    const pathname = usePathname();
    const id = pathname.split("/").pop();
    const {
        data: details,
        isLoading,
        isError,
    } = useQueries({
        main_key: "movies",
        url: `movie-detail?id=${id}`,
    });
    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <Error message={"something error!"} />;
    }

    const data = details?.data;

    return (
        <main className="container py-3">
            <div className={detail.video}>
                <Video />
            </div>
            <div className={detail.layout}>
                <Image
                    src={data.poster}
                    alt={"poster"}
                    width={200}
                    height={200}
                />
                <aside className={detail.description}>
                    <h3 className={detail.name}> {data.titleEn}</h3>
                    <p className={detail.desc}>{data.description}</p>
                    <p className={detail.year}>{data.year}</p>
                    <ul className={detail.countries}>
                        <span className={detail.paragraph}>countries: </span>
                        {data.countries.map((item: any) => {
                            return (
                                <li key={item.id} className={detail.country}>
                                    {item.title}
                                </li>
                            );
                        })}
                    </ul>
                    <ul className={detail.gener}>
                        <span className={detail.paragraph}>genres: </span>
                        {data.genres.map((item: any) => {
                            return (
                                <li key={item.id} className={detail.country}>
                                    {item.title}
                                </li>
                            );
                        })}
                    </ul>
                    <div className={detail.employees}>
                        {data.people.map((item1: any) => {
                            return (
                                <React.Fragment key={item1.post}>
                                    <h5 className={detail.paragraph}>
                                        {item1.post}
                                    </h5>
                                    <ul>
                                        {item1.employees.map(
                                            (item2: Employees) => {
                                                return (
                                                    <li key={item2.id}>
                                                        {item2.fullName},
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </aside>
            </div>
            <div className={detail.emp_img + " py-3"}>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={30}
                    freeMode={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        850: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {data.people.map((item1: any) => {
                        console.log(item1);
                        return (
                            <React.Fragment key={item1.post}>
                                {item1.employees.map((item2: any) => {
                                    console.log(item2.id);
                                    return (
                                        <React.Fragment key={item2.id}>
                                            {item2.photo ? (
                                                <SwiperSlide key={item2.id}>
                                                    <Image
                                                        className={
                                                            detail.slider_img
                                                        }
                                                        src={item2.photo}
                                                        width={200}
                                                        height={200}
                                                        key={item2.id}
                                                        alt={"hi"}
                                                    />
                                                </SwiperSlide>
                                            ) : null}
                                        </React.Fragment>
                                    );
                                })}
                            </React.Fragment>
                        );
                    })}
                </Swiper>
            </div>
        </main>
    );
};

export default Details;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const { id } = context.query;
//     const response = await fetch(
//         `https://api.cinerama.uz/api-test/movie-detail?id=${id}`,
//         {
//             method: "GET",
//             headers: {
//                 "secret-token": "32ddd0a5-a2b0-4cb0-b5bd-952e5bc3f8db",
//                 "Content-Type": "application/json",
//             },
//         }
//     );
//     const data = await response.json();
//     return {
//         props: {
//             page: data || null,
//         },
//     };
// };
