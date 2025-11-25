import React, { useEffect, useState } from "react";
import { useApi } from "../api/common-hook/useApi";
import { endPoints } from "../api/common-hook/api-end-points";

import { FiMenu, FiThermometer, FiUserCheck, FiCoffee } from "react-icons/fi";
import HomeSlider from "./Slider";
import Button from "./common/Button";
import Modal from "./common/Modal";
import Tabs from "./common/Tabs";
import Dropdown from "./common/Dropdown";
import Accordion from "./common/Accordion";

const featureIcons: any = {
  "Menu variations": FiMenu,
  "Cooking warm": FiThermometer,
  "Best chef": FiUserCheck,
  "Fast food": FiCoffee,
};

const Home = () => {
  // const { data, request } = useApi();
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const categories = [
    { name: "Vegetarian", value: "veg" },
    { name: "Non-Veg", value: "non-veg" },
    { name: "Vegan", value: "vegan" },
    { name: "Gluten Free", value: "gluten-free" },
  ];

  // useEffect(() => {
  //   request("get", endPoints.popularProducts, null, null);
  // }, [request]);

  // console.log(data);
  const features = [
    { title: "Menu variations" },
    { title: "Cooking warm" },
    { title: "Best chef" },
    { title: "Fast food" },
  ];

  return (
    <div className="flex flex-col space-y-5">
      <HomeSlider />
      <div>
        {" "}
        <Button
          label="Primary"
          variant="primary"
          onClick={() => setVisible(true)}
        />
        <Button label="Primary" variant="outline" />
        <Button label="Primary" variant="tertiary" />
        <Modal
          size="lg"
          visible={visible}
          onHide={() => setVisible(false)}
          header="Edit Profile"
          footer={
            <>
              <Button
                label="Cancel"
                variant="tertiary"
                onClick={() => setVisible(false)}
              />
              <Button label="Save" variant="primary" />
            </>
          }
        >
          <p className="text-gray-700">
            Here is your modal content like forms or messages.
          </p>
        </Modal>
        <Dropdown
          placeholder="Select Category"
          items={categories}
          onSelect={(value) => {
            setSelectedCategory(value);
            console.log("Selected:", value);
          }}
          className="w-64"
        />
        <Accordion
          allowMultiple={true}
          items={[
            {
              title: "Account Settings",
              content: (
                <p>
                  Change your email, username, password and profile options.
                </p>
              ),
            },
            {
              title: "Notifications",
              content: <p>Manage your notification preferences.</p>,
            },
            {
              title: "Privacy",
              content: <p>Control what information is shared.</p>,
            },
          ]}
        />
        <Tabs
          defaultValue="general"
          tabs={[
            {
              label: "General",
              value: "general",
              content: <p className="text-gray-700">General settings here.</p>,
            },
            {
              label: "Profile",
              value: "profile",
              content: <p className="text-gray-700">Profile form goes here.</p>,
            },
            {
              label: "Security",
              value: "security",
              content: <p className="text-gray-700">Security options here.</p>,
            },
          ]}
        />
      </div>

      <div className="w-full bg-white py-16 px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-gray-500 font-semibold">
            FEATURES
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Get a many of interesting <br /> features.
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((item, idx) => {
            const Icon = featureIcons[item.title];

            return (
              <div
                key={idx}
                className="group
                bg-gradient-to-b from-gray-50 to-gray-100
                text-gray-800 rounded-2xl p-8 pt-16 relative 
                transform transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
                hover:from-orange-500 hover:to-orange-600 hover:text-white
              "
              >
                {/* ICON */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div
                    className="
                    w-20 h-20 rounded-full bg-white p-5 shadow-xl 
                    flex items-center justify-center
                    transition-colors duration-300
                    group-hover:bg-orange-100
                  "
                  >
                    <Icon
                      className="text-orange-500 transition-colors duration-300 group-hover:text-orange-600"
                      size={30}
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-center mt-2 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-center mt-2 text-sm transition-colors duration-300 group-hover:text-orange-100">
                  Sed ut perspiciatis unde omnis iste natus error
                </p>

                {/* LINK */}
                <p
                  className="
                  text-gray-800 font-semibold text-center mt-4 cursor-pointer 
                  underline underline-offset-4 decoration-gray-500/70
                  transition-colors duration-300
                  group-hover:text-white group-hover:decoration-white/70
                "
                >
                  Learn More →
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
