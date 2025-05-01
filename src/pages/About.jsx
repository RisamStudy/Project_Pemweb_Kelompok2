import React from "react";
import TopBanner from "../Components/TopBanner";
import trip from "../assets/trip.gif";
import time from "../assets/fire-time.gif";
import price from "../assets/best-price.gif";

const About = () => {
  return (
    <div>
      <TopBanner text="About" />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row px-4 md:px-0 gap-4">
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Travel "
                className="rounded-lg"
                loading="lazy"
              />
              <div className="absolute bottom-[45%] right-0 p-4 bg-red-500 text-white  font-bold md:text-4xl rounded-lg">
                How We Are Best <br /> For Travel !
              </div>
            </div>
            <h1 className="md:text-4xl font-bold mt-6 mb-4 text-3xl">
              How We Nest For Travel !
            </h1>
            <p className="text-gray-500">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              accusantium maxime quidem facilis praesentium, voluptates quis
              fuga repudiandae. Commodi corporis nesciunt eligendi tenetur iure
              illum optio dolor repellat nihil, ratione earum iusto magni eum,
              libero dolore deleniti nemo qui vel ex atque harum sapiente
              deserunt? Assumenda, tempora fugit laudantium eveniet doloremque
              illo adipisci accusantium numquam omnis tempore voluptates, labore
              aut ea perspiciatis consectetur nihil provident optio. Itaque
              ipsam sunt porro accusantium hic. Blanditiis minus fugit hic
              aliquid voluptate, quaerat necessitatibus officiis odio alias enim
              inventore dignissimos? Architecto quidem illum nihil beatae ullam
              veritatis ea nostrum molestias ab rerum expedita voluptatum hic
              quas porro error vel enim obcaecati in, consectetur perferendis
              ratione provident at optio sapiente! Quam, saepe officia aliquid
              porro neque suscipit sed tempore asperiores quaerat quisquam
              recusandae optio consectetur ipsa rem commodi maxime excepturi
              ipsum veritatis in quibusdam nobis. Pariatur veniam id facilis
              delectus suscipit voluptatibus beatae, maxime architecto.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={trip} alt="" className="w-20" loading="lazy" />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">
                    50+ Destination
                  </h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">
                    We offer the best travel experiences with personalized
                    service and unbeatable prices.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 my-4 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={time} alt="" className="w-20" loading="lazy" />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">
                    Super Fast Booking
                  </h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">
                    We offer the best travel experiences with personalized
                    service and unbeatable prices.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={price} alt="" className="w-20" loading="lazy" />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">
                    Best price
                  </h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">
                    We offer the best travel experiences with personalized
                    service and unbeatable prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
