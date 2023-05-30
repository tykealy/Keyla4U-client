import { Box, Container, Typography, Icon } from "@mui/material";
import Image from "next/image";
import Logo from "./../../public/Logo.png";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// An example array of social media links
const socialLinks = [
  { name: "Facebook", url: "https://web.facebook.com/tykeaboyloy" },
  { name: "Instagram", url: "https://www.instagram.com/cadtofficial/" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/cambodia-academy-of-digital-technology/",
  },
];

const footerNav = [
  { page: "Club", link: "/clubs" },
  { page: "Favorites", link: "/favorites" },
  { page: "Booked", link: "/booked" },
];

const map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.4533071057604!2d104.8825480094697!3d11.590995788564166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095227f9ee18e5%3A0xb4dd959435c6e70e!2sReal%20Soccer!5e0!3m2!1sen!2skh!4v1685377259265!5m2!1sen!2skh";

export default function Footer() {
  // using a theme breakpoint to detect mobile devices
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            maxWidth: "100%",
            height: "500px",
            paddingBottom: "0.5rem",
            paddingTop: "2rem",
            flexDirection: "column", // change flex direction on mobile
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "60%",
              flexDirection: "column", // change flex direction on mobile
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "1.5rem",
                    marginBottom: "0,5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Social Media
                </Typography>
                <Box
                  component="ul"
                  padding="0"
                  display="flex"
                  width="100%"
                  flexDirection="row"
                  justifyContent="space-evenly"
                >
                  {socialLinks.map((link) => (
                    <Link key={link.name} href={link.url}>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          marginX: "2rem",
                        }}
                      >
                        {link.name}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1.5rem",
                  marginBottom: "0,5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Linking
              </Typography>
              <Box
                component="ul"
                padding="0"
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                {footerNav.map((nav) => (
                  <Link key={nav.page} href={nav.link}>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        marginX: isMobile ? "2rem" : "0",
                      }}
                    >
                      {nav.page}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginRight: "0.5rem" }}>
            <iframe
              src={map}
              width="340"
              height="230"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <Image
              src={Logo}
              alt="Logo"
              width="100"
              height="100"
              style={{ margin: "0 auto" }}
            />
            <Typography sx={{ textAlign: "center" }}>
              ©Keyla4U. All rights reserved.
            </Typography>
          </Box>
          )
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            maxWidth: "100%",
            height: "350px",
            paddingBottom: "0.5rem",
            margin: "0",
            flexDirection: "row", // change flex direction on mobile
          }}
        >
          <Box sx={{ width: "20%", flexDirection: "column" }}>
            <Image src={Logo} alt="Logo" width="100" height="100" />
            <Typography>©Keyla4U. All rights reserved.</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "60%",
              flexDirection: "row", // change flex direction on mobile
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "1.5rem",
                    marginBottom: "0,5rem",
                    fontWeight: "bold",
                    textAlign: isMobile ? "center" : "",
                  }}
                >
                  Social Media
                </Typography>
                <Box
                  component="ul"
                  padding="0"
                  display="flex"
                  width={isMobile ? "100%" : ""}
                  flexDirection="column"
                  justifyContent="space-evenly"
                >
                  {socialLinks.map((link) => (
                    <Link key={link.name} href={link.url}>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          marginX: "0",
                        }}
                      >
                        {link.name}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1.5rem",
                  marginBottom: "0,5rem",
                  fontWeight: "bold",
                }}
              >
                Linking
              </Typography>
              <Box
                component="ul"
                padding="0"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                {footerNav.map((nav) => (
                  <Link key={nav.page} href={nav.link}>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        marginX: isMobile ? "2rem" : "0",
                      }}
                    >
                      {nav.page}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginRight: "0.5rem" }}>
            <iframe
              src={map}
              width="340"
              height="230"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          )
        </Box>
      )}
    </Box>
  );
}
