// components/ViewAllCards.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import BigText from "./BigText";
import axios from "axios"
let api = "https://dev.to/api/articles";

const ViewAllCards = () => {
    let [allData, setAllData] = useState([])

    const GetApi = async (api) => {
        let res = await axios.get(api)
        allData = res.data
        setAllData(res.data)

    }

    useEffect(() => {
        GetApi(api);
    }, []);

    console.log(allData);

    return (
        <div className=' w-full items-center flex flex-col gap-5 justify-center'>
            <Navbar />
            <div className='w-6/12'>
                <BigText context="All Blog Post" />
            </div>
{/* rendiring cards */}
            <div className='flex flex-col gap-5'>

                <div className='flex  gap-5'>
                    {
                        allData.slice(0, 3).map((el, i) => {
                            // console.log(el.tags);
                            return (
                                <div className="flex border border-solid rounded-lg bg-blue-500 bg-opacity-5 p-2 flex-col items-start gap-5 w-fit" key={i}>
                                    <img className="w-[360px] h-[240px] rounded" src={el.social_image} alt="" />
                                    <div className="flex flex-col w-min gap-5 p-2 items-start min-w-fit">
                                        <div className="flex py-1 px-[10px] items-center rounded-lg w-fit bg-zinc-500 text-blue-500">{el.tags}</div>
                                        <div className="text-2xl font-semibold leading-7">{el.title}</div>
                                        <div className='w-[321px] flex justify-between gap-4'>
                                            <div className='flex gap-3'>
                                                <img className='w-9 h-9 rounded-3xl' src={el.user.profile_image} alt="" />
                                                <div className='text-lg font-medium text-slate-300'>{el.user.name}</div>
                                            </div>
                                            <div className='text-lg font-medium text-slate-300'>{el.readable_publish_date}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='flex  gap-5'>
                    {
                        allData.slice(3, 6).map((el, i) => {
                            // console.log(el.tags);
                            return (
                                <div className="flex border border-solid rounded-lg bg-blue-500 bg-opacity-5 p-2 flex-col items-start gap-5 w-fit" key={i}>
                                    <img className="w-[360px] h-[240px] rounded" src={el.social_image} alt="" />
                                    <div className="flex flex-col w-min gap-5 p-2 items-start min-w-fit">
                                        <div className="flex py-1 px-[10px] items-center rounded-lg w-fit bg-zinc-500 text-blue-500">{el.tags}</div>
                                        <div className="text-2xl font-semibold leading-7">{el.title}</div>
                                        <div className='w-[321px] flex justify-between gap-4'>
                                            <div className='flex gap-3'>
                                                <img className='w-9 h-9 rounded-3xl' src={el.user.profile_image} alt="" />
                                                <div className='text-lg font-medium text-slate-300'>{el.user.name}</div>
                                            </div>
                                            <div className='text-lg font-medium text-slate-300'>{el.readable_publish_date}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='flex  gap-5'>
                    {
                        allData.slice(6, 9).map((el, i) => {
                            // console.log(el.tags);
                            return (
                                <div className="flex border border-solid rounded-lg bg-blue-500 bg-opacity-5 p-2 flex-col items-start gap-5 w-fit" key={i}>
                                    <img className="w-[360px] h-[240px] rounded" src={el.social_image} alt="" />
                                    <div className="flex flex-col w-min gap-5 p-2 items-start min-w-fit">
                                        <div className="flex py-1 px-[10px] items-center rounded-lg w-fit bg-zinc-500 text-blue-500">{el.tags}</div>
                                        <div className="text-2xl font-semibold leading-7">{el.title}</div>
                                        <div className='w-[321px] flex justify-between gap-4'>
                                            <div className='flex gap-3'>
                                                <img className='w-9 h-9 rounded-3xl' src={el.user.profile_image} alt="" />
                                                <div className='text-lg font-medium text-slate-300'>{el.user.name}</div>
                                            </div>
                                            <div className='text-lg font-medium text-slate-300'>{el.readable_publish_date}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='flex  gap-5'>
                    {
                        allData.slice(9, 12).map((el, i) => {
                            // console.log(el.tags);
                            return (
                                <div className="flex border border-solid rounded-lg bg-blue-500 bg-opacity-5 p-2 flex-col items-start gap-5 w-fit" key={i}>
                                    <img className="w-[360px] h-[240px] rounded" src={el.social_image} alt="" />
                                    <div className="flex flex-col w-min gap-5 p-2 items-start min-w-fit">
                                        <div className="flex py-1 px-[10px] items-center rounded-lg w-fit bg-zinc-500 text-blue-500">{el.tags}</div>
                                        <div className="text-2xl font-semibold leading-7">{el.title}</div>
                                        <div className='w-[321px] flex justify-between gap-4'>
                                            <div className='flex gap-3'>
                                                <img className='w-9 h-9 rounded-3xl' src={el.user.profile_image} alt="" />
                                                <div className='text-lg font-medium text-slate-300'>{el.user.name}</div>
                                            </div>
                                            <div className='text-lg font-medium text-slate-300'>{el.readable_publish_date}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
{/* rendiring cards */}


        </div>
    )
};

export default ViewAllCards;
