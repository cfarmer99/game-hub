import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";

import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //map platform slug to icon
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    web: BsGlobe,
  };
  return (
    <>
      {" "}
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            color="gray.500"
            key={platform.id}
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
