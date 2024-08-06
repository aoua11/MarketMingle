'use client'
import axios from "axios";
import { SiAffinitydesigner } from "react-icons/si";
import { GrCloudSoftware } from "react-icons/gr";
import { FaBook } from "react-icons/fa6";
import { AiOutlineAudio } from "react-icons/ai";
import { SiVirginmedia } from "react-icons/si";
import { FaAffiliatetheme } from "react-icons/fa";
import { GiVrHeadset } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { TiFlowParallel } from "react-icons/ti";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoMdCreate } from "react-icons/io";
import * as React from 'react';
import Link from "next/link";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Create from "../Create";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius : "30px",
    p: 4,
    
};





export default function Product() {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then((resp) => {
                setProducts(resp.data)
            })
    }, [])


const deleteproduct = async (id)=>{
    await axios.delete(`http://localhost:8000/products/${id}` , {headers : {Authorization : `bearer ${localStorage.getItem("token")}`}});
    const newProducts = [...products];
    setProducts(newProducts.filter(product => product._id !=id));
}

    return (
        <>

            <div className="bg-[#EC4B9A] rounded-full fixed right-5 bottom-5 z-50 opacity-85 hover:cursor-pointer hover:opacity-100">
                <div>

                    <div>
                        <div className="bg-[#EC4B9A]  rounded-full fixed right-5 bottom-5 z-50 opacity-85 hover:cursor-pointer hover:opacity-100">
                            <IoMdCreate onClick={handleOpen} className="size-14 text-center text-white p-4" />
                        </div>
                        <div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">

                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <Create />
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="flex py-4">
                        <a href="" className="px-4 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <TiFlowParallel className=" text-lg mr-3 " /> All</a>
                        <a href="" className="px-4 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <SiAffinitydesigner className=" text-lg mr-3 " />Design</a>
                        <a href="" className="px-4 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <GrCloudSoftware className=" text-lg mr-3 " /> Software & Applications</a>
                        <a href="" className="px-4 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <FaBook className=" text-lg mr-3 " /> E-Books</a>
                        <a href="" className="px-4 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <AiOutlineAudio className=" text-lg mr-3 " /> Audiobooks</a>
                        <a href="" className="px-4 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white">  <SiVirginmedia className=" text-lg mr-3 " /> Digital Media</a>
                        <a href="" className="px-4 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <FaAffiliatetheme className=" text-lg mr-3 " /> Templates & Themes</a>
                        <a href="" className="px-4 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white">  <GiVrHeadset className=" text-lg mr-3 " /> Digital Marketing</a>
                        <a href="" className="px-4 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"><FaReact className=" text-lg mr-3 " /> WeDevelopment</a>
                    </div>
                </div>
            </div>

            {/* /----------------- maping --------------/ */}


            <div className="grid grid-rows-1 grid-cols-4 gap-10 px-32 py-10">
                {
                    products.map((product) => {
                        return (
                            <div key={product._id}>
                                <div className="shadow-lg shadow-pink-300  hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">
                                    <Link href={`/products/${product._id}`}>
                                        <Card sx={{ maxWidth: 280, borderRadius: "20px" }}>
                                            <CardMedia
                                                sx={{ height: 200 }}
                                                image={`http://localhost:8000/${product.image}`}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                                    {product.title}
                                                </Typography>
                                                <div className="flex ">
                                                    <img src="/person1.jpg" className="rounded-full w-8 h-8 aspect-square mb-3 mt-2" />
                                                    <h1 className="flex items-center font-semibold text-xs pl-3 underline">hamid</h1>
                                                </div>
                                                <Typography variant="body2" color="text.secondary">
                                                    {product.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md">BUY</Button>
                                                <Button size="small" className="text-[#EC4B9A] font-semiebold text-lg">{product.price}$</Button>
                                            </CardActions>
                                        </Card>
                                    </Link>
                                    <button onClick={()=> deleteproduct(product._id)} className="bg-[#EC4B9A] px-4 py-1 text-white">delete</button>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}