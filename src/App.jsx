import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoEyeOutline, IoChatboxOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import data from "./data.json";
import "./App.css";
import book from "./assets/book.jpg";
import ramen from "./assets/ramen.jpg";
import tape from "./assets/tape.jpg";
import mypic from "./assets/bayo.jpg";
import alien from "./assets/alien.jpg";
import neon from "./assets/neon.jpg";
import school from "./assets/school.jpeg";
import cooltape from "./assets/cooltape.jpg";
import camera from "./assets/camera.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdArrowUpward } from "react-icons/md";
function App() {
	const [active, setactive] = useState(false);
	const handleactive = () => {
		setactive(!active);
	};

	return (
		<div className="w-[100%] scroll-smooth overflow-x-hidden">
			<nav className="flex w-[100%] justify-between border-b border-gray-900 ">
				<div className="flex border-r border-gray-900 p-2 sm:hidden">
					<input type="search" placeholder="Search...      " />
					<CiSearch size={25} />
				</div>
				<div
					onClick={handleactive}
					className="sm:hidden transition ease-in-out duration-300 flex justify-center items-center mr-2 absolute right-0 z-20 mt-2">
					{active ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
				</div>
				<ul
					className={
						active
							? "w-full h-screen bg-white z-10 flex flex-col gap-10 justify-center items-center absolute"
							: "hidden"
					}>
					<a href="#home" className="text-2xl hover:text-blue-600">
						Home
					</a>
					<a href="#about" className="text-2xl hover:text-blue-600">
						About
					</a>
					<a href="#blog" className="text-2xl hover:text-blue-600">
						{" "}
						My Blog
					</a>
					<a href="#contact" className="text-2xl hover:text-blue-600">
						Contact
					</a>
					<div className="mb-10 flex gap-6 mx-auto my-10">
						<a href="https://github.com/adeboyega">
							<FaGithub size={30} />
						</a>
						<a href="https://x.com/Bayo_6">
							<FaXTwitter size={30} />{" "}
						</a>
						<a href="https://abayomiaremo.netlify.app/www.linkedin.com/in/abayomi-aremo">
							{" "}
							<FaLinkedin size={30} />
						</a>
						<a href="https://abayomiaremo.netlify.app/">
							<IoMdPersonAdd size={30} />{" "}
						</a>
					</div>
				</ul>
			</nav>
			<section className="w-full h-screen flex flex-col items-center text-center">
				<div className="w-full p-5 flex flex-col gap-4">
					<h2 className="text-4xl font-bold sm:text-7xl">Train of Thought</h2>
					<p className="text-md font-light tracking-[7px]">
						EVERYTHING IS PERSONAL INCLUDING THIS BLOG.
					</p>
				</div>
				<div className="hidden w-full h-16 sm:flex justify-center items-center border-t border-gray-900">
					<ul className="hidden sm:flex justify-center items-center gap-6 border-x h-full border-gray-900 w-[90%]">
						<a
							href="#home"
							className="text-xl hover:text-blue-600 border-r h-full px-6 flex justify-center items-center border-gray-900">
							Home
						</a>
						<a
							href="#about"
							className="text-xl hover:text-blue-600 border-r h-full px-6 flex justify-center items-center border-gray-900">
							About
						</a>
						<a
							href="#blog"
							className="text-xl hover:text-blue-600 border-r h-full px-6 flex justify-center items-center border-gray-900">
							{" "}
							My Blog
						</a>
						<a
							href="#contact"
							className="text-xl hover:text-blue-600 border-r h-full px-6 flex justify-center items-center border-gray-900">
							Contact
						</a>
						<div className="flex p-2">
							<input type="search" placeholder="Search...      " />
							<CiSearch size={25} />
						</div>
						<div className="mb-10 gap-6 mx-auto my-10 text-2xl  border-l h-full px-8 flex justify-center items-center border-gray-900">
							<a href="https://github.com/adeboyega" className="hover:text-blue-600">
								<FaGithub size={30} />
							</a>
							<a href="https://x.com/Bayo_6" className="hover:text-blue-600">
								<FaXTwitter size={30} />{" "}
							</a>
							<a href="https://abayomiaremo.netlify.app/www.linkedin.com/in/abayomi-aremo" className="hover:text-blue-600">
								{" "}
								<FaLinkedin size={30} />
							</a>
							<a href="https://abayomiaremo.netlify.app/" className="hover:text-blue-600">
								<IoMdPersonAdd size={30} />{" "}
							</a>
						</div>
					</ul>
				</div>
				<div className="w-full h-[85%] border border-gray-900 flex justify-center items-center">
					<div className="w-[80%] border border-gray-900 h-[85%] my-10">
						<img
							src={book}
							alt="book"
							className=" h-[60%] w-full object-cover"
						/>
						<p className="border border-gray-900 px-6 py-2 sm:w-[80%] w-[80%] -translate-y-64 bg-white tracking-[5px] text-sm sm:text-xl">
							FEATURED POST
						</p>
						<div className="w-[85%] mx-auto flex flex-col text-start gap-3">
							<p className="text-sm font-extralight">
								May 24,2024 * <span>2 min</span>
							</p>
							<h3 className="text-2xl font-bold hover:text-blue-700">
								Back to Fiction : <span>What I'm Reading This Summer</span>
							</h3>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full mt-20">
				<div className="w-full h-[300px] flex flex-col justify-center text-start gap-6 p-4">
					<h2 className="text-2xl font-bold mx-auto">Never Miss a New Post.</h2>
					<p>Enter your email *</p>
					<div className="flex gap-2 justify-center items-center w-full">
						<input type="email" className="border-b border-gray-900 w-[70%]" />{" "}
						<button className="bg-blue-700 px-4 py-2 text-white">
							Subscribe
						</button>
					</div>
				</div>
				</section>
				
			<div className="sm:flex border-t border-gray-900 ">
			<div className="w-full flex flex-col justify-center items-center gap-6 mb-20 sm:p-10">
					<h3 className="text-3xl font-light tracking-[16px] px-9 py-6">
						TRAIN OF THOUGHT
					</h3>
					<div className="w-[90%] sm:w-[70%] sm:mx-auto border border-gray-900 sm:flex">
						<img src={ramen} alt="ramen" className="sm:w-[40%] object-cover sm:mr-2" />
						<div className="w-[85%] mx-auto flex flex-col text-start gap-3 mt-[40px]">
							<p className="text-sm font-extralight">
								May 24,2024 * <span>1 min</span>
							</p>
							<h3 className="text-2xl font-bold text-blue-700">
								{" "}
								Do Not Leave Tokyo Before Eating This Ramen{" "}
							</h3>
							<p>
								Creating a blog post subtitle that summarizes your post in a few
								short, punchy sentences and ...
							</p>
							<div className="flex justify-between mb-5 border-t border-gray-500 p-3 mt-10">
								<div className="flex gap-4">
									<span className="flex gap-2 items-center justify-center">
										<IoEyeOutline size={25} />0
									</span>
									<span className="flex gap-2 items-center justify-center">
										<IoChatboxOutline size={20} />0
									</span>{" "}
								</div>{" "}
								<span className="flex">
									12 <CiHeart size={25} className="text-red-700 font-bold" />
								</span>
							</div>
						</div>
					</div>
					{data.map((item, index) => (
						<div key={index} className="w-[90%] sm:w-[70%] sm:mx-auto border border-gray-900 sm:flex">
							<img src={tape} alt={item.header} className="sm:w-[40%] object-cover sm:mr-2" />
							<div className="w-[85%] mx-auto flex flex-col text-start gap-3 mt-[40px]">
								<p className="text-sm font-extralight">
									{item.date} * <span>{item.min}</span>
								</p>
								<h3 className="text-2xl font-bold hover:text-blue-700">
									{item.header}
								</h3>
								<p className="hover:text-blue-700">{item.writeup}</p>
								<div className="flex justify-between mb-5 border-t border-gray-500 p-3 mt-10">
									<div className="flex gap-4">
										<span className="flex gap-2 items-center justify-center">
											<IoEyeOutline size={25} />0
										</span>
										<span className="flex gap-2 items-center justify-center">
											<IoChatboxOutline size={20} />0
										</span>{" "}
									</div>{" "}
									<span className="flex">
										12 <CiHeart size={25} className="text-red-700 font-bold" />
									</span>
								</div>
							</div>
						</div>
					))}

					<button className="px-8 py-2 sm:px-16 sm:py-8 bg-blue-700 text-white my-10 rounded-lg">
						<p className="sm:text-2xl">More Posts</p>
					</button>
				</div>
			{/* //otherside */}
			<div className="sm:flex sm:flex-col sm:w-[50%] sm:border-l sm:border-gray-900 p-4">
				<section
				id="#about"
				className="w-full mb-20 flex flex-col justify-center p-4 border-y border-gray-900 sm:border-gray-50 ">
				<h3 className="text-3xl font-light tracking-[16px] py-6 mt-10">
					ABOUT ME
				</h3>
				<img src={mypic} alt="mypic" className="w-[80%] rounded-lg mx-auto" />
				<div className="w-[80%] m-10 mx-auto">
					<p>
						Hi there 👋 I'm Abayomi Aremo I am a FULLSTACK software developer,
						passionate about building quality solutions and exploring modern
						innovations in technology. As a developer, i possess an obsessive
						attention to detail, and undying love in building solutions that
						make a difference .
					</p>
				</div>
				<a
					href="https://abayomiaremo.netlify.app/"
					className=" hover:text-blue-600 mb-10">
					Read More ...
				</a>
			</section>
			<section
				id="#about"
				className="w-full mb-20 flex flex-col justify-center p-4 border-b border-gray-900 ">
				<h3 className="text-3xl font-light tracking-[16px] py-6 mt-10">
					FOLLOW ME{" "}
				</h3>

				<div className="grid grid-cols-2 ">
					<img src={alien} alt="image" className="w-40 h-40 mx-auto" />
					<img src={book} alt="image" className="w-40 h-40 mx-auto" />
					<img src={mypic} alt="image" className="w-40 h-40 mx-auto" />
					<img src={school} alt="image" className="w-40 h-40 mx-auto" />
					<img src={neon} alt="image" className="w-40 h-40 mx-auto" />
					<img src={camera} alt="image" className="w-40 h-40 mx-auto" />
					<img src={cooltape} alt="image" className="w-40 h-40 mx-auto" />
					<img src={tape} alt="image" className="w-40 h-40 mx-auto" />
				</div>
				<div className="mb-10 flex gap-6 mx-auto my-10">
					<a href="https://github.com/adeboyega">
						<FaGithub size={30} />
					</a>
					<a href="https://x.com/Bayo_6">
						<FaXTwitter size={30} />{" "}
					</a>
					<a href="https://abayomiaremo.netlify.app/www.linkedin.com/in/abayomi-aremo">
						{" "}
						<FaLinkedin size={30} />
					</a>
					<a href="https://abayomiaremo.netlify.app/">
						<IoMdPersonAdd size={30} />{" "}
					</a>
				</div>
			</section>
			<section>
				<div className="mb-20 flex flex-col gap-2 justify-center ">
					<h3 className="text-3xl font-light tracking-[16px] px-9 py-6">
						SUBSCRIBE
					</h3>

					<div className="w-full flex flex-col justify-center items-center gap-2">
						<p>Enter your email *</p>
						<input
							type="email"
							className="w-[85%] p-2 border border-gray-900"
						/>
						<input
							type="submit"
							className="w-[85%] p-2 bg-blue-800 text-white"
						/>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col gap-4 justify-center items-center pb-20 p-4 border-t border-gray-900">
				<h3 className="text-3xl font-light tracking-[16px] mt-10">
					MY PICK OF THE MONTH
				</h3>
				<img src={cooltape} alt="tape" className="w-[90%]" />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
					tempora. Nam et animi, non autem molestias necessitatibus eum ex
					voluptatum possimus nihil sint aliquid aliquam in voluptatem totam,
					corrupti quas?
				</p>
			</section>
			</div>
			</div>
			<section className="flex flex-col items-center w-full text-center">
				<MdArrowUpward size={30} />
				<h2 className="text-2xl font-bold">
					Drop Me a Line, Let Me Know What You Think
				</h2>
				<form action="submit" className="w-full h-[80%] p-10 gap-6 flex flex-col sm:justify-center ">
					<p className="-translate-x-24 sm:-translate-x-60">First Name</p> 
					<input
						type="text"
						className="w-[90%] sm:w-[50%] border-b border-gray-800 mx-auto"
					/>
					<p className="-translate-x-24 sm:-translate-x-60">Last Name</p>
					<input
						type="text"
						className="w-[90%] sm:w-[50%] border-b border-gray-800 mx-auto"
					/>
					<p className="-translate-x-28 sm:-translate-x-60">Email* </p>
					<input
						type="email"
						className="w-[90%] sm:w-[50%] border-b border-gray-800 mx-auto"
					/>
					<p className="-translate-x-24 sm:-translate-x-60">Message ....</p>
					<input
						type="textfeild"
						className="w-[90%] sm:w-[50%] border-b border-gray-800 mx-auto"
					/>
					<button className="w-[80%] sm:w-[50%] mx-auto bg-blue-700 text-white py-4 hover:bg-black hover:text-gray-50">
						Submit
					</button>
				</form>
			</section>
			<footer className="flex flex-col gap-2 justify-center items-center mb-10 bg-gray-200 p-4 absolute right-0 w-full">
				<h3>@ 2024 by Abayomi Aremo.</h3>
				<h3>Powered and secured by Bayo🤞</h3>
			</footer>
		</div>
	);
}

export default App;
