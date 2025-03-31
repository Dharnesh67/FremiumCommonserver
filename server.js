// const express = require("express");
// const cors = require("cors");
// const fetch = require("node-fetch");
// const path = require("path");
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });
// app.get("/api/InfoStealer/username", async (req, res) => {
//   const { username } = req.query;
//   console.log("inside get info", username);
//   if (!username) {
//     return res.status(400).json({ error: "Username parameter is required" });
//   }
//   try {
//     // const cleanUsername = username.startsWith('@') ? username.substring(1) : username;
//     const apiUrl = `https://cavalier.hudsonrock.com/api/json/v2/osint-tools/search-by-username?username=${username}`;
//     console.log(apiUrl);
//     const options = { method: "GET" };
//     const response = await fetch(apiUrl, options);
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching TikTok data:", error);
//     res.status(500).json({ error: "Failed to fetch data. Please try again later." });
//   }
// });
// app.get("/api/InfoStealer/email", async (req, res) => {
//   const { email } = req.query;
//   console.log("inside get info", email);
//   if (!email) {
//     return res.status(400).json({ error: "Username parameter is required" });
//   }
//   try {
//     // const cleanUsername = username.startsWith('@') ? username.substring(1) : username;
//     const apiUrl = `https://cavalier.hudsonrock.com/api/json/v2/osint-tools/search-by-email?email=${email}`;
//     console.log(apiUrl);
//     const options = { method: "GET" };
//     const response = await fetch(apiUrl, options);
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching TikTok data:", error);
//     res.status(500).json({ error: "Failed to fetch data. Please try again later." });
//   }
// });
// app.get("/api/Callspy", async (req, res) => {
//   const { phone, apiKey } = req.query;
//   console.log("inside get info", phone, apiKey);
//   if (!phone) {
//     return res.status(400).json({ error: "Username parameter is required" });
//   }
//   try {
//     // const cleanUsername = username.startsWith('@') ? username.substring(1) : username;
//     const apiUrl = `https://callerapi.com/api/phone/info/${phone}`;
//     console.log(apiUrl);
//     const options = {
//       method: "GET",
//       headers: {
//         "X-Auth": apiKey,
//       },
//     };
//     const response = await fetch(apiUrl, options);
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching TikTok data:", error);
//     res.status(500).json({ error: "Failed to fetch data. Please try again later." });
//   }
// });
// app.get("/api/Linkedin/lookup", async (req, res) => {
//   const { url, apikey } = req.query;
//   // console.log("apikey:", apikey);
//   if (!url || !apikey) {
//     return res.status(400).json({ error: "Both url and apikey parameters are required" });
//   }

//   try {
//     console.log("Fetching data for:", url);
//     const apiUrl = `https://api.rocketreach.co/v2/api/person/lookup?li_url=${url}`;
//     console.log("apiUrl:", apiUrl);
//     const response = await fetch(`https://api.rocketreach.co/v2/api/person/lookup?li_url=${url}`, {
//       method: "GET",
//       headers: {
//         "Api-Key": apikey,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`);
//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Failed to fetch data. Please try again later." });
//   }
// });

// app.get("/api/Mail2Linkedin", async (req, res) => {
//   // const apiKey = import.meta.env.VITE_LINKEDIN_API_KEY;
//   const { email, apikey } = req.query;
//   console.log("inside get info", email);
//   if (!email) {
//     return res.status(400).json({ error: "Username parameter is required" });
//   }
//   try {
//     // const cleanUsername = username.startsWith('@') ? username.substring(1) : username;
//     console.log("inside try", email);
//     // console.log("inside try",apikey);
//     const apiUrl = `https://api.reversecontact.com/enrichment?apikey=${apikey}&email=${encodeURIComponent(
//       email
//     )}`;
//     console.log(apiUrl);
//     const options = { method: "GET" };
//     const response = await fetch(apiUrl, options);
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching  data:", error);
//     res.status(500).json({ error: "Failed to fetch data. Please try again later." });
//   }
// });

// // API route to proxy TikTok data requests
// app.get("/api/tiktok", async (req, res) => {
//   const { username } = req.query;

//   if (!username) {
//     return res.status(400).json({ error: "Username parameter is required" });
//   }

//   try {
//     const cleanUsername = username.startsWith("@") ? username.substring(1) : username;
//     const apiUrl = `https://jaefu3p97g.execute-api.us-east-1.amazonaws.com/default/smttab?username=${cleanUsername}`;

//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching TikTok data:", error);
//     res.status(500).json({ error: "Failed to fetch data. Please try again later." });
//   }
// });

// app.get("/get/Xscan/info", async (req, res) => {
//   const { username,apikey } = req.query;
//   console.log("inside get info", username);
//   if (!username || !apikey) {
//     return res.status(400).json({ error: "Username parameter is required" });
//   }
//   try {
//     const cleanUsername = username.startsWith("@") ? username.substring(1) : username;
//     const apiUrl = `https://api.twitterapi.io/twitter/user/info?userName=${username}`;
//     console.log(apiUrl);
//     const options = { method: "GET", headers: { "X-API-Key":apikey  } };
//     const response = await fetch(apiUrl, options);
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching TikTok data:", error);
//     res.status(500).json({ error: "Failed to fetch data. Please try again later." });
//   }
// });

// app.get("/api/Simspy", async (req, res) => {
//   const { phone, accountSid, authToken } = req.query;
//   console.log("inside get info", phone);
//   if (!phone) {
//     return res.status(400).json({ error: "Username parameter is required" });
//   }
//   try {
//     // const cleanUsername = phone.startsWith('@') ? username.substring(1) : username;
//     const url = `https://lookups.twilio.com/v2/PhoneNumbers/${phone}?Fields=line_type_intelligence`;
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         Authorization: "Basic " + btoa(accountSid + ":" + authToken),
//       },
//     });

//     if (!response.ok) throw new Error(`API error: ${response.statusText}`);
//     const data = await response.json();
//     console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching TikTok data:", error);
//     res.status(500).json({ error: "Failed to fetch data. Please try again later." });
//   }
// });
// app.get("/api/Social", async (req, res) => {
//   const { query,apiKey} = req.query;
//   console.log("inside get info", query);
//   if (!query) {
//     return res.status(400).json({ error: "Username parameter is required" });
//   }
//   try {
//     // const cleanUsername = phone.startsWith('@') ? username.substring(1) : username;
//     const response = await fetch("https://social-media-scanner1.p.rapidapi.com/check", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-RapidAPI-Host": "social-media-scanner1.p.rapidapi.com",
//         "X-RapidAPI-Key": apiKey,
//       },
//       body: JSON.stringify({
//         programs: ["facebook", "google", "instagram", "snapchat", "x"],
//         input: JSON.stringify(query),
//       }),
//     });
//     if (!response.ok) throw new Error(`API error: ${response.statusText}`);
//     const data = await response.json();
//     console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching Social data:", error);
//     res.status(500).json({ error: "Failed to fetch data. Please try again later." });
//   }
// });

// // Serve static files in production
// app.use(express.static(path.join(__dirname, "build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
 
 const app = express();
 const PORT = process.env.PORT || 3000;
 
 app.get("/", (req, res) => {
   res.send("Hello, World!");
 });
 
 app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
 });