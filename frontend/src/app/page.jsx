import { FaAngleRight } from "react-icons/fa";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function Landingpage() {
    return (
        <>
            <div className="px-32 py-20 bg-[#faf9f9] rounded-b-3xl">
                <div className="flex justify-between items-center">
                    <div>
                        <div>
                            <h1 className="text-5xl font-black py-7">
                                Discover  Unique <br /> Digital Product In <br />  Our marketplace
                            </h1>
                            <p className="text-sm font-light pb-6">We stand for digital experiences with a wow effect, <br /> Because for us that's the only thing that makes  <br />Lorem ipsum dolor sit, amet consectetur  elit. .</p>
                        </div>
                        <div className="flex">
                            <button className="bg-[#EC4B9A] rounded-2xl px-10 py-1 flex items-center text-white mr-3">
                                Explore
                                <FaAngleRight className="text-white ml-1" />
                            </button>
                            <button className="border-2 rounded-2xl px-10 py-1 ">Contact</button>
                        </div>
                    </div>
                    <div>
                        <img src="/bg.jpg" className="w-[600px] rounded-3xl" />
                    </div>
                </div>
            </div>
            <div>
                <div className="pt-20">
                    <h1 className="text-4xl font-black text-center">
                        Explore In Our Market
                    </h1>
                    <p className="text-xs font-light text-center py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur molestias.</p>
                </div>
                <div className="flex justify-center items-center pt-3">
                    <h3 className="text-white font-light text-sm bg-[#EC4B9A] w-fit px-10 py-2 rounded-2xl">All category</h3>
                </div>
            </div>
            {/* /*----------- seconde part --------*/}

            <div className="grid grid-rows-2 grid-cols-4 mx-32 gap-5 py-20">
                <div className="shadow-lg shadow-pink-300  hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">
                    <Card sx={{ maxWidth: 280, borderRadius: "20px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/design.avif"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                design
                            </Typography>
                            <div className="flex ">
                                <img src="/person1.jpg" className="rounded-full w-8 h-8 aspect-square mb-3 mt-2" />
                                <h1 className="flex items-center font-semibold text-xs pl-3 underline">hamid</h1>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, autem officiis. Similique facere adipisci temporibus.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md">BUY</Button>
                            <Button size="small" className="text-[#EC4B9A] font-semiebold text-lg">60$</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="shadow-lg shadow-pink-300  hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">
                    <Card sx={{ maxWidth: 280, borderRadius: "20px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/nft.avif"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                NFTs
                            </Typography>
                            <div className="flex ">
                                <img src="/person1.jpg" className="rounded-full w-8 h-8 aspect-square mb-3 mt-2" />
                                <h1 className="flex items-center font-semibold text-xs pl-3 underline">hamid</h1>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, autem officiis. Similique facere adipisci temporibus.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md">BUY</Button>
                            <Button size="small" className="text-[#EC4B9A] font-semiebold text-lg">60$</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="shadow-lg shadow-pink-300  hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">
                    <Card sx={{ maxWidth: 280, borderRadius: "20px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/dev.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                Web Devlepment
                            </Typography>
                            <div className="flex ">
                                <img src="/person1.jpg" className="rounded-full w-8 h-8 aspect-square mb-3 mt-2" />
                                <h1 className="flex items-center font-semibold text-xs pl-3 underline">hamid</h1>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, autem officiis. Similique facere adipisci temporibus.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md">BUY</Button>
                            <Button size="small" className="text-[#EC4B9A] font-semiebold text-lg">60$</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="shadow-lg shadow-pink-300  hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">
                    <Card sx={{ maxWidth: 280, borderRadius: "20px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/template.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                Tamplate
                            </Typography>
                            <div className="flex ">
                                <img src="/person1.jpg" className="rounded-full w-8 h-8 aspect-square mb-3 mt-2" />
                                <h1 className="flex items-center font-semibold text-xs pl-3 underline">hamid</h1>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, autem officiis. Similique facere adipisci temporibus.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md">BUY</Button>
                            <Button size="small" className="text-[#EC4B9A] font-semiebold text-lg">60$</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="shadow-lg shadow-pink-300  hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">
                    <Card sx={{ maxWidth: 280, borderRadius: "20px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/painting.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                Painting
                            </Typography>
                            <div className="flex ">
                                <img src="/person1.jpg" className="rounded-full w-8 h-8 aspect-square mb-3 mt-2" />
                                <h1 className="flex items-center font-semibold text-xs pl-3 underline">hamid</h1>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, autem officiis. Similique facere adipisci temporibus.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md">BUY</Button>
                            <Button size="small" className="text-[#EC4B9A] font-semiebold text-lg">60$</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="shadow-lg shadow-pink-300  hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">
                    <Card sx={{ maxWidth: 280, borderRadius: "20px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/audioboook.webp"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                audiobook
                            </Typography>
                            <div className="flex ">
                                <img src="/person1.jpg" className="rounded-full w-8 h-8 aspect-square mb-3 mt-2" />
                                <h1 className="flex items-center font-semibold text-xs pl-3 underline">hamid</h1>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, autem officiis. Similique facere adipisci temporibus.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md">BUY</Button>
                            <Button size="small" className="text-[#EC4B9A] font-semiebold text-lg">60$</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="shadow-lg shadow-pink-300  hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">
                    <Card sx={{ maxWidth: 280, borderRadius: "20px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/audiobook-2.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                E-booK
                            </Typography>
                            <div className="flex ">
                                <img src="/person1.jpg" className="rounded-full w-8 h-8 aspect-square mb-3 mt-2" />
                                <h1 className="flex items-center font-semibold text-xs pl-3 underline">hamid</h1>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, autem officiis. Similique facere adipisci temporibus.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md">BUY</Button>
                            <Button size="small" className="text-[#EC4B9A] font-semiebold text-lg">60$</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="shadow-lg shadow-pink-300  hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">
                    <Card sx={{ maxWidth: 280, borderRadius: "20px" }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/design1.webp"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                LOGO Design
                            </Typography>
                            <div className="flex ">
                                <img src="/person1.jpg" className="rounded-full w-8 h-8 aspect-square mb-3 mt-2" />
                                <h1 className="flex items-center font-semibold text-xs pl-3 underline">hamid</h1>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, autem officiis. Similique facere adipisci temporibus.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md">BUY</Button>
                            <Button size="small" className="text-[#EC4B9A] font-semiebold text-lg">60$</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="text-white font-light text-sm bg-[#EC4B9A] w-fit px-14 py-2 rounded-3xl">Product</button>
                <button className="text-[#EC4B9A] font-light text-sm border-2 ml-3 w-fit px-14 py-2 rounded-3xl">LOGIN</button>

            </div>
        </>
    )
}