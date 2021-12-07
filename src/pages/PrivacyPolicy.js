import React from 'react';








import { Button, Container,  Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import ima from "../images/money1.jpeg"

import { ThemeProvider } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { Box } from '@material-ui/system';
const useStyles = makeStyles(() => ({
  heading1: {
    marginTop: "4rem",
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    textAlign:"center"
  },
  heading: {
    marginTop: "1rem",
    fontSize: "1rem",
    fontWeight: "700",
    marginBottom: "1rem",
  },
}));
const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

export function PrivacyPolicy() {
  
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          backgroundImage: `url(${ima})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }}
        >
        <Container maxWidth="md"  sx={{ backgroundColor: 'background.default',opacity: ".9" }}>
          <Typography className={classes.heading1}>Privacy Policy </Typography>
          <Typography paragraph>
            Moneywise "the App or website" provides applications "the Service" to users who
            use gmail to power their finance. This Privacy Policy describes how
            personal information is collected, used, and shared when you install
            or use the App in connection with gmail.
          </Typography>
          <Typography className={classes.heading}>
            Personal Information the App Collects{" "}
          </Typography>
          <Typography paragraph>
            When you install the App, we are automatically able to access
            certain types of information from your Gmail account:
            <br></br>
            <ul>
              <li>Read email,drafts their labels tags and achievements.</li>
              <li>Read all your Transactions</li>
              <li>Group your transactions, other details.</li>
              
            </ul>
            Additionally, we collect the following types of personal information
            from you once you have registerd on this website: Information about you and
            others who may access the App on behalf of you store, such as your
            name, address, email address, phone number.
            <br></br>
            <br></br>
            We collect personal information directly from the relevant
            individual, through youraccount, or using the following
            technologies:Local Storage is used to store various things “Cookies” are data files that are placed on your
            device or computer and often include an anonymous unique identifier.
            For more information about cookies, and how to disable cookies,
            visit{" "}
            <a href="http://www.allaboutcookies.org">
              http://www.allaboutcookies.org{" "}
            </a>{" "}
            . “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps. “Web beacons,” “tags,”
            and “pixels” are electronic files used to record information about
            how you browse the Site.
            <br></br>
            <br></br>
            When you install and use our App, we do not collect, process or
            retain any personal data of the customers or visitors of your
            account.
          </Typography>
          <Typography className={classes.heading}>
            How Do We Use Your Personal Information?
          </Typography>
          <Typography paragraph>
            We use the personal information we collect from you in order to
            provide the Service and to operate our apps. Additionally, we use
            the personal information to: communicate with you, optimize or
            improve the Service, provide you with information about our
            products, and handle software bugs or support requests.
          </Typography>
          <Typography className={classes.heading}>
            Sharing Your Personal Information
          </Typography>
          <Typography paragraph>
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights
          </Typography>
          <Typography className={classes.heading}>
            Behavioural Advertising
          </Typography>
          <Typography paragraph>
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you. For more information about how targeted
            advertising works, you can visit the Network Advertising
            Initiative’s (“NAI”) educational page at{" "}
            <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work">
              {" "}
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </a>
            <br></br>
            <br></br>
            You can opt out of targeted advertising by:
            <ul>
              <li>
                FACEBOOK -{" "}
                <a href="https://www.facebook.com/settings/?tab=ad">
                  https://www.facebook.com/settings/?tab=ads
                </a>
              </li>
              <li>
                GOOGLE -
                <a href="https://www.google.com/settings/ads/anonymous">
                  {" "}
                  https://www.google.com/settings/ads/anonymous
                </a>
              </li>
              <li>
                BING -
                <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                  {" "}
                  https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                </a>
              </li>
            </ul>
          </Typography>
          <Typography className={classes.heading}>Your Rights</Typography>
          <Typography paragraph>
            You have the right to access personal information we hold about you
            and to ask that your personal information be corrected, updated, or
            deleted. If you would like to exercise this right, please contact us
            through the contact information below.
            <br></br>
            <br></br>
            Additionally, if you are a European resident we note that we are
            processing your information in order to fulfill contracts we might
            have with you, or otherwise to pursue our legitimate business
            interests listed above. Additionally, please note that your
            information will be transferred outside of Europe, including to
            Canada and the United States.
          </Typography>
          <Typography className={classes.heading}>Data Retention</Typography>

          <Typography paragraph>
            When you install the app, we will maintain your Information for our
            records unless and until you ask us to delete this information.
          </Typography>
          <Typography className={classes.heading}>Changes</Typography>

          <Typography paragraph>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </Typography>

          <Typography className={classes.heading}>Contact Us</Typography>

          <Typography paragraph>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at moneywisehelp@gmail.com{" "}
          </Typography>
          <Link to={"/"}>
            {" "}
            <Button className="btntwo" variant="contained" size="large">
              HOME
            </Button>
          </Link>
        </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
}



export default PrivacyPolicy;