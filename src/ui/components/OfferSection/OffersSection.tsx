// "use client";

// import { Box, Typography, Card, Button } from "@mui/material";
// import styles from "../../styles/fonts.module.css";
// import { OfferCardProps } from "@/typescript/interface/HomepageInterfaces";

// function OfferCard({
//   image,
//   subtitle,
//   title,
//   code,
//   button,
//   titleColor = "#fff",
// }: OfferCardProps) {
//   return (
//     <Card
//       sx={{
//         position: "relative",
//         height: 150,
//         borderRadius: 4,
//         boxShadow: 4,
//         overflow: "hidden",
//       }}
//     >
//       <Box
//         component="img"
//         src={image}
//         alt={title}
//         sx={{
//           position: "absolute",
//           inset: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "contain",
//         }}
//       />

//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           paddingX: 2,
//           paddingY: 1.5,
//           textAlign: "left",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//         }}
//       >
//         <Typography
//           variant="body2"
//           sx={{
//             width: "180px",
//             fontWeight: 500,
//             color: "#fff",
//             textShadow: "0px 1px 3px rgba(0,0,0,0.6)",
//           }}
//         >
//           {subtitle}
//         </Typography>

//         <Typography
//           variant="h6"
//           fontWeight="bold"
//           sx={{
//             // mt: 0.5,
//             color: titleColor,
//             textShadow: "0px 1px 3px rgba(0,0,0,0.4)",
//           }}
//         >
//           {title}
//         </Typography>

//         {code && (
//           <Box
//             sx={{
//               mt: 2,
//               border: "1px dashed #B3843F",
//               borderRadius: 1.5,
//               px: 1.5,
//               py: 1,
//               bgcolor: "#fff",
//               color: "#B3843F",
//               textAlign: "center",
//               width: "fit-content",
//               boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
//             }}
//           >
//             <Typography
//               variant="caption"
//               sx={{ display: "block", fontWeight: 600, lineHeight: 1 }}
//             >
//               Use Code
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{
//                 fontWeight: 700,
//                 fontFamily: "monospace",
//                 letterSpacing: 1,
//                 lineHeight: 1.2,
//               }}
//             >
//               {code}
//             </Typography>
//           </Box>
//         )}

//         {button && (
//           <Button
//             disableElevation
//             sx={{
//               backgroundColor: "#fff",
//               color: "#B3843F",
//               "&:hover": {
//                 backgroundColor: "#B3843F",
//                 color: "#fff",
//               },
//               mt: 1,
//               borderRadius: 2,
//               px: 3,
//               py: 1,
//               fontWeight: "600",
//               textTransform: "none",
//               boxShadow: "0px 3px 6px rgba(0,0,0,0.3)",
//             }}
//           >
//             {button}
//           </Button>
//         )}
//       </Box>
//     </Card>
//   );
// }

// export default function OffersSection() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "white",
//         py: 8,
//         px: 3,
//         textAlign: "center",
//       }}
//     >
//       <Typography
//         variant="h4"
//         className="!font-semibold !text-3xl"
//         gutterBottom
//         sx={{ color: "#341D14", lineHeight: 1.3 }}
//       >
//         <span
//           className={`${styles.playfair} ${styles.gradientFont}`}
//           style={{ fontStyle: "italic", color: "#B3843F" }}
//         >
//           Hurry Up And Claim
//         </span>{" "}
//         This Limited Time <br />
//         <span
//           className={`${styles.playfair} ${styles.gradientFont}`}
//           style={{ fontStyle: "italic", color: "#B3843F" }}
//         >
//           Premium Offer For You
//         </span>
//       </Typography>

//       <Box
//         sx={{
//           mt: 6,
//           display: "grid",
//           gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
//           gap: 3,
//           maxWidth: "1200px",
//           mx: "auto",
//         }}
//       >
//         <OfferCard
//           image="/offer-Sec/img-1.png"
//           subtitle="New User Offer On"
//           title="First Booking"
//           code="LXFIRBK"
//           titleColor="#341D14"
//         />

//         <OfferCard
//           image="/offer-Sec/img-2.png"
//           subtitle="Avail ₹1000 Cashback"
//           title="Over ₹5000"
//           code="CASH1000"
//           titleColor="#B3843F"
//         />

//         <OfferCard
//           image="/offer-Sec/img-3.png"
//           subtitle="India’s Premium Value Hotels Starting Just"
//           title="₹999 Today"
//           button="Book Now"
//           titleColor="#341D14"
//         />
//       </Box>
//     </Box>
//   );
// }


"use client";

import { Box, Typography, Card, Button } from "@mui/material";
import styles from "../../styles/fonts.module.css";
import { OfferCardProps } from "@/typescript/interface/HomepageInterfaces";

function OfferCard({
  image,
  subtitle,
  title,
  code,
  button,
  titleColor = "#fff",
}: OfferCardProps) {
  return (
    <Card
      sx={{
        position: "relative",
        height: 150,
        borderRadius: 4,
        boxShadow: 4,
        overflow: "hidden",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          paddingX: 2,
          paddingY: 1.5,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            width: "180px",
            fontWeight: 500,
            color: "#fff",
            textShadow: "0px 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          {subtitle}
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            color: titleColor,
            textShadow: "0px 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          {title}
        </Typography>

        {code && (
          <Box
            sx={{
              mt: 2,
              border: "1px dashed #B3843F",
              borderRadius: 1.5,
              px: 1.5,
              py: 1,
              bgcolor: "#fff",
              color: "#B3843F",
              textAlign: "center",
              width: "fit-content",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            <Typography
              variant="caption"
              sx={{ display: "block", fontWeight: 600, lineHeight: 1 }}
            >
              Use Code
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                fontFamily: "monospace",
                letterSpacing: 1,
                lineHeight: 1.2,
              }}
            >
              {code}
            </Typography>
          </Box>
        )}

        {button && (
          <Button
            disableElevation
            sx={{
              backgroundColor: "#fff",
              color: "#B3843F",
              "&:hover": {
                backgroundColor: "#B3843F",
                color: "#fff",
              },
              mt: 1,
              borderRadius: 2,
              px: 3,
              py: 1,
              fontWeight: "600",
              textTransform: "none",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.3)",
            }}
          >
            {button}
          </Button>
        )}
      </Box>
    </Card>
  );
}

export default function OffersSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        py: 8,
        px: 3,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        className="!font-semibold !text-3xl"
        gutterBottom
        sx={{ color: "#341D14", lineHeight: 1.3 }}
      >
        <span
          className={`${styles.playfair} ${styles.gradientFont}`}
          style={{ fontStyle: "italic", color: "#B3843F" }}
        >
          Hurry Up And Claim
        </span>{" "}
        This Limited Time <br />
        <span
          className={`${styles.playfair} ${styles.gradientFont}`}
          style={{ fontStyle: "italic", color: "#B3843F" }}
        >
          Premium Offer For You
        </span>
      </Typography>

      <Box
        sx={{
          mt: 6,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <OfferCard
          image="/offer-Sec/img-1.png"
          subtitle="New User Offer On"
          title="First Booking"
          code="LXFIRBK"
          titleColor="#341D14"
        />

        <OfferCard
          image="/offer-Sec/img-2.png"
          subtitle="Avail ₹1000 Cashback"
          title="Over ₹5000"
          code="CASH1000"
          titleColor="#B3843F"
        />

        <OfferCard
          image="/offer-Sec/img-3.png"
          subtitle="India’s Premium Value Hotels Starting Just"
          title="₹999 Today"
          button="Book Now"
          titleColor="#341D14"
        />
      </Box>
    </Box>
  );
}
