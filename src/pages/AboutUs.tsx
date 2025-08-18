import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sasha R",
      image: "/20250804_182858278 (2).jpg",
      quote: "WE BRING THE ENERGY, HANDLE EVERY DETAIL, AND CRAFT UNFORGETTABLE MOMENTS. PROFESSIONALLY, PASSIONATELY, AND ALWAYS WITH A SMILE",
      description: "At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. We know what it takes to make a party unforgettable because we've been to enough events to know what works (and what doesn't). You'll never see us just standing around like mannequins—we bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long. Our crew is here to cater to every request with a smile, ensuring your event is not only seamless but full of life and fun. Because at the end of the day, your celebration deserves more than just a photo booth—it deserves an experience!"
    },
    {
      name: "Vick L",
      image: "/20250804_182858278 (2).jpg", 
      quote: "CREATING MEMORABLE EXPERIENCES THROUGH ATTENTION TO DETAIL AND GENUINE PASSION FOR EVERY EVENT WE SERVE",
      description: "At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. We know what it takes to make a party unforgettable because we've been to enough events to know what works (and what doesn't). You'll never see us just standing around like mannequins—we bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long. Our crew is here to cater to every request with a smile, ensuring your event is not only seamless but full of life and fun. Because at the end of the day, your celebration deserves more than just a photo booth—it deserves an experience!"
    },
    {
      name: "Prince A",
      image: "/20250804_182858278 (2).jpg",
      quote: "BRINGING CREATIVITY AND TECHNICAL EXPERTISE TO CAPTURE EVERY PERFECT MOMENT WITH STYLE AND PRECISION",
      description: "At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. We know what it takes to make a party unforgettable because we've been to enough events to know what works (and what doesn't). You'll never see us just standing around like mannequins—we bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long. Our crew is here to cater to every request with a smile, ensuring your event is not only seamless but full of life and fun. Because at the end of the day, your celebration deserves more than just a photo booth—it deserves an experience!"
    },
    {
      name: "Matthew L",
      image: "/20250804_182858278 (2).jpg",
      quote: "ENSURING EVERY PIECE OF EQUIPMENT RUNS FLAWLESSLY SO YOUR EVENT IS NOTHING SHORT OF SPECTACULAR",
      description: "At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. We know what it takes to make a party unforgettable because we've been to enough events to know what works (and what doesn't). You'll never see us just standing around like mannequins—we bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long. Our crew is here to cater to every request with a smile, ensuring your event is not only seamless but full of life and fun. Because at the end of the day, your celebration deserves more than just a photo booth—it deserves an experience!"
    },
    {
      name: "Victoria G",
      image: "/20250804_182858278 (2).jpg",
      quote: "MAKING EVERY CLIENT FEEL VALUED AND ENSURING THEIR VISION COMES TO LIFE WITH SEAMLESS COORDINATION",
      description: "At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. We know what it takes to make a party unforgettable because we've been to enough events to know what works (and what doesn't). You'll never see us just standing around like mannequins—we bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long. Our crew is here to cater to every request with a smile, ensuring your event is not only seamless but full of life and fun. Because at the end of the day, your celebration deserves more than just a photo booth—it deserves an experience!"
    },
    {
      name: "Sarah R",
      image: "/20250804_182858278 (2).jpg",
      quote: "CAPTURING AND SHARING THE MAGIC OF EVERY EVENT TO INSPIRE OTHERS AND SPREAD THE JOY OF CELEBRATION",
      description: "At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. We know what it takes to make a party unforgettable because we've been to enough events to know what works (and what doesn't). You'll never see us just standing around like mannequins—we bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long. Our crew is here to cater to every request with a smile, ensuring your event is not only seamless but full of life and fun. Because at the end of the day, your celebration deserves more than just a photo booth—it deserves an experience!"
    },
    {
      name: "Keval N",
      image: "/20250804_182858278 (2).jpg",
      quote: "PROVIDING RELIABLE SUPPORT AND TECHNICAL SKILLS TO ENSURE EVERY EVENT RUNS SMOOTHLY FROM START TO FINISH",
      description: "At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. We know what it takes to make a party unforgettable because we've been to enough events to know what works (and what doesn't). You'll never see us just standing around like mannequins—we bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long. Our crew is here to cater to every request with a smile, ensuring your event is not only seamless but full of life and fun. Because at the end of the day, your celebration deserves more than just a photo booth—it deserves an experience!"
    },
    {
      name: "Nivake S",
      image: "/20250804_182858278 (2).jpg",
      quote: "BRINGING ENTHUSIASM AND ORGANIZATIONAL EXCELLENCE TO CREATE THE PERFECT ATMOSPHERE FOR UNFORGETTABLE PHOTOS",
      description: "At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. We know what it takes to make a party unforgettable because we've been to enough events to know what works (and what doesn't). You'll never see us just standing around like mannequins—we bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long. Our crew is here to cater to every request with a smile, ensuring your event is not only seamless but full of life and fun. Because at the end of the day, your celebration deserves more than just a photo booth—it deserves an experience!"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-screen">
        <link rel="preload" as="image" href="/20250804_182858278 (2).jpg" fetchpriority="high" />
        <img
          src="/20250804_182858278 (2).jpg"
          alt="About Us - Project Party Productions"
          className="w-full h-full object-cover"
          fetchpriority="high"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
            <h2 className="text-3xl md:text-4xl font-semibold">Project Party Productions</h2>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Team Members</h2>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our passionate team of owner-operators brings years of experience and boundless energy to every event. 
              We don't just provide services – we create experiences that leave lasting impressions on you and your guests.
              Each member of our team is dedicated to making your celebration extraordinary.
            </p>
          </div>

          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="flex-shrink-0 lg:w-[65%]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                      fetchpriority="high"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-gray-800 mb-6 text-left">{member.name}</h3>
                    <p className="text-[#B5A99A] text-xl font-semibold mb-6 leading-tight text-left">
                      {member.quote}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-left">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;