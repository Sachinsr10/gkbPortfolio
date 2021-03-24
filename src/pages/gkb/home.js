import React, { Component } from "react";

import "./home.css";

import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Card from "@material-ui/core/Card";
import TrafficIcon from "@material-ui/icons/Traffic";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import tileData from "./galleryImages";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import GoogleMapReact from "google-map-react";
import KeyboardArrowUpRoundedIcon from "@material-ui/icons/KeyboardArrowUpRounded";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";

import aboutMe from "./allTextData";
import carouselImages from "./carouselImages";
import MenuIcon from "@material-ui/icons/Menu";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      lat: 59.95,
      lng: 30.33,
      zoom: 11,
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      selectedTab: "Home",
      toggle: false,
      mobileMenuOn: false,
    };
  }

  handleHamburgerClick() {
    if (this.state.mobileMenuOn) {
      this.setState({ mobileMenuOn: false });
    } else if (!this.state.mobileMenuOn) {
      this.setState({ mobileMenuOn: true });
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="site-wrapper">
        <div className="header-wrapper navbar-fixed-top">
          <div className="header-top-wrapper">
            <div className="container">
              <div className="row">
                <div className="right-container">
                  <div className="contact-info">
                    <i className="mgn-rght-7">
                      <CallIcon style={{ fontSize: "small" }} />
                    </i>
                    <a
                      className="txt-dec-none"
                      title="Phone num"
                      href={`tel:${aboutMe.contactNum}`}
                    >
                      {aboutMe.contactNum}
                    </a>
                  </div>
                  <div className="contact-info">
                    <i className="mgn-rght-7">
                      <MailOutlineIcon style={{ fontSize: "small" }} />
                    </i>
                    <a
                      className="txt-dec-none"
                      href={`mailto:${aboutMe.email}`}
                    >
                      {aboutMe.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-desktop">
            <div className="container">
              <div className="navbar-header disply-flex">
                <div className="navbar-brand">
                  <a>{aboutMe.name}</a>
                </div>
                <div className="main-menu-wrapper">
                  <div className="main-menu">
                    <ul className="menu-ul">
                      <li
                        className={
                          this.state.selectedTab === "Home"
                            ? "menu-li cursor-pointer txt-selected"
                            : "menu-li cursor-pointer"
                        }
                        onClick={() => this.setState({ selectedTab: "Home" })}
                      >
                        <a className="txt-dec-none" title="Home" href="/">
                          Home
                        </a>
                      </li>
                      <li
                        className={
                          this.state.selectedTab === "About"
                            ? "menu-li cursor-pointer txt-selected"
                            : "menu-li cursor-pointer"
                        }
                        onClick={() => this.setState({ selectedTab: "About" })}
                      >
                        <a className="txt-dec-none" title="About" href="#about">
                          About
                        </a>
                      </li>
                      <li
                        className={
                          this.state.selectedTab === "Timeline"
                            ? "menu-li cursor-pointer txt-selected"
                            : "menu-li cursor-pointer"
                        }
                        onClick={() =>
                          this.setState({ selectedTab: "Timeline" })
                        }
                      >
                        <a
                          className="txt-dec-none"
                          title="Timeline"
                          href="#timeline"
                        >
                          Timeline
                        </a>
                      </li>
                      <li
                        className={
                          this.state.selectedTab === "Gallery"
                            ? "menu-li cursor-pointer txt-selected"
                            : "menu-li cursor-pointer"
                        }
                        onClick={() =>
                          this.setState({ selectedTab: "Gallery" })
                        }
                      >
                        <a
                          className="txt-dec-none"
                          title="Gallery"
                          href="#gallery"
                        >
                          Galery
                        </a>
                      </li>
                      <li
                        className={
                          this.state.selectedTab === "Contact"
                            ? "menu-li cursor-pointer txt-selected"
                            : "menu-li cursor-pointer"
                        }
                        onClick={() =>
                          this.setState({ selectedTab: "Contact" })
                        }
                      >
                        <a
                          className="txt-dec-none"
                          title="Contact"
                          href="#contact"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="menu-li cursor-pointer">
                        <div className="call-us-button">
                          <CallOutlinedIcon
                            style={{ fontSize: "1.3rem", marginRight: "4px" }}
                          />
                          <a
                            className="txt-decoration-none"
                            title="Phone num"
                            href={`tel:${aboutMe.contactNum}`}
                          >
                            Call Us
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-hamburger">
            <div
              className="width-10"
              onClick={() => this.handleHamburgerClick()}
            >
              <MenuIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="width-80 txt-algn-cntr">{aboutMe.name}</div>
          </div>
          {this.state.mobileMenuOn && (
            <div className="mobile-menu">
              <div
                className="width-100 transist"
                onClick={() => this.handleHamburgerClick()}
              >
                <div className="menu-list">
                  <a className="mbl-menu-txt" title="Home" href="/">
                    Home
                  </a>
                </div>
                <div className="menu-list">
                  <a className="mbl-menu-txt" title="About" href="#about">
                    About
                  </a>
                </div>
                <div className="menu-list">
                  <a className="mbl-menu-txt" title="Timeline" href="#timeline">
                    Timeline
                  </a>
                </div>
                <div className="menu-list">
                  <a className="mbl-menu-txt" title="Gallery" href="#gallery">
                    Galery
                  </a>
                </div>
                <div className="menu-list">
                  <a className="mbl-menu-txt" title="Contact" href="#contact">
                    Contact
                  </a>
                </div>
                <div className="menu-list">
                  <div className="call-us-button">
                    <CallOutlinedIcon
                      style={{ fontSize: "1.3rem", marginRight: "4px" }}
                    />
                    <a
                      className="mbl-menu-txt"
                      title="Phone num"
                      href={`tel:${aboutMe.contactNum}`}
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Carousel  */}
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          {carouselImages.map((image) => (
            <div>
              <img src={image.img} />
              <p className="legend">{image.desc}</p>
            </div>
          ))}
        </Carousel>

        {/* About me  */}
        <div id="about" className="container height-633 margin-btm-30">
          <div className="about-header">About {aboutMe.name}</div>
          <div className="disply-flex-jst-cnt-sp-arnd flex-dir-rev">
            <div className="about-desc">
              <p>{aboutMe.aboutMeDesc}</p>
              <div className="pdng-btm-20">
                <Button variant="contained" color="primary">
                  Read More
                </Button>
              </div>
              <div className="disply-flex-jst-cnt-sp-evnly">
                <div
                  className="cursor-pointer"
                  onClick={() => window.open(aboutMe.fbLink, "_blank")}
                >
                  <FacebookIcon />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => window.open(aboutMe.twitLink, "_blank")}
                >
                  <TwitterIcon />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => window.open(aboutMe.instLink, "_blank")}
                >
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="about-photo">
              <div className="aboutMe-img">
                <img className="width-100" src={aboutMe.aboutMeImage} />
              </div>
            </div>
          </div>
        </div>

        {/* Social Causes  */}
        <div className="socila-cause-container height-633">
          <div className="about-header pdng-btm-20">Social Causes</div>
          <div className="disply-flex-jst-cnt-sp-evnly pdng-btm-20 scl-cause-flex-dir">
            <Card className="cards">
              <div className="disply-flex">
                <div className="width-40">
                  <TrafficIcon
                    style={{
                      fontSize: "xxx-large",
                      height: "90px",
                      color: "royalblue",
                    }}
                  />
                </div>
                <div className="width-60">
                  <div className="card-header">Traffic Management</div>
                  <div className="card-desc">
                    Decongestion of Arterial roads, radial roads and junctions
                    including Silk Board Junction, St. Johns Junction and Hosur
                    Road Junction.
                  </div>
                </div>
              </div>
            </Card>
            <Card className="cards">
              <div className="disply-flex">
                <div className="width-40">
                  <TrafficIcon
                    style={{
                      fontSize: "xxx-large",
                      height: "90px",
                      color: "royalblue",
                    }}
                  />
                </div>
                <div className="width-60">
                  <div className="card-header">Traffic Management</div>
                  <div className="card-desc">
                    Decongestion of Arterial roads, radial roads and junctions
                    including Silk Board Junction, St. Johns Junction and Hosur
                    Road Junction.
                  </div>
                </div>
              </div>
            </Card>
            <Card className="cards">
              <div className="disply-flex">
                <div className="width-40">
                  <TrafficIcon
                    style={{
                      fontSize: "xxx-large",
                      height: "90px",
                      color: "royalblue",
                    }}
                  />
                </div>
                <div className="width-60">
                  <div className="card-header">Traffic Management</div>
                  <div className="card-desc">
                    Decongestion of Arterial roads, radial roads and junctions
                    including Silk Board Junction, St. Johns Junction and Hosur
                    Road Junction.
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="disply-flex-jst-cnt-sp-evnly pdng-btm-20 scl-cause-flex-dir">
            <Card className="cards">
              <div className="disply-flex">
                <div className="width-40">
                  <TrafficIcon
                    style={{
                      fontSize: "xxx-large",
                      height: "90px",
                      color: "royalblue",
                    }}
                  />
                </div>
                <div className="width-60">
                  <div className="card-header">Traffic Management</div>
                  <div className="card-desc">
                    Decongestion of Arterial roads, radial roads and junctions
                    including Silk Board Junction, St. Johns Junction and Hosur
                    Road Junction.
                  </div>
                </div>
              </div>
            </Card>
            <Card className="cards">
              <div className="disply-flex">
                <div className="width-40">
                  <TrafficIcon
                    style={{
                      fontSize: "xxx-large",
                      height: "90px",
                      color: "royalblue",
                    }}
                  />
                </div>
                <div className="width-60">
                  <div className="card-header">Traffic Management</div>
                  <div className="card-desc">
                    Decongestion of Arterial roads, radial roads and junctions
                    including Silk Board Junction, St. Johns Junction and Hosur
                    Road Junction.
                  </div>
                </div>
              </div>
            </Card>
            <Card className="cards">
              <div className="disply-flex">
                <div className="width-40">
                  <TrafficIcon
                    style={{
                      fontSize: "xxx-large",
                      height: "90px",
                      color: "royalblue",
                    }}
                  />
                </div>
                <div className="width-60">
                  <div className="card-header">Traffic Management</div>
                  <div className="card-desc">
                    Decongestion of Arterial roads, radial roads and junctions
                    including Silk Board Junction, St. Johns Junction and Hosur
                    Road Junction.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Timeline  */}
        <div
          id="timeline"
          className="socila-cause-container height-633 margin-btm-30"
        >
          <div className="about-header pdng-btm-20">Timeline</div>
          <Timeline align="alternate">
            <TimelineItem>
              {/* <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    9:30 am
                                                </Typography>
                                            </TimelineOppositeContent> */}
              <TimelineSeparator>
                <TimelineDot>2020</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h1">
                    Eat
                  </Typography>
                  <Typography>Because you need strength</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              {/* <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    10:00 am
                                                 </Typography>
                                            </TimelineOppositeContent> */}
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {/* <LaptopMacIcon /> */}
                  2019
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h1">
                    Code
                  </Typography>
                  <Typography>Because it&apos;s awesome!</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  {/* <HotelIcon /> */}
                  2018
                </TimelineDot>
                <TimelineConnector className="secondaryTail" />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h1">
                    Sleep
                  </Typography>
                  <Typography>Because you need rest</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  {/*  <RepeatIcon /> */}
                  2017
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h1">
                    Repeat
                  </Typography>
                  <Typography>Because this is the life you love!</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  {/*  <RepeatIcon /> */}
                  2017
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h1">
                    Repeat
                  </Typography>
                  <Typography>Because this is the life you love!</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  {/*  <RepeatIcon /> */}
                  2017
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h1">
                    Repeat
                  </Typography>
                  <Typography>Because this is the life you love!</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  {/*  <RepeatIcon /> */}
                  2017
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h1">
                    Repeat
                  </Typography>
                  <Typography>Because this is the life you love!</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  {/*  <RepeatIcon /> */}
                  2017
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h1">
                    Repeat
                  </Typography>
                  <Typography>Because this is the life you love!</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        {/* Gallery  */}
        <div
          id="gallery"
          className="socila-cause-container height-633 margin-btm-30"
        >
          <div className="about-header pdng-btm-20">Gallery</div>
          <div className="gallery-root">
            <GridList cellHeight={180} className="gridList" cols={5}>
              <GridListTile key="Subheader" cols={5} style={{ height: "auto" }}>
                {/* <ListSubheader component="div">December</ListSubheader> */}
              </GridListTile>
              {tileData.map((tile, index) => (
                <GridListTile
                  key={tile.url}
                  className="img-tiles"
                  onClick={() =>
                    this.setState({ isOpen: true, photoIndex: index })
                  }
                >
                  <img src={tile.url} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${tile.title}`}
                        className="icon"
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>

          {isOpen && (
            <Lightbox
              className="img-overLay"
              mainSrc={tileData[photoIndex].url}
              nextSrc={tileData[(photoIndex + 1) % tileData.length]}
              prevSrc={
                tileData[(photoIndex + tileData.length - 1) % tileData.length]
              }
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + tileData.length - 1) % tileData.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % tileData.length,
                })
              }
            />
          )}
        </div>

        {/* Get in touch  */}
        <div id="contact" className="socila-cause-container">
          <div>
            <div className="about-header pdng-btm-20">Get In Touch</div>
            <div className="disply-flex-map width-100 just-cnt-cntr">
              <div className="width-50 map-height">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAgkHivqAMAd8VWtvt3YlIcWVvNY2A38DI",
                  }}
                  defaultCenter={this.state.center}
                  defaultZoom={this.state.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>

                {/*  <Map/> */}
              </div>
              <div className="width-30 map-address">
                <div className="adress-height">
                  <div className="adress-header">Head Office</div>
                  <div className="card-desc pdng-lft-8">
                    {aboutMe.officeAddress}
                  </div>
                </div>
                <div className="adress-height">
                  <div className="adress-header">Phone</div>
                  <div className="card-desc pdng-lft-8">
                    <a
                      className="txt-dec-none"
                      title="Phone num"
                      href={`tel:${aboutMe.contactNum}`}
                    >
                      {aboutMe.contactNum}
                    </a>
                  </div>
                </div>
                <div className="adress-height">
                  <div className="adress-header">Email</div>
                  <div className="card-desc pdng-lft-8">
                    <a
                      className="txt-dec-none"
                      href={`mailto:${aboutMe.email}`}
                    >
                      {aboutMe.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer footer-div">
          <div className="footer-txt">
            <div className="margin-btm-10">Follow us on</div>
            <div className="disply-flex just-cnt-spcBtwn">
              <FacebookIcon
                style={{ color: "white" }}
                className="cursor-pointer"
                onClick={() => window.open(aboutMe.fbLink, "_blank")}
              />
              <TwitterIcon
                style={{ color: "white" }}
                className="cursor-pointer"
                onClick={() => window.open(aboutMe.fbLink, "_blank")}
              />
              <InstagramIcon
                style={{ color: "white" }}
                className="cursor-pointer"
                onClick={() => window.open(aboutMe.fbLink, "_blank")}
              />
            </div>
          </div>
          <div className="footer-txt">
            <div className="dsp-flex-jst-flex-end">
              <div
                className="icon-border"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <KeyboardArrowUpRoundedIcon
                  style={{ color: "cadetblue", fontSize: "3rem" }}
                />
              </div>
            </div>
            <div className="align-right">{aboutMe.copyRights}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
