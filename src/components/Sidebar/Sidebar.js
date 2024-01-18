import ChatIcon from "@mui/icons-material/Chat";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import React from "react";
import "./sidebar.scss";
import SidebarRow from "./SidebarRow/SidebarRow";

function Sidebar({ profileSrc }) {
  return (
    <div className="sidebar">
      <SidebarRow src={profileSrc} title="Anurag Arwalkar" />
      <SidebarRow
        title="COVID-19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Marketplace" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar;
