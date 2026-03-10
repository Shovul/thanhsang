import profileImg from "./../assets/profile.jpg"

const Hero = () => {
  return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="hover-3d mr-10">
                {/* content */}
                <figure className="w-60 rounded-l">
                    <img
                    src={profileImg}
                    className="max-w-sm w-full object-cover rounded-lg shadow-2xl"
                    />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <h1 className="text-3xl md:text-5xl font-bold">I'm Thanh Sang, and I'm a</h1>
                <h1 className="font-bold text-2xl md:text-3xl py-4">
                        <span className="block">
                        A student of Saigon University
                        </span>

                        <span className="block">
                        <span className="bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent font-extrabold">Software engineer ● Full-stack</span>{" "}
                        <span>developer.</span>{" "}
                        </span>
                    </h1>
                <p className="py-6">
                    This space is for talking about the project I am woring on in my current course, Open source operating system development.
                </p>
                <button className="btn btn-primary">Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Hero

