"use client";
"use client";

import * as React from "react";
import { Dropdown } from "flowbite-react";
export function DropdownMenu() {
  return (
    <div className="h-[90px] w-full bg-[#022278] flex justify-evenly font-semibold text-white text-2xl">
      <Dropdown label="Restaurants" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg focus:">
          Food
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Café
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Juice Bar
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Pizza
        </Dropdown.Item>
      </Dropdown>
      <Dropdown label="Education" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          IT Course
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          English
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Chinese
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Khmer
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Math
        </Dropdown.Item>
      </Dropdown>
      <Dropdown label="Auto Services" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Auto Repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Car Repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Car Wash
        </Dropdown.Item>
      </Dropdown>
      <Dropdown label="Home Services" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Electricians
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Contractores
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Cleaners
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          HVAC
        </Dropdown.Item>
      </Dropdown>
      <Dropdown label="Electronices" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          TV and audio repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Computer repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Camera repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          Phone repair
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
export default DropdownMenu;
